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
	
	Last edited by Lei Yan 2013-12-02
	Changed maximum number of markers per chromosome to 5000. See line 940.
	
*/

#include <Python.h>
#include "structmember.h"
#include "geneobject.h"
#include "regression.h"

char GENOSYMBOL[] = "BDHU";

// List of functions
static PyObject *Dataset_addinterval(Dataset* self, PyObject *args, PyObject *kwds);
static PyObject *Dataset_addparentsf1(Dataset* self, PyObject *args, PyObject *keywds);
static PyObject *Dataset_readFromFile(Dataset* self, PyObject *args);
static PyObject *Dataset_regression(Dataset* self, PyObject *args, PyObject *keywds);
static PyObject *Dataset_permutation(Dataset* self, PyObject *args, PyObject *keywds);
static PyObject *Dataset_bootstrap(Dataset* self, PyObject *args, PyObject *keywds);

/***************************
Start of Dataset Object
****************************/

static int
Dataset_traverse(Dataset *self, visitproc visit, void *arg)
{
	int i, err;
	PyObject *x;
	
    if (self->name && visit(self->name, arg) < 0)
        return -1;
    if (self->mat && visit(self->mat, arg) < 0)
        return -1;
    if (self->pat && visit(self->pat, arg) < 0)
        return -1;
    if (self->type && visit(self->type, arg) < 0)
        return -1;

	for (i = self->size; --i >= 0; ) {
		x = self->chromosome[i];
		if (x != NULL) {
			err = visit(x, arg);
			if (err)
				return err;
		}
	}

    return 0;
}



static void
Dataset_dealloc(Dataset* self)
{
    int i;
	PyObject_GC_UnTrack(self);
	Py_TRASHCAN_SAFE_BEGIN(self);
    Py_XDECREF(self->name);
    
    if (self->chromosome != NULL){
    	for (i=0;i<self->size;i++){
    		Py_XDECREF(self->chromosome[i]);
    	}
    	free(self->chromosome);
    }
    
    if (self->prgy != NULL){
    	for (i=0;i<self->nprgy;i++){
    		free(self->prgy[i]);
    	}
    	free(self->prgy);
    }
    
    self->ob_type->tp_free((PyObject*)self);
	Py_TRASHCAN_SAFE_END(self)
}

static PyObject *
Dataset_new(PyTypeObject *type, PyObject *args, PyObject *kwds)
{
    Dataset *self;

    self = (Dataset *)type->tp_alloc(type, 0);
    if (self != NULL) {
        self->name = PyString_FromString("Unknown_Dataset");
        self->mat = PyString_FromString("mat");
        self->pat = PyString_FromString("pat");
        self->type = PyString_FromString("riset");
        if (self->name == NULL || self->mat == NULL 
        	||self->pat == NULL ||self->type == NULL)
          {
            Py_DECREF(self);
            return NULL;
          }
        
        self->chromosome = NULL;
        self->size = 0;   
        self->prgy = NULL;
        self->nprgy = 0;
        self->parentsf1 = 0;
        self->dominance = 0;
        self->Mb = 0;
        self->interval = 0;
    }
    return (PyObject *)self;
}

static int
Dataset_init(Dataset *self, PyObject *args, PyObject *kwds)
{
    int i;
    PyObject *name=NULL, *chromosome=NULL, *temp;

    static char *kwlist[] = {"name", "chromosome",NULL};

    if (! PyArg_ParseTupleAndKeywords(args, kwds, "|OO", kwlist, 
                                      &name, &chromosome))
        return -1; 

    if (name){
    	if (PyString_Check(name)) {
        Py_XDECREF(self->name);
        Py_INCREF(name);
        self->name = name;
      }
      else{
      	PyErr_SetString(PyExc_TypeError, "The name attribute value must be a string"); 
    		return -1;
    	}
    }

    if (chromosome) {
    	if  (PyChromosomeList_Check(chromosome)){
    		if (self->chromosome != NULL){
    			for (i=0;i<self->size;i++){
    				Py_XDECREF(self->chromosome[i]);
    			}
    			free(self->chromosome);
    		}
        	self->size = PyList_GET_SIZE(chromosome);
        	self->chromosome = (PyObject **)malloc((self->size)*sizeof(PyObject *));
        	for (i=0;i< self->size; i++){
      		temp = PyList_GET_ITEM(chromosome, i);
			Py_INCREF(temp);
        		self->chromosome[i] =  temp;
        	}
	}
      else{
      	PyErr_SetString(PyExc_TypeError, "The chromosome attribute value must be a Chromosome list"); 
    		return -1;
    	}
    }
    return 0;
}

static PyObject *
Dataset_repr(Dataset * self)
{
	int i;
	PyObject *chromosomestr, * chromosome, * result, *prgy, *prgystr;
	
	prgy = PyTuple_New(self->nprgy);
	for (i=0;i<self->nprgy;i++)
		PyTuple_SetItem(prgy, i, PyString_FromString(self->prgy[i]));
	prgystr = PyObject_Repr(prgy);
	
	chromosome = PyTuple_New(self->size);
	for (i=0;i<self->size;i++){
		Py_INCREF(self->chromosome[i]);
		PyTuple_SetItem(chromosome, i, self->chromosome[i]);
	}
	chromosomestr = PyObject_Repr(chromosome);
	result = PyString_FromFormat("Dataset(\"%s\", prgy%s, %s)",
                               PyString_AsString(self->name), PyString_AsString(prgystr), PyString_AsString(chromosomestr));
	Py_DECREF(chromosomestr);
	Py_DECREF(chromosome);
	Py_DECREF(prgystr);
	Py_DECREF(prgy);
	return result;
}


static PyMemberDef Dataset_members[] = {
    //{"name", T_OBJECT_EX, offsetof(Dataset, name), 0, "name"},
    //{"chromosome", T_OBJECT_EX, offsetof(Dataset, chromosome), 0, "chromosome"},
    {NULL}  /* Sentinel */
};


static int
Dataset_nosetattr(Dataset *self, PyObject *value, void *closure)
{
  PyErr_SetString(PyExc_TypeError, "this attribute value cannot be reset");
  return -1;
}

static PyObject *
Dataset_getname(Dataset *self, void *closure)
{
    Py_INCREF(self->name);
    return self->name;
}
static PyObject *
Dataset_getpat(Dataset *self, void *closure)
{
    Py_INCREF(self->pat);
    return self->pat;
}
static PyObject *
Dataset_getmat(Dataset *self, void *closure)
{
    Py_INCREF(self->mat);
    return self->mat;
}
static PyObject *
Dataset_gettype(Dataset *self, void *closure)
{
    Py_INCREF(self->type);
    return self->type;
}
static PyObject *
Dataset_getnprgy(Dataset *self, void *closure)
{
    return Py_BuildValue("i", self->nprgy);
}

static int
getnloci(Dataset *self){
	int i, j = 0;
	if (self->chromosome != NULL){
		for (i=self->size;--i>=0;)
			j += ((Chromosome *)(self->chromosome[i]))->size;
	}
    	return j;
}

static PyObject *
Dataset_getnloci(Dataset *self, void *closure)
{
    return Py_BuildValue("i", getnloci(self));
}

