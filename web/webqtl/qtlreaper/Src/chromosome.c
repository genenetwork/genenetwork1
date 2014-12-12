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



/***************************
Start of Chromosome Object
****************************/

static int
Chromosome_traverse(Chromosome *self, visitproc visit, void *arg){
	int i, err;
	PyObject *x;
	if (self->name && visit(self->name, arg) < 0)
		return -1;
	for (i = self->size; --i >= 0;) {
	x = self->loci[i];
		if (x != NULL) {
			err = visit(x, arg);
			if (err)
				return err;
		}
	}
	return 0;
}

static void
Chromosome_dealloc(Chromosome* self){
	int i;
	PyObject_GC_UnTrack(self);
	Py_TRASHCAN_SAFE_BEGIN(self);
	Py_XDECREF(self->name);
	if (self->loci != NULL){
		for (i=0;i<self->size;i++){
			Py_DECREF(self->loci[i]);
		}
		PyMem_FREE(self->loci);
	}
	self->ob_type->tp_free((PyObject*)self);
	Py_TRASHCAN_SAFE_END(self);
}

static PyObject *
Chromosome_new(PyTypeObject *type, PyObject *args, PyObject *kwds){
	Chromosome *self;
	self = (Chromosome *)type->tp_alloc(type, 0);
	if (self != NULL) {
		self->name = PyString_FromString("Unknown_Chr");
		if (self->name == NULL){
			Py_DECREF(self);
			return NULL;
		}
		self->loci = NULL;
		self->size = 0;   
	}
	return (PyObject *)self;
}

static int
Chromosome_init(Chromosome *self, PyObject *args, PyObject *kwds){
	int i;
	PyObject *name=NULL, *loci=NULL, *temp;
	static char *kwlist[] = {"name", "loci",NULL};
	if (! PyArg_ParseTupleAndKeywords(args, kwds, "|OO", kwlist, 
                                      &name, &loci))
		return -1; 

	if (name){
		if (PyString_Check(name)){
			Py_XDECREF(self->name);
			Py_INCREF(name);
			self->name = name;
		}
		else{
      	PyErr_SetString(PyExc_TypeError, "The name attribute value must be a string"); 
    		return -1;
		}
	}
	
	if (loci){
		if (PyLocusList_Check(loci)){
			if (self->loci != NULL){
				for (i=0;i<self->size;i++)
    				Py_XDECREF(self->loci[i]);
    			free(self->loci);
    		}
        	self->size = PyList_GET_SIZE(loci);
        	self->loci = (PyObject **)malloc((self->size)*sizeof(PyObject *));
			for (i=0;i< self->size; i++){
				temp = PyList_GET_ITEM(loci, i);
				Py_INCREF(temp);
				self->loci[i] = temp;
			}
		}
		else{
			PyErr_SetString(PyExc_TypeError, "The item attribute value must be a Locus list"); 
			return -1;
		}
	}
	return 0;
}

static PyObject *
Chromosome_repr(Chromosome * self){
	int i;
	PyObject *locistr, * loci, * result;
	loci = PyTuple_New(self->size);
	for (i=0;i<self->size;i++){
		Py_INCREF(self->loci[i]);
		PyTuple_SetItem(loci, i, self->loci[i]);
	}
	locistr = PyObject_Repr(loci);
	result = PyString_FromFormat("Chr(\"%s\", %s)", 
				PyString_AsString(self->name), PyString_AsString(locistr));
	Py_DECREF(locistr);
	Py_DECREF(loci);
	return result;
}

static PyMemberDef Chromosome_members[] = {
    {NULL}  /* Sentinel */
};

static int
Chromosome_nosetattr(Chromosome *self, PyObject *value, void *closure){
	PyErr_SetString(PyExc_TypeError, "this attribute value cannot be reset");
	return -1;
}

static PyObject *
Chromosome_getname(Chromosome *self, void *closure){
	Py_INCREF(self->name);
	return self->name;
}


