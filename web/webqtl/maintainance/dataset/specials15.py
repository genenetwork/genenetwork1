import sys
import csv

"""
Date:   2016-09-13
Function:
	Export old+new geno file.
"""

def handle(input, output):
	#
	input = open(input, 'rb')
	output = open(output, 'w')
	#
	reader = csv.reader(input, delimiter='\t')
	matrix = list(reader)
	#
	output.write("\t".join(matrix[0]))
	output.write("\n")
	output.flush()
	#
	for row in range(1, len(matrix)):
		if matrix[row][2]:
			continue
		output.write("\t".join(matrix[row]))
		output.write("\n")
		output.flush()
	#
	input.close()
	output.close()
	
# python specials15.py input output

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	handle(sys.argv[1], sys.argv[2])
	print("exit successfully")
