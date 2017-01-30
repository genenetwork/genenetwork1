import sys
import csv

import utilities

"""
Date:   2017-01-19
Function:
	Load Ramin Literature Correlation into GN database.
"""

def handle(input):
	#
	cursor, con = utilities.get_cursor()
	#
	input = open(input, 'rb')
	line = input.readline()
	rowheaders = line.split()
	del rowheaders[0]
	rowids = map(lambda x : x.split('--')[1], rowheaders)
	rowindex = 0
	for line in input.readlines():
		#
		print("%s" % rowindex)
		rowindex += 1
		#
		cells = line.split()
		colheader = cells[0]
		colid = colheader.split('--')[1]
		#
		for i in range(len(rowids)):
			rowid = rowids[i]
			v = cells[i+1]
			# print("[%s\t%s] %s" % (rowid, colid, v))
			sql = """
				INSERT INTO LCorrRamin3
				SET LCorrRamin3.`GeneId1`=%s,
				LCorrRamin3.`GeneId2`=%s,
				LCorrRamin3.`value`=%s
				"""
			cursor.execute(sql, (rowid, colid, v))
			# rowcount = cursor.rowcount
			# print("INSERT: %s" % rowcount)
	#
	input.close()
	con.close()
	
# python specials16.py input

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	handle(sys.argv[1])
	print("exit successfully")
