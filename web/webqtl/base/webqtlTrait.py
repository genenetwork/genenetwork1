import string

from htmlgen import HTMLgen2 as HT

import webqtlConfig
from webqtlCaseData import webqtlCaseData
from webqtlDataset import webqtlDataset
from dbFunction import webqtlDatabaseFunction
from utility import webqtlUtil

#import logging
#logging.basicConfig(filename="/tmp/gn.log", level=logging.INFO)
#_log = logging.getLogger("\gn\web\webqtl\base\webqtlTrait.py")

class webqtlTrait:
	"""
	Trait class defines a trait in webqtl, can be either Microarray, 	
	Published phenotype, genotype, or user input trait
	"""

	def __init__(self, cursor = None, **kw):
		self.cursor = cursor
		self.db = None			# database object
		self.name = ''			# Trait ID, ProbeSet ID, Published ID, etc.
		self.cellid = ''
		self.identification = 'un-named trait'
		self.riset = ''
		self.haveinfo = 0
		self.sequence = ''		# Blat sequence, available for ProbeSet
		self.data = {}
		for name, value in kw.items():
			if self.__dict__.has_key(name):
				setattr(self, name, value)
			elif name == 'fullname':
				name2 = value.split("::")
				if len(name2) == 2:
					self.db, self.name = name2
				elif len(name2) == 3:
					self.db, self.name, self.cellid = name2
				else:
					raise KeyError, `value` + ' parameter format error.'
			else:
				raise KeyError, `name`+' not a valid parameter for this class.'
		
		if self.db and type(self.db) == type("1"):
			assert self.cursor
			self.db = webqtlDataset(self.db, self.cursor)

		#if self.db == None, not from a database
		if self.db:
			if self.db.type == "Temp":
				self.cursor.execute('''
					SELECT 
						InbredSet.Name, InbredSet.Id
					FROM 
						InbredSet, Temp 
					WHERE 
						Temp.InbredSetId = InbredSet.Id AND 
						Temp.Name = "%s"
				''' % self.name)
				re = self.cursor.fetchone()
				self.riset = re[0]
				self.db.risetid = re[1]

				self.cursor.execute('''
					SELECT 
						Temp.dbdisplayname
					FROM 
						Temp
					WHERE 
						Temp.Name = "%s"
				''' % self.name)
				dbdisplayname = self.cursor.fetchone()[0]
				if dbdisplayname and dbdisplayname.strip():
					self.db.displayname = dbdisplayname
			else:	
				self.riset = self.db.getRISet()

		#
		# In ProbeSet, there are maybe several annotations match one sequence
		# so we need use sequence(BlatSeq) as the identification, when we update
		# one annotation, we update the others who match the sequence also.
		#
		# Hongqiang Li, 3/3/2008
		#

                #XZ, 05/08/2009: This block is not neccessary. We can add 'BlatSeq' into disfield.
                # The variable self.sequence should be changed to self.BlatSeq
                # It also should be changed in other places where it are used.

		if self.db:
			if self.db.type == 'ProbeSet':
				query = '''
					SELECT 
						ProbeSet.BlatSeq
					FROM
						ProbeSet, ProbeSetFreeze, ProbeSetXRef
					WHERE
						ProbeSet.Id=ProbeSetXRef.ProbeSetId and
						ProbeSetFreeze.Id = ProbeSetXRef.ProbeSetFreezeId and
						ProbeSet.Name = "%s" and
						ProbeSetFreeze.Name = "%s"
				''' % (self.name, self.db.name)
				self.cursor.execute(query)
				self.sequence = self.cursor.fetchone()[0]

	
	def getName(self):
		str = ""
		if self.db and self.name:
			str = "%s::%s" % (self.db, self.name)
			if self.cellid:
				str += "::" + self.cellid
		else:
			str = self.description
		return str

	# 
	# when user enter a trait or GN generate a trait, user want show the name
	# not the name that generated by GN randomly, the two follow function are
	# used to give the real name and the database. displayName() will show the 
	# database also, getGivenName() just show the name. 
	# For other trait, displayName() as same as getName(), getGivenName() as 
	# same as self.name
	#
	# Hongqiang 11/29/07
	#
	def getGivenName(self):
		str = self.name
		if self.db and self.name:
			if self.db.type=='Temp':
				self.cursor.execute('SELECT description FROM Temp WHERE Name=%s',self.name)
				desc = self.cursor.fetchone()[0]
				if desc.__contains__('PCA'):
					desc = desc[desc.rindex(':')+1:].strip()
				else:
					desc = desc[:desc.index('entered')].strip()
				str = desc
		return str

	def displayName(self):
		str = ""
		if self.db and self.name:
			if self.db.type=='Temp':
				desc = self.description
				if desc.__contains__('PCA'):
					desc = desc[desc.rindex(':')+1:].strip()
				else:
					desc = desc[:desc.index('entered')].strip()
				str = "%s::%s" % (self.db.displayname, desc)
			else:
				str = "%s::%s" % (self.db, self.name)
				if self.cellid:
					str += "::" + self.cellid
		else:
			str = self.description
		return str

	
	#def __str__(self):
	#	#return "%s %s" % (self.getName(), self.riset)
	#	return self.getName()
	__str__ = getName
	__repr__ = __str__

	def exportData(self, strainlist, type="val", var_exists=False, n_exists=False):
		"""
			export data according to strainlist
			mostly used in calculating correlation
		"""
		result = []
		for strain in strainlist:
			if self.data.has_key(strain):
				if type=='val':
					result.append(self.data[strain].val)
				elif type=='var':
					result.append(self.data[strain].var)
				elif type=='N':
					result.append(self.data[strain].N)
				elif type=='all':
					sample_data = []
					if self.data[strain].val:
						sample_data.append(self.data[strain].val)
						if var_exists:
							if self.data[strain].var:
								sample_data.append(self.data[strain].var)
							else:
								sample_data.append(None)
						if n_exists:
							if self.data[strain].N:
								sample_data.append(self.data[strain].N)
							else:
								sample_data.append(None)
					else:
						if var_exists and n_exists:
							sample_data += [None, None, None]
						elif var_exists or n_exists:
							sample_data += [None, None]
						else:
							sample_data.append(None)
					result += sample_data
				else:
					raise KeyError, `type`+' type is incorrect.'
			else:
				if var_exists and n_exists:
					result += [None, None, None]
				elif var_exists or n_exists:
					result += [None, None]
				else:
					result.append(None)
		return result
		
	def exportInformative(self, incVar=0):
		"""
			export informative strain
			mostly used in qtl regression
		"""
		strains = []
		vals = []
		vars = []
		for strain, value in self.data.items():
			if value.val != None:
				if not incVar or value.var != None:
					strains.append(strain)
					vals.append(value.val)
					vars.append(value.var)
		return 	strains, vals, vars


	#
	# In ProbeSet, there are maybe several annotations match one sequence
	# so we need use sequence(BlatSeq) as the identification, when we update
	# one annotation, we update the others who match the sequence also.
	#
	# Hongqiang Li, 3/3/2008
	#
	def getSequence(self):
		assert self.cursor
		if self.db.type == 'ProbeSet':
			query = '''
					SELECT 
						ProbeSet.BlatSeq
					FROM
						ProbeSet, ProbeSetFreeze, ProbeSetXRef
					WHERE
						ProbeSet.Id=ProbeSetXRef.ProbeSetId and
						ProbeSetFreeze.Id = ProbeSetXRef.ProbSetFreezeId and
						ProbeSet.Name = %s
						ProbeSetFreeze.Name = %s
				''' , (self.name, self.db.name)
			self.cursor.execute(query)
			results = self.fetchone()

			return results[0]
			
			
		
	def retrieveData(self, strainlist=[]):
		assert self.db and self.cursor

		if self.db.type == 'Temp':
			query = '''
				SELECT 
					Strain.Name, TempData.value, TempData.SE, TempData.NStrain, TempData.Id 
				FROM 
					TempData, Temp, Strain 
				WHERE 
					TempData.StrainId = Strain.Id AND 
					TempData.Id = Temp.DataId AND 
					Temp.name = '%s'
				Order BY
					Strain.Name
				''' % self.name
		#XZ, 03/02/2009: Xiaodong changed Data to PublishData, SE to PublishSE
		elif self.db.type == 'Publish': 
			query = '''
				SELECT 
					Strain.Name, PublishData.value, PublishSE.error, NStrain.count, PublishData.Id 
				FROM 
					(PublishData, Strain, PublishXRef, PublishFreeze)
				left join PublishSE on 
					(PublishSE.DataId = PublishData.Id AND PublishSE.StrainId = PublishData.StrainId)
				left join NStrain on 
					(NStrain.DataId = PublishData.Id AND 
					NStrain.StrainId = PublishData.StrainId) 
				WHERE 
					PublishXRef.InbredSetId = PublishFreeze.InbredSetId AND 
					PublishData.Id = PublishXRef.DataId AND PublishXRef.Id = %s AND 
					PublishFreeze.Id = %d AND PublishData.StrainId = Strain.Id
				Order BY
					Strain.Name
				''' % (self.name, self.db.id)

                #XZ, 03/02/2009: Xiaodong changed Data to ProbeData, SE to ProbeSE
		elif self.cellid:
			#Probe Data
			query = '''
				SELECT 
					Strain.Name, ProbeData.value, ProbeSE.error, ProbeData.Id 
				FROM 
					(ProbeData, ProbeFreeze, ProbeSetFreeze, ProbeXRef, 
					Strain, Probe, ProbeSet)
				left join ProbeSE on 
					(ProbeSE.DataId = ProbeData.Id AND ProbeSE.StrainId = ProbeData.StrainId)
				WHERE 
					Probe.Name = '%s' AND ProbeSet.Name = '%s' AND 
					Probe.ProbeSetId = ProbeSet.Id AND 
					ProbeXRef.ProbeId = Probe.Id AND 
					ProbeXRef.ProbeFreezeId = ProbeFreeze.Id AND 
					ProbeSetFreeze.ProbeFreezeId = ProbeFreeze.Id AND 
					ProbeSetFreeze.Name = '%s' AND 
					ProbeXRef.DataId = ProbeData.Id AND 
					ProbeData.StrainId = Strain.Id
				Order BY
					Strain.Name
				''' % (self.cellid, self.name, self.db.name)
                #XZ, 03/02/2009: Xiaodong added this block for ProbeSetData and ProbeSetSE
		elif self.db.type == 'ProbeSet':
			#ProbeSet Data
                        query = '''
                                SELECT
                                        Strain.Name, ProbeSetData.value, ProbeSetSE.error, ProbeSetData.Id
                                FROM
                                        (ProbeSetData, ProbeSetFreeze, Strain, ProbeSet, ProbeSetXRef)
                                left join ProbeSetSE on
                                        (ProbeSetSE.DataId = ProbeSetData.Id AND ProbeSetSE.StrainId = ProbeSetData.StrainId)
                                WHERE
                                        ProbeSet.Name = '%s' AND ProbeSetXRef.ProbeSetId = ProbeSet.Id AND
                                        ProbeSetXRef.ProbeSetFreezeId = ProbeSetFreeze.Id AND
                                        ProbeSetFreeze.Name = '%s' AND
                                        ProbeSetXRef.DataId = ProbeSetData.Id AND
                                        ProbeSetData.StrainId = Strain.Id
                                Order BY
                                        Strain.Name
                                ''' % (self.name, self.db.name)
                #XZ, 03/02/2009: Xiaodong changeded Data to GenoData, SE to GenoSE
		else:
			#Geno Data
			#XZ: The SpeciesId is not necessary, but it's nice to keep it to speed up database search.
			query = '''
				SELECT 
					Strain.Name, GenoData.value, GenoSE.error, GenoData.Id 
				FROM 
					(GenoData, GenoFreeze, Strain, Geno, GenoXRef)
				left join GenoSE on
					(GenoSE.DataId = GenoData.Id AND GenoSE.StrainId = GenoData.StrainId)
				WHERE 
					Geno.SpeciesId = %s AND Geno.Name = '%s' AND GenoXRef.GenoId = Geno.Id AND
					GenoXRef.GenoFreezeId = GenoFreeze.Id AND 
					GenoFreeze.Name = '%s' AND 
					GenoXRef.DataId = GenoData.Id AND 
					GenoData.StrainId = Strain.Id
				Order BY
					Strain.Name
				''' % (webqtlDatabaseFunction.retrieveSpeciesId(self.cursor, self.db.riset), self.name, self.db.name)

		
		self.cursor.execute(query)
		results = self.cursor.fetchall()
		self.data.clear()
		if results:
			self.mysqlid = results[0][-1]
			if strainlist:
				for item in results:
					if item[0] in strainlist:
						val = item[1]
						if val != None:
							var = item[2]
							ndata = None
							if self.db.type in ('Publish', 'Temp'):
								ndata = item[3]
							self.data[item[0]] = webqtlCaseData(val, var, ndata)
				#end for
			else:	
				for item in results:
					val = item[1]
					if val != None:
						var = item[2]
						ndata = None
						if self.db.type in ('Publish', 'Temp'):
							ndata = item[3]
						self.data[item[0]] = webqtlCaseData(val, var, ndata)
				#end for
			#end if
		else:
			pass
			
	def keys(self):
		return self.__dict__.keys()
	
	def has_key(self, key):
		return self.__dict__.has_key(key)
	
	def items(self):
		return self.__dict__.items()
	
	def retrieveInfo(self, QTL = None):
		assert self.db and self.cursor
		if self.db.type == 'Publish':
			#self.db.DisField = ['Name','PubMed_ID','Phenotype','Abbreviation','Authors','Title',\
			#	'Abstract', 'Journal','Volume','Pages','Month','Year','Sequence',\
			#	'Units', 'comments']
			query = '''
				SELECT 
					PublishXRef.Id, Publication.PubMed_ID, 
					Phenotype.Pre_publication_description, Phenotype.Post_publication_description, Phenotype.Original_description, 
					Phenotype.Pre_publication_abbreviation, Phenotype.Post_publication_abbreviation, 
					Phenotype.Lab_code, Phenotype.Submitter, Phenotype.Owner, Phenotype.Authorized_Users,
					Publication.Authors, Publication.Title, Publication.Abstract, 
					Publication.Journal, Publication.Volume, Publication.Pages, 
					Publication.Month, Publication.Year, PublishXRef.Sequence, 
					Phenotype.Units, PublishXRef.comments 
				FROM 
					PublishXRef, Publication, Phenotype, PublishFreeze 
				WHERE 
					PublishXRef.Id = %s AND 
					Phenotype.Id = PublishXRef.PhenotypeId AND 
					Publication.Id = PublishXRef.PublicationId AND 
					PublishXRef.InbredSetId = PublishFreeze.InbredSetId AND 
					PublishFreeze.Id =%s
				''' % (self.name, self.db.id)
		#XZ, 05/08/2009: Xiaodong add this block to use ProbeSet.Id to find the probeset instead of just using ProbeSet.Name
		#XZ, 05/08/2009: to avoid the problem of same probeset name from different platforms.
		elif self.db.type == 'ProbeSet':
			disfieldString = string.join(self.db.disfield,',ProbeSet.')
			disfieldString = 'ProbeSet.' + disfieldString
			query = """
				SELECT %s 
				FROM ProbeSet, ProbeSetFreeze, ProbeSetXRef
				WHERE
					ProbeSetXRef.ProbeSetFreezeId = ProbeSetFreeze.Id AND
					ProbeSetXRef.ProbeSetId = ProbeSet.Id AND
					ProbeSetFreeze.Name = '%s' AND
					ProbeSet.Name = '%s'
				""" % (disfieldString, self.db.name, self.name)
		#XZ, 05/08/2009: We also should use Geno.Id to find marker instead of just using Geno.Name
		# to avoid the problem of same marker name from different species.
		elif self.db.type == 'Geno':
			disfieldString = string.join(self.db.disfield,',Geno.')
			disfieldString = 'Geno.' + disfieldString
			query = """
				SELECT %s 
				FROM Geno, GenoFreeze, GenoXRef
				WHERE
					GenoXRef.GenoFreezeId = GenoFreeze.Id AND
					GenoXRef.GenoId = Geno.Id AND
					GenoFreeze.Name = '%s' AND
					Geno.Name = '%s'
				""" % (disfieldString, self.db.name, self.name)
		else: #Temp type
			query = 'SELECT %s FROM %s WHERE Name = "%s"' % \
				(string.join(self.db.disfield,','), self.db.type, self.name)

		
		self.cursor.execute(query)
		traitInfo = self.cursor.fetchone()
		if traitInfo:
			self.haveinfo = 1

			#XZ: assign SQL query result to trait attributes.
			for i, field in enumerate(self.db.disfield):
				setattr(self, field, traitInfo[i])

			if self.db.type == 'Publish':
				self.confidential = 0
				if self.pre_publication_description and not self.pubmed_id:
					self.confidential = 1

			self.homologeneid = None
			if self.db.type == 'ProbeSet' and self.riset and self.geneid:
				#XZ, 05/26/2010: From time to time, this query get error message because some geneid values in database are not number.
				#XZ: So I have to test if geneid is number before execute the query.
				#XZ: The geneid values in database should be cleaned up.
				try:
					junk = float(self.geneid)
					geneidIsNumber = 1
				except:
					geneidIsNumber = 0

				if geneidIsNumber:
					query = """
						SELECT
							HomologeneId
						FROM
							Homologene, Species, InbredSet
						WHERE
							Homologene.GeneId =%s AND
							InbredSet.Name = '%s' AND
							InbredSet.SpeciesId = Species.Id AND
							Species.TaxonomyId = Homologene.TaxonomyId
						""" % (self.geneid, self.riset)
					self.cursor.execute(query)
					result = self.cursor.fetchone()
				else:
					result = None

				if result:
					self.homologeneid = result[0]

			if QTL:
				if self.db.type == 'ProbeSet' and not self.cellid:
					query = '''
						SELECT 
							ProbeSetXRef.Locus, ProbeSetXRef.LRS, ProbeSetXRef.pValue, ProbeSetXRef.mean, ProbeSetXRef.additive 
						FROM 
							ProbeSetXRef, ProbeSet
						WHERE 
							ProbeSetXRef.ProbeSetId = ProbeSet.Id AND 
							ProbeSet.Name = "%s" AND
							ProbeSetXRef.ProbeSetFreezeId =%s
						''' % (self.name, self.db.id)
					self.cursor.execute(query)
					traitQTL = self.cursor.fetchone()
					if traitQTL:
						self.locus, self.lrs, self.pvalue, self.mean, self.additive = traitQTL
					else:
						self.locus = self.lrs = self.pvalue = self.mean = self.additive = ""
				if self.db.type == 'Publish':
					query = '''
						SELECT
							PublishXRef.Locus, PublishXRef.LRS, PublishXRef.additive
						FROM
							PublishXRef, PublishFreeze
						WHERE
							PublishXRef.Id = %s AND
							PublishXRef.InbredSetId = PublishFreeze.InbredSetId AND
							PublishFreeze.Id =%s
						''' % (self.name, self.db.id)
					self.cursor.execute(query)
					traitQTL = self.cursor.fetchone()
					if traitQTL:
						self.locus, self.lrs, self.additive = traitQTL
					else:
						self.locus = self.lrs = self.additive = ""
		else:
			raise KeyError, 'self.name %s information is not found in the database.' % self.name
	
	def genHTML(self, formName = "", dispFromDatabase=0, privilege="guest", userName="Guest", authorized_users=""):
		if not self.haveinfo:
			self.retrieveInfo()
		
		if self.db.type == 'Publish':
			PubMedLink = ""
	 		if self.pubmed_id:
	 			PubMedLink = HT.Href(text="PubMed %d : " % self.pubmed_id,
	 			target = "_blank", url = webqtlConfig.PUBMEDLINK_URL % self.pubmed_id)
			else:
				PubMedLink = HT.Span("Unpublished : ", Class="fs15")
			
			if formName:
				setDescription2 = HT.Href(url="javascript:showDatabase3('%s','%s','%s','')" % 
				(formName, self.db.name, self.name), Class = "fs14")
			else:
				setDescription2 = HT.Href(url="javascript:showDatabase2('%s','%s','')" % 
				(self.db.name,self.name), Class = "fs14")
	
			if self.confidential and not webqtlUtil.hasAccessToConfidentialPhenotypeTrait(privilege=privilege, userName=userName, authorized_users=authorized_users):
					setDescription2.append('RecordID/%s - %s' % (self.name, self.pre_publication_description))
			else:
				setDescription2.append('RecordID/%s - %s' % (self.name, self.post_publication_description))

			#XZ 03/26/2011: Xiaodong comment out the following two lins as Rob asked. Need to check with Rob why in PublishXRef table, there are few row whose Sequence > 1.
			#if self.sequence > 1:
			#	setDescription2.append(' btach %d' % self.sequence)
			if self.authors:
				a1 = string.split(self.authors,',')[0]
				while a1[0] == '"' or a1[0] == "'" :
					a1 = a1[1:]
				setDescription2.append(' by ')
				setDescription2.append(HT.Italic('%s, and colleagues' % a1))
			setDescription = HT.Span(PubMedLink, setDescription2)
			
		elif self.db.type == 'Temp':
			setDescription = HT.Href(text="%s" % (self.description),url="javascript:showDatabase2\
			('%s','%s','')" % (self.db.name,self.name), Class = "fs14")
			setDescription = HT.Span(setDescription)
			
		elif self.db.type == 'Geno': # Genome DB only available for single search
			if formName:
				setDescription = HT.Href(text="Locus %s [Chr %s @ %s Mb]" % (self.name,self.chr,\
			'%2.3f' % self.mb),url="javascript:showDatabase3('%s','%s','%s','')" % \
			(formName, self.db.name, self.name), Class = "fs14")
			else:
				setDescription = HT.Href(text="Locus %s [Chr %s @ %s Mb]" % (self.name,self.chr,\
			'%2.3f' % self.mb),url="javascript:showDatabase2('%s','%s','')" % \
			(self.db.name,self.name), Class = "fs14")
				
			setDescription = HT.Span(setDescription)
			
		else:
			if self.cellid:
				if formName:	
					setDescription = HT.Href(text="ProbeSet/%s/%s" % (self.name, self.cellid),url=\
				"javascript:showDatabase3('%s','%s','%s','%s')" % (formName, self.db.name,self.name,self.cellid), \
				Class = "fs14")
				else:	
					setDescription = HT.Href(text="ProbeSet/%s/%s" % (self.name,self.cellid),url=\
				"javascript:showDatabase2('%s','%s','%s')" % (self.db.name,self.name,self.cellid), \
				Class = "fs14")
			else:
				if formName:
					setDescription = HT.Href(text="ProbeSet/%s" % self.name, url=\
				"javascript:showDatabase3('%s','%s','%s','')" % (formName, self.db.name,self.name), \
				Class = "fs14")
				else:
					setDescription = HT.Href(text="ProbeSet/%s" % self.name, url=\
				"javascript:showDatabase2('%s','%s','')" % (self.db.name,self.name), \
				Class = "fs14")
			if self.symbol and self.chr and self.mb:
				setDescription.append(' [')
				setDescription.append(HT.Italic('%s' % self.symbol,Class="cdg fwb"))
				setDescription.append(' on Chr %s @ %s Mb]' % (self.chr,self.mb))
			if self.description:
				setDescription.append(': %s' % self.description)
			if self.probe_target_description:
				setDescription.append('; %s' % self.probe_target_description)
			setDescription = HT.Span(setDescription)
			
		if self.db.type != 'Temp' and dispFromDatabase:
			setDescription.append( ' --- FROM : ')
			setDescription.append(self.db.genHTML(Class='cori'))
		return setDescription
	
	
