var sArr = [
{txt:'',val:''},
{txt:'Human (hg19)',val:'human'},
{txt:'Macaque monkey',val:'macaque monkey'},
{txt:'Mouse (mm10)',val:'mouse'},
{txt:'Rat (rn3)',val:'rat'},
{txt:'Drosophila',val:'drosophila'},
{txt:'Arabidopsis thaliana',val:'arabidopsis'},
{txt:'Barley',val:'barley'},
{txt:'Poplar',val:'poplar'},
{txt:'Soybean',val:'soybean'},
{txt:'Tomato',val:'tomato'},
{txt:'All Species',val:'All Species'}];

var gArr = [
{txt:'',val:''},
{txt:"AKXD",val:"AKXD"},
{txt:"AXB/BXA",val:"AXBXA"},
{txt:"B6BTBRF2",val:"B6BTBRF2"},
{txt:"B6D2 EtOH Selected Advanced Intercross",val:"Linsenbardt-Boehm"},
{txt:"B6D2F2",val:"B6D2F2"},
{txt:"B6D2F2 PSU",val:"B6D2F2-PSU"},
{txt:"BayXSha",val:"BayXSha"},
{txt:"BDF2 UCLA",val:"BDF2-1999"},
{txt:"BDF2-2005",val:"BDF2-2005"},
{txt:"BH/HB F2 UCLA",val:"BHHBF2"},
{txt:"BHF2 (Apoe Null) UCLA",val:"BHF2"},
{txt:"BXD",val:"BXD"},
{txt:"BXD Aged",val:"B6D2RI"},
{txt:"BXD Bone",val:"BXD-Bone"},
{txt:"BXH",val:"BXH"},
{txt:"CastB6/B6Cast F2 UCLA",val:"CTB6F2"},
{txt:"CFW Outbred GWAS",val:"CFW"},
{txt:"Chronic Intermittent Ethanol",val:"CIE-INIA"},
{txt:"Chronic Mild Stress",val:"CMS"},
{txt:"ColXBur",val:"ColXBur"},
{txt:"ColXCvi",val:"ColXCvi"},
{txt:"CXB",val:"CXB"},
{txt:"Drosophila Genetic Reference Panel",val:"DGRP"},
{txt:"Glaucoma and Aged Retina, UTHSC",val:"B6D2"},
{txt:"Heterogeneous Stock",val:"HS"},
{txt:"Heterogeneous Stock Collaborative Cross",val:"HS-CC"},
{txt:"HXB/BXH",val:"HXBBXH"},
{txt:"J12XJ58F11",val:"J12XJ58F11"},
{txt:"J12XJ58F2",val:"J12XJ58F2"},
{txt:"LXP",val:"LXP"},
{txt:"LXS",val:"LXS"},
{txt:"Macaca fasicularis (Cynomolgus monkey)",val:"Macaca-fasicularis"},
{txt:"Mouse Diversity Panel",val:"MDP"},
{txt:"NIH Heterogeneous Stock (Palmer)",val:"HSNIH-Palmer"},
{txt:"NIH Heterogeneous Stock (RGSMC 2013)",val:"HSNIH-RGSMC"},
{txt:"NZB/FVB N2 NCI",val:"NZBXFVB-N2"},
{txt:"Oregon-R x 2b3",val:"Oregon-R_x_2b3"},
{txt:"Poplar",val:"Poplar"},
{txt:"QSM",val:"QSM"},
{txt:"Reduced Complexity Cross (B6JxB6N F2)",val:"C57BL-6JxC57BL-6NJF2"},
{txt:"Scripps C57BL/6J",val:"Scripps-2013"},
{txt:"SOTNOT-OHSU",val:"SOTNOT-OHSU"},
{txt:"SXM",val:"SXM"},
{txt:"UIOWA SRxSHRSP F2",val:"SRxSHRSPF2"},
{txt:"GTEx v5 All Tissues, RNA-Seq with Genotypes",val:"GTEx_v5"},
{txt:"GTEx v3 All Tissues, RNA-Seq with Genotypes",val:"GTEx"},
{txt:"Brain, Cognition, Human Connectome Project",val:"HCP"},
{txt:"Brain: Normal Gene Expression (NIH/Gibbs)",val:"Brain-Normal-NIH-Gibbs"},
{txt:"Brain, Development: Normal Gene Expression (Yale/Sestan)",val:"HSB"},
{txt:"Brain, Aging: Normal Gene Expression (UCI/Cotman)",val:"Aging-Brain-UCI"},
{txt:"Brain, Aging: AD, HD, Normal Gene Expression (Harvard/Merck)",val:"HB"},
{txt:"Brain, Aging: AD, Normal Gene Expression with Genotypes (Myers)",val:"AD-cases-controls-Myers"},
{txt:"Brain, Aging: AD, Normal Gene Expression (Liang)",val:"AD-cases-controls"},
{txt:"Child Development: CANDLE Cohort with Genotypes (TUCI/UTHSC)",val:"CANDLE"},
{txt:"Liver: Normal Gene Expression with Genotypes (Merck)",val:"HLC"},
{txt:"Lung: Normal Gene Expression (Merck)",val:"HLT"},
{txt:"Lymphoblastoid Cells: Gene Expression (CEPH, Williams)",val:"CEPH-2004"},
{txt:"Retina: Normal Adult Gene Expression, RNA-Seq (TIGEM)",val:"TIGEM-Retina-RNA-Seq"},
{txt:'All Groups',val:'all groups'}];

var tArr = [
{txt:'',val:''},
{txt:'Adipose mRNA',val:'Adipose mRNA'},
{txt:'Adipose Proteome',val:'Adipose Proteome'},
{txt:'Adipose tissue, subcutaneous mRNA',val:'Adipose tissue, subcutaneous mRNA'},
{txt:'Adipose tissue, visceral mRNA',val:'Adipose tissue, visceral mRNA'},
{txt:'Adrenal Gland mRNA',val:'Adrenal Gland mRNA'},
{txt:'Amygdala mRNA',val:'Amygdala mRNA'},
{txt:'Anterior Cingulate Cortex mRNA',val:'Anterior Cingulate Cortex mRNA'},
{txt:'Aorta mRNA',val:'Aorta mRNA'},
{txt:'Bladder mRNA',val:'Bladder mRNA'},
{txt:'Blood, Cells - EBV-Transformed Lymphocytes mRNA',val:'Blood, Cells - EBV-Transformed Lymphocytes mRNA'},
{txt:'Bone Femur mRNA',val:'Bone Femur mRNA'},
{txt:'Bone Marrow mRNA',val:'Bone Marrow mRNA'},
{txt:'Brain mRNA',val:'Brain mRNA'},
{txt:'Breast - Mammary Tissue mRNA',val:'Breast - Mammary Tissue mRNA'},
{txt:'Cartilage mRNA',val:'Cartilage mRNA'},
{txt:'Caudate mRNA',val:'Caudate mRNA'},
{txt:'Cells - EBV-Transformed Lymphocytes mRNA',val:'Cells - EBV-Transformed Lymphocytes mRNA'},
{txt:'Cells - Leukemia Cell Line (CML) mRNA',val:'Cells - Leukemia Cell Line (CML) mRNA'},
{txt:'Cells - Transformed Fibroblasts mRNA',val:'Cells - Transformed Fibroblasts mRNA'},
{txt:'Cerebellar Cortex mRNA',val:'Cerebellar Cortex mRNA'},
{txt:'Cerebellar Hemisphere mRNA',val:'Cerebellar Hemisphere mRNA'},
{txt:'Cerebellum mRNA',val:'Cerebellum mRNA'},
{txt:'Cervix mRNA',val:'Cervix mRNA'},
{txt:'Colon - Sigmoid mRNA',val:'Colon - Sigmoid mRNA'},
{txt:'Colon - Transverse mRNA',val:'Colon - Transverse mRNA'},
{txt:'Coronary mRNA',val:'Coronary mRNA'},
{txt:'Dorsal Root Ganglia mRNA',val:'Dorsal Root Ganglia mRNA'},
{txt:'Dorsolateral Prefrontal Cortex mRNA',val:'Dorsolateral Prefrontal Cortex mRNA'},
{txt:'Embryo mRNA',val:'Embryo mRNA'},
{txt:'Entorhinal Cortex mRNA',val:'Entorhinal Cortex mRNA'},
{txt:'Esophagus - Gastroesophageal mRNA',val:'Esophagus - Gastroesophageal mRNA'},
{txt:'Esophagus - Mucosa mRNA',val:'Esophagus - Mucosa mRNA'},
{txt:'Esophagus - Muscularis mRNA',val:'Esophagus - Muscularis mRNA'},
{txt:'Eye mRNA',val:'Eye mRNA'},
{txt:'Fallopian Tube mRNA',val:'Fallopian Tube mRNA'},
{txt:'Fecal Metabolome',val:'Fecal Metabolome'},
{txt:'Frontal Cortex mRNA',val:'Frontal Cortex mRNA'},
{txt:'Gastrointestinal mRNA',val:'Gastrointestinal mRNA'},
{txt:'Heart - Atrial Appendage mRNA',val:'Heart - Atrial Appendage mRNA'},
{txt:'Heart - Left Ventricle mRNA',val:'Heart - Left Ventricle mRNA'},
{txt:'Heart mRNA',val:'Heart mRNA'},
{txt:'Hematopoietic Cells mRNA',val:'Hematopoietic Cells mRNA'},
{txt:'Hippocampal Precursor Cells mRNA',val:'Hippocampal Precursor Cells mRNA'},
{txt:'Hippocampus microRNA',val:'Hippocampus microRNA'},
{txt:'Hippocampus mRNA',val:'Hippocampus mRNA'},
{txt:'Hypothalamus mRNA',val:'Hypothalamus mRNA'},
{txt:'Inferior Temporal Cortex mRNA',val:'Inferior Temporal Cortex mRNA'},
{txt:'Kidney mRNA',val:'Kidney mRNA'},
{txt:'LCM Brain Regions mRNA',val:'LCM Brain Regions mRNA'},
{txt:'Leaf mRNA',val:'Leaf mRNA'},
{txt:'Leucocytes mRNA',val:'Leucocytes mRNA'},
{txt:'Liver Metabolome',val:'Liver Metabolome'},
{txt:'Liver mRNA',val:'Liver mRNA'},
{txt:'Liver Proteome',val:'Liver Proteome'},
{txt:'Lung mRNA',val:'Lung mRNA'},
{txt:'Lymphoblast B-cell mRNA',val:'Lymphoblast B-cell mRNA'},
{txt:'Mammary Tumors mRNA',val:'Mammary Tumors mRNA'},
{txt:'Medial Prefrontal Cortex mRNA',val:'Medial Prefrontal Cortex mRNA'},
{txt:'Mediodorsal Nucleus of Thalamus mRNA',val:'Mediodorsal Nucleus of Thalamus mRNA'},
{txt:'Methylation',val:'Methylation'},
{txt:'Midbrain mRNA',val:'Midbrain mRNA'},
{txt:'Muscle Metabolome',val:'Muscle Metabolome'},
{txt:'Muscle mRNA',val:'Muscle mRNA'},
{txt:'Neocortex mRNA',val:'Neocortex mRNA'},
{txt:'Nerve - Tibial mRNA',val:'Nerve - Tibial mRNA'},
{txt:'Neutrophils mRNA',val:'Neutrophils mRNA'},
{txt:'Newborn Cord Blood mRNA',val:'Newborn Cord Blood mRNA'},
{txt:'Nucleus Accumbens mRNA',val:'Nucleus Accumbens mRNA'},
{txt:'Orbital Prefrontal Cortex mRNA',val:'Orbital Prefrontal Cortex mRNA'},
{txt:'Ovary mRNA',val:'Ovary mRNA'},
{txt:'Pancreas mRNA',val:'Pancreas mRNA'},
{txt:'Peritoneal Fat mRNA',val:'Peritoneal Fat mRNA'},
{txt:'Pituitary Gland mRNA',val:'Pituitary Gland mRNA'},
{txt:'Pons mRNA',val:'Pons mRNA'},
{txt:'Popliteal Lymph Node mRNA',val:'Popliteal Lymph Node mRNA'},
{txt:'Postcentral Gyrus mRNA',val:'Postcentral Gyrus mRNA'},
{txt:'Posterior Inferior Parietal Cortex mRNA',val:'Posterior Inferior Parietal Cortex mRNA'},
{txt:'Posterior Superior Temporal Cortex mRNA',val:'Posterior Superior Temporal Cortex mRNA'},
{txt:'Prefrontal Cortex mRNA',val:'Prefrontal Cortex mRNA'},
{txt:'Primary Auditory (A1) Cortex mRNA',val:'Primary Auditory (A1) Cortex mRNA'},
{txt:'Primary Motor (M1) Cortex mRNA',val:'Primary Motor (M1) Cortex mRNA'},
{txt:'Primary Somatosensory (S1) Cortex mRNA',val:'Primary Somatosensory (S1) Cortex mRNA'},
{txt:'Primary Visual Cortex mRNA',val:'Primary Visual Cortex mRNA'},
{txt:'Prostate mRNA',val:'Prostate mRNA'},
{txt:'Putamen mRNA',val:'Putamen mRNA'},
{txt:'Retina microRNA',val:'Retina microRNA'},
{txt:'Retina mRNA',val:'Retina mRNA'},
{txt:'Salivary Gland mRNA',val:'Salivary Gland mRNA'},
{txt:'Skin - Not Sun Exposed (Suprapubic) mRNA',val:'Skin - Not Sun Exposed (Suprapubic) mRNA'},
{txt:'Skin - Sun Exposed (Lower leg) mRNA',val:'Skin - Sun Exposed (Lower leg) mRNA'},
{txt:'Small Intestine - Terminal Ileum mRNA',val:'Small Intestine - Terminal Ileum mRNA'},
{txt:'Spinal Cord mRNA',val:'Spinal Cord mRNA'},
{txt:'Spleen mRNA',val:'Spleen mRNA'},
{txt:'Stomach mRNA',val:'Stomach mRNA'},
{txt:'Striatum mRNA',val:'Striatum mRNA'},
{txt:'Substantia Nigra mRNA',val:'Substantia Nigra mRNA'},
{txt:'Superior Frontal Gyrus mRNA',val:'Superior Frontal Gyrus mRNA'},
{txt:'T Cell (helper) mRNA',val:'T Cell (helper) mRNA'},
{txt:'T Cell (regulatory) mRNA',val:'T Cell (regulatory) mRNA'},
{txt:'Temporal Cerebral Wall mRNA',val:'Temporal Cerebral Wall mRNA'},
{txt:'Testis mRNA',val:'Testis mRNA'},
{txt:'Thymus mRNA',val:'Thymus mRNA'},
{txt:'Thyroid mRNA',val:'Thyroid mRNA'},
{txt:'Tibial mRNA',val:'Tibial mRNA'},
{txt:'Uterus mRNA',val:'Uterus mRNA'},
{txt:'Vagina mRNA',val:'Vagina mRNA'},
{txt:'Ventral Tegmental Area mRNA',val:'Ventral Tegmental Area mRNA'},
{txt:'Ventrolateral Prefrontal Cortex mRNA',val:'Ventrolateral Prefrontal Cortex mRNA'},
{txt:'Whole Blood mRNA',val:'Whole Blood mRNA'},
{txt:'Whole Body mRNA',val:'Whole Body mRNA'},
{txt:'Phenotypes',val:'Phenotypes'},
{txt:'Genotypes',val:'Genotypes'}];

