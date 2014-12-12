To compile qtlreaper module, execute:

    python setup.py build  

you may modify the setup.py script if you want to use your own blas and lapack

To install qtlreaper module, execute:

    python setup.py install  


Run the following command in python interpreter to test the module:


#Import the reaper module
import reaper

#Initiate a python Dataset object
bxdGeno = reaper.Dataset()
#read genotype information from a file
#argument is a string containing the filename and location
#file is a tab-delimited text file
#check sample BXD.txt for file format
bxdGeno.read("../../Example/BXD.txt")
a = bxdGeno[1][1]
d = bxdGeno.add()

################
# Dataset Object
################
#progeny
bxdGeno.prgy
#number of progeny
bxdGeno.nprgy
#1st Chromosome 
bxdGeno[0].name
#last Chromosome 
bxdGeno[-1].name
#1st Locus 
bxdGeno[0][0].name
#last Locus 
bxdGeno[-1][-1].name

################
# Member functions
################
#Most reaper functions require two lists as inputs
#the first list is the strain list, the sceond is the trait values
#the two lists should have the same number of memebers
#the strain list should have the same strains as the header of the genotype file or should be a subset of those
strains =['BXD1', 'BXD2', 'BXD5', 'BXD6', 'BXD8', 'BXD9', 'BXD11', 'BXD12', 'BXD13', 'BXD14', 'BXD15', 'BXD16', 'BXD18', 'BXD19', 'BXD20', 'BXD21', 'BXD22', 'BXD23', 'BXD24', 'BXD25', 'BXD27', 'BXD42']
trait =  [53.570 ,63.885 ,56.700 ,61.750 ,66.325 ,65.150 ,60.400 ,57.920 ,51.925 ,62.350 ,67.175 ,65.850 ,52.425 ,60.925 ,65.350 ,56.750 ,59.750 ,57.888 ,60.250 ,64.433 ,57.125 ,63.600]

#vaiance list will be used in weighted regression (using 1/variance as the weights)
variance = [0.777, 0.108, 1.78, 1.18, 0.370, 0.808, 1.549, 0.710, 0.257, 1.482, 1.816, 0.711, 1.204, 0.059, 0.182, 0.591, 0.357, 0.072, 0.490, 0.239, 0.905, 1.327]
#genotypes of a control locus as a cofactor in the regression
control = "D1Mit1"

################
# Regression
################
#the result is a list of QTL Object
#simple regression (No variance and no control cofactor)
qtl1 = bxdGeno.regression(strains = strains, trait = trait)
#weighted regression (variance weighing but no control cofactor)
qtl2 = bxdGeno.regression(strains = strains, trait = trait, variance = variance)
#composite regression (control cofactor with or without variance weighting)
qtl3 = bxdGeno.regression(strains = strains, trait = trait, control = "D1Mit1")
qtl4 = bxdGeno.regression(strains = strains, trait = trait, variance = variance, control = "D1Mit1")

#maximum LRS
max(qtl1).lrs
max(qtl2).lrs
max(qtl3).lrs
max(qtl4).lrs

#sort the qtl list
qtl1.sort()
qtl2.sort()
qtl3.sort()
qtl4.sort()

################
# Permutation
################
#returns a list of highest LRS from each permutation in ascending order
#fixed number permutation
permu1 = bxdGeno.permutation(strains = strains, trait = trait,nperm=1000)
permu2 = bxdGeno.permutation(strains = strains, trait = trait, variance = variance,nperm=1000)
#progressive permutation
#keep on doing permutation until the thresh LRS is not in the top 10 
#or the total number of permutations reaches 1,000,000 
permu3 = bxdGeno.permutation(strains = strains, trait = trait, thresh = 23)

#calculate p-value
pv1 = reaper.pvalue(max(qtl1).lrs, permu1)

################
# Bootstrap
################
#returns a list of counts of times while a single locus has the highest LRS score
#the length of the list equal to the total number of markers
boot1 = bxdGeno.bootstrap(strains = strains, trait = trait, nboot=1000)
boot2 = bxdGeno.bootstrap(strains = strains, trait = trait, variance = variance, nboot=1000)


#######################
# Read from Input file
#######################
#It is easy to read from tab-delimited input file to generate the strain and trait value lists
#use the included trait.txt as example
import string
fp = open("../../Example/trait.txt")
header = fp.readline()
header = string.split(header)
#strip any blank characters 
header = map(string.strip, header)
strains = header[1:]
#the header here is the strain list


trait = fp.readline()
trait = string.split(trait)
#strip any blank characters 
trait = map(string.strip, trait[1:])
trait = map(float, trait)
#the trait here is the trait valuelist


