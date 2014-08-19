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

import httplib

from dbFunction import webqtlDatabaseFunction
import SharingBody

#import logging
#logging.basicConfig(filename="/tmp/gn_leiyan.log", level=logging.INFO)
#_log = logging.getLogger("gn\web\webqtl\dataSharing\SharingInfo2.py")


#########################################
#      Sharing Info 2
#########################################
class SharingInfo2:

		def __init__(self, GN_AccessionId, InfoPageName):
				self.GN_AccessionId = GN_AccessionId
				self.InfoPageName = InfoPageName

		def getInfo(self, create=False):
				cursor = webqtlDatabaseFunction.getCursor()
				if (not cursor):
						return
				sql = "SELECT InfoPageName, GN_AccesionId, Species.MenuName, Species.TaxonomyId, Tissue.Name, InbredSet.Name, GeneChip.GeneChipName, GeneChip.GeoPlatform, AvgMethod.Name, Datasets.DatasetName, Datasets.GeoSeries, Datasets.PublicationTitle, DatasetStatus.DatasetStatusName, Datasets.Summary, Datasets.AboutCases, Datasets.AboutTissue, Datasets.AboutDataProcessing, Datasets.Acknowledgment, Datasets.ExperimentDesign, Datasets.Contributors, Datasets.Citation, Datasets.Notes, Investigators.FirstName, Investigators.LastName, Investigators.Address, Investigators.City, Investigators.State, Investigators.ZipCode, Investigators.Country, Investigators.Phone, Investigators.Email, Investigators.Url, Investigators.Url, Organizations.OrganizationName, InvestigatorId, DatasetId, DatasetStatusId, Datasets.AboutPlatform FROM InfoFiles LEFT JOIN Species USING (SpeciesId) LEFT JOIN Tissue USING (TissueId) LEFT JOIN InbredSet USING (InbredSetId) LEFT JOIN GeneChip USING (GeneChipId) LEFT JOIN AvgMethod USING (AvgMethodId) LEFT JOIN Datasets USING (DatasetId) LEFT JOIN Investigators USING (InvestigatorId) LEFT JOIN Organizations USING (OrganizationId) LEFT JOIN DatasetStatus USING (DatasetStatusId) WHERE "
				if(self.GN_AccessionId):
						sql += "GN_AccesionId=%s"
						cursor.execute(sql, self.GN_AccessionId)
				elif (self.InfoPageName):
						sql += "InfoPageName=%s"
						cursor.execute(sql, self.InfoPageName)
				else:
						raise 'No correct parameter found'
				self.info = cursor.fetchone()
				if not self.info and self.InfoPageName and create:
					sql = "INSERT INTO InfoFiles SET InfoFiles.InfoPageName=%s"
					cursor.execute(sql, self.InfoPageName)
					return self.getInfo()
				if not self.GN_AccessionId and self.info:
					self.GN_AccessionId = self.info[1]
				if not self.InfoPageName and self.info:
					self.InfoPageName = self.info[0]
				return self.GN_AccessionId, self.InfoPageName, self.info
				
		def getDatasetsList(self):
				self.filelist = []
				if self.GN_AccessionId:
					try:
						conn = httplib.HTTPConnection("atlas.uthsc.edu")
						conn.request("GET", "/scandatasets.php?GN_AccesionId=%s" % (self.GN_AccessionId))
						response = conn.getresponse()
						data = response.read()
						self.filelist = data.split()
						conn.close()
					except Exception:
						pass
				return self.filelist
				
		def getBody(self, infoupdate=""):
				htmlfilelist = '<ul style="line-height:160%;">\n'
				for i in range(len(self.filelist)):
						if i%2==0:
								filename = self.filelist[i]
								filesize = self.filelist[i+1]
								htmlfilelist += "<li>"
								htmlfilelist += '<a href="ftp://atlas.uthsc.edu/users/shared/Genenetwork/GN%s/%s">%s</a>' % (self.GN_AccessionId, filename, filename)
								htmlfilelist += '&nbsp;&nbsp;&nbsp;'
								#r=re.compile(r'(?<=\d)(?=(\d\d\d)+(?!\d))')
								#htmlfilelist += '[%s&nbsp;B]' % r.sub(r',',filesize)
								if 12<len(filesize):
									filesize=filesize[0:-12]
									filesize += ' T'
								elif 9<len(filesize):
									filesize=filesize[0:-9]
									filesize += ' G'
								elif 6<len(filesize):
									filesize=filesize[0:-6]
									filesize += ' M'
								elif 3<len(filesize):
									filesize=filesize[0:-3]
									filesize += ' K'
								htmlfilelist += '[%sB]' % filesize
								htmlfilelist += "</li>\n"
				htmlfilelist += "</ul>"
				info = self.info
				return SharingBody.sharinginfo_body_string % (info[9], info[0], info[35], infoupdate, info[1], info[10], info[10], info[10], info[11], info[3], info[2], info[5], info[4], info[12], info[7], info[6], info[8], info[22], info[23], info[33], info[24], info[25], info[26], info[27], info[28], info[29], info[30], info[31], info[31], htmlfilelist, info[13], info[14], info[15], info[37], info[16], info[21], info[18], info[19], info[20], info[17], info[35])