static PyObject *
Dataset_ifparentsf1(Dataset *self, void *closure)
{
    return Py_BuildValue("i", self->parentsf1);
}

static PyObject *
Dataset_ifMb(Dataset *self, void *closure)
{
    return Py_BuildValue("i", self->Mb);
}


static int
Dataset_setname(Dataset *self, PyObject *value, void *closure)
{
  if (value == NULL) {
    PyErr_SetString(PyExc_TypeError, "Cannot delete the name attribute");
    return -1;
  }
  
  if (! PyString_Check(value)) {
    PyErr_SetString(PyExc_TypeError, 
                    "The name attribute value must be a string");
    return -1;
  }
      
  Py_DECREF(self->name);
  Py_INCREF(value);
  self->name = value;    

  return 0;
}

static PyObject *
Dataset_getchromosome(Dataset *self, void *closure)
{
	int i;
	PyObject * chromosome;
	chromosome = PyList_New(self->size);
	for (i=0;i<self->size;i++){
		Py_INCREF(self->chromosome[i]);
		PyList_SetItem(chromosome, i, self->chromosome[i]);
	}
	return chromosome;
}

static int
Dataset_setchromosome(Dataset *self, PyObject *chromosome, void *closure)
{
  int i;
  PyObject * temp;
  if (chromosome == NULL) {
    PyErr_SetString(PyExc_TypeError, "Cannot delete the chromosome attribute");
    return -1;
  }
  
  if (PyChromosomeList_Check(chromosome)){
    	if (self->chromosome != NULL){
    		for (i=0;i<self->size;i++){
    			Py_DECREF(self->chromosome[i]);
    		}
    		free(self->chromosome);
    	}
      self->size = PyList_GET_SIZE(chromosome);
      self->chromosome = (PyObject **)malloc((self->size)*sizeof(PyObject *));
      for (i=0;i< self->size; i++){
      	temp = PyList_GET_ITEM(chromosome, i);
		Py_INCREF(temp);
        	self->chromosome[i] =  temp;
      }
  }
  else {
    PyErr_SetString(PyExc_TypeError, 
                    "The chromosome attribute value must be a Chromosome list");
    return -1;
  }
  return 0;
}

static PyObject *
Dataset_getprgy(Dataset *self, void *closure)
{
	int i;
	PyObject *prgy;
	prgy = PyTuple_New(self->nprgy);
	for (i=0;i<self->nprgy;i++)
		PyTuple_SetItem(prgy, i, PyString_FromString(self->prgy[i]));
	return prgy;
}


static PyGetSetDef Dataset_getseters[] = {
    {"prgy", (getter)Dataset_getprgy, (setter)Dataset_nosetattr,
     "progeny", NULL},
    {"nprgy", (getter)Dataset_getnprgy, (setter)Dataset_nosetattr,
     "nprogeny", NULL},
    {"nloci", (getter)Dataset_getnloci, (setter)Dataset_nosetattr,
     "nloci", NULL},
    {"pat", (getter)Dataset_getpat, (setter)Dataset_nosetattr,
     "pat", NULL},
    {"mat", (getter)Dataset_getmat, (setter)Dataset_nosetattr,
     "mat", NULL},
    {"type", (getter)Dataset_gettype, (setter)Dataset_nosetattr,
     "type", NULL},
    {"name", (getter)Dataset_getname, (setter)Dataset_setname,
     "name", NULL},
    {"parf1", (getter)Dataset_ifparentsf1, (setter)Dataset_nosetattr,
     "Included Parents and F1", NULL},
    {"Mbmap", (getter)Dataset_ifMb, (setter)Dataset_nosetattr,
     "Physcial map information", NULL},
    {"chromosome", (getter)Dataset_getchromosome, (setter)Dataset_setchromosome,
     "chromosome", NULL},
    {NULL}  /* Sentinel */
};

static void
Dataset_clearChromosome(Dataset *self){
    int i;
    if (self->chromosome != NULL){
      //printf("self->size = %d\n", self->size);
    	for (i=0;i<self->size;i++){
		//printf("self->size->size = %d\n", ((Chromosome *)(self->chromosome[i]))->size);
    		Py_DECREF(self->chromosome[i]);
    	}
    	free(self->chromosome);
    	self->chromosome = NULL;
    	self->size =0;
    }
    
    if (self->prgy != NULL){
	//printf("self->nprgy = %d\n", self->nprgy);
    	for (i=0;i<self->nprgy;i++){
    		free(self->prgy[i]);
    	}
    	free(self->prgy);
    	self->prgy = NULL;
    	self->nprgy = 0;
    }
    self->parentsf1 = 0;
    self->dominance = 0;
    self->Mb = 0;
    self->interval = 0;
}

static PyMethodDef Dataset_methods[] = {
	{"addinterval", (PyCFunction)Dataset_addinterval, 
	METH_KEYWORDS, "Add interval map"},
	{"add", (PyCFunction)Dataset_addparentsf1, 
	METH_KEYWORDS, "Add parents/F1 genotypes, return new object"},
	{"read", (PyCFunction)Dataset_readFromFile, 
	METH_VARARGS, "Read genotypes from a file"},
	{"regression", (PyCFunction)Dataset_regression, 
	METH_KEYWORDS, "regression using input values"},
	{"permutation", (PyCFunction)Dataset_permutation, 
	METH_KEYWORDS, "Permutation test"},
	{"bootstrap", (PyCFunction)Dataset_bootstrap, 
	METH_KEYWORDS, "Bootstrap test"},
	{NULL}  /* Sentinel */
};

static int
Dataset_length(Dataset *self) {
  return self->size;
}


static PyObject *
Dataset_getItem(Dataset *self, int i){
	if (i < 0 || i >= self->size) {
		PyErr_SetString(PyExc_IndexError, "list index out of range");
		return NULL;
	}
    	Py_INCREF(self->chromosome[i]);
    	return self->chromosome[i];
}	


static PySequenceMethods Dataset_as_sequence = {
    (inquiry)Dataset_length,        /*sq_length*/
    (binaryfunc)0,					/*sq_concat*/
    (intargfunc)0,					/*sq_repeat*/
    (intargfunc)Dataset_getItem,					/*sq_item*/
    (intintargfunc)0,				/*sq_slice*/
    (intobjargproc)0,               /*sq_ass_item*/
    (intintobjargproc)0,            /*sq_ass_slice*/
};


