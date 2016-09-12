import sys
import csv

"""
Date:   2016-09-12
Function:
	caculate genotype value, base on Proximal and distal.
"""

def handle(input, output):
	#
	input = open(input, 'rb')
	output = open(output, 'w')
	#
	reader = csv.reader(input, delimiter='\t')
	matrix = list(reader)
	#
	for row in range(2, len(matrix)-1):
		for col in range(11, len(matrix[row])):
			if matrix[row][col]:
				continue
			proximal_value = get_proximal_value(matrix, row, col)
			distal_value = get_distal_value(matrix, row, col)
			if proximal_value == distal_value:
				matrix[row][col] = proximal_value
			else:
				matrix[row][col] = "H"
	#
	for row in range(len(matrix)):
		output.write("\t".join(matrix[row]))
		output.write("\n")
		output.flush()
	#
	input.close()
	output.close()
	
def get_proximal_value(matrix, row, col):
	while (1):
		row-=1
		if matrix[row][col]:
			return matrix[row][col]
			
def get_distal_value(matrix, row, col):
	while (1):
		row+=1
		if matrix[row][col]:
			return matrix[row][col]

# python specials14.py input output

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	handle(sys.argv[1], sys.argv[2])
	print("exit successfully")
