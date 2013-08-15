var sArr = [
{txt:'',val:''},
{txt:'Human',val:'human'},
{txt:'Macaque monkey',val:'macaque monkey'},
{txt:'Mouse',val:'mouse'},
{txt:'Rat',val:'rat'},
{txt:'Drosophila',val:'drosophila'},
{txt:'Arabidopsis thaliana',val:'arabidopsis'},
{txt:'Barley',val:'barley'},
{txt:'Soybean',val:'soybean'},
{txt:'Tomato',val:'tomato'},
{txt:'All Species',val:'All Species'}];

var gArr = [
{txt:'',val:''},
{txt:"Alzheimer's Disease Brain (Liang)",val:"AD-cases-controls"},
{txt:"Alzheimer's Disease Brain (Myers)",val:"AD-cases-controls-Myers"},
{txt:"AKXD",val:"AKXD"},
{txt:"AXB/BXA",val:"AXBXA"},
{txt:"B6BTBRF2",val:"B6BTBRF2"},
{txt:"B6D2F2",val:"B6D2F2"},
{txt:"B6D2F2 PSU",val:"B6D2F2-PSU"},
{txt:"B6D2RI Aged",val:"B6D2RI"},
{txt:"BayXSha",val:"BayXSha"},
{txt:"BDF2 UCLA",val:"BDF2-1999"},
{txt:"BDF2-2005",val:"BDF2-2005"},
{txt:"BHF2 (Apoe Null) UCLA",val:"BHF2"},
{txt:"BH/HB F2 UCLA",val:"BHHBF2"},
{txt:"BXD",val:"BXD"},
{txt:"BXH",val:"BXH"},
{txt:"C57BL/6JxC57BL/6NJ F2 Cross",val:"C57BL-6JxC57BL-6NJF2"},
{txt:"CANDLE Cognitive Development (TUCI)",val:"CANDLE"},
{txt:"CEPH Families Cell Lines",val:"CEPH-2004"},
{txt:"ColXBur",val:"ColXBur"},
{txt:"ColXCvi",val:"ColXCvi"},
{txt:"CastB6/B6Cast F2 UCLA",val:"CTB6F2"},
{txt:"CXB",val:"CXB"},
{txt:"Drosophila Genetic Reference Panel",val:"DGRP"},
{txt:"Harvard Brain Tissue Resource Center",val:"HB"},
{txt:"Human Liver Cohort (Merck)",val:"HLC"},
{txt:"Human Lung Transcriptome (Rosetta/Merck)",val:"HLT"},
{txt:"Heterogeneous Stock",val:"HS"},
{txt:"Heterogeneous Stock Collaborative Cross",val:"HS-CC"},
{txt:"Human Brain Transcriptome (Yale/Kavli)",val:"HSB"},
{txt:"NIH Heterogeneous Stock",val:"HSNIH"},
{txt:"HXB/BXH",val:"HXBBXH"},
{txt:"J12XJ58F2",val:"J12XJ58F2"},
{txt:"LXP",val:"LXP"},
{txt:"LXS",val:"LXS"},
{txt:"Macaca fasicularis (Cynomolgus monkey)",val:"Macaca-fasicularis"},
{txt:"Mouse Diversity Panel",val:"MDP"},
{txt:"NZB/FVB N2 NCI",val:"NZBXFVB-N2"},
{txt:"Oregon-R x 2b3",val:"Oregon-R_x_2b3"},
{txt:"QSM",val:"QSM"},
{txt:"Scripps C57BL/6J",val:"Scripps-2013"},
{txt:"SOTNOT-OHSU",val:"SOTNOT-OHSU"},
{txt:"UIOWA SRxSHRSP F2",val:"SRxSHRSPF2"},
{txt:"SXM",val:"SXM"},
{txt:'All Groups',val:'all groups'}];

var tArr = [
{txt:'',val:''},
{txt:'Adipose mRNA',val:'Adipose mRNA'},
{txt:'Adrenal Gland mRNA',val:'Adrenal Gland mRNA'},
{txt:'Amygdala mRNA',val:'Amygdala mRNA'},
{txt:'Anterior Cingulate Cortex mRNA',val:'Anterior Cingulate Cortex mRNA'},
{txt:'Bone Femur mRNA',val:'Bone Femur mRNA'},
{txt:'Brain mRNA',val:'Brain mRNA'},
{txt:'Cartilage mRNA',val:'Cartilage mRNA'},
{txt:'Cerebellar Cortex mRNA',val:'Cerebellar Cortex mRNA'},
{txt:'Cerebellum mRNA',val:'Cerebellum mRNA'},
{txt:'Dorsal Root Ganglia mRNA',val:'Dorsal Root Ganglia mRNA'},
{txt:'Dorsolateral Prefrontal Cortex mRNA',val:'Dorsolateral Prefrontal Cortex mRNA'},
{txt:'Embryo mRNA',val:'Embryo mRNA'},
{txt:'Eye mRNA',val:'Eye mRNA'},
{txt:'Heart mRNA',val:'Heart mRNA'},
{txt:'Hematopoietic Cells mRNA',val:'Hematopoietic Cells mRNA'},
{txt:'Hippocampus mRNA',val:'Hippocampus mRNA'},
{txt:'Hypothalamus mRNA',val:'Hypothalamus mRNA'},
{txt:'Inferior Temporal Cortex mRNA',val:'Inferior Temporal Cortex mRNA'},
{txt:'Kidney mRNA',val:'Kidney mRNA'},
{txt:'Leaf mRNA',val:'Leaf mRNA'},
{txt:'Leucocytes mRNA',val:'Leucocytes mRNA'},
{txt:'Liver mRNA',val:'Liver mRNA'},
{txt:'Liver Proteome',val:'Liver Proteome'},
{txt:'Lung mRNA',val:'Lung mRNA'},
{txt:'Lymphoblast B-cell mRNA',val:'Lymphoblast B-cell mRNA'},
{txt:'Mammary Tumors mRNA',val:'Mammary Tumors mRNA'},
{txt:'Medial Prefrontal Cortex mRNA',val:'Medial Prefrontal Cortex mRNA'},
{txt:'Mediodorsal Nucleus of Thalamus mRNA',val:'Mediodorsal Nucleus of Thalamus mRNA'},
{txt:'Methylation',val:'Methylation'},
{txt:'Midbrain mRNA',val:'Midbrain mRNA'},
{txt:'Muscle mRNA',val:'Muscle mRNA'},
{txt:'Neocortex mRNA',val:'Neocortex mRNA'},
{txt:'Newborn Cord Blood mRNA',val:'Newborn Cord Blood mRNA'},
{txt:'Nucleus Accumbens mRNA',val:'Nucleus Accumbens mRNA'},
{txt:'Orbital Prefrontal Cortex mRNA',val:'Orbital Prefrontal Cortex mRNA'},
{txt:'Peritoneal Fat mRNA',val:'Peritoneal Fat mRNA'},
{txt:'Pituitary Gland mRNA',val:'Pituitary Gland mRNA'},
{txt:'Popliteal Lymph Node mRNA',val:'Popliteal Lymph Node mRNA'},
{txt:'Posterior Inferior Parietal Cortex mRNA',val:'Posterior Inferior Parietal Cortex mRNA'},
{txt:'Posterior Superior Temporal Cortex mRNA',val:'Posterior Superior Temporal Cortex mRNA'},
{txt:'Prefrontal Cortex mRNA',val:'Prefrontal Cortex mRNA'},
{txt:'Primary Auditory (A1) Cortex mRNA',val:'Primary Auditory (A1) Cortex mRNA'},
{txt:'Primary Motor (M1) Cortex mRNA',val:'Primary Motor (M1) Cortex mRNA'},
{txt:'Primary Somatosensory (S1) Cortex mRNA',val:'Primary Somatosensory (S1) Cortex mRNA'},
{txt:'Primary Visual Cortex mRNA',val:'Primary Visual Cortex mRNA'},
{txt:'Retina mRNA',val:'Retina mRNA'},
{txt:'Spleen mRNA',val:'Spleen mRNA'},
{txt:'Striatum mRNA',val:'Striatum mRNA'},
{txt:'T Cell (helper) mRNA',val:'T Cell (helper) mRNA'},
{txt:'T Cell (regulatory) mRNA',val:'T Cell (regulatory) mRNA'},
{txt:'Thymus mRNA',val:'Thymus mRNA'},
{txt:'Ventral Tegmental Area mRNA',val:'Ventral Tegmental Area mRNA'},
{txt:'Ventrolateral Prefrontal Cortex mRNA',val:'Ventrolateral Prefrontal Cortex mRNA'},
{txt:'Whole Body mRNA',val:'Whole Body mRNA'},
{txt:'Phenotypes',val:'Phenotypes'},
{txt:'Genotypes',val:'Genotypes'}];

