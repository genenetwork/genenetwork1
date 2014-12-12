#!/usr/bin/python
import sys
import os
import string
import reaper

##Read from genotype file
genotype = reaper.Dataset()
genotype.read("./BXD.txt")

##open output file
outputFile = "output.txt"
fout = open(outputFile, "wb")
fout.write("ID\tLocus\tChr\tcM\tLRS\tAdditive\tpValue\n")
outputFile2 = "highest.txt"
fout2 = open(outputFile2, "wb")
fout2.write("ID\tLocus\tChr\tcM\tLRS\tAdditive\tpValue\n")

##Open Trait File
DataStart = 1
fp = open("trait.txt", "rb")
header = fp.readline()
header = map(string.strip, header.strip().split("\t"))
_strains = header[DataStart:]

##Read input file line by line
line = fp.readline()
while line:
	line = map(string.strip, line.strip().split("\t"))
	traitName = line[0]
	print "Calculate Trait %s" % traitName
	_traitData = map(float, line[DataStart:])
	
	qtlresults = genotype.regression(strains = _strains, trait = _traitData)
	permu = genotype.permutation(strains = _strains, trait = _traitData)
	
	##Save all the results
	for qtl in qtlresults:
		pvalue = reaper.pvalue(qtl.lrs, permu)
		fout.write("%s\t%s\t%s\t%2.3f\t%2.3f\t%2.3f\t%2.3f\t\n" % (traitName, 
			qtl.locus.name, qtl.locus.chr, qtl.locus.cM, qtl.lrs, qtl.additive, pvalue))
	##Save highest LRS only
	maxqtl = max(qtlresults)
	pvalue = reaper.pvalue(maxqtl.lrs, permu)
	fout2.write("%s\t%s\t%s\t%2.3f\t%2.3f\t%2.3f\t%2.3f\t\n" % (traitName, 
			maxqtl.locus.name, maxqtl.locus.chr, maxqtl.locus.cM, maxqtl.lrs, maxqtl.additive, pvalue))
	
	line = fp.readline()

fp.close()
fout.close()
fout2.close()


