import sys
import re

import utilities
import datastructure
import phenotypes

"""
Date:   2016-03-11
Function:
    fetch pheno info, data (express value, sample size, SE)
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
        strainname = strain[1]
        file.write("%s-expression\t" % strainname)
        file.write("%s-N\t" % strainname)
        file.write("%s-SE\t" % strainname)
    file.write("\n")
    file.flush()
    #
    for publishxref in publishxrefs:
        #
        publishxrefid = publishxref[0]
        phenotypeid = publishxref[1]
        publicationid = publishxref[2]
        publishdataid = publishxref[3]
        #
        phenotype = phenotypes.get_phenotype(phenotypeid)
        publication = phenotypes.get_publication(publicationid)
        #
        publishdata = phenotypes.get_publishdata(publishdataid)
        publishdata = zip(*publishdata)
        if len(publishdata) == 0:
            publishdata = {}
        else:
            publishdata = utilities.to_dic([strain.lower() for strain in publishdata[1]], publishdata[2])
        #
        publishdatan = phenotypes.get_publishdatan(publishdataid)
        publishdatan = zip(*publishdatan)
        if len(publishdatan) == 0:
            publishdatan = {}
        else:
            publishdatan = utilities.to_dic([strain.lower() for strain in publishdatan[1]], publishdatan[2])
        #
        publishdatase = phenotypes.get_publishdatase(publishdataid)
        publishdatase = zip(*publishdatase)
        if len(publishdatase) == 0:
            publishdatase = {}
        else:
            publishdatase = utilities.to_dic([strain.lower() for strain in publishdatase[1]], publishdatase[2])
        #
        file.write("%s\t" % publishxrefid)
        phenotypename = "%s;%s;%s" % (phenotype[0], phenotype[1], phenotype[2])
        phenotypename = re.sub('\s+', ' ', phenotypename)
        file.write("%s\t" % phenotypename)
        #
        for strain in strains:
            strainname = strain[1]
            strainname = strainname.lower()
            #
            if strainname in publishdata:
                value = publishdata[strainname]
            else:
                value = 'x'
            file.write("%s\t" % value)
            #
            if strainname in publishdatan:
                value = publishdatan[strainname]
            else:
                value = 'x'
            file.write("%s\t" % value)
            #
            if strainname in publishdatase:
                value = publishdatase[strainname]
            else:
                value = 'x'
            file.write("%s\t" % value)
        file.write("\n")
        file.flush()
    file.close()

# python specials11.py /home/leiyan/datadir/20160311/bxd_pheno.txt

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    bxd_pheno(sys.argv[1])
    print("exit successfully")
