import sys

def convert(inputfile, outputfile):
	#
	inputfile = open(inputfile, 'r')
	outputfile = open(outputfile, 'w')
	#
	for line in inputfile:
		line = line.strip()
		cells = line.split('\t')
		geneid = cells[0]
		pubmedid = cells[1]
		title = cells[2]
		fullname = cells[3]
		fullname = convert_name(fullname)
		shortname = cells[4]
		shortname = convert_name(shortname)
		institute = cells[5]
		#
		outputfile.write("%s\t" % pubmedid)
		outputfile.write("%s\t" % title)
		outputfile.write("%s\t" % fullname)
		outputfile.write("%s\t" % shortname)
		outputfile.write("%s\t" % institute)
		outputfile.write("%s\n" % geneid)
		outputfile.flush()
	#
	inputfile.close()
	outputfile.flush()
	outputfile.close()

def convert_name(s):
	s = s.strip("[] ")
	s = s.split("',")
	b = []
	for a in s:
		a = a.strip("', ")
		a = a.replace(",", "")
		b.append(a)
	return ', '.join(b)
	
# python gn/web/webqtl/maintainance/dataset/pubmedinfo_author.py datadir/20141017_Pubmedinfo_author/Pubmedinfo_AU.txt datadir/20141017_Pubmedinfo_author/Pubmedinfo_AU_new.txt

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	convert(sys.argv[1], sys.argv[2])
	print("exit successfully")