PyTypeObject PyDataset_Type = {
    PyObject_HEAD_INIT(NULL)
    0,                         /*ob_size*/
    "Dataset",             /*tp_name*/
    sizeof(Dataset),             /*tp_basicsize*/
    0,                         /*tp_chromosomeize*/
    (destructor)Dataset_dealloc, /*tp_dealloc*/
    0,                         /*tp_print*/
    0,                         /*tp_getattr*/
    0,                         /*tp_setattr*/
    0,                         /*tp_compare*/
    (reprfunc)Dataset_repr,    /*tp_repr*/
    0,                         /*tp_as_numbe&*/
    &Dataset_as_sequence,                         /*tp_as_sequence*/
    0,                         /*tp_as_mapping*/
    0,                         /*tp_hash */
    0,                         /*tp_call*/
    0,                         /*tp_str*/
    0,                         /*tp_getattro*/
    0,                         /*tp_setattro*/
    0,                         /*tp_as_buffer*/
    //Py_TPFLAGS_DEFAULT | Py_TPFLAGS_BASETYPE, /*tp_flags*/
    Py_TPFLAGS_DEFAULT | Py_TPFLAGS_BASETYPE | Py_TPFLAGS_HAVE_GC, /*tp_flags*/
    "Dataset objects",           /* tp_doc */
    (traverseproc)Dataset_traverse,		               /* tp_traverse */
    0,		               /* tp_clear */
    0,		               /* tp_richcompare */
    0,		               /* tp_weaklistoffset */
    0,		               /* tp_iter */
    0,		               /* tp_iternext */
    Dataset_methods,             /* tp_methods */    
    Dataset_members,             /* tp_members */
    Dataset_getseters,           /* tp_getset */
    0,                         /* tp_base */
    0,                         /* tp_dict */
    0,                         /* tp_descr_get */
    0,                         /* tp_descr_set */
    0,                         /* tp_dictoffset */
    (initproc)Dataset_init,      /* tp_init */
    0,                         /* tp_alloc */
    Dataset_new,                 /* tp_new */
};



/*Module Method*/
PyObject *
Reaper_pvalue(PyObject *self, PyObject *args){
	int i, n;
	double value, *temp;
	PyObject *lst=NULL;
	if (! PyArg_ParseTuple(args, "dO", &value, &lst))
        return NULL; 
	
	if (!PyNumList_Check(lst)){
      	PyErr_SetString(PyExc_TypeError, "The secoond parameter must be a numbered list"); 
    		return NULL;
	}
	n =  PyList_GET_SIZE(lst);
	temp = (double *)malloc(n*sizeof(double));
	for (i=0;i<n;i++){
		temp[i] = PyFloat_AsDouble(PyList_GET_ITEM(lst, i));
	}
	qsort(temp,n, sizeof(double),compare_doubles);
	//printf("%2.1f %2.1f %2.1f %2.1f\n", value, temp[1], temp[3], temp[5]);
	for (i=0;i<n;){
		if (temp[i] > value)
			break;
		i++;
	}
	//printf("%d %d\n", i, n);
	free(temp);
	if (i==n) return Py_BuildValue("d",0.0);
	else if (i==0) return Py_BuildValue("d",1.0);
	else return Py_BuildValue("d",1.0- (i+0.0)/n);
}

PyObject *
Reaper_anova(PyObject *self, PyObject *args){
	int i, k, n;
	double *temp, S=0.0, SS=0.0, mean, median, sem, std, var, per25, per75;
	PyObject *item, *Result, *lst=NULL;
	if (! PyArg_ParseTuple(args, "O", &lst))
        return NULL; 
	
	n =  PyList_GET_SIZE(lst);
	temp = (double *)malloc(n*sizeof(double));
	k = 0;
	for (i=0;i<n;i++){
		item = PyList_GET_ITEM(lst, i);
		if (PyFloat_Check(item) || PyInt_Check(item)){
			temp[k] = PyFloat_AsDouble(item);
			k++;
		}
	}
	if (k<4){
    		PyErr_SetString(PyExc_SystemError,
			"there should be at least four numbers");
    		return NULL;
    	}
	qsort(temp, k, sizeof(double),compare_doubles);
	for(i=0;i<k;i++){
		S += temp[i];
		SS += temp[i]*temp[i];
	}
	mean = S/k;
	var = SS - S*S/k;
	var /= k-1;
	std = sqrt(var);
	sem = std/sqrt(k);
	if (k%2 == 0)
		median = (temp[k/2]+ temp[(k-2)/2])/2.0;
	else
		median = temp[(k-1)/2];
	
	Result = PyTuple_New(6);
	PyTuple_SetItem(Result,0,Py_BuildValue("d",mean));
	PyTuple_SetItem(Result,1,Py_BuildValue("d",median));
	PyTuple_SetItem(Result,2,Py_BuildValue("d",var));
	PyTuple_SetItem(Result,3,Py_BuildValue("d",std));
	PyTuple_SetItem(Result,4,Py_BuildValue("d",sem));
	PyTuple_SetItem(Result,5,Py_BuildValue("i",k));
	return Result;
}

PyObject * 
Reaper_normp(PyObject *self, PyObject *args)
{	
	double x;	
	if (!PyArg_ParseTuple(args, "d", &x))
		{printf("Error\n");return NULL;}
	
	return Py_BuildValue("d",pnorm1(x));
}


static PyMethodDef Reaper_module_methods[] = {
	{"pvalue", (PyCFunction)Reaper_pvalue, 
	METH_VARARGS, "Calculate p-value"},
	{"anova", (PyCFunction)Reaper_anova, 
	METH_VARARGS, "Calculate p-value"},
	{"normp", (PyCFunction)Reaper_normp, 
	METH_VARARGS, "Calculate normal distribution p-value"},
	{NULL}  /* Sentinel */
}; 

#ifndef PyMODINIT_FUNC	/* declarations for DLL import/export */
#define PyMODINIT_FUNC void
#endif
PyMODINIT_FUNC
initreaper(void) 
{
    PyObject* m;

    if (PyType_Ready(&PyDataset_Type) < 0)
        return;
    if (PyType_Ready(&PyChromosome_Type) < 0)
        return;
    if (PyType_Ready(&PyLocus_Type) < 0)
        return;
    if (PyType_Ready(&PyQTL_Type) < 0)
        return;

    m = Py_InitModule3("reaper", Reaper_module_methods,
                       "QTL Reaper Module");
                       
    if (m == NULL)
      return;

    Py_INCREF(&PyDataset_Type);
    Py_INCREF(&PyLocus_Type);
    Py_INCREF(&PyChromosome_Type);
    Py_INCREF(&PyQTL_Type);
    
    PyModule_AddObject(m, "Dataset", (PyObject *)&PyDataset_Type);
    PyModule_AddObject(m, "Locus", (PyObject *)&PyLocus_Type);
    PyModule_AddObject(m, "Chromosome", (PyObject *)&PyChromosome_Type);
    PyModule_AddObject(m, "QTL", (PyObject *)&PyQTL_Type);
}

