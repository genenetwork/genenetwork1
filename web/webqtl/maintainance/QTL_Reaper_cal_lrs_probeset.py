#!/usr/bin/python

# To run this program do:
#	python QTL_Reaper_cal_lrs_probeset.py 235
#	Where 235 is the ProbeSetFreeze Id of the database that we want to calculate the LRS

import sys
import os
import reaper
import MySQLdb
import time

con = MySQLdb.Connect(db='db_webqtl',user='acenteno',passwd='kahuna', host="localhost")
cursor = con.cursor()

genotypeDir = '/gnshare/gn/web/genotypes/'
genotype_1 = reaper.Dataset()

#####get all of the genotypes
cursor.execute('select Id, Name from InbredSet')
results = cursor.fetchall()
InbredSets = {}
for item in results:
	InbredSets[item[0]] = genotypeDir+str(item[1])+'.geno'
print("InbredSets: %s\n" % InbredSets)

ProbeSetFreezeIds=sys.argv[1:]
if ProbeSetFreezeIds:
	#####convert the Ids to integer
	ProbeSetFreezeIds=map(int, ProbeSetFreezeIds)
else:
	#####get all of the dataset that need be updated
	cursor.execute("""
		SELECT ProbeSetFreeze.`Id`
		FROM ProbeSetFreeze,ProbeFreeze,InbredSet
		WHERE ProbeSetFreeze.`ProbeFreezeId`=ProbeFreeze.`Id`
		AND ProbeFreeze.`InbredSetId`=InbredSet.`Id`
		AND InbredSet.`SpeciesId`!=4
		ORDER BY ProbeSetFreeze.`Id`
		""")
	results = cursor.fetchall()
	ProbeSetFreezeIds = []
	for item in results:
		ProbeSetFreezeIds.append(item[0])
print("ProbeSetFreezeIds: %s\n" % ProbeSetFreezeIds)

#####update 
for ProbeSetFreezeId in ProbeSetFreezeIds:
	cursor.execute("""
		select InbredSetId 
		from ProbeFreeze, ProbeSetFreeze 
		where ProbeFreeze.Id=ProbeSetFreeze.ProbeFreezeId and ProbeSetFreeze.Id=%d
	"""%ProbeSetFreezeId);

	InbredSetId = cursor.fetchone()[0]
	if InbredSetId==3:
		InbredSetId=1
	#if InbredSetId==12:
	#	InbredSetId=2

	print("ProbeSetFreezeId=%s, InbredSetId=%s, InbredSetName=%s" % (ProbeSetFreezeId, InbredSetId, InbredSets[InbredSetId]))

	genotype_1.read(InbredSets[InbredSetId])
	locuses = []
	for geno in genotype_1:
		for locus in geno:
			locuses.append(locus.name)
	print("locuses: %s" % len(locuses))

	cursor.execute('select ProbeSetId, Locus, DataId from ProbeSetXRef where ProbeSetFreezeId=%s' % ProbeSetFreezeId)
	ProbeSetXRefInfos = cursor.fetchall()
	print("ProbeSetXRefInfos: %s" % len(ProbeSetXRefInfos))

	kj=0
	for aProbeSetXRef in ProbeSetXRefInfos:
		ProbeSetId, Locus, DataId = aProbeSetXRef
		prgy = genotype_1.prgy

		cursor.execute("select Strain.Name, ProbeSetData.value from Strain, ProbeSetData where Strain.Id = ProbeSetData.StrainId and ProbeSetData.Id = %d" % DataId)
		results = cursor.fetchall()
		if not results:
			continue
		_strains = []
		_values = []
		for item2 in results:
			strain, value = item2
			if strain in prgy:
				_strains.append(strain)
				_values.append(value)
		
		if not _strains or not _values or len(_values) < 8 or len(_strains) < 8:
			continue

		qtlresults = genotype_1.regression(strains = _strains, trait = _values)
		_max = max(qtlresults)
		_locus = _max.locus.name
		_additive = _max.additive
		_max = _max.lrs

		# _max(LRS) maybe is infinite sometimes, so define it as a very big number
		if str(_max) == 'inf':
			_max = 460

		cursor.execute('update ProbeSetXRef set Locus=%s, LRS=%s, additive=%s where ProbeSetId=%s and ProbeSetFreezeId=%s', (_locus, _max, _additive, ProbeSetId, ProbeSetFreezeId))

		if kj%1000==0:
			print("[%s]" % kj)
		kj += 1

	print("finish\n")
