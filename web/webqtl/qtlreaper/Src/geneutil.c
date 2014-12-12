/* Copyright 2005 Jintao Wang, Kenneth F Manly */

/* This file is part of QTL Reaper.

    QTL Reaper is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    QTL Reaper is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with QTL Reaper; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA 
*/


#include <Python.h>
#include "structmember.h"
#include "geneobject.h"
#include "regression.h"

/*File String function*/
int fgetline(FILE *fp, char line[], int max){
	int nch = 0;
	int c;
	max = max - 1;/* leave room for '\0' */
	while((c = getc(fp)) != EOF){
		if(c == '\n')
			break;
		if(nch < max){
			line[nch] = c;
			nch = nch + 1;
		}
	}
	if(c == EOF && nch == 0)
		return EOF;
	line[nch] = '\0';
	return nch;
}


void strstrip(char* str) {
	char* i;
	if (str==NULL)
		return;
	for(i = str ; i[0] != '\0' && strchr(WHITES,i[0]) != NULL; i++)
		/* NOTHING */;
	if(i[0] != '\0') {
		memmove(str,i,strlen(i) + 1);
		for(i=str+strlen(str)-1 ; strchr(WHITES,i[0])!= NULL; i--)
			/* NOTHING */;
		i[1] = '\0';
	}
	else
    		str[0] = '\0';
}

int charcount(char* str, char c) {
	int i, j;
	i = j = 0;
	while (str[i++] != '\0'){
		if (str[i] == c) j++;
	}
	return j;
}

/*Method Function*/

int PyNumList_Check(PyObject *pObj){
	int i, j;
	PyObject * item;
	if (!PyList_Check(pObj))
		return 0;
	j = 1;
	for (i = 0; i < PyList_GET_SIZE(pObj); ++i) {
		item = PyList_GET_ITEM(pObj, i);
		if (PyFloat_Check(item) || PyInt_Check(item))
			continue;
		else{
			j = 0;
			break;
		}
	}
	return j;
}

int PyStringList_Check(PyObject *pObj){
	int i, j;
	PyObject * item;
	if (!PyList_Check(pObj))
		return 0;
	j = 1;
	for (i = 0; i < PyList_GET_SIZE(pObj); ++i) {
		item = PyList_GET_ITEM(pObj, i);
		if (PyString_Check(item))
			continue;
		else{
			j = 0;
			break;
		}
	}
	return j;
}

int PyLocusList_Check(PyObject *pObj){
	int i, j;
	PyObject * item;
	if (!PyList_Check(pObj))
		return 0;
	j = 1;
	for (i = 0; i < PyList_GET_SIZE(pObj); ++i) {
		item = PyList_GET_ITEM(pObj, i);
		if (PyLocus_Check(item))
			continue;
		else{
			j = 0;
			break;
		}
	}
	return j;
}


int PyChromosomeList_Check(PyObject *pObj){
	int i, j;
	PyObject * item;
	if (!PyList_Check(pObj))
		return 0;
	j = 1;
	for (i = 0; i < PyList_GET_SIZE(pObj); ++i) {
		item = PyList_GET_ITEM(pObj, i);
		if (PyChromosome_Check(item))
			continue;
		else{
			j = 0;
			break;
		}
	}
	return j;
}


PyObject *
PyLocus_New(){
	Locus *op;
	op = PyObject_GC_New(Locus, &PyLocus_Type);
	if (op == NULL) {
		return NULL;
	}
	op->size = 0;
	op->cM =0.0;
	op->Mb =0.0;
	op->genotype = NULL;
	op->dominance = NULL;
	op->txtstr = NULL;
	op->name = PyString_FromString("");
	op->chr = PyString_FromString("");
	PyObject_GC_Track(op);
	return (PyObject *) op;
}


PyObject *
PyChromosome_New(){
	Chromosome *op;
	op = PyObject_GC_New(Chromosome, &PyChromosome_Type);
	if (op == NULL) {
		return NULL;
	}
	op->size = 0;
	op->loci = NULL;
	op->name = PyString_FromString("Unknown_Chr");
	PyObject_GC_Track(op);
	return (PyObject *) op;
}

PyObject *
PyQTL_New(PyObject *locus, double lrs, double additive)
{
	QTL *op;
	op = PyObject_GC_New(QTL, &PyQTL_Type);
	if (op == NULL) {
		return NULL;
	}
	
	if (locus != NULL){
		Py_INCREF(locus);
		op->locus = locus;
	}
	else op->locus = PyLocus_New();
	op->lrs = lrs;
	op->additive = additive;
	PyObject_GC_Track(op);
	return (PyObject *) op;
}

