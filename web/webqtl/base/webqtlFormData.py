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

from mod_python import Cookie
import string
import os

import reaper

import webqtlConfig
import cookieData
import sessionData
from cgiData import cgiData
from webqtlCaseData import webqtlCaseData
from utility import webqtlUtil

#import logging
#logging.basicConfig(filename="/tmp/gn.log", level=logging.INFO)
#_log = logging.getLogger("gn\web\webqtl\base\webqtlFormData.py")

class webqtlFormData:
	'Represents data from a WebQTL form page, needed to generate the next page'
	attrs = ('formID','RISet','genotype','strainlist','allstrainlist',
	'suggestive','significance','submitID','identification', 'enablevariance',
	'nperm','nboot','email','incparentsf1','genotype_1','genotype_2','traitInfo','genofile','genofiletitle')

	#XZ: Attention! All attribute values must be picklable!

	def __init__(self, req = None, mod_python_session=None, FieldStorage_formdata=None):

		for item in self.attrs:
			setattr(self,item, None)

		try:
			self.remote_ip = req.connection.remote_ip
		except:
			self.remote_ip = '1.2.3.4'

		if req and req.headers_in.has_key('referer'):
			self.refURL = req.headers_in['referer']
		else:
			self.refURL = None


		self.cookies = cookieData.cookieData(Cookie.get_cookies(req)) #XZ: dictionary type. To hold values transfered from mod_python Cookie.

		#XZ: dictionary type. To hold values transfered from mod_python Session object. We assume that it is always picklable.
		self.input_session_data = sessionData.sessionData( mod_python_session )

		#XZ: FieldStorage_formdata may contain item that can't be pickled. Must convert to picklable data.
		self.formdata = cgiData( FieldStorage_formdata )

		#get Form ID
		self.formID = self.formdata.getfirst('FormID')

		#get rest of the attributes
		if self.formID:
			for item in self.attrs:
				value = self.formdata.getfirst(item)
				if value != None:
					setattr(self,item,string.strip(value))
		
		self.ppolar = ""
		self.mpolar	= ""
		if self.RISet:
			try:
				# NL, 07/27/2010. ParInfo has been moved from webqtlForm.py to webqtlUtil.py; 
				f1, f12, self.mpolar, self.ppolar = webqtlUtil.ParInfo[self.RISet]
			except:
				f1 = f12 = self.mpolar = self.ppolar = None
		
		try:
			self.nperm = int(self.nperm)
			self.nboot = int(self.nboot)
		except:
			self.nperm = 2000 #XZ: Rob asked to change the default value to 2000
			self.nboot = 2000 #XZ: Rob asked to change the default value to 2000

		if self.allstrainlist:
			self.allstrainlist = map(string.strip, string.split(self.allstrainlist))
		#self.readGenotype()
		#self.readData()
		
		if self.RISet == 'BXD300':
			self.RISet = 'BXD'
		else:
			pass
	
	def __str__(self):
		rstr = ''
		for item in self.attrs:
			if item != 'genotype':
				rstr += '%s:%s\n' % (item,str(getattr(self,item)))
		return rstr

		
	def readGenotype(self):
		'read genotype from .geno file'
		if self.RISet == 'BXD300':
			self.RISet = 'BXD'
		else:
			pass
		assert  self.RISet
		#genotype_1 is Dataset Object without parents and f1
		#genotype_2 is Dataset Object with parents and f1 (not for intercross)
		self.genotype_1 = reaper.Dataset()
		if self.genofile and 0 < len(self.genofile):
			genofilelocation = self.genofile
		else:
			genofilelocation = os.path.join(webqtlConfig.GENODIR, self.RISet + '.geno')
		self.genotype_1.read(genofilelocation)
		try:
			# NL, 07/27/2010. ParInfo has been moved from webqtlForm.py to webqtlUtil.py; 
			_f1, _f12, _mat, _pat = webqtlUtil.ParInfo[self.RISet]
		except:
			_f1 = _f12 = _mat = _pat = None
		
		self.genotype_2 = self.genotype_1
		if self.genotype_1.type == "riset" and _mat and _pat:
			self.genotype_2 = self.genotype_1.add(Mat=_mat, Pat=_pat)	#, F1=_f1)
			
		#determine default genotype object
		if self.incparentsf1 and self.genotype_1.type != "intercross":
			self.genotype = self.genotype_2
		else:
			self.incparentsf1 = 0
			self.genotype = self.genotype_1
		self.strainlist = list(self.genotype.prgy)
		self.f1list = self.parlist = []
		if _f1 and _f12:
			self.f1list = [_f1, _f12]
		if _mat and _pat:
			self.parlist = [_mat, _pat]
	
	def fetch_genofile(self, cursor, genofileid):
		if cursor and genofileid and 0 < len(genofileid):
			sql = """
				SELECT GenoFile.`location`, GenoFile.`title`
				FROM GenoFile
				WHERE GenoFile.`id`=%s
				"""
			cursor.execute(sql, (genofileid))
			re = cursor.fetchone()
			self.genofile = re[0]
			self.genofiletitle = re[1]
		else:
			self.genofile = None
			self.genofiletitle = None

	def readData(self, strainlst=[], incf1=[], incpar=False):
		'read user input data or from trait data and analysis form'

		if not self.genotype:
			self.readGenotype()
		if not strainlst:
			if incf1:
				if incpar:
					strainlst = self.parlist + self.f1list + self.strainlist
				else:
					strainlst = self.strainlist
			else:
				strainlst = self.strainlist	
	
	
		traitfiledata = self.formdata.getfirst('traitfile')
		traitpastedata = self.formdata.getfirst('traitpaste')
		variancefiledata = self.formdata.getfirst('variancefile')
		variancepastedata = self.formdata.getfirst('variancepaste')
		Nfiledata = self.formdata.getfirst('Nfile')
	
		if traitfiledata:
			tt = string.split(traitfiledata)
			vals = map(webqtlUtil.StringAsFloat, tt)
		elif traitpastedata:
			tt = string.split(traitpastedata)
			vals = map(webqtlUtil.StringAsFloat, tt)
			strainlst = self.parlist + self.f1list + self.strainlist
		else:
			vals = map(self.FormDataAsFloat, strainlst)

		if len(vals) < len(strainlst):
				vals += [None]*(len(strainlst) - len(vals))
		elif len(vals) > len(strainlst):
				vals = vals[:len(strainlst)]
		else:
			pass


		if variancefiledata:
			tt = string.split(variancefiledata)
			vars = map(webqtlUtil.StringAsFloat, tt)
		elif variancepastedata:
			tt = string.split(variancepastedata)
			vars = map(webqtlUtil.StringAsFloat, tt)
		else:
			vars = map(self.FormVarianceAsFloat, strainlst)

		if len(vars) < len(strainlst):
				vars += [None]*(len(strainlst) - len(vars))
		elif len(vars) > len(strainlst):
				vars = vars[:len(strainlst)]
		else:
			pass
		
		if Nfiledata:
			tt = string.split(Nfiledata)
			nstrains = map(webqtlUtil.IntAsFloat, tt)
			if len(nstrains) < len(strainlst):
				nstrains += [None]*(len(strainlst) - len(nstrains))
		else:
			nstrains = map(self.FormNAsFloat, strainlst)

		debug_file = open("/gnshare/gn/web/debug_file_strains.txt", "w")

		##vals, vars, nstrains is obsolete
		self.allTraitData = {}
		for i, _strain in enumerate(strainlst):
			debug_file.write("STRAIN: " + _strain + "\t" + str(vals[i]) + "\n")
			if vals[i] != None:
				self.allTraitData[_strain] = webqtlCaseData(vals[i], vars[i], nstrains[i])

	

	def informativeStrains(self, strainlst=[], incVars = 0):
		'''if readData was called, use this to output the informative strains
		   (strain with values)'''
		if not strainlst:
			strainlst = self.strainlist
		strains = []
		vals = []
		vars = []
		for _strain in strainlst:
			if self.allTraitData.has_key(_strain):
				_val, _var = self.allTraitData[_strain].val, self.allTraitData[_strain].var
				if _val != None:
					if incVars:
						if _var != None:
							strains.append(_strain)
							vals.append(_val)
							vars.append(_var)
					else:
						strains.append(_strain)
						vals.append(_val)
						vars.append(None)
		return strains, vals, vars, len(strains)


				
	def FormDataAsFloat(self, key):
		try:
			return float(self.formdata.getfirst(key))
		except:
			return None

	
	def FormVarianceAsFloat(self, key):
		try:
			return float(self.formdata.getfirst('V' + key))
		except:
			return None
	
	def FormNAsFloat(self, key):
		try:
			return self.formdata.getfirst('N' + key)
		except:
			return None
		
	def Sample(self):
		'Create some dummy data for testing'
		self.RISet = 'BXD'
		self.incparentsf1 = 'on'
		#self.display = 9.2
		#self.significance = 16.1
		self.readGenotype()
		self.identification = 'BXD : Coat color example by Lu Lu, et al'
		#self.readGenotype()
		#self.genotype.ReadMM('AXBXAforQTL')
		#self.strainlist = map((lambda x, y='': '%s%s' % (y,x)), self.genotype.prgy)
		#self.strainlist.sort()
		self.allTraitData = {'BXD29': webqtlCaseData(3), 'BXD28': webqtlCaseData(2), 
		'BXD25': webqtlCaseData(2), 'BXD24': webqtlCaseData(2), 'BXD27': webqtlCaseData(2), 
		'BXD21': webqtlCaseData(1), 'BXD20': webqtlCaseData(4), 'BXD23': webqtlCaseData(4), 
		'BXD22': webqtlCaseData(3), 'BXD14': webqtlCaseData(4), 'BXD15': webqtlCaseData(2), 
		'BXD16': webqtlCaseData(3), 'BXD11': webqtlCaseData(4), 'BXD12': webqtlCaseData(3), 
		'BXD13': webqtlCaseData(2), 'BXD18': webqtlCaseData(3), 'BXD19': webqtlCaseData(3), 
		'BXD38': webqtlCaseData(3), 'BXD39': webqtlCaseData(3), 'BXD36': webqtlCaseData(2), 
		'BXD34': webqtlCaseData(4), 'BXD35': webqtlCaseData(4), 'BXD32': webqtlCaseData(4), 
		'BXD33': webqtlCaseData(3), 'BXD30': webqtlCaseData(1), 'BXD31': webqtlCaseData(4), 
		'DBA/2J': webqtlCaseData(1), 'BXD8': webqtlCaseData(3), 'BXD9': webqtlCaseData(1), 
		'BXD6': webqtlCaseData(3), 'BXD5': webqtlCaseData(3), 'BXD2': webqtlCaseData(4), 
		'BXD1': webqtlCaseData(1), 'C57BL/6J': webqtlCaseData(4), 'B6D2F1': webqtlCaseData(4), 
		'BXD42': webqtlCaseData(4), 'BXD40': webqtlCaseData(3)}

def fetch_genofile(cursor, genofileid):
	try:
		sql = """
			SELECT GenoFile.`location`, GenoFile.`title`
			FROM GenoFile
			WHERE GenoFile.`id`=%s
			"""
		cursor.execute(sql, (genofileid))
		re = cursor.fetchone()
		return re
	except:
		return None
		
def genofilename(location):
	try:
		return location[len(webqtlConfig.GENODIR):-5]
	except:
		return None
