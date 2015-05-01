# Copyright (C) University of Tennessee Health Science Center, Memphis, TN.
#
# This program is free software: you can redistribute it and/or modify it
# under the terms of the GNU Affero General Public License
# as published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
# See the GNU Affero General Public License for more details.
#
# This program is available from Source Forge: at GeneNetwork Project
# (sourceforge.net/projects/genenetwork/).
#
# Contact Drs. Robert W. Williams and Xiaodong Zhou (2010)
# at rwilliams@uthsc.edu and xzhou15@uthsc.edu
#
#
#
# This module is used by GeneNetwork project (www.genenetwork.org)
#
# Created by GeneNetwork Core Team 2010/08/10
#
# Last updated by Lei Yan 2011/02/08

# created by Lei Yan 02/08/2011

import string
import MySQLdb
import time
import os
import sys

path1 = os.path.abspath(os.path.dirname(__file__))
path2 = path1 + "/.."
path3 = path1 + "/../../tmp"
sys.path.insert(0, path2)
from base import webqtlConfig

def fetchrif():
	try:
		con = MySQLdb.Connect(db=webqtlConfig.DB_NAME, host=webqtlConfig.MYSQL_SERVER, user=webqtlConfig.DB_USER, passwd=webqtlConfig.DB_PASSWD)
		cursor = con.cursor()
		print "You have successfully connected to mysql.\n"
	except:
		print "You entered incorrect password.\n"
		sys.exit(0)

	taxIds = {'10090':1, '9606':4, '10116':2, '3702':3}
	taxIdKeys = taxIds.keys()

	os.chdir(path3)
	print("path3: %s" % (path3))
	genedict = {}

	os.system("rm -vf gene_info")
	os.system("wget ftp://ftp.ncbi.nlm.nih.gov/gene/DATA/gene_info.gz")
	os.system("gunzip gene_info.gz")
	
	file = open("gene_info", 'r')
	i = 0
	for line1 in file:
		line1 = line1.strip()
		if line1.startswith('#'):
			continue
		line2 = map(string.strip, string.split(line1, "\t"))
		if line2[0] in taxIdKeys:
			genedict[line2[1]] = line2[2]
		i += 1
		if i%1000000 == 0:
			print("finished: %d" % (i))
	print("finished all: %d" % (i))
	file.close()
	
	os.system("rm -vf generifs_basic")
	os.system("wget ftp://ftp.ncbi.nlm.nih.gov/gene/GeneRIF/generifs_basic.gz")
	os.system("gunzip generifs_basic.gz")
	
	file = open("generifs_basic", 'r')
	i = 0
	for line1 in file:
		line1 = line1.strip()
		if line1.startswith('#'):
			continue
		line2 = map(string.strip, string.split(line1, "\t"))
		if line2[0] in taxIdKeys and len(line2) >= 5:
			line2[0] = taxIds[line2[0]]
			try:
				symbol = genedict[line2[1]]
			except:
				symbol = ""
			sql = """
				SELECT COUNT(*)
				FROM GeneRIF_BASIC
				WHERE GeneRIF_BASIC.`SpeciesId`=%s
				AND GeneRIF_BASIC.`GeneId`=%s
				AND GeneRIF_BASIC.`PubMed_ID`=%s
				AND GeneRIF_BASIC.`createtime`=%s
				AND GeneRIF_BASIC.`comment`=%s
				"""
			cursor.execute(sql, (line2[0], line2[1], line2[2], line2[3], line2[4]))
			c = cursor.fetchone()[0]
			if c == 0:
				print("to insert...")
				sql = """
					INSERT INTO GeneRIF_BASIC
					SET GeneRIF_BASIC.`SpeciesId`=%s,
						GeneRIF_BASIC.`GeneId`=%s,
						GeneRIF_BASIC.`symbol`=%s,
						GeneRIF_BASIC.`PubMed_ID`=%s,
						GeneRIF_BASIC.`createtime`=%s,
						GeneRIF_BASIC.`comment`=%s
					"""
				cursor.execute(sql, (line2[0], line2[1], symbol, line2[2], line2[3], line2[4]))
		i += 1
		if i%100000 == 0:
			print("finished: %d" % (i))
	print("finished all: %d" % (i))
	file.close()
	cursor.close()
	
# /usr/bin/python addRif.py

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	fetchrif()
	print("exit successfully")
