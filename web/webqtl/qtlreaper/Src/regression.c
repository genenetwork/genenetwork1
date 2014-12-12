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

extern void dgesv_ (int *, int *, double[], int *, int[], double[], int *, int *);

int dgesv(int n, int nrhs, double *a, int lda, int *ipiv, double *b, int ldb){
  int info;
  dgesv_(&n, &nrhs, a, &lda,  ipiv,  b, &ldb, &info);
  return info;
}

double **square(int n)
/* allocate a double sqaure matrix*/
{
	int i;
	double *row;
	double **m;

	/* allocate pointers to rows */
	row =(double *)malloc((n*n)*sizeof(double));
	if (!row) {fprintf(stderr,"%s\n","matrix allocation failure @ step 1");exit(1);}
	m =(double **)malloc(n*sizeof(double*));
	if (!m) {fprintf(stderr,"%s\n","matrix allocation failure @ step 2");exit(1);}
	for (i=0;i<n;i++)
		m[i] = row + i*n;
	return m;
}

int freesquare(double **sqaure, int nrow){
	free(sqaure[0]);
	free(sqaure);
	return 1;
}


int inverse(double **sqaure, int nrow){
	double *A;
	double *B;
	int *pivot;
	int t, i, j,n = nrow;
	B = (double *)malloc((n*n)*sizeof(double));
	for (i=0;i<n;i++)
		for (j=0;j<n;j++){
			if (i==j)
				B[i*n+j] = 1.0;
			else
				B[i*n+j] = 0.0;
		}
	pivot = (int *)malloc(n*sizeof(int));
	A = sqaure[0];
	t =  dgesv(n, n, A, n, pivot, B, n);
	for (i=0;i<n*n;i++)
		A[i] = B[i];
	return 1;
	free(B);
	free(pivot);
}


/*****************************************************
 * Method function for the random permutation of an array
 *****************************************************/

int _1npermutation(double * a, double *b, int N)
{	
	int i,j;
	double temp;
	for (i = 0; i < N; i++)
		*(b+i) = *(a+i);
	for (i = N-1;i > 0;i--)
	{
		j =rand() % (i+1);
		temp = b[i];
		b[i] = b[j];
		b[j] = temp;
	}
	return 1;
}

/*****************************************************
 * Method function for the double random permutation of an array
 *****************************************************/

int _2npermutation(double * a, double *b,double * c, double *d, int N)
{	
	int i,j;
	double temp;
	for (i = 0; i < N; i++){
		*(b+i) = *(a+i);
		*(d+i) = *(c+i);
	}
	 
	for (i = N-1;i > 0;i--)
	{
		j =rand() % (i+1);
		temp = b[i];
		b[i] = b[j];
		b[j] = temp;
		
		temp = d[i];
		d[i] = d[j];
		d[j] = temp;
	}
	return 1;
}

/*****************************************************
 * Method function for the bootstrap resampling of an array
 *****************************************************/

int _1nbootStrap(double * a, double *b, int *c, int N)
{	
	int i;
	for (i = 0; i < N; i++){
		c[i] = rand() % N;	
		b[i] = a[c[i]];
	}
	return 1;
}


/*****************************************************
 * Method function for the double random bootstrap of an array
 *****************************************************/

int _2nbootStrap(double * a, double *b,double * c, double *d, int *e, int N)
{	
	int i,j;
	for (i = 0; i < N; i++){
		j = rand() % N;
		e[i] = j;
		b[i] = a[j];
		d[i] = c[j];
	}
	return 1;
}




/*****************************************************
 * Method function for comparing two doubles
 *****************************************************/

int compare_doubles (const void * a, const void * b){
	/*double temp = *((double *)a) - *((double *)b);
	if (temp > 0)
		return 1;
	else if (temp < 0)
		return -1;
	else
		return 0;*/
	const double *da = (const double *)a;
	const double *db = (const double *)b;
	return (*da > *db)-(*da < *db);
}