/*member function start from here*/
/*Deep Copy*/
PyObject *
Dataset_addparentsf1(Dataset* self, PyObject *args, PyObject *kwds)
{
    int i, n = 0;
    Dataset *self2;
    char *mat = NULL, *pat = NULL, *F1 = NULL;
    char strains[3];
    double values[3];
    static char *kwlist[] = {"F1", "Mat", "Pat", NULL};
    if (self->parentsf1 == 1){
    		PyErr_SetString(PyExc_SystemError,
					"Parents and F1 have already been added");
    		return NULL;
    }
    if (self->dominance == 1){
    		PyErr_SetString(PyExc_SystemError,
					"Parents and F1 cannot be added to F2 set");
    		return NULL;
    }
    
    if (! PyArg_ParseTupleAndKeywords(args, kwds, "|sss", kwlist, 
			&F1, &mat, &pat))
        return NULL;
    if (F1!=NULL) {
        strains[n] = GENOSYMBOL[2];
        values[n] = 0.0;
        n++;
    }
    if (mat!=NULL) {
        strains[n] = GENOSYMBOL[0];
        values[n] = -1.0;
        n++;
    }
    if (pat!=NULL){
        strains[n] = GENOSYMBOL[1];
        values[n] = 1.0;
        n++;
    }
    
    self2 = PyObject_GC_New(Dataset, &PyDataset_Type);
    if (self2 != NULL) {
        self2->name = PyString_FromString(PyString_AsString(self->name));
        self2->mat = PyString_FromString(PyString_AsString(self->mat));
        self2->pat = PyString_FromString(PyString_AsString(self->pat));
        self2->type = PyString_FromString(PyString_AsString(self->type));
        if (self2->name == NULL || self2->mat == NULL 
        	||self2->pat == NULL ||self2->type == NULL)
          {
            Py_DECREF(self2);
            return NULL;
          }
        
        self2->nprgy = self->nprgy + n;
        self2->prgy = (char **)malloc((self2->nprgy)*sizeof(char *));
        i = 0;
        if (F1!=NULL) {
            self2->prgy[i] = (char *)malloc((strlen(F1)+1)*sizeof(char));
            strcpy(self2->prgy[i], F1);
            i++;
        }
        if (mat!=NULL) {
            self2->prgy[i] = (char *)malloc((strlen(mat)+1)*sizeof(char));
            strcpy(self2->prgy[i], mat);
            i++;
        }
        if (pat!=NULL) {
            self2->prgy[i] = (char *)malloc((strlen(pat)+1)*sizeof(char));
            strcpy(self2->prgy[i], pat);
            i++;
        }
        for (i=n;i<self2->nprgy;i++){
 		self2->prgy[i] = (char *)malloc((strlen(self->prgy[i-n])+1)*sizeof(char));
 		strcpy(self2->prgy[i], self->prgy[i-n]);
        }
        
        self2->size = self->size;
        self2->chromosome = (PyObject **)malloc((self2->size)*sizeof(PyObject *)); 
        for (i=0;i<self2->size;i++){
		self2->chromosome[i] = Chromosome_addparentsf1((Chromosome*)(self->chromosome[i]), strains, values, n);
        }
        
        if (n > 0)
        	self2->parentsf1 = 1;
        else
        	self2->parentsf1 = self->parentsf1;
        self2->dominance = self->dominance;
        self2->Mb = self->Mb;
        self2->interval = self->interval;
    }
    return (PyObject *)self2;
}


/*Deep Copy*/
PyObject *
Dataset_addinterval(Dataset* self, PyObject *args, PyObject *kwds)
{
    int i, n = 0;
    Dataset *self2;
    char *mat = NULL, *pat = NULL, *F1 = NULL;
    double interval = 0.0;
    
    if (self->interval == 1){
    		PyErr_SetString(PyExc_SystemError,
					"This dataset already contains intervals");
    		return NULL;
    }
    
    if (! PyArg_ParseTuple(args, "|d", &interval))
        return NULL;
    
    if (interval < 1.0) interval = 1.0;
    
    
    self2 = PyObject_GC_New(Dataset, &PyDataset_Type);
    if (self2 != NULL) {
        self2->name = PyString_FromString(PyString_AsString(self->name));
        self2->mat = PyString_FromString(PyString_AsString(self->mat));
        self2->pat = PyString_FromString(PyString_AsString(self->pat));
        self2->type = PyString_FromString(PyString_AsString(self->type));
        if (self2->name == NULL || self2->mat == NULL 
        	||self2->pat == NULL ||self2->type == NULL){
            Py_DECREF(self2);
            return NULL;
          }
        
        self2->nprgy = self->nprgy;
        self2->prgy = (char **)malloc((self2->nprgy)*sizeof(char *));
        
        for (i=n;i<self2->nprgy;i++){
 			self2->prgy[i] = (char *)malloc((strlen(self->prgy[i-n])+1)*sizeof(char));
 			strcpy(self2->prgy[i], self->prgy[i-n]);
        }
        
        self2->size = self->size;
        self2->chromosome = (PyObject **)malloc((self2->size)*sizeof(PyObject *)); 
        for (i=0;i<self2->size;i++){
			self2->chromosome[i] = Chromosome_addinterval((Chromosome*)(self->chromosome[i]), interval);
        }
        
        self2->parentsf1 = self->parentsf1;
        self2->dominance = self->dominance;
        self2->Mb = self->Mb;
        self2->interval = 1;
    }
    return (PyObject *)self2;
}


