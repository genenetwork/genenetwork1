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

import os
import string
import pyXLWriter as xl
import time

import reaper
from htmlgen import HTMLgen2 as HT

from base.templatePage import templatePage
from utility import webqtlUtil
from base import webqtlConfig
from base.webqtlTrait import webqtlTrait

#import logging
#logging.basicConfig(filename="/tmp/gn_leiyan.log", level=logging.INFO)
#_log = logging.getLogger("\gn\web\webqtl\management\exportPhenotypeDatasetPage.py")

#XZ, 11/06/2009: Xiaodong created this class
class exportPhenotypeDatasetPage(templatePage):

    def __init__(self, fd):

        templatePage.__init__(self, fd)

        if not self.openMysql():
            return

        ifVerified = fd.formdata.getvalue('ifVerified')
        status = fd.formdata.getvalue('status')

        if ifVerified != 'GN@UTHSC':
            heading = "Error page"
            detail = ["You are NoT verified as administrator."]
            self.error(heading=heading,detail=detail)
            return
        else:
            if status == 'input':
                self.dict['body'] =  self.genInputPage()
                self.dict['title'] =  'Export Phenotype Dataset Input Page'
            if status == 'output':
                PublishFreeze_Name = fd.formdata.getvalue('PublishFreeze_Name')
                self.dict['body'] =  self.exportDatasetPage( fd, PublishFreeze_Name )
                self.dict['title'] =  'Export Phenotype Dataset Page'


    def genInputPage(self):

        crossMenu = HT.Select(name='PublishFreeze_Name', onChange='xchange()')

        self.cursor.execute('SELECT PublishFreeze.Name FROM PublishFreeze,InbredSet WHERE PublishFreeze.`InbredSetId`=InbredSet.`Id`')
        result = self.cursor.fetchall()

        for one_row in result:
            Name = one_row
            crossMenu.append(tuple([Name,Name]))

        TD_LR = HT.TD(height=200,width="100%",bgColor='#eeeeee')

        exportPhenotypeDatasetForm = HT.Form(cgi= os.path.join(webqtlConfig.CGIDIR, webqtlConfig.SCRIPTFILE), enctype='multipart/form-data', name='exportPhenotypeDatasetForm', submit=HT.Input(type='hidden'))
        exportPhenotypeDatasetForm.append(
                HT.Blockquote(
                              HT.Font('Publish Freeze Name '),
                              crossMenu,
                              HT.Input(type='Submit', value='Submit', Class="button")),
                HT.Input(type='hidden',name='FormID',value='exportPhenotypeDataset'),
                HT.Input(type='hidden',name='status',value='output'),
                HT.Input(type='hidden',name='ifVerified',value='GN@UTHSC')
        )

        TD_LR.append( exportPhenotypeDatasetForm )

        return str(TD_LR)


    def exportDatasetPage(self, fd, PublishFreeze_Name):

        #return PublishFreeze_Name

                if not self.openMysql():
                        return

                self.cursor.execute( "select InbredSet.Name from PublishFreeze, InbredSet where PublishFreeze.InbredSetId=InbredSet.Id and PublishFreeze.Name='%s'" % PublishFreeze_Name )
                self.RISet = self.cursor.fetchone()[0]

                fd.RISet = self.RISet
                fd.incparentsf1 = 1
                fd.readGenotype()
                strainlist = fd.f1list + fd.strainlist

                #return str(strainlist)

                self.cursor.execute("Select Species.Name from Species, InbredSet where InbredSet.SpeciesId = Species.Id and InbredSet.Name = '%s'" % fd.RISet)
                self.Species = self.cursor.fetchone()[0]

                #return Species

                self.searchResult = []

                self.cursor.execute("Select PublishXRef.Id from PublishXRef, InbredSet where PublishXRef.InbredSetId = InbredSet.Id and InbredSet.Name = '%s'" % self.RISet)
                result = self.cursor.fetchall()

                for one_result in result:
                    self.searchResult.append( "%s::%s" % (PublishFreeze_Name, one_result[0]) )
                
                #return self.searchResult

                strainlisthead = []
                for strain in strainlist:
                    strainlisthead += [strain + "_Value"]
                    strainlisthead += [strain + "_SE"]
                    strainlisthead += [strain + "_N"]

                fields = ["Index", "Species", "Cross", "Database", "ProbeSetID/RecordID", "PubMed_ID",
                    "Pre Publication Description", "Post Publication Description", "Original Description", "Pre Publication Abbreviation", "Post Publication Abbreviation",
                    "Mean_Expression"] + strainlisthead

                if self.searchResult:
                        traitList = []
                        for item in self.searchResult:
                                thisTrait = webqtlTrait(fullname=item, cursor=self.cursor)
                                thisTrait.retrieveInfo(QTL=1)
                                thisTrait.retrieveData(strainlist=strainlist)
                                traitList.append(thisTrait)

                        text = [fields]
                        for i, thisTrait in enumerate(traitList):
                                text.append([str(i+1), self.Species, self.RISet, thisTrait.db.fullname, thisTrait.name, thisTrait.pubmed_id,
                                    thisTrait.pre_publication_description, thisTrait.post_publication_description,
                                    thisTrait.original_description,
                                    thisTrait.pre_publication_abbreviation, thisTrait.post_publication_abbreviation])

                                testval = thisTrait.exportData(strainlist)
                                try:
                                    mean = reaper.anova(testval)[0]
                                except:
                                    mean = 'N/A'
                                text[-1].append(mean)
                                testvar = thisTrait.exportData(strainlist, type="var")
                                testn = thisTrait.exportData(strainlist, type="N")
                                testdata = zip(testval, testvar, testn)
                                testdatalist = []
                                for data in testdata:
                                        testdatalist += list(data)
                                text[-1] += testdatalist

                        self.content_type = 'application/xls'
                        self.content_disposition = 'attachment; filename=%s' % ('export-%s.txt' % time.strftime("%y-%m-%d-%H-%M"))
                        self.attachment += ("Data source: The GeneNetwork at %s\n" % webqtlConfig.PORTADDR)
                        self.attachment += ("Citations: Please see %s/reference.html\n" % webqtlConfig.PORTADDR)
                        self.attachment += ("Date: %s\n" % time.strftime("%B %d, %Y", time.gmtime()))
                        self.attachment += ("Time: %s GMT\n" % time.strftime("%H:%M", time.gmtime()))
                        self.attachment += ("Status of data ownership: Possibly unpublished data; please see %s/statusandContact.html for details on sources, ownership, and usage of these data.\n" % webqtlConfig.PORTADDR)
                        self.attachment += ("This output file contains data from %d GeneNetwork databases listed below.\n" % len(traitList))
                        self.attachment += ("\n")
                        self.attachment += ("Funding for The GeneNetwork:\n")
                        self.attachment += ("NIGMS Systems Genetics and Precision Medicine project (R01 GM123489, 2017-2021)\n")
                        self.attachment += ("NIDA NIDA Core Center of Excellence in Transcriptomics, Systems Genetics, and the Addictome (P30 DA044223, 2017-2022)\n")
                        self.attachment += ("NIA Translational Systems Genetics of Mitochondria, Metabolism, and Aging (R01AG043930, 2013-2018)\n")
                        self.attachment += ("NIAAA Integrative Neuroscience Initiative on Alcoholism (U01 AA016662, U01 AA013499, U24 AA013513, U01 AA014425, 2006-2017)\n")
                        self.attachment += ("NIDA, NIMH, and NIAAA (P20-DA 21131, 2001-2012)\n")
                        self.attachment += ("NCI MMHCC (U01CA105417), NCRR, BIRN, (U24 RR021760)\n")
                        self.attachment += ("PLEASE RETAIN DATA SOURCE INFORMATION WHENEVER POSSIBLE\n")
                        self.attachment += ("\n")
                        for item in text:
                                self.attachment += string.join(map(lambda cell : self.trim(str(cell)), item), '\t') + "\n"
                        self.cursor.close()
                else:
                        fd.req.content_type = 'text/html'
                        heading = 'Export Collection'
                        detail = [HT.Font('Error : ',color='red'),HT.Font('Error occurs while retrieving data from database.',color='black')]
                        self.error(heading=heading,detail=detail)

    def trim(self, s):
        s = s.replace("\r\n", " ")
        s = s.replace("\r", " ")
        s = s.replace("\n", " ")
        s = s.replace("\t", " ")
        return s
