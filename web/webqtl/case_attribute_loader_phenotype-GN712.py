import csv

from dbFunction import webqtlDatabaseFunction
from base import webqtlConfig

cursor = webqtlDatabaseFunction.getCursor()

file_reader = csv.reader(open("/home/acenteno/copyfrom_spring211/Case-Attribute/AgedHippo-GN712CaseAttributes.csv", "rb"), delimiter=',')

for row in file_reader:
    
    if "->" in row[0]:
        continue;
    
    else:
        case_name = row[0]
        sample = row[1]
        sex = row[2]
        age = row[3]
        batch = row[4]
        #ethn = row[5]
        #pmi = row[6]
        #ph = row[7]
    
        cursor.execute("""SELECT Strain.Id
                                FROM Strain
                                WHERE Strain.Name = '%s'""" % (case_name))
        
        try:
            case_id = cursor.fetchone()[0]
        except:
            case_id = 0
        
        cursor.execute("""SELECT ProbeSetFreeze.Id
                                FROM ProbeSetFreeze
                                WHERE ProbeSetFreeze.FullName = '%s'
                                       """ % ('UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) RMA **')) #IMPORTANT TO CHANGE ACCORDINGLY
          
        try:
            probesetfreeze_id = cursor.fetchone()[0]
        except:
            probesetfreeze_id = '0'
        # IMPORTANT NOTE BELOW: If there is not condition value to load, remove the line cursor.execute....condition
        try:
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 1, '%s');" % (probesetfreeze_id, case_id, condition))
            cursor.execute("insert into CaseAttributeXRef values (%s, %s, 9, '%s');" % (probesetfreeze_id, case_id, sample))
            cursor.execute("insert into CaseAttributeXRef values (%s, %s, 3, '%s');" % (probesetfreeze_id, case_id, sex))
            cursor.execute("insert into CaseAttributeXRef values (%s, %s, 4, '%s');" % (probesetfreeze_id, case_id, age))
            cursor.execute("insert into CaseAttributeXRef values (%s, %s, 10, '%s');" % (probesetfreeze_id, case_id, batch))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 5, '%s');" % (probesetfreeze_id, case_id, ethn))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 6, '%s');" % (probesetfreeze_id, case_id, pmi))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 7, '%s');" % (probesetfreeze_id, case_id, ph))
        except:
            pass


