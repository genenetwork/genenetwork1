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
{txt:"AKXD",val:"AKXD"},
{txt:"All Tissues, RNA-Seq GTEx v3",val:"GTEx"},
{txt:"AXB/BXA",val:"AXBXA"},
{txt:"B6BTBRF2",val:"B6BTBRF2"},
{txt:"B6D2 EtOH Selected Advanced Intercross",val:"Linsenbardt-Boehm"},
{txt:"B6D2F2",val:"B6D2F2"},
{txt:"B6D2F2 PSU",val:"B6D2F2-PSU"},
{txt:"B6D2RI Aged",val:"B6D2RI"},
{txt:"BayXSha",val:"BayXSha"},
{txt:"BDF2 UCLA",val:"BDF2-1999"},
{txt:"BDF2-2005",val:"BDF2-2005"},
{txt:"BH/HB F2 UCLA",val:"BHHBF2"},
{txt:"BHF2 (Apoe Null) UCLA",val:"BHF2"},
{txt:"Brain, Cognition, Human Connectome Project",val:"HCP"},
{txt:"Brain: Normal Gene Expression (NIH/Gibbs)",val:"Brain-Normal-NIH-Gibbs"},
{txt:"BXD",val:"BXD"},
{txt:"BXH",val:"BXH"},
{txt:"CastB6/B6Cast F2 UCLA",val:"CTB6F2"},
{txt:"ColXBur",val:"ColXBur"},
{txt:"ColXCvi",val:"ColXCvi"},
{txt:"CXB",val:"CXB"},
{txt:"Drosophila Genetic Reference Panel",val:"DGRP"},
{txt:"Heterogeneous Stock",val:"HS"},
{txt:"Heterogeneous Stock Collaborative Cross",val:"HS-CC"},
{txt:"HXB/BXH",val:"HXBBXH"},
{txt:"J12XJ58F11",val:"J12XJ58F11"},
{txt:"J12XJ58F2",val:"J12XJ58F2"},
{txt:"LXP",val:"LXP"},
{txt:"LXS",val:"LXS"},
{txt:"Macaca fasicularis (Cynomolgus monkey)",val:"Macaca-fasicularis"},
{txt:"Mouse Diversity Panel",val:"MDP"},
{txt:"NIH Heterogeneous Stock",val:"HSNIH"},
{txt:"NZB/FVB N2 NCI",val:"NZBXFVB-N2"},
{txt:"Oregon-R x 2b3",val:"Oregon-R_x_2b3"},
{txt:"QSM",val:"QSM"},
{txt:"Reduced Complexity Cross (B6JxB6N F2)",val:"C57BL-6JxC57BL-6NJF2"},
{txt:"Scripps C57BL/6J",val:"Scripps-2013"},
{txt:"SOTNOT-OHSU",val:"SOTNOT-OHSU"},
{txt:"SXM",val:"SXM"},
{txt:"UIOWA SRxSHRSP F2",val:"SRxSHRSPF2"},
{txt:"Brain, Development: Normal Gene Expression (Yale/Sestan)",val:"HSB"},
{txt:"Brain, Aging: Normal Gene Expression (UCI/Cotman)",val:"Aging-Brain-UCI"},
{txt:"Brain, Aging: AD, HD, Normal Gene Expression (Harvard/Merck)",val:"HB"},
{txt:"Brain, Aging: AD, Normal Gene Expression with Genotypes (Myers)",val:"AD-cases-controls-Myers"},
{txt:"Brain, Aging: AD, Normal Gene Expression (Liang)",val:"AD-cases-controls"},
{txt:"Lung: Normal Gene Expression (Merck)",val:"HLT"},
{txt:"Liver: Normal Gene Expression with Genotypes (Merck)",val:"HLC"},
{txt:"Lymphoblastoid Cells: Gene Expression (CEPH, Williams)",val:"CEPH-2004"},
{txt:"Child Development: CANDLE Cohort with Genotypes (TUCI/UTHSC)",val:"CANDLE"},
{txt:'All Groups',val:'all groups'}];

var tArr = [
{txt:'',val:''},
{txt:'Adipose mRNA',val:'Adipose mRNA'},
{txt:'Adrenal Gland mRNA',val:'Adrenal Gland mRNA'},
{txt:'Amygdala mRNA',val:'Amygdala mRNA'},
{txt:'Anterior Cingulate Cortex mRNA',val:'Anterior Cingulate Cortex mRNA'},
{txt:'Aorta mRNA',val:'Aorta mRNA'},
{txt:'Blood, Cells - EBV-Transformed Lymphocytes mRNA',val:'Blood, Cells - EBV-Transformed Lymphocytes mRNA'},
{txt:'Bone Femur mRNA',val:'Bone Femur mRNA'},
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
{txt:'Colon - Transverse mRNA',val:'Colon - Transverse mRNA'},
{txt:'Coronary mRNA',val:'Coronary mRNA'},
{txt:'Dorsal Root Ganglia mRNA',val:'Dorsal Root Ganglia mRNA'},
{txt:'Dorsolateral Prefrontal Cortex mRNA',val:'Dorsolateral Prefrontal Cortex mRNA'},
{txt:'Embryo mRNA',val:'Embryo mRNA'},
{txt:'Entorhinal Cortex mRNA',val:'Entorhinal Cortex mRNA'},
{txt:'Esophagus - Mucosa mRNA',val:'Esophagus - Mucosa mRNA'},
{txt:'Esophagus - Muscularis mRNA',val:'Esophagus - Muscularis mRNA'},
{txt:'Eye mRNA',val:'Eye mRNA'},
{txt:'Fallopian Tube mRNA',val:'Fallopian Tube mRNA'},
{txt:'Frontal Cortex mRNA',val:'Frontal Cortex mRNA'},
{txt:'Gastrointestinal mRNA',val:'Gastrointestinal mRNA'},
{txt:'Heart - Atrial Appendage mRNA',val:'Heart - Atrial Appendage mRNA'},
{txt:'Heart - Left Ventricle mRNA',val:'Heart - Left Ventricle mRNA'},
{txt:'Heart mRNA',val:'Heart mRNA'},
{txt:'Hematopoietic Cells mRNA',val:'Hematopoietic Cells mRNA'},
{txt:'Hippocampus microRNA',val:'Hippocampus microRNA'},
{txt:'Hippocampus mRNA',val:'Hippocampus mRNA'},
{txt:'Hypothalamus mRNA',val:'Hypothalamus mRNA'},
{txt:'Inferior Temporal Cortex mRNA',val:'Inferior Temporal Cortex mRNA'},
{txt:'Kidney mRNA',val:'Kidney mRNA'},
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
{txt:'Retina mRNA',val:'Retina mRNA'},
{txt:'Skin - Not Sun Exposed (Suprapubic) mRNA',val:'Skin - Not Sun Exposed (Suprapubic) mRNA'},
{txt:'Skin - Sun Exposed (Lower leg) mRNA',val:'Skin - Sun Exposed (Lower leg) mRNA'},
{txt:'Spinal Cord mRNA',val:'Spinal Cord mRNA'},
{txt:'Spleen mRNA',val:'Spleen mRNA'},
{txt:'Stomach mRNA',val:'Stomach mRNA'},
{txt:'Striatum mRNA',val:'Striatum mRNA'},
{txt:'Subcutaneous mRNA',val:'Subcutaneous mRNA'},
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
{txt:'Visceral mRNA',val:'Visceral mRNA'},
{txt:'Whole Blood mRNA',val:'Whole Blood mRNA'},
{txt:'Whole Body mRNA',val:'Whole Body mRNA'},
{txt:'Phenotypes',val:'Phenotypes'},
{txt:'Genotypes',val:'Genotypes'}];

