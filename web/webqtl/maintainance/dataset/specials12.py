import sys

"""
Date:   2016-08-17
Function:
	generate a new geno file from a whole data geno file
"""

def handle(input, output):
	#
	input = open(input, 'r')
	output = open(output, 'w')
	#
	line = input.readline()
	line = line.strip()
	cells = line.split()
	strains = cells[8:]
	output.write("Chr\tLocus\tcM\tMb\t")
	output.write("\t".join(strains))
	output.write("\n")
	output.flush()
	#
	for line in input:
		#
		line = line.strip()
		cells = line.split()
		chr = cells[1]
		locus = cells[0]
		cm = cells[7]
		mb = cells[3]
		mapping = cells[2]
		values = cells[8:]
		#
		if int(mapping) == 1:
			output.write("%s\t%s\t%s\t%s\t" % (chr, locus, cm, mb))
			output.write("\t".join(values))
			output.write("\n")
			output.flush()
	#
	input.close()
	output.close()

# python s.py input output

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	handle(sys.argv[1], sys.argv[2])
	print("exit successfully")
