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

from base.templatePage import templatePage
from base import webqtlConfig
from dbFunction import webqtlDatabaseFunction
import SharingBody
import SharingInfo2


#########################################
#      Sharing Info Page
#########################################
class SharingInfoPage(templatePage):

    def __init__(self, fd=None):
        templatePage.__init__(self, fd)
        GN_AccessionId1 = fd.formdata.getvalue('GN_AccessionId')
        InfoPageName1 = fd.formdata.getvalue('InfoPageName')
        sharingInfoObject = SharingInfo2.SharingInfo2(GN_AccessionId1, InfoPageName1)
        GN_AccessionId2, InfoPageName2, info = sharingInfoObject.getInfo(create=True)

        # ZS: This javascript is used to hide empty fields in the infofile page. It is here only because
        # there are no other options due to the poor way in which all of this code is structured.
        # When we finally use templates, it will be far easier to do this and javascript won't be necessary.

        hideNoneJS = """
<script type="text/javascript">
    $(window).load(function () {

        empty_rows = $("table[name=infoTable]").find("tr").filter(function () {
                        return $.trim($(this).find('td').text()).length == 0;
                    });

        empty_rows.each(function () {
            $(this).hide();
            $(this).prev().hide();
        });

        $("table[name=infoTable]").find("tr:contains('None')").each( function(){
            $(this).hide();
            $(this).prev().hide(); //hides the "title"/label for the field as well as its contents
        });

    });
</script>"""

        self.dict['js1'] = hideNoneJS

        if not GN_AccessionId1 and GN_AccessionId2:
            url = webqtlConfig.CGIDIR + "main.py?FormID=sharinginfo&GN_AccessionId=%s" % GN_AccessionId2
            self.redirection = url
        else:
            sharingInfoObject.getDatasetsList()
            self.dict['body'] = sharingInfoObject.getBody(infoupdate="")
