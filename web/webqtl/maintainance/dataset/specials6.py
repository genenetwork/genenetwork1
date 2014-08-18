import sys

import utilities
import datastructure
import genotypes
import phenotypes
import calculate

"""
Date:   2014-08-18
Function:
    fetch pheno info with data
"""
def bxd_pheno(file):
    #
    file = open(file, 'w')
    inbredsetid = 1
    #
    strains = datastructure.get_strains(inbredsetid)
    print("get %d strains" % (len(strains)))
    #
    publishxrefs = phenotypes.get_publishxrefs(inbredsetid)
    print("get %d publishxrefs" % (len(publishxrefs)))
    #
    file.write("%s\t" % "PhenotypeID")
    file.write("%s\t" % "PhenotypeName")
    for strain in strains:
        strainid = strain[0]
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
    file.close()

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    bxd_pheno(sys.argv[1])
    print("exit successfully")
