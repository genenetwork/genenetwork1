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
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA 
*/

#include <Python.h>
#include "structmember.h"
#include "geneobject.h"
#include "regression.h"

/***************************
Start of Locus Object
****************************/
static int
Locus_traverse(Locus *self, visitproc visit, void *arg){
	if (self->name && visit(self->name, arg) < 0)
		return -1;
	if (self->chr && visit(self->chr, arg) < 0)
		return -1;
	return 0;
}

static void
Locus_dealloc(Locus* self){
	PyObject_GC_UnTrack(self);
	Py_TRASHCAN_SAFE_BEGIN(self);
	Py_XDECREF(self->name);
	Py_XDECREF(self->chr);
	if (self->genotype != NULL)
		PyMem_FREE(self->genotype);
	if (self->dominance != NULL)
		PyMem_FREE(self->dominance);
	if (self->txtstr != NULL)
		PyMem_FREE(self->txtstr);
	self->ob_type->tp_free((PyObject*)self);
	Py_TRASHCAN_SAFE_END(self);
}

static PyObject *
Locus_new(PyTypeObject *type, PyObject *args, PyObject *kwds){
	Locus *self;
	self = (Locus *)type->tp_alloc(type, 0);
	
	if (self != NULL) {
		self->name = PyString_FromString("Unknown_Locus");
	
		if (self->name == NULL){
			Py_DECREF(self);
			return NULL;
		}
		self->chr = PyString_FromString("Unknown_Chr");
	
		if (self->chr == NULL){
			Py_DECREF(self);
			return NULL;
		}
		self->genotype = NULL;
		self->dominance = NULL;
		self->txtstr = NULL;
		self->size = 0;
		self->cM = 0.0;
		self->Mb = 0.0;
	}
	
	return (PyObject *)self;
}

static int
Locus_init(Locus *self, PyObject *args, PyObject *kwds){
	int i;
	PyObject *name=NULL, *genotype=NULL, *chr=NULL;
	static char *kwlist[] = {"name", "genotype", "chr", "cM", "Mb", NULL};

	if (! PyArg_ParseTupleAndKeywords(args, kwds, "|OOOdd", kwlist, 
			&name, &genotype, &chr, &self->cM, &self->Mb))
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
	
	if (chr){
		if (PyString_Check(chr)){
			Py_XDECREF(self->chr);
			Py_INCREF(chr);
			self->chr = chr;
		}
		else{
			PyErr_SetString(PyExc_TypeError, "The chr attribute value must be a string"); 
			return -1;
		}
	}

	if (genotype){
		if (PyNumList_Check(genotype)){
			if (self->genotype != NULL)
				free(self->genotype);
			self->size = PyList_GET_SIZE(genotype);
			self->genotype = (double *)malloc((self->size)*sizeof(double));
			for (i=0;i< self->size; i++)
				self->genotype[i]=PyFloat_AsDouble(PyList_GET_ITEM(genotype, i));
		}
		else{
	  		PyErr_SetString(PyExc_TypeError, "The genotype attribute value must be a numbered list"); 
			return -1;
		}
	}
	return 0;
}

static PyObject *
Locus_repr(Locus * self){
	int i;
	char buffer[20];
	PyObject *genotypestr, * genotype, * result;
	genotype = PyTuple_New(self->size);
	for (i=0;i<self->size;i++)
		PyTuple_SetItem(genotype, i, Py_BuildValue("d",self->genotype[i]));
	genotypestr = PyObject_Repr(genotype);
	sprintf(buffer, "%2.2f",self->cM);
	result = PyString_FromFormat("Locus(\"%s\", %s, cM = %s, chr = %s)", PyString_AsString(self->name), 
						PyString_AsString(genotypestr),buffer, PyString_AsString(self->chr));
	Py_DECREF(genotypestr);
	Py_DECREF(genotype);
	return result;
}


static PyMemberDef Locus_members[] = {
	{NULL}  /* Sentinel */
};

static PyObject *
Locus_getcM(Locus *self, void *closure){
	return Py_BuildValue("d",self->cM);
}

static PyObject *
Locus_getMb(Locus *self, void *closure){
	return Py_BuildValue("d",self->Mb);
}

static int
Locus_nosetattr(Locus *self, PyObject *value, void *closure){
	PyErr_SetString(PyExc_TypeError, "this attribute value cannot be reset");
	return -1;
}

static PyObject *
Locus_getchr(Locus *self, void *closure){
	Py_INCREF(self->chr);
	return self->chr;
}

static PyObject *
Locus_getname(Locus *self, void *closure){
	Py_INCREF(self->name);
	return self->name;
}


