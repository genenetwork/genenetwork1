import sys

import utilities

"""
Date:   2018-01-29
Function:
    Load Ramin Literature Correlation into GN database.
    Half of matrix.
    Just insert.
"""

def handle(genelist, matrix):
    # genelist
    genelist = open(genelist, 'rb')
    geneids = []
    for line in genelist:
        cells = line.split()
        geneids.append(cells[1])
    genelist.close()
    print("geneids: %d" % (len(geneids)))
    # cursor
    cursor, con = utilities.get_cursor()
    # matrix
    matrix = open(matrix, 'rb')
    rowindex = 0
    recordcount = 0
    for line in matrix:
        #
        if rowindex % 10000 == 0:
            print("rowindex: %s" % rowindex)
        #
        cells = line.split()
        for colindex in range(rowindex+1):
            v = float(cells[colindex])
            # print("[%s\t%s] %s" % (geneids[rowindex], geneids[colindex], v))
            # continue
            sql = """
                INSERT INTO LCorrRamin3
                SET LCorrRamin3.`GeneId1`=%s,
                LCorrRamin3.`GeneId2`=%s,
                LCorrRamin3.`value`=%s
                """
            cursor.execute(sql, (geneids[rowindex], geneids[colindex], v))
            recordcount += cursor.rowcount
        rowindex += 1
    matrix.close()
    con.close()
    #
    print("final rowindex: %d" % (rowindex))
    print("final recordcount: %d" % (recordcount))

# python specials16_3.py Mouse_genelist.txt Mouse_gene_similarity_matrix.txt

if __name__ == "__main__":
    print("command line arguments:\n\t%s" % sys.argv)
    handle(sys.argv[1], sys.argv[2])
    print("exit successfully")
