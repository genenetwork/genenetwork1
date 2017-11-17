import sys

import datastructure
import probesets
import utilities

def probesetfreeze_list(inbredsetid, dir):
    strains = datastructure.get_strains(inbredsetid)
    print(strains)
    probesetfreezes = datastructure.get_probesetfreezes(inbredsetid)
    print "From DB, get %d probesetfreezes" % (len(probesetfreezes))
    for probesetfreeze in probesetfreezes:
        print probesetfreeze
        probesetfreeze_item(strains, dir, probesetfreeze)
        
def probesetfreeze_item(strains, dir, probesetfreeze):
    probesetfreezeid = probesetfreeze[0]
    probesetfreezename = probesetfreeze[1]
    probesetfreezefullname = probesetfreeze[2]
    file = open("%s/ProbeSetFreezeId_%d_FullName_%s.txt" % (dir, probesetfreezeid, probesetfreezename), "w+")
    file.write('"ID",')
    file.write(','.join(['"%s"' % strain[1].upper() for strain in strains]))
    file.write("\n")
    file.flush()
    probesetxrefs = probesets.get_probesetxref(probesetfreezeid)
    print(len(probesetxrefs))
    for probesetxref in probesetxrefs:
        probesetid = probesetxref[0]
        probesetdataid = probesetxref[1]
        probeset = probesets.get_probeset(probesetid)
        probesetname = probeset[1]
        probesetdata = probesets.get_probesetdata(probesetdataid)
        probesetdata = zip(*probesetdata)
        probesetdata = utilities.to_dic([strain.upper() for strain in probesetdata[1]], probesetdata[2])
        #
        file.write('"%s",' % probesetname)
        #
        for strain in strains:
            file.write(',')
            strainname = strain[1]
            strainname = strainname.upper()
            if strainname in probesetdata:
                value = probesetdata[strainname]
            else:
                value = ''
            file.write('"%s"' % value)
        file.write('\n')
        file.flush()
    #
    file.close()

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    probesetfreeze_list(sys.argv[1], sys.argv[2])
    print("exit successfully")