var dArr = [
{txt:'',val:''},
{txt:'GSE15222 Human Brain Alzheimer Myers (Apr09) RankInv',val:'GSE15222_F_A_RI_0409'},
{txt:'GSE15222 Human Brain Normal Myers (Apr09) RankInv',val:'GSE15222_F_N_RI_0409'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_1110'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Male',val:'INIA_Hyp_M_RMA_1110'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Female',val:'INIA_Hyp_F_RMA_1110'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080913',val:'INIA_Hyp_PCA_0813_v4'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080813',val:'INIA_Hyp_PCA_0813_v3'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080513',val:'INIA_Hyp_PCA_0813_v2'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080213',val:'INIA_Hyp_PCA_0813'},
{txt:'INIA Hypothalamus Exon Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_Ex-1110'},
{txt:'VCU BXD NAc Sal M430 2.0 (Oct07) RMA',val:'VCUSalo_1007_R'},
{txt:'VCU BXD NAc EtOH M430 2.0 (Oct07) RMA **',val:'VCUEtOH_1007_R'},
{txt:'VCU BXD NAc EtOH vs Sal M430 2.0 (Oct07) Sscore **',val:'VCUSal_1007_R'},
{txt:'VCU BXD NAc CIE Air M430 2.0 (Jan13) RMA **',val:'VCU_NAc_Air_0113_R'},
{txt:'VCU BXD NAc CIE EtOH M430 2.0 (Jan13) RMA **',val:'VCU_NAc_Et_0113_R'},
{txt:'VCU BXD NAc EtOH vs CIE Air M430 2.0 (Jan13) Sscore **',val:'VCU_NAc_AvE_0113_Ss'},
{txt:'HZI Lung M430v2 (Apr08) RMA',val:'HZI_0408_R'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Gene Level (Dec09) RMA',val:'Striatum_Exon_1212'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Exon Level (Dec09) RMA',val:'Striatum_Exon_0209'},
{txt:'HZI Lung M430v2 (Apr08) MAS5',val:'HZI_0408_M'},
{txt:'Super Series GSE23546 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GSE23546HLT0613'},
{txt:'UL/GSE23352 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA (Jun11) RMA',val:'luCA_GSE23352HLT0613'},
{txt:'UBC/GSE23529 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'UBC-GSE23529HLT0613'},
{txt:'GRNG/GSE23545 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GRNG-GSE23545HLT0613'},
{txt:'EPFL/LISP BXD Liver, Hepatocytes, Soluable Proteins CD+HFD (Jul13) RPN **',val:'EPFLBXDprotRPN0513'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Gene Level **',val:'ScrBXDACC4G0513'},
{txt:'EPFL/LISP BXD Liver, Hepatocytes, Soluable Proteins HFD (Jul13) RPN **',val:'EPFLBXDprotHFDRPN0513'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Exon Level **',val:'ScrBXDACC4GEx0513'},
{txt:'EPFL/LISP BXD Liver, Hepatocytes, Soluable Proteins CD (Jul13) RPN **',val:'EPFLBXDprotCDRPN0513'},
{txt:'EPFL/LISP BXD Liver, Hepatocytes, Soluable Proteins CD+HFD (Jul13) **',val:'EPFLBXDprot0513'},
{txt:'EPFL/LISP BXD Liver, Hepatocytes, Soluable Proteins HFD (Jul13) **',val:'EPFLBXDprotHFD0513'},
{txt:'EPFL/LISP BXD Liver, Hepatocytes, Soluable Proteins CD (Jul13) **',val:'EPFLBXDprotCD0513'},
{txt:'HBTRC-MLC Human Cerebellum Agilent (Jun11) mlratio',val:'HBTRC-MLC_0611'},
{txt:'HBTRC-MLC Human Cerebellum Agilent Normal (Jun11) mlratio',val:'HBTRC-MLC_N_0611'},
{txt:'HBTRC-MLC Human Cerebellum Agilent AD (Jun11) mlratio',val:'HBTRC-MLC_AD_0611'},
{txt:'HBTRC-MLC Human Cerebellum Agilent HD (Jun11) mlratio',val:'HBTRC-MLC_HD_0611'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) RMA',val:'GCB_M2_0505_R'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) PDNN',val:'GCB_M2_0505_P'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) MAS5',val:'GCB_M2_0505_M'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) RMA',val:'CB_M_0305_R'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) PDNN',val:'CB_M_0305_P'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) MAS5',val:'CB_M_0305_M'},
{txt:'SJUT Cerebellum mRNA M430 (Oct04) RMA',val:'CB_M_1004_R'},
{txt:'SJUT Cerebellum mRNA M430 (Oct04) PDNN',val:'CB_M_1004_P'},
{txt:'SJUT Cerebellum mRNA M430 (Oct04) MAS5',val:'CB_M_1004_M'},
{txt:'SJUT Cerebellum mRNA M430 (Oct03) MAS5',val:'CB_M_1003_M'},
{txt:'UBC/CMMT BXD Cerebellum All Ages Combined ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDCerILM0513'},
{txt:'UBC/CMMT BXD E12 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDG12CerILM0513'},
{txt:'UBC/CMMT BXD E15 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDG15CerILM0513'},
{txt:'UBC/CMMT BXD E18 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDG18CerILM0513'},
{txt:'UBC/CMMT BXD P0 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP00CerILM0513'},
{txt:'UBC/CMMT BXD P3 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP03CerILM0513'},
{txt:'UBC/CMMT BXD P6 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP06CerILM0513'},
{txt:'UBC/CMMT BXD P9 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP09CerILM0513'},
{txt:'GSE16780 UCLA Hybrid MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780_UCLA_ML0911'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Both Sexes',val:'LV_G_0106_B'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Males',val:'LV_G_0106_M'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Females',val:'LV_G_0106_F'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA **',val:'EPFLMouseLiverRMA0413'},
{txt:'EPFL/LISP BXD HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA **',val:'EPFLMouseLiverHFDRMA0413'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA **',val:'EPFLMouseLiverCDRMA0413'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level **',val:'EPFLMouseLiverBothExRMA0413'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Both Sexes **',val:'GenEx_BXD_liverEt_M5_0912'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Males **',val:'GenEx_BXD_liverEt_M5M_0912'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Females **',val:'GenEx_BXD_liverEt_M5F_0912'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Both Sexes **',val:'GenEx_BXD_liverEt_RMA_0211'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Males **',val:'GenEx_BXD_liverEt_RMA_M_0211'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Females **',val:'GenEx_BXD_liverEt_RMA_F_0211'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Both Sexes **',val:'GenEx_BXD_liverSal_RMA_0211'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Males **',val:'GenEx_BXD_liverSal_RMA_M_0211'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Females **',val:'GenEx_BXD_liverSal_RMA_F_0211'},
{txt:'SUH BXD Liver Affy Mouse Gene 1.0 ST (Jun11) RMA **',val:'SUH_Liv_RMA_0611'},
{txt:'CANDLE Newborn Cord ILMv6.3 (Jun11) QUANT',val:'CANDLE_NB_0711'},
{txt:'CANDLE Newborn Cord ILM HumanMethylation27 (Mar13) **',val:'CANDLE_Meth27_0313'},
{txt:'CANDLE Newborn Cord ILM HumanMethylation27 (Mar13) Z-Score **',val:'CANDLE_Meth_0313'},
{txt:'IRCM AXB/BXA Mouse Heart ILM MouseRef-8 v2.0 (Feb13) RankInv',val:'IRCM_AXBXA_HRI0213'},
{txt:'GenEx BXD EtOH Cerebellum Affy M430 2.0 (Feb13) RMA Both Sexes **',val:'GenEx_BXD_CerebEt_RMA_0213'},
{txt:'GenEx BXD EtOH Cerebellum Affy M430 2.0 (Feb13) RMA Females **',val:'GenEx_BXD_CerebEt_RMA_F_0213'},
{txt:'GenEx BXD EtOH Cerebellum Affy M430 2.0 (Feb13) RMA Males **',val:'GenEx_BXD_CerebEt_RMA_M_0213'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Both Sexes **',val:'GenEx_BXD_CerebSal_RMA_0213'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Females **',val:'GenEx_BXD_CerebSal_RMA_F_0213'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Males **',val:'GenEx_BXD_CerebSal_RMA_M_0213'},
{txt:'UCLA GSE27483 MDP Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_MDP_Femur_0113_RSN'},
{txt:'UCLA GSE27483 AXB/BXA Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_AXB/BXA_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXD Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXD_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXH Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXH_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXD Only Bone Femur ILM Mouse WG-6 v2.0 (Jan13) RSN',val:'UCLA_BXD-on_Femur_0113_RSN'},
{txt:'VCU BXD PFC Sal M430 2.0 (Dec06) RMA',val:'VCUSal_1206_R'},
{txt:'VCU BXD PFC EtOH M430 2.0 (Dec06) RMA',val:'VCUEtOH_1206_R'},
{txt:'VCU BXD PFC Et vs Sal M430 2.0 (Dec06) Sscore',val:'VCUSal_1006_R'},
{txt:'VCU BXD PFC EtOH vs CIE Air M430 2.0 (Jan11) Sscore **',val:'VCU_PF_AvE_0111_Ss'},
{txt:'VCU BXD PFC CIE EtOH M430 2.0 (Jan11) RMA **',val:'VCU_PF_Et_0111_R'},
{txt:'VCU BXD PFC CIE Air M430 2.0 (Jan11) RMA **',val:'VCU_PF_Air_0111_R'},
{txt:'TSRI DRG Affy Mouse Genome 430 2.0 (Jan13) RMA MDP **',val:'TSRI-DRG-AffyMOE430_0113-MDP'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level **',val:'EPFLMouseMuscleRMA_Ex1112'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level **',val:'EPFLMouseMuscleHFDRMAEx1112'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level **',val:'EPFLMouseMuscleCDRMAEx1112'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM',val:'UTHSC_BXD_WB_RNASeq1112'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence Exon Level (Nov12) RPKM',val:'UTHSC_BXD_WB_RNASeqEx1112'},
{txt:'UTHSC B6D2RI Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA **',val:'UTHSC_B6D2RI_H_0912'},
{txt:'St Jude BXD Popliteal Lymph Node Affy HT MG-430 PM (Sep12) RMA **',val:'STJ_PLN_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA **',val:'PSU-B6D2F2_0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Females **',val:'PSU-B6D2F2_F0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males **',val:'PSU-B6D2F2_M0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males Aged 200 **',val:'PSU-B6D2F2_M2000812'},
{txt:'Eye M430v2 (Sep08) RMA',val:'Eye_M2_0908_R'},
{txt:'Eye M430v2 No Mutant/Mutant (Aug12) RMA **',val:'gn10'},
{txt:'GSE16780 UCLA Mouse AXB/BXA Liver Affy HT M430A (Sep11) RMA',val:'GSE16780AB_UCLA_ML0911'},
{txt:'GSE16780 UCLA Mouse MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780MDP_UCLA_ML0911'},
{txt:'GSE16780 UCLA Mouse BXH Liver Affy HT M430A (Sep11) RMA',val:'GSE16780BXH_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Liver (2005) mlratio',val:'UCLA_BHHBF2_LIVER_2005'},
{txt:'UCLA BHHBF2 Muscle (2005) mlratio',val:'UCLA_BHHBF2_MUSCLE_2005'},
{txt:'UCLA BHHBF2 Brain (2005) mlratio',val:'UCLA_BHHBF2_BRAIN_2005'},
{txt:'UCLA BHHBF2 Adipose (2005) mlratio',val:'UCLA_BHHBF2_ADIPOSE_2005'},
{txt:'UCLA BHHBF2 Muscle Male Only',val:'UCLA_BHHBF2_MUSCLE_MALE'},
{txt:'UCLA BHHBF2 Liver Male Only',val:'UCLA_BHHBF2_LIVER_MALE'},
{txt:'UCLA BHHBF2 Brain Male Only',val:'UCLA_BHHBF2_BRAIN_MALE'},
{txt:'UCLA BHHBF2 Adipose Male Only',val:'UCLA_BHHBF2_ADIPOSE_MALE'},
{txt:'UCLA BHHBF2 Liver Female Only',val:'UCLA_BHHBF2_LIVER_FEMALE'},
{txt:'UCLA BHHBF2 Muscle Female Only',val:'UCLA_BHHBF2_MUSCLE_FEMALE'},
{txt:'UCLA BHHBF2 Brain Female Only',val:'UCLA_BHHBF2_BRAIN_FEMALE'},
{txt:'UCLA BHHBF2 Adipose Female Only',val:'UCLA_BHHBF2_ADIPOSE_FEMALE'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA **',val:'EPFLMouseMuscleRMA1211'},
{txt:'HZI Lung Time Course Flu PR8M (Mar13) Schughart **',val:'HZI_LTCF_0313'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_PG_RMA_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_Adrenal_RMA_0612'},
{txt:'HZI PR8M-Infected Lungs Agilent4x44 (Apr12) Quantile Females **',val:'HZI_PR8M_Q_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Adrenal_RMA_F_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Pituitary_RMA_F_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Pituitary_RMA_M_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Adrenal_RMA_M_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_Adrenal_RMA_Ex_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_PG_RMA_Ex_0612'},
{txt:'Normal HEI Retina (April 2010) RankInv',val:'G2NEI_ILM_Retina_BXD_RI0410'},
{txt:'Full HEI Retina (April 2010) RankInv',val:'Illum_Retina_BXD_RankInv0410'},
{txt:'ONC HEI Retina (April 2012) RankInv',val:'ONCRetILM6_0412'},
{txt:'DoD TATRC Retina Affy MoGene 2.0 ST (Apr13) RMA **',val:'ONCRetMoGene2_0413'},
{txt:'DoD TATRC Retina Affy MoGene 2.0 ST (Apr13) RMA Exon Level **',val:'ONCRetExMoGene2_0413'},
{txt:'B6D2 ONC Retina (April 2012) RankInv **',val:'B6D2ONCILM_0412'},
{txt:'INIA Macaca fasicularis Nucleus Accumbens (Jan10) RMA **',val:'INIA_MacFas_Ac_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Adipose (2005) mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_2005'},
{txt:'UCLA CTB6/B6CTF2 Brain (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_2005'},
{txt:'UCLA CTB6/B6CTF2 Liver (2005) mlratio',val:'UCLA_CTB6B6CTF2_LIVER_2005'},
{txt:'UCLA CTB6/B6CTF2 Muscle (2005) mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_2005'},
{txt:'INIA Macaca fasicularis Hippocampus (Jan10) RMA **',val:'INIA_MacFas_Hc_RMA_0110'},
{txt:'UCLA CTB6B6CTF2 Liver Female mlratio **',val:'UCLA_CTB6B6CTF2_LIVER_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Brain Female mlratio **',val:'UCLA_CTB6B6CTF2_BRAIN_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Adipose Female mlratio **',val:'UCLA_CTB6B6CTF2_ADIPOSE_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Female mlratio **',val:'UCLA_CTB6B6CTF2_MUSCLE_FEMALE'},
{txt:'INIA Macaca fasicularis Amygdala (Jan10) RMA **',val:'INIA_MacFas_AMG_RMA_0110'},
{txt:'VU BXD Midbrain Agilent SurePrint G3 Mouse GE (May12) Quantile **',val:'VUBXDMouseMidBrainQ0512'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA **',val:'EPFLMouseMuscleCDRMA1211'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA **',val:'EPFLMouseMuscleHFDRMA1211'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1111'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1111'},
{txt:'G2 HEI ONC Retina Illumina V6.2 (Sep11) RankInv **',val:'G2HEIONCRetILM6_0911'},
{txt:'HEI ONC vs Control Retina Illumina V6.2 (Sep11) RankInv **',val:'HEIONCvsCRetILM6_0911'},
{txt:'JAX Liver Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_0711'},
{txt:'JAX Liver HF Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_HF_0711'},
{txt:'JAX Liver 6C Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_6C_0711'},
{txt:'Harrill-Rusyn MDP Liver Acetaminophen Tox Study (G4121A, 2009)',val:'JAX_liver_agil_MDP-0113'},
{txt:'Human Primary Auditory (A1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_A1C_0711'},
{txt:'Human Primary Somatosensory (S1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_S1C_0711'},
{txt:'Human Cerebellar Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_CBC_0711'},
{txt:'Human Dorsolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_DFC_0711'},
{txt:'Human Orbital Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_OFC_0711'},
{txt:'Human Hippocampus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_HIP_0711'},
{txt:'Human Posterior Inferior Parietal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_IPC_0711'},
{txt:'Human Inferior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_ITC_0711'},
{txt:'Human Primary Motor (M1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_M1C_0711'},
{txt:'Human Mediodorsal Nucleus of Thalamus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MD_0711'},
{txt:'GN330 Human Amygdala Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_AMY_0711'},
{txt:'Human Posterior Superior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STC_0711'},
{txt:'Human Medial Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MFC_0711'},
{txt:'Human Ventrolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_VFC_0711'},
{txt:'Human Primary Visual Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_V1C_0711'},
{txt:'Human Striatum Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STR_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLPFC_0611'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent Normal (Jun11) mlratio',val:'HBTRC-MLPFC_N_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLVC_0611'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent AD (Jun11) mlratio',val:'HBTRC-MLPFC_AD_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent Normal (Jun11) mlratio',val:'HBTRC-MLVC_N_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent AD (Jun11) mlratio',val:'HBTRC-MLVC_AD_0611'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent HD (Jun11) mlratio',val:'HBTRC-MLPFC_HD_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent HD (Jun11) mlratio',val:'HBTRC-MLVC_HD_0611'},
{txt:'INIA Amygdala Cohort Affy MoGene 1.0 ST (Mar11) RMA',val:'INIA_AmgCoh_0311'},
{txt:'INIA Amygdala Affy MoGene 1.0 ST (Nov10) RMA',val:'INIA_Amg_BLA_RMA_1110'},
{txt:'INIA Amygdala Affy MoGene 1.0 ST (Nov10) RMA Male',val:'INIA_Amg_BLA_RMA_M_1110'},
{txt:'INIA Amygdala Affy MoGene 1.0 ST (Nov10) RMA Female',val:'INIA_Amg_BLA_RMA_F_1110'},
{txt:'INIA Amygdala Exon Affy MoGene 1.0 ST (Nov10) RMA',val:'INIA_Amg_BLA_Ex-RMA_1110'},
{txt:'GSE9588 Human Liver Normal (Mar11) Both Sexes',val:'HLC_0311'},
{txt:'GSE9588 Human Liver Normal (Mar11) Males',val:'HLCM_0311'},
{txt:'HZI Thelp M430v2 (Feb11) RMA',val:'RTHC_0211_R'},
{txt:'GSE5281 Human Brain Normal Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_N_0709'},
{txt:'GSE5281 Human Brain Alzheimer Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_Alzh_0709'},
{txt:'OHSU HS-CC Striatum ILM6v1 (Feb11) RankInv',val:'OHSU_HS-CC_ILMStr_0211'},
{txt:'NCSU Drosophila Whole Body (Jan11) RMA',val:'NCSU_DrosWB_LC_RMA_0111'},
{txt:'HQF BXD Striatum ILM6.1 (Dec10v2) RankInv',val:'UTHSC_Striatum_RankInv_1210'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10v2) RankInv',val:'HQFNeoc_1210v2_RankInv'},
{txt:'HQF BXD Striatum ILM6.1 (Dec10) RankInv',val:'UTHSC_Str_RankInv_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA',val:'UTHSC_SPL_RMA_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Males',val:'UTHSC_SPL_RMA_1210M'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10) RankInv',val:'HQFNeoc_1210_RankInv'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Females',val:'UTHSC_SPL_RMA_1210F'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Exon Level',val:'UTHSC_SPL_RMAEx_1210'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA MDP',val:'UMUTAffyExon_0209_RMA_MDP'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA MDP',val:'HC_M2_0606_MDP'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Oct10) RMA',val:'UTHSC_SPL_RMA_1010'},
{txt:'UTK Spleen ILM6.1 (Jan10) VST',val:'UTK_BXDSpl_VST_0110'},
{txt:'OX UK HS ILM6v1.1 Hippocampus (May 2010) RankInv',val:'OXUKHS_ILMHipp_RI0510'},
{txt:'OX UK HS ILM6v1.1 Lung (May 2010) RankInv',val:'OXUKHS_ILMLung_RI0510'},
{txt:'OX UK HS ILM6v1.1 Liver (May 2010) RankInv',val:'OXUKHS_ILMLiver_RI0510'},
{txt:'INIA Macaca fasicularis Prefrontal Cortex (Jan10) RMA **',val:'INIA_MacFas_Pf_RMA_0110'},
{txt:'INIA Macaca fasicularis Brain (Jan10) RMA **',val:'INIA_MacFas_brain_RMA_0110'},
{txt:'UAB Whole body D.m. mRNA control (Oct09) RMA',val:'UAB_DrosWB_LC_RMA_1009'},
{txt:'UAB Whole body D.m. mRNA lead (pbAc) (Oct09) RMA',val:'UAB_DrosWB_LE_RMA_1009'},
{txt:'UMCG Stem Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_HemaStem_ori'},
{txt:'UMCG Stem Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_HemaStem'},
{txt:'UMCG Progenitor Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_Pro_ori'},
{txt:'UMCG Progenitor Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_Pro'},
{txt:'UMCG Erythroid Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_Eryth_ori'},
{txt:'UMCG Erythroid Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_Eryth'},
{txt:'UMCG Myeloid Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_Myeloid_ori'},
{txt:'UMCG Myeloid Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_Myeloid'},
{txt:'UTHSC CEPH B-cells Illumina (Sep09) RankInv',val:'UT_CEPH_RankInv0909'},
{txt:'Mouse kidney M430v2 Male (Aug06) RMA',val:'MA_M2M_0706_R'},
{txt:'Mouse kidney M430v2 Female (Aug06) RMA',val:'MA_M2F_0706_R'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) RMA',val:'B1LI0809R'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) MAS5',val:'B1LI0809M5'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) MAS5',val:'B1MI0809M5'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) RMA',val:'B1MI0809R'},
{txt:'GSE15222 Human Brain Myers (Apr09) RankInv',val:'GSE15222_F_RI_0409'},
{txt:'GSE5281 Human Brain Full Liang (Jul09) RMA',val:'GSE5281_F_RMA0709'},
{txt:'GSE5281 Human Brain Best 102 Liang (Jul09) RMA',val:'GSE5281_RMA0709'},
{txt:'UT Hippocampus Affy RaEx 1.0 Exon (Jul09) RMA',val:'UT_HippRatEx_RMA_0709'},
{txt:'VCU BXD VTA Et vs Sal M430 2.0 (Jun09) Sscore **',val:'VCUEtvsSal_0609_R'},
{txt:'VCU BXD VTA EtOH M430 2.0 (Jun09) RMA **',val:'VCUEtOH_0609_R'},
{txt:'VCU BXD VTA Sal M430 2.0 (Jun09) RMA **',val:'VCUSal_0609_R'},
{txt:'IoP Affy MOE 430v2 Spleen (May09) RMA',val:'IoP_SPL_RMA_0509'},
{txt:'NCI Mammary M430v2 (Apr09) RMA',val:'NCI_Mam_Tum_RMA_0409'},
{txt:'NCI Mammary LMT miRNA v2 (Apr09) RMA',val:'NCI_Agil_Mam_Tum_RMA_0409'},
{txt:'MDC/CAS/UCL Liver 230v2 (Dec08) RMA',val:'HXB_Liver_1208'},
{txt:'MDC/CAS/UCL Heart 230_V2 (Dec08) RMA',val:'HXB_Heart_1208'},
{txt:'MDC/CAS/UCL Adrenal 230A (Dec08) RMA',val:'HXB_Adrenal_1208'},
{txt:'UWA Illumina PBL (Nov08) RSN **',val:'Illum_BXD_PBL_1108'},
{txt:'UWA Illumina Spleen (Nov08) RSN **',val:'Illum_BXD_Spl_1108'},
{txt:'UWA Illumina Thymus (Nov08) RSN **',val:'Illum_BXD_Thy_1108'},
{txt:'Monks CEPH B-cells Agilent (Dec04) Log10Ratio',val:'Human_1008'},
{txt:'Eye AXBXA Illumina V6.2(Oct08) RankInv Beta',val:'Eye_AXBXA_1008_RankInv'},
{txt:'Eye M430v2 Mutant Gpnmb (Sep08) RMA **',val:'Eye_M2_0908_R_NB'},
{txt:'Eye M430v2 WT Gpnmb (Sep08) RMA **',val:'Eye_M2_0908_R_ND'},
{txt:'ONH BXD Glaucoma Affy M430 2.0 Trial (Dec12) RMA **',val:'DBA2J-ONH-1212'},
{txt:'Eye M430v2 Mutant Tyrp1 (Sep08) RMA **',val:'Eye_M2_0908_R_MT'},
{txt:'Eye M430v2 WT Tyrp1 (Sep08) RMA **',val:'Eye_M2_0908_R_WT'},
{txt:'Eye M430v2 WT WT (Sep08) RMA **',val:'Eye_M2_0908_WTWT'},
{txt:'BXD Glaucoma Affy M430 2.0 Trial (Sep11) RMA **',val:'BXD_GLA_0911'},
{txt:'UCLA BXD and BXH Cartilage v2',val:'UCLA_BXDBXH_CARTILAGE_V2'},
{txt:'UCLA BXH and BXD Cartilage v2',val:'UCLA_BXHBXD_CARTILAGE_V2'},
{txt:'UCLA BXD and BXH Cartilage',val:'UCLA_BXDBXH_CARTILAGE'},
{txt:'UCLA BXH and BXD Cartilage',val:'UCLA_BXHBXD_CARTILAGE'},
{txt:'UCLA BHF2 Adipose Male mlratio',val:'UCLA_BHF2_ADIPOSE_MALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Male mlratio **',val:'UCLA_CTB6B6CTF2_MUSCLE_MALE'},
{txt:'UCLA CTB6B6CTF2 Liver Male mlratio **',val:'UCLA_CTB6B6CTF2_LIVER_MALE'},
{txt:'UCLA CTB6B6CTF2 Adipose Male mlratio **',val:'UCLA_CTB6B6CTF2_ADIPOSE_MALE'},
{txt:'UCLA BHF2 Adipose Female mlratio',val:'UCLA_BHF2_ADIPOSE_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Brain Male mlratio **',val:'UCLA_CTB6B6CTF2_BRAIN_MALE'},
{txt:'UCLA BHF2 Brain Female mlratio',val:'UCLA_BHF2_BRAIN_FEMALE'},
{txt:'UCLA BHF2 Liver Male mlratio',val:'UCLA_BHF2_LIVER_MALE'},
{txt:'UCLA BHF2 Liver Female mlratio',val:'UCLA_BHF2_LIVER_FEMALE'},
{txt:'UCLA BHF2 Muscle Male mlratio **',val:'UCLA_BHF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Muscle Female mlratio **',val:'UCLA_BHF2_MUSCLE_FEMALE'},
{txt:'UCLA BHF2 Brain Male mlratio',val:'UCLA_BHF2_BRAIN_MALE'},
{txt:'UCLA BXD Cartilage',val:'UCLA_BXD_CARTILAGE'},
{txt:'UCLA BXH Cartilage',val:'UCLA_BXH_CARTILAGE'},
{txt:'UCLA BHF2 Adipose (June05) mlratio',val:'UCLA_BHF2_ADIPOSE_0605'},
{txt:'UCLA BHF2 Muscle (June05) mlratio **',val:'UCLA_BHF2_MUSCLE_0605'},
{txt:'UCLA BHF2 Liver (June05) mlratio',val:'UCLA_BHF2_LIVER_0605'},
{txt:'UCLA BHF2 Brain (June05) mlratio',val:'UCLA_BHF2_BRAIN_0605'},
{txt:'UCLA BDF2 Liver (1999) mlratio',val:'UCLA_BDF2_LIVER_1999'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Feb08) RankInv',val:'HQFNeoc_0208_RankInv'},
{txt:'Stuart Spleen M430v2 (Nov07) RMA',val:'STSPL_1107_R'},
{txt:'HQF BXD Striatum ILM6.1 (Nov07) RankInv',val:'UTHSC_1107_RankInv'},
{txt:'Hippocampus Illumina (Aug07) LOESS',val:'Illum_LXS_Hipp_loess0807'},
{txt:'Hippocampus Illumina (Aug07) LOESS_NB',val:'Illum_LXS_Hipp_loess_nb0807'},
{txt:'Hippocampus Illumina (Aug07) QUANT',val:'Illum_LXS_Hipp_quant0807'},
{txt:'Hippocampus Illumina (Aug07) QUANT_NB',val:'Illum_LXS_Hipp_quant_nb0807'},
{txt:'Hippocampus Illumina (Aug07) RSN',val:'Illum_LXS_Hipp_rsn0807'},
{txt:'Hippocampus Illumina (Aug07) RSN_NB',val:'Illum_LXS_Hipp_rsn_nb0807'},
{txt:'Hippocampus Illumina (May07) RankInv',val:'Hipp_Illumina_RankInv_0507'},
{txt:'VCU LXS PFC Et vs Sal M430A 2.0 (Aug06) Sscore **',val:'VCUEt_vs_Sal_0806_R'},
{txt:'VCU LXS PFC EtOH M430A 2.0 (Aug06) RMA **',val:'VCUEtOH_0806_R'},
{txt:'VCU LXS PFC Sal M430A 2.0 (Aug06) RMA',val:'VCUSal_0806_R'},
{txt:'Barley1 Embryo gcRMA SCRI (Dec06)',val:'B139_K_1206_R'},
{txt:'Barley1 Leaf MAS 5.0 SCRI (Dec06)',val:'B30_K_1206_M'},
{txt:'Barley1 Leaf gcRMA SCRI (Dec06)',val:'B30_K_1206_R'},
{txt:'Barley1 Leaf gcRMAn SCRI (Dec06)',val:'B30_K_1206_Rn'},
{txt:'Barley1 Embryo MAS 5.0 SCRI (Dec06)',val:'B139_K_1206_M'},
{txt:'HZI Treg M430v2 (Feb11) RMA',val:'RTC_1106_R'},
{txt:'UCHSC BXD Whole Brain M430 2.0 (Nov06) RMA',val:'BR_M2_1106_R'},
{txt:'UIOWA Eye mRNA RAE230v2 (Sep06) RMA',val:'UIOWA_Eye_RMA_0906'},
{txt:'Mouse kidney M430v2 Sex Balanced (Aug06) RMA',val:'MA_M2_0806_R'},
{txt:'Mouse Kidney M430v2 Sex Balanced (Aug06) PDNN',val:'MA_M2_0806_P'},
{txt:'Mouse Kidney M430v2 (Jul06) PDNN',val:'MA_M2_0706_P'},
{txt:'Mouse Kidney M430v2 (Jul06) RMA',val:'MA_M2_0706_R'},
{txt:'Barley1 Embryo0 gcRMA SCRI (Apr06)',val:'B150_K_0406_R'},
{txt:'Hippocampus Consortium M430v2 (Jun06) PDNN',val:'HC_M2_0606_P'},
{txt:'INIA Brain mRNA M430 (Jun06) RMA',val:'IBR_M_0606_R'},
{txt:'Hippocampus Consortium M430v2 (Jun06) MAS5',val:'HC_M2_0606_M'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA',val:'HC_M2_0606_R'},
{txt:'INIA Brain mRNA M430 (Jan06) RMA',val:'IBR_M_0106_R'},
{txt:'INIA Brain mRNA M430 (Jan06) PDNN',val:'IBR_M_0106_P'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) PDNN',val:'HC_M2CB_1205_P'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) RMA',val:'HC_M2CB_1205_R'},
{txt:'UTHSC Brain mRNA U74Av2 (Nov05) PDNN',val:'BR_U_1105_P'},
{txt:'UTHSC Hippocampus Illumina v6.1 All Combined (Nov12) RankInv',val:'UT_ILM_BXD_hipp_5T_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NON (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NON_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOS (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NOS_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOE (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NOE_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSS (Nov12) RankInv',val:'UT_ILM_BXD_hipp_RSS_1112'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA',val:'UMUTAffyExon_0209_RMA'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSE (Nov12) RankInv',val:'UT_ILM_BXD_hipp_RSE_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NON (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NON_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOS (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NOS_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOE (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NOE_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSS (Sep09) RankInv',val:'UT_ILM_BXD_hipp_RSS_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSE (Sep09) RankInv',val:'UT_ILM_BXD_hipp_RSE_0909'},
{txt:'UTHSC BXD Aged Hippocampus rev3 Affy Mouse Gene 1.0 ST (Sep12) RMA **',val:'UTHSC_BXD_HArev3_0912'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA Exon Level **',val:'UTHSC_BXD_H_0912'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) RMA',val:'SA_M2_0905_R'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) MAS5',val:'SA_M2_0905_M'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) PDNN',val:'SA_M2_0905_P'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) MAS5',val:'BR_U_0805_M'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) PDNN',val:'BR_U_0805_P'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) RMA',val:'BR_U_0805_R'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Aug05) MAS5',val:'FT_2A_0805_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) MAS5',val:'BRF2_M_0805_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) RMA',val:'BRF2_M_0805_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) PDNN',val:'BRF2_M_0805_P'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Jun05) RMA 2z+8',val:'FT_2A_0605_Rz'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) MAS5 Clean',val:'SA_M2_0405_MC'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) MAS5',val:'KI_2A_0405_M'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) RMA Clean',val:'SA_M2_0405_RC'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) PDNN Clean',val:'SA_M2_0405_PC'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) SScore',val:'SA_M2_0405_SS'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) RMA Orig',val:'SA_M2_0405_RR'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) RMA 2z+8',val:'KI_2A_0405_Rz'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) RMA',val:'KI_2A_0405_R'},
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov11) RankInv **',val:'DevStriatum_ILM6.2P3RInv_1111'},
{txt:'BIDMC/UTHSC Dev Striatum P14 ILMv6.2 (Nov11) RankInv **',val:'DevStriatum_ILM6.2P14RInv_1111'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1110'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1110'},
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov10) RankInv **',val:'DevStriatum_ILM6.2P3RInv_1110'},
{txt:'BIDMC/UTHSC Dev Striatum P14 ILMv6.2 (Nov10) RankInv **',val:'DevStriatum_ILM6.2P14RInv_1110'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) RMA',val:'LVF2_M_0704_R'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) MAS5',val:'LVF2_M_0704_M'},
{txt:'NCI Mammary mRNA M430 (July04) MAS5',val:'MA_M_0704_M'},
{txt:'NCI Mammary mRNA M430 (July04) RMA',val:'MA_M_0704_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) PDNN',val:'BRF2_M_0304_P'},
{txt:'GNF Stem Cells U74Av2 (Mar04) RMA',val:'HC_U_0304_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) MAS5',val:'BRF2_M_0304_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) RMA',val:'BRF2_M_0304_R'},
{txt:'INIA Brain mRNA M430 (Feb04) PDNN',val:'CB_M_0204_P'},
{txt:'Hippocampus Illumina RSS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSS_1008'},
{txt:'Hippocampus Illumina RSE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSE_1008'},
{txt:'Hippocampus Illumina NOE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOE_1008'},
{txt:'GSE9588 Human Liver Normal (Mar11) Females',val:'HLCF_0311'},
{txt:'Hippocampus Illumina NON (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NON_1008'},
{txt:'Hippocampus Illumina NOS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOS_1008'},
{txt:'CANDLE Published Phenotypes',val:'CANDLEPublish'},
{txt:'HLC Published Phenotypes',val:'HLCPublish'},
{txt:'AKXD Genotypes',val:'AKXDGeno'},
{txt:'AXBXA Published Phenotypes',val:'AXBXAPublish'},
{txt:'AXBXA Genotypes',val:'AXBXAGeno'},
{txt:'B6BTBRF2 Published Phenotypes',val:'B6BTBRF2Publish'},
{txt:'B6BTBRF2 Genotypes',val:'B6BTBRF2Geno'},
{txt:'B6D2F2 Genotypes',val:'B6D2F2Geno'},
{txt:'B6D2F2-PSU Genotypes',val:'B6D2F2-PSUGeno'},
{txt:'BDF2-1999 Genotypes',val:'BDF2-1999Geno'},
{txt:'BDF2-2005 Genotypes',val:'BDF2-2005Geno'},
{txt:'BHF2 Genotypes',val:'BHF2Geno'},
{txt:'BHHBF2 Genotypes',val:'BHHBF2Geno'},
{txt:'BXD Published Phenotypes',val:'BXDPublish'},
{txt:'BXD Genotypes',val:'BXDGeno'},
{txt:'BXH Published Phenotypes',val:'BXHPublish'},
{txt:'BXH Genotypes',val:'BXHGeno'},
{txt:'C57BL-6JxC57BL-6NJF2 Published Phenotypes',val:'C57BL-6JxC57BL-6NJF2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Genotypes',val:'C57BL-6JxC57BL-6NJF2Geno'},
{txt:'CTB6F2 Published Phenotypes',val:'CTB6F2Publish'},
{txt:'CTB6F2 Genotypes',val:'CTB6F2Geno'},
{txt:'CXB Published Phenotypes',val:'CXBPublish'},
{txt:'CXB Genotypes',val:'CXBGeno'},
{txt:'LXS Published Phenotypes',val:'LXSPublish'},
{txt:'LXS Genotypes',val:'LXSGeno'},
{txt:'Mouse Phenome Database',val:'MDPPublish'},
{txt:'MDP Genotypes',val:'MDPGeno'},
{txt:'NZBXFVB-N2 Published Phenotypes',val:'NZBXFVB-N2Publish'},
{txt:'SOTNOT-OHSU Genotypes',val:'SOTNOT-OHSUGeno'},
{txt:'HSNIH Published Phenotypes',val:'HSNIHPublish'},
{txt:'HXBBXH Published Phenotypes',val:'HXBBXHPublish'},
{txt:'HXBBXH Genotypes',val:'HXBBXHGeno'},
{txt:'BayXSha Published Phenotypes',val:'BayXShaPublish'},
{txt:'BayXSha Genotypes',val:'BayXShaGeno'},
{txt:'ColXBur Published Phenotypes',val:'ColXBurPublish'},
{txt:'ColXBur Genotypes',val:'ColXBurGeno'},
{txt:'ColXCvi Published Phenotypes',val:'ColXCviPublish'},
{txt:'ColXCvi Genotypes',val:'ColXCviGeno'},
{txt:'SXM Published Phenotypes',val:'SXMPublish'},
{txt:'SXM Genotypes',val:'SXMGeno'},
{txt:'J12XJ58F2 Published Phenotypes',val:'J12XJ58F2Publish'},
{txt:'LXP Published Phenotypes',val:'LXPPublish'},
{txt:'All Phenotypes',val:'_allPublish'}];

