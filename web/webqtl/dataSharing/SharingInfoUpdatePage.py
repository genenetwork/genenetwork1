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
				GEO_Series=self.trimValue(fd.formdata.getvalue('GEO_Series'))
				Status=self.trimValue(fd.formdata.getvalue('Status'))
				Title=self.trimValue(fd.formdata.getvalue('Title'))
				Organism_Id=self.trimValue(fd.formdata.getvalue('Organism_Id'))
				Organism=self.trimValue(fd.formdata.getvalue('Organism'))
				Experiment_Type =self.trimValue(fd.formdata.getvalue('Experiment_Type')) 
				Summary=self.trimValue(fd.formdata.getvalue('Summary'))
				Overall_Design=self.trimValue(fd.formdata.getvalue('Overall_Design'))
				Contributor=self.trimValue(fd.formdata.getvalue('Contributor'))
				Citation=self.trimValue(fd.formdata.getvalue('Citation'))
				Submission_Date=self.trimValue(fd.formdata.getvalue('Submission_Date'))
				Contact_Name=self.trimValue(fd.formdata.getvalue('Contact_Name'))
				Emails=self.trimValue(fd.formdata.getvalue('Emails'))
				Phone=self.trimValue(fd.formdata.getvalue('Phone'))
				URL=self.trimValue(fd.formdata.getvalue('URL'))
				Organization_Name=self.trimValue(fd.formdata.getvalue('Organization_Name'))
				Department=self.trimValue(fd.formdata.getvalue('Department'))
				Laboratory=self.trimValue(fd.formdata.getvalue('Laboratory'))
				Street=self.trimValue(fd.formdata.getvalue('Street'))
				City=self.trimValue(fd.formdata.getvalue('City'))
				State=self.trimValue(fd.formdata.getvalue('State'))
				ZIP=self.trimValue(fd.formdata.getvalue('ZIP'))
				Country=self.trimValue(fd.formdata.getvalue('Country'))
				Platforms=self.trimValue(fd.formdata.getvalue('Platforms'))
				Samples=self.trimValue(fd.formdata.getvalue('Samples'))
				Species=self.trimValue(fd.formdata.getvalue('Species'))
				Tissue=self.trimValue(fd.formdata.getvalue('Tissue'))
				Normalization=self.trimValue(fd.formdata.getvalue('Normalization'))
				InbredSet=self.trimValue(fd.formdata.getvalue('InbredSet'))
				InfoPageName=self.trimValue(fd.formdata.getvalue('InfoPageName'))
				InfoPageTitle=self.trimValue(fd.formdata.getvalue('InfoPageTitle'))
				About_Cases=self.trimValue(fd.formdata.getvalue('About_Cases'))
				About_Tissue=self.trimValue(fd.formdata.getvalue('About_Tissue'))
				About_Download=self.trimValue(fd.formdata.getvalue('About_Download'))
				About_Array_Platform=self.trimValue(fd.formdata.getvalue('About_Array_Platform'))
				About_Data_Values_Processing=self.trimValue(fd.formdata.getvalue('About_Data_Values_Processing'))
				Data_Source_Acknowledge=self.trimValue(fd.formdata.getvalue('Data_Source_Acknowledge'))
				AuthorizedUsers=self.trimValue(fd.formdata.getvalue('AuthorizedUsers'))
				Progress=self.trimValue(fd.formdata.getvalue('Progress'))
				if Id=='-1':
						sharingInfoObject = SharingInfo2.SharingInfo2(GN_AccesionId, InfoPageName)
						GN_AccessionId,InfoPageName,info = sharingInfoObject.getInfo()
						if info:
								heading = "Editing Info"
								detail = ["The new dataset info record is duplicate."]
								self.error(heading=heading, detail=detail, error="Error")
								return
						sql = """INSERT INTO InfoFiles SET GN_AccesionId=%s, GEO_Series=%s, Status=%s, Title=%s, Organism_Id=%s, Organism=%s, Experiment_Type=%s, Summary=%s, Overall_Design=%s, Contributor=%s, Citation=%s, Submission_Date=%s, Contact_Name=%s, Emails=%s, Phone=%s, URL=%s, Organization_Name=%s, Department=%s, Laboratory=%s, Street=%s, City=%s, State=%s, ZIP=%s, Country=%s, Platforms=%s, Samples=%s, Species=%s, Tissue=%s, Normalization=%s, InbredSet=%s, InfoPageName=%s, InfoPageTitle=%s, About_Cases=%s, About_Tissue=%s, About_Download=%s, About_Array_Platform=%s, About_Data_Values_Processing=%s, Data_Source_Acknowledge=%s, AuthorizedUsers=%s, Progreso=%s"""
						cursor.execute(sql, tuple([GN_AccesionId, GEO_Series, Status, Title, Organism_Id, Organism, Experiment_Type, Summary, Overall_Design, Contributor, Citation, Submission_Date, Contact_Name, Emails, Phone, URL, Organization_Name, Department, Laboratory, Street, City, State, ZIP, Country, Platforms, Samples, Species, Tissue, Normalization, InbredSet, InfoPageName, InfoPageTitle, About_Cases, About_Tissue, About_Download, About_Array_Platform, About_Data_Values_Processing, Data_Source_Acknowledge, AuthorizedUsers, Progress]))
						infoupdate="This record has been succesfully added."
				else:
						sql = """UPDATE InfoFiles SET GN_AccesionId=%s, GEO_Series=%s, Status=%s, Title=%s, Organism_Id=%s, Organism=%s, Experiment_Type=%s, Summary=%s, Overall_Design=%s, Contributor=%s, Citation=%s, Submission_Date=%s, Contact_Name=%s, Emails=%s, Phone=%s, URL=%s, Organization_Name=%s, Department=%s, Laboratory=%s, Street=%s, City=%s, State=%s, ZIP=%s, Country=%s, Platforms=%s, Samples=%s, Species=%s, Tissue=%s, Normalization=%s, InbredSet=%s, InfoPageName=%s, InfoPageTitle=%s, About_Cases=%s, About_Tissue=%s, About_Download=%s, About_Array_Platform=%s, About_Data_Values_Processing=%s, Data_Source_Acknowledge=%s, AuthorizedUsers=%s, Progreso=%s WHERE Id=%s"""
						cursor.execute(sql, tuple([GN_AccesionId, GEO_Series, Status, Title, Organism_Id, Organism, Experiment_Type, Summary, Overall_Design, Contributor, Citation, Submission_Date, Contact_Name, Emails, Phone, URL, Organization_Name, Department, Laboratory, Street, City, State, ZIP, Country, Platforms, Samples, Species, Tissue, Normalization, InbredSet, InfoPageName, InfoPageTitle, About_Cases, About_Tissue, About_Download, About_Array_Platform, About_Data_Values_Processing, Data_Source_Acknowledge, AuthorizedUsers, Progress, Id]))
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
