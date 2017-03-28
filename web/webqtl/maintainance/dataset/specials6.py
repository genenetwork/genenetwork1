import sys
import re

import utilities
import datastructure
import phenotypes

"""
Ini Date:			2014-08-18
Last update Date:	2017-03-28

Function:
    fetch pheno info with data
"""
def output_pheno(inbredsetid, file):
    #
    file = open(file, 'w')
    #
    strains = datastructure.get_strains(inbredsetid)
    print("get %d strains" % (len(strains)))
    print("strains: %s" % (strains))
    #
    publishxrefs = phenotypes.get_publishxrefs(inbredsetid)
    print("get %d publishxrefs" % (len(publishxrefs)))
    #
    file.write("%s\t" % "PhenotypeID")
    file.write("%s\t" % "PhenotypeName")
    for strain in strains:
        strainname = strain[1]
        file.write("%s\t" % strainname)
    file.write("\n")
    file.flush()
    #
    for publishxref in publishxrefs:
        #
        publishxrefid = publishxref[0]
        phenotypeid = publishxref[1]
        phenotype = phenotypes.get_phenotype(phenotypeid)
        publicationid = publishxref[2]
        publication = phenotypes.get_publication(publicationid)
        publishdataid = publishxref[3]
        publishdata = phenotypes.get_publishdata(publishdataid)
        publishdata = zip(*publishdata)
        if len(publishdata)==0:
            continue
        publishdata = utilities.to_dic([strain.lower() for strain in publishdata[1]], publishdata[2])
        file.write("%s\t" % publishxrefid)
        phenotypename = "%s;%s;%s" % (phenotype[0], phenotype[1], phenotype[2])
        phenotypename = re.sub('\s+', ' ', phenotypename)
        phenotypename = phenotypename.strip()
        file.write("%s\t" % phenotypename)
        #
        for strain in strains:
            strainname = strain[1]
            strainname = strainname.lower()
            if strainname in publishdata:
                value = publishdata[strainname]
            else:
                value = 'x'
            file.write("%s\t" % value)
            #
        file.write("\n")
        file.flush()
    #
    file.flush()
    file.close()

# python specials6.py 1 /home/leiyan/datadir/20140818_Ash_pheno/bxd_pheno.txt

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    output_pheno(sys.argv[1], sys.argv[2])
    print("exit successfully")
