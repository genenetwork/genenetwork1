import sys

import utilities
import datastructure
import probesets
import phenotypes

"""
For:	Ash
Date:   2014-10-13
Function:
	Get a probesetfreeze list.
	For each probesetfreeze, each strain, count record/trait numbers
	and phenotypes
"""
def traverse(outputfile):
	#
	file = open(outputfile, 'w')
	inbredsetid = 1
	strains = datastructure.get_strains(inbredsetid)
	print("strains: %s" % len(strains))
	sum = [0] * len(strains)
	probesetfreezes = datastructure.get_probesetfreezes(inbredsetid)
	print("probesetfreezes: %s" % len(probesetfreezes))
	#
	cursor, con = utilities.get_cursor()
	#
	file.write("DatasetID\t")
	file.write("DatasetName\t")
	file.write("RecordNumber\t")
	for strain in strains:
		file.write("%s\t" % strain[1])
	file.write("\n")
	file.flush()
	# phenotypes
	publishxrefs = phenotypes.get_publishxrefs(inbredsetid)
	file.write("-\t")
	file.write("%s\t" % "Phenotypes")
	file.write("%d\t" % len(publishxrefs))
	#
	for i,strain in enumerate(strains):
		sql = """
			SELECT COUNT(PublishData.Id)
			FROM PublishXRef,PublishData
			WHERE PublishXRef.InbredSetId=%s
			AND PublishXRef.DataId=PublishData.Id
			AND PublishData.StrainId=%s
			AND PublishData.value IS NOT NULL
			"""
		cursor.execute(sql, (inbredsetid, strain[0]))
		n = cursor.fetchone()[0]
		file.write("%d\t" % n)
		file.flush()
		sum[i] += n
	#
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
		for i,strain in enumerate(strains):
			sql = """
				SELECT COUNT(ProbeSetData.`Id`)
				FROM ProbeSetXRef,ProbeSetData
				WHERE ProbeSetXRef.`ProbeSetFreezeId`=%s
				AND ProbeSetXRef.`DataId`=ProbeSetData.`Id`
				AND ProbeSetData.`StrainId`=%s
				AND ProbeSetData.`value` IS NOT NULL
				"""
			cursor.execute(sql, (probesetfreezeid, strain[0]))
			n = cursor.fetchone()[0]
			file.write("%d\t" % n)
			file.flush()
			sum[i] += n
		#
		file.write("\n")
		file.flush()
	# sum
	file.write("-\t")
	file.write("%s\t" % "Sum")
	file.write("-\t")
	#
	for e in sum:
		file.write("%d\t" % e)
		file.flush()
	#
	file.write("\n")
	file.flush()
	#
	file.close()
	con.close()

#  python specials8.py /home/leiyan/datadir/20140205_Ash_BXD/statistic/trait_numbers.txt

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	traverse(sys.argv[1])
	print("exit successfully")