PyObject *
PyQTL_NewDominance(PyObject *locus, double lrs, double additive, double dominance)
{
	QTL *op;
	op = PyObject_GC_New(QTL, &PyQTL_Type);
	if (op == NULL) {
		return NULL;
	}
	
	if (locus != NULL){
		Py_INCREF(locus);
		op->locus = locus;
	}
	else op->locus = PyLocus_New();
	op->lrs = lrs;
	op->additive = additive;
	op->dominance = dominance;
	PyObject_GC_Track(op);
	return (PyObject *) op;
}

/*Deep Copy*/

PyObject *
Locus_addparentsf1(Locus* locus, char *strainName, double *value, int n){
	int i;
	Locus *op;
	op = PyObject_GC_New(Locus, &PyLocus_Type);
	if (op == NULL) {
		return NULL;
	}
	op->size = locus->size+n;
	op->cM = locus->cM;
	op->Mb = locus->Mb;
	op->genotype = (double *)malloc((op->size)*sizeof(double));
	op->txtstr = (char *)malloc((op->size)*sizeof(char));
	op->dominance = NULL;
	if (locus->dominance != NULL)
		op->dominance = (double *)malloc((op->size)*sizeof(double));
	for (i=0;i<n;i++){
		op->genotype[i] = value[i];
		op->txtstr[i] = strainName[i];
		if (locus->dominance != NULL) op->dominance[i] = fabs(1-fabs(value[i]));
	}
	for (i=n;i<op->size;i++){
		op->genotype[i] = locus->genotype[i-n];
		op->txtstr[i] = locus->txtstr[i-n];
		if (locus->dominance != NULL) op->dominance[i] = locus->dominance[i-n];
	}
	
	op->name = PyString_FromString(PyString_AsString(locus->name));
	op->chr = PyString_FromString(PyString_AsString(locus->chr));
	PyObject_GC_Track(op);
	return (PyObject *) op;
}

PyObject *
Chromosome_addparentsf1(Chromosome* chr, char *strainName, double *value, int n){
	int i;
	Chromosome *op;
	op = PyObject_GC_New(Chromosome, &PyChromosome_Type);
	if (op == NULL) {
		return NULL;
	}
	op->size = chr->size;
	op->loci = (PyObject **)malloc((op->size)*sizeof(PyObject *)); 
	for (i=0;i<op->size;i++){
		op->loci[i] = Locus_addparentsf1((Locus *)(chr->loci[i]), strainName, value, n);
	}
	op->name = PyString_FromString(PyString_AsString(chr->name));
	PyObject_GC_Track(op);
	return (PyObject *) op;
}


