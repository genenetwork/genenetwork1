index_body_string = """
<TD vAlign=top width="40%" align="left" height=10 bgColor=#FFFAFA>
							<p style="font-size:18px;font-family:verdana;color:black"><B> Select and Search</B>
							<Form METHOD="POST" ACTION="/webqtl/main.py" ENCTYPE="multipart/form-data" NAME="SEARCHFORM">
								<TABLE width="100%">
								
					<!--  TYPE  SELECTION -->		
		
									<TR>
										<TD align=left style="font-size:14px;font-family:arial;color:black">
											<B>Find </B>
										</TD>
									</TR>										
									<TR>
										<TD NOWRAP width="50%" align="left">
											<DIV Id="type_select">
												<Select NAME="type" size=1 style="width:200px;" id="type_menu" Class="type_menu">
													<Option value="Hippocampus">Genes/Molecular traits</Option>
													<Option value="Phenotypes">Phenotypes</Option>
													<Option value="Genotypes">Markers/SNPs</Option>
												</Select>
											</DIV>
										</TD>
									</TR>								
								
					<!-- SEARCH -->		
								 	<TR>
										<TD align=left NOWRAP="on" style="font-size:14px;font-family:arial;color:black" width="10%">
											<B>related to </B>
										</TD>
									</TR>								 		
									<TR valign="bottom">
										<TD NOWRAP width="60%" align="left">
											<input name="keyword" style="width:375px; background-color:white; font-family:arial; font-size:14px" type="text" maxlength="500">
											<select name="and_or" style="width:60px;">
												<option value="OR" selected="yes">ANY</option>
												<option value="AND">ALL</option>
											</select>
										</TD>		
																		
										<TD ALIGN="left">
										    <INPUT id="btsearch" TYPE="Submit" CLASS="button" STYLE="font-size:12px" VALUE="  Search  ">
										</TD>										
									</TR>	
									
									<TR>
										<TD align="center" valign="top" colspan=3>
											<A HREF="#" Class="toggle_advanced"> Advanced Options </A>
										</TD>								
									</TR>				

					<!--  SPECIES  SELECTION -->	
										<TR Class="advanced_option">
											<TD align=left style="font-size:14px;font-family:arial;color:black" width="10%">
												<B>Species</B>
											</TD>		
										</TR>											
										<TR Class="advanced_option">
											<TD NOWRAP width="50%" align="left">
												<DIV Id="menu0">
													<Select NAME="species" size=1 id="species" onchange="fillOptions('species');">
													</Select>
												</DIV>
											</TD>
										</TR>
					
						<!--  GROUP  SELECTION -->	
										<TR Class="advanced_option">
											<TD align=left style="font-size:14px;font-family:arial;color:black" width="10%">
												<B>Group</B>
											</TD>		
										</TR>				
										<TR Class="advanced_option">
											<TD NOWRAP width="50%" align="left">
												<DIV Id="menu1">
													<Select NAME="cross" size=1 id="cross" onchange="fillOptions('cross');">
													</Select>
												<input type="button" class="buttonsmaller" value="Info" onCLick="javascript:crossinfo();">
												</DIV>
											</TD>
										</TR>

						<!--  TISSUE  SELECTION -->		
										<TR Class="advanced_option">
											<TD align=left style="font-size:14px;font-family:arial;color:black" width="10%">
												<B>Tissue/Type</B>
											</TD>		
										</TR>			
										<TR Class="advanced_option">
											<TD NOWRAP width="50%" align="left">
												<DIV Id="menu2">
													<Select NAME="tissue" size=1 id="tissue" onchange="fillOptions('tissue');">
													</Select>
												</DIV>
											</TD>
										</TR>											
										
			
						<!--  DATABASE  SELECTION -->	
										<TR Class="advanced_option">
											<TD align=left style="font-size:14px;font-family:arial;color:black" width="10%">
												<B>Database</B>
											</TD>		
										</TR>							
										<TR Class="advanced_option">								
											<TD NOWRAP width="50%" align="left">
												<DIV Id="menu3">
													<Select NAME="database" size=1 id="database"> 
													</Select>
													<input type="button" class="buttonsmaller" value="Info" onCLick="javascript:databaseinfo();">
												</DIV>
											</TD>
											
										</TR>
	
						<!--  USER HELP   -->				
										<TR Class="advanced_option">
											<TD align="left" width="50%">
												<P class="fs12">&nbsp;&nbsp;&nbsp;&nbsp;Databases marked with <B>**</B> suffix are not public yet. 
												<BR>&nbsp;&nbsp;&nbsp;&nbsp;Access requires <A HREF="http://www.genenetwork.org/account.html" target="_blank" class="fs14"><small>user login</small></A>.</P>
											</TD>
										</TR
	
	<!--  SEARCH, ADVANCED SEARCH, MAKE DEFAULT  -->
	
										<TR ALIGN="center" Class="advanced_option">
											<TD ALIGN="left" HEIGHT="40" COLSPAN=3>
											   <TABLE WIDTH="50%">
											       <TD ALIGN="left" width="20%">
											           <INPUT TYPE="button" CLASS="button" STYLE="font-size:12px" VALUE="  Make Default  " onClick = "setDefault(this.form);">	
											       </TD>
											       <TD ALIGN="left">
												       &nbsp;&nbsp;&nbsp;<INPUT TYPE="button" CLASS="button" STYLE="font-size:12px" VALUE="Advanced Search" onClick="javascript:window.open('index3.html', '_self');">
											       </TD>
											   </TABLE>
											</TD>
										</TR>

								</TABLE>
								<INPUT TYPE="hidden" NAME="FormID" VALUE="searchResult">
								<INPUT TYPE="hidden" NAME="RISet" VALUE="BXD">
								<SCRIPT SRC="/javascript/selectDatasetMenu.js"></SCRIPT>
							</FORM>
							</CENTER>






<!--  QUICK HELP  -->

<P><LEFT>&nbsp;______________________________________________________

<P STYLE="font-size:13px;font-family:verdana;color:black"><B>&nbsp;

Quick HELP Examples and </B>
<A HREF="http://www.genenetwork.org/index4.html" target="_blank"  class="fs14"><B>
 User's Guide</B></A></P>

</CENTER style="font-size:12px;font-family:verdana;color:black">
&nbsp;&nbsp;You can also use advanced commands. Copy these simple examples 
<BR>&nbsp;&nbsp;into the <B>Get Any</B> or <B>Combined</B> search fields:
<UL style="font-size:12px;font-family:verdana;color:black">

<LI><B><I>POSITION=(chr1 25 30)</I></B> finds genes, markers, or transcripts on chromosome 1 between 25 and 30 Mb.

<LI><B><I>MEAN=(15 16) LRS=(23 46)</I></B> in the <B>Combined</B> field finds highly expressed genes (15 to 16 log2 units) AND with peak <A HREF="http://www.genenetwork.org/glossary.html#L" target="_blank"  class="fs14"><small>LRS</small></A> linkage between 23 and 46.


<LI><B><I>RIF=mitochondrial</I></B> searches RNA databases for <A HREF="http://www.ncbi.nlm.nih.gov/projects/GeneRIF/GeneRIFhelp.html" target="_blank"  class="fs14"><small>GeneRIF</small></A> links.

<LI><B><I>WIKI=nicotine</I></B> searches <A HREF="http://www.genenetwork.org/webqtl/main.py?FormID=geneWiki" target="_blank"  class="fs14"><small>GeneWiki</small></A> for genes that you or other users have annotated with the word <I>nicotine</I>.

<LI><B><I>GO:0045202</I></B> searches for synapse-associated genes listed in the <A HREF="http://www.godatabase.org/cgi-bin/amigo/go.cgi" target="_blank"  class="fs14"><small>Gene Ontology</small></A>.


<LI><B><I>GO:0045202 LRS=(9 99 Chr4 122 155) cisLRS=(9 999 10)</I> </B><BR> in <B>Combined</B> finds synapse-associated genes with <A HREF="http://www.genenetwork.org/glossary.html#E" target="_blank"  class="fs14"><small>cis eQTL</small></A> on Chr 4 from 122 and 155 Mb with LRS scores between 9 and 999.

<LI><B><I>RIF=diabetes LRS=(9 999 Chr2 100 105) transLRS=(9 999 10)</I> </B><BR> in <B>Combined</B> finds diabetes-associated transcripts with peak <A HREF="http://www.genenetwork.org/glossary.html#E" target="_blank"  class="fs14"><small>trans eQTLs</small></A> on Chr 2 between 100 and 105 Mb with LRS scores between 9 and 999.


</UL> 
</DIR>
					</TD>				
<!-- END OF FIND SELECTOR PULL-DOWN PANEL (LEFT SIDE)  -->

<!-- START OF TOP RIGHT PANEL  -->

<TD vAlign=top width="40%" bgColor=#FFFFFF>
							<p style="font-size:15px;font-family:verdana;color:black"><B>Top New Features</B> &nbsp;&nbsp; </p>

							<BLOCKQUOTE>
                                                                <p style="font-size:12px;font-family:verdana;color:black"> GeneNetwork on the <A HREF="http://ec2.genenetwork.org" target="_blank" class="fs14"><small>Cloud (EC2)</small></A></P>
                                                        </BLOCKQUOTE>

	<BLOCKQUOTE>
		<p style="font-size:12px;font-family:verdana;color:black"> GeneNetwork on <A HREF="https://sourceforge.net/projects/genenetwork/" target="_blank" class="fs14"><small>SourceForge</small></A></P>
	</BLOCKQUOTE>

							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black"> Download GeneNetwork <A HREF="http://www.genenetwork.org/GN_July_05_2011.tar" target="_blank" class="fs14"><small>source code</small></A> and database (<A HREF="http://www.genenetwork.org/db_webqtl_simplified_1.sql.gz" target="_blank" class="fs14"><small>slim version</small></A>). See installation <A HREF="http://wiki.genenetwork.org/index.php/Mirror_Installation_Requirements" target="_blank" class="fs14"><small>requirements</small></A> and <A HREF="ftp://tyche.uthsc.edu/GN_install.sh" target="_blank" class="fs14"><small>instructions</small></A>.</P>
							</BLOCKQUOTE>

							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black"> The upgraded <A HREF="http://www.genenetwork.org/webqtl/main.py?FormID=snpBrowser" target="_blank" class="fs14"><small>Variant Browser</small></A> now incorporates 70 million mouse SNPs for 94 strains.</P>
							</BLOCKQUOTE>

							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black"> <A HREF="http://ucscbrowser.genenetwork.org/" target="_blank" class="fs14"><small>Whole-Genome Sequencing</small></A> data for the DBA/2J mouse strains and brain <A HREF="http://ucscbrowser.genenetwork.org/" target="_blank" class="fs14"><small>RNA-seq</small></A> for BXD strains</P>
							</BLOCKQUOTE>		

							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black"> <A HREF="http://galaxy.genenetwork.org/" target="_blank" class="fs14"><small>CITG Galaxy Service</small></A>: 200-core cluster at UTHSC for next-gen sequence analysis</P>
							</BLOCKQUOTE>


							<P>____________________________



						
							<p style="font-size:15px;font-family:verdana;color:black"><B>Getting Started</B> &nbsp;&nbsp; </p>
							<OL style="font-size:12px;font-family:verdana;color:black">
								<LI>Select <B>Species</B> (or select All) 
								<LI>Select <B>Group</B> (a specific sample)
								<LI>Select <B>Type</B> of data:  
								<UL>

									<LI>Phenotype (traits)
									<LI>Genotype (markers)
									<LI>Expression (mRNAs)
								</UL>
								<LI>Select a <B>Database</B> 
								<LI>Enter search terms in the <B>Get Any</B> or <B>Combined</B> field: words, genes, ID numbers, probes, advanced search commands 
								<LI>Click on the <B>Search</B> button
								<LI>Optional: Use the <B>Make Default</B> button to save your preferences
							
							</OL>

							<P>____________________________

<p style="font-size:14px;font-family:verdana;color:black"><B>How to Use GeneNetwork</B>

							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black">Take a 20-40 minute GeneNetwork <A HREF="http://www.genenetwork.org/tutorial/WebQTLTour/" target="_blank" class="fs14"><small>Tour</small></A> that includes screen shots and typical steps in the analysis.</P>
							</BLOCKQUOTE>							
							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black">For information about resources and methods, select the <img src="http://www.genenetwork.org/images/upload/Info.png" alt="INFO" border= 0 valign="middle"> buttons.</P>

													
														
<p style="font-size:12px;font-family:verdana;color:black">Try the <A HREF="http://proust.uthsc.edu" target="_blank" class="fs14"><small>Test</small></A> site to explore data and features that are being implemented.</P>


<p style="font-size:12px;font-family:verdana;color:black">Review the <A HREF="/conditionsofUse.html" target="_blank" class="fs14"><small>Conditions</small></A> and <A HREF="/statusandContact.html" target="_blank" class="fs14"><small>Contacts</small></A> pages for information on the status of data sets and advice on their use and citation.</P> 


							</BLOCKQUOTE>

							

							<p style="font-size:14px;font-family:verdana;color:black"><B>Mirror and Development Sites</B></P>

							<UL>
								<LI><A HREF="http://www.genenetwork.org/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Main GN site at UTHSC</A> (main site)
								<LI><A HREF="http://www.genenetwork.waimr.uwa.edu.au/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Australia at the UWA</A>
								<LI><A HREF="http://www.sysgen.org.au/bottom.html" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Genome-Centered Systems Genetics at UWA</A> (Morahan and colleagues)			
								<LI><A HREF="http://gn.genetics.ucla.edu/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">California at UCLA</A>

								<LI><A HREF="http://genenetwork.helmholtz-hzi.de/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Germany at the HZI</A>
								<LI><A HREF="https://genenetwork.hubrecht.eu/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Netherlands at the Hubrecht</A> (Development)
								<LI><A HREF="http://xzhou3.memphis.edu/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Memphis at the U of M</A>
								<LI><A HREF="http://gnat.versailles.inra.fr/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">France at INRA, Versailles</A> (Development)
								<LI><A HREF="http://webqtl.bic.nus.edu.sg/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Singapore at the NUS</A>
 								<LI><A HREF="http://genenetwork.epfl.ch/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">Switzerland at the EPFL</A>

								<LI><A HREF="http://biopubinfo.zju.edu.cn/" target="_blank" style="font-size:12px;font-family:verdana;color:blue">China at ZJU</A> (no update)</li>
							</UL>


							<p style="font-size:14px;font-family:verdana;color:black"><B>History and Archive</B>

							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black">GeneNetwork's <A HREF="http://artemis.uthsc.edu" target="_blank" class="fs14"><small>Time Machine</small></A> links to earlier versions that correspond to specific publication dates.</P>

							</BLOCKQUOTE> 


</P>
						</TD>
"""