var lArr = [
 null,
[1,1,6,194],
[1,1,6,195],
[1,1,6,233],
[1,1,6,234],
[1,2,6,1],
[1,2,6,2],
[1,2,6,232],
[1,17,55,369],
[1,17,29,74],
[1,17,29,75],
[1,17,33,73],
[1,18,25,225],
[1,18,25,248],
[1,24,9,33],
[1,24,9,34],
[1,24,9,35],
[1,24,9,36],
[1,24,41,178],
[1,24,41,179],
[1,24,41,181],
[1,24,41,184],
[1,24,45,180],
[1,24,45,182],
[1,24,45,183],
[1,24,45,185],
[1,25,55,370],
[1,25,22,191],
[1,25,22,192],
[1,25,22,366],
[1,26,24,21],
[1,26,24,22],
[1,26,24,23],
[1,26,24,24],
[1,29,3,172],
[1,29,8,164],
[1,29,11,165],
[1,29,16,167],
[1,29,18,169],
[1,29,27,174],
[1,29,28,171],
[1,29,35,166],
[1,29,39,168],
[1,29,40,173],
[1,29,42,162],
[1,29,43,170],
[1,29,44,163],
[1,29,45,176],
[1,29,48,177],
[1,29,53,175],
[2,35,3,150],
[2,35,6,214],
[2,35,16,145],
[2,35,34,140],
[2,35,41,213],
[3,3,56,371],
[3,3,26,241],
[3,3,26,356],
[3,3,26,357],
[3,4,55,372],
[3,4,56,373],
[3,4,5,84],
[3,4,13,249],
[3,4,14,76],
[3,4,22,108],
[3,5,55,374],
[3,5,56,375],
[3,5,22,354],
[3,5,22,355],
[3,6,56,376],
[3,6,6,336],
[3,6,6,337],
[3,6,6,338],
[3,6,6,358],
[3,6,6,360],
[3,6,6,361],
[3,7,56,377],
[3,7,31,102],
[3,7,31,103],
[3,7,31,104],
[3,7,31,105],
[3,8,16,100],
[3,10,56,378],
[3,10,22,279],
[3,11,56,379],
[3,11,48,329],
[3,11,48,330],
[3,11,48,331],
[3,12,56,380],
[3,12,1,261],
[3,12,1,265],
[3,12,1,275],
[3,12,6,267],
[3,12,6,272],
[3,12,6,278],
[3,12,22,268],
[3,12,22,269],
[3,12,22,277],
[3,12,31,270],
[3,12,31,271],
[3,12,31,276],
[3,13,56,381],
[3,13,1,114],
[3,13,1,118],
[3,13,1,122],
[3,13,6,113],
[3,13,6,117],
[3,13,6,121],
[3,13,22,111],
[3,13,22,116],
[3,13,22,119],
[3,13,31,112],
[3,13,31,115],
[3,13,31,120],
[3,14,55,382],
[3,14,56,383],
[3,14,2,126],
[3,14,2,128],
[3,14,2,131],
[3,14,2,132],
[3,14,3,186],
[3,14,3,187],
[3,14,3,188],
[3,14,3,189],
[3,14,3,190],
[3,14,5,85],
[3,14,5,87],
[3,14,6,98],
[3,14,6,99],
[3,14,6,299],
[3,14,6,307],
[3,14,6,310],
[3,14,6,311],
[3,14,6,314],
[3,14,6,332],
[3,14,6,333],
[3,14,6,334],
[3,14,6,362],
[3,14,7,257],
[3,14,7,259],
[3,14,7,273],
[3,14,9,37],
[3,14,9,38],
[3,14,9,39],
[3,14,9,40],
[3,14,9,41],
[3,14,9,42],
[3,14,9,43],
[3,14,9,44],
[3,14,9,45],
[3,14,9,46],
[3,14,9,47],
[3,14,9,48],
[3,14,9,49],
[3,14,9,50],
[3,14,9,51],
[3,14,9,52],
[3,14,9,53],
[3,14,9,54],
[3,14,9,77],
[3,14,9,78],
[3,14,9,79],
[3,14,9,80],
[3,14,9,81],
[3,14,9,82],
[3,14,13,106],
[3,14,13,107],
[3,14,13,250],
[3,14,13,251],
[3,14,13,252],
[3,14,13,253],
[3,14,13,254],
[3,14,13,255],
[3,14,13,256],
[3,14,15,217],
[3,14,15,218],
[3,14,15,219],
[3,14,15,220],
[3,14,15,221],
[3,14,15,222],
[3,14,15,223],
[3,14,15,224],
[3,14,15,359],
[3,14,16,306],
[3,14,16,308],
[3,14,16,309],
[3,14,16,315],
[3,14,16,316],
[3,14,16,317],
[3,14,16,318],
[3,14,16,319],
[3,14,16,320],
[3,14,16,321],
[3,14,16,322],
[3,14,16,323],
[3,14,16,324],
[3,14,16,325],
[3,14,16,326],
[3,14,16,327],
[3,14,16,328],
[3,14,17,3],
[3,14,17,4],
[3,14,17,5],
[3,14,17,6],
[3,14,17,7],
[3,14,17,8],
[3,14,17,9],
[3,14,17,10],
[3,14,19,226],
[3,14,19,227],
[3,14,19,301],
[3,14,19,302],
[3,14,19,303],
[3,14,19,304],
[3,14,21,245],
[3,14,22,55],
[3,14,22,56],
[3,14,22,57],
[3,14,22,58],
[3,14,22,59],
[3,14,22,60],
[3,14,22,61],
[3,14,22,62],
[3,14,22,63],
[3,14,22,64],
[3,14,22,65],
[3,14,22,66],
[3,14,22,67],
[3,14,22,68],
[3,14,22,69],
[3,14,22,70],
[3,14,22,71],
[3,14,22,72],
[3,14,23,25],
[3,14,23,27],
[3,14,23,29],
[3,14,23,30],
[3,14,23,31],
[3,14,23,32],
[3,14,24,17],
[3,14,24,20],
[3,14,24,124],
[3,14,24,127],
[3,14,30,151],
[3,14,31,95],
[3,14,31,96],
[3,14,31,97],
[3,14,31,123],
[3,14,31,152],
[3,14,31,153],
[3,14,32,154],
[3,14,32,155],
[3,14,32,199],
[3,14,32,203],
[3,14,32,280],
[3,14,32,350],
[3,14,32,351],
[3,14,34,11],
[3,14,34,12],
[3,14,34,13],
[3,14,34,14],
[3,14,34,15],
[3,14,34,16],
[3,14,37,125],
[3,14,37,129],
[3,14,37,130],
[3,14,37,133],
[3,14,38,101],
[3,14,41,88],
[3,14,41,89],
[3,14,41,90],
[3,14,41,91],
[3,14,41,92],
[3,14,41,93],
[3,14,46,134],
[3,14,46,135],
[3,14,46,136],
[3,14,46,137],
[3,14,46,138],
[3,14,46,139],
[3,14,46,156],
[3,14,46,157],
[3,14,47,201],
[3,14,47,202],
[3,14,47,204],
[3,14,47,205],
[3,14,47,208],
[3,14,47,209],
[3,14,47,239],
[3,14,47,246],
[3,14,48,18],
[3,14,48,19],
[3,14,48,198],
[3,14,48,200],
[3,14,48,282],
[3,14,48,340],
[3,14,48,342],
[3,14,48,343],
[3,14,48,344],
[3,14,48,345],
[3,14,48,348],
[3,14,48,349],
[3,14,48,352],
[3,14,48,353],
[3,14,49,193],
[3,14,50,298],
[3,14,51,247],
[3,14,52,236],
[3,14,52,237],
[3,14,52,238],
[3,15,55,384],
[3,15,56,385],
[3,15,5,86],
[3,15,7,258],
[3,15,7,260],
[3,15,7,274],
[3,15,22,110],
[3,16,55,386],
[3,16,56,387],
[3,21,55,388],
[3,21,56,389],
[3,21,1,141],
[3,21,1,148],
[3,21,1,264],
[3,21,6,142],
[3,21,6,147],
[3,21,6,266],
[3,21,22,143],
[3,21,22,146],
[3,21,22,263],
[3,21,31,144],
[3,21,31,149],
[3,21,31,262],
[3,22,55,390],
[3,22,56,391],
[3,22,16,312],
[3,22,16,313],
[3,22,47,281],
[3,27,16,210],
[3,27,22,212],
[3,27,24,211],
[3,28,48,196],
[3,34,55,392],
[3,34,56,393],
[3,34,16,283],
[3,34,16,284],
[3,34,16,285],
[3,34,16,286],
[3,34,16,287],
[3,34,16,288],
[3,34,16,289],
[3,34,16,363],
[3,34,16,364],
[3,34,16,365],
[3,34,16,367],
[3,34,16,368],
[3,34,41,290],
[3,34,41,291],
[3,34,41,292],
[3,36,55,394],
[3,36,56,395],
[3,36,5,83],
[3,36,10,94],
[3,36,16,206],
[3,36,16,207],
[3,36,22,109],
[3,36,22,158],
[3,36,22,159],
[3,36,22,160],
[3,36,22,161],
[3,37,55,396],
[3,37,26,240],
[3,40,4,26],
[3,40,4,28],
[3,41,56,397],
[4,30,55,398],
[4,31,55,399],
[4,31,56,400],
[4,31,2,244],
[4,31,14,243],
[4,31,16,235],
[4,31,19,341],
[4,31,19,346],
[4,31,19,347],
[4,31,22,242],
[4,31,36,335],
[4,31,36,339],
[4,42,13,300],
[5,23,54,197],
[5,38,54,215],
[5,38,54,216],
[6,9,55,401],
[6,9,56,402],
[6,19,55,403],
[6,19,56,404],
[6,20,55,405],
[6,20,56,406],
[7,39,20,228],
[7,39,20,229],
[7,39,20,230],
[7,39,20,231],
[7,43,55,407],
[7,43,56,408],
[7,43,12,293],
[7,43,12,297],
[7,43,12,305],
[7,43,20,294],
[7,43,20,295],
[7,43,20,296],
[8,32,55,409],
[9,33,55,410],
[10,44,55,411]];



