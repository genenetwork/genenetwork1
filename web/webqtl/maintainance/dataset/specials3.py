import sys

import utilities
import datastructure
import genotypes
import probesets

"""
For:    Ash
Date:   2014-02-12
Function:
    Generate probeset data files.
    given probesetfreeze list.
"""
def generate_probesets(probesetfreezesfile, outputdir):
    file = open(probesetfreezesfile, 'r')
    for line in file:
        line = line.strip()
        cells = line.split()
        probesetfreezeid = cells[0]
        probesetfreeze = datastructure.get_probesetfreeze(probesetfreezeid)
        probesetfreezeid = probesetfreeze[0]
        probesetfreezename = probesetfreeze[1]
        inbredset = datastructure.get_inbredset(probesetfreezeid)
        inbredsetid = inbredset[0]
        strains = datastructure.get_strains(inbredsetid)
        #
        outputfile = open("%s/%d_%s.txt" % (outputdir, probesetfreezeid, probesetfreezename), "w+")
        outputfile.write("%s\t" % "ProbeSet Id")
        outputfile.write("%s\t" % "ProbeSet Name")
        outputfile.write('\t'.join([strain[1].upper() for strain in strains]))
        outputfile.write("\n")
        outputfile.flush()
        #
        probesetxrefs = probesets.get_probesetxref(probesetfreezeid)
        print probesetfreeze
        print len(probesetxrefs)
        for probesetxref in probesetxrefs:
            probesetid = probesetxref[0]
            probesetdataid = probesetxref[1]
            probeset = probesets.get_probeset(probesetid)
            probesetname = probeset[1]
            probesetdata = probesets.get_probesetdata(probesetdataid)
            probesetdata = zip(*probesetdata)
            probesetdata = utilities.to_dic([strain.lower() for strain in probesetdata[1]], probesetdata[2])
            #
            outputfile.write("%s\t" % probesetid)
            outputfile.write("%s\t" % probesetname)
            #
            for strain in strains:
                strainname = strain[1]
                strainname = strainname.lower()
                if strainname in probesetdata:
                    value = probesetdata[strainname]
                else:
                    value = 'x'
                outputfile.write("%s\t" % value)
            outputfile.write("\n")
            outputfile.flush()
        #
        outputfile.close()
    file.close()

"""
For:    Ash
Date:   2014-04-29
Function:
    Generate probeset data files.
    with:
        mapping info
    given probesetfreeze list.
"""
def generate_probesets_2(probesetfreezesfile, outputdir):
    file = open(probesetfreezesfile, 'r')
    for line in file:
        line = line.strip()
        cells = line.split()
        probesetfreezeid = cells[0]
        probesetfreeze = datastructure.get_probesetfreeze(probesetfreezeid)
        probesetfreezeid = probesetfreeze[0]
        probesetfreezename = probesetfreeze[1]
        inbredset = datastructure.get_inbredset(probesetfreezeid)
        inbredsetid = inbredset[0]
        #
        outputfile = open("%s/%d_%s.txt" % (outputdir, probesetfreezeid, probesetfreezename), "w+")
        outputfile.write("%s\t" % "ProbeSetId")
        outputfile.write("%s\t" % "Symbol")
        outputfile.write("%s\t" % "Description")
        outputfile.write("%s\t" % "Chr")
        outputfile.write("%s\t" % "MB")
        outputfile.write("%s\t" % "Marker_Chr")
        outputfile.write("%s\t" % "Marker_MB")
        outputfile.write("%s\t" % "Mean_Expression")
        outputfile.write("%s\t" % "SE")
        outputfile.write("%s\t" % "LRS")
        outputfile.write("%s\t" % "pValue")
        outputfile.write("\n")
        outputfile.flush()
        #
        probesetxrefs = probesets.get_probesetxref(probesetfreezeid)
        print("%s:\n\t%d probesetxrefs" % (probesetfreeze, len(probesetxrefs)))
        for probesetxref in probesetxrefs:
            #
            probesetid = probesetxref[0]
            locus = probesetxref[2]
            lrs = probesetxref[3]
            pvalue = probesetxref[4]
            mean = probesetxref[5]
            se = probesetxref[6]
            #
            probeset = probesets.get_probeset(probesetid)
            probesetname = probeset[1]
            probesetsymbol = probeset[2]
            probesetdescription = probeset[3]
            probesetchr = probeset[5]
            probesetmb = probeset[6]
            #
            if locus is None or not locus:
                genochr = ""
                genomb = ""
            else:
		geno = genotypes.get_geno(inbredsetid=inbredsetid, name=locus)
                genochr = geno[2]
                genomb = geno[3]
            #
            outputfile.write("%s\t" % probesetname)
            outputfile.write("%s\t" % probesetsymbol)
            outputfile.write("%s\t" % probesetdescription)
            outputfile.write("%s\t" % probesetchr)
            outputfile.write("%s\t" % probesetmb)
            outputfile.write("%s\t" % genochr)
            outputfile.write("%s\t" % genomb)
            outputfile.write("%s\t" % mean)
            outputfile.write("%s\t" % se)
            outputfile.write("%s\t" % lrs)
            outputfile.write("%s\t" % pvalue)
            outputfile.write("\n")
            outputfile.flush()
        #
        outputfile.close()
    file.close()

# python specials3.py /home/leiyan/datadir/20140429_Ash_probesets/probesetfreezes1.txt /home/leiyan/datadir/20140429_Ash_probesets

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    generate_probesets_2(probesetfreezesfile=sys.argv[1], outputdir=sys.argv[2])
    print("exit successfully")
