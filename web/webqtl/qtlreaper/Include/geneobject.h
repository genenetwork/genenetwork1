
/* Gene object interface */

/*
Include object type such as Locus, chromosome and genotype
*/

#ifndef Py_GENEOBJECT_H
#define Py_GENEOBJECT_H
#ifdef __cplusplus
extern "C" {
#endif

#define WHITES " \n\r\t "
#define PERMUTATION_TESTSIZE 1000
#define BOOTSTRAP_TESTSIZE 1000
#define MAXPERMUTATION 1000000

typedef struct {
	PyObject_HEAD
	PyObject *name;
	PyObject *chr;
	double *genotype;
	double *dominance;
	char *txtstr;
	int size;
	double cM;
	double Mb;
} Locus;

typedef struct {
	PyObject_HEAD
	PyObject *name;
	PyObject **loci;
	int size;
} Chromosome;

typedef struct {
	PyObject_HEAD
	PyObject *name;
	PyObject *mat;
	PyObject *pat;
	PyObject *type;
	PyObject **chromosome;
	int size;
	char **prgy;
	int nprgy;
	//booleans
	int parentsf1;
	int dominance;
	int Mb;
	int interval;
} Dataset;

typedef struct {
	PyObject_HEAD
	PyObject *locus;
	double lrs;
	double additive;
	double dominance;
} QTL;

extern PyTypeObject PyLocus_Type;
extern PyTypeObject PyChromosome_Type;
extern PyTypeObject PyDataset_Type;
extern PyTypeObject PyQTL_Type;

#define PyLocus_Check(op) ((op)->ob_type == &PyLocus_Type)
#define PyChromosome_Check(op) ((op)->ob_type == &PyChromosome_Type)
#define PyDataset_Check(op) ((op)->ob_type == &PyDataset_Type)

int fgetline(FILE *fp, char line[], int max);
void strstrip(char* str);
int charcount(char* str, char c);

int PyNumList_Check(PyObject *pObj);
int PyStringList_Check(PyObject *pObj);
int PyLocusList_Check(PyObject *pObj);
int PyChromosomeList_Check(PyObject *pObj);

PyObject *PyLocus_New();
PyObject *PyChromosome_New();
PyObject *PyDataset_New();
PyObject *PyQTL_New(PyObject *locus, double lrs, double additive);
PyObject *PyQTL_NewDominance(PyObject *locus, double lrs, double additive, double dominance);

PyObject *Locus_addparentsf1(Locus* locus, char *strainName, double *value, int n);
PyObject *Chromosome_addparentsf1(Chromosome* chr, char *strainName, double *value, int n);

PyObject *Chromosome_addinterval(Chromosome* chr, double interval);

double pnorm1(double x);
#ifdef __cplusplus
}
#endif
#endif /* !Py_GENEOBJECT_H */