/* 
*  function: based on different browser use, will have different initial actions; 
*  Once the index.html page is loaded, this function will be called
*/
function initialDatasetSelection()
{		
	defaultSpecies =getDefaultValue('species');
	defaultSet =getDefaultValue('cross');
	defaultType =getDefaultValue('tissue');
	defaultDB =getDefaultValue('database');
	
	if (navigator.userAgent.indexOf('MSIE')>=0)
	{
		sOptions = fillOptionsForIE(null,defaultSpecies);
		var menu0 ="<SELECT NAME='species' ID='species' SIZE='1' onChange='fillOptions(\"species\");'>"+sOptions+"</Select>";
		document.getElementById('menu0').innerHTML = menu0;
		
		gOptions = fillOptionsForIE('species',defaultSet);
		var menu1 ="<Select NAME='cross' size=1 id='cross' onchange='fillOptions(\"cross\");'>"+gOptions+"</Select><input type=\"button\" class=\"button\" value=\"Info\" onCLick=\"javascript:crossinfo();\">";
		document.getElementById('menu1').innerHTML =menu1;
		
		tOptions = fillOptionsForIE('cross',defaultType);
		var menu2 ="<Select NAME='tissue' size=1 id='tissue' onchange='fillOptions(\"tissue\");'>"+tOptions+"</Select>";
		document.getElementById('menu2').innerHTML =menu2;
		
		dOptions = fillOptionsForIE('tissue',defaultDB);
		var menu3 ="<Select NAME='database' size=1 id='database'>"+dOptions+"</Select><input type=\"button\" class=\"button\" value=\"Info\" onCLick=\"javascript:databaseinfo();\">";
		document.getElementById('menu3').innerHTML =menu3;
		
	}else{
		fillOptions(null);
    }
	searchtip();
}

