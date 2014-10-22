import sys

import datastructure
import probesets

"""
For:	Ash
Date:   2014-10-10
Function:
	Generate probeset files, with strain numbers for each record.
	For each record ID I want number of  BXDs used.
	e.g. http://genenetwork.org/webqtl/main.py?FormID=sharinginfo&GN_AccessionId=540
	for record ID VALSPAGVQALVK_2, 21 BXDs were used.
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
		#
		outputfile = open("%s/%d_%s.txt" % (outputdir, probesetfreezeid, probesetfreezename), "w+")
		outputfile.write("%s\t" % "ProbeSetId")
		outputfile.write("%s\t" % "ProbeSetName")
		outputfile.write("%s\t" % "Symbol")
		outputfile.write("%s\t" % "StrainNumbers")
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
			probesetsymbol = probeset[2]
			probesetdescription = probeset[3]
			probesetchr = probeset[5]
			probesetmb = probeset[6]
			probesetdata = probesets.get_probesetdata(probesetdataid)
			#
			outputfile.write("%s\t" % probesetid)
			outputfile.write("%s\t" % probesetname)
			outputfile.write("%s\t" % probesetsymbol)
			outputfile.write("%d" % len(probesetdata))
			outputfile.write("\n")
			outputfile.flush()
		#
		outputfile.close()
	file.close()

# python specials7.py /home/leiyan/datadir/20140205_Ash_BXD/probesetfreezes_filter7.txt /home/leiyan/datadir/20140205_Ash_BXD/expression_n

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	generate_probesets(probesetfreezesfile=sys.argv[1], outputdir=sys.argv[2])
	print("exit successfully")
