import os, sys, string, re
from glob import glob

if not hasattr(sys, 'version_info') or sys.version_info < (2,2,0,'alpha',0):
    raise SystemExit, "Python 2.2 or later required to build Numeric."

import distutils
from distutils.core import setup, Extension

headers = glob (os.path.join ("Include","*.h"))
extra_compile_args = []
sourcelist = [os.path.join('Src', 'locus.c'),
               os.path.join('Src', 'chromosome.c'),
               os.path.join('Src', 'dataset.c'),
               os.path.join('Src', 'qtlobject.c'),
               os.path.join('Src', 'geneutil.c'),
               os.path.join('Src', 'normprob.c'),
               os.path.join('Src', 'regression.c'),]


#uncomment the following lines to use lapack_lite
lapacklist = [os.path.join('Src', 'blas_lite.c'), 
               os.path.join('Src', 'f2c_lite.c'),
               os.path.join('Src', 'dlapack_lite.c')
             ]
libraries_list = []
 
#uncomment the following lines to use your own BLAS
#lapacklist = []
#libraries_list = ['lapack','blas','g2c']

sourcelist += lapacklist

packages = ['']
include_dirs = ['Include']
ext_modules = [
    Extension('reaper',sourcelist,
      	  libraries = libraries_list,
              extra_compile_args = extra_compile_args) 
    ]
    
setup(name="Reaper", version="1.0",
      extra_path = 'qtlreaper',
      packages = packages,
      headers = headers,
      include_dirs = include_dirs,
      ext_modules = ext_modules
      )

