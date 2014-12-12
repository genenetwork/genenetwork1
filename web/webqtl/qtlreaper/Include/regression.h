//: regression.h
// Simple header that prevents re-definition

#ifndef REGRESSIONQTL_GEN_H
#define REGRESSIONQTL_GEN_H

#define PERMUTATION_TESTSIZE 0
#define BOOTSTRAP_TESTSIZE 1000
#define MAXPERMUTATION 1000000

//void inverse(double**,int);
//double **matrix(int,int,int,int);

int _2nRegression(double *YY, double *XX, int n, double *result);
int _2nRegressionVariance(double *YY, double *XX, double *VV, int n, double *result);

int _3nRegression(double *YY, double *XX, double *CC, int n, double *result, int diff);
int _3nRegressionVariance(double *YY, double *XX, double *CC, double *VV, int n, double *result, int diff);

int _4nRegression(double *YY, double *XX1, double *XX2, int n, double *result);

int _1nbootStrap(double * a, double *b, int *c, int n);
int _2nbootStrap(double * a1, double *a2, double *b1, double *b2, int *c, int n);

int _1npermutation(double * a, double *b, int n);
int _2npermutation(double * a1, double *a2, double *b1, double *b2, int n);

int compare_doubles (const void * a, const void * b);


#endif // REGRESSIONQTL_GEN_H ///:~