int _2nRegression(double *YY, double *XX, int n, double *result){
	int i;
	double sigX, sigY, sigXX,sigYY, sigXY, D;
	double temp1, temp2;
	double a, b, tss, rss, LRS;
	sigY = 0.0;
	sigYY = 0.0;
	sigX =0.0;
	sigXX = 0.0;
	sigXY = 0.0;
	for (i=0;i<n;i++){
		temp1 = YY[i];
		temp2 = XX[i];
		sigY += temp1;
		sigYY += temp1*temp1;
		sigXY += temp1*temp2;
		sigX += temp2;
		sigXX += temp2*temp2;
	}
	D = sigXX - sigX*sigX/n;
	tss = sigYY - (sigY*sigY)/n;
	//printf("N=%2.1f tss= %2.1f rss=%2.1f" , LRS, tss,rss);
	a = (sigXX*sigY - sigX*sigXY)/(n*D);
	b = (sigXY - (sigX*sigY/n))/D;
	rss = sigYY + a*(n*a-2.0*sigY) + b*(2.0*a*sigX+b*sigXX-2.0*sigXY);
	LRS = n*log(tss/rss);
	if (isnan(LRS) || (LRS < 0)){
		b = 0.0;
		LRS = 0.0;
	}
	result[0] = LRS;
	result[1] = b;
	return 1;
}


int _2nRegressionVariance(double *YY, double *XX, double *VV, int n, double *result){
	int i;
	double D;
	double temp,temp0,temp1, temp2;	
	double sig1V, sigXV, sigYV, sigXXV,sigYYV, sigXYV;
	double a, b, tss, rss, LRS;sig1V = 0.0;	
	sigYV = 0.0;
	sigYYV = 0.0;
	sigXV =0.0;
	sigXXV = 0.0;
	sigXYV = 0.0;
	for (i=0;i<n;i++){
		temp0 = 1.0/VV[i];
		temp1 = YY[i];
		temp2 = XX[i];
		sig1V += temp0;
		temp = temp1*temp0;
		sigYV += temp;
		sigYYV += temp1*temp;
		sigXYV += temp*temp2;
		temp = temp2*temp0;
		sigXV += temp;
		sigXXV += temp*temp2;
	}

	D = sigXXV - sigXV*sigXV/sig1V;
	tss = sigYYV - (sigYV*sigYV)/sig1V;
	a = (sigXXV*sigYV - sigXV*sigXYV)/(sig1V*D);
	b = (sigXYV - (sigXV*sigYV/sig1V))/D;
	rss = sigYYV + a*(sig1V*a-2.0*sigYV) + b*(2.0*a*sigXV+b*sigXXV-2.0*sigXYV);
	LRS = n*log(tss/rss);
	if (isnan(LRS) || (LRS < 0)){
		b = 0.0;
		LRS = 0.0;
	}
	result[0] = LRS;
	result[1] = b;
	return 1;
}

int _3nRegression(double *YY, double *XX, double *CC, int n, double *result, int diff){	
	int i;
	double temp0,temp1,temp2,temp3,temp4,temp5,temp6;	
	double sigC,sigX,sigY,sigCC,sigXX,sigYY,sigXC, sigCY, sigXY;
	double D,a,b,y;
	double betac,betax,betak;
	double ssr,ssf,LRS;

	sigC = 0.0;
	sigX = 0.0;
	sigY = 0.0;
	sigCC = 0.0;
	sigXX = 0.0;
	sigYY = 0.0;
	sigXC = 0.0;
	sigCY = 0.0;
	sigXY = 0.0;
	for (i=0;i<n;i++){
		a = CC[i];
		b = XX[i];
		y = YY[i];
		sigC += a;
		sigX += b;
		sigY += y;
		sigCC += a*a;
		sigXX += b*b;
		sigYY += y*y;
		sigXC += a*b;
		sigCY += y*a;
		sigXY += y*b;
	}
			
	temp0 = sigXC*sigXC - sigCC*sigXX;
	temp1 = sigC*sigXX - sigX*sigXC;
	temp2 = sigX*sigCC - sigC*sigXC;
	temp3 = sigX*sigX - n*sigXX;
	temp4 = n*sigXC-sigC*sigX;
	temp5 = sigC*sigC - n*sigCC;
	temp6 = temp4*sigXC + temp2*sigX + temp5*sigXX;

	betak = (temp0*sigY+temp1*sigCY+temp2*sigXY)/temp6;
	betac = (temp1*sigY+temp3*sigCY+temp4*sigXY)/temp6;
	betax = (temp2*sigY+temp4*sigCY+temp5*sigXY)/temp6;

	ssf = sigYY+betac*(betac*sigCC-2*sigCY)+betax*(betax*sigXX-2*sigXY)+ 2*betac*betax*sigXC+betak*(n*betak+2*betac*sigC+2*betax*sigX-2*sigY);	
	if (diff != 0){
		D = sigCC - sigC*sigC/n;
		a = (sigCC*sigY - sigC*sigCY)/(n*D);
		b = (sigCY - (sigC*sigY/n))/D;
		ssr = sigYY + a*(n*a-2.0*sigY) + b*(2.0*a*sigC+b*sigCC-2.0*sigCY);	
	}
	else
		ssr = sigYY -(sigY*sigY)/n;
			
	LRS = n*log(ssr/ssf);
	if (isnan(LRS) || (LRS < 0)){
		betax = 0.0;
		betak = 0.0;
		LRS = 0.0;
	}
	result[0] = LRS;
	result[1] = betax;
	result[2] = betac;
	return 1;
}