var dArr = [
{txt:'',val:''},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins CD (Feb14) SRM',val:'EPFLBXDprotCDRPN0214'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins HFD (Feb14) SRM',val:'EPFLBXDprotHFDRPN0214'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Trimmed 1.0',val:'UTHSC_BXD_WB_RNASeqtrim1_1112'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Untrimmed',val:'UTHSC_BXD_WB_RNASeq1112'},
{txt:'GTEx Human Coronary (Mar14) RPKM Log2',val:'GTEx_log2_Coron_0314'},
{txt:'GTEx Human Esophagus - Mucosa (Mar14) RPKM Log2',val:'GTEx_log2_EsophMuc_0314'},
{txt:'GTEx Human Esophagus - Muscularis (Mar14) RPKM Log2',val:'GTEx_log2_EsophMus_0314'},
{txt:'GTEx Human Fallopian Tube (Mar14) RPKM Log2',val:'GTEx_log2_Fallo_0314'},
{txt:'GTEx Human Heart - Atrial Appendage (Mar14) RPKM Log2',val:'GTEx_log2_HeartAt_0314'},
{txt:'GTEx Human Heart - Left Ventricle (Mar14) RPKM Log2',val:'GTEx_log2_HeartLV_0314'},
{txt:'GTEx Human Hypothalamus (Mar14) RPKM Log2',val:'GTEx_log2_Hypot_0314'},
{txt:'GTEx Human Kidney (Mar14) RPKM Log2',val:'GTEx_log2_Kidne_0314'},
{txt:'GTEx Human Liver (Mar14) RPKM Log2',val:'GTEx_log2_Liver_0314'},
{txt:'GTEx Human Lung (Mar14) RPKM Log2',val:'GTEx_log2_Lung_0314'},
{txt:'GTEx Human Colon - Transverse (Mar14) RPKM Log2',val:'GTEx_log2_Colon_0314'},
{txt:'GTEx Human Cerebellar Hemisphere (Mar14) RPKM Log2',val:'GTEx_log2_CerebH_0314'},
{txt:'GTEx Human Cerebellar Cortex (Mar14) RPKM Log2',val:'GTEx_log2_CerebC_0314'},
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
{txt:'GTEx Human Muscle (Mar14) RPKM Log2',val:'GTEx_log2_Muscle_0314'},
{txt:'GTEx Human Nucleus Accumbens (Mar14) RPKM Log2',val:'GTEx_log2_Nucle_0314'},
{txt:'GTEx Human Skin-Sun Exposed (Lower leg) (Mar14) RPKM Log2',val:'GTEx_log2_SkinE_0314'},
{txt:'GTEx Human Uterus (Mar14) RPKM Log2',val:'GTEx_log2_Uterus_0314'},
{txt:'GTEx Human Subcutaneous (Mar14) RPKM Log2',val:'GTEx_log2_Subcu_0314'},
{txt:'GTEx Human Nerve - Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Nerve_0314'},
{txt:'GTEx Human Whole Blood (Mar14) RPKM Log2',val:'GTEx_log2_WholeB_0314'},
{txt:'GTEx Human Visceral (Mar14) RPKM Log2',val:'GTEx_log2_Visce_0314'},
{txt:'GTEx Human Vagina (Mar14) RPKM Log2',val:'GTEx_log2_Vagin_0314'},
{txt:'GTEx Human Testis (Mar14) RPKM Log2',val:'GTEx_log2_Testi_0314'},
{txt:'GTEx Human Thyroid (Mar14) RPKM Log2',val:'GTEx_log2_Thyro_0314'},
{txt:'GTEx Human Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Tibial_0314'},
{txt:'GTEx Human Stomach (Mar14) RPKM Log2',val:'GTEx_log2_Stoma_0314'},
{txt:'GTEx Human Spinal Cord (Mar14) RPKM Log2',val:'GTEx_log2_Spina_0314'},
{txt:'GTEx Human Prostate (Mar14) RPKM Log2',val:'GTEx_log2_Prost_0314'},
{txt:'GTEx Human Skin-Not Sun Exposed (Suprapubic) (Mar14) RPKM Log2',val:'GTEx_log2_SkinN_0314'},
{txt:'GTEx Human Ovary (Mar14) RPKM Log2',val:'GTEx_log2_Ovary_0314'},
{txt:'GTEx Human Pancreas (Mar14) RPKM Log2',val:'GTEx_log2_Pancr_0314'},
{txt:'GTEx Human Pituitary (Mar14) RPKM Log2',val:'GTEx_log2_Pitui_0314'},
{txt:'GTEx Human Putamen (Mar14) RPKM Log2',val:'GTEx_log2_Putam_0314'},
{txt:'GTEx Human Frontal Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Front_0314'},
{txt:'GTEx Human Substantia Nigra (Mar14) RPKM Log2',val:'GTEx_log2_Subst_0314'},
{txt:'EPFL/ETHZ BXD Liver, Soluble Proteins CD (May14) SWATH **',val:'EPFLETHZBXDprotCD0514'},
{txt:'EPFL/ETHZ BXD Liver, Soluble Proteins HFD (May14) SWATH **',val:'EPFLETHZBXDprotHFD0514'},
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
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Gene Level (Apr14) RMA **',val:'UTHSC_GutGL_0414'},
{txt:'GTEx Human Hypothalamus (Apr14) RPKM',val:'GTEx_Hypot_0414'},
{txt:'GTEx Human Kidney (Apr14) RPKM',val:'GTEx_Kidne_0414'},
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
{txt:'GSE15745 NIH Human Brain Prefrontal Cortex ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_PFC0510'},
{txt:'GSE15745 NIH Human Brain Cerebellum ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Cer0510'},
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA **',val:'EPFL-LISPBXDHeCD0114'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA **',val:'EPFL-LISPBXDHeHFD0114'},
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA **',val:'EPFL-LISPBXDHeCDEx0114'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA **',val:'EPFL-LISPBXDHeHFDEx0114'},
{txt:'Normal HEI Retina (April 2010) RankInv',val:'G2NEI_ILM_Retina_BXD_RI0410'},
{txt:'Full HEI Retina (April 2010) RankInv',val:'Illum_Retina_BXD_RankInv0410'},
{txt:'ONC HEI Retina (April 2012) RankInv',val:'ONCRetILM6_0412'},
{txt:'DoD TATRC Retina Affy MoGene 2.0 ST (Dec13) RMA',val:'DoDTATRCRetMoGene2_1313'},
{txt:'DoD TATRC Retina Affy MoGene 2.0 ST (Dec13) RMA Exon Level',val:'DoDTATRCRetExMoGene2_1313'},
{txt:'DoD TATRC Retina Affy MoGene 2.0 ST (Oct13) RMA **',val:'ONCRetMoGene2_0413'},
{txt:'DoD TATRC Retina Affy MoGene 2.0 ST (Oct13) RMA Exon Level **',val:'ONCRetExMoGene2_0413'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites HFD (Jun14) **',val:'EPFL-LISP_LivPMetHFD1213'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites HFD (Jun14) **',val:'EPFL-LISP_MusPMetHFD1213'},
{txt:'DoD TATRC Retina Blast Affy MoGene 2.0 ST (Dec13) RMA **',val:'DoDTATRCRetBLMoGene2_1213'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD (Jun14) **',val:'EPFL-LISP_LivPMetCD1213'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD (Jun14) **',val:'EPFL-LISP_MusPMetCD1213'},
{txt:'DoD TATRC Retina Blast Affy MoGene 2.0 ST (Dec13) RMA Exon Level **',val:'DoDTATRCRetBLExMoGene2_1213'},
{txt:'GSE16780 UCLA Hybrid MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780_UCLA_ML0911'},
{txt:'SUH BXD Liver CCl4-treated Affy Mouse Gene 1.0 ST (Jun11) RMA',val:'SUH_Liv_RMA_0611'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Gene Level (Oct13) RMA',val:'EPFLADGL1013'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Exon Level (Oct13) RMA',val:'EPFLADEL1013'},
{txt:'UCLA GSE27483 BXD Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXD_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXD Only Bone Femur ILM Mouse WG-6 v2.0 (Jan13) RSN',val:'UCLA_BXD-on_Femur_0113_RSN'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFMG1013'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFMEx1013'},
{txt:'UTHSC WGU88 Female Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFFG1013'},
{txt:'UTHSC WGU88 Female Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFFEx1013'},
{txt:'GSE11882 UCI Human Superior Frontal Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_SG_0913'},
{txt:'GSE11882 UCI Human Hippocampus Affy U133 Plus2 (Sep13) RMA',val:'UCI_HC_0913'},
{txt:'GSE11882 UCI Human Entorhinal Cortex Affy U133 Plus2 (Sep13) RMA',val:'UCI_EC_0913'},
{txt:'GSE11882 UCI Human Postcentral Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_PCG_0913'},
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
{txt:'HZI PR8M-Infected Lungs Females RNAseq (Nov13) RPKM **',val:'HZI_PR8M-F_1113'},
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
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverRMA0413'},
{txt:'EPFL/LISP BXD HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverHFDRMA0413'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverCDRMA0413'},
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
{txt:'UCLA GSE27483 BXH Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXH_Femur_0113_RSN'},
{txt:'VCU BXD PFC Sal M430 2.0 (Dec06) RMA',val:'VCUSal_1206_R'},
{txt:'VCU BXD PFC EtOH M430 2.0 (Dec06) RMA',val:'VCUEtOH_1206_R'},
{txt:'VCU BXD PFC Et vs Sal M430 2.0 (Dec06) Sscore',val:'VCUSal_1006_R'},
{txt:'VCU BXD PFC EtOH vs CIE Air M430 2.0 (Jan11) Sscore **',val:'VCU_PF_AvE_0111_Ss'},
{txt:'VCU BXD PFC CIE EtOH M430 2.0 (Jan11) RMA **',val:'VCU_PF_Et_0111_R'},
{txt:'VCU BXD PFC CIE Air M430 2.0 (Jan11) RMA **',val:'VCU_PF_Air_0111_R'},
{txt:'TSRI DRG Affy Mouse Genome 430 2.0 (Jan13) RMA MDP',val:'TSRI-DRG-AffyMOE430_0113-MDP'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleRMA_Ex1112'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleHFDRMAEx1112'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleCDRMAEx1112'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence Exon Level (Nov12) RPKM',val:'UTHSC_BXD_WB_RNASeqEx1112'},
{txt:'UTHSC B6D2RI Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA **',val:'UTHSC_B6D2RI_H_0912'},
{txt:'St Jude BXD Popliteal Lymph Node Affy HT MG-430 PM (Sep12) RMA **',val:'STJ_PLN_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA **',val:'PSU-B6D2F2_0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Females **',val:'PSU-B6D2F2_F0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males **',val:'PSU-B6D2F2_M0812'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males Aged 200 **',val:'PSU-B6D2F2_M2000812'},
{txt:'Eye M430v2 (Sep08) RMA',val:'Eye_M2_0908_R'},
{txt:'Eye M430v2 No Mutant/Mutant (Aug12) RMA **',val:'gn10'},
{txt:'GSE16780 UCLA Mouse BXH Liver Affy HT M430A (Sep11) RMA',val:'GSE16780BXH_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Adipose (2005) mlratio',val:'UCLA_BHHBF2_ADIPOSE_2005'},
{txt:'UCLA BHHBF2 Liver (2005) mlratio',val:'UCLA_BHHBF2_LIVER_2005'},
{txt:'UCLA BHHBF2 Muscle (2005) mlratio',val:'UCLA_BHHBF2_MUSCLE_2005'},
{txt:'GSE16780 UCLA Mouse MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780MDP_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Brain (2005) mlratio',val:'UCLA_BHHBF2_BRAIN_2005'},
{txt:'GSE16780 UCLA Mouse AXB/BXA Liver Affy HT M430A (Sep11) RMA',val:'GSE16780AB_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Muscle Male Only',val:'UCLA_BHHBF2_MUSCLE_MALE'},
{txt:'UCLA BHHBF2 Liver Male Only',val:'UCLA_BHHBF2_LIVER_MALE'},
{txt:'UCLA BHHBF2 Adipose Male Only',val:'UCLA_BHHBF2_ADIPOSE_MALE'},
{txt:'UCLA BHHBF2 Brain Male Only',val:'UCLA_BHHBF2_BRAIN_MALE'},
{txt:'UCLA BHHBF2 Muscle Female Only',val:'UCLA_BHHBF2_MUSCLE_FEMALE'},
{txt:'UCLA BHHBF2 Liver Female Only',val:'UCLA_BHHBF2_LIVER_FEMALE'},
{txt:'UCLA BHHBF2 Brain Female Only',val:'UCLA_BHHBF2_BRAIN_FEMALE'},
{txt:'UCLA BHHBF2 Adipose Female Only',val:'UCLA_BHHBF2_ADIPOSE_FEMALE'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleRMA1211'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_PG_RMA_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_Adrenal_RMA_0612'},
{txt:'HZI PR8M-Infected Lungs Agilent4x44 (Apr12) Quantile Females **',val:'HZI_PR8M_Q_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Pituitary_RMA_F_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Adrenal_RMA_F_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Pituitary_RMA_M_0612'},
{txt:'HZI Lung Time Course Flu PR8M (Mar13) Schughart **',val:'HZI_LTCF_0313'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Adrenal_RMA_M_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_Adrenal_RMA_Ex_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_PG_RMA_Ex_0612'},
{txt:'B6D2 ONC Retina (April 2012) RankInv **',val:'B6D2ONCILM_0412'},
{txt:'INIA Macaca fasicularis Nucleus Accumbens (Jan10) RMA **',val:'INIA_MacFas_Ac_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Adipose (2005) mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_2005'},
{txt:'UCLA CTB6/B6CTF2 Liver (2005) mlratio',val:'UCLA_CTB6B6CTF2_LIVER_2005'},
{txt:'INIA Macaca fasicularis Hippocampus (Jan10) RMA **',val:'INIA_MacFas_Hc_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Muscle (2005) mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_2005'},
{txt:'INIA Macaca fasicularis Amygdala (Jan10) RMA **',val:'INIA_MacFas_AMG_RMA_0110'},
{txt:'UCLA CTB6B6CTF2 Muscle Female mlratio **',val:'UCLA_CTB6B6CTF2_MUSCLE_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Liver Female mlratio **',val:'UCLA_CTB6B6CTF2_LIVER_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Adipose Female mlratio **',val:'UCLA_CTB6B6CTF2_ADIPOSE_FEMALE'},
{txt:'VU BXD Midbrain Agilent SurePrint G3 Mouse GE (May12) Quantile',val:'VUBXDMouseMidBrainQ0512'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleHFDRMA1211'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleCDRMA1211'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1111'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1111'},
{txt:'G2 HEI ONC Retina Illumina V6.2 (Sep11) RankInv **',val:'G2HEIONCRetILM6_0911'},
{txt:'HEI ONC vs Control Retina Illumina V6.2 (Sep11) RankInv **',val:'HEIONCvsCRetILM6_0911'},
{txt:'JAX Liver Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_0711'},
{txt:'JAX Liver HF Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_HF_0711'},
{txt:'JAX Liver 6C Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_6C_0711'},
{txt:'Harrill-Rusyn MDP Liver Acetaminophen Tox Study (G4121A, 2009)',val:'JAX_liver_agil_MDP-0113'},
{txt:'Human Primary Motor (M1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_M1C_0711'},
{txt:'Human Hippocampus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_HIP_0711'},
{txt:'Human Medial Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MFC_0711'},
{txt:'Human Primary Auditory (A1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_A1C_0711'},
{txt:'GN330 Human Amygdala Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_AMY_0711'},
{txt:'Human Cerebellar Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_CBC_0711'},
{txt:'Human Dorsolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_DFC_0711'},
{txt:'Human Posterior Inferior Parietal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_IPC_0711'},
{txt:'Human Inferior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_ITC_0711'},
{txt:'Human Mediodorsal Nucleus of Thalamus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MD_0711'},
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
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA MDP',val:'HC_M2_0606_MDP'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Oct10) RMA',val:'UTHSC_SPL_RMA_1010'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA MDP',val:'UMUTAffyExon_0209_RMA_MDP'},
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
{txt:'Mouse kidney M430v2 Female (Aug06) RMA',val:'MA_M2F_0706_R'},
{txt:'Mouse kidney M430v2 Male (Aug06) RMA',val:'MA_M2M_0706_R'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) MAS5',val:'B1LI0809M5'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) MAS5',val:'B1MI0809M5'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) RMA',val:'B1MI0809R'},
{txt:'GSE5281 Human Brain Full Liang (Jul09) RMA',val:'GSE5281_F_RMA0709'},
{txt:'GSE5281 Human Brain Best 102 Liang (Jul09) RMA',val:'GSE5281_RMA0709'},
{txt:'UT Hippocampus Affy RaEx 1.0 Exon (Jul09) RMA',val:'UT_HippRatEx_RMA_0709'},
{txt:'VCU BXD VTA Et vs Sal M430 2.0 (Jun09) Sscore **',val:'VCUEtvsSal_0609_R'},
{txt:'VCU BXD VTA Sal M430 2.0 (Jun09) RMA **',val:'VCUSal_0609_R'},
{txt:'VCU BXD VTA EtOH M430 2.0 (Jun09) RMA **',val:'VCUEtOH_0609_R'},
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
{txt:'Eye M430v2 Mutant Gpnmb (Sep08) RMA **',val:'Eye_M2_0908_R_NB'},
{txt:'Eye M430v2 WT Gpnmb (Sep08) RMA **',val:'Eye_M2_0908_R_ND'},
{txt:'Eye M430v2 Mutant Tyrp1 (Sep08) RMA **',val:'Eye_M2_0908_R_MT'},
{txt:'Eye M430v2 WT WT (Sep08) RMA **',val:'Eye_M2_0908_WTWT'},
{txt:'Eye M430v2 WT Tyrp1 (Sep08) RMA **',val:'Eye_M2_0908_R_WT'},
{txt:'UCLA BXD and BXH Cartilage v2',val:'UCLA_BXDBXH_CARTILAGE_V2'},
{txt:'UCLA BXH and BXD Cartilage v2',val:'UCLA_BXHBXD_CARTILAGE_V2'},
{txt:'UCLA BXH and BXD Cartilage',val:'UCLA_BXHBXD_CARTILAGE'},
{txt:'UCLA BXD and BXH Cartilage',val:'UCLA_BXDBXH_CARTILAGE'},
{txt:'UCLA CTB6B6CTF2 Adipose Male mlratio **',val:'UCLA_CTB6B6CTF2_ADIPOSE_MALE'},
{txt:'UCLA BHF2 Muscle Male mlratio **',val:'UCLA_BHF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Muscle Female mlratio **',val:'UCLA_BHF2_MUSCLE_FEMALE'},
{txt:'UCLA BHF2 Brain Female mlratio',val:'UCLA_BHF2_BRAIN_FEMALE'},
{txt:'UCLA BHF2 Brain Male mlratio',val:'UCLA_BHF2_BRAIN_MALE'},
{txt:'UCLA BHF2 Adipose Female mlratio',val:'UCLA_BHF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHF2 Liver Female mlratio',val:'UCLA_BHF2_LIVER_FEMALE'},
{txt:'UCLA BHF2 Adipose Male mlratio',val:'UCLA_BHF2_ADIPOSE_MALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Male mlratio **',val:'UCLA_CTB6B6CTF2_MUSCLE_MALE'},
{txt:'UCLA CTB6B6CTF2 Liver Male mlratio **',val:'UCLA_CTB6B6CTF2_LIVER_MALE'},
{txt:'UCLA BHF2 Liver Male mlratio',val:'UCLA_BHF2_LIVER_MALE'},
{txt:'UCLA BXD Cartilage',val:'UCLA_BXD_CARTILAGE'},
{txt:'UCLA BXH Cartilage',val:'UCLA_BXH_CARTILAGE'},
{txt:'UCLA BHF2 Adipose (June05) mlratio',val:'UCLA_BHF2_ADIPOSE_0605'},
{txt:'UCLA BHF2 Brain (June05) mlratio',val:'UCLA_BHF2_BRAIN_0605'},
{txt:'UCLA BHF2 Muscle (June05) mlratio **',val:'UCLA_BHF2_MUSCLE_0605'},
{txt:'UCLA BDF2 Liver (1999) mlratio',val:'UCLA_BDF2_LIVER_1999'},
{txt:'UCLA BHF2 Liver (June05) mlratio',val:'UCLA_BHF2_LIVER_0605'},
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
{txt:'VCU LXS PFC EtOH M430A 2.0 (Aug06) RMA **',val:'VCUEtOH_0806_R'},
{txt:'VCU LXS PFC Sal M430A 2.0 (Aug06) RMA',val:'VCUSal_0806_R'},
{txt:'VCU LXS PFC Et vs Sal M430A 2.0 (Aug06) Sscore **',val:'VCUEt_vs_Sal_0806_R'},
{txt:'Barley1 Embryo gcRMA SCRI (Dec06)',val:'B139_K_1206_R'},
{txt:'Barley1 Leaf MAS 5.0 SCRI (Dec06)',val:'B30_K_1206_M'},
{txt:'Barley1 Leaf gcRMA SCRI (Dec06)',val:'B30_K_1206_R'},
{txt:'Barley1 Leaf gcRMAn SCRI (Dec06)',val:'B30_K_1206_Rn'},
{txt:'Barley1 Embryo MAS 5.0 SCRI (Dec06)',val:'B139_K_1206_M'},
{txt:'UCHSC BXD Whole Brain M430 2.0 (Nov06) RMA',val:'BR_M2_1106_R'},
{txt:'HZI Treg M430v2 (Feb11) RMA',val:'RTC_1106_R'},
{txt:'UIOWA Eye mRNA RAE230v2 (Sep06) RMA',val:'UIOWA_Eye_RMA_0906'},
{txt:'Mouse kidney M430v2 Sex Balanced (Aug06) RMA',val:'MA_M2_0806_R'},
{txt:'Mouse Kidney M430v2 Sex Balanced (Aug06) PDNN',val:'MA_M2_0806_P'},
{txt:'Mouse Kidney M430v2 (Jul06) PDNN',val:'MA_M2_0706_P'},
{txt:'Mouse Kidney M430v2 (Jul06) RMA',val:'MA_M2_0706_R'},
{txt:'Barley1 Embryo0 gcRMA SCRI (Apr06)',val:'B150_K_0406_R'},
{txt:'INIA Brain mRNA M430 (Jun06) RMA',val:'IBR_M_0606_R'},
{txt:'Hippocampus Consortium M430v2 (Jun06) PDNN',val:'HC_M2_0606_P'},
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
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) MAS5',val:'SA_M2_0905_M'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) PDNN',val:'SA_M2_0905_P'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) RMA',val:'SA_M2_0905_R'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) PDNN',val:'BR_U_0805_P'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) RMA',val:'BR_U_0805_R'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) MAS5',val:'BR_U_0805_M'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Aug05) MAS5',val:'FT_2A_0805_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) PDNN',val:'BRF2_M_0805_P'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) RMA',val:'BRF2_M_0805_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) MAS5',val:'BRF2_M_0805_M'},
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
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov10) RankInv **',val:'DevStriatum_ILM6.2P3RInv_1110'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1110'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1110'},
{txt:'BIDMC/UTHSC Dev Striatum P14 ILMv6.2 (Nov10) RankInv **',val:'DevStriatum_ILM6.2P14RInv_1110'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) RMA',val:'LVF2_M_0704_R'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) MAS5',val:'LVF2_M_0704_M'},
{txt:'NCI Mammary mRNA M430 (July04) RMA',val:'MA_M_0704_R'},
{txt:'NCI Mammary mRNA M430 (July04) MAS5',val:'MA_M_0704_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) PDNN',val:'BRF2_M_0304_P'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) MAS5',val:'BRF2_M_0304_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) RMA',val:'BRF2_M_0304_R'},
{txt:'GNF Stem Cells U74Av2 (Mar04) RMA',val:'HC_U_0304_R'},
{txt:'INIA Brain mRNA M430 (Feb04) PDNN',val:'CB_M_0204_P'},
{txt:'Howell et al. 2011, DBA/2J Glaucoma Optic Nerve Head M430 2.0 (Dec12) RMA',val:'DBA2J-ONH-1212'},
{txt:'Howell et al. 2011, DBA/2J Glaucoma Retina  M430 2.0 (Sep11) RMA',val:'BXD_GLA_0911'},
{txt:'Hippocampus Illumina RSS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSS_1008'},
{txt:'Hippocampus Illumina RSE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSE_1008'},
{txt:'Hippocampus Illumina NOS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOS_1008'},
{txt:'GSE9588 Human Liver Normal (Mar11) Females',val:'HLCF_0311'},
{txt:'Hippocampus Illumina NOE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOE_1008'},
{txt:'Hippocampus Illumina NON (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NON_1008'},
{txt:'HCP Published Phenotypes',val:'HCPPublish'},
{txt:'AD-cases-controls-Myers Genotypes',val:'AD-cases-controls-MyersGeno'},
{txt:'HLC Published Phenotypes',val:'HLCPublish'},
{txt:'CANDLE Published Phenotypes',val:'CANDLEPublish'},
{txt:'AKXD Genotypes',val:'AKXDGeno'},
{txt:'AXBXA Published Phenotypes',val:'AXBXAPublish'},
{txt:'AXBXA Genotypes',val:'AXBXAGeno'},
{txt:'B6BTBRF2 Published Phenotypes',val:'B6BTBRF2Publish'},
{txt:'B6BTBRF2 Genotypes',val:'B6BTBRF2Geno'},
{txt:'Linsenbardt-Boehm Published Phenotypes',val:'Linsenbardt-BoehmPublish'},
{txt:'Linsenbardt-Boehm Genotypes',val:'Linsenbardt-BoehmGeno'},
{txt:'B6D2F2 Genotypes',val:'B6D2F2Geno'},
{txt:'B6D2F2-PSU Genotypes',val:'B6D2F2-PSUGeno'},
{txt:'BDF2-1999 Genotypes',val:'BDF2-1999Geno'},
{txt:'BDF2-2005 Genotypes',val:'BDF2-2005Geno'},
{txt:'BHHBF2 Genotypes',val:'BHHBF2Geno'},
{txt:'BHF2 Genotypes',val:'BHF2Geno'},
{txt:'BXD Published Phenotypes',val:'BXDPublish'},
{txt:'BXD Genotypes',val:'BXDGeno'},
{txt:'BXH Published Phenotypes',val:'BXHPublish'},
{txt:'BXH Genotypes',val:'BXHGeno'},
{txt:'CTB6F2 Published Phenotypes',val:'CTB6F2Publish'},
{txt:'CTB6F2 Genotypes',val:'CTB6F2Geno'},
{txt:'CXB Published Phenotypes',val:'CXBPublish'},
{txt:'CXB Genotypes',val:'CXBGeno'},
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
{txt:'HSNIH Published Phenotypes',val:'HSNIHPublish'},
{txt:'BayXSha Published Phenotypes',val:'BayXShaPublish'},
{txt:'BayXSha Genotypes',val:'BayXShaGeno'},
{txt:'ColXBur Published Phenotypes',val:'ColXBurPublish'},
{txt:'ColXBur Genotypes',val:'ColXBurGeno'},
{txt:'ColXCvi Published Phenotypes',val:'ColXCviPublish'},
{txt:'ColXCvi Genotypes',val:'ColXCviGeno'},
{txt:'SXM Published Phenotypes',val:'SXMPublish'},
{txt:'SXM Genotypes',val:'SXMGeno'},
{txt:'J12XJ58F11 Published Phenotypes',val:'J12XJ58F11Publish'},
{txt:'J12XJ58F11 Genotypes',val:'J12XJ58F11Geno'},
{txt:'J12XJ58F2 Published Phenotypes',val:'J12XJ58F2Publish'},
{txt:'LXP Published Phenotypes',val:'LXPPublish'},
{txt:'All Phenotypes',val:'_allPublish'}];

