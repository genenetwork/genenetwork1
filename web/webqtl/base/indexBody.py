index_body_string = """
<TD vAlign=top width="40%" align="left" height=10 bgColor=#eeeeee>
							<p style="font-size:18px;font-family:verdana;color:black"><B> Select and Search</B>
							<Form METHOD="POST" ACTION="/webqtl/main.py" ENCTYPE="multipart/form-data" NAME="SEARCHFORM">

								<TABLE width="100%">
					
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

										<TD width="3%">
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

										<TD width="3%">
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
											<B>Data Set:</B>
										</TD>

										<TD width="3%">
										</TD>

										<TD NOWRAP width="85%" align="left">
											<DIV Id="menu3">
												<Select NAME="database" size=1 id="database"> 
												</Select>
												<input type="button" class="button" value=" Info " onCLick="javascript:databaseinfo();">
											</DIV>

										</TD>
									</TR>

					<!--  USER HELP   -->				
									<TR>
										<TD align=right height=20 width="10%">
										</TD>
										<TD width="3%">
										</TD>

										<TD align="left" width="85%">
											<P class="fs12">&nbsp;&nbsp;&nbsp;&nbsp;Databases marked with <B>**</B> suffix are not public yet. 
											<BR>&nbsp;&nbsp;&nbsp;&nbsp;Access requires <A HREF="/account.html" target="_blank" class="fs14"><small>user login</small></A>.</P>
										</TD>
									</TR>


<!--  GET ANY  SEARCH -->			
									<TR>
										<TD align=right height=35 NOWRAP="on" style="font-size:14px;font-family:verdana;color:black" width="10%">
											<B>Get Any:</B>
										</TD>

										<TD width="3%">
										</TD>

										<TD NOWRAP width="85%" align="left">

											<input id="tfor" name="ORkeyword" style="width:420px; background-color:white; font-family:verdana; font-size:14px" type="text" maxlength="50000">
										</TD>
									</TR>



<!--  GET ANY HELP   -->
									<TR>
										<TD align=right height=20 width="10%">
										</TD>
										<TD width="3%">

										</TD>
										<TD width="85%" align="left">
											<P class="fs12">&nbsp;&nbsp;&nbsp;&nbsp;Enter terms, genes, ID numbers in the <B>Get Any</B> field.  
											<BR>&nbsp;&nbsp;&nbsp;&nbsp;Use <B>*</B> or <B>?</B> wildcards (Cyp*a?, synap*).
											<BR>&nbsp;&nbsp;&nbsp;&nbsp;Use <B>Combined</B> for terms such as <I>tyrosine kinase</I>.</P>

										</TD>
									</TR>



<!--  COMBINED SEARCH  -->

									<TR>
										<TD align=right height=35 NOWRAP="on" STYLE="font-size:14px;font-family:verdana;color:black" width="10%">
											<B>Combined:</B>
										</TD>

										<TD width="3%">
										</TD>

										<TD NOWRAP width="85%" align="left">
											<input id="tfand" NAME="ANDkeyword"  STYLE="width:420px; background-color:white; font-family:verdana; font-size:14px" type="text" maxlength="500">
											<input name="matchwhole" type="hidden" value="ON"> 
										</TD>
									</TR>



<!--  SEARCH, MAKE DEFAULT, ADVANCED SEARCH -->

									<TR ALIGN="center">
										<TD width="3%">
										</TD>
										<TD width="3%">
										</TD>										
										<TD ALIGN="left" HEIGHT="40" COLSPAN=3>
											<INPUT id="btsearch" TYPE="Submit" CLASS="button" STYLE="font-size:12px" VALUE="  Search  ">&nbsp;&nbsp;&nbsp;&nbsp;
										       <INPUT TYPE="button" CLASS="button" STYLE="font-size:12px" VALUE="  Make Default  " onClick = "setDefault(this.form);">&nbsp;&nbsp;&nbsp;&nbsp;	
											<INPUT TYPE="button" CLASS="button" STYLE="font-size:12px" VALUE="  Advanced Search  " onClick="javascript:window.open('/index3.html', '_self');">

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
<A HREF="http://gn1.genenetwork.org/index4.html" target="_blank"  class="fs14"><B>
 User's Guide</B></A></P>

</CENTER style="font-size:12px;font-family:verdana;color:black">
&nbsp;&nbsp;You can also use advanced commands. Copy these simple examples 
<BR>&nbsp;&nbsp;into the <B>Get Any</B> or <B>Combined</B> search fields:
<UL style="font-size:12px;font-family:verdana;color:black">

<LI><B><I>POSITION=(chr1 25 30)</I></B> finds genes, markers, or transcripts on chromosome 1 between 25 and 30 Mb.

<LI><B><I>MEAN=(15 16) LRS=(23 46)</I></B> in the <B>Combined</B> field finds highly expressed genes (15 to 16 log2 units) AND with peak <A HREF="http://gn1.genenetwork.org/glossary.html#L" target="_blank"  class="fs14"><small>LRS</small></A> linkage between 23 and 46.


<LI><B><I>RIF=mitochondrial</I></B> searches RNA databases for <A HREF="https://www.ncbi.nlm.nih.gov/gene/generif-stats" target="_blank" class="fs14"><small>GeneRIF</small></A> links.

<LI><B><I>WIKI=nicotine</I></B> searches <A HREF="http://gn1.genenetwork.org/webqtl/main.py?FormID=geneWiki" target="_blank"  class="fs14"><small>GeneWiki</small></A> for genes that you or other users have annotated with the word <I>nicotine</I>.

<LI><B><I>GO:0045202</I></B> searches for synapse-associated genes listed in the <A HREF="http://amigo.geneontology.org/amigo" target="_blank" class="fs14"><small>Gene Ontology</small></A>.

<LI><B><I>NAME=(watson jd)</I></B> searches for all genes associated in PubMed with the author J D Watson.</LI>

<LI><B><I>GO:0045202 LRS=(9 99 Chr4 122 155) cisLRS=(9 999 10)</I> </B><BR> in <B>Combined</B> finds synapse-associated genes with <A HREF="http://gn1.genenetwork.org/glossary.html#E" target="_blank"  class="fs14"><small>cis eQTL</small></A> on Chr 4 from 122 and 155 Mb with LRS scores between 9 and 999.

<LI><B><I>RIF=diabetes LRS=(9 999 Chr2 100 105) transLRS=(9 999 10)</I> </B><BR> in <B>Combined</B> finds diabetes-associated transcripts with peak <A HREF="http://gn1.genenetwork.org/glossary.html#E" target="_blank"  class="fs14"><small>trans eQTLs</small></A> on Chr 2 between 100 and 105 Mb with LRS scores between 9 and 999.


</UL> 
</DIR>
					</TD>				
<!-- END OF FIND SELECTOR PULL-DOWN PANEL (LEFT SIDE)  -->

<!-- START OF TOP RIGHT PANEL  -->

<TD vAlign=top width="40%" bgColor=#FFFFFF>
							<p style="font-size:15px;font-family:verdana;color:black"><B>Websites Affiliated with GeneNetwork</B></p>
		<p style="font-size:12px;font-family:verdana;color:black">
			<ul>
				<li>GeneNetwork <A HREF="http://artemis.uthsc.edu" target="_blank" class="fs14">Time Machine</A>: Full versions from 2009 to 2016 (mm9)
				<li>UTHSC Genome Browser
					<a target="_blank" href="http://ucscbrowser.genenetwork.org/">Classic</a>
					and
					<a target="_blank" href="http://ucscbrowserbeta.genenetwork.org/">Newest</a>
				</li>
				<li>UTHSC <a target="_blank" href="http://galaxy.genenetwork.org/">Galaxy</a> Service</li>
				<li>UTHSC <a target="_blank" href="http://bnw.genenetwork.org/">Bayesian Network Web Server</a></li>
				<li>GeneNetwork Classic on <a target="_blank" href="http://ec2.genenetwork.org/">Amazon Cloud</a></li>
				<li>GeneNetwork Classic Code on <a target="_blank" href="https://github.com/genenetwork/genenetwork">GitHub</a></li>
				<li>GeneNetwork 2.0 Development Code on <a target="_blank" href="https://github.com/genenetwork/genenetwork2">GitHub</a></li>
				<li><a target="_blank" href="http://gn2.genenetwork.org/">GeneNetwork 2.0</a> Development</li>
			</ul>
		</p>
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
								<p style="font-size:12px;font-family:verdana;color:black">Take a 20-40 minute GeneNetwork <A HREF="http://gn1.genenetwork.org/tutorial/WebQTLTour/" target="_blank" class="fs14"><small>Tour</small></A> that includes screen shots and typical steps in the analysis.</P>
							</BLOCKQUOTE>							
							<BLOCKQUOTE>
								<p style="font-size:12px;font-family:verdana;color:black">For information about resources and methods, select the <img src="http://gn1.genenetwork.org/images/upload/Info.png" alt="INFO" border= 0 valign="middle"> buttons.</P>

													
														
<p style="font-size:12px;font-family:verdana;color:black">Review the <A HREF="/conditionsofUse.html" target="_blank" class="fs14"><small>Conditions</small></A> and <A HREF="/statusandContact.html" target="_blank" class="fs14"><small>Contacts</small></A> pages for information on the status of data sets and advice on their use and citation.</P> 


							</BLOCKQUOTE>

						</TD>
"""