int _3nRegressionVariance(double *YY, double *XX, double *CC, double *VV, int n, double *result, int diff){	
	int i;	
	double **aa;
	double sig1V,sigYV,sigXV,sigCV,sigXXV,sigYYV,sigCCV,sigXYV,sigXCV,sigCYV;
	double D,a,b,c,x,v,y;
	double betac,betax,betak;
	double ssr,ssf,LRS;
	
	sig1V = 0.0;	
	sigYV = 0.0;
	sigXV =0.0;
	sigCV =0.0;
	sigXXV = 0.0;
	sigYYV = 0.0;
	sigCCV = 0.0;
	sigXYV = 0.0;
	sigXCV = 0.0;
	sigCYV = 0.0;

	for (i=0;i<n;i++){
		c = CC[i];
		x = XX[i];
		y = YY[i];
		v = 1.0/VV[i];
		sig1V += v;	
		sigYV += y*v;
		sigXV += x*v;
		sigCV += c*v;
		sigXXV += x*x*v;
		sigYYV += y*y*v;
		sigCCV += c*c*v;
		sigXYV += x*y*v;
		sigXCV += x*c*v;
		sigCYV += c*y*v;
	}

	aa = square(3);
	aa[0][0] = sig1V;
	aa[1][1] = sigXXV;
	aa[2][2] = sigCCV;
	aa[0][1] = aa[1][0] = sigXV;
	aa[0][2] = aa[2][0] = sigCV;
	aa[1][2] = aa[2][1] = sigXCV;

	inverse(aa,3);

	betak = aa[0][0]*sigYV + aa[0][1]*sigXYV + aa[0][2]*sigCYV;
	betax = aa[1][0]*sigYV + aa[1][1]*sigXYV + aa[1][2]*sigCYV;
	betac = aa[2][0]*sigYV + aa[2][1]*sigXYV + aa[2][2]*sigCYV;
	ssf = sigYYV+betax*(betax*sigXXV-2*sigXYV)+betac*(betac*sigCCV-2*sigCYV)+ 2*betax*betac*sigXCV+betak*(sig1V*betak+2*betax*sigXV+2*betac*sigCV-2*sigYV);	
	if (diff != 0){
		D = sigCCV - sigCV*sigCV/sig1V;
		a = (sigCCV*sigYV - sigCV*sigCYV)/(sig1V*D);
		b = (sigCYV - (sigCV*sigYV/sig1V))/D;
		ssr = sigYYV + a*(sig1V*a-2.0*sigYV) + b*(2.0*a*sigCV+b*sigCCV-2.0*sigCYV);
	}
	else
		ssr = sigYYV - (sigYV*sigYV)/sig1V;
	
	LRS = n*log(ssr/ssf);
	if (isnan(LRS) || (LRS < 0)){
		betax = 0.0;
		betac = 0.0;
		LRS = 0.0;
	}
	result[0] = LRS;
	result[1] = betax;
	result[2] = betac;
	freesquare(aa,3);
	return 1;
}
/*
int _4nRegression(double *YY, double *XX1, double *XX2, int n, double *result)
{	
	double ZZ[4];
	int k,l;
	double sa,sb,sab,sa2,sb2,sa2b,sab2,sa2b2,sy,say,sby,saby,sy2,ssr,ssradd,ssf,LRS,LRSadd;
	double a,b,y,ab,ay,by;
	double **aa,**bb;
	double temp0,temp1,temp2,temp3,temp4,temp5,temp6;	
	double betaa,betab,betak;	
	ssradd = 0.0;
	aa = matrix(0,3,0,3);
	bb = matrix(0,3,0,0);
	sa = 0.0;
	sb = 0.0;
	sab = 0.0;
	sa2b = 0.0;
	sa2 = 0.0;
	sb2 = 0.0;
	sab2 = 0.0;
	sa2b2 = 0.0;
	sy = 0.0;
	sy2 = 0.0;
	say = 0.0;
	sby = 0.0;
	saby = 0.0;
	for (k=0;k<n;k++){
		a = XX1[k];
		b = XX2[k];
		y = YY[k];
		ab = a*b;
		ay = a*y;
		by = b*y;
		sa += a;
		sb += b;
		sy += y;
		sy2 += y*y;
		sa2 += a*a;
		sb2 += b*b;
		sab += ab;
		sa2b += a*ab;
		sab2 += b*ab;
		sa2b2 += ab*ab;
		say += ay;
		sby += by;
		saby += a*by;
	}
		
	ssr = sy2 -(sy*sy)/n;
	aa[0][0] = n;
	aa[1][1] = sa2;
	aa[2][2] = sb2;
	aa[3][3] = sa2b2;
	aa[0][1] = aa[1][0] = sa;
	aa[0][2] = aa[2][0] = sb;
	aa[0][3] = aa[1][2] = aa[2][1] = aa[3][0] = sab;
	aa[1][3] = aa[3][1] = sa2b;
	aa[2][3] = aa[3][2] = sab2;
	bb[0][0] = sy;
	bb[0][1] = say;
	bb[0][2] = sby;
	bb[0][3] = saby;

	inverse(aa,4);
	for (l=0;l<4;l++){
		ZZ[l] = aa[l][0]*bb[0][0] + aa[l][1]*bb[1][0]+aa[l][2]*bb[2][0]+aa[l][3]*bb[3][0];
	}	
	
	ssf = 0.0;
	ssf += sy2;
	ssf += ZZ[0]*(ZZ[0]*n - 2.0*sy +2.0*ZZ[1]*sa+2.0*ZZ[2]*sb+2.0*ZZ[3]*sab);
	ssf += ZZ[1]*(ZZ[1]*sa2 - 2.0*say +2.0*ZZ[2]*sab);
	ssf += ZZ[2]*(ZZ[2]*sb2 - 2.0*sby);
	ssf += ZZ[3]*(ZZ[3]*sa2b2 - 2.0*saby +2.0*ZZ[1]*sa2b+2.0*ZZ[2]*sab2);

	temp0 = sab*sab - sa2*sb2;
	temp1 = sa*sb2 - sb*sab;
	temp2 = sb*sa2 - sa*sab;
	temp3 = sb*sb - n*sb2;
	temp4 = n*sab-sa*sb;
	temp5 = sa*sa - n*sa2;
	temp6 = temp4*sab + temp2*sb + temp5*sb2;

	betak = (temp0*sy+temp1*say+temp2*sby)/temp6;
	betaa = (temp1*sy+temp3*say+temp4*sby)/temp6;
	betab = (temp2*sy+temp4*say+temp5*sby)/temp6;
	ssradd = sy2+betaa*(betaa*sa2-2*say)+betab*(betab*sb2-2*sby)+ 2*betaa*betab*sab+betak*(n*betak+2*betaa*sa+2*betab*sb-2*sy);	
		
	if (ssf <0.00000000000000001){
		ssf = 100.0;
		printf("Singular matrix\n");
	}
	if (ssradd <0.00000000000000001){
		ssradd = ssf;
		printf("ADD Singular matrix\n");
	}

	LRS = n*log(ssr/ssf);
	LRSadd = n*log(ssradd/ssf);
	result[0] = LRS;
	result[1] = LRSadd;
	return 1;
}
*/
