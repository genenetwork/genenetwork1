import sys

import datastructure

"""
For:	Ash
Date:   2014-10-13
Function:
	Get a probesetfreeze list.
	For each probesetfreeze, each strain, record/trait numbers
"""
def traverse(outputfile):
	#
	file = open(outputfile, 'w')
	inbredsetid = 1
	#
	probesetfreezes = datastructure.get_probesetfreezes(inbredsetid)
	print "From DB, get %d probesetfreezes" % (len(probesetfreezes))
	#
	for probesetfreeze in probesetfreezes:
		#
		print probesetfreeze
		probesetfreezeid = probesetfreeze[0]
		probesetfreezename = probesetfreeze[1]
		probesetfreezefullname = probesetfreeze[2]
		#
		file.flush()
		#
	file.close()

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	traverse(sys.argv[1])
	print("exit successfully")
