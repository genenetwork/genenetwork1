import sys
import csv

import utilities

"""
Date:   2017-01-19
Function:
	Load Ramin Literature Correlation into GN database.
	Half of matrix.
	Just insert.
"""

def handle(input):
	#
	cursor, con = utilities.get_cursor()
	#
	input = open(input, 'rb')
	line = input.readline()
	colheaders = line.split()
	del colheaders[0]
	colids = map(lambda x : x.split('--')[1], colheaders)
	#
	rowindex = 0
	for row in input:
		#
		print("row: %s" % rowindex)
		#
		cells = row.split()
		rowheader = cells[0]
		rowid = rowheader.split('--')[1]
		del cells[0]
		#
		for colindex in range(rowindex+1):
			#
			# print("col: %s" % colindex)
			#
			colid = colids[colindex]
			v = cells[colindex]
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
		rowindex += 1
	#
	input.close()
	con.close()
	
# python specials16.py input

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	handle(sys.argv[1])
	print("exit successfully")
