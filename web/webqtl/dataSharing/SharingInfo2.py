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

import MySQLdb
import MySQLdb.cursors
#testing Above

import httplib, urllib2
import re

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
				debug_file = open("/gnshare/gn/web/tmp/debug_file123.txt", "w")
				cursor = webqtlDatabaseFunction.getCursor()
				debug_file.write("AFTER GET CURSOR")
				if (not cursor):
						return
				sql = "SELECT InfoPageName , GN_AccesionId, Species.MenuName, Species.TaxonomyId, Tissue.Name, InbredSet.Name, GeneChip.GeneChipName, GeneChip.GeoPlatform, AvgMethod.Name, Datasets.DatasetName, Datasets.GeoSeries, Datasets.PublicationTitle, DatasetStatus.DatasetStatusName, Datasets.Summary, Datasets.AboutCases, Datasets.AboutTissue, Datasets.AboutDataProcessing, Datasets.Acknowledgment, Datasets.ExperimentDesign, Datasets.Contributors, Datasets.Citation, Datasets.Notes, Investigators.FirstName, Investigators.LastName, Investigators.Address, Investigators.City, Investigators.State, Investigators.ZipCode, Investigators.Country, Investigators.Phone, Investigators.Email, Investigators.Url, Investigators.Url, Organizations.OrganizationName, InvestigatorId, DatasetId, DatasetStatusId, Datasets.AboutPlatform, InfoFileTitle, Specifics FROM InfoFiles LEFT JOIN Species USING (SpeciesId) LEFT JOIN Tissue USING (TissueId) LEFT JOIN InbredSet USING (InbredSetId) LEFT JOIN GeneChip USING (GeneChipId) LEFT JOIN AvgMethod USING (AvgMethodId) LEFT JOIN Datasets USING (DatasetId) LEFT JOIN Investigators USING (InvestigatorId) LEFT JOIN Organizations USING (OrganizationId) LEFT JOIN DatasetStatus USING (DatasetStatusId) WHERE "
				if(self.GN_AccessionId):
						final_sql = sql + "GN_AccesionId=%s"
						debug_file.write("BEFORE QUERY1\n")
						cursor.execute(final_sql, self.GN_AccessionId)
						results = cursor.fetchone()
						if (self.InfoPageName) and not results:
								final_sql = sql + "InfoPageName=%s"
								cursor.execute(final_sql, self.InfoPageName)
								debug_file.write("BEFORE QUERY1.2\n")
								self.info = cursor.fetchone()
						else:
								self.info = results
				elif (self.InfoPageName):
						sql += "InfoPageName=%s"
						debug_file.write("BEFORE QUERY2\n")
						cursor.execute(sql, self.InfoPageName)
						self.info = cursor.fetchone()
				else:
						raise 'No correct parameter found'
				if (not self.info or len(self.info) < 1) and self.InfoPageName and create:
					sql = "INSERT INTO InfoFiles SET InfoFiles.InfoPageName=%s"
					debug_file.write("BEFORE INSERT\n")
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
					# try:
					# 	conn = httplib.HTTPConnection("datafiles.genenetwork.org")
					# 	conn.request("GET", "/download/GN%s/" % (self.GN_AccessionId))
					# 	data = conn.getresponse().read()
					# 	conn.close()
					# 	matches = re.findall(r"<tr><td valign=\"top\">.+?</tr>", data)
					# 	for match in matches:
					# 		if "/icons/back.gif" in match:
					# 			continue
					# 		filename = re.search(r"<a href=\"(.+?)\"", match).group(1).strip()
					# 		datesize = re.findall(r"<td align=\"right\">.+?</td>", match)
					# 		filedate = re.search(r">(.+?)<", datesize[0]).group(1).strip()
					# 		filesize = re.search(r">(.+?)<", datesize[1]).group(1).strip()
					# 		self.filelist.append([filename, filedate, filesize])
					# except Exception, e:
					# 	pass
					try:
						response = urllib2.urlopen("http://datafiles.genenetwork.org/download/GN%s" % self.GN_AccessionId)
						data = response.read()

						matches = re.findall(r"<tr>.+?</tr>", data, re.DOTALL)
						for i, match in enumerate(matches):
							if i == 0:
								continue
							cells = re.findall(r"<td>.+?</td>", match, re.DOTALL)
							full_filename = re.search(r"<a href=\"(.+?)\"", cells[1], re.DOTALL).group(1).strip()
							filename = full_filename.split("/")[-1]
							filesize = re.search(r">(.+?)<", cells[2]).group(1).strip()
							#filedate = re.search(r">(.+?)<", datesize[0]).group(1).strip()
							filedate = "N/A" #ZS: Since we can't get it for now

							self.filelist.append([filename, filedate, filesize])
					except Exception, e:
					 	pass

				
		def getBody(self, infoupdate=""):
				htmlfilelist = '<ul style="line-height:160%;">\n'
				for file in self.filelist:
					htmlfilelist += "<li>"
					htmlfilelist += '<a href="http://datafiles.genenetwork.org/download/GN%s/%s">%s (%s)</a>' % (self.GN_AccessionId, file[0], file[0], file[2])
					htmlfilelist += "</li>\n"
				htmlfilelist += "</ul>"
				info = self.info
				try:
					return SharingBody.sharinginfo_body_string % (info[9], info[0], info[35], infoupdate, info[38], info[1], info[1], info[10], info[10], info[10], info[11], info[3], info[2], info[5], info[4], info[12], info[7], info[6], info[8], info[22], info[23], info[33], info[24], info[25], info[26], info[27], info[28], info[29], info[30], info[31], htmlfilelist, info[39], info[13], info[14], info[15], info[37], info[16], info[21], info[18], info[19], info[20], info[17], info[35])
				except:
					return SharingBody.sharinginfo_body_string_empty