static PyObject *
Dataset_readFromFile(Dataset* self, PyObject *args)
{
    int i, j, k, m, n, tCount, header=0;
    int pos, genStartPos = 3;
    double f1, f2, f0, g;
	double r_0,r_1,r_2,r_3,w;
    char prevgen, nextgen;
    FILE *fp;  
    long lSize;
    char * buffer;
    char tempchar[20], tempchar2[20];
    char mat[20], pat[20], het[20], unk[20];
    PyObject *file=NULL;
    char *filename;
    Chromosome* cptr = NULL;
    Locus* lptr = NULL;
    Locus* lptrpre, *lptrnext;
    
    strcpy(het,"H");
    strcpy(unk,"U");

    if (! PyArg_ParseTuple(args,"O", &file))
        return NULL; 

    if (file){
    	filename = PyString_AS_STRING(file);
    	//printf("file name = %s\n", filename);
    	fp = fopen(filename,"rb");
    	if (fp == NULL){
    		PyErr_SetString(PyExc_SystemError,
					"The given file doesn't exist");
    		return NULL;}
    	// obtain file size.
  	fseek (fp , 0 , SEEK_END);
  	lSize = ftell (fp);
  	rewind (fp);
  	
 	Dataset_clearChromosome(self);
 	tempchar[0] = '\0';
 	
 	 // allocate memory to contain the whole file.
 	buffer = (char*) malloc (lSize);
 	//ensure each line have same number of tabs
 	tCount = 0;
 	while (fgetline(fp, buffer, lSize) != EOF){
 		strstrip(buffer);
 		if (buffer[0] == '#' || buffer[0] == '\0' || buffer[0] =='@'){
 		}
 		else{
 			if (tCount == 0)
 				tCount = charcount(buffer, '\t');
 			else if (tCount != charcount(buffer, '\t')){
    				PyErr_SetString(PyExc_SystemError,
					"Each line should have the same number of Tabs");
				return NULL;
			}
 		}
 	}
 	rewind (fp);
 	
 	self->chromosome = (PyObject **)malloc(50*sizeof(PyObject *));
 	while (fgetline(fp, buffer, lSize) != EOF){
 		strstrip(buffer);
 		if (buffer[0] == '#' || buffer[0] == '\0')
 			continue;
 		else if (buffer[0] =='@'){
 			i = 0;
 			while (buffer[i] != '\0' && buffer[i] != ':')
 				i++;
 			if (buffer[i] != '\0'){
 				if (strncmp( buffer, "@type", strlen("@type")) == 0){
 					Py_DECREF(self->type);
 					self->type = PyString_FromString(buffer +i +1);
 					if (strncmp(buffer +i +1, "intercross", strlen("intercross")) == 0)
 						self->dominance = 1;
 				}
 				else if (strncmp( buffer, "@mat", strlen("@mat")) == 0){
 					Py_DECREF(self->mat);
 					self->mat = PyString_FromString(buffer +i +1);
 					strcpy(mat, buffer +i +1);
 					strstrip(mat);
 				}
 				else if (strncmp( buffer, "@pat", strlen("@pat")) == 0){
 					Py_DECREF(self->pat);
 					self->pat = PyString_FromString(buffer +i +1); 
 					strcpy(pat, buffer +i +1);
 					strstrip(pat);
 				}
 				else if (strncmp( buffer, "@het", strlen("@het")) == 0){
 					strcpy(het, buffer +i +1);
 					strstrip(het);
 				}
 				else if (strncmp( buffer, "@unk", strlen("@unk")) == 0){
 					strcpy(unk, buffer +i +1);
 					strstrip(unk);
 				}
 				else if (strncmp( buffer, "@name", strlen("@name")) == 0){
 					Py_DECREF(self->name);
 					self->name = PyString_FromString(buffer +i +1);
 				}
 			}
 		}
 		//these are the first three required columns
 		else if (strncmp(buffer, "Chr\tLocus\tcM", strlen("Chr\tLocus\tcM")) == 0){
 			i = k = 0;
 			n = charcount(buffer, '\t');
 			j = 0;
 			self->prgy = (char **)malloc(n*sizeof(char *));
 			self->nprgy = 0;
 			while (1){
 				while (buffer[i] != '\0' && buffer[i] != '\t')
 					i++;
 				if (buffer[i] == '\0' && i == k)
 					break;
 				j ++;
 				if (j == genStartPos+1 && strncmp(buffer+k, "Mb\t", 3) == 0){
 					self->Mb = 1;
 					genStartPos ++;
 				}
 				if (j > genStartPos){
 					self->prgy[j-genStartPos-1] = (char *)malloc((i-k+2)*sizeof(char));
 					strncpy(self->prgy[j-genStartPos-1], buffer + k, i-k);
 					self->prgy[j-genStartPos-1][i-k] = '\0';
 					strstrip(self->prgy[j-genStartPos-1]);
 					self->nprgy ++;
 				}
 				if  (buffer[i] == '\0') break;
 				i ++;
 				k = i;
 			}
 			header = 1;
 		}
 		else if (strlen(buffer) > 0){
 			if (header == 0){
    				PyErr_SetString(PyExc_SystemError,
					"Header row is not located");
				return NULL;
			}
 			i = k = 0;
 			j = 0;
 			n = charcount(buffer, '\t');
 			while (1){
 				while (buffer[i] != '\0' && buffer[i] != '\t')
 					i++;
 				if (buffer[i] == '\0' && i == k)
 					break;
 				j += 1;
 				if (j == 1){
 					if (strncmp(buffer+k, tempchar, i-k) != 0){
 						//temp = PyLocus_New();
 						self->chromosome[self->size] = PyChromosome_New();
 						strncpy(tempchar, buffer+k, i-k);
 						tempchar[i-k] = '\0';
 						cptr = (Chromosome *)(self->chromosome[self->size]);
 						Py_DECREF(cptr->name);
 						cptr->name = PyString_FromString(tempchar); 
						// Lei Yan
						// Changed maximum number of markers per chromosome to 5000.
 						cptr->loci = (PyObject **)malloc(5000*sizeof(PyObject *)); 
 						self->size += 1;
 					}
 				}
 				else if (j == 2 && cptr != NULL){
 					//printf("%d\t", cptr->size);
 					cptr->loci[cptr->size] = PyLocus_New();
 					Py_INCREF(cptr->loci[cptr->size]);
 					lptr = (Locus *)(cptr->loci[cptr->size]);
 					Py_DECREF(lptr->name);
 					lptr->size = n-genStartPos+1;
 					lptr->genotype = (double *)malloc((lptr->size)*sizeof(double));
 					if (self->dominance == 1)
 						lptr->dominance = (double *)malloc((lptr->size)*sizeof(double));
 					lptr->txtstr = (char *)malloc((lptr->size)*sizeof(char)); 
 					strncpy(tempchar2, buffer+k, i-k);
 					tempchar2[i-k] = '\0';
 					lptr->name = PyString_FromString(tempchar2);
 					lptr->chr = PyString_FromString(tempchar); 
 					cptr->size += 1;
 				}
 				else if (j == 3){
 					strncpy(tempchar2, buffer+k, i-k);
 					tempchar2[i-k] = '\0';
 					lptr->cM = atof(tempchar2);
 				}
 				else if (genStartPos > 3 && j == genStartPos){
 					strncpy(tempchar2, buffer+k, i-k);
 					tempchar2[i-k] = '\0';
 					lptr->Mb = atof(tempchar2);
 				}
 				else if (j > genStartPos && j <= n+1){
 					pos =  j-genStartPos-1;
 					if (strncmp( buffer+k, mat, i-k) == 0){
 						lptr->genotype[pos] = -1;
 						lptr->txtstr[pos] = GENOSYMBOL[0];
 						if (self->dominance == 1) lptr->dominance[pos] = 0;
 					}
 					else if (strncmp( buffer+k, pat, i-k) == 0){
 						lptr->genotype[pos] = 1;
 						lptr->txtstr[pos] = GENOSYMBOL[1];
 						if (self->dominance == 1) lptr->dominance[pos] = 0;
 					}
 					else if (strncmp( buffer+k, het, i-k) == 0){
 						lptr->genotype[pos] = 0;
 						lptr->txtstr[pos] = GENOSYMBOL[2];
 						if (self->dominance == 1) lptr->dominance[pos] = 1;
 					}
 					else if (strncmp( buffer+k, unk, i-k) == 0){
 						lptr->genotype[pos] = 99;
 						lptr->txtstr[pos] = GENOSYMBOL[3];
 						if (self->dominance == 1) lptr->dominance[pos] = 1;
 					}
 					//really unknown symbols
 					else{
 						lptr->genotype[pos] = 99;
 						lptr->txtstr[pos] = GENOSYMBOL[3];
 						if (self->dominance == 1) lptr->dominance[pos] = 1;
 					}
 				}
 				else
 				/*Nothing*/;
 				i ++;
 				k = i;
 				if  (buffer[i] == '\0') break;
 			}//end of inner while
 		}//end of if
 	}//end of while
 	
	fclose (fp);

	for (i=0; i< self->size; i++){
		cptr = (Chromosome *)(self->chromosome[i]);
		//first and last marker if missing
		lptr = (Locus *)(cptr->loci[0]);
		for (j=0; j<lptr->size; j++){
			if (lptr->txtstr[j] == GENOSYMBOL[3]){
				lptr->txtstr[j] = GENOSYMBOL[2];
				lptr->genotype[j] = 0;
				if (self->dominance == 1) lptr->dominance[j] = 1;
			}
		}
		lptr = (Locus *)(cptr->loci[cptr->size-1]);
		for (j=0; j<lptr->size; j++){
			if (lptr->txtstr[j] == GENOSYMBOL[3]){
				lptr->txtstr[j] = GENOSYMBOL[2];
				lptr->genotype[j] = 0;
				if (self->dominance == 1) lptr->dominance[j] = 1;
			}
		}
	}
	/*second round*/
	for (i=0; i< self->size; i++){
		cptr = (Chromosome *)(self->chromosome[i]);
		for (k=0; k< cptr->size; k++){
			lptr = (Locus *)(cptr->loci[k]);
			for (j=0; j<lptr->size; j++){
				if (lptr->txtstr[j] == GENOSYMBOL[3]){
					m = k-1;
					while ((m>=0) && (((Locus *)(cptr->loci[m]))->txtstr[j] == GENOSYMBOL[3]))
						m--;
					n = k+1;
					while ( (n<=cptr->size) && (((Locus *)(cptr->loci[n]))->txtstr[j] == GENOSYMBOL[3]) )
						n++;
					lptrpre = (Locus *)(cptr->loci[m]);
					lptrnext = (Locus *)(cptr->loci[n]);
					f1 = (lptr->cM - lptrpre->cM)/100.0;
					f2 = (lptrnext->cM - lptr->cM)/100.0;
					f0 = (lptrnext->cM - lptrpre->cM)/100.0;
					
					
					f1 = (1.0-exp(-2*f1))/2.0;
					f2 = (1.0-exp(-2*f2))/2.0;
					f0 = (1.0-exp(-2*f0))/2.0;
					r_0 = (1-f1)*(1-f2)/(1-f0);
					r_1 = f1*(1-f2)/f0;
					r_2 = f2*(1-f1)/f0;
					r_3 = f1*f2/(1-f0);
					
					prevgen = lptrpre->txtstr[j];
					nextgen = lptrnext->txtstr[j];
					
					
					if ((prevgen == 'B' ) && ( nextgen == 'B'))
						lptr->genotype[j] = 1.0 - 2*r_0;
					else if ((prevgen == 'H' ) && ( nextgen == 'B'))
						lptr->genotype[j] = 1.0 - r_0 - r_1;
					else if ((prevgen == 'D' ) && ( nextgen == 'B'))
						lptr->genotype[j] = 1.0 - 2*r_1;
					else if ((prevgen == 'B' ) && ( nextgen == 'H'))
						lptr->genotype[j] = r_1 - r_0;
					else if ((prevgen == 'H' ) && ( nextgen == 'H'))
						lptr->genotype[j] = 0.0;
					else if ((prevgen == 'D' ) && ( nextgen == 'H'))
						lptr->genotype[j] = r_0 - r_1;
					else if ((prevgen == 'B' ) && ( nextgen == 'D'))
						lptr->genotype[j] = 2*r_1 - 1.0;
					else if ((prevgen == 'H' ) && ( nextgen == 'D'))
						lptr->genotype[j] = r_0 + r_1 - 1.0;
					else if ((prevgen == 'D' ) && ( nextgen == 'D'))
						lptr->genotype[j] = 2*r_0 - 1.0;
					else
						lptr->genotype[j] = 0; //should not happen
					
					if (self->dominance == 1) {
					
						if ((prevgen == 'B' ) && (nextgen == 'B'))
							lptr->dominance[j] = 2*r_0*r_3;
						else if ((prevgen == 'H' ) && (nextgen == 'B'))
							lptr->dominance[j] = r_1*(r_2 + r_3);
						else if ((prevgen == 'D' ) && (nextgen == 'B'))
							lptr->dominance[j] = 2*r_1*r_2;
						else if ((prevgen == 'B' ) && (nextgen == 'H'))
							lptr->dominance[j] = r_1*r_0 + r_2*r_3;
						else if ((prevgen == 'H' ) && (nextgen == 'H')){
							w =  ((1-f0)*(1-f0))/(1-2*f0*(1-f0));
							lptr->dominance[j] = 1 -2*w*r_0*r_3 -2*(1-w)*r_1*r_2;
						}
						else if ((prevgen == 'D' ) && (nextgen == 'H'))
							lptr->dominance[j] = r_0*r_1 + r_2*r_3;
						else if ((prevgen == 'B' ) && (nextgen == 'D'))
							lptr->dominance[j] = 2*r_1*r_2;
						else if ((prevgen == 'H' ) && (nextgen == 'D'))
							lptr->dominance[j] = r_1*(r_2 + r_3);
						else if ((prevgen == 'D' ) && (nextgen == 'D'))
							lptr->dominance[j] = 2*r_0*r_3;
						else
							lptr->dominance[j] = 1; //should not happen
					}
					
				}
			}
		}
	}

    Py_INCREF(Py_None);
    free(buffer);
    return Py_None;
    }
    else
    	return NULL;
}

