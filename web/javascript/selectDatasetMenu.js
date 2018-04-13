var sArr = [
{txt:'',val:''},
{txt:'Human (hg19)',val:'human'},
{txt:'Macaque monkey',val:'macaque monkey'},
{txt:'Mouse (mm10)',val:'mouse'},
{txt:'Rat (rn6)',val:'rat'},
{txt:'Drosophila',val:'drosophila'},
{txt:'Arabidopsis thaliana',val:'arabidopsis'},
{txt:'Barley',val:'barley'},
{txt:'Poplar',val:'poplar'},
{txt:'Soybean',val:'soybean'},
{txt:'Tomato',val:'tomato'},
{txt:'All Species',val:'All Species'}];

var gArr = [
{txt:'',val:''},
{txt:"AIL Advanced Intercross Line",val:"AIL"},
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
{txt:"BXD Bone Individual Data",val:"BXD-Bone"},
{txt:"BXD NIA Longevity Study",val:"BXD-Harvested"},
{txt:"BXH",val:"BXH"},
{txt:"CastB6/B6Cast F2 UCLA",val:"CTB6F2"},
{txt:"CFW Outbred GWAS",val:"CFW"},
{txt:"Chronic Intermittent Ethanol Phase 1",val:"CIE-INIA"},
{txt:"Chronic Intermittent Ethanol Phase 2",val:"CIE-RMA"},
{txt:"Chronic Mild Stress",val:"CMS"},
{txt:"ColXBur",val:"ColXBur"},
{txt:"ColXCvi",val:"ColXCvi"},
{txt:"CXB",val:"CXB"},
{txt:"Drosophila Genetic Reference Panel",val:"DGRP"},
{txt:"Ethanol-Medicated Stress Reduction",val:"EMSR"},
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
{txt:"Pancreatic: Islets (UTHSC/Gerling)",val:"Islets-Gerling"},
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
{txt:'Islets mRNA',val:'Islets mRNA'},
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
{txt:'UCSD AIL Prefrontal Cortex (Apr18) RNA-Seq',val:'UCSD_AIL_PFC_RNA-Seq_0418'},
{txt:'UCSD AIL Striatum (Apr18) RNA-Seq',val:'UCSD_AIL_STR_RNA-Seq_0418'},
{txt:'UCSD AIL Hippocampus (Apr18) RNA-Seq',val:'UCSD_AIL_HIP_RNA-Seq_0418'},
{txt:'UTHSC BXD Harvested Liver RNA-Seq (Jan18) Log2 **',val:'UTHSC-BXD-Harv_Liv-0118'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Gene Level',val:'DoDCMMRPRetMoGene2_0515'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Gene Level (Apr14) RMA',val:'UTHSC_GutGL_0414'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction A, Chow Diet Cohorts (Mar 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtACD0817'},
{txt:'INIA-UTHSC Hippocampus CIE Affy MTA 1.0 GeneLevel (Mar18) RMA',val:'INIA_UTHSC_Hip_AffyMTA1_May17'},
{txt:'INIA-UTHSC Striatum CIE Affy MTA 1.0 GeneLevel (Apr17) RMA **',val:'INIA_UTHSC_Str_AffyMTA1_May17'},
{txt:'INIA-UTHSC Prefrontal Cortex CIE Affy MTA 1.0 GeneLevel (Apr17) RMA **',val:'INIA_UTHSC_PFC_AffyMTA1_May17'},
{txt:'INIA-UTHSC Midbrain CIE Affy MTA 1.0 GeneLevel (Apr17) RMA',val:'INIA_UTHSC_Mid_AffyMTA1_Apr17'},
{txt:'EPFL/ETHZ BXD Liver, Chow Diet (Jun16) Top100 SWATH',val:'EPFLETHZBXDprotCD0514'},
{txt:'UTHSC Hippocampus All Treatments Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_All_AffyMTA1_Mar17'},
{txt:'UTHSC Human Islets Affy Human Gene 2.0 ST (Mar17) RMA **',val:'UTHSC_HuIslets_Mar17'},
{txt:'UCLA BXD Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_BXD_Aor_Jan16'},
{txt:'UCLA AXB/BXA Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_AXB_BXA_Aor_Jan16'},
{txt:'UCLA CXB Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_CXB_Aor_Jan16'},
{txt:'UCLA AXB/BXA Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_AXB_BXA_Liv_Jan16'},
{txt:'UCLA CXB Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_CXB_Liv_Jan16'},
{txt:'UCLA BXD Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_BXD_Liv_Jan16'},
{txt:'UCSD CFW Hippocampus (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_HIP_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_STR_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_PFC_RNA-Seq_log2_0117'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleRMA1211'},
{txt:'UTHSC B6D2 Retina Affy miRNA-4.0 (Nov16) RMA **',val:'UTHSC_mm10_B6D2_Ret_miRNA_1116'},
{txt:'UTHSC B6D2 Retina Affy MoGene 1.0ST (Sep16) Gene Level RMA **',val:'UTHSC_mm9_B6D2_Ret_0916'},
{txt:'TIGEM Human Retina RNA-Seq (Sep16) RPKM log2',val:'TIGEM_hg38_ret_rna-seq_0916'},
{txt:'HMS Spleen CD4+ T cells MDP Affy Mouse Gene 1.0 ST (Jul16) Gene Level',val:'HMS_mm8_MDP_Spl_CD4_1116'},
{txt:'FGUCAS BXH/HXB Brown Adipose Affy Rat Gene 2.0 ST (May16) log2',val:'FGUCAS_BAdip0516'},
{txt:'EPFL/ETHZ BXD Brown Adipose, Total Tissue Proteome, Chow Diet (Apr16) Light SWATH',val:'EPFL_AdiPro0416'},
{txt:'VCU BXD PFC Sal M430 2.0 (Dec06) RMA',val:'VCUSal_1206_R'},
{txt:'VCU BXD NAc Sal M430 2.0 (Oct07) RMA',val:'VCUSalo_1007_R'},
{txt:'UCAMC LXS Whole Brain Ethanol RNA Sequence (Feb16) FPKM **',val:'UCAMC_LXSBrEtOH_RNA-Seq_0216'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Gene Level (Oct13) RMA',val:'EPFLADGL1013'},
{txt:'Hippocampus Consortium M430v2 (Jun06) PDNN',val:'HC_M2_0606_P'},
{txt:'INIA LCM (11 Regions) CIE/AIR/BAS RNA-seq Transcript Level (Dec15)',val:'INIA_LCM_CAB_1215'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA',val:'UTHSC_SPL_RMA_1210'},
{txt:'RTI RCMRC BXD Fecal Metabolites CD+HFD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetlog0814'},
{txt:'Hippocampus Mouse Transcriptome Assay 1.0 Gene Level Main (Nov15) RMA **',val:'CMS_Hipp1115'},
{txt:'GTEXv5 Human Fallopian Tube RefSeq (Sep15) RPKM log2',val:'GTEXv5_Fatu_0915'},
{txt:'GTEXv5 Human Breast Mammary Tissue RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrMa_0915'},
{txt:'GTEXv5 Human Cells-EBV-Transformed Lymphocytes RefSeq (Sep15) RPKM log2',val:'GTEXv5_EBV_0915'},
{txt:'GTEXv5 Human Cells-Leukemia Cell Line CML RefSeq (Sep15) RPKM log2',val:'GTEXv5_BM_0915'},
{txt:'GTEXv5 Human Kidney - Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_Kidn_0915'},
{txt:'GTEXv5 Human Cervix-Ectocervix RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerEct_0915'},
{txt:'GTEXv5 Human Heart - Left Ventricle RefSeq (Sep15) RPKM log2',val:'GTEXv5_LV_0915'},
{txt:'GTEXv5 Human Adipose Subcutaneous RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdipSub_0915'},
{txt:'GTEXv5 Human Colon-Sigmoid RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColSig_0915'},
{txt:'GTEXv5 Human Stomach RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sto_0915'},
{txt:'GTEXv5 Human Colon-Transverse RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColTra_0915'},
{txt:'GTEXv5 Human Esophagus - Gastroesophageal Junction RefSeq (Sep15) RPKM log2',val:'GTEXv5_GastJun_0915'},
{txt:'GTEXv5 Human Esophagus - Mucosa RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMu_0915'},
{txt:'GTEXv5 Human Heart - Atrial Appendage RefSeq (Sep15) RPKM log2',val:'GTEXv5_HAA_0915'},
{txt:'GTEXv5 Human Esophagus - Muscularis RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMus_0915'},
{txt:'GTEXv5 Human Liver RefSeq (Sep15) RPKM log2',val:'GTEXv5_Liv_0915'},
{txt:'GTEXv5 Human Brain Substantia Nigra RefSeq (Sep15) RPKM log2',val:'GTEXv5_SubN_0915'},
{txt:'GTEXv5 Human Brain Anterior Cingulate Cortex BA24 RefSeq (Sep15) RPKM log2',val:'GTEXv5_AntCtx_0915'},
{txt:'GTEXv5 Human Brain Caudate Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCa_0915'},
{txt:'GTEXv5 Human Brain Cerebellar Hemisphere RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerH_0915'},
{txt:'GTEXv5 Human Bladder RefSeq (Sep15) RPKM log2',val:'GTEXv5_Bla_0915'},
{txt:'GTEXv5 Human Artery Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtTib_0915'},
{txt:'GTEXv5 Human Brain Cerebellum RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCe_0915'},
{txt:'GTEXv5 Human Artery Coronary RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtCor_0915'},
{txt:'GTEXv5 Human Brain Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCtx_0915'},
{txt:'GTEXv5 Human Brain Frontal Cortex BA9 RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrFr_0915'},
{txt:'GTEXv5 Human Adrenal Gland RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdrGla_0915'},
{txt:'GTEXv5 Human Brain Hippocampus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hip_0915'},
{txt:'GTEXv5 Human Brain Hypothalamus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hiptha_0915'},
{txt:'GTEXv5 Human Artery Aorta RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtAor_0915'},
{txt:'GTEXv5 Human Brain Nucleus Accumbens Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_NuAcc_0915'},
{txt:'GTEXv5 Human Brain Putamen Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_PutB_0915'},
{txt:'GTEXv5 Human Adipose Visceral Omentum RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdiVis_0915'},
{txt:'GTEXv5 Human Brain Spinal Cord Cervical C-1 RefSeq (Sep15) RPKM log2',val:'GTEXv5_SpCo_0915'},
{txt:'GTEXv5 Human Brain Amygdala RefSeq (Sep15) RPKM log2',val:'GTEXv5_Amy_0915'},
{txt:'GTEXv5 Human Lung RefSeq (Sep15) RPKM log2',val:'GTEXv5_Lung_0915'},
{txt:'GTEXv5 Human Muscle - Skeletal RefSeq (Sep15) RPKM log2',val:'GTEXv5_MuSk_0915'},
{txt:'GTEXv5 Human Spleen RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sple_0915'},
{txt:'GTEXv5 Human Thyroid RefSeq (Sep15) RPKM log2',val:'GTEXv5_Thy_0915'},
{txt:'GTEXv5 Human Small Intestine - Terminal Ileum RefSeq (Sep15) RPKM log2',val:'GTEXv5_SInt_0915'},
{txt:'GTEXv5 Human Uterus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ut_0915'},
{txt:'GTEXv5 Human Vagina RefSeq (Sep15) RPKM log2',val:'GTEXv5_Vag_0915'},
{txt:'GTEXv5 Human Skin-Sun Exposed-Lower Leg RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkS_0915'},
{txt:'GTEXv5 Human Skin-Not Sun Exposed-Suprapubic RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkN_0915'},
{txt:'GTEXv5 Human Whole Blood RefSeq (Sep15) RPKM log2',val:'GTEXv5_Wbl_0915'},
{txt:'GTEXv5 Human Salivary Gland Minor RefSeq (Sep15) RPKM log2',val:'GTEXv5_SalGl_0915'},
{txt:'GTEXv5 Human Prostate RefSeq (Sep15) RPKM log2',val:'GTEXv5_Prost_0915'},
{txt:'GTEXv5 Human Pituitary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Pit_0915'},
{txt:'GTEXv5 Human Pancreas RefSeq (Sep15) RPKM log2',val:'GTEXv5_Panc_0915'},
{txt:'GTEXv5 Human Ovary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ov_0915'},
{txt:'GTEXv5 Human Nerve - Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_Tib_0915'},
{txt:'GTEXv5 Human Cells-Transformed Fibroblasts RefSeq (Sep15) RPKM log2',val:'GTEXv5_CTF_0915'},
{txt:'GTEXv5 Human Testis RefSeq (Sep15) RPKM log2',val:'GTEXv5_Test_0915'},
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P3RInv_1111'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) RMA',val:'UTHSC_BXDAged_0615'},
{txt:'CRTD BXD Hippocampal Precursor Cells ILM MouseWG-6_R13 (Dec14) Quantile',val:'CRTD_HipPreCell1214'},
{txt:'UTHSC Elicited Peritoneal Neutrophils Affy MoGene 2.0 ST (Oct14) RMA **',val:'UTHSC-Neut-1014'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Untrimmed',val:'UTHSC_BXD_WB_RNASeq1112'},
{txt:'GTEx Human Thyroid (Mar14) RPKM Log2',val:'GTEx_log2_Thyro_0314'},
{txt:'GTEx Human Ovary (Mar14) RPKM Log2',val:'GTEx_log2_Ovary_0314'},
{txt:'GTEx Human Nucleus Accumbens (Mar14) RPKM Log2',val:'GTEx_log2_Nucle_0314'},
{txt:'GTEx Human Vagina (Mar14) RPKM Log2',val:'GTEx_log2_Vagin_0314'},
{txt:'GTEx Human Nerve - Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Nerve_0314'},
{txt:'GTEx Human Muscle (Mar14) RPKM Log2',val:'GTEx_log2_Muscle_0314'},
{txt:'GTEx Human Lung (Mar14) RPKM Log2',val:'GTEx_log2_Lung_0314'},
{txt:'GTEx Human Coronary (Mar14) RPKM Log2',val:'GTEx_log2_Coron_0314'},
{txt:'GTEx Human Liver (Mar14) RPKM Log2',val:'GTEx_log2_Liver_0314'},
{txt:'GTEx Human Kidney (Mar14) RPKM Log2',val:'GTEx_log2_Kidne_0314'},
{txt:'GTEx Human Hypothalamus (Mar14) RPKM Log2',val:'GTEx_log2_Hypot_0314'},
{txt:'GTEx Human Heart - Left Ventricle (Mar14) RPKM Log2',val:'GTEx_log2_HeartLV_0314'},
{txt:'GTEx Human Pancreas (Mar14) RPKM Log2',val:'GTEx_log2_Pancr_0314'},
{txt:'GTEx Human Pituitary (Mar14) RPKM Log2',val:'GTEx_log2_Pitui_0314'},
{txt:'GTEx Human Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Tibial_0314'},
{txt:'GTEx Human Testis (Mar14) RPKM Log2',val:'GTEx_log2_Testi_0314'},
{txt:'GTEx Human Uterus (Mar14) RPKM Log2',val:'GTEx_log2_Uterus_0314'},
{txt:'GTEx Human Substantia Nigra (Mar14) RPKM Log2',val:'GTEx_log2_Subst_0314'},
{txt:'GTEx Human Whole Blood (Mar14) RPKM Log2',val:'GTEx_log2_WholeB_0314'},
{txt:'GTEx Human Stomach (Mar14) RPKM Log2',val:'GTEx_log2_Stoma_0314'},
{txt:'GTEx Human Spinal Cord (Mar14) RPKM Log2',val:'GTEx_log2_Spina_0314'},
{txt:'GTEx Human Skin-Sun Exposed (Lower leg) (Mar14) RPKM Log2',val:'GTEx_log2_SkinE_0314'},
{txt:'GTEx Human Skin-Not Sun Exposed (Suprapubic) (Mar14) RPKM Log2',val:'GTEx_log2_SkinN_0314'},
{txt:'GTEx Human Subcutaneous (Mar14) RPKM Log2',val:'GTEx_log2_Subcu_0314'},
{txt:'GTEx Human Putamen (Mar14) RPKM Log2',val:'GTEx_log2_Putam_0314'},
{txt:'GTEx Human Prostate (Mar14) RPKM Log2',val:'GTEx_log2_Prost_0314'},
{txt:'GTEx Human Heart - Atrial Appendage (Mar14) RPKM Log2',val:'GTEx_log2_HeartAt_0314'},
{txt:'GTEx Human Adrenal Gland (Mar14) RPKM Log2',val:'GTEx_log2_Adren_0314'},
{txt:'GTEx Human Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_CellsEBV_0314'},
{txt:'GTEx Human Cerebellar Cortex (Mar14) RPKM Log2',val:'GTEx_log2_CerebC_0314'},
{txt:'GTEx Human Cells - Transformed Fibroblasts (Mar14) RPKM Log2',val:'GTEx_log2_CellsTr_0314'},
{txt:'GTEx Human Cells - Leukemia Cell Line (CML) (Mar14) RPKM Log2',val:'GTEx_log2_CellsLe_0314'},
{txt:'GTEx Human Caudate (Mar14) RPKM Log2',val:'GTEx_log2_Cauda_0314'},
{txt:'GTEx Human Breast - Mammary Tissue (Mar14) RPKM Log2',val:'GTEx_log2_Breas_0314'},
{txt:'GTEx Human Blood, Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_Blood_0314'},
{txt:'GTEx Human Aorta (Mar14) RPKM Log2',val:'GTEx_log2_Aorta_0314'},
{txt:'GTEx Human Anterior Cingulate Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Anter_0314'},
{txt:'GTEx Human Cerebellum (Mar14) RPKM Log2',val:'GTEx_log2_CER_0314'},
{txt:'GTEx Human Hippocampus (Mar14) RPKM Log2',val:'GTEx_log2_HIP_0314'},
{txt:'GTEx Human Cerebellar Hemisphere (Mar14) RPKM Log2',val:'GTEx_log2_CerebH_0314'},
{txt:'GTEx Human Colon - Transverse (Mar14) RPKM Log2',val:'GTEx_log2_Colon_0314'},
{txt:'GTEx Human Fallopian Tube (Mar14) RPKM Log2',val:'GTEx_log2_Fallo_0314'},
{txt:'GTEx Human Visceral (Mar14) RPKM Log2',val:'GTEx_log2_Visce_0314'},
{txt:'GTEx Human Frontal Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Front_0314'},
{txt:'GTEx Human Esophagus - Muscularis (Mar14) RPKM Log2',val:'GTEx_log2_EsophMus_0314'},
{txt:'GTEx Human Esophagus - Mucosa (Mar14) RPKM Log2',val:'GTEx_log2_EsophMuc_0314'},
{txt:'GTEx Human Amygdala (Mar14) RPKM Log2',val:'GTEx_log2_AMY_0314'},
{txt:'UTHSC BXD Hippocampus Ion Torrent microRNA (Feb14) RPKM **',val:'UTHSC_BXD_Hip_miRNASeq0214'},
{txt:'GSE15745 NIH Human Brain Temporal Cerebral ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_TC0510'},
{txt:'GSE15745 NIH Human Brain Pons ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Po0510'},
{txt:'GSE15745 NIH Human Brain Cerebellum ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Cer0510'},
{txt:'GSE15745 NIH Human Brain Prefrontal Cortex ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_PFC0510'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD+HFD (Jun14) **',val:'EPFL-LISP_MusPMetCDHFD1213'},
{txt:'UCLA GSE27483 BXD Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXD_Femur_0113_RSN'},
{txt:'GSE11882 UCI Human Entorhinal Cortex Affy U133 Plus2 (Sep13) RMA',val:'UCI_EC_0913'},
{txt:'GSE11882 UCI Human Postcentral Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_PCG_0913'},
{txt:'GSE11882 UCI Human Superior Frontal Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_SG_0913'},
{txt:'GSE11882 UCI Human Hippocampus Affy U133 Plus2 (Sep13) RMA',val:'UCI_HC_0913'},
{txt:'UCLA CTB6/B6CTF2 Brain (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_2005'},
{txt:'GSE15222 Human Brain All Cases Myers (Apr09) RankInv',val:'GSE15222_F_RI_0409'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) RMA',val:'B1LI0809R'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_1110'},
{txt:'Super Series GSE23546 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GSE23546HLT0613'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Gene Level **',val:'ScrBXDACC4G0513'},
{txt:'HBTRC-MLC Human Cerebellum Agilent (Jun11) mlratio',val:'HBTRC-MLC_0611'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) RMA',val:'GCB_M2_0505_R'},
{txt:'CANDLE Newborn Cord ILMv6.3 (Jun11) QUANT',val:'CANDLE_NB_0711'},
{txt:'CANDLE Newborn Cord ILM HumanMethylation27 (Mar13) **',val:'CANDLE_Meth27_0313'},
{txt:'UCLA GSE27483 MDP Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_MDP_Femur_0113_RSN'},
{txt:'UCLA GSE27483 AXB/BXA Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_AXB/BXA_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXH Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXH_Femur_0113_RSN'},
{txt:'TSRI DRG Affy Mouse Genome 430 2.0 (Jan13) RMA MDP',val:'TSRI-DRG-AffyMOE430_0113-MDP'},
{txt:'St Jude BXD Popliteal Lymph Node Affy HT MG-430 PM (Sep12) RMA **',val:'STJ_PLN_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA **',val:'PSU-B6D2F2_0812'},
{txt:'Eye M430v2 (Sep08) RMA',val:'Eye_M2_0908_R'},
{txt:'GSE16780 UCLA Mouse MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780MDP_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Adipose (2005) mlratio',val:'UCLA_BHHBF2_ADIPOSE_2005'},
{txt:'UCLA BHHBF2 Brain (2005) mlratio',val:'UCLA_BHHBF2_BRAIN_2005'},
{txt:'UCLA BHHBF2 Liver (2005) mlratio',val:'UCLA_BHHBF2_LIVER_2005'},
{txt:'UCLA BHHBF2 Muscle (2005) mlratio',val:'UCLA_BHHBF2_MUSCLE_2005'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_PG_RMA_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_Adrenal_RMA_0612'},
{txt:'INIA Macaca fasicularis Nucleus Accumbens (Jan10) RMA **',val:'INIA_MacFas_Ac_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Muscle (2005) mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_2005'},
{txt:'INIA Macaca fasicularis Hippocampus (Jan10) RMA **',val:'INIA_MacFas_Hc_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Adipose (2005) mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_2005'},
{txt:'UCLA CTB6/B6CTF2 Liver (2005) mlratio',val:'UCLA_CTB6B6CTF2_LIVER_2005'},
{txt:'INIA Macaca fasicularis Amygdala (Jan10) RMA **',val:'INIA_MacFas_AMG_RMA_0110'},
{txt:'VU BXD Midbrain Agilent SurePrint G3 Mouse GE (May12) Quantile',val:'VUBXDMouseMidBrainQ0512'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1111'},
{txt:'Human Medial Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MFC_0711'},
{txt:'Human Primary Somatosensory (S1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_S1C_0711'},
{txt:'Human Primary Auditory (A1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_A1C_0711'},
{txt:'GN330 Human Amygdala Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_AMY_0711'},
{txt:'Human Cerebellar Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_CBC_0711'},
{txt:'Human Primary Visual Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_V1C_0711'},
{txt:'Human Striatum Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STR_0711'},
{txt:'Human Posterior Superior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STC_0711'},
{txt:'Human Orbital Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_OFC_0711'},
{txt:'Human Mediodorsal Nucleus of Thalamus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MD_0711'},
{txt:'Human Primary Motor (M1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_M1C_0711'},
{txt:'Human Inferior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_ITC_0711'},
{txt:'Human Ventrolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_VFC_0711'},
{txt:'Human Dorsolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_DFC_0711'},
{txt:'Human Posterior Inferior Parietal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_IPC_0711'},
{txt:'Human Hippocampus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_HIP_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLPFC_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLVC_0611'},
{txt:'INIA Amygdala Cohort Affy MoGene 1.0 ST (Mar11) RMA',val:'INIA_AmgCoh_0311'},
{txt:'GSE9588 Human Liver Normal (Mar11) Both Sexes',val:'HLC_0311'},
{txt:'HZI Thelp M430v2 (Feb11) RMA',val:'RTHC_0211_R'},
{txt:'GSE5281 Human Brain Normal Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_N_0709'},
{txt:'OHSU HS-CC Striatum ILM6v1 (Feb11) RankInv',val:'OHSU_HS-CC_ILMStr_0211'},
{txt:'NCSU Drosophila Whole Body (Jan11) RMA',val:'NCSU_DrosWB_LC_RMA_0111'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA MDP',val:'HC_M2_0606_MDP'},
{txt:'OX UK HS ILM6v1.1 Lung (May 2010) RankInv',val:'OXUKHS_ILMLung_RI0510'},
{txt:'OX UK HS ILM6v1.1 Hippocampus (May 2010) RankInv',val:'OXUKHS_ILMHipp_RI0510'},
{txt:'OX UK HS ILM6v1.1 Liver (May 2010) RankInv',val:'OXUKHS_ILMLiver_RI0510'},
{txt:'INIA Macaca fasicularis Prefrontal Cortex (Jan10) RMA **',val:'INIA_MacFas_Pf_RMA_0110'},
{txt:'INIA Macaca fasicularis Brain (Jan10) RMA **',val:'INIA_MacFas_brain_RMA_0110'},
{txt:'UAB Whole body D.m. mRNA control (Oct09) RMA',val:'UAB_DrosWB_LC_RMA_1009'},
{txt:'UMCG Stem Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_HemaStem_ori'},
{txt:'UTHSC CEPH B-cells Illumina (Sep09) RankInv',val:'UT_CEPH_RankInv0909'},
{txt:'Mouse kidney M430v2 Female (Aug06) RMA',val:'MA_M2F_0706_R'},
{txt:'UT Hippocampus Affy RaEx 1.0 Exon (Jul09) RMA',val:'UT_HippRatEx_RMA_0709'},
{txt:'VCU BXD VTA Sal M430 2.0 (Jun09) RMA',val:'VCUSal_0609_R'},
{txt:'NCI Mammary M430v2 (Apr09) RMA',val:'NCI_Mam_Tum_RMA_0409'},
{txt:'NCI Mammary LMT miRNA v2 (Apr09) RMA',val:'NCI_Agil_Mam_Tum_RMA_0409'},
{txt:'MDC/CAS/UCL Liver 230v2 (Dec08) RMA',val:'HXB_Liver_1208'},
{txt:'MDC/CAS/UCL Heart 230_V2 (Dec08) RMA',val:'HXB_Heart_1208'},
{txt:'MDC/CAS/UCL Adrenal 230A (Dec08) RMA',val:'HXB_Adrenal_1208'},
{txt:'UWA Illumina PBL (Nov08) RSN **',val:'Illum_BXD_PBL_1108'},
{txt:'UWA Illumina Thymus (Nov08) RSN **',val:'Illum_BXD_Thy_1108'},
{txt:'Eye AXBXA Illumina V6.2(Oct08) RankInv Beta',val:'Eye_AXBXA_1008_RankInv'},
{txt:'Hippocampus Illumina RSS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSS_1008'},
{txt:'UCLA BXH and BXD Cartilage v2',val:'UCLA_BXHBXD_CARTILAGE_V2'},
{txt:'UCLA BXD and BXH Cartilage v2',val:'UCLA_BXDBXH_CARTILAGE_V2'},
{txt:'UCLA BHF2 Brain Male mlratio',val:'UCLA_BHF2_BRAIN_MALE'},
{txt:'UCLA BHF2 Adipose Male mlratio',val:'UCLA_BHF2_ADIPOSE_MALE'},
{txt:'UCLA BHF2 Muscle Male mlratio **',val:'UCLA_BHF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Liver Male mlratio',val:'UCLA_BHF2_LIVER_MALE'},
{txt:'UCLA BDF2 Liver (1999) mlratio',val:'UCLA_BDF2_LIVER_1999'},
{txt:'Stuart Spleen M430v2 (Nov07) RMA',val:'STSPL_1107_R'},
{txt:'VCU LXS PFC Sal M430A 2.0 (Aug06) RMA',val:'VCUSal_0806_R'},
{txt:'Barley1 Embryo gcRMA SCRI (Dec06)',val:'B139_K_1206_R'},
{txt:'Barley1 Leaf MAS 5.0 SCRI (Dec06)',val:'B30_K_1206_M'},
{txt:'HZI Treg M430v2 (Feb11) RMA',val:'RTC_1106_R'},
{txt:'UIOWA Eye mRNA RAE230v2 (Sep06) RMA',val:'UIOWA_Eye_RMA_0906'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) PDNN',val:'HC_M2CB_1205_P'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) MAS5',val:'SA_M2_0905_M'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Aug05) MAS5',val:'FT_2A_0805_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) MAS5',val:'BRF2_M_0805_M'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) MAS5',val:'KI_2A_0405_M'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) MAS5',val:'LVF2_M_0704_M'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Exon Level',val:'DoDCMMRPRetMoGene2Ex_0515'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Exon Level (Apr14) RMA',val:'UTHSC_GutExL_0414'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction A, HFD Cohorts (Mar 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtAHFD0817'},
{txt:'INIA-UTHSC Midbrain CIE Affy MTA 1.0 Exon Level (Apr17) RMA',val:'INIA_UTHSC_Mid_AffyMTA1_Ex_May17'},
{txt:'EPFL/ETHZ BXD Liver, High Fat Diet (Jun16) Top100 SWATH',val:'EPFLETHZBXDprotHFD0514'},
{txt:'UTHSC Hippocampus Saline Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_Sal_AffyMTA1_Mar17'},
{txt:'UCSD CFW Hippocampus (Jan17) RNA-Seq',val:'UCSD_CFW_HIP_RNA-Seq_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq',val:'UCSD_CFW_SPL_RNA-Seq_0117'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq',val:'UCSD_CFW_PFC_RNA-Seq_0117'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverRMA0413'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleHFDRMA1211'},
{txt:'UTHSC B6D2 Retina Affy MoGene 1.0ST (Sep16) Exon Level RMA **',val:'UTHSC_mm9_B6D2_RetEx_0916'},
{txt:'EPFL/ETHZ BXD Brown Adipose, Isolated Mitochondria Proteome, Chow Diet (Apr16) Light SWATH',val:'EPFL_AdiMitPro0416'},
{txt:'VCU BXD PFC EtOH M430 2.0 (Dec06) RMA',val:'VCUEtOH_1206_R'},
{txt:'VCU BXD NAc CIE Air Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_Nac_CIE_Air_0416'},
{txt:'UCAMC LXS Whole Brain Saline RNA Sequence (Feb16) FPKM **',val:'UCAMC_LXSBrSal_RNA-Seq_0216'},
{txt:'Hippocampus Consortium M430v2 (Jun06) MAS5',val:'HC_M2_0606_M'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Exon Level (Oct13) RMA',val:'EPFLADEL1013'},
{txt:'INIA LCM (11 Regions) CIE/AIR RNA-seq Transcript Level (Dec15)',val:'INIA_LCM_1215'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Set1',val:'UTHSC_SPLs1_RMA_1210'},
{txt:'RTI RCMRC BXD Fecal Metabolites HFD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetHFlog0814'},
{txt:'Hippocampus Mouse Transcriptome Assay 1.0 Gene Level Z-Score (Nov15) RMA **',val:'CMS_Hipp_ZScr_1115'},
{txt:'BIDMC/UTHSC Dev Striatum P14 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P14RInv_1111'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) Exon Level RMA',val:'UTHSC_BXDAgedEx_1116'},
{txt:'UTHSC Elicited Peritoneal Neutrophils Affy MoGene 2.0 ST (Oct14) RMA Exon Level **',val:'UTHSC-Neut_EL-1014'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Trimmed 1.0',val:'UTHSC_BXD_WB_RNASeqtrim1_1112'},
{txt:'GTEx Human Adrenal Gland (Apr14) RPKM',val:'GTEx_Adren_0414'},
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
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA',val:'EPFL-LISPBXDHeCD0114'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites HFD (Jun14) **',val:'EPFL-LISP_MusPMetHFD1213'},
{txt:'UCLA GSE27483 BXD Only Bone Femur ILM Mouse WG-6 v1.1 (Jan13) RSN',val:'UCLA_BXD-on_Femur_0113_RSN'},
{txt:'UCLA CTB6/B6CTF2 Brain Males (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_MALE'},
{txt:'GSE15222 Human Brain Normal Myers (Apr09) RankInv',val:'GSE15222_F_N_RI_0409'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Male',val:'INIA_Hyp_M_RMA_1110'},
{txt:'UL/GSE23352 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA (Jun11) RMA',val:'luCA_GSE23352HLT0613'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Exon Level **',val:'ScrBXDACC4GEx0513'},
{txt:'HBTRC-MLC Human Cerebellum Agilent Normal (Jun11) mlratio',val:'HBTRC-MLC_N_0611'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) PDNN',val:'GCB_M2_0505_P'},
{txt:'CANDLE Newborn Cord ILM HumanMethylation27 (Mar13) Z-Score **',val:'CANDLE_Meth_0313'},
{txt:'IRCM AXB/BXA Mouse Heart ILM MouseRef-8 v2.0 (Feb13) RankInv',val:'IRCM_AXBXA_HRI0213'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Females **',val:'PSU-B6D2F2_F0812'},
{txt:'Eye M430v2 No Mutant/Mutant (Aug12) RMA',val:'gn10'},
{txt:'GSE16780 UCLA Mouse AXB/BXA Liver Affy HT M430A (Sep11) RMA',val:'GSE16780AB_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Adipose Male Only',val:'UCLA_BHHBF2_ADIPOSE_MALE'},
{txt:'UCLA BHHBF2 Liver Male Only',val:'UCLA_BHHBF2_LIVER_MALE'},
{txt:'UCLA BHHBF2 Brain Male Only',val:'UCLA_BHHBF2_BRAIN_MALE'},
{txt:'UCLA BHHBF2 Muscle Male Only',val:'UCLA_BHHBF2_MUSCLE_MALE'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Pituitary_RMA_F_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Adrenal_RMA_F_0612'},
{txt:'UCLA CTB6B6CTF2 Adipose Female mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Liver Female mlratio',val:'UCLA_CTB6B6CTF2_LIVER_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Female mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_FEMALE'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1111'},
{txt:'JAX Liver Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent Normal (Jun11) mlratio',val:'HBTRC-MLPFC_N_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent Normal (Jun11) mlratio',val:'HBTRC-MLVC_N_0611'},
{txt:'INIA Amygdala Affy MoGene 1.0 ST (Nov10) RMA',val:'INIA_Amg_BLA_RMA_1110'},
{txt:'GSE9588 Human Liver Normal (Mar11) Males',val:'HLCM_0311'},
{txt:'GSE5281 Human Brain Alzheimer Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_Alzh_0709'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA MDP',val:'UMUTAffyExon_0209_RMA_MDP'},
{txt:'UAB Whole body D.m. mRNA lead (pbAc) (Oct09) RMA',val:'UAB_DrosWB_LE_RMA_1009'},
{txt:'UMCG Stem Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_HemaStem'},
{txt:'Mouse kidney M430v2 Male (Aug06) RMA',val:'MA_M2M_0706_R'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) MAS5',val:'B1LI0809M5'},
{txt:'VCU BXD VTA EtOH M430 2.0 (Jun09) RMA',val:'VCUEtOH_0609_R'},
{txt:'Monks CEPH B-cells Agilent (Dec04) Log10Ratio',val:'Human_1008'},
{txt:'Hippocampus Illumina RSE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSE_1008'},
{txt:'UCLA BXD and BXH Cartilage',val:'UCLA_BXDBXH_CARTILAGE'},
{txt:'UCLA BXH and BXD Cartilage',val:'UCLA_BXHBXD_CARTILAGE'},
{txt:'UCLA BHF2 Brain Female mlratio',val:'UCLA_BHF2_BRAIN_FEMALE'},
{txt:'UCLA BHF2 Liver Female mlratio',val:'UCLA_BHF2_LIVER_FEMALE'},
{txt:'UCLA BHF2 Muscle Female mlratio **',val:'UCLA_BHF2_MUSCLE_FEMALE'},
{txt:'UCLA BHF2 Adipose Female mlratio',val:'UCLA_BHF2_ADIPOSE_FEMALE'},
{txt:'VCU LXS PFC EtOH M430A 2.0 (Aug06) RMA **',val:'VCUEtOH_0806_R'},
{txt:'Barley1 Embryo MAS 5.0 SCRI (Dec06)',val:'B139_K_1206_M'},
{txt:'Barley1 Leaf gcRMA SCRI (Dec06)',val:'B30_K_1206_R'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) RMA',val:'HC_M2CB_1205_R'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) RMA',val:'SA_M2_0905_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) RMA',val:'BRF2_M_0805_R'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Jun05) RMA 2z+8',val:'FT_2A_0605_Rz'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) RMA 2z+8',val:'KI_2A_0405_Rz'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) RMA',val:'LVF2_M_0704_R'},
{txt:'NCI Mammary mRNA M430 (July04) MAS5',val:'MA_M_0704_M'},
{txt:'EPFL/LISP BXD CD+HFD Gastrointestinal Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'EPFL-LISP_BXD_Col-CD+HFD0917'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction B, Chow Diet Cohorts (Mar 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtBCD0817'},
{txt:'UTHSC Hippocampus Ethanol Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_Et_AffyMTA1_Mar17'},
{txt:'EPFL/LISP BXD HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverHFDRMA0413'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleCDRMA1211'},
{txt:'Full HEI Retina Illumina V6.2 (Apr10) RankInv',val:'Illum_Retina_BXD_RankInv0410'},
{txt:'VCU BXD PFC Et vs Sal M430 2.0 (Dec06) Sscore',val:'VCUSal_1006_R'},
{txt:'VCU BXD NAc CIE Air Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_Nac_CIE_AirZ_0416'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA',val:'HC_M2_0606_R'},
{txt:'EPFL/LISP BXD CD+HFD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA **',val:'EL_BXDCDHFDScWAT_0216'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Set2',val:'UTHSC_SPLs2_RMA_1210'},
{txt:'INIA LCM (11 Regions) BASELINE RNA-seq Transcript Level (Dec15)',val:'INIA_LCMB_1215'},
{txt:'RTI RCMRC BXD Fecal Metabolites CD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetLFlog0814'},
{txt:'EPFL/ETHZ BXD Liver, Chow Diet (Oct14) Top10 SWATH',val:'EPFLETHZBXDprotCD_LS1114'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA',val:'EPFL-LISPBXDHeHFD0114'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD (Jun14) **',val:'EPFL-LISP_MusPMetCD1213'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFMG1013'},
{txt:'UCLA CTB6/B6CTF2 Brain Females (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_FEMALE'},
{txt:'GSE15222 Human Brain Alzheimer Myers (Apr09) RankInv',val:'GSE15222_F_A_RI_0409'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Female',val:'INIA_Hyp_F_RMA_1110'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Gene Level (Dec09) RMA',val:'Striatum_Exon_1212'},
{txt:'UBC/GSE23529 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'UBC-GSE23529HLT0613'},
{txt:'HBTRC-MLC Human Cerebellum Agilent AD (Jun11) mlratio',val:'HBTRC-MLC_AD_0611'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) MAS5',val:'GCB_M2_0505_M'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence Exon Level (Nov12) RPKM',val:'UTHSC_BXD_WB_RNASeqEx1112'},
{txt:'UTHSC B6D2RI Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA',val:'UTHSC_B6D2RI_H_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males **',val:'PSU-B6D2F2_M0812'},
{txt:'GSE16780 UCLA Mouse BXH Liver Affy HT M430A (Sep11) RMA',val:'GSE16780BXH_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Liver Female Only',val:'UCLA_BHHBF2_LIVER_FEMALE'},
{txt:'UCLA BHHBF2 Adipose Female Only',val:'UCLA_BHHBF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHHBF2 Brain Female Only',val:'UCLA_BHHBF2_BRAIN_FEMALE'},
{txt:'UCLA BHHBF2 Muscle Female Only',val:'UCLA_BHHBF2_MUSCLE_FEMALE'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Adrenal_RMA_M_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Males',val:'INIA_Pituitary_RMA_M_0612'},
{txt:'JAX Liver HF Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_HF_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent AD (Jun11) mlratio',val:'HBTRC-MLPFC_AD_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent AD (Jun11) mlratio',val:'HBTRC-MLVC_AD_0611'},
{txt:'INIA Amygdala Affy MoGene 1.0 ST (Nov10) RMA Male',val:'INIA_Amg_BLA_RMA_M_1110'},
{txt:'GSE9588 Human Liver Normal (Mar11) Females',val:'HLCF_0311'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10v2) RankInv',val:'HQFNeoc_1210v2_RankInv'},
{txt:'UFL MDP Hippocampus Antidepressant Affy Mouse 430 2.0 (Aug14) RMA **',val:'UFL-MDP-Hipp0814'},
{txt:'UMCG Progenitor Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_Pro_ori'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) MAS5',val:'B1MI0809M5'},
{txt:'GSE5281 Human Brain Full Liang (Jul09) RMA',val:'GSE5281_F_RMA0709'},
{txt:'VCU BXD VTA Et vs Sal M430 2.0 (Jun09) RMA',val:'VCUEtvsSal_0609_R'},
{txt:'Hippocampus Illumina NOS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOS_1008'},
{txt:'Eye M430v2 Mutant Gpnmb (Sep08) RMA',val:'Eye_M2_0908_R_NB'},
{txt:'UCLA CTB6B6CTF2 Muscle Male mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_MALE'},
{txt:'UCLA CTB6B6CTF2 Liver Male mlratio',val:'UCLA_CTB6B6CTF2_LIVER_MALE'},
{txt:'UCLA CTB6B6CTF2 Adipose Male mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_MALE'},
{txt:'UCLA BXH Cartilage',val:'UCLA_BXH_CARTILAGE'},
{txt:'UCLA BXD Cartilage',val:'UCLA_BXD_CARTILAGE'},
{txt:'UCLA BHF2 Brain (June05) mlratio',val:'UCLA_BHF2_BRAIN_0605'},
{txt:'UCLA BHF2 Adipose (June05) mlratio',val:'UCLA_BHF2_ADIPOSE_0605'},
{txt:'UCLA BHF2 Liver (June05) mlratio',val:'UCLA_BHF2_LIVER_0605'},
{txt:'UCLA BHF2 Muscle (June05) mlratio **',val:'UCLA_BHF2_MUSCLE_0605'},
{txt:'VCU LXS PFC Et vs Sal M430A 2.0 (Aug06) Sscore **',val:'VCUEt_vs_Sal_0806_R'},
{txt:'Barley1 Leaf gcRMAn SCRI (Dec06)',val:'B30_K_1206_Rn'},
{txt:'Mouse kidney M430v2 Sex Balanced (Aug06) RMA',val:'MA_M2_0806_R'},
{txt:'Barley1 Embryo0 gcRMA SCRI (Apr06)',val:'B150_K_0406_R'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) PDNN',val:'SA_M2_0905_P'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) PDNN',val:'BRF2_M_0805_P'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) RMA',val:'KI_2A_0405_R'},
{txt:'NCI Mammary mRNA M430 (July04) RMA',val:'MA_M_0704_R'},
{txt:'EPFL/LISP BXD CD Gastrointestinal Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'EPFL-LISP_BXD_Col-CD0917'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction B, HFD Cohorts (Mar 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtBHFD0817'},
{txt:'UTHSC Hippocampus Stress Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_St_AffyMTA1_Mar17'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverCDRMA0413'},
{txt:'HEI Retina Normal Illumina V6.2 (Apr10) RankInv',val:'G2NEI_ILM_Retina_BXD_RI0410'},
{txt:'VCU BXD PFC CIE Air Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_PFC_CIE_Air_0416'},
{txt:'VCU BXD NAc CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_Nac_CIE_Et_0416'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA',val:'UMUTAffyExon_0209_RMA'},
{txt:'EPFL/LISP BXD HFD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA **',val:'EL_BXDHFDScWAT_0216'},
{txt:'EPFL/ETHZ BXD Liver, High Fat Diet Diet (Oct14) Top10 SWATH',val:'EPFLETHZBXDprotHF_LS1114'},
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA',val:'EPFL-LISPBXDHeCDEx0114'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFMEx1013'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080913',val:'INIA_Hyp_PCA_0813_v4'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Exon Level (Dec09) RMA',val:'Striatum_Exon_0209'},
{txt:'GRNG/GSE23545 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GRNG-GSE23545HLT0613'},
{txt:'HBTRC-MLC Human Cerebellum Agilent HD (Jun11) mlratio',val:'HBTRC-MLC_HD_0611'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) RMA',val:'CB_M_0305_R'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleRMA_Ex1112'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males Aged 200 **',val:'PSU-B6D2F2_M2000812'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_PG_RMA_Ex_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_Adrenal_RMA_Ex_0612'},
{txt:'JAX Liver 6C Affy M430 2.0 (Jul11) MDP',val:'JAX_CSB_L_6C_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent HD (Jun11) mlratio',val:'HBTRC-MLPFC_HD_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent HD (Jun11) mlratio',val:'HBTRC-MLVC_HD_0611'},
{txt:'INIA Amygdala Affy MoGene 1.0 ST (Nov10) RMA Female',val:'INIA_Amg_BLA_RMA_F_1110'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Males',val:'UTHSC_SPL_RMA_1210M'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10) RankInv',val:'HQFNeoc_1210_RankInv'},
{txt:'UMCG Progenitor Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_Pro'},
{txt:'Barley1 Leaf MOCK TTKS (Aug09) RMA',val:'B1MI0809R'},
{txt:'GSE5281 Human Brain Best 102 Liang (Jul09) RMA',val:'GSE5281_RMA0709'},
{txt:'Hippocampus Illumina NOE (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NOE_1008'},
{txt:'Eye M430v2 WT Gpnmb (Sep08) RMA',val:'Eye_M2_0908_R_ND'},
{txt:'UCHSC BXD Whole Brain M430 2.0 (Nov06) RMA',val:'BR_M2_1106_R'},
{txt:'Mouse Kidney M430v2 Sex Balanced (Aug06) PDNN',val:'MA_M2_0806_P'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) PDNN',val:'BRF2_M_0304_P'},
{txt:'EPFL/LISP BXD HFD Gastrointestinal Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'EPFL-LISP_BXD_Col-HFD0917'},
{txt:'UTHSC Hippocampus Ethanol-Stress Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_EtSt_AffyMTA1_Mar17'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level',val:'EPFLMouseLiverBothExRMA0413'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Mar16) RMA Gene Level',val:'DoDTATRCRetBLMoGene2_0316'},
{txt:'VCU BXD PFC CIE Air Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_PFC_CIE_AirZ_0416'},
{txt:'VCU BXD NAc CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_Nac_CIE_EtZ_0416'},
{txt:'EPFL/LISP BXD CD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA **',val:'EL_BXDCDScWAT_0216'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD+HFD (Jun14)',val:'EPFL-LISP_LivPMetCDHFD1213'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 NOS Balanced (Feb17) RankInv',val:'UTHSC_ILM_BXD_hipp_NOSb_0217'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins CD+HFD (Feb14) SRM',val:'EPFLBXDprotCD-CDHFDRPN0214'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA',val:'EPFL-LISPBXDHeHFDEx0114'},
{txt:'UTHSC WGU88 Female Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFFG1013'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080813',val:'INIA_Hyp_PCA_0813_v3'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) PDNN',val:'CB_M_0305_P'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleHFDRMAEx1112'},
{txt:'Harrill-Rusyn MDP Liver Acetaminophen Tox Study (G4121A, 2009)',val:'JAX_liver_agil_MDP-0113'},
{txt:'INIA Amygdala Exon Affy MoGene 1.0 ST (Nov10) RMA',val:'INIA_Amg_BLA_Ex-RMA_1110'},
{txt:'HQF BXD Striatum ILM6.1 (Dec10v2) RankInv',val:'UTHSC_Striatum_RankInv_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Females',val:'UTHSC_SPL_RMA_1210F'},
{txt:'UMCG Erythroid Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_Eryth_ori'},
{txt:'Hippocampus Illumina NON (Oct08) RankInv beta',val:'Illum_LXS_Hipp_NON_1008'},
{txt:'Eye M430v2 Mutant Tyrp1 (Sep08) RMA',val:'Eye_M2_0908_R_MT'},
{txt:'HQF BXD Neocortex ILM6v1.1 (Feb08) RankInv',val:'HQFNeoc_0208_RankInv'},
{txt:'Mouse Kidney M430v2 (Jul06) RMA',val:'MA_M2_0706_R'},
{txt:'INIA Brain mRNA M430 (Jun06) RMA',val:'IBR_M_0606_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) MAS5',val:'BRF2_M_0304_M'},
{txt:'DoD Retina Blast vs Normal Retina Affy MoGene 2.0 ST (Apr16) RMA Gene Level',val:'DoDRetBlastvsNormal_0416'},
{txt:'VCU BXD PFC CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_PFC_CIE_Et_0416'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites HFD (Jun14)',val:'EPFL-LISP_LivPMetHFD1213'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 NOE Balanced (Feb17) RankInv',val:'UTHSC_ILM_BXD_hipp_NOEb_0217'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins CD (Feb14) SRM',val:'EPFLBXDprotCDRPN0214'},
{txt:'UT-VGX Hepatocytes Affy Mouse Gene 1.0 ST Gene Level (Oct14) RMA',val:'UTHSC-VGX_MmBXDHepatocytesRMA1014'},
{txt:'UTHSC WGU88 Female Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFFEx1013'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080513',val:'INIA_Hyp_PCA_0813_v2'},
{txt:'VCU BXD NAc EtOH M430 2.0 (Oct07) RMA **',val:'VCUEtOH_1007_R'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) MAS5',val:'CB_M_0305_M'},
{txt:'EPFL/LISP BXD CD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleCDRMAEx1112'},
{txt:'HQF BXD Striatum ILM6.1 (Dec10) RankInv',val:'UTHSC_Str_RankInv_1210'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Exon Level',val:'UTHSC_SPL_RMAEx_1210'},
{txt:'UMCG Erythroid Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_Eryth'},
{txt:'Eye M430v2 WT Tyrp1 (Sep08) RMA',val:'Eye_M2_0908_R_WT'},
{txt:'Hippocampus Illumina (Aug07) LOESS',val:'Illum_LXS_Hipp_loess0807'},
{txt:'Mouse Kidney M430v2 (Jul06) PDNN',val:'MA_M2_0706_P'},
{txt:'INIA Brain mRNA M430 (Jan06) PDNN',val:'IBR_M_0106_P'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1110'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430A (Mar04) RMA',val:'BRF2_M_0304_R'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Mar16) RMA Exon Level',val:'DoDTATRCRetBLMoGene2E_0316'},
{txt:'VCU BXD PFC CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_PFC_CIE_EtZ_0416'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD (Jun14)',val:'EPFL-LISP_LivPMetCD1213'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 RSS Balanced (Feb17) RankInv',val:'UTHSC_ILM_BXD_hipp_RSSb_0217'},
{txt:'EPFL/LISP BXD Liver, Soluble Proteins HFD (Feb14) SRM',val:'EPFLBXDprotHFDRPN0214'},
{txt:'UT-VGX Hepatocytes Affy Mouse Gene 1.0 ST Exon Level (Oct14) RMA',val:'UT-VGX_HEL1014'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080213',val:'INIA_Hyp_PCA_0813'},
{txt:'VCU BXD NAc EtOH vs Sal M430 2.0 (Oct07) Sscore **',val:'VCUSal_1007_R'},
{txt:'SJUT Cerebellum mRNA M430 (Oct04) RMA',val:'CB_M_1004_R'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Oct10) RMA',val:'UTHSC_SPL_RMA_1010'},
{txt:'UMCG Myeloid Cells ILM6v1.1 (Apr09) original',val:'UMCG_0907_Myeloid_ori'},
{txt:'Eye M430v2 WT WT (Sep08) RMA',val:'Eye_M2_0908_WTWT'},
{txt:'HQF BXD Striatum ILM6.1 (Nov07) RankInv',val:'UTHSC_1107_RankInv'},
{txt:'Hippocampus Illumina (Aug07) LOESS_NB',val:'Illum_LXS_Hipp_loess_nb0807'},
{txt:'INIA Brain mRNA M430 (Jan06) RMA',val:'IBR_M_0106_R'},
{txt:'BIDMC/UTHSC Dev Neocortex P14 ILMv6.2 (Nov10) RankInv',val:'DevNeocortex_ILM6.2P14RInv_1110'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites HFD (Jun14) Log2',val:'EPFL-LISP_LivPMetlog2HFD1213'},
{txt:'ONC HEI Retina (April 2012) RankInv',val:'ONCRetILM6_0412'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 RSE Balanced (Feb17) RankInv',val:'UTHSC_ILM_BXD_hipp_RSEb_0217'},
{txt:'HZI Lung M430v2 (Apr08) RMA',val:'HZI_0408_R'},
{txt:'GSE16780 UCLA Hybrid MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780_UCLA_ML0911'},
{txt:'INIA Hypothalamus Exon Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_Ex-1110'},
{txt:'VCU BXD NAc CIE Air M430 2.0 (Jan13) RMA **',val:'VCU_NAc_Air_0113_R'},
{txt:'SJUT Cerebellum mRNA M430 (Oct04) PDNN',val:'CB_M_1004_P'},
{txt:'VCU BXD PFC EtOH vs CIE Air M430 2.0 (Jan11) Sscore **',val:'VCU_PF_AvE_0111_Ss'},
{txt:'UTK Spleen ILM6.1 (Jan10) VST',val:'UTK_BXDSpl_VST_0110'},
{txt:'UMCG Myeloid Cells ILM6v1.1 (Apr09) transformed',val:'UMCG_0907_Myeloid'},
{txt:'Hippocampus Illumina (Aug07) QUANT',val:'Illum_LXS_Hipp_quant0807'},
{txt:'UTHSC Brain mRNA U74Av2 (Nov05) PDNN',val:'BR_U_1105_P'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) MAS5 Clean',val:'SA_M2_0405_MC'},
{txt:'Howell et al. 2011, DBA/2J Glaucoma Optic Nerve Head M430 2.0 (Dec12) RMA',val:'DBA2J-ONH-1212'},
{txt:'DoD Retina Blast vs Normal Retina Affy MoGene 2.0 ST (Apr16) RMA Exon Level **',val:'DoDRetBlastvsNormalEx_0416'},
{txt:'EPFL/LISP BXD Liver Polar Metabolites CD (Jun14) Log2',val:'EPFL-LISP_LivPMetlog2CD1213'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 NOE Balanced (Feb16) RankInv',val:'UTHSC_ILM_BXD_hipp_NOEb_0216'},
{txt:'HZI Lung M430v2 (Apr08) MAS5',val:'HZI_0408_M'},
{txt:'SUH BXD Liver CCl4-treated Affy Mouse Gene 1.0 ST (Jun11) RMA',val:'SUH_Liv_RMA_0611'},
{txt:'VCU BXD NAc CIE EtOH M430 2.0 (Jan13) RMA **',val:'VCU_NAc_Et_0113_R'},
{txt:'SJUT Cerebellum mRNA M430 (Oct04) MAS5',val:'CB_M_1004_M'},
{txt:'VCU BXD PFC CIE EtOH M430 2.0 (Jan11) RMA **',val:'VCU_PF_Et_0111_R'},
{txt:'IoP Affy MOE 430v2 Spleen (May09) RMA',val:'IoP_SPL_RMA_0509'},
{txt:'Hippocampus Illumina (Aug07) QUANT_NB',val:'Illum_LXS_Hipp_quant_nb0807'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) MAS5',val:'BR_U_0805_M'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) RMA Clean',val:'SA_M2_0405_RC'},
{txt:'GNF Stem Cells U74Av2 (Mar04) RMA',val:'HC_U_0304_R'},
{txt:'Howell et al. 2011, DBA/2J Glaucoma Retina  M430 2.0 (Sep11) RMA',val:'BXD_GLA_0911'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 RSE Balanced (Feb16) RankInv',val:'UTHSC_ILM_BXD_hipp_RSEb_0216'},
{txt:'HZI Lung Flu Infected BXD (Nov16) RNA-Seq **',val:'HZI_LungBXD_RNA-Seq_1116'},
{txt:'SUH BXD Liver CCl4-treated Affy Mouse Gene 1.0 ST Exon Level (Jun11) RMA',val:'SUH_Liv_RMAEx_0611'},
{txt:'VCU BXD NAc EtOH vs CIE Air M430 2.0 (Jan13) Sscore **',val:'VCU_NAc_AvE_0113_Ss'},
{txt:'SJUT Cerebellum mRNA M430 (Oct03) MAS5',val:'CB_M_1003_M'},
{txt:'VCU BXD PFC CIE Air M430 2.0 (Jan11) RMA **',val:'VCU_PF_Air_0111_R'},
{txt:'B6D2 ONC Retina (April 2012) RankInv **',val:'B6D2ONCILM_0412'},
{txt:'UWA Illumina Spleen (Nov08) RSN **',val:'Illum_BXD_Spl_1108'},
{txt:'Hippocampus Illumina (Aug07) RSN',val:'Illum_LXS_Hipp_rsn0807'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) PDNN',val:'BR_U_0805_P'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) PDNN Clean',val:'SA_M2_0405_PC'},
{txt:'UTHSC BXD Hippocampus ILM v6.1 RSS Balanced (Feb16) RankInv',val:'UTHSC_ILM_BXD_hipp_RSSb_0216'},
{txt:'HZI PR8M-Infected Lungs Females RNAseq (Oct14) RPKM Log2 **',val:'HZI_PR8M-F_1014'},
{txt:'UBC/CMMT BXD Cerebellum All Ages Combined ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDCerILM0513'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Both Sexes',val:'LV_G_0106_B'},
{txt:'G2 HEI ONC Retina Illumina V6.2 (Sep11) RankInv **',val:'G2HEIONCRetILM6_0911'},
{txt:'Hippocampus Illumina (Aug07) RSN_NB',val:'Illum_LXS_Hipp_rsn_nb0807'},
{txt:'UTHSC Brain mRNA U74Av2 (Aug05) RMA',val:'BR_U_0805_R'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) SScore',val:'SA_M2_0405_SS'},
{txt:'UTHSC Hippocampus Illumina v6.1 All Combined (Nov12) RankInv',val:'UT_ILM_BXD_hipp_5T_1112'},
{txt:'UBC/CMMT BXD E12 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDG12CerILM0513'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Males',val:'LV_G_0106_M'},
{txt:'HZI PR8M-Infected Lungs Agilent4x44 (Apr12) Quantile Females **',val:'HZI_PR8M_Q_0612'},
{txt:'HEI ONC vs Control Retina Illumina V6.2 (Sep11) RankInv **',val:'HEIONCvsCRetILM6_0911'},
{txt:'Hippocampus Illumina (May07) RankInv',val:'Hipp_Illumina_RankInv_0507'},
{txt:'HBP Rosen Striatum M430V2 (Apr05) RMA Orig',val:'SA_M2_0405_RR'},
{txt:'INIA Brain mRNA M430 (Feb04) PDNN',val:'CB_M_0204_P'},
{txt:'UBC/CMMT BXD E15 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDG15CerILM0513'},
{txt:'UNC Agilent G4121A Liver LOWESS Stanford (Jan06) Females',val:'LV_G_0106_F'},
{txt:'HZI Lung Time Course Flu PR8M (Mar13) Schughart **',val:'HZI_LTCF_0313'},
{txt:'UTHSC Hippocampus Illumina v6.1 NON (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NON_1112'},
{txt:'UBC/CMMT BXD E18 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDG18CerILM0513'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Both Sexes',val:'GenEx_BXD_liverEt_M5_0912'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOS (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NOS_1112'},
{txt:'UBC/CMMT BXD P0 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP00CerILM0513'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Males',val:'GenEx_BXD_liverEt_M5M_0912'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOE (Nov12) RankInv',val:'UT_ILM_BXD_hipp_NOE_1112'},
{txt:'UBC/CMMT BXD P3 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP03CerILM0513'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Sep12) MAS5 Females',val:'GenEx_BXD_liverEt_M5F_0912'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSS (Nov12) RankInv',val:'UT_ILM_BXD_hipp_RSS_1112'},
{txt:'UBC/CMMT BXD P6 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP06CerILM0513'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Both Sexes',val:'GenEx_BXD_liverEt_RMA_0211'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSE (Nov12) RankInv',val:'UT_ILM_BXD_hipp_RSE_1112'},
{txt:'UBC/CMMT BXD P9 Cerebellum ILM Mouse WG-6 v2.0 (May13) RankInv **',val:'CMMTUBCBXDP09CerILM0513'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Males',val:'GenEx_BXD_liverEt_RMA_M_0211'},
{txt:'UTHSC Hippocampus Illumina v6.1 NON (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NON_0909'},
{txt:'GenEx BXD EtOH Liver Affy M430 2.0 (Feb11) RMA Females',val:'GenEx_BXD_liverEt_RMA_F_0211'},
{txt:'GenEx BXD EtOH Cerebellum Affy M430 2.0 (Feb13) RMA Both Sexes **',val:'GenEx_BXD_CerebEt_RMA_0213'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOS (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NOS_0909'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Both Sexes',val:'GenEx_BXD_liverSal_RMA_0211'},
{txt:'GenEx BXD EtOH Cerebellum Affy M430 2.0 (Feb13) RMA Females **',val:'GenEx_BXD_CerebEt_RMA_F_0213'},
{txt:'UTHSC Hippocampus Illumina v6.1 NOE (Sep09) RankInv',val:'UT_ILM_BXD_hipp_NOE_0909'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Males',val:'GenEx_BXD_liverSal_RMA_M_0211'},
{txt:'GenEx BXD EtOH Cerebellum Affy M430 2.0 (Feb13) RMA Males **',val:'GenEx_BXD_CerebEt_RMA_M_0213'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSS (Sep09) RankInv',val:'UT_ILM_BXD_hipp_RSS_0909'},
{txt:'GenEx BXD Sal Liver Affy M430 2.0 (Feb11) RMA Females',val:'GenEx_BXD_liverSal_RMA_F_0211'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Both Sexes **',val:'GenEx_BXD_CerebSal_RMA_0213'},
{txt:'UTHSC Hippocampus Illumina v6.1 RSE (Sep09) RankInv',val:'UT_ILM_BXD_hipp_RSE_0909'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Females **',val:'GenEx_BXD_CerebSal_RMA_F_0213'},
{txt:'UTHSC BXD Liver Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'UTHSC-BXD-Liv-0917'},
{txt:'UTHSC BXD Aged Hippocampus Affy MoGene1.0 ST (May15) RMA Gene Level **',val:'UTHSC_BXD_AgeHipp0515'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Males **',val:'GenEx_BXD_CerebSal_RMA_M_0213'},
{txt:'UTHSC BXD Aged Hippocampus rev3 Affy Mouse Gene 1.0 ST (Sep12) RMA **',val:'UTHSC_BXD_HArev3_0912'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA Exon Level **',val:'UTHSC_BXD_H_0912'},
{txt:'GTEx_v5 Published Phenotypes',val:'GTEx_v5Publish'},
{txt:'HCP Published Phenotypes',val:'HCPPublish'},
{txt:'HSB Published Phenotypes',val:'HSBPublish'},
{txt:'Aging-Brain-UCI Published Phenotypes',val:'Aging-Brain-UCIPublish'},
{txt:'AD-cases-controls-Myers Published Phenotypes',val:'AD-cases-controls-MyersPublish'},
{txt:'AD-cases-controls-Myers Genotypes',val:'AD-cases-controls-MyersGeno'},
{txt:'CANDLE Published Phenotypes',val:'CANDLEPublish'},
{txt:'HLC Published Phenotypes',val:'HLCPublish'},
{txt:'TIGEM-Retina-RNA-Seq Published Phenotypes',val:'TIGEM-Retina-RNA-SeqPublish'},
{txt:'Islets-Gerling Published Phenotypes',val:'Islets-GerlingPublish'},
{txt:'AIL Published Phenotypes',val:'AILPublish'},
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
{txt:'CIE-RMA Published Phenotypes',val:'CIE-RMAPublish'},
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
[1,49,112,634],
[1,49,3,47],
[1,49,4,72],
[1,49,5,66],
[1,49,6,74],
[1,49,7,57],
[1,49,8,69],
[1,49,9,60],
[1,49,12,43],
[1,49,14,41],
[1,49,16,58],
[1,49,17,42],
[1,49,19,91],
[1,49,20,64],
[1,49,21,59],
[1,49,22,62],
[1,49,23,45],
[1,49,24,48],
[1,49,25,50],
[1,49,26,63],
[1,49,31,51],
[1,49,32,52],
[1,49,33,54],
[1,49,35,40],
[1,49,37,65],
[1,49,39,53],
[1,49,40,46],
[1,49,45,67],
[1,49,46,68],
[1,49,49,44],
[1,49,54,55],
[1,49,56,75],
[1,49,64,76],
[1,49,66,90],
[1,49,69,70],
[1,49,71,89],
[1,49,72,88],
[1,49,74,87],
[1,49,85,86],
[1,49,86,71],
[1,49,89,85],
[1,49,90,83],
[1,49,91,82],
[1,49,92,79],
[1,49,93,73],
[1,49,94,77],
[1,49,95,49],
[1,49,97,56],
[1,49,102,92],
[1,49,104,78],
[1,49,105,61],
[1,49,106,80],
[1,49,107,81],
[1,49,110,84],
[1,50,3,121],
[1,50,3,316],
[1,50,4,140],
[1,50,4,323],
[1,50,5,125],
[1,50,5,278],
[1,50,6,144],
[1,50,6,279],
[1,50,7,134],
[1,50,7,280],
[1,50,8,133],
[1,50,8,281],
[1,50,10,132],
[1,50,10,282],
[1,50,14,131],
[1,50,14,283],
[1,50,16,130],
[1,50,16,284],
[1,50,17,126],
[1,50,17,285],
[1,50,18,129],
[1,50,18,286],
[1,50,19,128],
[1,50,19,287],
[1,50,20,127],
[1,50,20,288],
[1,50,21,137],
[1,50,21,289],
[1,50,22,135],
[1,50,22,290],
[1,50,25,138],
[1,50,25,291],
[1,50,26,105],
[1,50,26,292],
[1,50,32,143],
[1,50,32,293],
[1,50,33,142],
[1,50,33,294],
[1,50,35,139],
[1,50,35,295],
[1,50,37,141],
[1,50,37,296],
[1,50,39,124],
[1,50,39,297],
[1,50,40,109],
[1,50,40,298],
[1,50,45,136],
[1,50,45,299],
[1,50,46,108],
[1,50,46,300],
[1,50,49,107],
[1,50,49,301],
[1,50,54,106],
[1,50,54,302],
[1,50,56,104],
[1,50,56,303],
[1,50,64,103],
[1,50,64,304],
[1,50,66,102],
[1,50,66,305],
[1,50,69,100],
[1,50,69,306],
[1,50,71,99],
[1,50,71,307],
[1,50,72,110],
[1,50,72,308],
[1,50,74,111],
[1,50,74,309],
[1,50,85,123],
[1,50,85,310],
[1,50,86,122],
[1,50,86,311],
[1,50,90,120],
[1,50,90,312],
[1,50,91,119],
[1,50,91,313],
[1,50,93,118],
[1,50,93,314],
[1,50,95,117],
[1,50,95,315],
[1,50,97,115],
[1,50,97,317],
[1,50,102,113],
[1,50,102,318],
[1,50,104,98],
[1,50,104,319],
[1,50,105,112],
[1,50,105,320],
[1,50,106,114],
[1,50,106,321],
[1,50,107,101],
[1,50,107,322],
[1,50,110,116],
[1,50,110,324],
[1,51,112,635],
[1,52,22,148],
[1,52,75,147],
[1,52,80,149],
[1,52,101,146],
[1,53,112,636],
[1,53,6,191],
[1,53,20,192],
[1,53,28,201],
[1,53,45,203],
[1,53,47,199],
[1,53,59,188],
[1,53,60,197],
[1,53,70,196],
[1,53,78,202],
[1,53,79,195],
[1,53,81,190],
[1,53,82,198],
[1,53,83,189],
[1,53,84,193],
[1,53,96,194],
[1,53,109,200],
[1,54,112,637],
[1,54,30,152],
[1,54,45,155],
[1,54,77,153],
[1,54,98,154],
[1,55,22,162],
[1,55,22,333],
[1,55,22,402],
[1,55,22,459],
[1,55,80,204],
[1,55,80,351],
[1,55,80,415],
[1,55,80,466],
[1,55,84,205],
[1,55,84,352],
[1,55,84,416],
[1,55,84,467],
[1,56,112,638],
[1,56,113,639],
[1,56,13,157],
[1,56,13,329],
[1,56,13,398],
[1,57,13,209],
[1,57,13,355],
[1,57,13,423],
[1,57,13,473],
[1,58,112,640],
[1,58,61,165],
[1,58,61,335],
[1,58,68,164],
[1,59,112,641],
[1,59,54,207],
[1,59,54,354],
[1,59,54,418],
[1,60,56,160],
[1,60,56,331],
[1,60,56,401],
[1,60,56,458],
[1,61,57,220],
[1,61,57,362],
[1,62,112,642],
[1,62,88,27],
[1,63,112,643],
[1,63,48,14],
[2,36,6,185],
[2,36,13,217],
[2,36,45,182],
[2,36,69,180],
[2,36,80,216],
[3,1,112,644],
[3,1,45,3],
[3,1,80,1],
[3,1,96,2],
[3,2,113,645],
[3,2,58,225],
[3,2,58,379],
[3,2,58,443],
[3,3,112,646],
[3,3,113,647],
[3,3,11,167],
[3,3,34,231],
[3,3,41,16],
[3,3,41,336],
[3,3,54,18],
[3,3,54,339],
[3,4,112,648],
[3,4,113,649],
[3,4,54,251],
[3,4,54,378],
[3,5,112,650],
[3,5,113,651],
[3,6,113,652],
[3,6,13,249],
[3,6,13,375],
[3,6,13,441],
[3,6,13,478],
[3,6,13,504],
[3,6,13,524],
[3,7,112,653],
[3,7,113,654],
[3,7,64,171],
[3,7,64,337],
[3,7,64,406],
[3,7,64,462],
[3,9,113,655],
[3,9,54,239],
[3,10,113,656],
[3,10,96,247],
[3,10,96,374],
[3,10,96,440],
[3,11,113,657],
[3,11,1,174],
[3,11,1,340],
[3,11,1,409],
[3,11,13,175],
[3,11,13,342],
[3,11,13,410],
[3,11,54,176],
[3,11,54,341],
[3,11,54,408],
[3,11,64,177],
[3,11,64,343],
[3,11,64,411],
[3,12,112,658],
[3,12,113,659],
[3,12,1,236],
[3,12,1,369],
[3,12,1,433],
[3,12,13,235],
[3,12,13,366],
[3,12,13,432],
[3,12,54,238],
[3,12,54,367],
[3,12,54,434],
[3,12,64,237],
[3,12,64,368],
[3,12,64,435],
[3,13,112,660],
[3,13,113,661],
[3,13,1,34],
[3,13,1,269],
[3,13,1,389],
[3,13,1,452],
[3,13,1,485],
[3,13,2,30],
[3,13,2,264],
[3,13,5,179],
[3,13,5,345],
[3,13,5,412],
[3,13,5,464],
[3,13,6,206],
[3,13,6,353],
[3,13,6,417],
[3,13,6,468],
[3,13,6,495],
[3,13,11,151],
[3,13,11,327],
[3,13,11,396],
[3,13,11,455],
[3,13,11,490],
[3,13,11,511],
[3,13,13,97],
[3,13,13,277],
[3,13,13,404],
[3,13,13,476],
[3,13,13,503],
[3,13,13,522],
[3,13,13,539],
[3,13,13,553],
[3,13,13,566],
[3,13,13,579],
[3,13,13,587],
[3,13,13,596],
[3,13,15,234],
[3,13,15,364],
[3,13,15,431],
[3,13,22,163],
[3,13,22,334],
[3,13,22,403],
[3,13,22,460],
[3,13,22,492],
[3,13,22,514],
[3,13,22,533],
[3,13,22,548],
[3,13,22,562],
[3,13,22,574],
[3,13,22,583],
[3,13,22,590],
[3,13,22,597],
[3,13,22,601],
[3,13,22,604],
[3,13,22,607],
[3,13,22,610],
[3,13,22,613],
[3,13,22,617],
[3,13,22,620],
[3,13,22,623],
[3,13,22,626],
[3,13,22,628],
[3,13,22,631],
[3,13,34,172],
[3,13,34,338],
[3,13,34,426],
[3,13,34,475],
[3,13,34,500],
[3,13,34,519],
[3,13,34,536],
[3,13,34,555],
[3,13,34,569],
[3,13,36,38],
[3,13,36,272],
[3,13,36,392],
[3,13,38,6],
[3,13,38,253],
[3,13,38,380],
[3,13,38,444],
[3,13,38,479],
[3,13,41,15],
[3,13,41,325],
[3,13,41,394],
[3,13,41,454],
[3,13,41,489],
[3,13,42,219],
[3,13,42,358],
[3,13,42,421],
[3,13,42,471],
[3,13,42,498],
[3,13,42,518],
[3,13,42,535],
[3,13,42,551],
[3,13,42,568],
[3,13,43,95],
[3,13,44,145],
[3,13,45,35],
[3,13,45,268],
[3,13,45,388],
[3,13,45,451],
[3,13,45,487],
[3,13,45,508],
[3,13,45,528],
[3,13,45,543],
[3,13,45,558],
[3,13,45,570],
[3,13,45,581],
[3,13,45,589],
[3,13,45,600],
[3,13,45,603],
[3,13,45,606],
[3,13,45,609],
[3,13,45,612],
[3,13,45,615],
[3,13,45,618],
[3,13,45,621],
[3,13,45,624],
[3,13,45,627],
[3,13,45,630],
[3,13,45,632],
[3,13,45,633],
[3,13,46,159],
[3,13,46,330],
[3,13,46,399],
[3,13,46,456],
[3,13,46,491],
[3,13,46,512],
[3,13,46,531],
[3,13,46,546],
[3,13,49,221],
[3,13,49,359],
[3,13,49,438],
[3,13,49,477],
[3,13,49,502],
[3,13,49,521],
[3,13,52,229],
[3,13,53,7],
[3,13,53,254],
[3,13,53,381],
[3,13,53,445],
[3,13,53,486],
[3,13,53,507],
[3,13,53,527],
[3,13,53,541],
[3,13,53,557],
[3,13,54,20],
[3,13,54,261],
[3,13,54,383],
[3,13,54,447],
[3,13,54,481],
[3,13,54,510],
[3,13,54,530],
[3,13,54,545],
[3,13,54,560],
[3,13,54,572],
[3,13,54,584],
[3,13,54,591],
[3,13,54,598],
[3,13,54,602],
[3,13,54,605],
[3,13,54,608],
[3,13,54,611],
[3,13,54,614],
[3,13,54,616],
[3,13,54,619],
[3,13,54,622],
[3,13,54,625],
[3,13,55,12],
[3,13,55,256],
[3,13,55,393],
[3,13,55,453],
[3,13,55,488],
[3,13,55,509],
[3,13,55,529],
[3,13,56,544],
[3,13,56,559],
[3,13,56,571],
[3,13,56,582],
[3,13,56,592],
[3,13,56,599],
[3,13,62,186],
[3,13,63,150],
[3,13,63,326],
[3,13,63,395],
[3,13,64,24],
[3,13,64,262],
[3,13,64,384],
[3,13,64,461],
[3,13,64,493],
[3,13,64,515],
[3,13,65,187],
[3,13,65,349],
[3,13,65,419],
[3,13,65,470],
[3,13,65,501],
[3,13,65,523],
[3,13,65,540],
[3,13,67,96],
[3,13,67,276],
[3,13,69,32],
[3,13,69,266],
[3,13,69,387],
[3,13,69,450],
[3,13,69,484],
[3,13,69,513],
[3,13,69,532],
[3,13,69,547],
[3,13,69,561],
[3,13,69,573],
[3,13,74,178],
[3,13,74,344],
[3,13,74,413],
[3,13,74,463],
[3,13,76,170],
[3,13,80,31],
[3,13,80,265],
[3,13,80,386],
[3,13,80,449],
[3,13,80,483],
[3,13,80,506],
[3,13,80,526],
[3,13,80,549],
[3,13,80,563],
[3,13,80,575],
[3,13,88,5],
[3,13,88,252],
[3,13,88,385],
[3,13,88,448],
[3,13,88,482],
[3,13,88,505],
[3,13,88,525],
[3,13,88,542],
[3,13,88,556],
[3,13,88,576],
[3,13,88,585],
[3,13,88,593],
[3,13,94,37],
[3,13,94,271],
[3,13,94,390],
[3,13,94,469],
[3,13,94,497],
[3,13,94,517],
[3,13,94,534],
[3,13,94,550],
[3,13,94,564],
[3,13,94,577],
[3,13,96,93],
[3,13,96,274],
[3,13,96,400],
[3,13,96,457],
[3,13,96,496],
[3,13,96,516],
[3,13,96,537],
[3,13,96,554],
[3,13,96,567],
[3,13,96,580],
[3,13,96,588],
[3,13,96,595],
[3,13,99,208],
[3,13,100,244],
[3,13,103,230],
[3,13,108,223],
[3,13,108,361],
[3,13,108,424],
[3,14,112,662],
[3,14,45,94],
[3,14,45,275],
[3,14,45,405],
[3,15,112,663],
[3,16,54,4],
[3,16,54,629],
[3,17,112,664],
[3,17,113,665],
[3,17,11,168],
[3,17,15,233],
[3,17,15,365],
[3,17,15,430],
[3,17,54,407],
[3,18,112,666],
[3,18,113,667],
[3,18,1,183],
[3,18,1,346],
[3,18,1,429],
[3,18,13,156],
[3,18,13,328],
[3,18,13,397],
[3,18,54,184],
[3,18,54,347],
[3,18,54,428],
[3,18,64,181],
[3,18,64,348],
[3,18,64,427],
[3,19,112,668],
[3,19,45,21],
[3,19,45,258],
[3,19,80,23],
[3,19,80,260],
[3,19,96,22],
[3,19,96,259],
[3,20,112,669],
[3,20,50,36],
[3,20,50,270],
[3,20,50,391],
[3,21,112,670],
[3,21,45,8],
[3,21,62,11],
[3,21,62,255],
[3,21,80,10],
[3,21,96,9],
[3,22,112,671],
[3,22,45,39],
[3,22,45,273],
[3,25,112,672],
[3,25,113,673],
[3,25,41,17],
[3,25,45,246],
[3,25,45,373],
[3,25,54,19],
[3,25,94,240],
[3,27,45,13],
[3,27,45,257],
[3,27,45,382],
[3,27,45,446],
[3,27,45,480],
[3,28,112,674],
[3,28,87,25],
[3,28,88,26],
[3,28,88,263],
[3,29,112,675],
[3,29,45,214],
[3,29,54,215],
[3,29,56,213],
[3,30,96,210],
[3,35,112,676],
[3,35,113,677],
[3,35,13,33],
[3,35,13,267],
[3,35,45,232],
[3,35,45,363],
[3,35,45,425],
[3,35,45,474],
[3,35,45,499],
[3,35,45,520],
[3,35,45,538],
[3,35,45,552],
[3,35,45,565],
[3,35,45,578],
[3,35,45,586],
[3,35,45,594],
[3,35,80,241],
[3,35,80,370],
[3,35,80,436],
[3,37,112,678],
[3,37,113,679],
[3,37,11,166],
[3,37,27,169],
[3,37,45,212],
[3,37,45,356],
[3,37,45,420],
[3,37,54,173],
[3,37,54,350],
[3,37,54,414],
[3,37,54,465],
[3,37,54,494],
[3,37,94,28],
[3,40,112,680],
[3,40,58,224],
[3,44,112,681],
[3,44,113,682],
[3,45,7,161],
[3,45,7,332],
[3,46,113,683],
[4,31,112,684],
[4,31,113,685],
[4,31,1,29],
[4,31,5,228],
[4,31,41,227],
[4,31,45,222],
[4,31,49,250],
[4,31,49,377],
[4,31,49,442],
[4,31,54,226],
[4,31,73,248],
[4,31,73,376],
[4,38,112,686],
[4,39,112,687],
[4,48,34,245],
[5,26,111,211],
[5,41,111,218],
[5,41,111,357],
[6,8,112,688],
[6,8,113,689],
[6,23,112,690],
[6,23,113,691],
[6,24,112,692],
[6,24,113,693],
[7,43,51,158],
[7,43,51,360],
[7,43,51,422],
[7,43,51,472],
[7,47,112,694],
[7,47,113,695],
[7,47,29,242],
[7,47,29,371],
[7,47,29,439],
[7,47,51,243],
[7,47,51,372],
[7,47,51,437],
[8,42,112,696],
[9,32,112,697],
[9,32,113,698],
[9,33,112,699],
[10,34,112,700],
[11,64,112,701]];



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

