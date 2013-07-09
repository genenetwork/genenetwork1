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
# Last updated by GeneNetwork Core Team 2010/10/20

#ExportSelectionDetailInfoPage.py

import string
from htmlgen import HTMLgen2 as HT
import os
import time
import pyXLWriter as xl

import reaper

from base import webqtlConfig
from base.templatePage import templatePage
from utility import webqtlUtil
from base.webqtlTrait import webqtlTrait
	
#########################################
#      BNW
#########################################
class BNWPage(templatePage):

	def __init__(self,fd):
		templatePage.__init__(self, fd)
		if not self.openMysql():
			return
		
		searchResult = fd.formdata.getvalue('searchResult')
		if not searchResult:
			heading = 'BNW'
			detail = ['You need to select at least one trait.']
			self.error(heading=heading, detail=detail)
			return
		if type("1") == type(searchResult):
			searchResult = string.split(searchResult, '\t')
			
		fd.incparentsf1 = 1
		if not fd.genotype:
			fd.readGenotype()
		strainlist = fd.f1list + fd.strainlist
		
		valuesList = []
		for item in searchResult:
			thisTrait = webqtlTrait(fullname=item, cursor=self.cursor)
			thisTrait.retrieveData(strainlist=strainlist)
			values = thisTrait.exportData(strainlist)
			valuesList.append(values)
		valuesList = zip(*valuesList)
			
		formvalue  = ','.join(searchResult)
		formvalue += ';'
		for row in valuesList:
			hasNone = False
			for cell in row:
				if not cell:
					hasNone = True
			if hasNone:
				continue
			formvalue += ','.join(str(cell) for cell in row)
			formvalue += ';'

		self.dict['body'] = BNWPage.body % formvalue
		return
		
	body = """
<FORM name="bnwform" ACTION="http://bnw.genenetwork.org/BNW/sourcecodes/bn_genenet.php" METHOD="POST">
	<INPUT TYPE="hidden" NAME="My_Genenet" value="%s">
</FORM>
<script type="text/javascript">
	document.bnwform.submit();
</script>
"""
