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
Start of QTL Object
****************************/

static int
QTL_traverse(QTL *self, visitproc visit, void *arg){
	if (self->locus && visit(self->locus, arg) < 0)
		return -1;
	return 0;
}

static void
QTL_dealloc(QTL* self){
	int i;
	PyObject_GC_UnTrack(self);
	Py_TRASHCAN_SAFE_BEGIN(self);
	Py_XDECREF(self->locus);
	self->ob_type->tp_free((PyObject*)self);
	Py_TRASHCAN_SAFE_END(self);
}

static PyObject *
QTL_new(PyTypeObject *type, PyObject *args, PyObject *kwds){
	QTL *self;
	self = (QTL *)type->tp_alloc(type, 0);
	if (self != NULL) {
		self->locus = PyLocus_New();
		//Py_INCREF(self->locus);
		if (self->locus == NULL){
			Py_DECREF(self);
			return NULL;
		}
		self->lrs = 0.0;
		self->additive = 0.0;
		self->dominance = -1.0;  
	}
	return (PyObject *)self;
}

static int
QTL_init(QTL *self, PyObject *args, PyObject *kwds){
	int i;
	PyObject *locus=NULL;
	static char *kwlist[] = {"locus", "lrs", "additive", "dominance", NULL};
	if (! PyArg_ParseTupleAndKeywords(args, kwds, "|Oddd", kwlist, 
                                      &locus, &self->lrs, &self->additive, &self->dominance))
		return -1; 

	if (locus){
		if (PyLocus_Check(locus)){
			Py_XDECREF(self->locus);
			Py_INCREF(locus);
			self->locus = locus;
		}
		else{
      	PyErr_SetString(PyExc_TypeError, "The Locus attribute must be a locus object"); 
    		return -1;
		}
	}
	
	return 0;
}

static PyObject *
QTL_repr(QTL * self){
	char buffer[20];
	char buffer2[20];
	sprintf(buffer, "%2.3f", self->lrs);
	sprintf(buffer2, "%2.3f", self->additive);
	return PyString_FromFormat("QTL (Locus: \"%s\", Chr: %s, LRS: %s, Additive: %s)", 
				PyString_AsString(((Locus *)(self->locus))->name), 
				PyString_AsString(((Locus *)(self->locus))->chr),
				buffer, buffer2);
}

static PyMemberDef QTL_members[] = {
    {NULL}  /* Sentinel */
};

static int
QTL_nosetattr(QTL *self, PyObject *value, void *closure){
	PyErr_SetString(PyExc_TypeError, "this attribute value cannot be reset");
	return -1;
}

static PyObject *
QTL_getlocus(QTL *self, void *closure){
	Py_INCREF(self->locus);
	return self->locus;
}

static PyObject *
QTL_getlrs(QTL *self, void *closure){
	return Py_BuildValue("d",self->lrs);
}

static PyObject *
QTL_getdominance(QTL *self, void *closure){
	return Py_BuildValue("d",self->dominance);
}

static PyObject *
QTL_getadd(QTL *self, void *closure){
	return Py_BuildValue("d",self->additive);
}


static PyGetSetDef QTL_getseters[] = {
	{"dominance", 
		(getter)QTL_getdominance, (setter)QTL_nosetattr,
		"dominance", NULL},
	{"locus", 
		(getter)QTL_getlocus, (setter)QTL_nosetattr,
		"locus", NULL},
	{"lrs", 
		(getter)QTL_getlrs, (setter)QTL_nosetattr,
		"lrs", NULL},
	{"additive", 
		(getter)QTL_getadd, (setter)QTL_nosetattr,
		"additive", NULL},
	{NULL}  /* Sentinel */
};

static PyMethodDef QTL_methods[] = {
	{NULL}  /* Sentinel */
};


static int
QTL_compare(QTL * self, QTL * obj2){
	int result;
	if (self->lrs < obj2->lrs) {
		result = -1;
	}
	else if (self->lrs > obj2->lrs) {
		result = 1;
	}
	else  result = 0;
	return result;
}

PyTypeObject PyQTL_Type = {
	PyObject_HEAD_INIT(NULL)
	0,                         /*ob_size*/
	"QTL",             /*tp_name*/
	sizeof(QTL),             /*tp_basicsize*/
	0,                         /*tp_lociize*/
	(destructor)QTL_dealloc, /*tp_dealloc*/
	0,                         /*tp_print*/
	0,                         /*tp_getattr*/
	0,                         /*tp_setattr*/
	(cmpfunc )QTL_compare,		/*tp_compare*/
	(reprfunc)QTL_repr,    /*tp_repr*/
	0,                         /*tp_as_numbe&*/
	0,                         /*tp_as_sequence*/
	0,                         /*tp_as_mapping*/
	0,                         /*tp_hash */
	0,                         /*tp_call*/
	0,                         /*tp_str*/
	0,                         /*tp_getattro*/
	0,                         /*tp_setattro*/
	0,                         /*tp_as_buffer*/
	Py_TPFLAGS_DEFAULT | Py_TPFLAGS_BASETYPE | Py_TPFLAGS_HAVE_GC, /*tp_flags*/
	"QTL objects",           /* tp_doc */
	(traverseproc)QTL_traverse,		               /* tp_traverse */
	0,		               /* tp_clear */
	0,		               /* tp_richcompare */
	0,		               /* tp_weaklistoffset */
	0,		               /* tp_iter */
	0,		               /* tp_iternext */
	QTL_methods,             /* tp_methods */    
	QTL_members,             /* tp_members */
	QTL_getseters,           /* tp_getset */
	0,                         /* tp_base */
	0,                         /* tp_dict */
	0,                         /* tp_descr_get */
	0,                         /* tp_descr_set */
	0,                         /* tp_dictoffset */
	(initproc)QTL_init,      /* tp_init */
  	PyType_GenericAlloc,			/* tp_alloc */
	QTL_new,                 /* tp_new */
};

