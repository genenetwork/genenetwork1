import sys

import utilities
import datastructure
import genotypes
import phenotypes
import calculate

"""
Date:   2014-06-30
Function:
    caculate correlation with geno and pheno
"""
def bxd_geno_pheno_correlations(file):
    #
    file = open(file, 'w')
    inbredsetid = 1
    genofile = "/home/leiyan/gn/web/genotypes/BXD.geno"
    #
    t = genotypes.load_genos(genofile)
    genostrains = t[0]
    genos = t[1]
    print("From geno file, get %d strains" % (len(genostrains)))
    print("From geno file, get %d genos" % (len(genos)))
    #
    publishxrefs = phenotypes.get_publishxrefs(inbredsetid)
    print("get %d publishxrefs" % (len(publishxrefs)))
    #
    file.write("%s\t" % "PhenotypeID")
    file.write("%s\t" % "PhenotypeName")
    file.write("%s\t" % "MarkerName")
    file.write("%s\t" % "MarkerChromosome")
    file.write("%s\t" % "MarkerCentimorgan")
    file.write("%s\t" % "MarkerMb")
    file.write("%s\t" % "PearsonCorrelation")
    file.write("%s\t" % "PearsonPvalue")
    file.write("%s\t" % "SpearmanCorrelation")
    file.write("%s\t" % "SpearmanPvalue")
    file.write("%s\t" % "Number_of_BXDs_used")
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
        if len(publishdata) != 3:
            print("publishdata - %s: %d" % (publishxrefid, len(publishdata)))
            continue
        publishdata = utilities.to_dic([strain.lower() for strain in publishdata[1]], publishdata[2])
        #
        for geno in genos:
            #
            dic1 = geno['dicvalues']
            dic2 = publishdata
            keys, values1, values2 = utilities.overlap(dic1, dic2)
            rs = calculate.correlation(values1, values2)
            #
            file.write("%s\t" % publishxrefid)
            file.write("%s;%s;%s\t" % (phenotype[0], phenotype[1], phenotype[2]))
            file.write("%s\t" % geno['locus'])
            file.write("%s\t" % geno['chr'])
            file.write("%s\t" % geno['cm'])
            file.write("%s\t" % geno['mb'])
            file.write("%s\t" % rs[0][0])
            file.write("%s\t" % rs[0][1])
            file.write("%s\t" % rs[1][0])
            file.write("%s\t" % rs[1][1])
            file.write("%s\t" % len(keys))
            file.write("\n")
            file.flush()
    #
    file.close()

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    bxd_geno_pheno_correlations(sys.argv[1])
    print("exit successfully")
