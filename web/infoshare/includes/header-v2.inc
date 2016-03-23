<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
<TITLE>GeneNetwork</TITLE>

<META http-equiv=Content-Type content="text/html; charset="utf-8">
<META NAME="keywords" CONTENT="genetics, bioinformatics, genome, phenome, gene expression, complex trait analysis, gene mapping, SNP, quantitative trait locus QTL, expression eQTL, WebQTL, Traitnet, Traitnetwork, personalized medicine">
<META NAME="description" CONTENT ="GeneNetwork is a free scientific web resource used to study relationships between differences in genes, environmental factors, phenotypes, and disease risk." >
<META NAME="author" CONTENT ="GeneNetwork developers" >
<META NAME="geo.placename" CONTENT ="Memphis, TN" >
<META NAME="geo.region" CONTENT="US-TN">

<LINK REL="stylesheet" TYPE="text/css" HREF='/css/general.css'>
<LINK REL="stylesheet" TYPE="text/css" HREF='/css/menu.css'>
<link rel="stylesheet" media="all" type="text/css" href="/css/tabbed_pages.css" />
<LINK REL="apple-touch-icon" href="/images/ipad_icon3.png" />
<link type="text/css" href='/css/custom-theme/jquery-ui-1.8.12.custom.css' rel='Stylesheet' />
<link type="text/css" href='/css/tab_style.css' rel='Stylesheet' />

<script type="text/javascript" src="/javascript/jquery-1.5.2.min.js"></script>
<SCRIPT SRC="/javascript/webqtl.js"></SCRIPT>
<SCRIPT SRC="/javascript/dhtml.js"></SCRIPT>
<SCRIPT SRC="/javascript/tablesorter.js"></SCRIPT>
<SCRIPT SRC="/javascript/jqueryFunction.js"></SCRIPT>
<script src="/javascript/tabbed_pages.js" type="text/javascript"></script>
<script src="/javascript/jquery-ui-1.8.12.custom.min.js" type="text/javascript"></script>
<!--Added start here-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link REL="stylesheet" TYPE="text/css" href="../css/gn2css/bootstrap.min.css" />
    <script type="text/javascript" src="jquery.min.js"></script>
	<style type="text/css">
    		input:required:invalid, input:focus:invalid {
  			background-image: url(invalid.png);
  			background-position: right;
  			background-repeat: no-repeat;
			}
			input:required:valid {
  			background-image: url(valid.png);
  			background-position: right;
  			background-repeat: no-repeat;
			}
	</style>
<!--<script src="http://rabbit.uthsc.edu/infoshare/ckeditor/ckeditor.js"></script>-->
<script src="http://lily.uthsc.edu/infoshare/ckeditor/ckeditor.js"></script>
<link href="http://lily.uthsc.edu/infoshare/ckeditor/samples/sample.css" rel="stylesheet">
    <!--<link REL="stylesheet" TYPE="text/css" href="../ckeditor/samples/sample.css" />-->
<!--<link href="http://rabbit.uthsc.edu/infoshare/ckeditor/samples/sample.css" rel="stylesheet">-->
	<style>

		/* Style the CKEditor element to look like a textfield */
		.cke_textarea_inline
		{
			padding: 10px;
			height: 200px;
			overflow: auto;

			border: 1px solid gray;
			-webkit-appearance: textfield;
		}

	</style>
	<style>

		#editable
		{
			padding: 10px;
			float: left;
		}

	</style>
<!--Added ends here-->

<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-3782271-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</HEAD>
<BODY  bottommargin="2" leftmargin="2" rightmargin="2" topmargin="2" text=#000000 bgColor=#ffffff >

<TABLE cellSpacing=5 cellPadding=4 width="100%" border=0>
	<TBODY>
	<!-- Start of header -->
	<TR>
		<TD width=30 rowSpan=5>&nbsp;</TD>

<TD bgColor=#ffffff NOWRAP="yes" width="100%" class="solidBorder">

	<Table width= "100%" cellSpacing=0 cellPadding=0>

		<TR>

			<TD width= "100%" id="smallsize">

				<a href="/">

				<IMG src="/images/upload/GeneNet_Banner2009c.png" border="0">

				</a>

			</TD>

			<TD valign="bottom">

				<A HREF="http://www.touchgraph.com/TGGoogleBrowser.php?start=genenetwork.org&signed=false" target="_blank">

					<IMG SRC="/images/upload/NetworkLogo.png" width="101" height="73" border="0">

				</a>

			</td>

			<TD valign="bottom">

				<IMG src="/images/webqtllogo2.gif" alt="WebQTL" border="0">

			</TD>

		</TR>

	</Table>

</TD>

<TD width="30" rowSpan=5>&nbsp;</TD>

</TR>

<TR>

<!--Home Help Search News Papers Policies Accounts Links-->

<TD bgColor=#ddddff NOWRAP="yes" class="solidBorder">

<table width="100%" cellSpacing=0 cellPadding=0 border=0>

<tr>

<td aligh=left NOWRAP="yes">

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp1" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp1'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp1'])" style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>Home</Strong></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp2" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp2'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp2'])" style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>Search</Strong></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp3" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp3'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp3'])" style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>Help</Strong></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp4" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp4'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp4'])" style="font-size:12px;font-family:verdana;color:#0000ae">

<A Href="/whats_new.html"  style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>News</Strong></A></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp5" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp5'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp5'])" style="font-size:12px;font-family:verdana;color:#0000ae">

<A Href="/reference.html"  style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>References</Strong></A></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp6" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp6'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp6'])" style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>Policies</Strong></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<Span Id= "menu_grp8" onmouseover="A_MENUS[0].onmouseover(grpObj['menu_grp8'])"  onmouseout="A_MENUS[0].onmouseout(grpObj['menu_grp8'])"  style="font-size:12px;font-family:verdana;color:#0000ae">

<A Href="/links.html" style="font-size:12px;font-family:verdana;color:#0000ae">

<Strong>Links</Strong></A></Span>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

</td>

<td align="right" NOWRAP="yes">

&nbsp;&nbsp;&nbsp;

</td>

</tr>

</table>

</TD>


	</TR>
	<!-- End of header -->
<!-- Start of body -->
	<TR>
		<TD  bgColor=#eeeeee class="solidBorder">
		<Table width= "100%" cellSpacing=0 cellPadding=5>
		<TR><TD>
		
		<!-- ===== Start of content ===== -->
<H3>Hi, <?php echo $_SESSION['SESS_FIRST_NAME'];?>! <a href="logout.html">Logout</a></H3>
<p><a href="member-profile.html">My Profile</a> | <a href="member-studies.html">My Datasets</a></p>