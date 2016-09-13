import sys

"""
Date:   2016-09-09
Function:
	generate a new geno file from an old geno file and a new geno file
"""

def handle(oldgenofile, newgenofile, output):
	#
	oldgenofile = open(oldgenofile, 'r')
	newgenofile = open(newgenofile, 'r')
	output = open(output, 'w')
	#
	newgeno = {}
	for line in newgenofile.readlines()[1:]:
		line = line.strip()
		cells = line.split()
		chr = cells[1]
		locus = cells[0]
		cm = cells[7]
		mb = cells[3]
		key = "%s::%s" % (chr, mb)
		key = key.lower()
		if key in newgeno:
			print("duplicate key: %s" % key)
			return
		newgeno[key] = line
	print("newgeno: %s" % len(newgeno))
	#
	for line in oldgenofile.readlines()[1:]:
		line = line.strip()
		cells = line.split()
		chr = cells[0]
		locus = cells[1]
		cm = cells[2]
		mb = cells[3]
		key = "%s::%s" % (chr, mb)
		key = key.lower()
		if key in newgeno:
			pass
		else:
			print("No found this key: %s" % key)
	#
	oldgenofile.close()
	newgenofile.close()
	output.close()

# python specials13.py BXD.20160830.geno BXD.20160826.geno output.txt

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	handle(sys.argv[1], sys.argv[2], sys.argv[3])
	print("exit successfully")
