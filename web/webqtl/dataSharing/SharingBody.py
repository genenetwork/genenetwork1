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

sharing_body_string = """
<TD vAlign=top width="100%" align="left" height=10 bgColor=#eeeeee>

							<p style="font-size:18px;font-family:verdana;color:black"><B> Data Set Download</B></p>
							<Form METHOD="get" ACTION="/webqtl/main.py" name="SEARCHFORM">

								<TABLE width="800" border="0">
					
					<!--  SPECIES  SELECTION -->				
									<TR>
										<TD align=right height="35" style="font-size:14px;font-family:verdana;color:black" width="16%">
											<B>Species:</B>
										</TD>
										<TD width="3%">
										</TD>
										<TD NOWRAP width="85%" align="left">
											<DIV Id="menu0">
												<Select NAME="species" size=1 id="species" onchange="fillOptions('species');">
												</Select>
											</DIV>
										</TD>
									</TR>
				
					<!--  GROUP  SELECTION -->	
									<TR>
										<TD align="right" height="35" style="font-size:14px;font-family:verdana;color:black">
											<B>Group:</B>
										</TD>
										<TD>
										</TD>
										<TD NOWRAP width="85%" align="left">
											<DIV Id="menu1">

												<Select NAME="cross" size=1 id="cross" onchange="fillOptions('cross');">
												</Select>
											<input type="button" class="button" value=" Info " onCLick="javascript:crossinfo();">
											</DIV>
										</TD>
									</TR>

					<!--  TYPE  SELECTION -->		
									<TR>
										<TD align=right height=35 style="font-size:14px;font-family:verdana;color:black">
											<B>Type:</B>
										</TD>
										<TD>
										</TD>
										<TD NOWRAP width="85%" align="left">
											<DIV Id="menu2">
												<Select NAME="tissue" size=1 id="tissue" onchange="fillOptions('tissue');">

												</Select>
											</DIV>
										</TD>
									</TR>

					<!--  DATABASE  SELECTION -->		
									<TR>
										<TD align=right height=35 style="font-size:14px;font-family:verdana;color:black">
											<B>Database:</B>
										</TD>
										<TD>
										</TD>
										<TD NOWRAP width="85%" align="left">
											<DIV Id="menu3">
												<Select NAME="database" size=1 id="database"> 
												</Select>
												<input type="button" class="button" value=" Info " onCLick="javascript:databaseinfo();">
											</DIV>
										</TD>
									</TR>

<!--  SEARCH, MAKE DEFAULT, ADVANCED SEARCH -->
									<TR>
										<td></td>
										<td></td>
										<TD ALIGN="left" HEIGHT="40">
											&nbsp;&nbsp;&nbsp;<INPUT TYPE="button" CLASS="button" STYLE="font-size:12px" VALUE="&nbsp;&nbsp;Download&nbsp;&nbsp;" onCLick="javascript:datasetinfo();">
										</TD>
									</TR>
								</TABLE>

								<SCRIPT SRC="/javascript/selectDatasetMenu.js"></SCRIPT>
							</FORM>
							
							<p style="font-size:18px;font-family:verdana;color:black"><B> GeneNetwork Accession Number</B></p>
							<form method="get" action="/webqtl/main.py" name="f2" target="_blank">
								<INPUT TYPE="hidden" NAME="FormID" VALUE="sharinginfo">
								<TABLE width="800" border="0">
									<tr>
										<td align=right height="35" style="font-size:14px;font-family:verdana;color:black" width="16%"><b>GN:</b></td>
										<td width=3%></td>
										<td><input type="text" name="GN_AccessionId" size="40" />&nbsp;&nbsp;E.g. 112</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td HEIGHT="40">
											&nbsp;&nbsp;&nbsp;<input type="Submit" class="button" STYLE="font-size:12px" VALUE="&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;">
										</td>
									</tr>
								</table>
							</form>
							
</td>
"""
# Note by AC: List of %s variables are listed in SharingInfo2.py 
sharinginfo_body_string = """<td>

<!--<a href="/webqtl/main.py?FormID=sharingListDataset">List of DataSets</a><br>-->

<H1 class="title" id="parent-fieldname-title">Data Set Group: %s <!--info[9] Datasets.DatasetName-->
<!--
<a href="/webqtl/main.py?FormID=sharinginfoedit&InfoPageName=%s"><img src="/images/modify.gif" alt="modify this page" border="0" valign="middle"></a>
-->
<a href="/infoshare/manager/member-studies-edit.html?DatasetId=%s"><img src="/images/modify.gif" alt="modify this page" border="0" valign="middle"></a>
<span style="color:red;">%s</span> <!--info[0] InfoPageName-->
</H1>
<table border="0" width="100%%">
<tr>
<td valign="top" width="50%%">
<TABLE name="infoTable" cellSpacing=0 cellPadding=5 width=100%% border=0>
                      <TR><td><b>Data Set:</b>  %s <a href="/infoshare/manager/member-infofile-edit.html?GN_AccesionId=%s"><img src="/images/modify.gif" alt="modify this page" border="0" valign="middle"></a></TD></tr> <!--info[38] InfoFileTitle-->
                      <TR><td><b>GN Accession:</b> GN%s</TD></tr> <!--info[1] GN_AccesionId-->
                      <!--<TR><TD><b>GEO Series:</b> %s</TD></TR>--> <!--info[10] Datasets.GeoSeries-->
                      <TR><TD><b>GEO Series:</b> <a href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=%s" target="_blank">%s</a></TD></tr> <!--info[10] Datasets.GeoSeries-->
                      <TR><TD><b>Title:</b> %s</TD></TR> <!--info[11] Datasets.PublicationTitle-->
                      <TR><TD><b>Organism:</b> <a href="http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=%s" target="_blank">%s</a></TD></tr> <!--info[3] Species.TaxonomyId--> <!--info[2] Species.MenuName-->
                      <tr><TD><b>Group:</b> %s</TD></TR> <!--info[5] InbredSet.Name-->
                      <TR><TD><b>Tissue:</b> %s</TD></tr> <!--info[4] Tissue.Name-->
                      <tr><TD><b>Dataset Status:</b> %s</TD></tr> <!--info[12] DatasetStatus.DatasetStatusName-->
                      <TR><TD><b>Platforms:</b> <a href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=%s" target="_blank">%s</a></TD></TR> <!--info[7] GeneChip.GeoPlatform--> <!--info[6] GeneChip.Title-->
                      <TR><TD><b>Normalization:</b> %s</TD></TR> <!--info[8] AvgMethod.Name-->
</TABLE>
</td>
<td valign="top" width="50%%">
<table border="0" width="100%%">
    <tr>
	<td><b>Contact Information</b></td>
    </tr>
    <tr><td>
    %s %s<br> <!--info[22] Investigators.FirstName--> <!--info[23] Investigators.LastName-->
    %s<br> <!--info[33] Organizations.OrganizationName-->
    %s<br> <!--info[24] Investigators.Address-->
    %s, %s %s %s<br> <!--info[25] Investigators.City--><!--info[26] Investigators.State--><!--info[27] Investigators.ZipCode--><!--info[28] Investigators.Country-->
    Tel. %s<br> <!--info[29] Investigators.Phone-->
    %s<br> <!--info[30] Investigators.Email-->
    <a href="%s" target="_blank">Website</a> <!--info[31] Investigators.Url--><!--info[31] Investigators.Url-->
    </span><!--Code above to Show hide Contact information --></TD></TR>
<!--START HERE-->
<tr>
	<td><b>Download datasets and supplementary data files</b></td>
</tr>
<tr>
	<td>%s</td><!--htmlfilelist-->
</tr>

<tr><td>
<!--
<TABLE BORDER=1 CELLSPACING=0 CELLPADDING=4>
<TR bgcolor="royalblue">
<TD COLSPAN="4"><font color=#FFFFFF>QC metrics</font></TD>
</TR>
<tr>
<TD ALIGN="left">No of strains</TD>
<TD ALIGN="left">46</TD>
<TD ALIGN="left">LRS=(46 2000)</TD>
<TD ALIGN="left">150</TD>
</TR>
<TR>
<TD ALIGN="left">No of samples</TD>
<TD ALIGN="left">46</TD>
<TD ALIGN="left">Mean</TD>
<TD ALIGN="left">15.0</TD>
</TR>

</TABLE>
-->
</td></tr>


<!--END-->
</table>
</td>
</tr>
</table>
<HR>
<p>
<table name="infoTable" width="100%%" border="0" cellpadding="5" cellspacing="0">
<tr><td><span style="font-size:115%%;font-weight:bold;">Specifics of this Data Set:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[39] InfoFiles.Specifics-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Summary:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[13] Datasets.Summary-->
<tr><td><span style="font-size:115%%;font-weight:bold;">About the cases used to generate this set of data:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[14] Datasets.AboutCases-->
<tr><td><span style="font-size:115%%;font-weight:bold;">About the tissue used to generate this set of data:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[15] Datasets.AboutTissue-->
	<tr><td><span style="font-size:115%%;font-weight:bold;">About the array platform:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[7] GeneChip.AboutPlatform ** possible redundancy-->
<tr><td><span style="font-size:115%%;font-weight:bold;">About data values and data processing:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[16] Datasets.AboutDataProcessing-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Notes:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[21] Datasets.Notes **-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Experiment Type:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[18] Datasets.Citation **-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Contributor:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[19] Datasets.Contributors-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Citation:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[20] Datasets.Citation-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Data source acknowledgment:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[17] Datasets.Acknowledgment-->
<tr><td><span style="font-size:115%%;font-weight:bold;">Study Id:</span></td></tr>
	<tr><td> %s<br><br></td></tr> <!--info[20] Datasets.Citation **-->

</table>
</p>
</td>
"""
# Note by AC: List of %s variables are listed in SharingInfoEditPage.py
sharinginfoedit_body_string = """<td>
<H1 class="title">%s</H1>
<script language="javascript">
function CheckGNAccesionId(){
	if (document.sharinginfoupdate.GN_AccesionId.value.length  ==  0){
		alert("Please input GN Accesion Id");
		document.sharinginfoupdate.GN_AccesionId.focus();
		return false;
	} else {
		return true;
	}
}
function CheckInfoPageName(){
	if (document.sharinginfoupdate.InfoPageName.value.length  ==  0){
		alert("Please input InfoPageName");
		document.sharinginfoupdate.InfoPageName.focus();
		return false;
	} else {
		return true;
	}
}
</script>
<table border="0" CELLSPACING="0" CELLPADDING="8">
<form name="sharinginfoupdate" method="post" action="/webqtl/main.py?FormID=sharinginfoupdate" onsubmit="return CheckInfoPageName();">
<input type="hidden" name="Id" value="%s">
   <HR>
  <tr><TH COLSPAN=2><h2 class="title">Principal Investigator</h2></TH></tr>
   <tr><td align="right" width="100"><b>First Name:</b></td><td width="200"><input type='text' name='FirstName' size='90' value='%s' readonly></td></tr>
   <tr><td align="right" width="100"><b>Last Name:</b></td><td width="200"><input type='text' name='LastName' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>Emails:</b></td><td><input type='text' name='Emails' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>Phone:</b></td><td><input type='text' name='Phone' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>URL:</b></td><td><input type='text' name='URL' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>Organization Name:</b></td><td><input type='text' name='Organization_Name' size='90' value='%s' readonly></td></tr>

   <tr><td align="right"><b>Address:</b></td><td><input type='text' name='Street' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>City:</b></td><td><input type='text' name='City' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>State:</b></td><td><input type='text' name='State' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>ZIP:</b></td><td><input type='text' name='ZIP' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>Country:</b></td><td><input type='text' name='Country' size='90' value='%s' readonly></td></tr>
   <tr><TH COLSPAN=2><h2 class="title">Specifics of this Data Set</h2></TH></tr>
  <tr><td align="right"><b>Specifics: </b></td><td><TEXTAREA NAME="Specifics" cols="77" rows="15">%s</textarea></td></tr>
  <tr><TH COLSPAN=2><h2 class="title">Summary</h2></TH></tr>
  <tr><td align="right"><b>Summary: </b></td><td><TEXTAREA NAME="Summary" cols="77" rows="15">%s</textarea></td></tr>
   
  <tr><TH COLSPAN=2><h2 class="title">Biology</h2></TH></tr>
  <tr><td align="right"><b>Experiment Design:</b></td><td><TEXTAREA NAME="Experiment_Type" cols="77" rows="15">%s</textarea></td></tr>
  <tr><td align="right"><b>About the cases used to<br>generate this set of data:</b></td><td><TEXTAREA NAME="About_Cases" cols="77" rows="15">%s</textarea></td></tr>
  <tr><td align="right"><b>About the tissue used to<br>generate this set of data:</b></td><td><TEXTAREA NAME="About_Tissue" cols="77" rows="15">%s</textarea></td></tr>
  
  <tr><TH COLSPAN=2><h2 class="title">Bioinformatics</h2></TH></tr>
  <tr><td align="right"><b>About data values and<br>data processing:</b></td><td><TEXTAREA NAME="About_Data_Values_Processing" cols="77" rows="15">%s</textarea></td></tr>
  
  <tr><TH COLSPAN=2><h2 class="title">Misc</h2></TH></tr>
  <tr><td align="right"><b>Contributor:</b></td><td><TEXTAREA NAME="Contributor" cols="77" rows="15">%s</textarea></td></tr>
  <tr><td align="right"><b>Citation:</b></td><td><TEXTAREA NAME="Citation" cols="77" rows="5">%s</textarea></td></tr>
  <tr><td align="right"><b>Data source acknowledgment:</b></td><td><TEXTAREA NAME="Data_Source_Acknowledge" cols="77" rows="15">%s</textarea></td></tr>

  <tr><TH COLSPAN=2><h2 class="title">Administrator ONLY</h2></TH></tr>
  <tr><td align="right"><b>GN Accesion Id:</b></td><td><input type='text' name='GN_AccesionId' size='90' value='%s' readonly></td></tr>
   <tr><td align="right"><b>DB Title in GN:</b></td><td><input type='text' name='InfoPageTitle' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>GEO Series:</b></td><td><input type='text' name='GEO_Series' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Status:</b></td><td><input type='text' name='Status' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Title:</b></td><td><input type='text' name='Title' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Organism_Id (Taxonomy ID):</b></td><td><input type='text' name='Organism_Id' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Organism:</b></td><td><input type='text' name='Organism' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Platform:</b></td><td><input type='text' name='Platform' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>About Platform:</b></td><td><input type='text' name='About Platform' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Tissue:</b></td><td><input type='text' name='Tissue' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Normalization:</b></td><td><input type='text' name='Normalization' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Inbred Set:</b></td><td><input type='text' name='InbredSet' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>Info Page Name:</b></td><td><input type='text' name='InfoPageName' size='90' value='%s'></td></tr>
   <tr><td align="right"><b>InvestigatorId:</b></td><td><input type='text' name='InvestigatorId' size='10' value='%s'></td></tr>
   <tr><td align="right"><b>DatasetId:</b></td><td><input type='text' name='DatasetId' size='10' value='%s'></td></tr>  
   <tr><td align="right"><b>DatasetStatusId:</b></td><td><input type='text' name='DatasetStatusId' size='10' value='%s'></td></tr>

  <tr><td> <colspan='2' align="center"><input type="Submit" class="button" style="font-size:12px" value="  Submit  "></td></tr>

</form>
</table>
</td>
"""