var dArr = [
{txt:'',val:''},
{txt:'UCSD CFW Hippocampus (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_HIP_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_STR_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_PFC_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Hippocampus (Jan17) RNA-Seq',val:'UCSD_CFW_HIP_RNA-Seq_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq',val:'UCSD_CFW_SPL_RNA-Seq_0117'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq',val:'UCSD_CFW_PFC_RNA-Seq_0117'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverRMA0413'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleRMA1211'},
{txt:'EPFL/LISP BXD HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverHFDRMA0413'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleHFDRMA1211'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverCDRMA0413'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleCDRMA1211'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level **',val:'EPFLMouseLiverBothExRMA0413'},
{txt:'UTHSC B6D2 Retina Affy miRNA-4.0 (Nov16) RMA **',val:'UTHSC_mm10_B6D2_Ret_miRNA_1116'},
{txt:'UTHSC B6D2 Retina Affy MoGene 1.0ST (Sep16) Gene Level RMA **',val:'UTHSC_mm9_B6D2_Ret_0916'},
{txt:'UTHSC B6D2 Retina Affy MoGene 1.0ST (Sep16) Exon Level RMA **',val:'UTHSC_mm9_B6D2_RetEx_0916'},
{txt:'TIGEM Human Retina RNA-Seq (Sep16) RPKM log2',val:'TIGEM_hg38_ret_rna-seq_0916'},
{txt:'HMS Spleen CD4+ T cells MDP Affy Mouse Gene 1.0 ST (Jul16) Gene Level',val:'HMS_mm8_MDP_Spl_CD4_1116'},
{txt:'FGUCAS BXH/HXB Brown Adipose Affy Rat Gene 2.0 ST (May16) log2 **',val:'FGUCAS_BAdip0516'},
{txt:'EPFL/ETHZ BXD Brown Adipose, Total Tissue Proteome, Chow Diet (Apr16) Light SWATH **',val:'EPFL_AdiPro0416'},
{txt:'EPFL/ETHZ BXD Brown Adipose, Isolated Mitochondria Proteome, Chow Diet (Apr16) Light SWATH **',val:'EPFL_AdiMitPro0416'},
{txt:'Full HEI Retina Illumina V6.2 (Apr10) RankInv',val:'Illum_Retina_BXD_RankInv0410'},
{txt:'HEI Retina Normal Illumina V6.2 (Apr10) RankInv',val:'G2NEI_ILM_Retina_BXD_RI0410'},
{txt:'VCU BXD PFC Sal M430 2.0 (Dec06) RMA',val:'VCUSal_1206_R'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Gene Level',val:'DoDCMMRPRetMoGene2_0515'},
{txt:'VCU BXD PFC EtOH M430 2.0 (Dec06) RMA',val:'VCUEtOH_1206_R'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Mar16) RMA Gene Level **',val:'DoDTATRCRetBLMoGene2_0316'},
{txt:'VCU BXD PFC Et vs Sal M430 2.0 (Dec06) Sscore',val:'VCUSal_1006_R'},
{txt:'VCU BXD NAc Sal M430 2.0 (Oct07) RMA',val:'VCUSalo_1007_R'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Dec13) RMA Gene Level **',val:'DoDTATRCRetBLMoGene2_1213'},
{txt:'DoD Retina Blast vs Normal Retina Affy MoGene 2.0 ST (Apr16) RMA Gene Level **',val:'DoDRetBlastvsNormal_0416'},
{txt:'VCU BXD PFC CIE Air Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_PFC_CIE_Air_0416'},
{txt:'VCU BXD NAc CIE Air Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_Nac_CIE_Air_0416'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Exon Level',val:'DoDCMMRPRetMoGene2Ex_0515'},
{txt:'VCU BXD PFC CIE Air Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_PFC_CIE_AirZ_0416'},
{txt:'VCU BXD NAc CIE Air Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_Nac_CIE_AirZ_0416'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Mar16) RMA Exon Level **',val:'DoDTATRCRetBLMoGene2E_0316'},
{txt:'VCU BXD PFC CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_PFC_CIE_Et_0416'},
{txt:'VCU BXD NAc CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_Nac_CIE_Et_0416'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Dec13) RMA Exon Level **',val:'DoDTATRCRetBLExMoGene2_1213'},
{txt:'VCU BXD PFC CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_PFC_CIE_EtZ_0416'},
{txt:'VCU BXD NAc CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_Nac_CIE_EtZ_0416'},
{txt:'DoD Retina Blast vs Normal Retina Affy MoGene 2.0 ST (Apr16) RMA Exon Level **',val:'DoDRetBlastvsNormalEx_0416'},
{txt:'UCAMC LXS Whole Brain Ethanol RNA Sequence (Feb16) FPKM **',val:'UCAMC_LXSBrEtOH_RNA-Seq_0216'},
{txt:'UCAMC LXS Whole Brain Saline RNA Sequence (Feb16) FPKM **',val:'UCAMC_LXSBrSal_RNA-Seq_0216'},
{txt:'Hippocampus Consortium M430v2 (Jun06) PDNN',val:'HC_M2_0606_P'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Gene Level (Oct13) RMA',val:'EPFLADGL1013'},
{txt:'Hippocampus Consortium M430v2 (Jun06) MAS5',val:'HC_M2_0606_M'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Exon Level (Oct13) RMA',val:'EPFLADEL1013'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA',val:'HC_M2_0606_R'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA',val:'UMUTAffyExon_0209_RMA'},
{txt:'EPFL/LISP BXD CD+HFD Subcutaneous WAT Affy MTA 1.0 Gene Level Main (Feb16) RMA **',val:'EL_BXDCDHFDScWAT_0216'},
{txt:'EPFL/LISP BXD HFD Subcutaneous WAT Affy MTA 1.0 Gene Level Main (Feb16) RMA **',val:'EL_BXDHFDScWAT_0216'},
{txt:'EPFL/LISP BXD CD Subcutaneous WAT Affy MTA 1.0 Gene Level Main (Feb16) RMA **',val:'EL_BXDCDScWAT_0216'},
{txt:'INIA LCM (11 Regions) CIE/AIR/BAS RNA-seq Transcript Level (Dec15)',val:'INIA_LCM_CAB_1215'},
{txt:'INIA LCM (11 Regions) CIE/AIR RNA-seq Transcript Level (Dec15)',val:'INIA_LCM_1215'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA',val:'UTHSC_SPL_RMA_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Set1',val:'UTHSC_SPLs1_RMA_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Set2',val:'UTHSC_SPLs2_RMA_1210'},
{txt:'INIA LCM (11 Regions) BASELINE RNA-seq Transcript Level (Dec15)',val:'INIA_LCMB_1215'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD+HFD (Jun14)',val:'EPFL-LISP_LivPMetCDHFD1213'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites HFD (Jun14)',val:'EPFL-LISP_LivPMetHFD1213'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD (Jun14)',val:'EPFL-LISP_LivPMetCD1213'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites HFD (Jun14) Log2',val:'EPFL-LISP_LivPMetlog2HFD1213'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD (Jun14) Log2',val:'EPFL-LISP_LivPMetlog2CD1213'},
{txt:'ONC HEI Retina (April 2012) RankInv',val:'ONCRetILM6_0412'},
{txt:'RTI RCMRC BXD Fecal Metabolites CD+HFD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetlog0814'},
{txt:'RTI RCMRC BXD Fecal Metabolites HFD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetHFlog0814'},
{txt:'RTI RCMRC BXD Fecal Metabolites CD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetLFlog0814'},
{txt:'Hippocampus Mouse Transcriptome Assay 1.0 Gene Level Main (Nov15) RMA **',val:'CMS_Hipp1115'},
{txt:'Hippocampus Mouse Transcriptome Assay 1.0 Gene Level Z-Score (Nov15) RMA **',val:'CMS_Hipp_ZScr_1115'},
{txt:'EPFL/ETHZ BXD Liver, Chow Diet (Oct14) Light SWATH',val:'EPFLETHZBXDprotCD_LS1114'},
{txt:'EPFL/ETHZ BXD Liver, High Fat Diet (Oct14) Light SWATH',val:'EPFLETHZBXDprotHF_LS1114'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 NOE Balanced (Feb16) RankInv',val:'UTHSC_ILM_BXD_hipp_NOEb_0216'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 RSE Balanced (Feb16) RankInv',val:'UTHSC_ILM_BXD_hipp_RSEb_0216'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 RSS Balanced (Feb16) RankInv',val:'UTHSC_ILM_BXD_hipp_RSSb_0216'},
{txt:'UTHSC Hippocampus Illumina v6.1 All Combined (Nov12) RankInv',val:'UT_ILM_BXD_hipp_5T_1112'},
{txt:'GTEXv5 Human Adipose Subcutaneous RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdipSub_0915'},
{txt:'GTEXv5 Human Adipose Visceral Omentum RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdiVis_0915'},
{txt:'GTEXv5 Human Adrenal Gland RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdrGla_0915'},
{txt:'GTEXv5 Human Artery Aorta RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtAor_0915'},
{txt:'GTEXv5 Human Artery Coronary RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtCor_0915'},
{txt:'GTEXv5 Human Artery Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtTib_0915'},
{txt:'GTEXv5 Human Bladder RefSeq (Sep15) RPKM log2',val:'GTEXv5_Bla_0915'},
{txt:'GTEXv5 Human Brain Amygdala RefSeq (Sep15) RPKM log2',val:'GTEXv5_Amy_0915'},
{txt:'GTEXv5 Human Brain Anterior Cingulate Cortex BA24 RefSeq (Sep15) RPKM log2',val:'GTEXv5_AntCtx_0915'},
{txt:'GTEXv5 Human Brain Caudate Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCa_0915'},
{txt:'GTEXv5 Human Brain Cerebellar Hemisphere RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerH_0915'},
{txt:'GTEXv5 Human Brain Cerebellum RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCe_0915'},
{txt:'GTEXv5 Human Brain Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCtx_0915'},
{txt:'GTEXv5 Human Brain Frontal Cortex BA9 RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrFr_0915'},
{txt:'GTEXv5 Human Brain Hippocampus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hip_0915'},
{txt:'GTEXv5 Human Brain Hypothalamus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hiptha_0915'},
{txt:'GTEXv5 Human Brain Nucleus Accumbens Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_NuAcc_0915'},
{txt:'GTEXv5 Human Brain Putamen Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_PutB_0915'},
{txt:'GTEXv5 Human Brain Spinal Cord Cervical C-1 RefSeq (Sep15) RPKM log2',val:'GTEXv5_SpCo_0915'},
{txt:'GTEXv5 Human Brain Substantia Nigra RefSeq (Sep15) RPKM log2',val:'GTEXv5_SubN_0915'},
{txt:'GTEXv5 Human Breast Mammary Tissue RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrMa_0915'},
{txt:'GTEXv5 Human Cells-EBV-Transformed Lymphocytes RefSeq (Sep15) RPKM log2',val:'GTEXv5_EBV_0915'},
{txt:'GTEXv5 Human Cells-Leukemia Cell Line CML RefSeq (Sep15) RPKM log2',val:'GTEXv5_BM_0915'},
{txt:'GTEXv5 Human Cells-Transformed Fibroblasts RefSeq (Sep15) RPKM log2',val:'GTEXv5_CTF_0915'},
{txt:'GTEXv5 Human Cervix-Ectocervix RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerEct_0915'},
{txt:'GTEXv5 Human Colon-Sigmoid RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColSig_0915'},
{txt:'GTEXv5 Human Colon-Transverse RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColTra_0915'},
{txt:'GTEXv5 Human Esophagus - Gastroesophageal Junction RefSeq (Sep15) RPKM log2',val:'GTEXv5_GastJun_0915'},
{txt:'GTEXv5 Human Esophagus - Mucosa RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMu_0915'},
{txt:'GTEXv5 Human Esophagus - Muscularis RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMus_0915'},
{txt:'GTEXv5 Human Fallopian Tube RefSeq (Sep15) RPKM log2',val:'GTEXv5_Fatu_0915'},
{txt:'GTEXv5 Human Heart - Atrial Appendage RefSeq (Sep15) RPKM log2',val:'GTEXv5_HAA_0915'},
{txt:'GTEXv5 Human Heart - Left Ventricle RefSeq (Sep15) RPKM log2',val:'GTEXv5_LV_0915'},
{txt:'GTEXv5 Human Kidney - Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_Kidn_0915'},
{txt:'GTEXv5 Human Liver RefSeq (Sep15) RPKM log2',val:'GTEXv5_Liv_0915'},
{txt:'GTEXv5 Human Lung RefSeq (Sep15) RPKM log2',val:'GTEXv5_Lung_0915'},
{txt:'GTEXv5 Human Muscle - Skeletal RefSeq (Sep15) RPKM log2',val:'GTEXv5_MuSk_0915'},
{txt:'GTEXv5 Human Nerve - Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_Tib_0915'},
{txt:'GTEXv5 Human Ovary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ov_0915'},
{txt:'GTEXv5 Human Pancreas RefSeq (Sep15) RPKM log2',val:'GTEXv5_Panc_0915'},
{txt:'GTEXv5 Human Pituitary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Pit_0915'},
{txt:'GTEXv5 Human Prostate RefSeq (Sep15) RPKM log2',val:'GTEXv5_Prost_0915'},
{txt:'GTEXv5 Human Salivary Gland Minor RefSeq (Sep15) RPKM log2',val:'GTEXv5_SalGl_0915'},
{txt:'GTEXv5 Human Skin-Not Sun Exposed-Suprapubic RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkN_0915'},
{txt:'GTEXv5 Human Skin-Sun Exposed-Lower Leg RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkS_0915'},
{txt:'GTEXv5 Human Small Intestine - Terminal Ileum RefSeq (Sep15) RPKM log2',val:'GTEXv5_SInt_0915'},
{txt:'GTEXv5 Human Spleen RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sple_0915'},
{txt:'GTEXv5 Human Stomach RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sto_0915'},
{txt:'GTEXv5 Human Testis RefSeq (Sep15) RPKM log2',val:'GTEXv5_Test_0915'},
{txt:'GTEXv5 Human Thyroid RefSeq (Sep15) RPKM log2',val:'GTEXv5_Thy_0915'},
{txt:'GTEXv5 Human Uterus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ut_0915'},
{txt:'GTEXv5 Human Vagina RefSeq (Sep15) RPKM log2',val:'GTEXv5_Vag_0915'},
{txt:'GTEXv5 Human Whole Blood RefSeq (Sep15) RPKM log2',val:'GTEXv5_Wbl_0915'},
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P3RInv_1111'},
{txt:'BIDMC/UTHSC Dev Striatum P14 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P14RInv_1111'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins CD+HFD (Feb14) SRM',val:'EPFLBXDprotCD-CDHFDRPN0214'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins CD (Feb14) SRM',val:'EPFLBXDprotCDRPN0214'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins HFD (Feb14) SRM',val:'EPFLBXDprotHFDRPN0214'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) RMA',val:'UTHSC_BXDAged_0615'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) Exon Level RMA',val:'UTHSC_BXDAgedEx_1116'},
{txt:'EPFL/ETHZ BXD Liver, Soluble Proteins CD (Jun14) SWATH',val:'EPFLETHZBXDprotCD0514'},
{txt:'EPFL/ETHZ BXD Liver, Soluble Proteins HFD (Jun14) SWATH',val:'EPFLETHZBXDprotHFD0514'},
{txt:'CRTD BXD Hippocampal Precursor Cells ILM MouseWG-6_R13 (Dec14) Quantile',val:'CRTD_HipPreCell1214'},
{txt:'HZI Lung M430v2 (Apr08) RMA',val:'HZI_0408_R'},
{txt:'UT-VGX Hepatocytes Affy Mouse Gene 1.0 ST Gene Level (Oct14) RMA',val:'UTHSC-VGX_MmBXDHepatocytesRMA1014'},
{txt:'HZI Lung M430v2 (Apr08) MAS5',val:'HZI_0408_M'},
{txt:'UT-VGX Hepatocytes Affy Mouse Gene 1.0 ST Exon Level (Oct14) RMA',val:'UT-VGX_HEL1014'},
{txt:'HZI Lung Flu Infected BXD (Nov16) RNA-Seq **',val:'HZI_LungBXD_RNA-Seq_1116'},
{txt:'UTHSC Elicited Peritoneal Neutrophils Affy MoGene 2.0 ST (Oct14) RMA **',val:'UTHSC-Neut-1014'},
{txt:'UTHSC Elicited Peritoneal Neutrophils Affy MoGene 2.0 ST (Oct14) RMA Exon Level **',val:'UTHSC-Neut_EL-1014'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Untrimmed',val:'UTHSC_BXD_WB_RNASeq1112'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Trimmed 1.0',val:'UTHSC_BXD_WB_RNASeqtrim1_1112'},
{txt:'GTEx Human Cerebellum (Mar14) RPKM Log2',val:'GTEx_log2_CER_0314'},
{txt:'GTEx Human Hippocampus (Mar14) RPKM Log2',val:'GTEx_log2_HIP_0314'},
{txt:'GTEx Human Adrenal Gland (Mar14) RPKM Log2',val:'GTEx_log2_Adren_0314'},
{txt:'GTEx Human Anterior Cingulate Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Anter_0314'},
{txt:'GTEx Human Aorta (Mar14) RPKM Log2',val:'GTEx_log2_Aorta_0314'},
{txt:'GTEx Human Blood, Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_Blood_0314'},
{txt:'GTEx Human Breast - Mammary Tissue (Mar14) RPKM Log2',val:'GTEx_log2_Breas_0314'},
{txt:'GTEx Human Caudate (Mar14) RPKM Log2',val:'GTEx_log2_Cauda_0314'},
{txt:'GTEx Human Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_CellsEBV_0314'},
{txt:'GTEx Human Cells - Leukemia Cell Line (CML) (Mar14) RPKM Log2',val:'GTEx_log2_CellsLe_0314'},
{txt:'GTEx Human Cells - Transformed Fibroblasts (Mar14) RPKM Log2',val:'GTEx_log2_CellsTr_0314'},
{txt:'GTEx Human Cerebellar Cortex (Mar14) RPKM Log2',val:'GTEx_log2_CerebC_0314'},
{txt:'GTEx Human Cerebellar Hemisphere (Mar14) RPKM Log2',val:'GTEx_log2_CerebH_0314'},
{txt:'GTEx Human Colon - Transverse (Mar14) RPKM Log2',val:'GTEx_log2_Colon_0314'},
{txt:'GTEx Human Coronary (Mar14) RPKM Log2',val:'GTEx_log2_Coron_0314'},
{txt:'GTEx Human Esophagus - Mucosa (Mar14) RPKM Log2',val:'GTEx_log2_EsophMuc_0314'},
{txt:'GTEx Human Esophagus - Muscularis (Mar14) RPKM Log2',val:'GTEx_log2_EsophMus_0314'},
{txt:'GTEx Human Fallopian Tube (Mar14) RPKM Log2',val:'GTEx_log2_Fallo_0314'},
{txt:'GTEx Human Frontal Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Front_0314'},
{txt:'GTEx Human Heart - Atrial Appendage (Mar14) RPKM Log2',val:'GTEx_log2_HeartAt_0314'},
{txt:'GTEx Human Heart - Left Ventricle (Mar14) RPKM Log2',val:'GTEx_log2_HeartLV_0314'},
{txt:'GTEx Human Hypothalamus (Mar14) RPKM Log2',val:'GTEx_log2_Hypot_0314'},
{txt:'GTEx Human Kidney (Mar14) RPKM Log2',val:'GTEx_log2_Kidne_0314'},
{txt:'GTEx Human Liver (Mar14) RPKM Log2',val:'GTEx_log2_Liver_0314'},
{txt:'GTEx Human Lung (Mar14) RPKM Log2',val:'GTEx_log2_Lung_0314'},
{txt:'GTEx Human Muscle (Mar14) RPKM Log2',val:'GTEx_log2_Muscle_0314'},
{txt:'GTEx Human Nerve - Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Nerve_0314'},
{txt:'GTEx Human Nucleus Accumbens (Mar14) RPKM Log2',val:'GTEx_log2_Nucle_0314'},
{txt:'GTEx Human Ovary (Mar14) RPKM Log2',val:'GTEx_log2_Ovary_0314'},
{txt:'GTEx Human Pancreas (Mar14) RPKM Log2',val:'GTEx_log2_Pancr_0314'},
{txt:'GTEx Human Pituitary (Mar14) RPKM Log2',val:'GTEx_log2_Pitui_0314'},
{txt:'GTEx Human Prostate (Mar14) RPKM Log2',val:'GTEx_log2_Prost_0314'},
{txt:'GTEx Human Putamen (Mar14) RPKM Log2',val:'GTEx_log2_Putam_0314'},
{txt:'GTEx Human Skin-Not Sun Exposed (Suprapubic) (Mar14) RPKM Log2',val:'GTEx_log2_SkinN_0314'},
{txt:'GTEx Human Skin-Sun Exposed (Lower leg) (Mar14) RPKM Log2',val:'GTEx_log2_SkinE_0314'},
{txt:'GTEx Human Spinal Cord (Mar14) RPKM Log2',val:'GTEx_log2_Spina_0314'},
{txt:'GTEx Human Stomach (Mar14) RPKM Log2',val:'GTEx_log2_Stoma_0314'},
{txt:'GTEx Human Subcutaneous (Mar14) RPKM Log2',val:'GTEx_log2_Subcu_0314'},
{txt:'GTEx Human Substantia Nigra (Mar14) RPKM Log2',val:'GTEx_log2_Subst_0314'},
{txt:'GTEx Human Testis (Mar14) RPKM Log2',val:'GTEx_log2_Testi_0314'},
{txt:'GTEx Human Thyroid (Mar14) RPKM Log2',val:'GTEx_log2_Thyro_0314'},
{txt:'GTEx Human Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Tibial_0314'},
{txt:'GTEx Human Uterus (Mar14) RPKM Log2',val:'GTEx_log2_Uterus_0314'},
{txt:'GTEx Human Vagina (Mar14) RPKM Log2',val:'GTEx_log2_Vagin_0314'},
{txt:'GTEx Human Visceral (Mar14) RPKM Log2',val:'GTEx_log2_Visce_0314'},
{txt:'GTEx Human Whole Blood (Mar14) RPKM Log2',val:'GTEx_log2_WholeB_0314'},
{txt:'GTEx Human Adrenal Gland (Apr14) RPKM',val:'GTEx_Adren_0414'},
{txt:'GTEx Human Amygdala (Mar14) RPKM Log2',val:'GTEx_log2_AMY_0314'},
{txt:'GTEx Human Amygdala (Mar14) RPKM',val:'GTEx_AMY_0314'},
{txt:'GTEx Human Anterior Cingulate Cortex (Apr14) RPKM',val:'GTEx_Anter_0414'},
{txt:'GTEx Human Aorta (Apr14) RPKM',val:'GTEx_Aorta_0414'},
{txt:'GTEx Human Blood, Cells - EBV-Transformed Lymphocytes (Apr14) RPKM',val:'GTEx_Blood_0414'},
{txt:'GTEx Human Breast - Mammary Tissue (Apr14) RPKM',val:'GTEx_Breas_0414'},
{txt:'GTEx Human Caudate (Apr14) RPKM',val:'GTEx_Cauda_0414'},
{txt:'GTEx Human Cells - EBV-Transformed Lymphocytes (Apr14) RPKM',val:'GTEx_CellsEBV_0414'},
{txt:'GTEx Human Cells - Leukemia Cell Line (CML) (Apr14) RPKM',val:'GTEx_CellsLe_0414'},
{txt:'GTEx Human Cells - Transformed Fibroblasts (Apr14) RPKM',val:'GTEx_CellsTr_0414'},
{txt:'GTEx Human Cerebellar Cortex (Apr14) RPKM',val:'GTEx_CerebC_0414'},
{txt:'GTEx Human Cerebellar Hemisphere (Apr14) RPKM',val:'GTEx_CerebH_0414'},
{txt:'GTEx Human Cerebellum (Mar14) RPKM',val:'GTEx_CER_0314'},
{txt:'GTEx Human Colon - Transverse (Apr14) RPKM',val:'GTEx_Colon_0414'},
{txt:'GTEx Human Coronary (Apr14) RPKM',val:'GTEx_Coron_0414'},
{txt:'GTEx Human Esophagus - Mucosa (Apr14) RPKM',val:'GTEx_EsophMuc_0414'},
{txt:'GTEx Human Esophagus - Muscularis (Apr14) RPKM',val:'GTEx_EsophMus_0414'},
{txt:'GTEx Human Fallopian Tube (Apr14) RPKM',val:'GTEx_Fallo_0414'},
{txt:'GTEx Human Frontal Cortex (Apr14) RPKM',val:'GTEx_Front_0414'},
{txt:'GTEx Human Heart - Atrial Appendage (Apr14) RPKM',val:'GTEx_HeartAt_0414'},
{txt:'GTEx Human Heart - Left Ventricle (Apr14) RPKM',val:'GTEx_HeartLV_0414'},
{txt:'GTEx Human Hippocampus (Mar14) RPKM',val:'GTEx_HIP_0314'},
{txt:'GTEx Human Hypothalamus (Apr14) RPKM',val:'GTEx_Hypot_0414'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Gene Level (Apr14) RMA',val:'UTHSC_GutGL_0414'},
{txt:'GTEx Human Kidney (Apr14) RPKM',val:'GTEx_Kidne_0414'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Exon Level (Apr14) RMA',val:'UTHSC_GutExL_0414'},
{txt:'GTEx Human Liver (Apr14) RPKM',val:'GTEx_Liver_0414'},
{txt:'GTEx Human Lung (Apr14) RPKM',val:'GTEx_Lung _0414'},
{txt:'GTEx Human Muscle (Apr14) RPKM',val:'GTEx_Muscl_0414'},
{txt:'GTEx Human Nerve - Tibial (Apr14) RPKM',val:'GTEx_Nerve_0414'},
{txt:'GTEx Human Nucleus Accumbens (Apr14) RPKM',val:'GTEx_Nucle_0414'},
{txt:'GTEx Human Ovary (Apr14) RPKM',val:'GTEx_Ovary_0414'},
{txt:'GTEx Human Pancreas (Apr14) RPKM',val:'GTEx_Pancr_0414'},
{txt:'GTEx Human Pituitary (Apr14) RPKM',val:'GTEx_Pitui_0414'},
{txt:'GTEx Human Prostate (Apr14) RPKM',val:'GTEx_Prost_0414'},
{txt:'GTEx Human Putamen (Apr14) RPKM',val:'GTEx_Putam_0414'},
{txt:'GTEx Human Skin-Not Sun Exposed (Suprapubic) (Apr14) RPKM',val:'GTEx_SkinN_0414'},
{txt:'GTEx Human Skin-Sun Exposed (Lower leg) (Apr14) RPKM',val:'GTEx_SkinE_0414'},
{txt:'GTEx Human Spinal Cord (Apr14) RPKM',val:'GTEx_Spina_0414'},
{txt:'GTEx Human Stomach (Apr14) RPKM',val:'GTEx_Stoma_0414'},
{txt:'GTEx Human Subcutaneous (Apr14) RPKM',val:'GTEx_Subcu_0414'},
{txt:'GTEx Human Substantia Nigra (Apr14) RPKM',val:'GTEx_Subst_0414'},
{txt:'GTEx Human Testis (Apr14) RPKM',val:'GTEx_Testi_0414'},
{txt:'GTEx Human Thyroid (Apr14) RPKM',val:'GTEx_Thyro_0414'},
{txt:'GTEx Human Tibial (Apr14) RPKM',val:'GTEx_Tibia_0414'},
{txt:'GTEx Human Uterus (Apr14) RPKM',val:'GTEx_Uteru_0414'},
{txt:'GTEx Human Vagina (Apr14) RPKM',val:'GTEx_Vagin_0414'},
{txt:'GTEx Human Visceral (Apr14) RPKM',val:'GTEx_Visce_0414'},
{txt:'GTEx Human Whole Blood (Apr14) RPKM',val:'GTEx_Whole_0414'},
{txt:'UTHSC BXD Hippocampus Ion Torrent microRNA (Feb14) RPKM **',val:'UTHSC_BXD_Hip_miRNASeq0214'},
{txt:'GSE15745 NIH Human Brain Temporal Cerebral ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_TC0510'},
{txt:'GSE15745 NIH Human Brain Pons ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Po0510'},
{txt:'GSE15745 NIH Human Brain Cerebellum ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Cer0510'},
{txt:'GSE15745 NIH Human Brain Prefrontal Cortex ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_PFC0510'},
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA **',val:'EPFL-LISPBXDHeCD0114'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA **',val:'EPFL-LISPBXDHeHFD0114'},
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA **',val:'EPFL-LISPBXDHeCDEx0114'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA **',val:'EPFL-LISPBXDHeHFDEx0114'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD+HFD (Jun14) **',val:'EPFL-LISP_MusPMetCDHFD1213'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites HFD (Jun14) **',val:'EPFL-LISP_MusPMetHFD1213'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD (Jun14) **',val:'EPFL-LISP_MusPMetCD1213'},
{txt:'GSE16780 UCLA Hybrid MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780_UCLA_ML0911'},
{txt:'SUH BXD Liver CCl4-treated Affy Mouse Gene 1.0 ST (Jun11) RMA',val:'SUH_Liv_RMA_0611'},
{txt:'SUH BXD Liver CCl4-treated Affy Mouse Gene 1.0 ST Exon Level (Jun11) RMA',val:'SUH_Liv_RMAEx_0611'},
{txt:'UCLA GSE27483 BXD Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXD_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXD Only Bone Femur ILM Mouse WG-6 v1.1 (Jan13) RSN',val:'UCLA_BXD-on_Femur_0113_RSN'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFMG1013'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFMEx1013'},
{txt:'UTHSC WGU88 Female Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFFG1013'},
{txt:'UTHSC WGU88 Female Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFFEx1013'},
{txt:'GSE11882 UCI Human Entorhinal Cortex Affy U133 Plus2 (Sep13) RMA',val:'UCI_EC_0913'},
{txt:'GSE11882 UCI Human Hippocampus Affy U133 Plus2 (Sep13) RMA',val:'UCI_HC_0913'},
{txt:'GSE11882 UCI Human Postcentral Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_PCG_0913'},
{txt:'GSE11882 UCI Human Superior Frontal Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_SG_0913'},
{txt:'UCLA CTB6/B6CTF2 Brain (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_2005'},
{txt:'UCLA CTB6/B6CTF2 Brain Males (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_MALE'},
{txt:'UCLA CTB6/B6CTF2 Brain Females (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_FEMALE'},
{txt:'GSE15222 Human Brain All Cases Myers (Apr09) RankInv',val:'GSE15222_F_RI_0409'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) RMA',val:'B1LI0809R'},
{txt:'GSE15222 Human Brain Normal Myers (Apr09) RankInv',val:'GSE15222_F_N_RI_0409'},
{txt:'GSE15222 Human Brain Alzheimer Myers (Apr09) RankInv',val:'GSE15222_F_A_RI_0409'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_1110'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Male',val:'INIA_Hyp_M_RMA_1110'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Female',val:'INIA_Hyp_F_RMA_1110'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080913',val:'INIA_Hyp_PCA_0813_v4'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080813',val:'INIA_Hyp_PCA_0813_v3'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080513',val:'INIA_Hyp_PCA_0813_v2'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080213',val:'INIA_Hyp_PCA_0813'},
{txt:'INIA Hypothalamus Exon Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_Ex-1110'},
{txt:'VCU BXD NAc EtOH M430 2.0 (Oct07) RMA **',val:'VCUEtOH_1007_R'},
{txt:'VCU BXD NAc EtOH vs Sal M430 2.0 (Oct07) Sscore **',val:'VCUSal_1007_R'},
{txt:'VCU BXD NAc CIE Air M430 2.0 (Jan13) RMA **',val:'VCU_NAc_Air_0113_R'},
{txt:'VCU BXD NAc CIE EtOH M430 2.0 (Jan13) RMA **',val:'VCU_NAc_Et_0113_R'},
{txt:'VCU BXD NAc EtOH vs CIE Air M430 2.0 (Jan13) Sscore **',val:'VCU_NAc_AvE_0113_Ss'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Gene Level (Dec09) RMA',val:'Striatum_Exon_1212'},
{txt:'HZI PR8M-Infected Lungs Females RNAseq (Oct14) RPKM Log2 **',val:'HZI_PR8M-F_1014'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Exon Level (Dec09) RMA',val:'Striatum_Exon_0209'},
{txt:'Super Series GSE23546 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GSE23546HLT0613'},
{txt:'UL/GSE23352 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA (Jun11) RMA',val:'luCA_GSE23352HLT0613'},
{txt:'UBC/GSE23529 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'UBC-GSE23529HLT0613'},
{txt:'GRNG/GSE23545 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GRNG-GSE23545HLT0613'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Gene Level **',val:'ScrBXDACC4G0513'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Exon Level **',val:'ScrBXDACC4GEx0513'},
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
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Both Sexes',val:'LV_G_0106_B'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Males',val:'LV_G_0106_M'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Females',val:'LV_G_0106_F'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Both Sexes **',val:'GenEx_BXD_liverEt_M5_0912'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Males **',val:'GenEx_BXD_liverEt_M5M_0912'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Females **',val:'GenEx_BXD_liverEt_M5F_0912'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Both Sexes **',val:'GenEx_BXD_liverEt_RMA_0211'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Males **',val:'GenEx_BXD_liverEt_RMA_M_0211'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Females **',val:'GenEx_BXD_liverEt_RMA_F_0211'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Both Sexes **',val:'GenEx_BXD_liverSal_RMA_0211'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Males **',val:'GenEx_BXD_liverSal_RMA_M_0211'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Females **',val:'GenEx_BXD_liverSal_RMA_F_0211'},
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
{txt:'UCLA GSE27483 AXB/BXA Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_AXB/BXA_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXH Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXH_Femur_0113_RSN'},
{txt:'UCLA GSE27483 MDP Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_MDP_Femur_0113_RSN'},
{txt:'VCU BXD PFC EtOH vs CIE Air M430 2.0 (Jan11) Sscore **',val:'VCU_PF_AvE_0111_Ss'},
{txt:'VCU BXD PFC CIE EtOH M430 2.0 (Jan11) RMA **',val:'VCU_PF_Et_0111_R'},
{txt:'VCU BXD PFC CIE Air M430 2.0 (Jan11) RMA **',val:'VCU_PF_Air_0111_R'},
{txt:'TSRI DRG Affy Mouse Genome 430 2.0 (Jan13) RMA MDP',val:'TSRI-DRG-AffyMOE430_0113-MDP'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleRMA_Ex1112'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleHFDRMAEx1112'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleCDRMAEx1112'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence Exon Level (Nov12) RPKM',val:'UTHSC_BXD_WB_RNASeqEx1112'},
{txt:'UTHSC B6D2RI Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA',val:'UTHSC_B6D2RI_H_0912'},
{txt:'St Jude BXD Popliteal Lymph Node Affy HT MG-430 PM (Sep12) RMA **',val:'STJ_PLN_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA **',val:'PSU-B6D2F2_0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Females **',val:'PSU-B6D2F2_F0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males **',val:'PSU-B6D2F2_M0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males Aged 200 **',val:'PSU-B6D2F2_M2000812'},
{txt:'Eye M430v2 (Sep08) RMA',val:'Eye_M2_0908_R'},
{txt:'UCLA BHHBF2 Adipose (2005) mlratio',val:'UCLA_BHHBF2_ADIPOSE_2005'},
{txt:'UCLA BHHBF2 Brain (2005) mlratio',val:'UCLA_BHHBF2_BRAIN_2005'},
{txt:'UCLA BHHBF2 Liver (2005) mlratio',val:'UCLA_BHHBF2_LIVER_2005'},
{txt:'UCLA BHHBF2 Muscle (2005) mlratio',val:'UCLA_BHHBF2_MUSCLE_2005'},
{txt:'Eye M430v2 No Mutant/Mutant (Aug12) RMA',val:'gn10'},
{txt:'GSE16780 UCLA Mouse AXB/BXA Liver Affy HT M430A (Sep11) RMA',val:'GSE16780AB_UCLA_ML0911'},
{txt:'GSE16780 UCLA Mouse MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780MDP_UCLA_ML0911'},
{txt:'GSE16780 UCLA Mouse BXH Liver Affy HT M430A (Sep11) RMA',val:'GSE16780BXH_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Adipose Male Only',val:'UCLA_BHHBF2_ADIPOSE_MALE'},
{txt:'UCLA BHHBF2 Brain Male Only',val:'UCLA_BHHBF2_BRAIN_MALE'},
{txt:'UCLA BHHBF2 Liver Male Only',val:'UCLA_BHHBF2_LIVER_MALE'},
{txt:'UCLA BHHBF2 Muscle Male Only',val:'UCLA_BHHBF2_MUSCLE_MALE'},
{txt:'UCLA BHHBF2 Adipose Female Only',val:'UCLA_BHHBF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHHBF2 Brain Female Only',val:'UCLA_BHHBF2_BRAIN_FEMALE'},
{txt:'UCLA BHHBF2 Liver Female Only',val:'UCLA_BHHBF2_LIVER_FEMALE'},
{txt:'UCLA BHHBF2 Muscle Female Only',val:'UCLA_BHHBF2_MUSCLE_FEMALE'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_Adrenal_RMA_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_PG_RMA_0612'},
{txt:'HZI PR8M-Infected Lungs Agilent4x44 (Apr12) Quantile Females **',val:'HZI_PR8M_Q_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Adrenal_RMA_F_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Pituitary_RMA_F_0612'},
{txt:'HZI Lung Time Course Flu PR8M (Mar13) Schughart **',val:'HZI_LTCF_0313'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Adrenal_RMA_M_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Pituitary_RMA_M_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_Adrenal_RMA_Ex_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_PG_RMA_Ex_0612'},
{txt:'B6D2 ONC Retina (April 2012) RankInv **',val:'B6D2ONCILM_0412'},
{txt:'INIA Macaca fasicularis Nucleus Accumbens (Jan10) RMA **',val:'INIA_MacFas_Ac_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Adipose (2005) mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_2005'},
{txt:'UCLA CTB6/B6CTF2 Liver (2005) mlratio',val:'UCLA_CTB6B6CTF2_LIVER_2005'},
{txt:'UCLA CTB6/B6CTF2 Muscle (2005) mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_2005'},
{txt:'INIA Macaca fasicularis Hippocampus (Jan10) RMA **',val:'INIA_MacFas_Hc_RMA_0110'},
{txt:'UCLA CTB6B6CTF2 Adipose Female mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Liver Female mlratio',val:'UCLA_CTB6B6CTF2_LIVER_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Female mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_FEMALE'},
{txt:'INIA Macaca fasicularis Amygdala (Jan10) RMA **',val:'INIA_MacFas_AMG_RMA_0110'},
{txt:'VU BXD Midbrain Agilent SurePrint G3 Mouse GE (May12) Quantile',val:'VUBXDMouseMidBrainQ0512'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1111'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1111'},
{txt:'G2 HEI ONC Retina Illumina V6.2 (Sep11) RankInv **',val:'G2HEIONCRetILM6_0911'},
{txt:'HEI ONC vs Control Retina Illumina V6.2 (Sep11) RankInv **',val:'HEIONCvsCRetILM6_0911'},
{txt:'JAX Liver Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_0711'},
{txt:'JAX Liver HF Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_HF_0711'},
{txt:'JAX Liver 6C Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_6C_0711'},
{txt:'Harrill-Rusyn MDP Liver Acetaminophen Tox Study (G4121A, 2009)',val:'JAX_liver_agil_MDP-0113'},
{txt:'Human Primary Auditory (A1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_A1C_0711'},
{txt:'GN330 Human Amygdala Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_AMY_0711'},
{txt:'Human Cerebellar Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_CBC_0711'},
{txt:'Human Dorsolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_DFC_0711'},
{txt:'Human Hippocampus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_HIP_0711'},
{txt:'Human Posterior Inferior Parietal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_IPC_0711'},
{txt:'Human Inferior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_ITC_0711'},
{txt:'Human Primary Motor (M1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_M1C_0711'},
{txt:'Human Mediodorsal Nucleus of Thalamus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MD_0711'},
{txt:'Human Medial Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MFC_0711'},
{txt:'Human Orbital Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_OFC_0711'},
{txt:'Human Primary Somatosensory (S1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_S1C_0711'},
{txt:'Human Posterior Superior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STC_0711'},
{txt:'Human Striatum Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STR_0711'},
{txt:'Human Primary Visual Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_V1C_0711'},
{txt:'Human Ventrolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_VFC_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLPFC_0611'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent Normal (Jun11) mlratio',val:'HBTRC-MLPFC_N_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLVC_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent Normal (Jun11) mlratio',val:'HBTRC-MLVC_N_0611'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent AD (Jun11) mlratio',val:'HBTRC-MLPFC_AD_0611'},
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
{txt:'GSE9588 Human Liver Normal (Mar11) Females',val:'HLCF_0311'},
{txt:'HZI Thelp M430v2 (Feb11) RMA',val:'RTHC_0211_R'},
{txt:'GSE5281 Human Brain Normal Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_N_0709'},
{txt:'GSE5281 Human Brain Alzheimer Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_Alzh_0709'},
{txt:'OHSU HS-CC Striatum ILM6v1 (Feb11) RankInv',val:'OHSU_HS-CC_ILMStr_0211'},
{txt:'NCSU Drosophila Whole Body (Jan11) RMA',val:'NCSU_DrosWB_LC_RMA_0111'},
{txt:'HQF BXD Striatum ILM6.1 (Dec10v2) RankInv',val:'UTHSC_Striatum_RankInv_1210'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10v2) RankInv',val:'HQFNeoc_1210v2_RankInv'},
{txt:'HQF BXD Striatum ILM6.1 (Dec10) RankInv',val:'UTHSC_Str_RankInv_1210'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10) RankInv',val:'HQFNeoc_1210_RankInv'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Males',val:'UTHSC_SPL_RMA_1210M'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Females',val:'UTHSC_SPL_RMA_1210F'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Exon Level',val:'UTHSC_SPL_RMAEx_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Oct10) RMA',val:'UTHSC_SPL_RMA_1010'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA MDP',val:'HC_M2_0606_MDP'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA MDP',val:'UMUTAffyExon_0209_RMA_MDP'},
{txt:'UTK Spleen ILM6.1 (Jan10) VST',val:'UTK_BXDSpl_VST_0110'},
{txt:'UFL MDP Hippocampus Antidepressant Affy Mouse 430 2.0 (Aug14) RMA **',val:'UFL-MDP-Hipp0814'},
{txt:'OX UK HS ILM6v1.1 Hippocampus (May 2010) RankInv',val:'OXUKHS_ILMHipp_RI0510'},
{txt:'OX UK HS ILM6v1.1 Liver (May 2010) RankInv',val:'OXUKHS_ILMLiver_RI0510'},
{txt:'OX UK HS ILM6v1.1 Lung (May 2010) RankInv',val:'OXUKHS_ILMLung_RI0510'},
{txt:'INIA Macaca fasicularis Brain (Jan10) RMA **',val:'INIA_MacFas_brain_RMA_0110'},
{txt:'INIA Macaca fasicularis Prefrontal Cortex (Jan10) RMA **',val:'INIA_MacFas_Pf_RMA_0110'},
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
{txt:'Mouse kidney M430v2 Female (Aug06) RMA',val:'MA_M2F_0706_R'},
{txt:'Mouse kidney M430v2 Male (Aug06) RMA',val:'MA_M2M_0706_R'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) MAS5',val:'B1LI0809M5'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) MAS5',val:'B1MI0809M5'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) RMA',val:'B1MI0809R'},
{txt:'GSE5281 Human Brain Full Liang (Jul09) RMA',val:'GSE5281_F_RMA0709'},
{txt:'GSE5281 Human Brain Best 102 Liang (Jul09) RMA',val:'GSE5281_RMA0709'},
{txt:'UT Hippocampus Affy RaEx 1.0 Exon (Jul09) RMA',val:'UT_HippRatEx_RMA_0709'},
{txt:'VCU BXD VTA Sal M430 2.0 (Jun09) RMA',val:'VCUSal_0609_R'},
{txt:'VCU BXD VTA EtOH M430 2.0 (Jun09) RMA',val:'VCUEtOH_0609_R'},
{txt:'VCU BXD VTA Et vs Sal M430 2.0 (Jun09) RMA',val:'VCUEtvsSal_0609_R'},
{txt:'IoP Affy MOE 430v2 Spleen (May09) RMA',val:'IoP_SPL_RMA_0509'},
{txt:'NCI Mammary M430v2 (Apr09) RMA',val:'NCI_Mam_Tum_RMA_0409'},
{txt:'NCI Mammary LMT miRNA v2 (Apr09) RMA',val:'NCI_Agil_Mam_Tum_RMA_0409'},
{txt:'MDC/CAS/UCL Liver 230v2 (Dec08) RMA',val:'HXB_Liver_1208'},
{txt:'MDC/CAS/UCL Heart 230_V2 (Dec08) RMA',val:'HXB_Heart_1208'},
{txt:'MDC/CAS/UCL Adrenal 230A (Dec08) RMA',val:'HXB_Adrenal_1208'},
{txt:'UWA Illumina Spleen (Nov08) RSN **',val:'Illum_BXD_Spl_1108'},
{txt:'UWA Illumina Thymus (Nov08) RSN **',val:'Illum_BXD_Thy_1108'},
{txt:'UWA Illumina PBL (Nov08) RSN **',val:'Illum_BXD_PBL_1108'},
{txt:'Monks CEPH B-cells Agilent (Dec04) Log10Ratio',val:'Human_1008'},
{txt:'Eye AXBXA Illumina V6.2(Oct08) RankInv Beta',val:'Eye_AXBXA_1008_RankInv'},
{txt:'Hippocampus Illumina RSS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSS_1008'},
{txt:'Hippocampus Illumina RSE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSE_1008'},
{txt:'Hippocampus Illumina NOS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOS_1008'},
{txt:'Hippocampus Illumina NOE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOE_1008'},
{txt:'Hippocampus Illumina NON (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NON_1008'},
{txt:'Eye M430v2 Mutant Gpnmb (Sep08) RMA',val:'Eye_M2_0908_R_NB'},
{txt:'Eye M430v2 WT Gpnmb (Sep08) RMA',val:'Eye_M2_0908_R_ND'},
{txt:'Eye M430v2 Mutant Tyrp1 (Sep08) RMA',val:'Eye_M2_0908_R_MT'},
{txt:'Eye M430v2 WT Tyrp1 (Sep08) RMA',val:'Eye_M2_0908_R_WT'},
{txt:'Eye M430v2 WT WT (Sep08) RMA',val:'Eye_M2_0908_WTWT'},
{txt:'UCLA BXD and BXH Cartilage v2',val:'UCLA_BXDBXH_CARTILAGE_V2'},
{txt:'UCLA BXH and BXD Cartilage v2',val:'UCLA_BXHBXD_CARTILAGE_V2'},
{txt:'UCLA BXD and BXH Cartilage',val:'UCLA_BXDBXH_CARTILAGE'},
{txt:'UCLA BXH and BXD Cartilage',val:'UCLA_BXHBXD_CARTILAGE'},
{txt:'UCLA CTB6B6CTF2 Adipose Male mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_MALE'},
{txt:'UCLA CTB6B6CTF2 Liver Male mlratio',val:'UCLA_CTB6B6CTF2_LIVER_MALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Male mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Adipose Male mlratio',val:'UCLA_BHF2_ADIPOSE_MALE'},
{txt:'UCLA BHF2 Adipose Female mlratio',val:'UCLA_BHF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHF2 Brain Male mlratio',val:'UCLA_BHF2_BRAIN_MALE'},
{txt:'UCLA BHF2 Brain Female mlratio',val:'UCLA_BHF2_BRAIN_FEMALE'},
{txt:'UCLA BHF2 Liver Male mlratio',val:'UCLA_BHF2_LIVER_MALE'},
{txt:'UCLA BHF2 Liver Female mlratio',val:'UCLA_BHF2_LIVER_FEMALE'},
{txt:'UCLA BHF2 Muscle Male mlratio **',val:'UCLA_BHF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Muscle Female mlratio **',val:'UCLA_BHF2_MUSCLE_FEMALE'},
{txt:'UCLA BXD Cartilage',val:'UCLA_BXD_CARTILAGE'},
{txt:'UCLA BXH Cartilage',val:'UCLA_BXH_CARTILAGE'},
{txt:'UCLA BHF2 Liver (June05) mlratio',val:'UCLA_BHF2_LIVER_0605'},
{txt:'UCLA BHF2 Brain (June05) mlratio',val:'UCLA_BHF2_BRAIN_0605'},
{txt:'UCLA BHF2 Muscle (June05) mlratio **',val:'UCLA_BHF2_MUSCLE_0605'},
{txt:'UCLA BHF2 Adipose (June05) mlratio',val:'UCLA_BHF2_ADIPOSE_0605'},
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
{txt:'VCU LXS PFC Sal M430A 2.0 (Aug06) RMA',val:'VCUSal_0806_R'},
{txt:'VCU LXS PFC EtOH M430A 2.0 (Aug06) RMA **',val:'VCUEtOH_0806_R'},
{txt:'VCU LXS PFC Et vs Sal M430A 2.0 (Aug06) Sscore **',val:'VCUEt_vs_Sal_0806_R'},
{txt:'Barley1 Leaf MAS 5.0 SCRI (Dec06)',val:'B30_K_1206_M'},
{txt:'Barley1 Embryo gcRMA SCRI (Dec06)',val:'B139_K_1206_R'},
{txt:'Barley1 Embryo MAS 5.0 SCRI (Dec06)',val:'B139_K_1206_M'},
{txt:'Barley1 Leaf gcRMA SCRI (Dec06)',val:'B30_K_1206_R'},
{txt:'Barley1 Leaf gcRMAn SCRI (Dec06)',val:'B30_K_1206_Rn'},
{txt:'HZI Treg M430v2 (Feb11) RMA',val:'RTC_1106_R'},
{txt:'UCHSC BXD Whole Brain M430 2.0 (Nov06) RMA',val:'BR_M2_1106_R'},
{txt:'UIOWA Eye mRNA RAE230v2 (Sep06) RMA',val:'UIOWA_Eye_RMA_0906'},
{txt:'Mouse kidney M430v2 Sex Balanced (Aug06) RMA',val:'MA_M2_0806_R'},
{txt:'Mouse Kidney M430v2 Sex Balanced (Aug06) PDNN',val:'MA_M2_0806_P'},
{txt:'Mouse Kidney M430v2 (Jul06) RMA',val:'MA_M2_0706_R'},
{txt:'Mouse Kidney M430v2 (Jul06) PDNN',val:'MA_M2_0706_P'},
{txt:'Barley1 Embryo0 gcRMA SCRI (Apr06)',val:'B150_K_0406_R'},
{txt:'INIA Brain mRNA M430 (Jun06) RMA',val:'IBR_M_0606_R'},
{txt:'INIA Brain mRNA M430 (Jan06) PDNN',val:'IBR_M_0106_P'},
{txt:'INIA Brain mRNA M430 (Jan06) RMA',val:'IBR_M_0106_R'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) PDNN',val:'HC_M2CB_1205_P'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) RMA',val:'HC_M2CB_1205_R'},
{txt:'UTHSC Brain mRNA U74Av2 (Nov05) PDNN',val:'BR_U_1105_P'},
{txt:'UTHSC Hippocampus Illumina v6.1 NON (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NON_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOS (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NOS_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOE (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NOE_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSS (Nov12) RankInv',val:'UT_ILM_BXD_hipp_RSS_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSE (Nov12) RankInv',val:'UT_ILM_BXD_hipp_RSE_1112'},
{txt:'UTHSC Hippocampus Illumina v6.1 NON (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NON_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOS (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NOS_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOE (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NOE_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSS (Sep09) RankInv',val:'UT_ILM_BXD_hipp_RSS_0909'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSE (Sep09) RankInv',val:'UT_ILM_BXD_hipp_RSE_0909'},
{txt:'UTHSC BXD Aged Hippocampus Affy MoGene1.0 ST (May15) RMA Gene Level **',val:'UTHSC_BXD_AgeHipp0515'},
{txt:'UTHSC BXD Aged Hippocampus rev3 Affy Mouse Gene 1.0 ST (Sep12) RMA **',val:'UTHSC_BXD_HArev3_0912'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA Exon Level **',val:'UTHSC_BXD_H_0912'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) MAS5',val:'SA_M2_0905_M'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) RMA',val:'SA_M2_0905_R'},
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
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1110'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1110'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) MAS5',val:'LVF2_M_0704_M'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) RMA',val:'LVF2_M_0704_R'},
{txt:'NCI Mammary mRNA M430 (July04) MAS5',val:'MA_M_0704_M'},
{txt:'NCI Mammary mRNA M430 (July04) RMA',val:'MA_M_0704_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) PDNN',val:'BRF2_M_0304_P'},
{txt:'GNF Stem Cells U74Av2 (Mar04) RMA',val:'HC_U_0304_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) MAS5',val:'BRF2_M_0304_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) RMA',val:'BRF2_M_0304_R'},
{txt:'INIA Brain mRNA M430 (Feb04) PDNN',val:'CB_M_0204_P'},
{txt:'Howell et al. 2011, DBA/2J Glaucoma Optic Nerve Head M430 2.0 (Dec12) RMA',val:'DBA2J-ONH-1212'},
{txt:'Howell et al. 2011, DBA/2J Glaucoma Retina  M430 2.0 (Sep11) RMA',val:'BXD_GLA_0911'},
{txt:'HCP Published Phenotypes',val:'HCPPublish'},
{txt:'HSB Published Phenotypes',val:'HSBPublish'},
{txt:'Aging-Brain-UCI Published Phenotypes',val:'Aging-Brain-UCIPublish'},
{txt:'AD-cases-controls-Myers Published Phenotypes',val:'AD-cases-controls-MyersPublish'},
{txt:'AD-cases-controls-Myers Genotypes',val:'AD-cases-controls-MyersGeno'},
{txt:'CANDLE Published Phenotypes',val:'CANDLEPublish'},
{txt:'HLC Published Phenotypes',val:'HLCPublish'},
{txt:'TIGEM-Retina-RNA-Seq Published Phenotypes',val:'TIGEM-Retina-RNA-SeqPublish'},
{txt:'AKXD Genotypes',val:'AKXDGeno'},
{txt:'AXBXA Published Phenotypes',val:'AXBXAPublish'},
{txt:'AXBXA Genotypes',val:'AXBXAGeno'},
{txt:'B6BTBRF2 Published Phenotypes',val:'B6BTBRF2Publish'},
{txt:'B6BTBRF2 Genotypes',val:'B6BTBRF2Geno'},
{txt:'Linsenbardt-Boehm Published Phenotypes',val:'Linsenbardt-BoehmPublish'},
{txt:'Linsenbardt-Boehm Genotypes',val:'Linsenbardt-BoehmGeno'},
{txt:'B6D2F2 Genotypes',val:'B6D2F2Geno'},
{txt:'B6D2F2-PSU Published Phenotypes',val:'B6D2F2-PSUPublish'},
{txt:'B6D2F2-PSU Genotypes',val:'B6D2F2-PSUGeno'},
{txt:'BDF2-1999 Genotypes',val:'BDF2-1999Geno'},
{txt:'BDF2-2005 Genotypes',val:'BDF2-2005Geno'},
{txt:'BHHBF2 Genotypes',val:'BHHBF2Geno'},
{txt:'BHF2 Published Phenotypes',val:'BHF2Publish'},
{txt:'BHF2 Genotypes',val:'BHF2Geno'},
{txt:'BXD Published Phenotypes',val:'BXDPublish'},
{txt:'BXD Genotypes',val:'BXDGeno'},
{txt:'B6D2RI Published Phenotypes',val:'B6D2RIPublish'},
{txt:'BXD-Bone Published Phenotypes',val:'BXD-BonePublish'},
{txt:'BXH Published Phenotypes',val:'BXHPublish'},
{txt:'BXH Genotypes',val:'BXHGeno'},
{txt:'CTB6F2 Published Phenotypes',val:'CTB6F2Publish'},
{txt:'CTB6F2 Genotypes',val:'CTB6F2Geno'},
{txt:'CFW Published Phenotypes',val:'CFWPublish'},
{txt:'CIE-INIA Published Phenotypes',val:'CIE-INIAPublish'},
{txt:'CMS Published Phenotypes',val:'CMSPublish'},
{txt:'CXB Published Phenotypes',val:'CXBPublish'},
{txt:'CXB Genotypes',val:'CXBGeno'},
{txt:'B6D2 Published Phenotypes',val:'B6D2Publish'},
{txt:'HS Published Phenotypes',val:'HSPublish'},
{txt:'LXS Published Phenotypes',val:'LXSPublish'},
{txt:'LXS Genotypes',val:'LXSGeno'},
{txt:'Mouse Phenome Database',val:'MDPPublish'},
{txt:'MDP Genotypes',val:'MDPGeno'},
{txt:'NZBXFVB-N2 Published Phenotypes',val:'NZBXFVB-N2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Published Phenotypes',val:'C57BL-6JxC57BL-6NJF2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Genotypes',val:'C57BL-6JxC57BL-6NJF2Geno'},
{txt:'SOTNOT-OHSU Genotypes',val:'SOTNOT-OHSUGeno'},
{txt:'HXBBXH Published Phenotypes',val:'HXBBXHPublish'},
{txt:'HXBBXH Genotypes',val:'HXBBXHGeno'},
{txt:'HSNIH-Palmer Published Phenotypes',val:'HSNIH-PalmerPublish'},
{txt:'HSNIH-RGSMC Published Phenotypes',val:'HSNIH-RGSMCPublish'},
{txt:'BayXSha Published Phenotypes',val:'BayXShaPublish'},
{txt:'BayXSha Genotypes',val:'BayXShaGeno'},
{txt:'ColXBur Published Phenotypes',val:'ColXBurPublish'},
{txt:'ColXBur Genotypes',val:'ColXBurGeno'},
{txt:'ColXCvi Published Phenotypes',val:'ColXCviPublish'},
{txt:'ColXCvi Genotypes',val:'ColXCviGeno'},
{txt:'SXM Published Phenotypes',val:'SXMPublish'},
{txt:'SXM Genotypes',val:'SXMGeno'},
{txt:'Poplar Published Phenotypes',val:'PoplarPublish'},
{txt:'J12XJ58F11 Published Phenotypes',val:'J12XJ58F11Publish'},
{txt:'J12XJ58F11 Genotypes',val:'J12XJ58F11Geno'},
{txt:'J12XJ58F2 Published Phenotypes',val:'J12XJ58F2Publish'},
{txt:'LXP Published Phenotypes',val:'LXPPublish'},
{txt:'All Phenotypes',val:'_allPublish'}];

var lArr = [
 null,
[1,45,3,78],
[1,45,4,79],
[1,45,5,80],
[1,45,6,85],
[1,45,7,86],
[1,45,8,81],
[1,45,9,84],
[1,45,12,100],
[1,45,14,98],
[1,45,16,87],
[1,45,17,99],
[1,45,19,101],
[1,45,20,90],
[1,45,21,88],
[1,45,22,89],
[1,45,23,102],
[1,45,24,103],
[1,45,25,104],
[1,45,26,82],
[1,45,31,105],
[1,45,32,106],
[1,45,33,107],
[1,45,35,108],
[1,45,37,91],
[1,45,39,109],
[1,45,40,110],
[1,45,45,92],
[1,45,46,93],
[1,45,48,111],
[1,45,53,112],
[1,45,55,113],
[1,45,63,114],
[1,45,65,115],
[1,45,68,94],
[1,45,70,116],
[1,45,71,117],
[1,45,73,118],
[1,45,84,119],
[1,45,85,95],
[1,45,88,120],
[1,45,89,121],
[1,45,90,122],
[1,45,91,123],
[1,45,92,96],
[1,45,93,124],
[1,45,94,125],
[1,45,96,97],
[1,45,101,126],
[1,45,103,127],
[1,45,104,83],
[1,45,105,128],
[1,45,106,129],
[1,45,109,130],
[1,46,3,187],
[1,46,3,237],
[1,46,4,194],
[1,46,4,244],
[1,46,5,152],
[1,46,5,196],
[1,46,6,197],
[1,46,6,198],
[1,46,7,153],
[1,46,7,199],
[1,46,8,154],
[1,46,8,200],
[1,46,10,155],
[1,46,10,201],
[1,46,14,156],
[1,46,14,202],
[1,46,16,157],
[1,46,16,203],
[1,46,17,158],
[1,46,17,204],
[1,46,18,159],
[1,46,18,205],
[1,46,19,160],
[1,46,19,206],
[1,46,20,161],
[1,46,20,207],
[1,46,21,162],
[1,46,21,208],
[1,46,22,150],
[1,46,22,209],
[1,46,25,163],
[1,46,25,210],
[1,46,26,164],
[1,46,26,211],
[1,46,32,165],
[1,46,32,212],
[1,46,33,166],
[1,46,33,213],
[1,46,35,167],
[1,46,35,214],
[1,46,37,168],
[1,46,37,215],
[1,46,39,169],
[1,46,39,216],
[1,46,40,170],
[1,46,40,217],
[1,46,45,151],
[1,46,45,218],
[1,46,46,171],
[1,46,46,219],
[1,46,48,172],
[1,46,48,221],
[1,46,53,173],
[1,46,53,223],
[1,46,55,174],
[1,46,55,224],
[1,46,63,175],
[1,46,63,225],
[1,46,65,176],
[1,46,65,226],
[1,46,68,177],
[1,46,68,227],
[1,46,70,178],
[1,46,70,228],
[1,46,71,179],
[1,46,71,229],
[1,46,73,180],
[1,46,73,230],
[1,46,84,181],
[1,46,84,231],
[1,46,85,182],
[1,46,85,232],
[1,46,89,183],
[1,46,89,233],
[1,46,90,184],
[1,46,90,234],
[1,46,92,185],
[1,46,92,235],
[1,46,94,186],
[1,46,94,236],
[1,46,96,188],
[1,46,96,238],
[1,46,101,189],
[1,46,101,239],
[1,46,103,190],
[1,46,103,240],
[1,46,104,191],
[1,46,104,241],
[1,46,105,192],
[1,46,105,242],
[1,46,106,193],
[1,46,106,243],
[1,46,109,195],
[1,46,109,245],
[1,47,111,603],
[1,48,22,249],
[1,48,74,248],
[1,48,79,250],
[1,48,100,247],
[1,49,111,604],
[1,49,6,408],
[1,49,20,409],
[1,49,28,410],
[1,49,45,411],
[1,49,47,413],
[1,49,58,416],
[1,49,59,415],
[1,49,69,417],
[1,49,77,412],
[1,49,78,419],
[1,49,80,407],
[1,49,81,414],
[1,49,82,418],
[1,49,83,421],
[1,49,95,420],
[1,49,108,422],
[1,50,111,605],
[1,50,30,267],
[1,50,45,268],
[1,50,76,269],
[1,50,97,270],
[1,51,22,300],
[1,51,22,301],
[1,51,22,302],
[1,51,22,303],
[1,51,79,423],
[1,51,79,424],
[1,51,79,427],
[1,51,79,429],
[1,51,83,425],
[1,51,83,426],
[1,51,83,428],
[1,51,83,430],
[1,52,111,606],
[1,52,112,607],
[1,52,13,274],
[1,52,13,276],
[1,52,13,277],
[1,53,13,440],
[1,53,13,441],
[1,53,13,477],
[1,53,13,478],
[1,54,111,608],
[1,54,60,335],
[1,54,60,336],
[1,54,67,334],
[1,55,111,609],
[1,55,53,436],
[1,55,53,437],
[1,55,53,438],
[1,56,55,294],
[1,56,55,295],
[1,56,55,296],
[1,56,55,297],
[1,57,56,471],
[1,57,56,492],
[1,58,111,610],
[1,58,87,17],
[2,32,6,397],
[2,32,13,459],
[2,32,45,393],
[2,32,68,389],
[2,32,79,460],
[3,1,112,611],
[3,1,57,485],
[3,1,57,594],
[3,1,57,595],
[3,2,111,612],
[3,2,112,613],
[3,2,11,344],
[3,2,34,493],
[3,2,41,337],
[3,2,53,367],
[3,3,111,614],
[3,3,112,615],
[3,3,53,592],
[3,3,53,593],
[3,4,111,616],
[3,4,112,617],
[3,5,112,618],
[3,5,13,578],
[3,5,13,579],
[3,5,13,580],
[3,5,13,596],
[3,5,13,598],
[3,5,13,599],
[3,6,111,619],
[3,6,112,620],
[3,6,63,357],
[3,6,63,358],
[3,6,63,359],
[3,6,63,360],
[3,8,112,621],
[3,8,53,525],
[3,9,112,622],
[3,9,95,571],
[3,9,95,572],
[3,9,95,573],
[3,10,112,623],
[3,10,1,362],
[3,10,1,370],
[3,10,1,374],
[3,10,13,363],
[3,10,13,371],
[3,10,13,375],
[3,10,53,364],
[3,10,53,372],
[3,10,53,376],
[3,10,63,365],
[3,10,63,373],
[3,10,63,377],
[3,11,111,624],
[3,11,112,625],
[3,11,1,511],
[3,11,1,512],
[3,11,1,524],
[3,11,13,513],
[3,11,13,514],
[3,11,13,522],
[3,11,53,515],
[3,11,53,516],
[3,11,53,521],
[3,11,63,517],
[3,11,63,518],
[3,11,63,523],
[3,12,111,626],
[3,12,112,627],
[3,12,1,47],
[3,12,1,49],
[3,12,1,52],
[3,12,1,53],
[3,12,1,54],
[3,12,2,20],
[3,12,2,21],
[3,12,5,378],
[3,12,5,381],
[3,12,5,384],
[3,12,5,386],
[3,12,6,431],
[3,12,6,432],
[3,12,6,433],
[3,12,6,434],
[3,12,6,435],
[3,12,11,261],
[3,12,11,262],
[3,12,11,263],
[3,12,11,264],
[3,12,11,265],
[3,12,11,266],
[3,12,13,148],
[3,12,13,149],
[3,12,13,354],
[3,12,13,545],
[3,12,13,552],
[3,12,13,553],
[3,12,13,554],
[3,12,13,557],
[3,12,13,574],
[3,12,13,575],
[3,12,13,576],
[3,12,13,600],
[3,12,15,504],
[3,12,15,506],
[3,12,15,519],
[3,12,22,304],
[3,12,22,305],
[3,12,22,306],
[3,12,22,307],
[3,12,22,308],
[3,12,22,309],
[3,12,22,310],
[3,12,22,311],
[3,12,22,312],
[3,12,22,313],
[3,12,22,314],
[3,12,22,315],
[3,12,22,316],
[3,12,22,317],
[3,12,22,318],
[3,12,22,319],
[3,12,22,320],
[3,12,22,321],
[3,12,22,338],
[3,12,22,339],
[3,12,22,340],
[3,12,22,341],
[3,12,22,342],
[3,12,22,343],
[3,12,34,361],
[3,12,34,366],
[3,12,34,499],
[3,12,34,500],
[3,12,34,501],
[3,12,34,502],
[3,12,34,503],
[3,12,34,601],
[3,12,34,602],
[3,12,36,67],
[3,12,36,68],
[3,12,36,69],
[3,12,38,220],
[3,12,38,222],
[3,12,41,251],
[3,12,41,252],
[3,12,41,253],
[3,12,41,254],
[3,12,42,463],
[3,12,42,464],
[3,12,42,465],
[3,12,42,466],
[3,12,42,467],
[3,12,42,468],
[3,12,42,469],
[3,12,42,470],
[3,12,42,597],
[3,12,43,140],
[3,12,44,246],
[3,12,45,46],
[3,12,45,48],
[3,12,45,50],
[3,12,45,51],
[3,12,45,74],
[3,12,45,75],
[3,12,45,76],
[3,12,45,77],
[3,12,45,558],
[3,12,45,559],
[3,12,45,560],
[3,12,45,561],
[3,12,45,562],
[3,12,45,563],
[3,12,45,564],
[3,12,45,565],
[3,12,45,566],
[3,12,45,567],
[3,12,45,568],
[3,12,45,569],
[3,12,45,570],
[3,12,46,278],
[3,12,46,279],
[3,12,46,280],
[3,12,46,281],
[3,12,46,282],
[3,12,46,283],
[3,12,46,284],
[3,12,46,285],
[3,12,48,472],
[3,12,48,473],
[3,12,48,547],
[3,12,48,548],
[3,12,48,549],
[3,12,48,550],
[3,12,51,491],
[3,12,52,61],
[3,12,52,62],
[3,12,52,63],
[3,12,52,64],
[3,12,52,65],
[3,12,53,7],
[3,12,53,9],
[3,12,53,11],
[3,12,53,13],
[3,12,53,142],
[3,12,53,144],
[3,12,53,258],
[3,12,53,259],
[3,12,53,260],
[3,12,53,322],
[3,12,53,323],
[3,12,53,324],
[3,12,53,325],
[3,12,53,326],
[3,12,53,327],
[3,12,53,328],
[3,12,53,329],
[3,12,53,330],
[3,12,53,331],
[3,12,53,332],
[3,12,53,333],
[3,12,54,72],
[3,12,54,73],
[3,12,54,133],
[3,12,54,134],
[3,12,54,135],
[3,12,54,138],
[3,12,54,139],
[3,12,55,141],
[3,12,55,143],
[3,12,55,145],
[3,12,55,292],
[3,12,55,380],
[3,12,55,383],
[3,12,61,398],
[3,12,62,255],
[3,12,62,256],
[3,12,62,257],
[3,12,63,8],
[3,12,63,10],
[3,12,63,12],
[3,12,63,351],
[3,12,63,352],
[3,12,63,353],
[3,12,64,399],
[3,12,64,400],
[3,12,64,445],
[3,12,64,447],
[3,12,64,526],
[3,12,64,590],
[3,12,64,591],
[3,12,66,146],
[3,12,66,147],
[3,12,68,29],
[3,12,68,33],
[3,12,68,36],
[3,12,68,39],
[3,12,68,42],
[3,12,68,286],
[3,12,68,287],
[3,12,68,288],
[3,12,68,289],
[3,12,68,290],
[3,12,73,379],
[3,12,73,382],
[3,12,73,385],
[3,12,73,387],
[3,12,75,356],
[3,12,79,24],
[3,12,79,26],
[3,12,79,28],
[3,12,79,32],
[3,12,79,35],
[3,12,79,38],
[3,12,79,41],
[3,12,79,347],
[3,12,79,348],
[3,12,79,349],
[3,12,87,22],
[3,12,87,23],
[3,12,87,25],
[3,12,87,27],
[3,12,87,30],
[3,12,87,31],
[3,12,87,34],
[3,12,87,37],
[3,12,87,40],
[3,12,87,43],
[3,12,87,66],
[3,12,87,388],
[3,12,87,401],
[3,12,87,402],
[3,12,93,57],
[3,12,93,58],
[3,12,93,59],
[3,12,93,448],
[3,12,93,449],
[3,12,93,450],
[3,12,93,451],
[3,12,93,454],
[3,12,93,483],
[3,12,93,489],
[3,12,95,131],
[3,12,95,132],
[3,12,95,291],
[3,12,95,293],
[3,12,95,444],
[3,12,95,446],
[3,12,95,528],
[3,12,95,582],
[3,12,95,584],
[3,12,95,585],
[3,12,95,586],
[3,12,95,587],
[3,12,98,439],
[3,12,99,544],
[3,12,102,490],
[3,12,107,480],
[3,12,107,481],
[3,12,107,482],
[3,13,111,628],
[3,13,45,136],
[3,13,45,137],
[3,13,45,355],
[3,14,111,629],
[3,15,111,630],
[3,15,112,631],
[3,15,11,345],
[3,15,15,505],
[3,15,15,507],
[3,15,15,520],
[3,15,53,369],
[3,16,111,632],
[3,16,112,633],
[3,16,1,390],
[3,16,1,394],
[3,16,1,508],
[3,16,13,271],
[3,16,13,272],
[3,16,13,273],
[3,16,53,391],
[3,16,53,395],
[3,16,53,509],
[3,16,63,392],
[3,16,63,396],
[3,16,63,510],
[3,17,111,634],
[3,17,45,1],
[3,17,45,4],
[3,17,79,3],
[3,17,79,6],
[3,17,95,2],
[3,17,95,5],
[3,18,111,635],
[3,18,49,55],
[3,18,49,56],
[3,18,49,60],
[3,19,111,636],
[3,19,45,70],
[3,19,45,71],
[3,22,111,637],
[3,22,112,638],
[3,22,45,555],
[3,22,45,556],
[3,22,93,527],
[3,24,111,639],
[3,24,86,14],
[3,24,87,15],
[3,24,87,16],
[3,25,111,640],
[3,25,45,456],
[3,25,53,457],
[3,25,55,458],
[3,26,95,442],
[3,31,111,641],
[3,31,112,642],
[3,31,13,44],
[3,31,13,45],
[3,31,45,494],
[3,31,45,495],
[3,31,45,496],
[3,31,45,497],
[3,31,45,498],
[3,31,45,529],
[3,31,45,530],
[3,31,45,531],
[3,31,45,532],
[3,31,45,533],
[3,31,45,534],
[3,31,45,535],
[3,31,79,536],
[3,31,79,537],
[3,31,79,538],
[3,33,111,643],
[3,33,112,644],
[3,33,11,346],
[3,33,27,350],
[3,33,45,452],
[3,33,45,453],
[3,33,45,455],
[3,33,53,368],
[3,33,53,403],
[3,33,53,404],
[3,33,53,405],
[3,33,53,406],
[3,33,93,18],
[3,36,111,645],
[3,36,57,484],
[3,40,111,646],
[3,40,112,647],
[3,41,7,298],
[3,41,7,299],
[3,42,112,648],
[4,27,111,649],
[4,27,112,650],
[4,27,1,19],
[4,27,5,488],
[4,27,41,487],
[4,27,45,479],
[4,27,48,583],
[4,27,48,588],
[4,27,48,589],
[4,27,53,486],
[4,27,72,577],
[4,27,72,581],
[4,34,111,651],
[4,35,111,652],
[4,44,34,546],
[5,23,110,443],
[5,37,110,461],
[5,37,110,462],
[6,7,111,653],
[6,7,112,654],
[6,20,111,655],
[6,20,112,656],
[6,21,111,657],
[6,21,112,658],
[7,39,50,275],
[7,39,50,474],
[7,39,50,475],
[7,39,50,476],
[7,43,111,659],
[7,43,112,660],
[7,43,29,540],
[7,43,29,541],
[7,43,29,551],
[7,43,50,539],
[7,43,50,542],
[7,43,50,543],
[8,38,111,661],
[9,28,111,662],
[9,28,112,663],
[9,29,111,664],
[10,30,111,665],
[11,59,111,666]];



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

