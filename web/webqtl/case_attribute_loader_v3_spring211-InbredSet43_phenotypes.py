import csv

from dbFunction import webqtlDatabaseFunction
from base import webqtlConfig

cursor = webqtlDatabaseFunction.getCursor()

file_reader = csv.reader(open("/home/acenteno/Case-Attribute/Attributes_sex_C57BL-6JxC57BL-6NJF2.csv", "rb"), delimiter=',')

for row in file_reader:
    
        case_name = row[0]
        sex = row[1]

    #if "->" in row[2]:
     	#continue
    
    #else:
        #tissue = row[0]
        #condition = row[1]
        #age = row[4]
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
            
        #debug_file.write(str(case_id) + ",")
        
        cursor.execute("""SELECT PublishFreeze.Id
                                FROM PublishFreeze
                                WHERE PublishFreeze.FullName = '%s'
                                       """ % ('C57BL/6JxC57BL/6NJ F2 CROSS Phenotypes')) #IMPORTANT TO CHANGE ACCORDINGLY
          
        try:
            publishfreeze_id = cursor.fetchone()[0]
        except:
            publishfreeze_id = '0'
        
        print("publishfreeze_id" + str(publishfreeze_id))

        # IMPORTANT NOTE BELOW: If there is not condition value to load, remove the line cursor.execute....condition
        try:
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 1, '%s');" % (probesetfreeze_id, case_id, condition))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 2, '%s');" % (probesetfreeze_id, case_id, tissue))
            cursor.execute("insert into CaseAttributeXRef values (%s, %s, 3, '%s');" % (publishfreeze_id, case_id, sex))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 4, '%s');" % (probesetfreeze_id, case_id, age))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 5, '%s');" % (probesetfreeze_id, case_id, ethn))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 6, '%s');" % (probesetfreeze_id, case_id, pmi))
            #cursor.execute("insert into CaseAttributeXRef values (%s, %s, 7, '%s');" % (probesetfreeze_id, case_id, ph))
        except:
            pass


