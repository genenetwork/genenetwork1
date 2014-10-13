import sys

import datastructure
import probesets

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
	strains = datastructure.get_strains(inbredsetid)
	print("strains: %s" % len(strains))
	probesetfreezes = datastructure.get_probesetfreezes(inbredsetid)
	print("probesetfreezes: %s" % len(probesetfreezes))
	#
	file.write("DatasetID\t")
	file.write("DatasetName\t")
	file.write("RecordNumber\t")
	for strain in strains:
		file.write("%s\t" % strain[1])
	file.write("\n")
	file.flush()
	#
	for probesetfreeze in probesetfreezes:
		#
		probesetfreezeid = probesetfreeze[0]
		probesetfreezename = probesetfreeze[1]
		probesetfreezefullname = probesetfreeze[2]
		probesetxrefs = probesets.get_probesetxref(probesetfreezeid)
		#
		file.write("%d\t" % probesetfreezeid)
		file.write("%s\t" % probesetfreezefullname)
		file.write("%d\t" % len(probesetxrefs))
		#
		for strain in strains:
			sql = """
				SELECT COUNT(ProbeSetData.`Id`)
				FROM ProbeSetXRef,ProbeSetData
				WHERE ProbeSetXRef.`ProbeSetFreezeId`=%s
				AND ProbeSetXRef.`DataId`=ProbeSetData.`Id`
				AND ProbeSetData.`StrainId`=%s
				AND ProbeSetData.`value` is not null
				"""
			cursor.execute(sql, (probesetfreezeid, strain[0]))
			n = cursor.fetchone()[0]
			file.write("%d\t" % n)
		#
		file.write("\n")
		file.flush()
		#
	file.close()

#  python specials8.py /home/leiyan/datadir/20140205_Ash_BXD/statistic/trait_numbers.txt

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	traverse(sys.argv[1])
	print("exit successfully")
