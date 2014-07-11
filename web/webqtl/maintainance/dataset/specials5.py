import sys

"""
Date:   2014-07-11
Function:
    fetch data records from file1 refer to file2

python specials5.py /home/leiyan/datadir/20140711_LuLu_bxd_geno_2/TailsNipsForDaniel_MegaM052814.txt /home/leiyan/datadir/20140711_LuLu_bxd_geno_2/BXD_4.txt /home/leiyan/datadir/20140711_LuLu_bxd_geno_2/BXD_5.txt
    
"""
def fetch(inputfile, referfile, outputfile):
    #
    inputfile = open(inputfile, 'r')
    inputlines = inputfile.readlines()
    inputfile.close()
    #
    referfile = open(referfile, 'r')
    referlines = referfile.readlines()
    referfile.close()
    referlines.pop(0)
    #
    outputfile = open(outputfile, 'w')
    #
    outputfile.write("%s\n" % inputlines.pop(0))
    outputfile.flush()
    #
    for referline in referlines:
        #
        referline = referline.strip()
        cells = referline.split()
        chr = cells[0][3:]
        bp = int(cells[1])
        locus = cells[3]
        #
        inputline = find_locus(inputlines, locus)
        if not inputline:
            inputline = find_position(inputlines, chr, bp)
        if inputline:
            outputfile.write("%s\n" % inputline)
            outputfile.flush()
    #
    outputfile.close()

def find_locus(inputlines, locus):
    for inputline in inputlines:
        inputcells = inputline.split()
        input_locus = inputcells[1]
        if locus.lower() == input_locus.lower():
            return inputline
    return None

def find_position(inputlines, chr, bp):
    offset = 10000000
    index = -1
    for i in range(len(inputlines)):
        inputline = inputlines[i]
        inputcells = inputline.split()
        input_chr = inputcells[2]
        input_bp = int(float(inputcells[3])*1000000)
        if chr.lower() == input_chr.lower():
            if abs(bp - input_bp) < offset:
                offset = abs(bp - input_bp)
                index = i
    if -1 < index:
        return inputlines[index]
    else:
        return None

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    fetch(sys.argv[1], sys.argv[2], sys.argv[3])
    print("exit successfully")