static int
Chromosome_setname(Chromosome *self, PyObject *value, void *closure){
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
Chromosome_getloci(Chromosome *self, void *closure){
	int i;
	PyObject * loci;
	loci = PyList_New(self->size);
	for (i=0;i<self->size;i++){
		Py_INCREF(self->loci[i]);
		PyList_SetItem(loci, i, self->loci[i]);
	}
	return loci;
}

static int
Chromosome_setloci(Chromosome *self, PyObject *loci, void *closure){
	int i;
	PyObject * temp;
	if (loci == NULL) {
		PyErr_SetString(PyExc_TypeError, "Cannot delete the loci attribute");
		return -1;
	}
	if (PyLocusList_Check(loci)){
		if (self->loci != NULL){
			for (i=0;i<self->size;i++)
				Py_DECREF(self->loci[i]);
			free(self->loci);
		}
		self->size = PyList_GET_SIZE(loci);
		self->loci = (PyObject **)malloc((self->size)*sizeof(PyObject *));
		for (i=0;i< self->size; i++){
			temp = PyList_GET_ITEM(loci, i);
			Py_INCREF(temp);
			self->loci[i] =  temp;
		}
	}
	else {
		PyErr_SetString(PyExc_TypeError, 
				"The loci attribute value must be a Locus list");
		return -1;
	}
	return 0;
}

static PyGetSetDef Chromosome_getseters[] = {
	{"name", 
		(getter)Chromosome_getname, (setter)Chromosome_setname,
		"name", NULL},
	{"loci", 
		(getter)Chromosome_getloci, (setter)Chromosome_setloci,
		"loci", NULL},
	{NULL}  /* Sentinel */
};

static PyMethodDef Chromosome_methods[] = {
	{NULL}  /* Sentinel */
};

static int
Chromosome_length(Chromosome *self) {
	return self->size;
}


static PyObject *
Chromosome_getItem(Chromosome *self, int i){
	if (i < 0 || i >= self->size) {
		PyErr_SetString(PyExc_IndexError, "list index out of range");
		return NULL;
	}
	Py_INCREF(self->loci[i]);
	return self->loci[i];
}	


static PySequenceMethods Chromosome_as_sequence = {
	(inquiry)Chromosome_length,        /*sq_length*/
	(binaryfunc)0,					/*sq_concat*/
	(intargfunc)0,					/*sq_repeat*/
	(intargfunc)Chromosome_getItem,					/*sq_item*/
	(intintargfunc)0,				/*sq_slice*/
	(intobjargproc)0,               /*sq_ass_item*/
	(intintobjargproc)0,            /*sq_ass_slice*/
};


PyTypeObject PyChromosome_Type = {
	PyObject_HEAD_INIT(NULL)
	0,                         /*ob_size*/
	"Chromosome",             /*tp_name*/
	sizeof(Chromosome),             /*tp_basicsize*/
	0,                         /*tp_lociize*/
	(destructor)Chromosome_dealloc, /*tp_dealloc*/
	0,                         /*tp_print*/
	0,                         /*tp_getattr*/
	0,                         /*tp_setattr*/
	0,                         /*tp_compare*/
	(reprfunc)Chromosome_repr,    /*tp_repr*/
	0,                         /*tp_as_numbe&*/
	&Chromosome_as_sequence,                         /*tp_as_sequence*/
	0,                         /*tp_as_mapping*/
	0,                         /*tp_hash */
	0,                         /*tp_call*/
	0,                         /*tp_str*/
	0,                         /*tp_getattro*/
	0,                         /*tp_setattro*/
	0,                         /*tp_as_buffer*/
	Py_TPFLAGS_DEFAULT | Py_TPFLAGS_BASETYPE | Py_TPFLAGS_HAVE_GC, /*tp_flags*/
	"Chromosome objects",           /* tp_doc */
	(traverseproc)Chromosome_traverse,		               /* tp_traverse */
	0,		               /* tp_clear */
	0,		               /* tp_richcompare */
	0,		               /* tp_weaklistoffset */
	0,		               /* tp_iter */
	0,		               /* tp_iternext */
	Chromosome_methods,             /* tp_methods */    
	Chromosome_members,             /* tp_members */
	Chromosome_getseters,           /* tp_getset */
	0,                         /* tp_base */
	0,                         /* tp_dict */
	0,                         /* tp_descr_get */
	0,                         /* tp_descr_set */
	0,                         /* tp_dictoffset */
	(initproc)Chromosome_init,      /* tp_init */
  	PyType_GenericAlloc,			/* tp_alloc */
	Chromosome_new,                 /* tp_new */
};