static PyObject *
Dataset_regression(Dataset *self, PyObject *args, PyObject *kwds){
	int i, j, k, m, n, located;
	PyObject *strain=NULL, *value=NULL, *variance = NULL, *control = NULL;
	char *tempchar;
	double *XX, *YY, *VV, *CC, *DD;
	double result[3];
	int *tempindex;
	Chromosome* cptr = NULL;
	Locus* lptr = NULL, *ctrlptr = NULL;
	PyObject *Result, *temp;
	static char *kwlist[] = {"strains", "trait", "variance", "control", NULL};
	
	if (! PyArg_ParseTupleAndKeywords(args, kwds, "OO|OO", kwlist, 
			&strain, &value, &variance, &control))
		return NULL;
	
	if (!PyStringList_Check(strain)){
		PyErr_SetString(PyExc_TypeError, "Strians must be a string list");
		return NULL;
	}
	if (!PyNumList_Check(value)){
		PyErr_SetString(PyExc_TypeError, "Trait value must be a number list");
		return NULL;
	}
	if (variance != NULL && !PyNumList_Check(variance)){
		PyErr_SetString(PyExc_TypeError, "Variance must be a number list");
		return NULL;
	}
	if (control != NULL && !PyString_Check(control)){
		PyErr_SetString(PyExc_TypeError, "Control must be a string");
		return NULL;
	}
	
	if (control != NULL){
		located = 0;
		for (i=0;i<self->size;i++){
			cptr = (Chromosome *)(self->chromosome[i]);
			for (j=0;j<cptr->size;j++){
				ctrlptr = (Locus *)(cptr->loci[j]);
				tempchar = PyString_AsString(ctrlptr->name);
				if (strcmp(tempchar, PyString_AsString(control)) == 0)
					{located = 1; break;}
			}
			if (located) break;
		}
		if (!located){
			PyErr_SetString(PyExc_IndexError, "The control cannot be found in the loci list");
			return NULL;
		}
	}
	
	n = PyList_GET_SIZE(strain);
	if ( n!= PyList_GET_SIZE(value) || n < 8 || (variance != NULL && n!= PyList_GET_SIZE(variance))){
		PyErr_SetString(PyExc_IndexError, 
		"the length of the strain list and the value list are different, \nor they are less than 8 ");
		return NULL;
	}
	tempindex = (int *)malloc(n*sizeof(int));
	XX = (double *)malloc(n*sizeof(double));
	YY = (double *)malloc(n*sizeof(double));
	VV = (double *)malloc(n*sizeof(double));
	CC = (double *)malloc(n*sizeof(double));
	DD = (double *)malloc(n*sizeof(double));
	
	for (i=0;i<n;i++){
		located = 0;
		for (j=0;j<self->nprgy;j++){
			tempchar = PyString_AsString(PyList_GET_ITEM(strain, i));
			if (strcmp(self->prgy[j],tempchar) == 0)
				{located = 1; break;}
		}
		if (!located){
			PyErr_SetString(PyExc_IndexError, 
			"At least one of the strain is not in the progeny list");
			return NULL;
		}
		else{
			//printf("%s---%s  %d---%d\n", self->prgy[j], PyString_AsString(PyList_GET_ITEM(strain, i)), i, j);
			tempindex[i] = j;
		}
		YY[i]=PyFloat_AsDouble(PyList_GET_ITEM(value, i));
		if (variance != NULL)
			VV[i]=PyFloat_AsDouble(PyList_GET_ITEM(variance, i));
	}
	
	if (control != NULL)
		for (k =0; k <n; k++)
			CC[k] =  ctrlptr->genotype[tempindex[k]];
			
	Result = PyList_New(getnloci(self));
	m = 0;
	for (i=0;i<self->size;i++){
		cptr = (Chromosome *)(self->chromosome[i]);
		for (j=0;j<cptr->size;j++){
			lptr = (Locus *)(cptr->loci[j]);
			for (k =0; k <n; k++){
				XX[k] =  lptr->genotype[tempindex[k]];
				if (self->dominance == 1){
					DD[k] =  lptr->dominance[tempindex[k]];
				}
			}
			if (control != NULL){
				if (self->dominance == 1){
					PyErr_SetString(PyExc_SystemError, 
						"no composite regression for intercross");
					return NULL;
				}
				if (variance == NULL)
					_3nRegression(YY, XX, CC,n, result,1);
				else
					_3nRegressionVariance(YY, XX, CC, VV, n, result,1);
			}
			else{
				if (self->dominance == 1){
					if (variance == NULL)
						_3nRegression(YY, XX, DD, n, result,0);
					else
						_3nRegressionVariance(YY, XX, DD,VV, n, result,0);
				}
				else{
					if (variance == NULL)
						_2nRegression(YY, XX, n, result);
					else
						_2nRegressionVariance(YY, XX, VV, n, result);
				}
			}
			if (self->dominance == 1)
				temp = PyQTL_NewDominance((PyObject *)lptr, result[0], result[1], result[2]);
			else
				temp = PyQTL_New((PyObject *)lptr, result[0], result[1]);
  			PyList_SetItem(Result,m,temp);
  			m++;
		}
	}
	
	free(tempindex);
	free(XX);
	free(YY);
	free(VV);
	free(CC);
	free(DD);
	return Result;
}