/* 
*  input: selectObjId (designated select menu, such as species, cross, etc... )
*  defaultValue (default Value of species, cross,tissue or database)
*  function: special for IE browser,setting options value for select menu dynamically based on linkage array(lArr), 
*  output: options string
*/
function fillOptionsForIE(selectObjId,defaultValue)
{	
	var options='';	
	if(selectObjId==null)
	{	
		var len = sArr.length;
		for (var i=1; i < len; i++) { 
		    // setting Species' option			
			if( sArr[i].val==defaultValue){
				options =options+"<option selected=\"selected\" value='"+sArr[i].val+"'>"+sArr[i].txt+"</option>";
			}else{
				options =options+"<option value='"+sArr[i].val+"'>"+sArr[i].txt+"</option>";
			}
		}	
	}else if(selectObjId=='species')
	{
		var speciesObj = document.getElementById('species');
		var len = lArr.length;
		var arr = [];
		var idx = 0;
		for (var i=1; i < len; i++) {
			//get group(cross) info from lArr
			if(lArr[i][0]==(getIndexByValue('species',speciesObj.value)).toString()&&!Contains(arr,lArr[i][1]))
			{
				arr[idx++]=lArr[i][1];
			}  
		}
		idx=0;
		len = arr.length;
		removeOptions("cross");
		for (var i=0; i < len; i++) {
			// setting Group's option
			if( gArr[arr[i]].val==defaultValue){
				options =options+"<option selected=\"selected\" value='"+gArr[arr[i]].val+"'>"+gArr[arr[i]].txt+"</option>";
			}else{
				options =options+"<option value='"+gArr[arr[i]].val+"'>"+gArr[arr[i]].txt+"</option>";
			}
			
		}
	}else if(selectObjId=='cross')
	{
		var speciesObj = document.getElementById('species');
		var groupObj = document.getElementById('cross');
		var len = lArr.length;
		var arr = [];
		var idx = 0;
		for (var i=1; i < len; i++) {
			//get type(tissue) info from lArr
			if(lArr[i][0]==(getIndexByValue('species',speciesObj.value)).toString()&&lArr[i][1]==(getIndexByValue('cross',groupObj.value)).toString()&&!Contains(arr,lArr[i][2]))
			{
				arr[idx++]=lArr[i][2];
			}  
		}
		idx=0;
		len = arr.length;
		removeOptions("tissue");
		for (var i=0; i < len; i++) {
			// setting Type's option
			if( tArr[arr[i]].val==defaultValue){
				options =options+"<option selected=\"selected\" value='"+tArr[arr[i]].val+"'>"+tArr[arr[i]].txt+"</option>";
			}else{
				options =options+"<option value='"+tArr[arr[i]].val+"'>"+tArr[arr[i]].txt+"</option>";
			}
		}

	}else if(selectObjId=='tissue')
	{
		var speciesObj = document.getElementById('species');
		var groupObj = document.getElementById('cross');
		var typeObj = document.getElementById('tissue');

		var len = lArr.length;
		var arr = [];
		var idx = 0;
		for (var i=1; i < len; i++) {
			//get dataset(database) info from lArr
			if(lArr[i][0]==(getIndexByValue('species',speciesObj.value)).toString()&&lArr[i][1]==(getIndexByValue('cross',groupObj.value)).toString()&&lArr[i][2]==(getIndexByValue('tissue',typeObj.value)).toString()&&!Contains(arr,lArr[i][3]))
			{
				arr[idx++]=lArr[i][3];
			}  
		}
		idx=0;
		len = arr.length;
		removeOptions("database");
		for (var i=0; i < len; i++) {
			// setting Database's option			
			if( dArr[arr[i]].val==defaultValue){
				options =options+"<option SELECTED value='"+dArr[arr[i]].val+"'>"+dArr[arr[i]].txt+"</option>";
			}else{
				options =options+"<option value='"+dArr[arr[i]].val+"'>"+dArr[arr[i]].txt+"</option>";
			}
		}
	}	
	return options;
}
/* 
*  input: selectObjId (designated select menu, such as species, cross, etc... )
*  function: setting options value for select menu dynamically based on linkage array(lArr)
*  output: null
*/
function fillOptions(selectObjId)
{	
	if(selectObjId==null)
	{

		var speciesObj = document.getElementById('species');	
		var len = sArr.length;
		for (var i=1; i < len; i++) { 
		    // setting Species' option
			speciesObj.options[i-1] = new Option(sArr[i].txt, sArr[i].val);
		}
		updateChocie('species');
	
	}else if(selectObjId=='species')
	{
		var speciesObj = document.getElementById('species');
		var groupObj = document.getElementById('cross');
		var len = lArr.length;
		var arr = [];
		var idx = 0;
		for (var i=1; i < len; i++) {
			//get group(cross) info from lArr
			if(lArr[i][0]==(getIndexByValue('species',speciesObj.value)).toString()&&!Contains(arr,lArr[i][1]))
			{
				arr[idx++]=lArr[i][1];
			}  
		}
		idx=0;
		len = arr.length;
		removeOptions("cross");
		for (var i=0; i < len; i++) {
			// setting Group's option
			groupObj.options[idx++] = new Option(gArr[arr[i]].txt, gArr[arr[i]].val); 
		}
		updateChocie('cross');

	}else if(selectObjId=='cross')
	{
		var speciesObj = document.getElementById('species');
		var groupObj = document.getElementById('cross');
		var typeObj = document.getElementById('tissue');
		var len = lArr.length;
		var arr = [];
		var idx = 0;
		for (var i=1; i < len; i++) {
			//get type(tissue) info from lArr
			if(lArr[i][0]==(getIndexByValue('species',speciesObj.value)).toString()&&lArr[i][1]==(getIndexByValue('cross',groupObj.value)).toString()&&!Contains(arr,lArr[i][2]))
			{
				arr[idx++]=lArr[i][2];
			}  
		}
		idx=0;
		len = arr.length;
		removeOptions("tissue");
		for (var i=0; i < len; i++) {
			// setting Type's option
			typeObj.options[idx++] = new Option(tArr[arr[i]].txt, tArr[arr[i]].val); 
		}
		updateChocie('tissue');

	}else if(selectObjId=='tissue')
	{
		var speciesObj = document.getElementById('species');
		var groupObj = document.getElementById('cross');
		var typeObj = document.getElementById('tissue');
		var databaseObj = document.getElementById('database');

		var len = lArr.length;
		var arr = [];
		var idx = 0;
		for (var i=1; i < len; i++) {
			//get dataset(database) info from lArr
			if(lArr[i][0]==(getIndexByValue('species',speciesObj.value)).toString()&&lArr[i][1]==(getIndexByValue('cross',groupObj.value)).toString()&&lArr[i][2]==(getIndexByValue('tissue',typeObj.value)).toString()&&!Contains(arr,lArr[i][3]))
			{
				arr[idx++]=lArr[i][3];
			}  
		}
		idx=0;
		len = arr.length;
		removeOptions("database");
		for (var i=0; i < len; i++) {
			// setting Database's option
			databaseObj.options[idx++] = new Option(dArr[arr[i]].txt, dArr[arr[i]].val); 
		}
		updateChocie('database');
	}	
}

