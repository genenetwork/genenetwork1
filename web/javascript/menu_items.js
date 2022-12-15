/*
  --- menu items --- 
  note that this structure has changed its format since previous version.
  additional third parameter is added for item scope settings.
  Now this structure is compatible with Tigra Menu GOLD.
  Format description can be found in product documentation.
*/
var MENU_ITEMS = [
	['menu_grp1', null, null,
		['GeneNetwork Intro', '/home.html'],
		['Enter Trait Data', '/webqtl/main.py?FormID=submitSingleTrait'],
		['Batch Submission', '/webqtl/main.py?FormID=batSubmit'],
	],
	['menu_grp2', null, null,
		['Search Databases', '/'],
		['Trait Collections',null,null,
['Human (hg19)', null, null, 
	['CEPH-2004', '/webqtl/main.py?FormID=dispSelection&RISet=CEPH-2004'], 
	['AD-cases-controls', '/webqtl/main.py?FormID=dispSelection&RISet=AD-cases-controls'], 
	['AD-cases-controls-Myers', '/webqtl/main.py?FormID=dispSelection&RISet=AD-cases-controls-Myers'], 
	['CEPH-2009', '/webqtl/main.py?FormID=dispSelection&RISet=CEPH-2009'], 
	['HLC', '/webqtl/main.py?FormID=dispSelection&RISet=HLC'], 
	['CANDLE', '/webqtl/main.py?FormID=dispSelection&RISet=CANDLE'], 
	['HB', '/webqtl/main.py?FormID=dispSelection&RISet=HB'], 
	['HSB', '/webqtl/main.py?FormID=dispSelection&RISet=HSB'], 
	['HLT', '/webqtl/main.py?FormID=dispSelection&RISet=HLT'], 
	['Aging-Brain-UCI', '/webqtl/main.py?FormID=dispSelection&RISet=Aging-Brain-UCI'], 
	['Brain-Normal-NIH-Gibbs', '/webqtl/main.py?FormID=dispSelection&RISet=Brain-Normal-NIH-Gibbs'], 
	['GTEx', '/webqtl/main.py?FormID=dispSelection&RISet=GTEx'], 
	['HCP', '/webqtl/main.py?FormID=dispSelection&RISet=HCP'], 
	['GTEx_v5', '/webqtl/main.py?FormID=dispSelection&RISet=GTEx_v5'], 
	['TIGEM-Retina-RNA-Seq', '/webqtl/main.py?FormID=dispSelection&RISet=TIGEM-Retina-RNA-Seq'], 
	['Islets-Gerling', '/webqtl/main.py?FormID=dispSelection&RISet=Islets-Gerling'], 
	['GTEx_v8', '/webqtl/main.py?FormID=dispSelection&RISet=GTEx_v8'], 
	['EBV_T_Cells_PERKINS', '/webqtl/main.py?FormID=dispSelection&RISet=EBV_T_Cells_PERKINS'], 
],
['Mouse (mm10)', null, null, 
	['BXD', '/webqtl/main.py?FormID=dispSelection&RISet=BXD'], 
	['B6D2F2', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2F2'], 
	['BXD-Heart-Metals', '/webqtl/main.py?FormID=dispSelection&RISet=BXD-Heart-Metals'], 
	['AXBXA', '/webqtl/main.py?FormID=dispSelection&RISet=AXBXA'], 
	['AKXD', '/webqtl/main.py?FormID=dispSelection&RISet=AKXD'], 
	['B6BTBRF2', '/webqtl/main.py?FormID=dispSelection&RISet=B6BTBRF2'], 
	['BXH', '/webqtl/main.py?FormID=dispSelection&RISet=BXH'], 
	['CXB', '/webqtl/main.py?FormID=dispSelection&RISet=CXB'], 
	['LXS', '/webqtl/main.py?FormID=dispSelection&RISet=LXS'], 
	['BDF2-2005', '/webqtl/main.py?FormID=dispSelection&RISet=BDF2-2005'], 
	['MDP', '/webqtl/main.py?FormID=dispSelection&RISet=MDP'], 
	['NZBXFVB-N2', '/webqtl/main.py?FormID=dispSelection&RISet=NZBXFVB-N2'], 
	['BHF2', '/webqtl/main.py?FormID=dispSelection&RISet=BHF2'], 
	['BDF2-1999', '/webqtl/main.py?FormID=dispSelection&RISet=BDF2-1999'], 
	['CTB6F2', '/webqtl/main.py?FormID=dispSelection&RISet=CTB6F2'], 
	['BHHBF2', '/webqtl/main.py?FormID=dispSelection&RISet=BHHBF2'], 
	['HS', '/webqtl/main.py?FormID=dispSelection&RISet=HS'], 
	['HS-CC', '/webqtl/main.py?FormID=dispSelection&RISet=HS-CC'], 
	['B6D2F2-PSU', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2F2-PSU'], 
	['B6D2RI', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2RI'], 
	['SOTNOT-OHSU', '/webqtl/main.py?FormID=dispSelection&RISet=SOTNOT-OHSU'], 
	['C57BL-6JxC57BL-6NJF2', '/webqtl/main.py?FormID=dispSelection&RISet=C57BL-6JxC57BL-6NJF2'], 
	['Scripps-2013', '/webqtl/main.py?FormID=dispSelection&RISet=Scripps-2013'], 
	['Linsenbardt-Boehm', '/webqtl/main.py?FormID=dispSelection&RISet=Linsenbardt-Boehm'], 
	['CMS', '/webqtl/main.py?FormID=dispSelection&RISet=CMS'], 
	['CIE-INIA', '/webqtl/main.py?FormID=dispSelection&RISet=CIE-INIA'], 
	['B6D2', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2'], 
	['BXD-Bone', '/webqtl/main.py?FormID=dispSelection&RISet=BXD-Bone'], 
	['CFW', '/webqtl/main.py?FormID=dispSelection&RISet=CFW'], 
	['EMSR', '/webqtl/main.py?FormID=dispSelection&RISet=EMSR'], 
	['CIE-RMA', '/webqtl/main.py?FormID=dispSelection&RISet=CIE-RMA'], 
	['BXD-Longevity', '/webqtl/main.py?FormID=dispSelection&RISet=BXD-Longevity'], 
	['LGSM-AI', '/webqtl/main.py?FormID=dispSelection&RISet=LGSM-AI'], 
	['D2GM', '/webqtl/main.py?FormID=dispSelection&RISet=D2GM'], 
	['Retina-RGC-Rheaume', '/webqtl/main.py?FormID=dispSelection&RISet=Retina-RGC-Rheaume'], 
	['BXD_Dev', '/webqtl/main.py?FormID=dispSelection&RISet=BXD_Dev'], 
	['LGSM-AI-G34-A', '/webqtl/main.py?FormID=dispSelection&RISet=LGSM-AI-G34-A'], 
	['LGSM-AI-G34-GBS', '/webqtl/main.py?FormID=dispSelection&RISet=LGSM-AI-G34-GBS'], 
	['LGSM-AI-G34_39-43-GBS', '/webqtl/main.py?FormID=dispSelection&RISet=LGSM-AI-G34_39-43-GBS'], 
	['LGSM-AI-G39-43-GBS', '/webqtl/main.py?FormID=dispSelection&RISet=LGSM-AI-G39-43-GBS'], 
	['LGSM-AIG34_50-56-GBS', '/webqtl/main.py?FormID=dispSelection&RISet=LGSM-AIG34_50-56-GBS'], 
	['JAX-D2-Mono-RNA-Seq', '/webqtl/main.py?FormID=dispSelection&RISet=JAX-D2-Mono-RNA-Seq'], 
	['DOD-BXD-GWI', '/webqtl/main.py?FormID=dispSelection&RISet=DOD-BXD-GWI'], 
	['HET3-ITP', '/webqtl/main.py?FormID=dispSelection&RISet=HET3-ITP'], 
	['CC', '/webqtl/main.py?FormID=dispSelection&RISet=CC'], 
	['UTHSC-Cannabinoid', '/webqtl/main.py?FormID=dispSelection&RISet=UTHSC-Cannabinoid'], 
	['B6-Lens', '/webqtl/main.py?FormID=dispSelection&RISet=B6-Lens'], 
	['DO', '/webqtl/main.py?FormID=dispSelection&RISet=DO'], 
	['BXD-AE', '/webqtl/main.py?FormID=dispSelection&RISet=BXD-AE'], 
	['DOL', '/webqtl/main.py?FormID=dispSelection&RISet=DOL'], 
],
['Rat (rn6)', null, null, 
	['HXBBXH', '/webqtl/main.py?FormID=dispSelection&RISet=HXBBXH'], 
	['SRxSHRSPF2', '/webqtl/main.py?FormID=dispSelection&RISet=SRxSHRSPF2'], 
	['HSNIH-RGSMC', '/webqtl/main.py?FormID=dispSelection&RISet=HSNIH-RGSMC'], 
	['HSNIH-Palmer', '/webqtl/main.py?FormID=dispSelection&RISet=HSNIH-Palmer'], 
	['NWU_WKYxF344_F2', '/webqtl/main.py?FormID=dispSelection&RISet=NWU_WKYxF344_F2'], 
	['HIV-1Tg', '/webqtl/main.py?FormID=dispSelection&RISet=HIV-1Tg'], 
	['HRDP_HXB-BXH-BP', '/webqtl/main.py?FormID=dispSelection&RISet=HRDP_HXB-BXH-BP'], 
],
['Macaque monkey', null, null, 
	['Macaca-fasicularis', '/webqtl/main.py?FormID=dispSelection&RISet=Macaca-fasicularis'], 
],
['Drosophila', null, null, 
	['Oregon-R_x_2b3', '/webqtl/main.py?FormID=dispSelection&RISet=Oregon-R_x_2b3'], 
	['DGRP', '/webqtl/main.py?FormID=dispSelection&RISet=DGRP'], 
],
['Barley', null, null, 
	['SXM', '/webqtl/main.py?FormID=dispSelection&RISet=SXM'], 
	['QSM', '/webqtl/main.py?FormID=dispSelection&RISet=QSM'], 
],
['Arabidopsis thaliana', null, null, 
	['BayXSha', '/webqtl/main.py?FormID=dispSelection&RISet=BayXSha'], 
	['ColXCvi', '/webqtl/main.py?FormID=dispSelection&RISet=ColXCvi'], 
	['ColXBur', '/webqtl/main.py?FormID=dispSelection&RISet=ColXBur'], 
],
['Poplar', null, null, 
	['Poplar', '/webqtl/main.py?FormID=dispSelection&RISet=Poplar'], 
],
['Soybean', null, null, 
	['J12XJ58F2', '/webqtl/main.py?FormID=dispSelection&RISet=J12XJ58F2'], 
	['J12XJ58F11', '/webqtl/main.py?FormID=dispSelection&RISet=J12XJ58F11'], 
],
['Tomato', null, null, 
	['LXP', '/webqtl/main.py?FormID=dispSelection&RISet=LXP'], 
],
['Oryzias latipes (Japanese medaka)', null, null, 
	['MIKK', '/webqtl/main.py?FormID=dispSelection&RISet=MIKK'], 
],
		],
		['GeneWiki', '/webqtl/main.py?FormID=geneWiki'],
		['Tissue Correlation', '/webqtl/main.py?FormID=tissueCorrelation'],
		['SNP Browser', '/webqtl/main.py?FormID=snpBrowser'],
		['Interval Analyst', '/webqtl/main.py?FormID=intervalAnalyst'],
		['QTLminer', '/webqtl/main.py?FormID=qtlminer'],
		['GenomeGraph', '/dbResults.html'],
		['Scriptable Interface', '/CGIDoc.html'],
		/* ['Simple Query Interface', '/GUI.html'], */
		['Database Information',null,null,
			['Database Schema', '/webqtl/main.py?FormID=schemaShowPage'],
		],
		['Data Sharing', '/webqtl/main.py?FormID=sharing'],
		['Annotations', '/webqtl/main.py?FormID=annotation'],
	],
	['menu_grp3', null, null,
		['Movies','http://gn1.genenetwork.org/tutorial/movies'],
		['Tutorials', null, null, 
                ['GN Barley Tutorial','/tutorial/pdf/GN_Barley_Tutorial.pdf'],
                ['GN Powerpoint', '/tutorial/ppt/index.html']],
		['HTML Tour','/tutorial/WebQTLTour/'],
		['FAQ','/faq.html'],
		['Glossary of Terms','/glossary.html'],
		['GN MediaWiki','http://wiki.genenetwork.org/'],
	],
	['menu_grp4', '/whats_new.html'
	],
	['menu_grp5', '/reference.html'
	],
	['menu_grp6', null, null,
		['Conditions and Limitation', '/conditionsofUse.html'],
		['Data Sharing Policy', '/dataSharing.html'],
		['Status and Contacts', '/statusandContact.html'],
		['Privacy Policy', '/privacy.html'],
	],
	['menu_grp8', '/links.html'
	],
];
