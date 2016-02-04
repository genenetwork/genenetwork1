#!/usr/bin/python

"""
date:   2016-01-27
function:
	full vector
	to calculate qtl mapping by qtl reaper
"""

import sys
import reaper
import utilities

def mapping():
	#
	cursor, con = utilities.get_cursor()
	genotypefile = '/gnshare/gn/web/genotypes/BXD.geno'
	inbredsetid = 1
	#
	genotype = reaper.Dataset()
	genotype.read(genotypefile)
	prgy = genotype.prgy
	print("genotype.prgy: %s" % (len(prgy)))
	print("genotype.prgy: %s" % (str(prgy)))
	locuses = []
	for geno in genotype:
		for locus in geno:
			locuses.append(locus.name)
	print("locuses: %s" % (len(locuses)))
	#
	cursor.execute('select PhenotypeId, Locus, DataId, Phenotype.Post_publication_description from PublishXRef, Phenotype where PublishXRef.PhenotypeId = Phenotype.Id and InbredSetId=%s' % inbredsetid)
	publishxrefinfos = cursor.fetchall()
	print("publishxrefinfos: %s" % len(publishxrefinfos))
	#
	i=0
	for publishxref in publishxrefinfos:
		phenotypeid, locus, dataid, phenotype_description = publishxref
		cursor.execute("select Strain.Name, PublishData.value from Strain, PublishData where Strain.Id = PublishData.StrainId and PublishData.Id = %d" % dataid)
		results = cursor.fetchall()
		if not results:
			continue
		strains = []
		values = []
		for item in results:
			strain, value = item
			if strain in prgy:
				strains.append(strain)
				values.append(value)
		if not strains or not values or len(values) < 8 or len(strains) < 8:
			continue
		qtlresults = genotype.regression(strains = strains, trait = values)
		i += 1
		if i%1000==1:
			print("[%s]" % i)

	con.close()
	print("[%s]" % i)
	print("finish\n")
	
# python specials10.py

if __name__ == "__main__":
	print("command line arguments:\n\t%s" % sys.argv)
	mapping()
	print("exit successfully")