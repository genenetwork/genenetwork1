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
# Contact Dr. Robert W. Williams at rwilliams@uthsc.edu
#
# This module is used by GeneNetwork project (www.genenetwork.org)
#
# Created by GeneNetwork Core Team 2010/08/10
#
# Last updated by GeneNetwork Core Team 2010/10/20

from base.templatePage import templatePage
from base import webqtlConfig
import SharingBody
import SharingInfo2


#########################################
#      Sharing Info Edit Page
#########################################
class SharingInfoEditDatasets(templatePage):

		def __init__(self, fd=None):
				templatePage.__init__(self, fd)
				if webqtlConfig.USERDICT[self.privilege] >= webqtlConfig.USERDICT['admin']:
						pass
				else:
						heading = "Editing Info"
						detail = ["You don't have the permission to edit this dataset"]
						self.error(heading=heading,detail=detail,error="Error")
						return
				GN_AccessionId = fd.formdata.getvalue('GN_AccessionId')
				InfoPageName = fd.formdata.getvalue('InfoPageName')
				sharingInfoObject = SharingInfo2.SharingInfo2(GN_AccessionId, InfoPageName)
				GN_AccessionId,InfoPageName,info = sharingInfoObject.getInfo()
				self.dict['body'] = SharingBody.sharinginfoedit_body_string % (info[9], info[22], info[21], info[22], info[29], info[28], info[30], info[32], info[23], info[24], info[25], info[26], info[27], info[13], info[18], info[14], info[15], info[16], info[19], info[20], info[17], info[1], info[9], info[10], info[12], info[11], info[3], info[2], info[6], info[7], info[4], info[8], info[5], info[0], info[32], info[32], info[32])