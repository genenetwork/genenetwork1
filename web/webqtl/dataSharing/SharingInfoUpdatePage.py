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

import MySQLdb

from base.templatePage import templatePage
from base import webqtlConfig
from dbFunction import webqtlDatabaseFunction
import SharingBody
import SharingInfo2

#import logging
#logging.basicConfig(filename="/tmp/gn_leiyan.log", level=logging.INFO)
#_log = logging.getLogger("gn\web\webqtl\dataSharing\SharingInfoUpdatePage.py")


#########################################
#      Sharing Info Update Page
#########################################
class SharingInfoUpdatePage(templatePage):

		def __init__(self, fd=None):
				templatePage.__init__(self, fd)
				if webqtlConfig.USERDICT[self.privilege] >= webqtlConfig.USERDICT['admin']:
						pass
				else:
						heading = "Editing Info"
						detail = ["You don't have the permission to modify this file"]
						self.error(heading=heading,detail=detail,error="Error")
						return
				cursor = webqtlDatabaseFunction.getCursor()
				if (not cursor):
						return
				Id=self.trimValue(fd.formdata.getvalue('Id'))
				GN_AccesionId=self.trimValue(fd.formdata.getvalue('GN_AccesionId'))
				InfoPageName=self.trimValue(fd.formdata.getvalue('InfoPageName'))
				DatasetId=self.trimValue(fd.formdata.getvalue('DatasetId'))
				if Id=='-1':
						sharingInfoObject = SharingInfo2.SharingInfo2(GN_AccesionId, InfoPageName)
						GN_AccessionId,InfoPageName,info = sharingInfoObject.getInfo()
						if info:
								heading = "Editing Info"
								detail = ["The new dataset info record is duplicate."]
								self.error(heading=heading, detail=detail, error="Error")
								return
						sql = """INSERT INTO InfoFiles SET GN_AccesionId=%s, InfoPageName=%s, DatasetId=%s"""
						cursor.execute(sql, tuple([GN_AccesionId, InfoPageName, DatasetId]))
						infoupdate="This record has been succesfully added."
				else:
						sql = """UPDATE InfoFiles SET GN_AccesionId=%s, InfoPageName=%s, DatasetId=%s WHERE Id=%s"""
						cursor.execute(sql, tuple([GN_AccesionId, InfoPageName, DatasetId, Id]))
						infoupdate="This record has been succesfully updated."
				sharingInfoObject = SharingInfo2.SharingInfo2(GN_AccesionId, InfoPageName)
				sharingInfoObject.getInfo()
				sharingInfoObject.getDatasetsList()
				self.dict['body'] = sharingInfoObject.getBody(infoupdate=infoupdate)
				
		def trimValue(self, value):
				if (not value) or (value=='') or (value=='None'):
						return None
				else:
						return value