PyObject *
Chromosome_addinterval(Chromosome* chr, double interval){
	int i, j, k, m, n = 0;
	Chromosome *op;
	Locus *lcus, *curLocus, *nextLocus;
	Locus *realPreLocus, *realNextLocus;
	char * chrName, prevgen, nextgen;
	double curCM, curMb, MbStep;
	
	double m1,m2,f1,f2,m0,f0;
	double r_0,r_1,r_2,r_3,w,g;
	
	if (interval < 1.0) interval = 1.0;
	op = PyObject_GC_New(Chromosome, &PyChromosome_Type);
	if (op == NULL) {
		return NULL;
	}
	op->size = 0;
	op->loci = (PyObject **)malloc(1000*sizeof(PyObject *));
	//printf("\n\nChr %s\n", PyString_AsString(chr->name));
	for (i = 0; i < chr->size; i++){
		curLocus = (Locus *)(chr->loci[i]);
		chrName = PyString_AsString(curLocus->chr);
		curCM = curLocus->cM;
		curMb = curLocus->Mb;
		if (i == chr->size -1){
			nextLocus = (Locus *)(chr->loci[i]);
			MbStep = 0.0;
		}
		else{
			nextLocus = (Locus *)(chr->loci[i+1]);
			MbStep = (nextLocus->Mb - curLocus->Mb)*interval/(nextLocus->cM - curLocus->cM);
		}
		
		k =  0;	
		do {	
			lcus = PyObject_GC_New(Locus, &PyLocus_Type);
			if (lcus == NULL) {
				return NULL;
			}
			
			lcus->size = curLocus->size;
			lcus->cM = curCM;
			lcus->Mb = curMb;
			
			lcus->genotype = (double *)malloc((lcus->size)*sizeof(double));
			lcus->txtstr = (char *)malloc((lcus->size)*sizeof(char));
			lcus->dominance = NULL;
			if (curLocus->dominance != NULL)
				lcus->dominance = (double *)malloc((lcus->size)*sizeof(double));
			
			
			if (k>0){
				lcus->name = PyString_FromString(" - ");
				
				for (j=0;j<lcus->size;j++){
								
					m = i;
					while ((m>=0) && (((Locus *)(chr->loci[m]))->txtstr[j] == 'U')) m--;
					n = i+1;
					while ((n<=chr->size) && (((Locus *)(chr->loci[n]))->txtstr[j] == 'U')) n++;	
					
					realPreLocus = (Locus *)(chr->loci[m]);
					realNextLocus = (Locus *)(chr->loci[n]);
		
					prevgen = realPreLocus->txtstr[j];
					nextgen = realNextLocus->txtstr[j];
					
					
					m1 = (curCM - realPreLocus->cM)/100.0;
					m2 = (realNextLocus->cM - curCM)/100.0;
					m0 = (realNextLocus->cM - realPreLocus->cM)/100.0;
					
					f1 = (1.0-exp(-2*m1))/2.0;
					f2 = (1.0-exp(-2*m2))/2.0;
					f0 = (1.0-exp(-2*m0))/2.0;
					r_0 = (1-f1)*(1-f2)/(1-f0);
					r_1 = f1*(1-f2)/f0;
					r_2 = f2*(1-f1)/f0;
					r_3 = f1*f2/(1-f0);
					
					
					if ((prevgen == 'B' ) && ( nextgen == 'B'))
						g = 1.0 - 2*r_0;
					else if ((prevgen == 'H' ) && ( nextgen == 'B'))
						g = 1.0 - r_0 - r_1;
					else if ((prevgen == 'D' ) && ( nextgen == 'B'))
						g = 1.0 - 2*r_1;
					else if ((prevgen == 'B' ) && ( nextgen == 'H'))
						g = r_1 - r_0;
					else if ((prevgen == 'H' ) && ( nextgen == 'H'))
						g = 0.0;
					else if ((prevgen == 'D' ) && ( nextgen == 'H'))
						g = r_0 - r_1;
					else if ((prevgen == 'B' ) && ( nextgen == 'D'))
						g = 2*r_1 - 1.0;
					else if ((prevgen == 'H' ) && ( nextgen == 'D'))
						g = r_0 + r_1 - 1.0;
					else if ((prevgen == 'D' ) && ( nextgen == 'D'))
						g = 2*r_0 - 1.0;
					else
						g = curLocus->genotype[j]; //should not happen
					lcus->genotype[j] = g;
					lcus->txtstr[j] = curLocus->txtstr[j];
					
					if (lcus->dominance != NULL){
					
						if ((prevgen == 'B' ) && (nextgen == 'B'))
							g = 2*r_0*r_3;
						else if ((prevgen == 'H' ) && (nextgen == 'B'))
							g = r_1*(r_2 + r_3);
						else if ((prevgen == 'D' ) && (nextgen == 'B'))
							g = 2*r_1*r_2;
						else if ((prevgen == 'B' ) && (nextgen == 'H'))
							g = r_1*r_0 + r_2*r_3;
						else if ((prevgen == 'H' ) && (nextgen == 'H')){
							w =  ((1-f0)*(1-f0))/(1-2*f0*(1-f0));
							g = 1 -2*w*r_0*r_3 -2*(1-w)*r_1*r_2;
						}
						else if ((prevgen == 'D' ) && (nextgen == 'H'))
							g = r_0*r_1 + r_2*r_3;
						else if ((prevgen == 'B' ) && (nextgen == 'D'))
							g = 2*r_1*r_2;
						else if ((prevgen == 'H' ) && (nextgen == 'D'))
							g = r_1*(r_2 + r_3);
						else if ((prevgen == 'D' ) && (nextgen == 'D'))
							g = 2*r_0*r_3;
						else
							g = curLocus->dominance[j]; //should not happen
						lcus->dominance[j] = g;
					}
				}
			}
			else{
				lcus->name = PyString_FromString(PyString_AsString(curLocus->name));
				for (j=0;j<lcus->size;j++){
					lcus->genotype[j] = curLocus->genotype[j];
					lcus->txtstr[j] = curLocus->txtstr[j];
					if (lcus->dominance != NULL) lcus->dominance[j] = curLocus->dominance[j];
				}
			}
			lcus->chr = PyString_FromString(chrName);
			PyObject_GC_Track(lcus);
			op->loci[op->size] = (PyObject *) lcus;
			op->size++;
			k ++;
			curCM += interval;
			curMb += MbStep;
			//printf("%d -- %2.3f  --  %2.3f  --  %2.3f\n", k, curCM - interval, curLocus->cM, nextLocus->cM);
		}
		while(curCM < nextLocus->cM); 
	}
	
	op->name = PyString_FromString(PyString_AsString(chr->name));
	PyObject_GC_Track(op);
	return (PyObject *) op;
}


/*end method function*/