static PyObject *
Dataset_permutation(Dataset *self, PyObject *args, PyObject *kwds){
	int i, j, k, l, m, n, located, overCount = 0;
	PyObject *strain=NULL, *value=NULL, *variance = NULL, *control=NULL;
	char *tempchar;
	double *XX, *YY, *VV, *CC, *pYY, *pVV;
	double result[3];
	int *tempindex;
	Chromosome* cptr = NULL;
	Locus* lptr = NULL;
	PyObject *Result;
	
	int N_test = PERMUTATION_TESTSIZE;
	int max_size = MAXPERMUTATION;
	
	double LRSThresh = -1.0;
	int topN = 10;
	int N_step = 1000;
	double *LRSArray, LRSmax;
	
	static char *kwlist[] = {"strains", "trait", "variance","nperm","thresh","topN",NULL};
	if (! PyArg_ParseTupleAndKeywords(args, kwds, "OO|Oidi", kwlist, 
			&strain, &value, &variance, &N_test, &LRSThresh, &topN))
		return NULL;
	
	if (!PyStringList_Check(strain)){
		PyErr_SetString(PyExc_TypeError, "Strians must be a string list");
		return NULL;
	}
	if (!PyNumList_Check(value)){
		PyErr_SetString(PyExc_TypeError, "Trait value must be a number list");
		return NULL;
	}
	if (variance != NULL && !PyNumList_Check(variance)){
		PyErr_SetString(PyExc_TypeError, "Variance must be a number list");
		return NULL;
	}
		
	if (N_test < PERMUTATION_TESTSIZE)
		N_test = PERMUTATION_TESTSIZE;
	if (N_test > MAXPERMUTATION)
		N_test = MAXPERMUTATION;

	n = PyList_GET_SIZE(strain);
	if ( n!= PyList_GET_SIZE(value) || n < 8 || (variance != NULL && n!= PyList_GET_SIZE(variance))){
		PyErr_SetString(PyExc_IndexError, 
		"the length of the strain list and the value list are different, \nor they are less than 8 ");
		return NULL;
	}
	srand(time(NULL));
	tempindex = (int *)malloc(n*sizeof(int));
	XX = (double *)malloc(n*sizeof(double));
	YY = (double *)malloc(n*sizeof(double));
	VV = (double *)malloc(n*sizeof(double));
	pYY = (double *)malloc(n*sizeof(double));
	pVV = (double *)malloc(n*sizeof(double));
	
	for (i=0;i<n;i++){
		located = 0;
		for (j=0;j<self->nprgy;j++){
			tempchar = PyString_AsString(PyList_GET_ITEM(strain, i));
			if (strcmp(self->prgy[j],tempchar) == 0)
				{located = 1; break;}
		}
		if (!located){
			PyErr_SetString(PyExc_IndexError, 
			"At least one of the strain is not in the progeny list");
			return NULL;
		}
		else
			tempindex[i] = j;
		YY[i]=PyFloat_AsDouble(PyList_GET_ITEM(value, i));
		if (variance != NULL)
			VV[i]=PyFloat_AsDouble(PyList_GET_ITEM(variance, i));
	}
	if (LRSThresh <= 0)
	{
		LRSArray = (double *)malloc(N_test*sizeof(double));
		for (m=0;m<N_test;m++){
		
			if (variance == NULL)
				_1npermutation(YY,pYY,n);
			else
				_2npermutation(YY,pYY,VV,pVV,n);
				
			LRSmax = 0.0;
			for (i=0;i<self->size;i++){
				cptr = (Chromosome *)(self->chromosome[i]);
				for (j=0;j<cptr->size;j++){
					lptr = (Locus *)(cptr->loci[j]);
					for (k =0; k <n; k++){
						XX[k] =  lptr->genotype[tempindex[k]];
					}
					if (control != NULL){
						PyErr_SetString(PyExc_IndexError, 
							"Code for this not yet completed.");
						return NULL;
					}
					else{
						if (variance == NULL)
							_2nRegression(pYY, XX, n, result);
						else
							_2nRegressionVariance(pYY, XX, pVV, n, result);
					}
					if (LRSmax < result[0])
						LRSmax = result[0];
				}
			}
			LRSArray[m] = LRSmax;
		}
		qsort(LRSArray,N_test, sizeof(double),compare_doubles);
	}
	else{
		N_test = 0;
		overCount = 0;
		LRSArray = (double *)malloc(max_size*sizeof(double));
		m = 0;
		while (N_test < max_size){
			for (l=0;l<N_step;l++){
				if (variance == NULL)
					_1npermutation(YY,pYY,n);
				else
					_2npermutation(YY,pYY,VV,pVV,n);
					
				LRSmax = 0.0;
				for (i=0;i<self->size;i++){
					cptr = (Chromosome *)(self->chromosome[i]);
					for (j=0;j<cptr->size;j++){
						lptr = (Locus *)(cptr->loci[j]);
						for (k =0; k <n; k++){
							XX[k] =  lptr->genotype[tempindex[k]];
						}
						if (control != NULL){
							PyErr_SetString(PyExc_IndexError, 
								"Code for this not yet completed.");
							return NULL;
						}
						else{
							if (variance == NULL)
								_2nRegression(pYY, XX, n, result);
							else
								_2nRegressionVariance(pYY, XX, pVV, n, result);
						}
						if (LRSmax < result[0])
							LRSmax = result[0];
					}
				}
				LRSArray[m++] = LRSmax;
				if (LRSmax > LRSThresh)
					overCount++;
			}
			N_test += N_step;
			if (overCount >= topN)
				break;
		}
		qsort(LRSArray,N_test, sizeof(double),compare_doubles);
	}
	
	Result = PyList_New(N_test);
	for (m=0;m<N_test;m++){
		PyList_SetItem(Result,m,Py_BuildValue("d",LRSArray[m]));
	}
	free(tempindex);
	free(XX);
	free(YY);
	free(VV);
	free(pYY);
	free(pVV);
	free(LRSArray);
	return Result;
}


