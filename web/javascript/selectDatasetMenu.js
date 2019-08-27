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
{txt:"AIL LGSM F34 (Array)",val:"AIL-LGSM-F34-A"},
{txt:"AIL LGSM F34 (GBS)",val:"AIL-LGSM-F34-GBS"},
{txt:"AIL LGSM F34 and F39-43 (GBS)",val:"AIL-LGSM-F34-F39-43-GBS"},
{txt:"AIL LGSM F39-43 (GBS)",val:"AIL-LGSM-F39-43-GBS"},
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
{txt:'Infralimbic Cortex mRNA',val:'Infralimbic Cortex mRNA'},
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
{txt:'Orbitofrontal Cortex mRNA',val:'Orbitofrontal Cortex mRNA'},
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
{txt:'Prelimbic Cortex mRNA',val:'Prelimbic Cortex mRNA'},
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
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Gene Level (Dec09) RMA',val:'Striatum_Exon_1212'},
{txt:'UCSD AIL Hippocampus (Apr18) RNA-Seq Log2',val:'UCSD_AIL_HIP_RNA-Seq_log2_0418'},
{txt:'UCSD AIL Striatum (Apr18) RNA-Seq Log2',val:'UCSD_AIL_STR_RNA-Seq_log2_0418'},
{txt:'UCSD AIL Prefrontal Cortex (Apr18) RNA-Seq Log2',val:'UCSD_AIL_PFC_RNA-Seq_log2_0418'},
{txt:'JAX BXD Hippocampal Proteome (Feb19)',val:'JAX-BXD-Hip-Pro-0219'},
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
{txt:'UCSD AIL Striatum (Apr18) RNA-Seq',val:'UCSD_AIL_STR_RNA-Seq_0418'},
{txt:'UCSD AIL Hippocampus (Apr18) RNA-Seq',val:'UCSD_AIL_HIP_RNA-Seq_0418'},
{txt:'UCSD AIL Prefrontal Cortex (Apr18) RNA-Seq',val:'UCSD_AIL_PFC_RNA-Seq_0418'},
{txt:'UTHSC BXD Harvested Liver RNA-Seq (Aug18) Log2',val:'UTHSC-BXD-Harv_Liv-0118'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Gene Level',val:'DoDCMMRPRetMoGene2_0515'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Gene Level (Apr14) RMA',val:'UTHSC_GutGL_0414'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction, Chow Diet Cohorts (Jul 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtACD0817'},
{txt:'INIA-UTHSC Prefrontal Cortex CIE Affy MTA 1.0 GeneLevel (Apr17) RMA **',val:'INIA_UTHSC_PFC_AffyMTA1_May17'},
{txt:'INIA-UTHSC Hippocampus CIE Affy MTA 1.0 GeneLevel (Mar18) RMA',val:'INIA_UTHSC_Hip_AffyMTA1_May17'},
{txt:'INIA-UTHSC Striatum CIE Affy MTA 1.0 GeneLevel (Apr17) RMA **',val:'INIA_UTHSC_Str_AffyMTA1_May17'},
{txt:'INIA-UTHSC Midbrain CIE Affy MTA 1.0 GeneLevel (Apr17) RMA',val:'INIA_UTHSC_Mid_AffyMTA1_Apr17'},
{txt:'EPFL/ETHZ BXD Liver, Chow Diet (Jun16) Top100 SWATH',val:'EPFLETHZBXDprotCD0514'},
{txt:'UTHSC Hippocampus All Treatments Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_All_AffyMTA1_Mar17'},
{txt:'UTHSC Human Islets Affy Human Gene 2.0 ST (Mar17) RMA **',val:'UTHSC_HuIslets_Mar17'},
{txt:'UCLA BXD Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_BXD_Liv_Jan16'},
{txt:'UCLA CXB Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_CXB_Liv_Jan16'},
{txt:'UCLA CXB Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_CXB_Aor_Jan16'},
{txt:'UCLA AXB/BXA Liver Affy M430 2.0 (Jan16) RMA',val:'UCLA_AXB_BXA_Liv_Jan16'},
{txt:'UCLA BXD Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_BXD_Aor_Jan16'},
{txt:'UCLA AXB/BXA Aorta Affy M430 2.0 (Jan16) RMA',val:'UCLA_AXB_BXA_Aor_Jan16'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_PFC_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_STR_RNA-Seq_log2_0117'},
{txt:'UCSD CFW Hippocampus (Jan17) RNA-Seq Log2 Z-score',val:'UCSD_CFW_HIP_RNA-Seq_log2_0117'},
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
{txt:'Hippocampus Consortium M430v2 (Jun06) PDNN',val:'HC_M2_0606_P'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Gene Level (Oct13) RMA',val:'EPFLADGL1013'},
{txt:'INIA LCM (11 Regions) CIE/AIR/BAS RNA-seq Transcript Level (Dec15)',val:'INIA_LCM_CAB_1215'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA',val:'UTHSC_SPL_RMA_1210'},
{txt:'RTI RCMRC BXD Fecal Metabolites CD+HFD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetlog0814'},
{txt:'Hippocampus Mouse Transcriptome Assay 1.0 Gene Level Main (Nov15) RMA **',val:'CMS_Hipp1115'},
{txt:'GTEXv5 Human Adrenal Gland RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdrGla_0915'},
{txt:'GTEXv5 Human Colon-Sigmoid RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColSig_0915'},
{txt:'GTEXv5 Human Brain Cerebellum RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCe_0915'},
{txt:'GTEXv5 Human Brain Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCtx_0915'},
{txt:'GTEXv5 Human Brain Cerebellar Hemisphere RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerH_0915'},
{txt:'GTEXv5 Human Brain Hypothalamus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hiptha_0915'},
{txt:'GTEXv5 Human Cervix-Ectocervix RefSeq (Sep15) RPKM log2',val:'GTEXv5_CerEct_0915'},
{txt:'GTEXv5 Human Brain Frontal Cortex BA9 RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrFr_0915'},
{txt:'GTEXv5 Human Cells-Transformed Fibroblasts RefSeq (Sep15) RPKM log2',val:'GTEXv5_CTF_0915'},
{txt:'GTEXv5 Human Brain Putamen Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_PutB_0915'},
{txt:'GTEXv5 Human Brain Hippocampus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Hip_0915'},
{txt:'GTEXv5 Human Cells-EBV-Transformed Lymphocytes RefSeq (Sep15) RPKM log2',val:'GTEXv5_EBV_0915'},
{txt:'GTEXv5 Human Breast Mammary Tissue RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrMa_0915'},
{txt:'GTEXv5 Human Brain Substantia Nigra RefSeq (Sep15) RPKM log2',val:'GTEXv5_SubN_0915'},
{txt:'GTEXv5 Human Brain Nucleus Accumbens Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_NuAcc_0915'},
{txt:'GTEXv5 Human Brain Spinal Cord Cervical C-1 RefSeq (Sep15) RPKM log2',val:'GTEXv5_SpCo_0915'},
{txt:'GTEXv5 Human Cells-Leukemia Cell Line CML RefSeq (Sep15) RPKM log2',val:'GTEXv5_BM_0915'},
{txt:'GTEXv5 Human Colon-Transverse RefSeq (Sep15) RPKM log2',val:'GTEXv5_ColTra_0915'},
{txt:'GTEXv5 Human Esophagus - Mucosa RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMu_0915'},
{txt:'GTEXv5 Human Prostate RefSeq (Sep15) RPKM log2',val:'GTEXv5_Prost_0915'},
{txt:'GTEXv5 Human Skin-Not Sun Exposed-Suprapubic RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkN_0915'},
{txt:'GTEXv5 Human Skin-Sun Exposed-Lower Leg RefSeq (Sep15) RPKM log2',val:'GTEXv5_SkS_0915'},
{txt:'GTEXv5 Human Small Intestine - Terminal Ileum RefSeq (Sep15) RPKM log2',val:'GTEXv5_SInt_0915'},
{txt:'GTEXv5 Human Stomach RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sto_0915'},
{txt:'GTEXv5 Human Testis RefSeq (Sep15) RPKM log2',val:'GTEXv5_Test_0915'},
{txt:'GTEXv5 Human Nerve - Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_Tib_0915'},
{txt:'GTEXv5 Human Thyroid RefSeq (Sep15) RPKM log2',val:'GTEXv5_Thy_0915'},
{txt:'GTEXv5 Human Uterus RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ut_0915'},
{txt:'GTEXv5 Human Vagina RefSeq (Sep15) RPKM log2',val:'GTEXv5_Vag_0915'},
{txt:'GTEXv5 Human Pituitary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Pit_0915'},
{txt:'GTEXv5 Human Pancreas RefSeq (Sep15) RPKM log2',val:'GTEXv5_Panc_0915'},
{txt:'GTEXv5 Human Esophagus - Muscularis RefSeq (Sep15) RPKM log2',val:'GTEXv5_EsoMus_0915'},
{txt:'GTEXv5 Human Fallopian Tube RefSeq (Sep15) RPKM log2',val:'GTEXv5_Fatu_0915'},
{txt:'GTEXv5 Human Heart - Atrial Appendage RefSeq (Sep15) RPKM log2',val:'GTEXv5_HAA_0915'},
{txt:'GTEXv5 Human Heart - Left Ventricle RefSeq (Sep15) RPKM log2',val:'GTEXv5_LV_0915'},
{txt:'GTEXv5 Human Kidney - Cortex RefSeq (Sep15) RPKM log2',val:'GTEXv5_Kidn_0915'},
{txt:'GTEXv5 Human Spleen RefSeq (Sep15) RPKM log2',val:'GTEXv5_Sple_0915'},
{txt:'GTEXv5 Human Liver RefSeq (Sep15) RPKM log2',val:'GTEXv5_Liv_0915'},
{txt:'GTEXv5 Human Lung RefSeq (Sep15) RPKM log2',val:'GTEXv5_Lung_0915'},
{txt:'GTEXv5 Human Muscle - Skeletal RefSeq (Sep15) RPKM log2',val:'GTEXv5_MuSk_0915'},
{txt:'GTEXv5 Human Ovary RefSeq (Sep15) RPKM log2',val:'GTEXv5_Ov_0915'},
{txt:'GTEXv5 Human Whole Blood RefSeq (Sep15) RPKM log2',val:'GTEXv5_Wbl_0915'},
{txt:'GTEXv5 Human Adipose Visceral Omentum RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdiVis_0915'},
{txt:'GTEXv5 Human Artery Tibial RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtTib_0915'},
{txt:'GTEXv5 Human Adipose Subcutaneous RefSeq (Sep15) RPKM log2',val:'GTEXv5_AdipSub_0915'},
{txt:'GTEXv5 Human Esophagus - Gastroesophageal Junction RefSeq (Sep15) RPKM log2',val:'GTEXv5_GastJun_0915'},
{txt:'GTEXv5 Human Artery Aorta RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtAor_0915'},
{txt:'GTEXv5 Human Artery Coronary RefSeq (Sep15) RPKM log2',val:'GTEXv5_ArtCor_0915'},
{txt:'GTEXv5 Human Brain Caudate Basal Ganglia RefSeq (Sep15) RPKM log2',val:'GTEXv5_BrCa_0915'},
{txt:'GTEXv5 Human Brain Anterior Cingulate Cortex BA24 RefSeq (Sep15) RPKM log2',val:'GTEXv5_AntCtx_0915'},
{txt:'GTEXv5 Human Salivary Gland Minor RefSeq (Sep15) RPKM log2',val:'GTEXv5_SalGl_0915'},
{txt:'GTEXv5 Human Brain Amygdala RefSeq (Sep15) RPKM log2',val:'GTEXv5_Amy_0915'},
{txt:'GTEXv5 Human Bladder RefSeq (Sep15) RPKM log2',val:'GTEXv5_Bla_0915'},
{txt:'UTHSC BXD Aged Hippocampus Affy Mouse Gene 1.0 ST (Jun15) RMA',val:'UTHSC_BXDAged_0615'},
{txt:'CRTD BXD Hippocampal Precursor Cells ILM MouseWG-6_R13 (Dec14) Quantile',val:'CRTD_HipPreCell1214'},
{txt:'UTHSC Elicited Peritoneal Neutrophils Affy MoGene 2.0 ST (Oct14) RMA **',val:'UTHSC-Neut-1014'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence (Nov12) RPKM Untrimmed',val:'UTHSC_BXD_WB_RNASeq1112'},
{txt:'GTEx Human Muscle (Mar14) RPKM Log2',val:'GTEx_log2_Muscle_0314'},
{txt:'GTEx Human Pituitary (Mar14) RPKM Log2',val:'GTEx_log2_Pitui_0314'},
{txt:'GTEx Human Pancreas (Mar14) RPKM Log2',val:'GTEx_log2_Pancr_0314'},
{txt:'GTEx Human Ovary (Mar14) RPKM Log2',val:'GTEx_log2_Ovary_0314'},
{txt:'GTEx Human Heart - Left Ventricle (Mar14) RPKM Log2',val:'GTEx_log2_HeartLV_0314'},
{txt:'GTEx Human Hypothalamus (Mar14) RPKM Log2',val:'GTEx_log2_Hypot_0314'},
{txt:'GTEx Human Nucleus Accumbens (Mar14) RPKM Log2',val:'GTEx_log2_Nucle_0314'},
{txt:'GTEx Human Kidney (Mar14) RPKM Log2',val:'GTEx_log2_Kidne_0314'},
{txt:'GTEx Human Cells - Leukemia Cell Line (CML) (Mar14) RPKM Log2',val:'GTEx_log2_CellsLe_0314'},
{txt:'GTEx Human Lung (Mar14) RPKM Log2',val:'GTEx_log2_Lung_0314'},
{txt:'GTEx Human Nerve - Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Nerve_0314'},
{txt:'GTEx Human Putamen (Mar14) RPKM Log2',val:'GTEx_log2_Putam_0314'},
{txt:'GTEx Human Subcutaneous (Mar14) RPKM Log2',val:'GTEx_log2_Subcu_0314'},
{txt:'GTEx Human Liver (Mar14) RPKM Log2',val:'GTEx_log2_Liver_0314'},
{txt:'GTEx Human Whole Blood (Mar14) RPKM Log2',val:'GTEx_log2_WholeB_0314'},
{txt:'GTEx Human Visceral (Mar14) RPKM Log2',val:'GTEx_log2_Visce_0314'},
{txt:'GTEx Human Vagina (Mar14) RPKM Log2',val:'GTEx_log2_Vagin_0314'},
{txt:'GTEx Human Uterus (Mar14) RPKM Log2',val:'GTEx_log2_Uterus_0314'},
{txt:'GTEx Human Tibial (Mar14) RPKM Log2',val:'GTEx_log2_Tibial_0314'},
{txt:'GTEx Human Thyroid (Mar14) RPKM Log2',val:'GTEx_log2_Thyro_0314'},
{txt:'GTEx Human Testis (Mar14) RPKM Log2',val:'GTEx_log2_Testi_0314'},
{txt:'GTEx Human Substantia Nigra (Mar14) RPKM Log2',val:'GTEx_log2_Subst_0314'},
{txt:'GTEx Human Stomach (Mar14) RPKM Log2',val:'GTEx_log2_Stoma_0314'},
{txt:'GTEx Human Spinal Cord (Mar14) RPKM Log2',val:'GTEx_log2_Spina_0314'},
{txt:'GTEx Human Skin-Sun Exposed (Lower leg) (Mar14) RPKM Log2',val:'GTEx_log2_SkinE_0314'},
{txt:'GTEx Human Skin-Not Sun Exposed (Suprapubic) (Mar14) RPKM Log2',val:'GTEx_log2_SkinN_0314'},
{txt:'GTEx Human Esophagus - Muscularis (Mar14) RPKM Log2',val:'GTEx_log2_EsophMus_0314'},
{txt:'GTEx Human Cells - Transformed Fibroblasts (Mar14) RPKM Log2',val:'GTEx_log2_CellsTr_0314'},
{txt:'GTEx Human Prostate (Mar14) RPKM Log2',val:'GTEx_log2_Prost_0314'},
{txt:'GTEx Human Anterior Cingulate Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Anter_0314'},
{txt:'GTEx Human Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_CellsEBV_0314'},
{txt:'GTEx Human Adrenal Gland (Mar14) RPKM Log2',val:'GTEx_log2_Adren_0314'},
{txt:'GTEx Human Caudate (Mar14) RPKM Log2',val:'GTEx_log2_Cauda_0314'},
{txt:'GTEx Human Breast - Mammary Tissue (Mar14) RPKM Log2',val:'GTEx_log2_Breas_0314'},
{txt:'GTEx Human Blood, Cells - EBV-Transformed Lymphocytes (Mar14) RPKM Log2',val:'GTEx_log2_Blood_0314'},
{txt:'GTEx Human Aorta (Mar14) RPKM Log2',val:'GTEx_log2_Aorta_0314'},
{txt:'GTEx Human Cerebellar Cortex (Mar14) RPKM Log2',val:'GTEx_log2_CerebC_0314'},
{txt:'GTEx Human Cerebellum (Mar14) RPKM Log2',val:'GTEx_log2_CER_0314'},
{txt:'GTEx Human Colon - Transverse (Mar14) RPKM Log2',val:'GTEx_log2_Colon_0314'},
{txt:'GTEx Human Fallopian Tube (Mar14) RPKM Log2',val:'GTEx_log2_Fallo_0314'},
{txt:'GTEx Human Esophagus - Mucosa (Mar14) RPKM Log2',val:'GTEx_log2_EsophMuc_0314'},
{txt:'GTEx Human Frontal Cortex (Mar14) RPKM Log2',val:'GTEx_log2_Front_0314'},
{txt:'GTEx Human Coronary (Mar14) RPKM Log2',val:'GTEx_log2_Coron_0314'},
{txt:'GTEx Human Hippocampus (Mar14) RPKM Log2',val:'GTEx_log2_HIP_0314'},
{txt:'GTEx Human Cerebellar Hemisphere (Mar14) RPKM Log2',val:'GTEx_log2_CerebH_0314'},
{txt:'GTEx Human Heart - Atrial Appendage (Mar14) RPKM Log2',val:'GTEx_log2_HeartAt_0314'},
{txt:'GTEx Human Amygdala (Mar14) RPKM Log2',val:'GTEx_log2_AMY_0314'},
{txt:'UTHSC BXD Hippocampus Ion Torrent microRNA (Feb14) RPKM **',val:'UTHSC_BXD_Hip_miRNASeq0214'},
{txt:'GSE15745 NIH Human Brain Temporal Cerebral ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_TC0510'},
{txt:'GSE15745 NIH Human Brain Pons ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Po0510'},
{txt:'GSE15745 NIH Human Brain Cerebellum ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_Cer0510'},
{txt:'GSE15745 NIH Human Brain Prefrontal Cortex ILM humanRef-8 v2.0 (May10) RankInv',val:'GSE15745-GPL6104_PFC0510'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD+HFD (Jun14) **',val:'EPFL-LISP_MusPMetCDHFD1213'},
{txt:'UCLA GSE27483 BXD Bone Femur ILM Mouse WG-6 v1, v1.1 (Jan13) RSN',val:'UCLA_BXD_Femur_0113_RSN'},
{txt:'GSE11882 UCI Human Hippocampus Affy U133 Plus2 (Sep13) RMA',val:'UCI_HC_0913'},
{txt:'GSE11882 UCI Human Postcentral Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_PCG_0913'},
{txt:'GSE11882 UCI Human Entorhinal Cortex Affy U133 Plus2 (Sep13) RMA',val:'UCI_EC_0913'},
{txt:'GSE11882 UCI Human Superior Frontal Gyrus Affy U133 Plus2 (Sep13) RMA',val:'UCI_SG_0913'},
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
{txt:'UCLA BHHBF2 Muscle (2005) mlratio',val:'UCLA_BHHBF2_MUSCLE_2005'},
{txt:'UCLA BHHBF2 Adipose (2005) mlratio',val:'UCLA_BHHBF2_ADIPOSE_2005'},
{txt:'UCLA BHHBF2 Brain (2005) mlratio',val:'UCLA_BHHBF2_BRAIN_2005'},
{txt:'GSE16780 UCLA Mouse MDP Liver Affy HT M430A (Sep11) RMA',val:'GSE16780MDP_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Liver (2005) mlratio',val:'UCLA_BHHBF2_LIVER_2005'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_PG_RMA_0612'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA',val:'INIA_Adrenal_RMA_0612'},
{txt:'INIA Macaca fasicularis Nucleus Accumbens (Jan10) RMA **',val:'INIA_MacFas_Ac_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Liver (2005) mlratio',val:'UCLA_CTB6B6CTF2_LIVER_2005'},
{txt:'UCLA CTB6/B6CTF2 Muscle (2005) mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_2005'},
{txt:'INIA Macaca fasicularis Hippocampus (Jan10) RMA **',val:'INIA_MacFas_Hc_RMA_0110'},
{txt:'UCLA CTB6/B6CTF2 Adipose (2005) mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_2005'},
{txt:'INIA Macaca fasicularis Amygdala (Jan10) RMA **',val:'INIA_MacFas_AMG_RMA_0110'},
{txt:'VU BXD Midbrain Agilent SurePrint G3 Mouse GE (May12) Quantile',val:'VUBXDMouseMidBrainQ0512'},
{txt:'BIDMC/UTHSC Dev Neocortex P3 ILMv6.2 (Nov11) RankInv',val:'DevNeocortex_ILM6.2P3RInv_1111'},
{txt:'Human Primary Auditory (A1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_A1C_0711'},
{txt:'GN330 Human Amygdala Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_AMY_0711'},
{txt:'Human Cerebellar Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_CBC_0711'},
{txt:'Human Dorsolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_DFC_0711'},
{txt:'Human Hippocampus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_HIP_0711'},
{txt:'Human Posterior Inferior Parietal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_IPC_0711'},
{txt:'Human Ventrolateral Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_VFC_0711'},
{txt:'Human Striatum Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STR_0711'},
{txt:'Human Posterior Superior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_STC_0711'},
{txt:'Human Primary Somatosensory (S1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_S1C_0711'},
{txt:'Human Orbital Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_OFC_0711'},
{txt:'Human Medial Prefrontal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MFC_0711'},
{txt:'Human Mediodorsal Nucleus of Thalamus Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_MD_0711'},
{txt:'Human Primary Motor (M1) Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_M1C_0711'},
{txt:'Human Inferior Temporal Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_ITC_0711'},
{txt:'Human Primary Visual Cortex Affy Hu-Exon 1.0 ST (Jul11) Quantile',val:'KIN_YSM_V1C_0711'},
{txt:'HBTRC-MLC Human Prefrontal Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLPFC_0611'},
{txt:'HBTRC-MLC Human Visual Cortex Agilent (Jun11) mlratio',val:'HBTRC-MLVC_0611'},
{txt:'INIA Amygdala Cohort Affy MoGene 1.0 ST (Mar11) RMA',val:'INIA_AmgCoh_0311'},
{txt:'GSE9588 Human Liver Normal (Mar11) Both Sexes',val:'HLC_0311'},
{txt:'HZI Thelp M430v2 (Feb11) RMA',val:'RTHC_0211_R'},
{txt:'GSE5281 Human Brain Normal Full Liang (Jul09) RMA',val:'GSE5281_F_RMA_N_0709'},
{txt:'OHSU HS-CC Striatum ILM6v1 (Feb11) RankInv',val:'OHSU_HS-CC_ILMStr_0211'},
{txt:'NCSU Drosophila Whole Body (Jan11) RMA',val:'NCSU_DrosWB_LC_RMA_0111'},
{txt:'Hippocampus Consortium M430v2 (Jun06) RMA MDP',val:'HC_M2_0606_MDP'},
{txt:'OX UK HS ILM6v1.1 Hippocampus (May 2010) RankInv',val:'OXUKHS_ILMHipp_RI0510'},
{txt:'OX UK HS ILM6v1.1 Lung (May 2010) RankInv',val:'OXUKHS_ILMLung_RI0510'},
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
{txt:'UCLA BXD and BXH Cartilage v2',val:'UCLA_BXDBXH_CARTILAGE_V2'},
{txt:'UCLA BXH and BXD Cartilage v2',val:'UCLA_BXHBXD_CARTILAGE_V2'},
{txt:'UCLA BHF2 Muscle Male mlratio **',val:'UCLA_BHF2_MUSCLE_MALE'},
{txt:'UCLA BHF2 Adipose Male mlratio',val:'UCLA_BHF2_ADIPOSE_MALE'},
{txt:'UCLA BHF2 Brain Male mlratio',val:'UCLA_BHF2_BRAIN_MALE'},
{txt:'UCLA BHF2 Liver Male mlratio',val:'UCLA_BHF2_LIVER_MALE'},
{txt:'UCLA BDF2 Liver (1999) mlratio',val:'UCLA_BDF2_LIVER_1999'},
{txt:'Stuart Spleen M430v2 (Nov07) RMA',val:'STSPL_1107_R'},
{txt:'VCU LXS PFC Sal M430A 2.0 (Aug06) RMA',val:'VCUSal_0806_R'},
{txt:'Barley1 Leaf MAS 5.0 SCRI (Dec06)',val:'B30_K_1206_M'},
{txt:'Barley1 Embryo gcRMA SCRI (Dec06)',val:'B139_K_1206_R'},
{txt:'HZI Treg M430v2 (Feb11) RMA',val:'RTC_1106_R'},
{txt:'UIOWA Eye mRNA RAE230v2 (Sep06) RMA',val:'UIOWA_Eye_RMA_0906'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) PDNN',val:'HC_M2CB_1205_P'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) MAS5',val:'SA_M2_0905_M'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Aug05) MAS5',val:'FT_2A_0805_M'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) MAS5',val:'BRF2_M_0805_M'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) MAS5',val:'KI_2A_0405_M'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) MAS5',val:'LVF2_M_0704_M'},
{txt:'HQF Striatum Affy Mouse Exon 1.0ST Exon Level (Dec09) RMA',val:'Striatum_Exon_0209'},
{txt:'DoD Retina Normal Affy MoGene 2.0 ST (May15) RMA Exon Level',val:'DoDCMMRPRetMoGene2Ex_0515'},
{txt:'UTHSC Mouse BXD Gastrointestinal Affy MoGene 1.0 ST Exon Level (Apr14) RMA',val:'UTHSC_GutExL_0414'},
{txt:'UTHSC/ETHZ/EPFL BXD Liver Polar Metabolites Extraction, HFD Cohorts (Jul 2017) log2',val:'UTHSC-ETHZ-EPFL_LivPMetExtAHFD0817'},
{txt:'INIA-UTHSC Midbrain CIE Affy MTA 1.0 Exon Level (Apr17) RMA',val:'INIA_UTHSC_Mid_AffyMTA1_Ex_May17'},
{txt:'EPFL/ETHZ BXD Liver, High Fat Diet (Jun16) Top100 SWATH',val:'EPFLETHZBXDprotHFD0514'},
{txt:'UTHSC Hippocampus Saline Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_Sal_AffyMTA1_Mar17'},
{txt:'UCSD CFW Prefrontal Cortex (Jan17) RNA-Seq',val:'UCSD_CFW_PFC_RNA-Seq_0117'},
{txt:'UCSD CFW Striatum (Jan17) RNA-Seq',val:'UCSD_CFW_SPL_RNA-Seq_0117'},
{txt:'UCSD CFW Hippocampus RNA-Seq (Jan17) FPKM Quantile',val:'UCSD_CFW_HIP_RNA-Seq_0117'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverRMA0413'},
{txt:'EPFL/LISP BXD HFD Muscle Affy Mouse Gene 1.0 ST (Dec11) RMA',val:'EPFLMouseMuscleHFDRMA1211'},
{txt:'UTHSC B6D2 Retina Affy MoGene 1.0ST (Sep16) Exon Level RMA **',val:'UTHSC_mm9_B6D2_RetEx_0916'},
{txt:'EPFL/ETHZ BXD Brown Adipose, Isolated Mitochondria Proteome, Chow Diet (Apr16) Light SWATH',val:'EPFL_AdiMitPro0416'},
{txt:'VCU BXD PFC EtOH M430 2.0 (Dec06) RMA',val:'VCUEtOH_1206_R'},
{txt:'VCU BXD NAc CIE Air Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_Nac_CIE_Air_0416'},
{txt:'UCAMC LXS Whole Brain Saline RNA Sequence (Feb16) FPKM **',val:'UCAMC_LXSBrSal_RNA-Seq_0216'},
{txt:'EPFL/LISP BXD CD Brown Adipose Affy Mouse Gene 2.0 ST Exon Level (Oct13) RMA',val:'EPFLADEL1013'},
{txt:'Hippocampus Consortium M430v2 (Jun06) MAS5',val:'HC_M2_0606_M'},
{txt:'INIA LCM (11 Regions) CIE/AIR RNA-seq Transcript Level (Dec15)',val:'INIA_LCM_1215'},
{txt:'UTHSC Affy MoGene 1.0 ST Spleen (Dec10) RMA Set1',val:'UTHSC_SPLs1_RMA_1210'},
{txt:'RTI RCMRC BXD Fecal Metabolites HFD (Aug14) Log2',val:'RTI_RCMRC-BXDFecMetHFlog0814'},
{txt:'Hippocampus Mouse Transcriptome Assay 1.0 Gene Level Z-Score (Nov15) RMA **',val:'CMS_Hipp_ZScr_1115'},
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
{txt:'UCLA BHHBF2 Muscle Male Only',val:'UCLA_BHHBF2_MUSCLE_MALE'},
{txt:'UCLA BHHBF2 Adipose Male Only',val:'UCLA_BHHBF2_ADIPOSE_MALE'},
{txt:'UCLA BHHBF2 Brain Male Only',val:'UCLA_BHHBF2_BRAIN_MALE'},
{txt:'UCLA BHHBF2 Liver Male Only',val:'UCLA_BHHBF2_LIVER_MALE'},
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
{txt:'UCLA BHF2 Adipose Female mlratio',val:'UCLA_BHF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHF2 Muscle Female mlratio **',val:'UCLA_BHF2_MUSCLE_FEMALE'},
{txt:'UCLA BHF2 Liver Female mlratio',val:'UCLA_BHF2_LIVER_FEMALE'},
{txt:'UCLA BHF2 Brain Female mlratio',val:'UCLA_BHF2_BRAIN_FEMALE'},
{txt:'VCU LXS PFC EtOH M430A 2.0 (Aug06) RMA **',val:'VCUEtOH_0806_R'},
{txt:'Barley1 Leaf gcRMA SCRI (Dec06)',val:'B30_K_1206_R'},
{txt:'Barley1 Embryo MAS 5.0 SCRI (Dec06)',val:'B139_K_1206_M'},
{txt:'Hippocampus Consortium M430v2 CXB (Dec05) RMA',val:'HC_M2CB_1205_R'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) RMA',val:'SA_M2_0905_R'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) RMA',val:'BRF2_M_0805_R'},
{txt:'MDC/CAS/ICL Peritoneal Fat 230A (Jun05) RMA 2z+8',val:'FT_2A_0605_Rz'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) RMA 2z+8',val:'KI_2A_0405_Rz'},
{txt:'(B6 x BTBR)F2-ob/ob Liver mRNA M430 (Jul04) RMA',val:'LVF2_M_0704_R'},
{txt:'NCI Mammary mRNA M430 (July04) MAS5',val:'MA_M_0704_M'},
{txt:'EPFL/LISP BXD CD+HFD Gastrointestinal Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'EPFL-LISP_BXD_Col-CD+HFD0917'},
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
{txt:'BIDMC/UTHSC Dev Striatum P14 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P14RInv_1111'},
{txt:'EPFL/LISP BXD HFD Heart Affy Mouse Gene 2.0 ST Gene Level (Jan14) RMA',val:'EPFL-LISPBXDHeHFD0114'},
{txt:'EPFL/LISP BXD Muscle Polar Metabolites CD (Jun14) **',val:'EPFL-LISP_MusPMetCD1213'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Gene Level (Oct13) RMA **',val:'UTHSCWGU88BFMG1013'},
{txt:'UCLA CTB6/B6CTF2 Brain Females (2005) mlratio',val:'UCLA_CTB6B6CTF2_BRAIN_FEMALE'},
{txt:'GSE15222 Human Brain Alzheimer Myers (Apr09) RankInv',val:'GSE15222_F_A_RI_0409'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) Female',val:'INIA_Hyp_F_RMA_1110'},
{txt:'UBC/GSE23529 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'UBC-GSE23529HLT0613'},
{txt:'HBTRC-MLC Human Cerebellum Agilent AD (Jun11) mlratio',val:'HBTRC-MLC_AD_0611'},
{txt:'GE-NIAAA Cerebellum mRNA M430v2 (May05) MAS5',val:'GCB_M2_0505_M'},
{txt:'UTHSC Mouse BXD Whole Brain RNA Sequence Exon Level (Nov12) RPKM',val:'UTHSC_BXD_WB_RNASeqEx1112'},
{txt:'UTHSC B6D2RI Aged Hippocampus Affy Mouse Gene 1.0 ST (Sep12) RMA',val:'UTHSC_B6D2RI_H_0912'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males **',val:'PSU-B6D2F2_M0812'},
{txt:'GSE16780 UCLA Mouse BXH Liver Affy HT M430A (Sep11) RMA',val:'GSE16780BXH_UCLA_ML0911'},
{txt:'UCLA BHHBF2 Brain Female Only',val:'UCLA_BHHBF2_BRAIN_FEMALE'},
{txt:'UCLA BHHBF2 Muscle Female Only',val:'UCLA_BHHBF2_MUSCLE_FEMALE'},
{txt:'UCLA BHHBF2 Adipose Female Only',val:'UCLA_BHHBF2_ADIPOSE_FEMALE'},
{txt:'UCLA BHHBF2 Liver Female Only',val:'UCLA_BHHBF2_LIVER_FEMALE'},
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
{txt:'UCLA CTB6B6CTF2 Liver Male mlratio',val:'UCLA_CTB6B6CTF2_LIVER_MALE'},
{txt:'UCLA CTB6B6CTF2 Muscle Male mlratio',val:'UCLA_CTB6B6CTF2_MUSCLE_MALE'},
{txt:'UCLA CTB6B6CTF2 Adipose Male mlratio',val:'UCLA_CTB6B6CTF2_ADIPOSE_MALE'},
{txt:'UCLA BXD Cartilage',val:'UCLA_BXD_CARTILAGE'},
{txt:'UCLA BXH Cartilage',val:'UCLA_BXH_CARTILAGE'},
{txt:'UCLA BHF2 Muscle (June05) mlratio **',val:'UCLA_BHF2_MUSCLE_0605'},
{txt:'UCLA BHF2 Adipose (June05) mlratio',val:'UCLA_BHF2_ADIPOSE_0605'},
{txt:'UCLA BHF2 Brain (June05) mlratio',val:'UCLA_BHF2_BRAIN_0605'},
{txt:'UCLA BHF2 Liver (June05) mlratio',val:'UCLA_BHF2_LIVER_0605'},
{txt:'VCU LXS PFC Et vs Sal M430A 2.0 (Aug06) Sscore **',val:'VCUEt_vs_Sal_0806_R'},
{txt:'Barley1 Leaf gcRMAn SCRI (Dec06)',val:'B30_K_1206_Rn'},
{txt:'Mouse kidney M430v2 Sex Balanced (Aug06) RMA',val:'MA_M2_0806_R'},
{txt:'Barley1 Embryo0 gcRMA SCRI (Apr06)',val:'B150_K_0406_R'},
{txt:'OHSU/VA B6D2F2 Striatum M430v2 (Sep05) PDNN',val:'SA_M2_0905_P'},
{txt:'OHSU/VA B6D2F2 Brain mRNA M430 (Aug05) PDNN',val:'BRF2_M_0805_P'},
{txt:'MDC/CAS/ICL Kidney 230A (Apr05) RMA',val:'KI_2A_0405_R'},
{txt:'NCI Mammary mRNA M430 (July04) RMA',val:'MA_M_0704_R'},
{txt:'EPFL/LISP BXD CD Gastrointestinal Affy Clariom S GeneLevel Main (Sep17) RMA **',val:'EPFL-LISP_BXD_Col-CD0917'},
{txt:'UTHSC Hippocampus Stress Affy MTA 1.0 Gene Level (Mar17) RMA **',val:'UTHSC_EMSR_St_AffyMTA1_Mar17'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA',val:'EPFLMouseLiverCDRMA0413'},
{txt:'HEI Retina Normal Illumina V6.2 (Apr10) RankInv',val:'G2NEI_ILM_Retina_BXD_RI0410'},
{txt:'VCU BXD PFC CIE Air Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_PFC_CIE_Air_0416'},
{txt:'VCU BXD NAc CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA **',val:'VCU_BXD_Nac_CIE_Et_0416'},
{txt:'UMUTAffy Hippocampus Exon (Feb09) RMA',val:'UMUTAffyExon_0209_RMA'},
{txt:'EPFL/LISP BXD HFD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA',val:'EL_BXDHFDScWAT_0216'},
{txt:'EPFL/ETHZ BXD Liver, High Fat Diet Diet (Oct14) Top10 SWATH',val:'EPFLETHZBXDprotHF_LS1114'},
{txt:'BIDMC/UTHSC Dev Striatum P3 ILMv6.2 (Nov11) RankInv',val:'DevStriatum_ILM6.2P3RInv_1111'},
{txt:'EPFL/LISP BXD CD Heart Affy Mouse Gene 2.0 ST Exon Level (Jan14) RMA',val:'EPFL-LISPBXDHeCDEx0114'},
{txt:'UTHSC WGU88 Male Bone Femur AFFY Mouse Gene ST 2.0 Exon Level (Oct13) RMA **',val:'UTHSCWGU88BFMEx1013'},
{txt:'INIA Hypothalamus Affy MoGene 1.0 ST (Nov10) PCA Test v080913',val:'INIA_Hyp_PCA_0813_v4'},
{txt:'GRNG/GSE23545 Whole-Genome GXD Non-Tumorous Human Lung Tissues Affy HuRSTA array (Jun11) RMA',val:'GRNG-GSE23545HLT0613'},
{txt:'HBTRC-MLC Human Cerebellum Agilent HD (Jun11) mlratio',val:'HBTRC-MLC_HD_0611'},
{txt:'SJUT Cerebellum mRNA M430 (Mar05) RMA',val:'CB_M_0305_R'},
{txt:'EPFL/LISP BXD CD+HFD Muscle Affy Mouse Gene 1.0 ST (Nov12) RMA Exon Level',val:'EPFLMouseMuscleRMA_Ex1112'},
{txt:'PSU B6D2F2 Muscle Affy Mouse Genome 430 2.0 (Aug12) RMA Males Aged 200 **',val:'PSU-B6D2F2_M2000812'},
{txt:'INIA Adrenal Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_Adrenal_RMA_Ex_0612'},
{txt:'INIA Pituitary Affy MoGene 1.0ST (Jun12) RMA Exon Level',val:'INIA_PG_RMA_Ex_0612'},
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
{txt:'EPFL/LISP BXD HFC Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level',val:'EPFLMouseLiverHFCEx0413'},
{txt:'EPFL/LISP BXD CD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level',val:'EPFLMouseLiverCDEx0413'},
{txt:'EPFL/LISP BXD CD+HFD Liver Affy Mouse Gene 1.0 ST (Apr13) RMA Exon Level',val:'EPFLMouseLiverBothExRMA0413'},
{txt:'DoD Retina After Blast Affy MoGene 2.0 ST (Mar16) RMA Gene Level',val:'DoDTATRCRetBLMoGene2_0316'},
{txt:'VCU BXD PFC CIE Air Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_PFC_CIE_AirZ_0416'},
{txt:'VCU BXD NAc CIE EtOH Masked ComBat M430 2.0 (Apr16) RMA Z-score **',val:'VCU_BXD_Nac_CIE_EtZ_0416'},
{txt:'EPFL/LISP BXD CD Subcutaneous WAT Affy MTA 1.0 Gene Level (Feb16) RMA',val:'EL_BXDCDScWAT_0216'},
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
{txt:'UTHSC BXD Aged Hippocampus Affy MoGene1.0 ST (May15) RMA Gene Level',val:'UTHSC_BXD_AgeHipp0515'},
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
{txt:'AIL-LGSM-F34-A Phenotypes',val:'AIL-LGSM-F34-APublish'},
{txt:'AIL-LGSM-F34-GBS Phenotypes',val:'AIL-LGSM-F34-GBSPublish'},
{txt:'AIL-LGSM-F34-F39-43-GBS Phenotypes',val:'AIL-LGSM-F34-F39-43-GBSPublish'},
{txt:'AIL-LGSM-F39-43-GBS Phenotypes',val:'AIL-LGSM-F39-43-GBSPublish'},
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
{txt:'D2GM Phenotypes',val:'D2GMPublish'},
{txt:'B6D2 Phenotypes',val:'B6D2Publish'},
{txt:'HS Phenotypes',val:'HSPublish'},
{txt:'LXS Phenotypes',val:'LXSPublish'},
{txt:'LXS Genotypes',val:'LXSGeno'},
{txt:'Mouse Phenome Database',val:'MDPPublish'},
{txt:'MDP Genotypes',val:'MDPGeno'},
{txt:'NZBXFVB-N2 Phenotypes',val:'NZBXFVB-N2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Phenotypes',val:'C57BL-6JxC57BL-6NJF2Publish'},
{txt:'C57BL-6JxC57BL-6NJF2 Genotypes',val:'C57BL-6JxC57BL-6NJF2Geno'},
{txt:'Retina-RGC-Rheaume Phenotypes',val:'Retina-RGC-RheaumePublish'},
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
[1,55,117,657],
[1,55,3,107],
[1,55,4,105],
[1,55,5,63],
[1,55,6,114],
[1,55,7,112],
[1,55,8,109],
[1,55,9,115],
[1,55,12,79],
[1,55,14,75],
[1,55,16,111],
[1,55,17,74],
[1,55,19,71],
[1,55,20,66],
[1,55,21,67],
[1,55,22,65],
[1,55,23,69],
[1,55,24,64],
[1,55,25,80],
[1,55,26,110],
[1,55,31,108],
[1,55,32,81],
[1,55,33,94],
[1,55,35,95],
[1,55,37,70],
[1,55,39,96],
[1,55,40,97],
[1,55,45,73],
[1,55,46,68],
[1,55,50,98],
[1,55,56,100],
[1,55,58,101],
[1,55,66,102],
[1,55,68,88],
[1,55,71,77],
[1,55,74,103],
[1,55,75,93],
[1,55,77,92],
[1,55,89,82],
[1,55,90,72],
[1,55,94,113],
[1,55,95,83],
[1,55,96,84],
[1,55,97,85],
[1,55,98,78],
[1,55,99,99],
[1,55,100,86],
[1,55,102,76],
[1,55,107,87],
[1,55,109,89],
[1,55,110,106],
[1,55,111,90],
[1,55,112,91],
[1,55,115,104],
[1,56,3,132],
[1,56,3,338],
[1,56,4,135],
[1,56,4,345],
[1,56,5,151],
[1,56,5,300],
[1,56,6,166],
[1,56,6,301],
[1,56,7,149],
[1,56,7,302],
[1,56,8,155],
[1,56,8,303],
[1,56,10,154],
[1,56,10,304],
[1,56,14,153],
[1,56,14,305],
[1,56,16,152],
[1,56,16,306],
[1,56,17,150],
[1,56,17,307],
[1,56,18,128],
[1,56,18,308],
[1,56,19,147],
[1,56,19,309],
[1,56,20,156],
[1,56,20,310],
[1,56,21,164],
[1,56,21,311],
[1,56,22,157],
[1,56,22,312],
[1,56,25,158],
[1,56,25,313],
[1,56,26,162],
[1,56,26,314],
[1,56,32,160],
[1,56,32,315],
[1,56,33,146],
[1,56,33,316],
[1,56,35,159],
[1,56,35,317],
[1,56,37,161],
[1,56,37,318],
[1,56,39,165],
[1,56,39,319],
[1,56,40,124],
[1,56,40,320],
[1,56,45,163],
[1,56,45,321],
[1,56,46,125],
[1,56,46,322],
[1,56,50,127],
[1,56,50,323],
[1,56,56,133],
[1,56,56,324],
[1,56,58,129],
[1,56,58,325],
[1,56,66,120],
[1,56,66,326],
[1,56,68,130],
[1,56,68,327],
[1,56,71,126],
[1,56,71,328],
[1,56,74,123],
[1,56,74,329],
[1,56,75,122],
[1,56,75,330],
[1,56,77,121],
[1,56,77,331],
[1,56,89,148],
[1,56,89,332],
[1,56,90,131],
[1,56,90,333],
[1,56,95,145],
[1,56,95,334],
[1,56,96,144],
[1,56,96,335],
[1,56,98,143],
[1,56,98,336],
[1,56,100,142],
[1,56,100,337],
[1,56,102,141],
[1,56,102,339],
[1,56,107,140],
[1,56,107,340],
[1,56,109,139],
[1,56,109,341],
[1,56,110,138],
[1,56,110,342],
[1,56,111,137],
[1,56,111,343],
[1,56,112,136],
[1,56,112,344],
[1,56,115,134],
[1,56,115,346],
[1,57,117,658],
[1,58,22,170],
[1,58,78,169],
[1,58,83,171],
[1,58,106,168],
[1,59,117,659],
[1,59,6,211],
[1,59,20,212],
[1,59,28,213],
[1,59,45,214],
[1,59,47,224],
[1,59,61,221],
[1,59,62,222],
[1,59,72,220],
[1,59,81,215],
[1,59,82,218],
[1,59,85,210],
[1,59,86,223],
[1,59,87,219],
[1,59,88,225],
[1,59,101,217],
[1,59,114,216],
[1,60,117,660],
[1,60,30,176],
[1,60,45,174],
[1,60,80,175],
[1,60,103,177],
[1,61,22,184],
[1,61,22,355],
[1,61,22,423],
[1,61,22,479],
[1,61,83,226],
[1,61,83,373],
[1,61,83,436],
[1,61,83,486],
[1,61,88,227],
[1,61,88,374],
[1,61,88,437],
[1,61,88,487],
[1,62,117,661],
[1,62,118,662],
[1,62,13,179],
[1,62,13,351],
[1,62,13,420],
[1,63,13,231],
[1,63,13,377],
[1,63,13,444],
[1,63,13,493],
[1,64,117,663],
[1,64,63,187],
[1,64,63,357],
[1,64,70,186],
[1,65,117,664],
[1,65,56,229],
[1,65,56,376],
[1,65,56,439],
[1,66,58,182],
[1,66,58,353],
[1,66,58,422],
[1,66,58,478],
[1,67,59,242],
[1,67,59,384],
[1,68,117,665],
[1,68,92,50],
[1,69,117,666],
[1,69,49,37],
[2,41,6,207],
[2,41,13,239],
[2,41,45,205],
[2,41,71,202],
[2,41,83,238],
[3,1,117,667],
[3,1,45,2],
[3,1,45,25],
[3,1,83,4],
[3,1,83,26],
[3,1,101,3],
[3,1,101,24],
[3,2,117,668],
[3,3,117,669],
[3,4,117,670],
[3,5,117,671],
[3,6,118,672],
[3,6,60,247],
[3,6,60,401],
[3,6,60,464],
[3,7,117,673],
[3,7,118,674],
[3,7,11,189],
[3,7,34,253],
[3,7,41,43],
[3,7,41,358],
[3,7,56,41],
[3,7,56,360],
[3,8,117,675],
[3,8,118,676],
[3,8,56,273],
[3,8,56,400],
[3,9,117,677],
[3,9,118,678],
[3,10,118,679],
[3,10,13,271],
[3,10,13,397],
[3,10,13,462],
[3,10,13,498],
[3,10,13,526],
[3,10,13,546],
[3,11,117,680],
[3,11,118,681],
[3,11,66,193],
[3,11,66,359],
[3,11,66,427],
[3,11,66,482],
[3,13,118,682],
[3,13,56,261],
[3,14,118,683],
[3,14,101,269],
[3,14,101,396],
[3,14,101,461],
[3,15,118,684],
[3,15,1,196],
[3,15,1,363],
[3,15,1,431],
[3,15,13,197],
[3,15,13,364],
[3,15,13,429],
[3,15,56,199],
[3,15,56,365],
[3,15,56,432],
[3,15,66,195],
[3,15,66,362],
[3,15,66,430],
[3,16,117,685],
[3,16,118,686],
[3,16,1,258],
[3,16,1,388],
[3,16,1,454],
[3,16,13,259],
[3,16,13,391],
[3,16,13,455],
[3,16,56,260],
[3,16,56,390],
[3,16,56,456],
[3,16,66,257],
[3,16,66,389],
[3,16,66,453],
[3,17,117,687],
[3,17,45,116],
[3,17,45,297],
[3,17,45,426],
[3,18,117,688],
[3,19,117,689],
[3,19,45,5],
[3,19,56,27],
[3,19,56,650],
[3,19,56,652],
[3,20,117,690],
[3,20,118,691],
[3,20,1,58],
[3,20,1,291],
[3,20,1,410],
[3,20,1,472],
[3,20,1,507],
[3,20,2,53],
[3,20,2,287],
[3,20,5,201],
[3,20,5,366],
[3,20,5,433],
[3,20,5,483],
[3,20,6,228],
[3,20,6,375],
[3,20,6,438],
[3,20,6,488],
[3,20,6,517],
[3,20,11,173],
[3,20,11,349],
[3,20,11,418],
[3,20,11,476],
[3,20,11,512],
[3,20,11,533],
[3,20,13,119],
[3,20,13,299],
[3,20,13,425],
[3,20,13,496],
[3,20,13,525],
[3,20,13,544],
[3,20,13,561],
[3,20,13,575],
[3,20,13,588],
[3,20,13,601],
[3,20,13,609],
[3,20,13,618],
[3,20,15,255],
[3,20,15,387],
[3,20,15,451],
[3,20,22,185],
[3,20,22,356],
[3,20,22,424],
[3,20,22,480],
[3,20,22,514],
[3,20,22,536],
[3,20,22,555],
[3,20,22,570],
[3,20,22,584],
[3,20,22,596],
[3,20,22,605],
[3,20,22,612],
[3,20,22,619],
[3,20,22,623],
[3,20,22,626],
[3,20,22,629],
[3,20,22,632],
[3,20,22,635],
[3,20,22,639],
[3,20,22,642],
[3,20,22,645],
[3,20,22,648],
[3,20,22,651],
[3,20,22,654],
[3,20,34,194],
[3,20,34,361],
[3,20,34,447],
[3,20,34,495],
[3,20,34,522],
[3,20,34,541],
[3,20,34,558],
[3,20,34,577],
[3,20,34,591],
[3,20,36,61],
[3,20,36,295],
[3,20,36,413],
[3,20,38,29],
[3,20,38,276],
[3,20,38,402],
[3,20,38,465],
[3,20,38,499],
[3,20,41,42],
[3,20,41,347],
[3,20,41,416],
[3,20,41,475],
[3,20,41,511],
[3,20,42,241],
[3,20,42,380],
[3,20,42,442],
[3,20,42,491],
[3,20,42,520],
[3,20,42,540],
[3,20,42,557],
[3,20,42,573],
[3,20,42,590],
[3,20,43,117],
[3,20,44,167],
[3,20,45,57],
[3,20,45,292],
[3,20,45,409],
[3,20,45,471],
[3,20,45,509],
[3,20,45,530],
[3,20,45,550],
[3,20,45,565],
[3,20,45,580],
[3,20,45,592],
[3,20,45,603],
[3,20,45,611],
[3,20,45,622],
[3,20,45,625],
[3,20,45,628],
[3,20,45,631],
[3,20,45,634],
[3,20,45,637],
[3,20,45,640],
[3,20,45,643],
[3,20,45,646],
[3,20,45,649],
[3,20,45,653],
[3,20,45,655],
[3,20,45,656],
[3,20,46,181],
[3,20,46,352],
[3,20,46,421],
[3,20,46,477],
[3,20,46,513],
[3,20,46,534],
[3,20,46,553],
[3,20,46,568],
[3,20,50,243],
[3,20,50,381],
[3,20,50,459],
[3,20,50,497],
[3,20,50,524],
[3,20,50,543],
[3,20,54,251],
[3,20,55,30],
[3,20,55,277],
[3,20,55,508],
[3,20,55,529],
[3,20,55,549],
[3,20,55,563],
[3,20,55,579],
[3,20,56,14],
[3,20,56,15],
[3,20,56,16],
[3,20,56,17],
[3,20,56,18],
[3,20,56,19],
[3,20,56,20],
[3,20,56,21],
[3,20,56,22],
[3,20,56,38],
[3,20,56,284],
[3,20,56,404],
[3,20,56,467],
[3,20,56,501],
[3,20,56,502],
[3,20,56,503],
[3,20,56,532],
[3,20,56,552],
[3,20,56,567],
[3,20,56,582],
[3,20,56,594],
[3,20,56,606],
[3,20,56,613],
[3,20,56,620],
[3,20,56,624],
[3,20,56,627],
[3,20,56,630],
[3,20,56,633],
[3,20,56,636],
[3,20,56,638],
[3,20,56,641],
[3,20,56,644],
[3,20,56,647],
[3,20,57,35],
[3,20,57,279],
[3,20,57,414],
[3,20,57,473],
[3,20,57,510],
[3,20,57,531],
[3,20,57,551],
[3,20,58,566],
[3,20,58,581],
[3,20,58,593],
[3,20,58,604],
[3,20,58,614],
[3,20,58,621],
[3,20,64,208],
[3,20,65,172],
[3,20,65,348],
[3,20,65,417],
[3,20,66,47],
[3,20,66,285],
[3,20,66,405],
[3,20,66,481],
[3,20,66,515],
[3,20,66,537],
[3,20,67,209],
[3,20,67,371],
[3,20,67,440],
[3,20,67,490],
[3,20,67,523],
[3,20,67,545],
[3,20,67,562],
[3,20,69,118],
[3,20,69,298],
[3,20,71,55],
[3,20,71,289],
[3,20,71,408],
[3,20,71,470],
[3,20,71,506],
[3,20,71,535],
[3,20,71,554],
[3,20,71,569],
[3,20,71,583],
[3,20,71,595],
[3,20,77,200],
[3,20,77,367],
[3,20,77,434],
[3,20,77,484],
[3,20,79,192],
[3,20,83,54],
[3,20,83,288],
[3,20,83,407],
[3,20,83,469],
[3,20,83,505],
[3,20,83,528],
[3,20,83,548],
[3,20,83,571],
[3,20,83,585],
[3,20,83,597],
[3,20,92,28],
[3,20,92,275],
[3,20,92,406],
[3,20,92,468],
[3,20,92,504],
[3,20,92,527],
[3,20,92,547],
[3,20,92,564],
[3,20,92,578],
[3,20,92,598],
[3,20,92,607],
[3,20,92,615],
[3,20,99,60],
[3,20,99,294],
[3,20,99,411],
[3,20,99,489],
[3,20,99,519],
[3,20,99,539],
[3,20,99,556],
[3,20,99,572],
[3,20,99,586],
[3,20,99,599],
[3,20,101,1],
[3,20,101,274],
[3,20,101,415],
[3,20,101,474],
[3,20,101,518],
[3,20,101,538],
[3,20,101,559],
[3,20,101,576],
[3,20,101,589],
[3,20,101,602],
[3,20,101,610],
[3,20,101,617],
[3,20,104,230],
[3,20,105,266],
[3,20,108,252],
[3,20,113,245],
[3,20,113,383],
[3,20,113,445],
[3,21,117,692],
[3,21,118,693],
[3,21,11,190],
[3,21,15,256],
[3,21,15,386],
[3,21,15,452],
[3,21,56,428],
[3,22,117,694],
[3,22,118,695],
[3,22,1,206],
[3,22,1,369],
[3,22,1,450],
[3,22,13,178],
[3,22,13,350],
[3,22,13,419],
[3,22,56,203],
[3,22,56,368],
[3,22,56,448],
[3,22,66,204],
[3,22,66,370],
[3,22,66,449],
[3,23,117,696],
[3,23,45,46],
[3,23,45,283],
[3,23,83,44],
[3,23,83,281],
[3,23,101,45],
[3,23,101,282],
[3,24,117,697],
[3,24,52,59],
[3,24,52,293],
[3,24,52,412],
[3,25,117,698],
[3,25,45,32],
[3,25,64,34],
[3,25,64,278],
[3,25,83,31],
[3,25,101,33],
[3,26,117,699],
[3,26,45,62],
[3,26,45,296],
[3,29,117,700],
[3,29,118,701],
[3,29,41,40],
[3,29,45,268],
[3,29,45,395],
[3,29,56,39],
[3,29,99,262],
[3,30,117,702],
[3,30,92,23],
[3,32,45,36],
[3,32,45,280],
[3,32,45,403],
[3,32,45,466],
[3,32,45,500],
[3,33,117,703],
[3,33,91,48],
[3,33,92,49],
[3,33,92,286],
[3,34,117,704],
[3,34,45,235],
[3,34,56,237],
[3,34,58,236],
[3,35,101,232],
[3,37,117,705],
[3,37,118,706],
[3,37,13,56],
[3,37,13,290],
[3,37,45,254],
[3,37,45,385],
[3,37,45,446],
[3,37,45,494],
[3,37,45,521],
[3,37,45,542],
[3,37,45,560],
[3,37,45,574],
[3,37,45,587],
[3,37,45,600],
[3,37,45,608],
[3,37,45,616],
[3,37,83,263],
[3,37,83,392],
[3,37,83,457],
[3,42,117,707],
[3,42,118,708],
[3,42,11,188],
[3,42,27,191],
[3,42,45,234],
[3,42,45,378],
[3,42,45,441],
[3,42,56,198],
[3,42,56,372],
[3,42,56,435],
[3,42,56,485],
[3,42,56,516],
[3,42,99,51],
[3,45,117,709],
[3,45,60,246],
[3,49,117,710],
[3,49,118,711],
[3,50,117,712],
[3,50,93,6],
[3,50,93,7],
[3,50,93,8],
[3,51,7,183],
[3,51,7,354],
[3,52,118,713],
[4,36,117,714],
[4,36,118,715],
[4,36,1,52],
[4,36,5,250],
[4,36,41,249],
[4,36,45,244],
[4,36,50,272],
[4,36,50,399],
[4,36,50,463],
[4,36,56,248],
[4,36,76,270],
[4,36,76,398],
[4,43,117,716],
[4,43,48,10],
[4,43,51,11],
[4,43,71,9],
[4,43,73,13],
[4,43,84,12],
[4,44,117,717],
[4,54,34,267],
[5,31,116,233],
[5,46,116,240],
[5,46,116,379],
[6,12,117,718],
[6,12,118,719],
[6,27,117,720],
[6,27,118,721],
[6,28,117,722],
[6,28,118,723],
[7,48,53,180],
[7,48,53,382],
[7,48,53,443],
[7,48,53,492],
[7,53,117,724],
[7,53,118,725],
[7,53,29,265],
[7,53,29,394],
[7,53,29,460],
[7,53,53,264],
[7,53,53,393],
[7,53,53,458],
[8,47,117,726],
[9,38,117,727],
[9,38,118,728],
[9,39,117,729],
[10,40,117,730],
[11,70,117,731]];



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

