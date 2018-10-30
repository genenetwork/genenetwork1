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
{txt:"AKXD RI Family",val:"AKXD"},
{txt:"AXB/BXA RI Family",val:"AXBXA"},
{txt:"B6BTBRF2",val:"B6BTBRF2"},
{txt:"B6D2 EtOH Selected Advanced Intercross",val:"Linsenbardt-Boehm"},
{txt:"B6D2F2",val:"B6D2F2"},
{txt:"B6D2F2 PSU",val:"B6D2F2-PSU"},
{txt:"BayXSha",val:"BayXSha"},
{txt:"BDF2 UCLA",val:"BDF2-1999"},
{txt:"BDF2-2005",val:"BDF2-2005"},
{txt:"BH/HB F2 UCLA",val:"BHHBF2"},
{txt:"BHF2 (Apoe Null) UCLA",val:"BHF2"},
{txt:"BXD Aged",val:"B6D2RI"},
{txt:"BXD Bone Individual Data",val:"BXD-Bone"},
{txt:"BXD NIA Longevity Study",val:"BXD-Harvested"},
{txt:"BXD RI Family",val:"BXD"},
{txt:"BXH RI Family",val:"BXH"},
{txt:"CastB6/B6Cast F2 UCLA",val:"CTB6F2"},
{txt:"CFW Outbred GWAS",val:"CFW"},
{txt:"Chronic Intermittent Ethanol Phase 1",val:"CIE-INIA"},
{txt:"Chronic Intermittent Ethanol Phase 2",val:"CIE-RMA"},
{txt:"Chronic Mild Stress",val:"CMS"},
{txt:"ColXBur",val:"ColXBur"},
{txt:"ColXCvi",val:"ColXCvi"},
{txt:"CXB RI Family (strain means)",val:"CXB"},
{txt:"D2 Glaucoma Model",val:"D2GM"},
{txt:"Drosophila Genetic Reference Panel",val:"DGRP"},
{txt:"Ethanol-Medicated Stress Reduction",val:"EMSR"},
{txt:"Glaucoma and Aged Retina, UTHSC",val:"B6D2"},
{txt:"Heterogeneous Stock",val:"HS"},
{txt:"Heterogeneous Stock Collaborative Cross",val:"HS-CC"},
{txt:"HXB/BXH",val:"HXBBXH"},
{txt:"ILSXISS (LXS) RI Family (strain means)",val:"LXS"},
{txt:"J12XJ58F11",val:"J12XJ58F11"},
{txt:"J12XJ58F2",val:"J12XJ58F2"},
{txt:"LXP",val:"LXP"},
{txt:"Macaca fasicularis (Cynomolgus monkey)",val:"Macaca-fasicularis"},
{txt:"Mouse Diversity Panel (strain means)",val:"MDP"},
{txt:"NIH Heterogeneous Stock (Palmer)",val:"HSNIH-Palmer"},
{txt:"NIH Heterogeneous Stock (RGSMC 2013)",val:"HSNIH-RGSMC"},
{txt:"NZB/FVB N2 NCI",val:"NZBXFVB-N2"},
{txt:"Oregon-R x 2b3",val:"Oregon-R_x_2b3"},
{txt:"Poplar",val:"Poplar"},
{txt:"QSM",val:"QSM"},
{txt:"Reduced Complexity Cross (B6JxB6N F2)",val:"C57BL-6JxC57BL-6NJF2"},
{txt:"Retina RGC Rheaume",val:"Retina-RGC-Rheaume"},
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
{txt:'Lateral Habenula mRNA',val:'Lateral Habenula mRNA'},
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
{txt:'Retina Single-cell RNA-Seq',val:'Retina Single-cell RNA-Seq'},
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
{txt:'HSNIH-Palmer Prelimbic Cortex RNA-Seq (Aug18) log2',val:'HSNIH-Rat-PL-RSeqlog2-0818'},
{txt:'HSNIH-Palmer Lateral Habenula RNA-Seq (Aug18) log2',val:'HSNIH-Rat-LHB-RSeqlog2-0818'},
{txt:'HSNIH-Palmer Infralimbic Cortex RNA-Seq (Aug18) log2',val:'HSNIH-Rat-IL-RSeqlog2-0818'},
{txt:'HSNIH-Palmer Nucleus Accumbens Core RNA-Seq (Aug18) log2',val:'HSNIH-Rat-Acbc-RSeqlog2-0818'},
{txt:'HSNIH-Palmer Orbitofrontal Cortex RNA-Seq (Aug18) log2',val:'HSNIH-Rat-VoLo-RSeqlog2-0818'},
{txt:'UConn-Rheaume Retina RGC (Sep18) scRNA-Seq Raw',val:'UConn-RGC-RSeq_r-0918'},
{txt:'UConn-Rheaume Retina RGC (Sep18) scRNA-Seq Log2',val:'UConn-RGC-RSeq_log2-0918'},
{txt:'UConn-Rheaume Retina RGC (Sep18) scRNA-Seq Siamak',val:'UConn-RGC-RSeq_s-0918'},
{txt:'HSNIH-Palmer Nucleus Accumbens Core RNA-Seq (Aug18) rlog',val:'HSNIH-Rat-Acbc-RSeq-0818'},
{txt:'HSNIH-Palmer Infralimbic Cortex RNA-Seq (Aug18) rlog',val:'HSNIH-Rat-IL-RSeq-0818'},
{txt:'HSNIH-Palmer Lateral Habenula RNA-Seq (Aug18) rlog',val:'HSNIH-Rat-LHB-RSeq-0818'},
{txt:'HSNIH-Palmer Prelimbic Cortex RNA-Seq (Aug18) rlog',val:'HSNIH-Rat-PL-RSeq-0818'},
{txt:'HSNIH-Palmer Orbitofrontal Cortex RNA-Seq (Aug18) rlog',val:'HSNIH-Rat-VoLo-RSeq-0818'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Aug18) RMA',val:'EPFLMouseLiverCDHFDRMA0818'},
{txt:'EPFL/LISP BXD HFD Liver Affy Mouse Gene 1.0 ST (Aug18) RMA',val:'EPFLMouseLiverHFDRMA0818'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Aug18) RMA',val:'EPFLMouseLiverCDRMA0818'},
{txt:'NIA Aging BXD CD+HFD Liver RNA-Seq (Aug18) Log2',val:'NIA-AgBXD-Liv_CDHFD-rna-seq-0818'},
{txt:'NIA Aging BXD HFD Liver RNA-Seq (Aug18) Log2',val:'NIA-AgBXD-Liv_HFD-rna-seq-0818'},
{txt:'NIA Aging BXD CD Liver RNA-Seq (Aug18) Log2',val:'NIA-AgBXD-Liv_CD-rna-seq-0818'},
{txt:'NIA Aging BXD CD+HFD Liver Affy Clariom S Gene Level (Aug18) RMA **',val:'NIA-AgBXD-Liv_CDHFD-0818'},
{txt:'NIA Aging BXD HFD Liver Affy Clariom S Gene Level (Aug18) RMA **',val:'NIA-AgBXD-Liv_HFD-0818'},
{txt:'NIA Aging BXD CD Liver Affy Clariom S Gene Level (Aug18) RMA **',val:'NIA-AgBXD-Liv_CD-0818'},
{txt:'JAX Retina (Apr18) RNA-Seq log2-Z',val:'JAX_D2GM_RSeq_log2Z_0418'},
{txt:'UCSD AIL Prefrontal Cortex (Apr18) RNA-Seq',val:'UCSD_AIL_PFC_RNA-Seq_0418'},
{txt:'UCSD AIL Striatum (Apr18) RNA-Seq',val:'UCSD_AIL_STR_RNA-Seq_0418'},
{txt:'UCSD AIL Hippocampus (Apr18) RNA-Seq',val:'UCSD_AIL_HIP_RNA-Seq_0418'},
{txt:'UTHSC BXD Harvested Liver RNA-Seq (Aug18) Log2 **',val:'UTHSC-BXD-Harv_Liv-0118'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Gene Level',val:'DoDCMMRPRetMoGene2_0515'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Gene Level (Apr14) RMA',val:'UTHSC_GutGL_0414'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction A, Chow Diet Cohorts (Mar 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtACD0817'},
{txt:'INIA-UTHSC Striatum CIE Affy MTA 1.0 GeneLevel (Apr17) RMA **',val:'INIA_UTHSC_Str_AffyMTA1_May17'},
{txt:'INIA-UTHSC Hippocampus CIE Affy MTA 1.0 GeneLevel (Mar18) RMA',val:'INIA_UTHSC_Hip_AffyMTA1_May17'},
{txt:'INIA-UTHSC Prefrontal Cortex CIE Affy MTA 1.0 GeneLevel (Apr17) RMA **',val:'INIA_UTHSC_PFC_AffyMTA1_May17'},
{txt:'INIA-UTHSC Midbrain CIE Affy MTA 1.0 GeneLevel (Apr17) RMA',val:'INIA_UTHSC_Mid_AffyMTA1_Apr17'},
{txt:'EPFL/ETHZ BXD Liver, Chow Diet (Jun16) Top100 SWATH',val:'EPFLETHZBXDprotCD0514'},
{txt:'UTHSC Hippocampus All Treatments Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_All_AffyMTA1_Mar17'},
{txt:'UTHSC Human Islets Affy Human Gene 2.0 ST (Mar17) RMA **',val:'UTHSC_HuIslets_Mar17'},
{txt:'UCLA CXB Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_CXB_Aor_Jan16'},
{txt:'UCLA CXB Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_CXB_Liv_Jan16'},
{txt:'UCLA BXD Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_BXD_Liv_Jan16'},
{txt:'UCLA BXD Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_BXD_Aor_Jan16'},
{txt:'UCLA AXB/BXA Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_AXB_BXA_Liv_Jan16'},
{txt:'UCLA AXB/BXA Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_AXB_BXA_Aor_Jan16'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_PFC_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Hippocampus (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_HIP_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_STR_RNA-Seq_log2_0117'},
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
{txt:'GTEXv5 Human Testis RefSeq (Sep15) RPKM log2',val:'GTEXv5_Test_0915'},
{txt:'GTEXv5 Human Artery Aorta RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtAor_0915'},
{txt:'GTEXv5 Human Brain Anterior Cingulate Cortex BA24 RefSeq (Sep15) RPKM log2',val:'GTEXv5_AntCtx_0915'},
{txt:'GTEXv5 Human Adrenal Gland RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdrGla_0915'},
{txt:'GTEXv5 Human Adipose Subcutaneous RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdipSub_0915'},
{txt:'GTEXv5 Human Brain Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCtx_0915'},
{txt:'GTEXv5 Human Adipose Visceral Omentum RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdiVis_0915'},
{txt:'GTEXv5 Human Brain Cerebellum RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCe_0915'},
{txt:'GTEXv5 Human Artery Coronary RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtCor_0915'},
{txt:'GTEXv5 Human Brain Cerebellar Hemisphere RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerH_0915'},
{txt:'GTEXv5 Human Stomach RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sto_0915'},
{txt:'GTEXv5 Human Thyroid RefSeq (Sep15) RPKM log2',val:'GTEXv5_Thy_0915'},
{txt:'GTEXv5 Human Brain Caudate Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCa_0915'},
{txt:'GTEXv5 Human Bladder RefSeq (Sep15) RPKM log2',val:'GTEXv5_Bla_0915'},
{txt:'GTEXv5 Human Uterus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ut_0915'},
{txt:'GTEXv5 Human Vagina RefSeq (Sep15) RPKM log2',val:'GTEXv5_Vag_0915'},
{txt:'GTEXv5 Human Artery Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtTib_0915'},
{txt:'GTEXv5 Human Whole Blood RefSeq (Sep15) RPKM log2',val:'GTEXv5_Wbl_0915'},
{txt:'GTEXv5 Human Brain Frontal Cortex BA9 RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrFr_0915'},
{txt:'GTEXv5 Human Brain Hippocampus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hip_0915'},
{txt:'GTEXv5 Human Spleen RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sple_0915'},
{txt:'GTEXv5 Human Pituitary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Pit_0915'},
{txt:'GTEXv5 Human Colon-Sigmoid RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColSig_0915'},
{txt:'GTEXv5 Human Pancreas RefSeq (Sep15) RPKM log2',val:'GTEXv5_Panc_0915'},
{txt:'GTEXv5 Human Colon-Transverse RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColTra_0915'},
{txt:'GTEXv5 Human Nerve - Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_Tib_0915'},
{txt:'GTEXv5 Human Muscle - Skeletal RefSeq (Sep15) RPKM log2',val:'GTEXv5_MuSk_0915'},
{txt:'GTEXv5 Human Lung RefSeq (Sep15) RPKM log2',val:'GTEXv5_Lung_0915'},
{txt:'GTEXv5 Human Liver RefSeq (Sep15) RPKM log2',val:'GTEXv5_Liv_0915'},
{txt:'GTEXv5 Human Kidney - Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_Kidn_0915'},
{txt:'GTEXv5 Human Esophagus - Gastroesophageal Junction RefSeq (Sep15) RPKM log2',val:'GTEXv5_GastJun_0915'},
{txt:'GTEXv5 Human Esophagus - Mucosa RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMu_0915'},
{txt:'GTEXv5 Human Esophagus - Muscularis RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMus_0915'},
{txt:'GTEXv5 Human Fallopian Tube RefSeq (Sep15) RPKM log2',val:'GTEXv5_Fatu_0915'},
{txt:'GTEXv5 Human Heart - Left Ventricle RefSeq (Sep15) RPKM log2',val:'GTEXv5_LV_0915'},
{txt:'GTEXv5 Human Cervix-Ectocervix RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerEct_0915'},
{txt:'GTEXv5 Human Prostate RefSeq (Sep15) RPKM log2',val:'GTEXv5_Prost_0915'},
{txt:'GTEXv5 Human Brain Hypothalamus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hiptha_0915'},
{txt:'GTEXv5 Human Brain Nucleus Accumbens Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_NuAcc_0915'},
{txt:'GTEXv5 Human Brain Putamen Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_PutB_0915'},
{txt:'GTEXv5 Human Ovary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ov_0915'},
{txt:'GTEXv5 Human Brain Spinal Cord Cervical C-1 RefSeq (Sep15) RPKM log2',val:'GTEXv5_SpCo_0915'},
{txt:'GTEXv5 Human Small Intestine - Terminal Ileum RefSeq (Sep15) RPKM log2',val:'GTEXv5_SInt_0915'},
{txt:'GTEXv5 Human Brain Substantia Nigra RefSeq (Sep15) RPKM log2',val:'GTEXv5_SubN_0915'},
{txt:'GTEXv5 Human Breast Mammary Tissue RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrMa_0915'},
{txt:'GTEXv5 Human Skin-Sun Exposed-Lower Leg RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkS_0915'},
{txt:'GTEXv5 Human Cells-EBV-Transformed Lymphocytes RefSeq (Sep15) RPKM log2',val:'GTEXv5_EBV_0915'},
{txt:'GTEXv5 Human Cells-Leukemia Cell Line CML RefSeq (Sep15) RPKM log2',val:'GTEXv5_BM_0915'},
{txt:'GTEXv5 Human Skin-Not Sun Exposed-Suprapubic RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkN_0915'},
{txt:'GTEXv5 Human Cells-Transformed Fibroblasts RefSeq (Sep15) RPKM log2',val:'GTEXv5_CTF_0915'},
{txt:'GTEXv5 Human Salivary Gland Minor RefSeq (Sep15) RPKM log2',val:'GTEXv5_SalGl_0915'},
{txt:'GTEXv5 Human Heart - Atrial Appendage RefSeq (Sep15) RPKM log2',val:'GTEXv5_HAA_0915'},
{txt:'GTEXv5 Human Brain Amygdala RefSeq (Sep15) RPKM log2',val:'GTEXv5_Amy_0915'},
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P3RInv_1111'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) RMA',val:'UTHSC_BXDAged_0615'},
{txt:'CRTD BXD Hippocampal Precursor Cells ILM MouseWG-6_R13 (Dec14) Quantile',val:'CRTD_HipPreCell1214'},
{txt:'UTHSC Elicited Peritoneal Neutrophils Affy MoGene 2.0 ST (Oct14) RMA **',val:'UTHSC-Neut-1014'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Untrimmed',val:'UTHSC_BXD_WB_RNASeq1112'},
{txt:'GTEx Human Coronary (Mar14) RPKM Log2',val:'GTEx_log2_Coron_0314'},
{txt:'GTEx Human Colon - Transverse (Mar14) RPKM Log2',val:'GTEx_log2_Colon_0314'},
{txt:'GTEx Human Esophagus - Mucosa (Mar14) RPKM Log2',val:'GTEx_log2_EsophMuc_0314'},
{txt:'GTEx Human Esophagus - Muscularis (Mar14) RPKM Log2',val:'GTEx_log2_EsophMus_0314'},
{txt:'GTEx Human Frontal Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Front_0314'},
{txt:'GTEx Human Heart - Atrial Appendage (Mar14) RPKM Log2',val:'GTEx_log2_HeartAt_0314'},
{txt:'GTEx Human Heart - Left Ventricle (Mar14) RPKM Log2',val:'GTEx_log2_HeartLV_0314'},
{txt:'GTEx Human Hypothalamus (Mar14) RPKM Log2',val:'GTEx_log2_Hypot_0314'},
{txt:'GTEx Human Kidney (Mar14) RPKM Log2',val:'GTEx_log2_Kidne_0314'},
{txt:'GTEx Human Cerebellar Hemisphere (Mar14) RPKM Log2',val:'GTEx_log2_CerebH_0314'},
{txt:'GTEx Human Blood, Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_Blood_0314'},
{txt:'GTEx Human Cerebellar Cortex (Mar14) RPKM Log2',val:'GTEx_log2_CerebC_0314'},
{txt:'GTEx Human Hippocampus (Mar14) RPKM Log2',val:'GTEx_log2_HIP_0314'},
{txt:'GTEx Human Adrenal Gland (Mar14) RPKM Log2',val:'GTEx_log2_Adren_0314'},
{txt:'GTEx Human Anterior Cingulate Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Anter_0314'},
{txt:'GTEx Human Aorta (Mar14) RPKM Log2',val:'GTEx_log2_Aorta_0314'},
{txt:'GTEx Human Breast - Mammary Tissue (Mar14) RPKM Log2',val:'GTEx_log2_Breas_0314'},
{txt:'GTEx Human Caudate (Mar14) RPKM Log2',val:'GTEx_log2_Cauda_0314'},
{txt:'GTEx Human Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_CellsEBV_0314'},
{txt:'GTEx Human Cells - Leukemia Cell Line (CML) (Mar14) RPKM Log2',val:'GTEx_log2_CellsLe_0314'},
{txt:'GTEx Human Cells - Transformed Fibroblasts (Mar14) RPKM Log2',val:'GTEx_log2_CellsTr_0314'},
{txt:'GTEx Human Cerebellum (Mar14) RPKM Log2',val:'GTEx_log2_CER_0314'},
{txt:'GTEx Human Liver (Mar14) RPKM Log2',val:'GTEx_log2_Liver_0314'},
{txt:'GTEx Human Lung (Mar14) RPKM Log2',val:'GTEx_log2_Lung_0314'},
{txt:'GTEx Human Muscle (Mar14) RPKM Log2',val:'GTEx_log2_Muscle_0314'},
{txt:'GTEx Human Spinal Cord (Mar14) RPKM Log2',val:'GTEx_log2_Spina_0314'},
{txt:'GTEx Human Stomach (Mar14) RPKM Log2',val:'GTEx_log2_Stoma_0314'},
{txt:'GTEx Human Subcutaneous (Mar14) RPKM Log2',val:'GTEx_log2_Subcu_0314'},
{txt:'GTEx Human Substantia Nigra (Mar14) RPKM Log2',val:'GTEx_log2_Subst_0314'},
{txt:'GTEx Human Testis (Mar14) RPKM Log2',val:'GTEx_log2_Testi_0314'},
{txt:'GTEx Human Fallopian Tube (Mar14) RPKM Log2',val:'GTEx_log2_Fallo_0314'},
{txt:'GTEx Human Thyroid (Mar14) RPKM Log2',val:'GTEx_log2_Thyro_0314'},
{txt:'GTEx Human Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Tibial_0314'},
{txt:'GTEx Human Vagina (Mar14) RPKM Log2',val:'GTEx_log2_Vagin_0314'},
{txt:'GTEx Human Skin-Sun Exposed (Lower leg) (Mar14) RPKM Log2',val:'GTEx_log2_SkinE_0314'},
{txt:'GTEx Human Skin-Not Sun Exposed (Suprapubic) (Mar14) RPKM Log2',val:'GTEx_log2_SkinN_0314'},
{txt:'GTEx Human Visceral (Mar14) RPKM Log2',val:'GTEx_log2_Visce_0314'},
{txt:'GTEx Human Nerve - Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Nerve_0314'},
{txt:'GTEx Human Nucleus Accumbens (Mar14) RPKM Log2',val:'GTEx_log2_Nucle_0314'},
{txt:'GTEx Human Ovary (Mar14) RPKM Log2',val:'GTEx_log2_Ovary_0314'},
{txt:'GTEx Human Pancreas (Mar14) RPKM Log2',val:'GTEx_log2_Pancr_0314'},
{txt:'GTEx Human Pituitary (Mar14) RPKM Log2',val:'GTEx_log2_Pitui_0314'},
{txt:'GTEx Human Prostate (Mar14) RPKM Log2',val:'GTEx_log2_Prost_0314'},
{txt:'GTEx Human Whole Blood (Mar14) RPKM Log2',val:'GTEx_log2_WholeB_0314'},
{txt:'GTEx Human Putamen (Mar14) RPKM Log2',val:'GTEx_log2_Putam_0314'},
{txt:'GTEx Human Uterus (Mar14) RPKM Log2',val:'GTEx_log2_Uterus_0314'},
{txt:'GTEx Human Amygdala (Mar14) RPKM Log2',val:'GTEx_log2_AMY_0314'},
{txt:'UTHSC BXD Hippocampus Ion Torrent microRNA (Feb14) RPKM **',val:'UTHSC_BXD_Hip_miRNASeq0214'},
{txt:'GSE15745 NIH Human Brain Pons ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Po0510'},
{txt:'GSE15745 NIH Human Brain Temporal Cerebral ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_TC0510'},
{txt:'GSE15745 NIH Human Brain Cerebellum ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Cer0510'},
{txt:'GSE15745 NIH Human Brain Prefrontal Cortex ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_PFC0510'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD+HFD (Jun14) **',val:'EPFL-LISP_MusPMetCDHFD1213'},
{txt:'UCLA GSE27483 BXD Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXD_Femur_0113_RSN'},
{txt:'GSE11882 UCI Human Superior Frontal Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_SG_0913'},
{txt:'GSE11882 UCI Human Hippocampus Affy U133 Plus2 (Sep13) RMA',val:'UCI_HC_0913'},
{txt:'GSE11882 UCI Human Entorhinal Cortex Affy U133 Plus2 (Sep13) RMA',val:'UCI_EC_0913'},
{txt:'GSE11882 UCI Human Postcentral Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_PCG_0913'},
{txt:'UCLA CTB6/B6CTF2 Brain (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_2005'},
{txt:'Barley1 Leaf INOC TTKS (Aug09) RMA',val:'B1LI0809R'},
{txt:'GSE15222 Human Brain All Cases Myers (Apr09) RankInv',val:'GSE15222_F_RI_0409'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10)',val:'INIA_Hyp_RMA_1110'},
{txt:'Super Series GSE23546 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GSE23546HLT0613'},
{txt:'Scripps BXD ACC 4 Groups Affy Mouse Gene 1.0 ST (May13) RMA Gene Level **',val:'ScrBXDACC4G0513'},
{txt:'HBTRC-MLC Human Cerebellum Agilent (Jun11) mlratio',val:'HBTRC-MLC_0611'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) RMA',val:'GCB_M2_0505_R'},
{txt:'CANDLE Newborn Cord ILMv6.3 (Jun11) QUANT',val:'CANDLE_NB_0711'},
{txt:'CANDLE Newborn Cord ILM HumanMethylation27 (Mar13) **',val:'CANDLE_Meth27_0313'},
{txt:'UCLA GSE27483 AXB/BXA Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_AXB/BXA_Femur_0113_RSN'},
{txt:'UCLA GSE27483 MDP Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_MDP_Femur_0113_RSN'},
{txt:'UCLA GSE27483 BXH Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXH_Femur_0113_RSN'},
{txt:'TSRI DRG Affy Mouse Genome 430 2.0 (Jan13) RMA MDP',val:'TSRI-DRG-AffyMOE430_0113-MDP'},
{txt:'St Jude BXD Popliteal Lymph Node Affy HT MG-430 PM (Sep12) RMA **',val:'STJ_PLN_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA **',val:'PSU-B6D2F2_0812'},
{txt:'Eye M430v2 (Sep08) RMA',val:'Eye_M2_0908_R'},
{txt:'UCLA BHHBF2 Adipose (2005) mlratio',val:'UCLA_BHHBF2_ADIPOSE_2005'},
{txt:'GSE16780 UCLA Mouse MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780MDP_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Brain (2005) mlratio',val:'UCLA_BHHBF2_BRAIN_2005'},
{txt:'UCLA BHHBF2 Muscle (2005) mlratio',val:'UCLA_BHHBF2_MUSCLE_2005'},
{txt:'UCLA BHHBF2 Liver (2005) mlratio',val:'UCLA_BHHBF2_LIVER_2005'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_PG_RMA_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_Adrenal_RMA_0612'},
{txt:'INIA Macaca fasicularis Nucleus Accumbens (Jan10) RMA **',val:'INIA_MacFas_Ac_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Muscle (2005) mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_2005'},
{txt:'UCLA CTB6/B6CTF2 Adipose (2005) mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_2005'},
{txt:'INIA Macaca fasicularis Hippocampus (Jan10) RMA **',val:'INIA_MacFas_Hc_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Liver (2005) mlratio',val:'UCLA_CTB6B6CTF2_LIVER_2005'},
{txt:'INIA Macaca fasicularis Amygdala (Jan10) RMA **',val:'INIA_MacFas_AMG_RMA_0110'},
{txt:'VU BXD Midbrain Agilent SurePrint G3 Mouse GE (May12) Quantile',val:'VUBXDMouseMidBrainQ0512'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1111'},
{txt:'GN330 Human Amygdala Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_AMY_0711'},
{txt:'Human Dorsolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_DFC_0711'},
{txt:'Human Primary Auditory (A1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_A1C_0711'},
{txt:'Human Cerebellar Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_CBC_0711'},
{txt:'Human Posterior Inferior Parietal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_IPC_0711'},
{txt:'Human Inferior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_ITC_0711'},
{txt:'Human Primary Motor (M1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_M1C_0711'},
{txt:'Human Mediodorsal Nucleus of Thalamus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MD_0711'},
{txt:'Human Primary Visual Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_V1C_0711'},
{txt:'Human Ventrolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_VFC_0711'},
{txt:'Human Posterior Superior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STC_0711'},
{txt:'Human Primary Somatosensory (S1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_S1C_0711'},
{txt:'Human Orbital Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_OFC_0711'},
{txt:'Human Hippocampus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_HIP_0711'},
{txt:'Human Medial Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MFC_0711'},
{txt:'Human Striatum Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STR_0711'},
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
{txt:'UWA Illumina Thymus (Nov08) RSN **',val:'Illum_BXD_Thy_1108'},
{txt:'UWA Illumina PBL (Nov08) RSN **',val:'Illum_BXD_PBL_1108'},
{txt:'Hippocampus Illumina RSS (Oct08) RankInv beta',val:'Illum_LXS_Hipp_RSS_1008'},
{txt:'Eye AXBXA Illumina V6.2(Oct08) RankInv Beta',val:'Eye_AXBXA_1008_RankInv'},
{txt:'UCLA BXD and BXH Cartilage v2',val:'UCLA_BXDBXH_CARTILAGE_V2'},
{txt:'UCLA BXH and BXD Cartilage v2',val:'UCLA_BXHBXD_CARTILAGE_V2'},
{txt:'UCLA BHF2 Adipose Male mlratio',val:'UCLA_BHF2_ADIPOSE_MALE'},
{txt:'UCLA BHF2 Liver Male mlratio',val:'UCLA_BHF2_LIVER_MALE'},
{txt:'UCLA BHF2 Muscle Male mlratio **',val:'UCLA_BHF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Brain Male mlratio',val:'UCLA_BHF2_BRAIN_MALE'},
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
{txt:'GSE16780 UCLA Mouse AXB/BXA Liver Affy HT M430A (Sep11) RMA',val:'GSE16780AB_UCLA_ML0911'},
{txt:'Eye M430v2 No Mutant/Mutant (Aug12) RMA',val:'gn10'},
{txt:'UCLA BHHBF2 Liver Male Only',val:'UCLA_BHHBF2_LIVER_MALE'},
{txt:'UCLA BHHBF2 Muscle Male Only',val:'UCLA_BHHBF2_MUSCLE_MALE'},
{txt:'UCLA BHHBF2 Adipose Male Only',val:'UCLA_BHHBF2_ADIPOSE_MALE'},
{txt:'UCLA BHHBF2 Brain Male Only',val:'UCLA_BHHBF2_BRAIN_MALE'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Adrenal_RMA_F_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Females',val:'INIA_Pituitary_RMA_F_0612'},
{txt:'UCLA CTB6B6CTF2 Liver Female mlratio',val:'UCLA_CTB6B6CTF2_LIVER_FEMALE'},
{txt:'UCLA CTB6B6CTF2 Adipose Female mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_FEMALE'},
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
{txt:'UCLA BXH and BXD Cartilage',val:'UCLA_BXHBXD_CARTILAGE'},
{txt:'UCLA BXD and BXH Cartilage',val:'UCLA_BXDBXH_CARTILAGE'},
{txt:'UCLA BHF2 Liver Female mlratio',val:'UCLA_BHF2_LIVER_FEMALE'},
{txt:'UCLA BHF2 Adipose Female mlratio',val:'UCLA_BHF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHF2 Muscle Female mlratio **',val:'UCLA_BHF2_MUSCLE_FEMALE'},
{txt:'UCLA BHF2 Brain Female mlratio',val:'UCLA_BHF2_BRAIN_FEMALE'},
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
{txt:'EPFL/LISP BXD CD+HFD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA',val:'EL_BXDCDHFDScWAT_0216'},
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
{txt:'UCLA BHHBF2 Brain Female Only',val:'UCLA_BHHBF2_BRAIN_FEMALE'},
{txt:'UCLA BHHBF2 Adipose Female Only',val:'UCLA_BHHBF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHHBF2 Liver Female Only',val:'UCLA_BHHBF2_LIVER_FEMALE'},
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
{txt:'UCLA CTB6B6CTF2 Adipose Male mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_MALE'},
{txt:'UCLA CTB6B6CTF2 Liver Male mlratio',val:'UCLA_CTB6B6CTF2_LIVER_MALE'},
{txt:'UCLA BXD Cartilage',val:'UCLA_BXD_CARTILAGE'},
{txt:'UCLA BXH Cartilage',val:'UCLA_BXH_CARTILAGE'},
{txt:'UCLA BHF2 Brain (June05) mlratio',val:'UCLA_BHF2_BRAIN_0605'},
{txt:'UCLA BHF2 Liver (June05) mlratio',val:'UCLA_BHF2_LIVER_0605'},
{txt:'UCLA BHF2 Muscle (June05) mlratio **',val:'UCLA_BHF2_MUSCLE_0605'},
{txt:'UCLA BHF2 Adipose (June05) mlratio',val:'UCLA_BHF2_ADIPOSE_0605'},
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
{txt:'EPFL/LISP BXD HFD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA',val:'EL_BXDHFDScWAT_0216'},
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
{txt:'HQF BXD Neocortex ILM6v1.1 (Dec10) RankInv',val:'HQFNeoc_1210_RankInv'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Males',val:'UTHSC_SPL_RMA_1210M'},
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
{txt:'EPFL/LISP BXD HFC Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level',val:'EPFLMouseLiverHFCEx0413'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level',val:'EPFLMouseLiverCDEx0413'},
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
{txt:'HEI ONC vs Control Retina Illumina V6.2 (Sep11) RankInv',val:'HEIONCvsCRetILM6_0911'},
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
{txt:'UTHSC BXD Liver Affy Clariom S GeneLevel Main (Aug18) RMA **',val:'UTHSC-BXD-Liv-0818'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Females **',val:'GenEx_BXD_CerebSal_RMA_F_0213'},
{txt:'UTHSC BXD Liver Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'UTHSC-BXD-Liv-0917'},
{txt:'UTHSC BXD Aged Hippocampus Affy MoGene1.0 ST (May15) RMA Gene Level **',val:'UTHSC_BXD_AgeHipp0515'},
{txt:'GenEx BXD Sal Cerebellum Affy M430 2.0 (Feb13) RMA Males **',val:'GenEx_BXD_CerebSal_RMA_M_0213'},
{txt:'UTHSC BXD Aged Hippocampus rev3 Affy Mouse Gene 1.0 ST (Sep12) RMA **',val:'UTHSC_BXD_HArev3_0912'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA Exon Level **',val:'UTHSC_BXD_H_0912'},
{txt:'GTEx_v5 Phenotypes',val:'GTEx_v5Publish'},
{txt:'HCP Phenotypes',val:'HCPPublish'},
{txt:'HSB Phenotypes',val:'HSBPublish'},
{txt:'Aging-Brain-UCI Phenotypes',val:'Aging-Brain-UCIPublish'},
{txt:'AD-cases-controls-Myers Phenotypes',val:'AD-cases-controls-MyersPublish'},
{txt:'AD-cases-controls-Myers Genotypes',val:'AD-cases-controls-MyersGeno'},
{txt:'CANDLE Phenotypes',val:'CANDLEPublish'},
{txt:'HLC Phenotypes',val:'HLCPublish'},
{txt:'TIGEM-Retina-RNA-Seq Phenotypes',val:'TIGEM-Retina-RNA-SeqPublish'},
{txt:'Islets-Gerling Phenotypes',val:'Islets-GerlingPublish'},
{txt:'AIL Phenotypes',val:'AILPublish'},
{txt:'AKXD Genotypes',val:'AKXDGeno'},
{txt:'AXBXA Phenotypes',val:'AXBXAPublish'},
{txt:'AXBXA Genotypes',val:'AXBXAGeno'},
{txt:'B6BTBRF2 Phenotypes',val:'B6BTBRF2Publish'},
{txt:'B6BTBRF2 Genotypes',val:'B6BTBRF2Geno'},
{txt:'Linsenbardt-Boehm Phenotypes',val:'Linsenbardt-BoehmPublish'},
{txt:'Linsenbardt-Boehm Genotypes',val:'Linsenbardt-BoehmGeno'},
{txt:'B6D2F2 Genotypes',val:'B6D2F2Geno'},
{txt:'B6D2F2-PSU Phenotypes',val:'B6D2F2-PSUPublish'},
{txt:'B6D2F2-PSU Genotypes',val:'B6D2F2-PSUGeno'},
{txt:'BDF2-1999 Genotypes',val:'BDF2-1999Geno'},
{txt:'BDF2-2005 Genotypes',val:'BDF2-2005Geno'},
{txt:'BHHBF2 Genotypes',val:'BHHBF2Geno'},
{txt:'BHF2 Phenotypes',val:'BHF2Publish'},
{txt:'BHF2 Genotypes',val:'BHF2Geno'},
{txt:'B6D2RI Phenotypes',val:'B6D2RIPublish'},
{txt:'BXD-Bone Phenotypes',val:'BXD-BonePublish'},
{txt:'BXD-Harvested Phenotypes',val:'BXD-HarvestedPublish'},
{txt:'BXD Phenotypes',val:'BXDPublish'},
{txt:'BXD Genotypes',val:'BXDGeno'},
{txt:'BXH Phenotypes',val:'BXHPublish'},
{txt:'BXH Genotypes',val:'BXHGeno'},
{txt:'CTB6F2 Phenotypes',val:'CTB6F2Publish'},
{txt:'CTB6F2 Genotypes',val:'CTB6F2Geno'},
{txt:'CFW Phenotypes',val:'CFWPublish'},
{txt:'CIE-INIA Phenotypes',val:'CIE-INIAPublish'},
{txt:'CIE-RMA Phenotypes',val:'CIE-RMAPublish'},
{txt:'CMS Phenotypes',val:'CMSPublish'},
{txt:'CXB Phenotypes',val:'CXBPublish'},
{txt:'CXB Genotypes',val:'CXBGeno'},
{txt:'B6D2 Phenotypes',val:'B6D2Publish'},
{txt:'HS Phenotypes',val:'HSPublish'},
{txt:'LXS Phenotypes',val:'LXSPublish'},
{txt:'LXS Genotypes',val:'LXSGeno'},
{txt:'Mouse Phenome Database',val:'MDPPublish'},
{txt:'MDP Genotypes',val:'MDPGeno'},
{txt:'NZBXFVB-N2 Phenotypes',val:'NZBXFVB-N2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Phenotypes',val:'C57BL-6JxC57BL-6NJF2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Genotypes',val:'C57BL-6JxC57BL-6NJF2Geno'},
{txt:'SOTNOT-OHSU Genotypes',val:'SOTNOT-OHSUGeno'},
{txt:'HXBBXH Phenotypes',val:'HXBBXHPublish'},
{txt:'HXBBXH Genotypes',val:'HXBBXHGeno'},
{txt:'HSNIH-Palmer Phenotypes',val:'HSNIH-PalmerPublish'},
{txt:'HSNIH-RGSMC Phenotypes',val:'HSNIH-RGSMCPublish'},
{txt:'BayXSha Phenotypes',val:'BayXShaPublish'},
{txt:'BayXSha Genotypes',val:'BayXShaGeno'},
{txt:'ColXBur Phenotypes',val:'ColXBurPublish'},
{txt:'ColXBur Genotypes',val:'ColXBurGeno'},
{txt:'ColXCvi Phenotypes',val:'ColXCviPublish'},
{txt:'ColXCvi Genotypes',val:'ColXCviGeno'},
{txt:'SXM Phenotypes',val:'SXMPublish'},
{txt:'SXM Genotypes',val:'SXMGeno'},
{txt:'Poplar Phenotypes',val:'PoplarPublish'},
{txt:'J12XJ58F11 Phenotypes',val:'J12XJ58F11Publish'},
{txt:'J12XJ58F11 Genotypes',val:'J12XJ58F11Geno'},
{txt:'J12XJ58F2 Phenotypes',val:'J12XJ58F2Publish'},
{txt:'LXP Phenotypes',val:'LXPPublish'},
{txt:'All Phenotypes',val:'_allPublish'}];

var lArr = [
 null,
[1,51,114,660],
[1,51,3,67],
[1,51,4,69],
[1,51,5,66],
[1,51,6,115],
[1,51,7,65],
[1,51,8,64],
[1,51,9,76],
[1,51,12,110],
[1,51,14,107],
[1,51,16,75],
[1,51,17,109],
[1,51,19,112],
[1,51,20,68],
[1,51,21,72],
[1,51,22,70],
[1,51,23,98],
[1,51,24,85],
[1,51,25,87],
[1,51,26,71],
[1,51,31,93],
[1,51,32,94],
[1,51,33,95],
[1,51,35,96],
[1,51,37,81],
[1,51,39,114],
[1,51,40,97],
[1,51,45,82],
[1,51,46,100],
[1,51,49,92],
[1,51,55,91],
[1,51,57,90],
[1,51,65,89],
[1,51,67,88],
[1,51,70,101],
[1,51,72,103],
[1,51,73,86],
[1,51,75,84],
[1,51,86,99],
[1,51,87,102],
[1,51,91,113],
[1,51,92,111],
[1,51,93,108],
[1,51,94,105],
[1,51,95,104],
[1,51,96,83],
[1,51,97,73],
[1,51,99,106],
[1,51,104,63],
[1,51,106,74],
[1,51,107,79],
[1,51,108,77],
[1,51,109,78],
[1,51,112,80],
[1,52,3,148],
[1,52,3,339],
[1,52,4,157],
[1,52,4,346],
[1,52,5,134],
[1,52,5,301],
[1,52,6,167],
[1,52,6,302],
[1,52,7,135],
[1,52,7,303],
[1,52,8,136],
[1,52,8,304],
[1,52,10,131],
[1,52,10,305],
[1,52,14,137],
[1,52,14,306],
[1,52,16,138],
[1,52,16,307],
[1,52,17,139],
[1,52,17,308],
[1,52,18,140],
[1,52,18,309],
[1,52,19,141],
[1,52,19,310],
[1,52,20,132],
[1,52,20,311],
[1,52,21,130],
[1,52,21,312],
[1,52,22,142],
[1,52,22,313],
[1,52,25,122],
[1,52,25,314],
[1,52,26,121],
[1,52,26,315],
[1,52,32,123],
[1,52,32,316],
[1,52,33,124],
[1,52,33,317],
[1,52,35,151],
[1,52,35,318],
[1,52,37,125],
[1,52,37,319],
[1,52,39,126],
[1,52,39,320],
[1,52,40,127],
[1,52,40,321],
[1,52,45,133],
[1,52,45,322],
[1,52,46,128],
[1,52,46,323],
[1,52,49,129],
[1,52,49,324],
[1,52,55,143],
[1,52,55,325],
[1,52,57,144],
[1,52,57,326],
[1,52,65,145],
[1,52,65,327],
[1,52,67,158],
[1,52,67,328],
[1,52,70,159],
[1,52,70,329],
[1,52,72,160],
[1,52,72,330],
[1,52,73,161],
[1,52,73,331],
[1,52,75,162],
[1,52,75,332],
[1,52,86,163],
[1,52,86,333],
[1,52,87,165],
[1,52,87,334],
[1,52,92,156],
[1,52,92,335],
[1,52,93,155],
[1,52,93,336],
[1,52,95,146],
[1,52,95,337],
[1,52,97,147],
[1,52,97,338],
[1,52,99,149],
[1,52,99,340],
[1,52,104,150],
[1,52,104,341],
[1,52,106,152],
[1,52,106,342],
[1,52,107,153],
[1,52,107,343],
[1,52,108,166],
[1,52,108,344],
[1,52,109,154],
[1,52,109,345],
[1,52,112,164],
[1,52,112,347],
[1,53,114,661],
[1,54,22,171],
[1,54,76,169],
[1,54,81,172],
[1,54,103,170],
[1,55,114,662],
[1,55,6,211],
[1,55,20,214],
[1,55,28,212],
[1,55,45,224],
[1,55,47,216],
[1,55,60,225],
[1,55,61,218],
[1,55,71,223],
[1,55,79,215],
[1,55,80,221],
[1,55,82,213],
[1,55,83,217],
[1,55,84,222],
[1,55,85,219],
[1,55,98,226],
[1,55,111,220],
[1,56,114,663],
[1,56,30,177],
[1,56,45,176],
[1,56,78,178],
[1,56,100,175],
[1,57,22,185],
[1,57,22,356],
[1,57,22,425],
[1,57,22,482],
[1,57,81,227],
[1,57,81,374],
[1,57,81,438],
[1,57,81,489],
[1,57,85,228],
[1,57,85,375],
[1,57,85,439],
[1,57,85,490],
[1,58,114,664],
[1,58,115,665],
[1,58,13,181],
[1,58,13,352],
[1,58,13,421],
[1,59,13,232],
[1,59,13,378],
[1,59,13,446],
[1,59,13,496],
[1,60,114,666],
[1,60,62,188],
[1,60,62,358],
[1,60,69,187],
[1,61,114,667],
[1,61,55,230],
[1,61,55,377],
[1,61,55,441],
[1,62,57,183],
[1,62,57,354],
[1,62,57,424],
[1,62,57,481],
[1,63,58,243],
[1,63,58,385],
[1,64,114,668],
[1,64,89,50],
[1,65,114,669],
[1,65,48,37],
[2,37,6,208],
[2,37,13,240],
[2,37,45,206],
[2,37,70,203],
[2,37,81,239],
[3,1,114,670],
[3,1,45,26],
[3,1,81,24],
[3,1,98,25],
[3,2,115,671],
[3,2,59,248],
[3,2,59,402],
[3,2,59,466],
[3,3,114,672],
[3,3,115,673],
[3,3,11,189],
[3,3,34,255],
[3,3,41,43],
[3,3,41,359],
[3,3,55,42],
[3,3,55,361],
[3,4,114,674],
[3,4,115,675],
[3,4,55,274],
[3,4,55,401],
[3,5,114,676],
[3,5,115,677],
[3,6,115,678],
[3,6,13,272],
[3,6,13,398],
[3,6,13,464],
[3,6,13,501],
[3,6,13,529],
[3,6,13,549],
[3,7,114,679],
[3,7,115,680],
[3,7,65,194],
[3,7,65,360],
[3,7,65,429],
[3,7,65,485],
[3,9,115,681],
[3,9,55,262],
[3,10,115,682],
[3,10,98,270],
[3,10,98,397],
[3,10,98,463],
[3,11,115,683],
[3,11,1,196],
[3,11,1,365],
[3,11,1,432],
[3,11,13,198],
[3,11,13,366],
[3,11,13,431],
[3,11,55,200],
[3,11,55,363],
[3,11,55,433],
[3,11,65,199],
[3,11,65,364],
[3,11,65,434],
[3,12,114,684],
[3,12,115,685],
[3,12,1,258],
[3,12,1,390],
[3,12,1,458],
[3,12,13,261],
[3,12,13,392],
[3,12,13,455],
[3,12,55,259],
[3,12,55,389],
[3,12,55,456],
[3,12,65,260],
[3,12,65,391],
[3,12,65,457],
[3,13,114,686],
[3,13,45,117],
[3,13,45,298],
[3,13,45,428],
[3,14,114,687],
[3,15,114,688],
[3,15,55,27],
[3,15,55,653],
[3,15,55,655],
[3,16,114,689],
[3,16,115,690],
[3,16,1,57],
[3,16,1,292],
[3,16,1,412],
[3,16,1,475],
[3,16,1,510],
[3,16,2,53],
[3,16,2,287],
[3,16,5,202],
[3,16,5,367],
[3,16,5,435],
[3,16,5,487],
[3,16,6,229],
[3,16,6,376],
[3,16,6,440],
[3,16,6,491],
[3,16,6,520],
[3,16,11,174],
[3,16,11,350],
[3,16,11,419],
[3,16,11,478],
[3,16,11,515],
[3,16,11,536],
[3,16,13,120],
[3,16,13,300],
[3,16,13,427],
[3,16,13,499],
[3,16,13,528],
[3,16,13,547],
[3,16,13,564],
[3,16,13,578],
[3,16,13,591],
[3,16,13,604],
[3,16,13,612],
[3,16,13,621],
[3,16,15,256],
[3,16,15,388],
[3,16,15,453],
[3,16,22,186],
[3,16,22,357],
[3,16,22,426],
[3,16,22,483],
[3,16,22,517],
[3,16,22,539],
[3,16,22,558],
[3,16,22,573],
[3,16,22,587],
[3,16,22,599],
[3,16,22,608],
[3,16,22,615],
[3,16,22,622],
[3,16,22,626],
[3,16,22,629],
[3,16,22,632],
[3,16,22,635],
[3,16,22,638],
[3,16,22,642],
[3,16,22,645],
[3,16,22,648],
[3,16,22,651],
[3,16,22,654],
[3,16,22,657],
[3,16,34,195],
[3,16,34,362],
[3,16,34,449],
[3,16,34,498],
[3,16,34,525],
[3,16,34,544],
[3,16,34,561],
[3,16,34,580],
[3,16,34,594],
[3,16,36,61],
[3,16,36,295],
[3,16,36,415],
[3,16,38,29],
[3,16,38,276],
[3,16,38,403],
[3,16,38,467],
[3,16,38,502],
[3,16,41,41],
[3,16,41,348],
[3,16,41,417],
[3,16,41,477],
[3,16,41,514],
[3,16,42,242],
[3,16,42,381],
[3,16,42,444],
[3,16,42,494],
[3,16,42,523],
[3,16,42,543],
[3,16,42,560],
[3,16,42,576],
[3,16,42,593],
[3,16,43,118],
[3,16,44,168],
[3,16,45,58],
[3,16,45,291],
[3,16,45,411],
[3,16,45,474],
[3,16,45,512],
[3,16,45,533],
[3,16,45,553],
[3,16,45,568],
[3,16,45,583],
[3,16,45,595],
[3,16,45,606],
[3,16,45,614],
[3,16,45,625],
[3,16,45,628],
[3,16,45,631],
[3,16,45,634],
[3,16,45,637],
[3,16,45,640],
[3,16,45,643],
[3,16,45,646],
[3,16,45,649],
[3,16,45,652],
[3,16,45,656],
[3,16,45,658],
[3,16,45,659],
[3,16,46,182],
[3,16,46,353],
[3,16,46,422],
[3,16,46,479],
[3,16,46,516],
[3,16,46,537],
[3,16,46,556],
[3,16,46,571],
[3,16,49,244],
[3,16,49,382],
[3,16,49,461],
[3,16,49,500],
[3,16,49,527],
[3,16,49,546],
[3,16,53,253],
[3,16,54,30],
[3,16,54,277],
[3,16,54,404],
[3,16,54,468],
[3,16,54,511],
[3,16,54,532],
[3,16,54,552],
[3,16,54,566],
[3,16,54,582],
[3,16,55,14],
[3,16,55,15],
[3,16,55,16],
[3,16,55,17],
[3,16,55,18],
[3,16,55,19],
[3,16,55,20],
[3,16,55,21],
[3,16,55,22],
[3,16,55,40],
[3,16,55,284],
[3,16,55,406],
[3,16,55,470],
[3,16,55,504],
[3,16,55,505],
[3,16,55,506],
[3,16,55,535],
[3,16,55,555],
[3,16,55,570],
[3,16,55,585],
[3,16,55,597],
[3,16,55,609],
[3,16,55,616],
[3,16,55,623],
[3,16,55,627],
[3,16,55,630],
[3,16,55,633],
[3,16,55,636],
[3,16,55,639],
[3,16,55,641],
[3,16,55,644],
[3,16,55,647],
[3,16,55,650],
[3,16,56,35],
[3,16,56,279],
[3,16,56,416],
[3,16,56,476],
[3,16,56,513],
[3,16,56,534],
[3,16,56,554],
[3,16,57,569],
[3,16,57,584],
[3,16,57,596],
[3,16,57,607],
[3,16,57,617],
[3,16,57,624],
[3,16,63,209],
[3,16,64,173],
[3,16,64,349],
[3,16,64,418],
[3,16,65,47],
[3,16,65,285],
[3,16,65,407],
[3,16,65,484],
[3,16,65,518],
[3,16,65,540],
[3,16,66,210],
[3,16,66,372],
[3,16,66,442],
[3,16,66,492],
[3,16,66,526],
[3,16,66,548],
[3,16,66,565],
[3,16,68,119],
[3,16,68,299],
[3,16,70,55],
[3,16,70,289],
[3,16,70,410],
[3,16,70,473],
[3,16,70,509],
[3,16,70,538],
[3,16,70,557],
[3,16,70,572],
[3,16,70,586],
[3,16,70,598],
[3,16,75,201],
[3,16,75,368],
[3,16,75,436],
[3,16,75,486],
[3,16,77,193],
[3,16,81,54],
[3,16,81,288],
[3,16,81,409],
[3,16,81,472],
[3,16,81,508],
[3,16,81,531],
[3,16,81,551],
[3,16,81,574],
[3,16,81,588],
[3,16,81,600],
[3,16,89,28],
[3,16,89,275],
[3,16,89,408],
[3,16,89,471],
[3,16,89,507],
[3,16,89,530],
[3,16,89,550],
[3,16,89,567],
[3,16,89,581],
[3,16,89,601],
[3,16,89,610],
[3,16,89,618],
[3,16,96,60],
[3,16,96,294],
[3,16,96,413],
[3,16,96,493],
[3,16,96,522],
[3,16,96,542],
[3,16,96,559],
[3,16,96,575],
[3,16,96,589],
[3,16,96,602],
[3,16,98,116],
[3,16,98,297],
[3,16,98,423],
[3,16,98,480],
[3,16,98,521],
[3,16,98,541],
[3,16,98,562],
[3,16,98,579],
[3,16,98,592],
[3,16,98,605],
[3,16,98,613],
[3,16,98,620],
[3,16,101,231],
[3,16,102,267],
[3,16,105,252],
[3,16,110,246],
[3,16,110,384],
[3,16,110,447],
[3,17,114,691],
[3,17,115,692],
[3,17,11,191],
[3,17,15,257],
[3,17,15,387],
[3,17,15,454],
[3,17,55,430],
[3,18,114,693],
[3,18,115,694],
[3,18,1,205],
[3,18,1,370],
[3,18,1,451],
[3,18,13,179],
[3,18,13,351],
[3,18,13,420],
[3,18,55,207],
[3,18,55,369],
[3,18,55,452],
[3,18,65,204],
[3,18,65,371],
[3,18,65,450],
[3,19,114,695],
[3,19,45,45],
[3,19,45,281],
[3,19,81,44],
[3,19,81,283],
[3,19,98,46],
[3,19,98,282],
[3,20,114,696],
[3,20,51,59],
[3,20,51,293],
[3,20,51,414],
[3,21,114,697],
[3,21,45,32],
[3,21,63,34],
[3,21,63,278],
[3,21,81,33],
[3,21,98,31],
[3,22,114,698],
[3,22,45,62],
[3,22,45,296],
[3,25,114,699],
[3,25,115,700],
[3,25,41,38],
[3,25,45,269],
[3,25,45,396],
[3,25,55,39],
[3,25,96,263],
[3,26,89,23],
[3,28,45,36],
[3,28,45,280],
[3,28,45,405],
[3,28,45,469],
[3,28,45,503],
[3,29,114,701],
[3,29,88,48],
[3,29,89,49],
[3,29,89,286],
[3,30,114,702],
[3,30,45,237],
[3,30,55,238],
[3,30,57,236],
[3,31,98,233],
[3,33,114,703],
[3,33,115,704],
[3,33,13,56],
[3,33,13,290],
[3,33,45,254],
[3,33,45,386],
[3,33,45,448],
[3,33,45,497],
[3,33,45,524],
[3,33,45,545],
[3,33,45,563],
[3,33,45,577],
[3,33,45,590],
[3,33,45,603],
[3,33,45,611],
[3,33,45,619],
[3,33,81,264],
[3,33,81,393],
[3,33,81,459],
[3,38,114,705],
[3,38,115,706],
[3,38,11,190],
[3,38,27,192],
[3,38,45,235],
[3,38,45,379],
[3,38,45,443],
[3,38,55,197],
[3,38,55,373],
[3,38,55,437],
[3,38,55,488],
[3,38,55,519],
[3,38,96,51],
[3,41,114,707],
[3,41,59,247],
[3,45,114,708],
[3,45,115,709],
[3,46,90,6],
[3,46,90,7],
[3,46,90,8],
[3,47,7,184],
[3,47,7,355],
[3,48,115,710],
[4,32,114,711],
[4,32,115,712],
[4,32,1,52],
[4,32,5,251],
[4,32,41,250],
[4,32,45,245],
[4,32,49,273],
[4,32,49,400],
[4,32,49,465],
[4,32,55,249],
[4,32,74,271],
[4,32,74,399],
[4,39,114,713],
[4,39,50,2],
[4,39,50,11],
[4,39,70,4],
[4,39,70,9],
[4,39,81,1],
[4,39,81,3],
[4,39,81,5],
[4,39,81,10],
[4,39,81,12],
[4,39,81,13],
[4,40,114,714],
[4,50,34,268],
[5,27,113,234],
[5,42,113,241],
[5,42,113,380],
[6,8,114,715],
[6,8,115,716],
[6,23,114,717],
[6,23,115,718],
[6,24,114,719],
[6,24,115,720],
[7,44,52,180],
[7,44,52,383],
[7,44,52,445],
[7,44,52,495],
[7,49,114,721],
[7,49,115,722],
[7,49,29,265],
[7,49,29,394],
[7,49,29,462],
[7,49,52,266],
[7,49,52,395],
[7,49,52,460],
[8,43,114,723],
[9,34,114,724],
[9,34,115,725],
[9,35,114,726],
[10,36,114,727],
[11,66,114,728]];



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