static PyObject *
Dataset_bootstrap(Dataset *self, PyObject *args, PyObject *kwds){
	int i, j, k, l, m, n, located, nLoci = 0;
	PyObject *strain=NULL, *value=NULL, *variance = NULL, *control=NULL;
	char *tempchar;
	double *XX, *YY, *VV, *CC, *bYY, *bVV, *bXX, *bCC;
	int *iXX;
	double result[3];
	int *tempindex;
	Chromosome* cptr = NULL;
	Locus* lptr = NULL;
	int *locusCount;
	PyObject *Result;
	
	int N_test = PERMUTATION_TESTSIZE;
	int max_size = MAXPERMUTATION;
	
	double LRSmax;
	int topN = 10;
	int N_step = 1000;
	int LRSmaxPos;
	
	static char *kwlist[] = {"strains", "trait", "variance", "control", "nboot",NULL};
	if (! PyArg_ParseTupleAndKeywords(args, kwds, "OO|OOi", kwlist, 
			&strain, &value, &variance, &control, &N_test))
		return NULL;
	
	if (!PyStringList_Check(strain)){
		PyErr_SetString(PyExc_TypeError, "Strians must be a string list");
		return NULL;
	}
	if (!PyNumList_Check(value)){
		PyErr_SetString(PyExc_TypeError, "Trait value must be a number list");
		return NULL;
	}
	if (variance != NULL && !PyNumList_Check(variance)){
		PyErr_SetString(PyExc_TypeError, "Variance must be a number list");
		return NULL;
	}
		
	if (control != NULL && !PyNumList_Check(control)){
		PyErr_SetString(PyExc_TypeError, "Control must be a number list");
		return NULL;
	}
		
	if (N_test < BOOTSTRAP_TESTSIZE)
		N_test = BOOTSTRAP_TESTSIZE;
	if (N_test > MAXPERMUTATION)
		N_test = MAXPERMUTATION;

	n = PyList_GET_SIZE(strain);
	if ( n!= PyList_GET_SIZE(value) || n < 8 || (variance != NULL && n!= PyList_GET_SIZE(variance)) \
			|| (control != NULL && n!= PyList_GET_SIZE(control))){
		PyErr_SetString(PyExc_IndexError, 
		"the length of the strain list and the value list are different, \nor they are less than 8 ");
		return NULL;
	}
	srand(time(NULL));
	nLoci = getnloci(self);
	locusCount = (int *)malloc(nLoci*sizeof(int));
	for (i=0;i<nLoci;i++) 	locusCount[i] = 0;	
	tempindex = (int *)malloc(n*sizeof(int));
	XX = (double *)malloc(n*sizeof(double));
	YY = (double *)malloc(n*sizeof(double));
	VV = (double *)malloc(n*sizeof(double));
	CC = (double *)malloc(n*sizeof(double));
	iXX = (int *)malloc(n*sizeof(int));
	bXX = (double *)malloc(n*sizeof(double));
	bYY = (double *)malloc(n*sizeof(double));
	bVV = (double *)malloc(n*sizeof(double));
	bCC = (double *)malloc(n*sizeof(double));
	
	for (i=0;i<n;i++){
		located = 0;
		for (j=0;j<self->nprgy;j++){
			tempchar = PyString_AsString(PyList_GET_ITEM(strain, i));
			if (strcmp(self->prgy[j],tempchar) == 0)
				{located = 1; break;}
		}
		if (!located){
			PyErr_SetString(PyExc_IndexError, 
			"At least one of the strain is not in the progeny list");
			return NULL;
		}
		else
			tempindex[i] = j;
		YY[i]=PyFloat_AsDouble(PyList_GET_ITEM(value, i));
		if (variance != NULL)
			VV[i]=PyFloat_AsDouble(PyList_GET_ITEM(variance, i));
		if (control != NULL)
			CC[i]=PyFloat_AsDouble(PyList_GET_ITEM(control, i));
	}
	
	
	for (m=0;m<N_test;m++){
		if ((variance == NULL) && (control == NULL))
			_1nbootStrap(YY,bYY,iXX,n);
		else if (variance != NULL)
			_2nbootStrap(YY,bYY,VV,bVV,iXX,n);
		else if (control != NULL)
			_2nbootStrap(YY,bYY,CC,bCC,iXX,n);
		else
			;
			
		LRSmax = 0.0;
		l = 0;
		for (i=0;i<self->size;i++){
			cptr = (Chromosome *)(self->chromosome[i]);
			for (j=0;j<cptr->size;j++){
				lptr = (Locus *)(cptr->loci[j]);
				for (k =0; k <n; k++)
					XX[k] =  lptr->genotype[tempindex[k]];
				for (k =0; k <n; k++)
					bXX[k] =  XX[iXX[k]];
					
				if (control != NULL){
					_3nRegression(bYY, bXX, bCC, n, result, 1);
				}
				else{
					if (variance == NULL)
						_2nRegression(bYY, bXX, n, result);
					else
						_2nRegressionVariance(bYY, bXX, bVV, n, result);
				}
				if (LRSmax < result[0]){
					LRSmaxPos = l;
					LRSmax = result[0];
				}
				l++;
			}
		}
		locusCount[LRSmaxPos]++;
	}

	
	Result = PyTuple_New(nLoci);
	for (m=0;m<nLoci;m++){
		PyTuple_SetItem(Result,m,Py_BuildValue("i",locusCount[m]));
	}
	free(tempindex);
	free(XX);
	free(YY);
	free(VV);
	free(CC);
	free(iXX);
	free(bXX);
	free(bYY);
	free(bVV);
	free(bCC);
	free(locusCount);
	return Result;
}