/* 
*  input: arr (targeted array); obj (targeted value)
*  function: check whether targeted array contains targeted value or not
*  output: return true, if array contains targeted value, otherwise return false
*/
function Contains(arr,obj) { 
	var i = arr.length; 
	while (i--) { 
		if (arr[i] == obj) { 
			return true; 
		}
	} 
	return false; 
} 

/* 
* input: selectObj (designated select menu, such as species, cross, etc... )
* function: clear designated select menu's option
* output: null
*/
function removeOptions(selectObj) {     
	if (typeof selectObj != 'object'){         
		selectObj = document.getElementById(selectObj);
	}        
	var len = selectObj.options.length;      
	for (var i=0; i < len; i++)     {         
		// clear current selection       
		selectObj.options[0] = null;    
	} 
} 

/* 
*  input: selectObjId (designated select menu, such as species, cross, etc... )
*         Value: target value
*  function: retrieve Index info of target value in designated array
*  output: index info
*/
function getIndexByValue(selectObjId,val)
{
	if(selectObjId=='species')
	{
		for(var i=1;i<sArr.length;i++){
			if(sArr[i].val==val)
				return i;				
		}
	}else if(selectObjId=='cross')
	{
		for(var i=1;i<gArr.length;i++)
			if(gArr[i].val==val)
				return i;
	}else if(selectObjId=='tissue')
	{
		for(var i=1;i<tArr.length;i++)
			if(tArr[i].val==val)
				return i;
	}
	else return;
}

