import sys
import re
import itertools

from maintenance import utilities
import datastructure

def main(argv):
    config = utilities.get_config(argv[1])
    print("config file:")
    for item in config.items('config'):
        print("\t%s" % str(item))
    parse_genofile(config, fetch_parameters(config))

def fetch_parameters(config):
    config_dic = {}
    config_dic['inbredsetid'] = config.get('config', 'inbredsetid')
    config_dic["speciesid"] = datastructure.get_species(config_dic['inbredsetid'])[0]
    config_dic['genofreezeid'] = datastructure.get_genofreeze_byinbredsetid(config_dic['inbredsetid'])[0]
    config_dic['dataid'] = datastructure.get_nextdataid_genotype()
    config_dic['genofile'] = config.get('config', 'genofile')
    config_dic['snps'] = config.get('config', 'snps_file')
    config_dic['bimbam'] = config.get('config', 'bimbam_file')
    print("config dictionary:")
    for k, v in config_dic.items():
        print("\t%s: %s" % (k, v))
    return config_dic

def parse_genofile(config, config_dic):
    meta_dic = {}

    genofile = open(config_dic['genofile'], 'r')
    for line in genofile:
        line = line.strip()
        if len(line) == 0:
            continue
        if line.startswith('#'):
            continue
        if line.startswith('@'):
            line = line.strip('@')
            items = line.split(';')
            for item in items:
                kv = re.split(':|=', item)
                meta_dic[kv[0].strip()] = kv[1].strip()
            continue
        if line.lower().startswith("chr"):
            #
            print("geno file meta dictionary:")
            for k, v in meta_dic.items():
                print("\t%s: %s" % (k, v))
            #
            print("geno file head:\n\t%s" % line)
            strainnames = line.split()[3:]
            config_dic['strains'] = datastructure.get_strains_bynames(inbredsetid=config_dic['inbredsetid'], strainnames=strainnames, updatestrainxref="yes")
            continue

    #snps_file = open(config_dic['snps'], 'r')
    #bimbam_file = open(config_dic['bimbam'], 'r')
    with open(config_dic['snps'], 'r') as snps_fh, open(config_dic['bimbam'], 'r') as bimbam_fh:
        for line1, line2 in itertools.izip(snps_fh, bimbam_fh):
            marker_dic = parse_marker(line1, line2)
            marker_dic['genoid'] = check_or_insert_geno(config_dic, marker_dic)
            if check_genoxref(config_dic, marker_dic):
                continue
            insert_genodata(config, config_dic, marker_dic)
            insert_genoxref(config_dic, marker_dic)
            config_dic['dataid'] += 1
    genofile.close()

def parse_marker(line1, line2):
    marker_dic = {}
    snp_info = line1.split()
    marker_dic['chromosome'] = snp_info[2]
    marker_dic['locus'] = snp_info[0]
    marker_dic['mb'] = snp_info[1]
    geno_info = line2.split()
    marker_dic['values'] = geno_info[3:]
    return marker_dic


def check_or_insert_geno(config_dic, marker_dic):
    cursor, con = utilities.get_cursor()
    sql = """
        SELECT Geno.`Id`
        FROM Geno
        WHERE Geno.`SpeciesId`=%s
        AND Geno.`Name` like %s
        """
    cursor.execute(sql, (config_dic["speciesid"], marker_dic['locus']))
    result = cursor.fetchone()
    if result:
        genoid = result[0]
        print("get geno record: %d" % genoid)
    else:
        sql = """
            INSERT INTO Geno
            SET
            Geno.`SpeciesId`=%s,
            Geno.`Name`=%s,
            Geno.`Marker_Name`=%s,
            Geno.`Chr`=%s,
            Geno.`Mb`=%s
            """
        cursor.execute(sql, (config_dic['speciesid'], marker_dic['locus'], marker_dic['locus'], marker_dic['chromosome'], marker_dic['mb']))
        rowcount = cursor.rowcount
        genoid = con.insert_id()
        print("INSERT INTO Geno: %d record: %d" % (rowcount, genoid))
    return genoid

def check_genoxref(config_dic, marker_dic):
    cursor, con = utilities.get_cursor()
    sql = """
        select GenoXRef.*
        from GenoXRef
        where GenoXRef.`GenoFreezeId`=%s
        AND GenoXRef.`GenoId`=%s
        """
    cursor.execute(sql, (config_dic['genofreezeid'], marker_dic['genoid']))
    rowcount = cursor.rowcount
    return rowcount

def insert_genodata(config, config_dic, marker_dic):
    cursor, con = utilities.get_cursor()
    print("STRAINS:", len(config_dic['strains']))
    print("VALUES:", len(marker_dic['values']))
    for index, strain in enumerate(config_dic['strains']):
        strainid = strain[0]
        value = utilities.to_db_string(marker_dic['values'][index], None)
        if not value:
            continue
        #value = config.get('config', "genovalue_" + value)
        try:
            number = int(value)
        except:
            continue
        if not number in [-1, 0, 1]:
            continue
        sql = """
            INSERT INTO GenoData
            SET
            GenoData.`Id`=%s,
            GenoData.`StrainId`=%s,
            GenoData.`value`=%s
            """
        cursor.execute(sql, (config_dic['dataid'], strainid, number))

def insert_genoxref(config_dic, marker_dic):
    cursor, con = utilities.get_cursor()

    #ZS: I guess just fill in the cM field with the Mb when there's no cM, at least for now
    if 'cm' in marker_dic:
        pos = marker_dic['cm']
    else:
        pos = marker_dic['mb']

    sql = """
        INSERT INTO GenoXRef
        SET
        GenoXRef.`GenoFreezeId`=%s,
        GenoXRef.`GenoId`=%s,
        GenoXRef.`DataId`=%s,
        GenoXRef.`cM`=%s,
        GenoXRef.`Used_for_mapping`='%s'
        """ % (config_dic['genofreezeid'], marker_dic['genoid'], config_dic['dataid'], pos, "N")
    cursor.execute(sql)
    rowcount = cursor.rowcount
    print("INSERT INTO GenoXRef: %d record" % (rowcount))

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    main(sys.argv)
    print("exit successfully")
