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

#ODEPage.py

import string
from htmlgen import HTMLgen2 as HT

from base import webqtlConfig
from base.webqtlTrait import webqtlTrait
from base.templatePage import templatePage
from dbFunction import webqtlDatabaseFunction
		
class ODEPageIM(templatePage):

    def __init__(self,fd):
        templatePage.__init__(self, fd)
        if not self.openMysql():
            return
        searchResult = fd.formdata.getvalue('searchResult', [])
        TD_LR = HT.TD(height=200,width="100%",bgColor='#eeeeee',valign="middle")
        formODE = HT.Form(cgi="http://geneweaver.org/index.php?action=manage&cmd=importGeneSet", enctype='multipart/form-data', name='formODE', submit = HT.Input(type='hidden'))
        hddnODE = {}
        hddnODE['client'] = 'genenetwork'
        hddnODE['species'] = "Mus musculus"
        #hddnODE['idtype'] = chipName
        hddnODE['list'] = string.join(searchResult, ",")
        for key in hddnODE.keys():
            formODE.append(HT.Input(name=key, value=hddnODE[key], type='hidden'))
        TD_LR.append(formODE)
        TD_LR.append(HT.Paragraph("Your selections of %d traits is being exported to the ODE" % len(searchResult), Class="cr fs16 fwb", align="Center"))
        self.dict['js1'] = """
                <SCRIPT LANGUAGE="JavaScript">
                    setTimeout('document.formODE.submit()',1000);
                </SCRIPT>
                """
        self.dict['body'] = TD_LR