var lArr = [
 null,
[1,2,2,20],
[1,2,2,53],
[1,2,3,54],
[1,2,3,55],
[1,2,4,21],
[1,2,4,56],
[1,2,5,22],
[1,2,5,57],
[1,2,6,23],
[1,2,6,58],
[1,2,9,24],
[1,2,9,59],
[1,2,11,25],
[1,2,11,60],
[1,2,12,26],
[1,2,12,61],
[1,2,13,27],
[1,2,13,62],
[1,2,14,28],
[1,2,14,63],
[1,2,15,17],
[1,2,15,64],
[1,2,16,16],
[1,2,16,65],
[1,2,17,18],
[1,2,17,66],
[1,2,18,15],
[1,2,18,67],
[1,2,19,5],
[1,2,19,68],
[1,2,24,6],
[1,2,24,69],
[1,2,25,7],
[1,2,25,70],
[1,2,27,8],
[1,2,27,71],
[1,2,28,49],
[1,2,28,72],
[1,2,30,9],
[1,2,30,73],
[1,2,31,10],
[1,2,31,74],
[1,2,35,19],
[1,2,35,75],
[1,2,36,11],
[1,2,36,77],
[1,2,38,12],
[1,2,38,78],
[1,2,42,13],
[1,2,42,79],
[1,2,44,14],
[1,2,44,80],
[1,2,52,29],
[1,2,52,81],
[1,2,54,34],
[1,2,54,82],
[1,2,56,30],
[1,2,56,83],
[1,2,58,45],
[1,2,58,84],
[1,2,59,46],
[1,2,59,85],
[1,2,61,47],
[1,2,61,86],
[1,2,72,43],
[1,2,72,87],
[1,2,73,48],
[1,2,73,88],
[1,2,75,44],
[1,2,75,89],
[1,2,76,31],
[1,2,76,90],
[1,2,77,42],
[1,2,77,91],
[1,2,79,41],
[1,2,79,92],
[1,2,81,33],
[1,2,81,93],
[1,2,82,50],
[1,2,82,94],
[1,2,87,38],
[1,2,87,95],
[1,2,89,39],
[1,2,89,96],
[1,2,90,40],
[1,2,90,97],
[1,2,91,32],
[1,2,91,98],
[1,2,92,37],
[1,2,92,99],
[1,2,95,36],
[1,2,95,100],
[1,2,96,35],
[1,2,96,101],
[1,14,98,491],
[1,15,17,106],
[1,15,62,104],
[1,15,67,105],
[1,15,86,103],
[1,41,3,291],
[1,41,15,292],
[1,41,21,293],
[1,41,35,288],
[1,41,37,295],
[1,41,47,289],
[1,41,48,296],
[1,41,57,297],
[1,41,65,294],
[1,41,66,299],
[1,41,68,290],
[1,41,69,287],
[1,41,70,298],
[1,41,71,301],
[1,41,80,300],
[1,41,94,302],
[1,42,23,136],
[1,42,35,135],
[1,42,64,137],
[1,42,83,134],
[1,43,17,170],
[1,43,17,171],
[1,43,17,172],
[1,43,17,173],
[1,43,67,303],
[1,43,67,304],
[1,43,67,307],
[1,43,67,309],
[1,43,71,305],
[1,43,71,306],
[1,43,71,308],
[1,43,71,310],
[1,44,99,492],
[1,44,8,141],
[1,44,8,143],
[1,44,8,144],
[1,45,8,319],
[1,45,8,320],
[1,45,8,356],
[1,45,8,357],
[1,46,44,164],
[1,46,44,165],
[1,46,44,166],
[1,46,44,167],
[1,47,98,493],
[1,47,42,316],
[1,47,42,317],
[1,47,42,488],
[1,48,45,350],
[1,48,45,371],
[1,49,98,494],
[1,49,49,209],
[1,49,49,210],
[1,49,55,208],
[2,30,3,272],
[2,30,8,339],
[2,30,35,270],
[2,30,56,267],
[2,30,67,338],
[3,1,99,495],
[3,1,46,364],
[3,1,46,476],
[3,1,46,477],
[3,3,98,496],
[3,3,99,497],
[3,3,7,219],
[3,3,26,372],
[3,3,32,211],
[3,3,42,246],
[3,4,98,498],
[3,4,99,499],
[3,4,42,474],
[3,4,42,475],
[3,5,98,500],
[3,5,99,501],
[3,6,99,502],
[3,6,8,456],
[3,6,8,457],
[3,6,8,458],
[3,6,8,478],
[3,6,8,479],
[3,6,8,480],
[3,7,99,503],
[3,7,52,234],
[3,7,52,235],
[3,7,52,236],
[3,7,52,237],
[3,8,35,232],
[3,10,99,504],
[3,10,42,398],
[3,11,99,505],
[3,11,80,449],
[3,11,80,450],
[3,11,80,451],
[3,12,99,506],
[3,12,1,241],
[3,12,1,249],
[3,12,1,254],
[3,12,8,245],
[3,12,8,250],
[3,12,8,253],
[3,12,42,242],
[3,12,42,248],
[3,12,42,252],
[3,12,52,243],
[3,12,52,247],
[3,12,52,251],
[3,13,99,507],
[3,13,1,387],
[3,13,1,389],
[3,13,1,395],
[3,13,8,385],
[3,13,8,386],
[3,13,8,396],
[3,13,42,388],
[3,13,42,392],
[3,13,42,399],
[3,13,52,383],
[3,13,52,384],
[3,13,52,397],
[3,16,98,508],
[3,16,99,509],
[3,16,1,126],
[3,16,1,127],
[3,16,2,257],
[3,16,2,260],
[3,16,2,263],
[3,16,2,264],
[3,16,3,311],
[3,16,3,312],
[3,16,3,313],
[3,16,3,314],
[3,16,3,315],
[3,16,7,128],
[3,16,7,129],
[3,16,7,130],
[3,16,7,131],
[3,16,7,132],
[3,16,7,133],
[3,16,8,3],
[3,16,8,4],
[3,16,8,231],
[3,16,8,418],
[3,16,8,426],
[3,16,8,430],
[3,16,8,431],
[3,16,8,434],
[3,16,8,452],
[3,16,8,453],
[3,16,8,454],
[3,16,8,482],
[3,16,10,378],
[3,16,10,381],
[3,16,10,393],
[3,16,17,174],
[3,16,17,175],
[3,16,17,176],
[3,16,17,177],
[3,16,17,178],
[3,16,17,179],
[3,16,17,180],
[3,16,17,181],
[3,16,17,182],
[3,16,17,183],
[3,16,17,184],
[3,16,17,185],
[3,16,17,186],
[3,16,17,187],
[3,16,17,188],
[3,16,17,189],
[3,16,17,190],
[3,16,17,191],
[3,16,17,212],
[3,16,17,213],
[3,16,17,214],
[3,16,17,215],
[3,16,17,216],
[3,16,17,217],
[3,16,26,238],
[3,16,26,239],
[3,16,26,373],
[3,16,26,374],
[3,16,26,375],
[3,16,26,376],
[3,16,26,377],
[3,16,26,483],
[3,16,26,484],
[3,16,29,76],
[3,16,32,107],
[3,16,32,108],
[3,16,32,109],
[3,16,32,110],
[3,16,33,342],
[3,16,33,343],
[3,16,33,344],
[3,16,33,345],
[3,16,33,346],
[3,16,33,347],
[3,16,33,348],
[3,16,33,349],
[3,16,33,481],
[3,16,34,102],
[3,16,35,427],
[3,16,35,428],
[3,16,35,429],
[3,16,35,435],
[3,16,35,436],
[3,16,35,437],
[3,16,35,438],
[3,16,35,439],
[3,16,35,440],
[3,16,35,441],
[3,16,35,442],
[3,16,35,443],
[3,16,35,444],
[3,16,35,445],
[3,16,35,446],
[3,16,35,447],
[3,16,35,448],
[3,16,36,145],
[3,16,36,146],
[3,16,36,147],
[3,16,36,148],
[3,16,36,149],
[3,16,36,150],
[3,16,36,151],
[3,16,36,152],
[3,16,38,351],
[3,16,38,352],
[3,16,38,421],
[3,16,38,422],
[3,16,38,423],
[3,16,38,424],
[3,16,40,370],
[3,16,41,118],
[3,16,41,121],
[3,16,42,124],
[3,16,42,125],
[3,16,42,192],
[3,16,42,193],
[3,16,42,194],
[3,16,42,195],
[3,16,42,196],
[3,16,42,197],
[3,16,42,198],
[3,16,42,199],
[3,16,42,200],
[3,16,42,201],
[3,16,42,202],
[3,16,42,203],
[3,16,42,204],
[3,16,42,205],
[3,16,42,206],
[3,16,42,207],
[3,16,43,1],
[3,16,43,2],
[3,16,43,51],
[3,16,43,52],
[3,16,44,159],
[3,16,44,162],
[3,16,44,163],
[3,16,44,258],
[3,16,44,262],
[3,16,50,276],
[3,16,51,119],
[3,16,51,122],
[3,16,52,228],
[3,16,52,229],
[3,16,52,230],
[3,16,52,255],
[3,16,52,277],
[3,16,52,278],
[3,16,53,279],
[3,16,53,280],
[3,16,53,324],
[3,16,53,328],
[3,16,53,400],
[3,16,53,471],
[3,16,53,472],
[3,16,56,153],
[3,16,56,154],
[3,16,56,155],
[3,16,56,156],
[3,16,56,157],
[3,16,56,158],
[3,16,61,256],
[3,16,61,259],
[3,16,61,261],
[3,16,61,265],
[3,16,63,233],
[3,16,67,221],
[3,16,67,222],
[3,16,67,223],
[3,16,67,224],
[3,16,67,225],
[3,16,67,226],
[3,16,74,111],
[3,16,74,112],
[3,16,74,113],
[3,16,74,114],
[3,16,74,115],
[3,16,74,116],
[3,16,74,117],
[3,16,74,120],
[3,16,74,123],
[3,16,74,266],
[3,16,74,281],
[3,16,74,282],
[3,16,78,326],
[3,16,78,327],
[3,16,78,329],
[3,16,78,330],
[3,16,78,332],
[3,16,78,334],
[3,16,78,362],
[3,16,78,368],
[3,16,80,160],
[3,16,80,161],
[3,16,80,323],
[3,16,80,325],
[3,16,80,402],
[3,16,80,460],
[3,16,80,462],
[3,16,80,463],
[3,16,80,464],
[3,16,80,465],
[3,16,80,468],
[3,16,80,469],
[3,16,80,470],
[3,16,80,473],
[3,16,84,318],
[3,16,85,419],
[3,16,88,369],
[3,16,93,359],
[3,16,93,360],
[3,16,93,361],
[3,17,98,510],
[3,17,99,511],
[3,17,7,220],
[3,17,10,379],
[3,17,10,380],
[3,17,10,394],
[3,17,42,240],
[3,18,98,512],
[3,18,99,513],
[3,18,1,268],
[3,18,1,275],
[3,18,1,382],
[3,18,8,138],
[3,18,8,139],
[3,18,8,140],
[3,18,42,269],
[3,18,42,274],
[3,18,42,391],
[3,18,52,271],
[3,18,52,273],
[3,18,52,390],
[3,21,98,514],
[3,21,99,515],
[3,21,35,432],
[3,21,35,433],
[3,21,78,401],
[3,23,98,516],
[3,23,35,335],
[3,23,42,337],
[3,23,44,336],
[3,24,80,321],
[3,29,98,517],
[3,29,99,518],
[3,29,35,403],
[3,29,35,404],
[3,29,35,405],
[3,29,35,406],
[3,29,35,407],
[3,29,35,408],
[3,29,35,409],
[3,29,35,485],
[3,29,35,486],
[3,29,35,487],
[3,29,35,489],
[3,29,35,490],
[3,29,67,410],
[3,29,67,411],
[3,29,67,412],
[3,31,98,519],
[3,31,99,520],
[3,31,7,218],
[3,31,20,227],
[3,31,35,331],
[3,31,35,333],
[3,31,42,244],
[3,31,42,283],
[3,31,42,284],
[3,31,42,285],
[3,31,42,286],
[3,33,98,521],
[3,33,46,363],
[3,36,98,522],
[3,36,99,523],
[3,37,4,168],
[3,37,4,169],
[3,38,99,524],
[4,25,98,525],
[4,25,99,526],
[4,25,2,367],
[4,25,32,366],
[4,25,35,358],
[4,25,38,461],
[4,25,38,466],
[4,25,38,467],
[4,25,42,365],
[4,25,60,455],
[4,25,60,459],
[4,32,98,527],
[4,40,26,420],
[5,22,97,322],
[5,34,97,340],
[5,34,97,341],
[6,9,98,528],
[6,9,99,529],
[6,19,98,530],
[6,19,99,531],
[6,20,98,532],
[6,20,99,533],
[7,35,39,142],
[7,35,39,353],
[7,35,39,354],
[7,35,39,355],
[7,39,98,534],
[7,39,99,535],
[7,39,22,413],
[7,39,22,417],
[7,39,22,425],
[7,39,39,414],
[7,39,39,415],
[7,39,39,416],
[8,26,98,536],
[8,26,99,537],
[8,27,98,538],
[9,28,98,539],
[10,50,98,540]];



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

