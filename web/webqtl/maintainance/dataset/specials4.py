import sys

import utilities
import datastructure
import genotypes
import probesets
import calculate

"""
Date:   2014-06-30
Function:
    caculate correlation with geno and pheno
"""
def bxd_geno_pheno_correlations(file):
    file = open(file, 'w')
    inbredsetid = 1
    genofile = "/home/leiyan/gn/web/genotypes/BXD.geno"
    #
    t = genotypes.load_genos(genofile)
    genostrains = t[0]
    genos = t[1]
    print "From geno file, get %d strains" % (len(genostrains))
    print "From geno file, get %d genos" % (len(genos))
    #
    probesetfreezes = datastructure.get_probesetfreezes(inbredsetid)
    print "From DB, get %d probesetfreezes" % (len(probesetfreezes))
    for probesetfreeze in probesetfreezes:
        correlations(outputdir=outputdir, genos=genos, probesetfreeze=probesetfreeze)
    file.close()

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    bxd_geno_pheno_correlations(sys.argv[1])
    print("exit successfully")