static int
Locus_setname(Locus *self, PyObject *value, void *closure){
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
Locus_getgenotype(Locus *self, void *closure){
	int i;
	PyObject * genotype;
	genotype = PyList_New(self->size);
	for (i=0;i<self->size;i++)
		PyList_SetItem(genotype, i, Py_BuildValue("d",self->genotype[i]));
	return genotype;
}

/*dominance should change with genotype*/
static PyObject *
Locus_getdominance(Locus *self, void *closure){
	int i;
	PyObject * dominance;
	if (self->dominance == NULL){
		Py_INCREF(Py_None);
		return Py_None;
	}
	dominance = PyList_New(self->size);
	for (i=0;i<self->size;i++)
		PyList_SetItem(dominance, i, Py_BuildValue("d",self->dominance[i]));
	return dominance;
}


static PyObject *
Locus_gettxtstr(Locus *self, void *closure){
	int i;
	PyObject * txtstr;
	if (self->txtstr == NULL){
		Py_INCREF(Py_None);
		return Py_None;
	}
	txtstr = PyList_New(self->size);
	for (i=0;i<self->size;i++)
		PyList_SetItem(txtstr, i, Py_BuildValue("c",self->txtstr[i]));
	return txtstr;
}

static int
Locus_setgenotype(Locus *self, PyObject *genotype, void *closure){
	int i;
	if (genotype == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete the genotype attribute");
		return -1;
	}
	
	if (PyNumList_Check(genotype)){
		if (self->genotype != NULL)
			free(self->genotype);
		self->size = PyList_GET_SIZE(genotype);
		self->genotype = (double *)malloc((self->size)*sizeof(double));
		for (i=0;i< self->size; i++)
			self->genotype[i] = PyFloat_AsDouble(PyList_GET_ITEM(genotype, i));
	}
	else{
		PyErr_SetString(PyExc_TypeError, "The genotype attribute value must be a numbered list"); 
		return -1;
	}
	return 0;
}

static PyGetSetDef Locus_getseters[] = {
	{"chr", 
		(getter)Locus_getchr, (setter)Locus_nosetattr,
		"chromosme", NULL},
	{"cM", 
		(getter)Locus_getcM, (setter)Locus_nosetattr,
		"cent Morgan", NULL},
	{"Mb", 
		(getter)Locus_getMb, (setter)Locus_nosetattr,
		"Mega baspair", NULL},
	{"name", 
		(getter)Locus_getname, (setter)Locus_setname,
		"name", NULL},
	{"dominance", 
		(getter)Locus_getdominance, (setter)Locus_nosetattr,
		"dominance", NULL},
	{"genotext", 
		(getter)Locus_gettxtstr, (setter)Locus_nosetattr,
		"text str", NULL},
	{"genotype", 
		(getter)Locus_getgenotype, (setter)Locus_nosetattr,
		"genotype", NULL},
	{NULL}  /* Sentinel */
};

static PyMethodDef Locus_methods[] = {
	{NULL}  /* Sentinel */
};

static int
Locus_length(Locus *self) {
  return self->size;
}

static PyObject *
Locus_getItem(Locus *self, int i){
	if (i < 0 || i >= self->size) {
		PyErr_SetString(PyExc_IndexError, "list index out of range");
		return NULL;
	}
		return Py_BuildValue("d",self->genotype[i]);
}	

static PySequenceMethods Locus_as_sequence = {
	(inquiry)Locus_length,		/*sq_length*/
	(binaryfunc)0,					/*sq_concat*/
	(intargfunc)0,					/*sq_repeat*/
	(intargfunc)Locus_getItem,					/*sq_item*/
	(intintargfunc)0,				/*sq_slice*/
	(intobjargproc)0,			   /*sq_ass_item*/
	(intintobjargproc)0,			/*sq_ass_slice*/
};


PyTypeObject PyLocus_Type = {
	PyObject_HEAD_INIT(NULL)
	0,						 /*ob_size*/
	"Locus",			 /*tp_name*/
	sizeof(Locus),			 /*tp_basicsize*/
	0,						 /*tp_genotypeize*/
	(destructor)Locus_dealloc, /*tp_dealloc*/
	0,						 /*tp_print*/
	0,						 /*tp_getattr*/
	0,						 /*tp_setattr*/
	0,						 /*tp_compare*/
	(reprfunc)Locus_repr,	/*tp_repr*/
	0,						 /*tp_as_numbe&*/
	&Locus_as_sequence,						 /*tp_as_sequence*/
	0,						 /*tp_as_mapping*/
	0,						 /*tp_hash */
	0,						 /*tp_call*/
	0,						 /*tp_str*/
	0,						 /*tp_getattro*/
	0,						 /*tp_setattro*/
	0,						 /*tp_as_buffer*/
	Py_TPFLAGS_DEFAULT | Py_TPFLAGS_BASETYPE | Py_TPFLAGS_HAVE_GC, /*tp_flags*/
	"Locus objects",		   /* tp_doc */
	(traverseproc)Locus_traverse,					   /* tp_traverse */
	0,					   /* tp_clear */
	0,					   /* tp_richcompare */
	0,					   /* tp_weaklistoffset */
	0,					   /* tp_iter */
	0,					   /* tp_iternext */
	Locus_methods,			 /* tp_methods */	
	Locus_members,			 /* tp_members */
	Locus_getseters,		   /* tp_getset */
	0,						 /* tp_base */
	0,						 /* tp_dict */
	0,						 /* tp_descr_get */
	0,						 /* tp_descr_set */
	0,						 /* tp_dictoffset */
	(initproc)Locus_init,	  /* tp_init */
	PyType_GenericAlloc,						 /* tp_alloc */
	Locus_new,				 /* tp_new */
};