/* 
*  input: objId (designated select menu, such as species, cross, etc... )
*  		  val(targeted value)
*  function: setting option's selected status for designated select menu based on target value, also update the following select menu in the main search page 
*  output: return true if selected status has been set, otherwise return false.
*/
function setChoice(objId,val)
{
	var Obj = document.getElementById(objId);
	var idx=-1;

	for(i=0;i<Obj.options.length;i++){
		if(Obj.options[i].value==val){
			idx=i;
			break;
		}
	}
	
	if(idx>=0){
		//setting option's selected status 
		Obj.options[idx].selected=true;
		//update the following select menu 
		fillOptions(objId);
	}else{
		Obj.options[0].selected=true;
		fillOptions(objId);
	}
}

// setting option's selected status based on default setting or cookie setting for Species, Group, Type and Database select menu in the main search page http://www.genenetwork.org/
function updateChocie(selectObjId){

	if (selectObjId =='species')
	{
		defaultSpecies= getDefaultValue('species'); 
		//setting option's selected status
		setChoice('species',defaultSpecies);
	}else if (selectObjId =='cross')
	{	
		defaultSet= getDefaultValue('cross'); 
		//setting option's selected status
		setChoice('cross',defaultSet);
	}else if (selectObjId =='tissue')
	{
		defaultType= getDefaultValue('tissue'); 
		//setting option's selected status
		setChoice('tissue',defaultType);
	}else if (selectObjId =='database')
	{
		defaultDB= getDefaultValue('database'); 
		//setting option's selected status
		setChoice('database',defaultDB);
	}
}

