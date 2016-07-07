import sys
import csv

import utilities
import datastructure

def main(argv):
    # config
    config = utilities.get_config(argv[1])
    print "config:"
    for item in config.items('config'):
        print "\t%s" % (str(item))
    # var
    inbredsetid = config.get('config', 'inbredsetid')
    print "inbredsetid: %s" % inbredsetid
    species = datastructure.get_species(inbredsetid)
    speciesid = species[0]
    print "speciesid: %s" % speciesid
    # datafile
    datafile = open(config.get('config', 'datafile'), 'r')
    data = csv.reader(datafile, delimiter ="\t", quotechar='"')
    strainnames = data.next()
    print "strainnames: %s\n\t%s" % (len(strainnames), strainnames)
    strains = datastructure.get_strains_bynames(inbredsetid=inbredsetid, strainnames=strainnames, updatestrainxref="yes")
    print("strain: %s\n\t%s" % (len(strains), strains))
    datafile.close()

if __name__ == "__main__":
    print "command line arguments:\n\t%s" % sys.argv
    main(sys.argv)
    print "exit successfully"
