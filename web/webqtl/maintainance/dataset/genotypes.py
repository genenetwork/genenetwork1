import utilities
import datastructure

def get_geno(inbredsetid, name):
    cursor, con = utilities.get_cursor()
    sql = """
        SELECT Geno.`Id`, Geno.`Name`, Geno.`Chr`, Geno.`Mb`
        FROM (Geno, InbredSet)
        WHERE Geno.`SpeciesId`=InbredSet.`SpeciesId`
        AND InbredSet.`Id`=%s
        AND Geno.`Name`=%s
        """
    cursor.execute(sql, (inbredsetid, name))
    con.close()
    return cursor.fetchone()

def load_genos(file):
    genotypes = []
    file_geno = open(file, 'r')
    for line in file_geno:
        line = line.strip()
        if line.startswith('#'):
            continue
        if line.startswith('@'):
            continue
        cells = line.split()
        if line.startswith("Chr"):
            strains = cells[4:]
            strains = [strain.lower() for strain in strains]
            continue
        genotype = {}
        genotype['chr'] = cells[0]
        genotype['locus'] = cells[1]
        genotype['cm'] = cells[2]
        genotype['mb'] = cells[3]
        values = cells[4:]
        values = [to_number(value) for value in values]
        genotype['values'] = values
        genotype['dicvalues'] = utilities.to_dic(strains, values)
        genotypes.append(genotype)
    return strains, genotypes
    
def to_number(char):
    dic = {
        'b': -1,
        'd': 1,
        'h': 0,
        'u': None,
        }
    return dic.get(char.lower(), None)

def delete_genodata_genoid(genoid, genofreezeid):
    cursor, con = utilities.get_cursor()
    sql = """
        DELETE GenoData
        FROM GenoXRef,GenoData
        WHERE GenoXRef.`GenoFreezeId`=%s
        AND GenoXRef.`GenoId`=%s
        AND GenoXRef.`DataId`=GenoData.`Id`
        """
    cursor.execute(sql, (genofreezeid, genoid))
    con.close()

def delete_genoxref(genoid, genofreezeid):
    cursor, con = utilities.get_cursor()
    sql = """
        DELETE GenoXRef
        FROM GenoXRef
        WHERE GenoXRef.`GenoFreezeId`=%s
        AND GenoXRef.`GenoId`=%s
        """
    cursor.execute(sql, (genofreezeid, genoid))
    rowcount = cursor.rowcount
    con.close()
    return rowcount

def delete(genoname, inbredsetid):
    genofreezeid = datastructure.get_genofreeze_byinbredsetid(inbredsetid)[0]
    geno = get_geno(inbredsetid, genoname)
    if geno:
        genoid = geno[0]
    else:
        return 0
    delete_genodata_genoid(genoid, genofreezeid)
    return delete_genoxref(genoid, genofreezeid)