//get default value;if cookie exists, then use cookie value, otherwise use default value
function getDefaultValue(selectObjId){	
	//define default value
	var defaultSpecies = 'mouse'
	var defaultSet = 'BXD'
	var defaultType = 'Hippocampus'
	var defaultDB = 'HC_M2_0606_P'

	if (selectObjId =='species')
	{
		//if cookie exists, then use cookie value, otherwise use default value
		var cookieSpecies = getCookie('defaultSpecies');
		if(cookieSpecies)
		{
			defaultSpecies= cookieSpecies; 
		}
		return defaultSpecies;
	}else if (selectObjId =='cross'){
		var cookieSet = getCookie('defaultSet');
		if(cookieSet){
			defaultSet= cookieSet; 
		} 
		return defaultSet;
	}else if (selectObjId =='tissue'){
		var cookieType = getCookie('defaultType');
		if(cookieType){
			defaultType= cookieType;
		} 
		return defaultType;
	}else if (selectObjId =='database')
	{
		var cookieDB = getCookie('defaultDB');
		if(cookieDB){
			defaultDB= cookieDB;
		}
		return defaultDB;
	}

}

//setting default value into cookies for the dropdown menus: Species,Group, Type, and Database 
function setDefault(thisform){
	
	setCookie('cookieTest', 'cookieTest', 1);
	var cookieTest = getCookie('cookieTest');
	delCookie('cookieTest');
	if (cookieTest){
		var defaultSpecies = thisform.species.value;
		setCookie('defaultSpecies', defaultSpecies, 10);
		var defaultSet = thisform.cross.value;
		setCookie('defaultSet', defaultSet, 10);
		var defaultType = thisform.tissue.value;
		setCookie('defaultType', defaultType, 10);
		var defaultDB = thisform.database.value;
		setCookie('defaultDB', defaultDB, 10);
		updateChocie('species');
		updateChocie('cross');
		updateChocie('tissue');
		updateChocie('database');		
		alert("The current settings are now your default");
	}
	else{
		alert("You need to enable Cookies in your browser.");
	}
}

