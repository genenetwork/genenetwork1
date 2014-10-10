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
		outputfile.write("%s\t" % "ProbeSet Id")
		outputfile.write("%s\t" % "ProbeSet Name")
		outputfile.write("%s\t" % "Symbol")
		outputfile.write("%s\t" % "StrainNumbers")
		outputfile.write("\n")
		outputfile.flush()
		return
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

# python specials7.py /home/leiyan/datadir/20140429_Ash_probesets/probesetfreezes1.txt /home/leiyan/datadir/20140429_Ash_probesets

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	generate_probesets(probesetfreezesfile=sys.argv[1], outputdir=sys.argv[2])
	print("exit successfully")
