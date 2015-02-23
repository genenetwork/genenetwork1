# fix Human snp plink map file
# python specials9.py snp141.txt GTEx.map GTEx_new.map

import sys
import re, fileinput

Argument = sys.argv[1:]  # Reading the arguments

"""
Opening the file and storing the lines in list
"""

input1 = Argument[0]
input2 = Argument[1]
output = open(Argument[2], "w")

SNP1 = {}

count1 = 0
for row1 in fileinput.input([input1]):
	if not row1.split() or row1.startswith("#"):
		continue
	array1 = row1.split("\t")
	try:
		if array1[1] not in SNP1:
			SNP1[array1[1]] = {}
			SNP1[array1[1]][int(float(array1[3])/1000000.0)] = {}
			SNP1[array1[1]][int(float(array1[3])/1000000.0)][array1[3]] = array1[4]
		else:
			if int(float(array1[3])/1000000.0) not in SNP1[array1[1]]:
				SNP1[array1[1]][int(float(array1[3])/1000000.0)] = {}
				SNP1[array1[1]][int(float(array1[3])/1000000.0)][array1[3]] = array1[4]
			else:
				SNP1[array1[1]][int(float(array1[3])/1000000.0)][array1[3]] = array1[4]
	except:
		print row1
		print sys.exc_info()
	count1 += 1
	if(count1%100000==0):
		print count1

count2 = 0
for row2 in fileinput.input([input2]):
	if not row2.split() or row2.startswith("#"):
		continue
	row2 = row2.strip("\n")
	array2 = row2.split("\t")
	chr = array2[0]
	if chr == "23":
		chr = "X"
	if chr == "24":
		chr = "Y"
	if chr == "26":
		chr = "M"
	chr = "chr" + chr
	if chr in SNP1:
		if int(float(array2[-1])/1000000.0) in SNP1[chr]:
			if array2[-1] in SNP1[chr][int(float(array2[-1])/1000000.0)]:
				output.write(array2[0])
				output.write(SNP1[chr][int(float(array2[-1])/1000000.0)][array2[-1]])
				output.write(array2[2])
				output.write(array2[3])
			else:
				output.write(row2)
		else:
			output.write(row2)
	else:
		output.write(row2)
	output.write("\n")
	output.flush()
	count2 += 1
	if(count2%1000==0):
		print count2

output.close()
print "exit successfully"
