genenetwork on github  (May 7, 2012 by Lei Yan and Rob Williams)

www.genenetwork.org 

Released under Affero General Public License 3 (AGPLv3)

For background see: http://en.wikipedia.org/wiki/Genenetwork

Please link to https://github.com/genenetwork/genenetwork2 for the most recent developments on GeneNetwork 2 on GitHub.

WWW service initiated January, 1994 as The Portable Dictionary of the Mouse Genome and 
June 15, 2001 as WebQTL. 

This code and the main web service is currently operated by Lei Yan, Zachary Sloan, 
Arthur Centeno. Design and code by Xiaodong Zhou, Christian Fernandez, Sam Ockman, Ning Liu, Rudi Alberts, 
Elissa Chesler, Jintao Wang, Kenneth Manly, Robert W. Williams, and colleagues.

Code and primary web service managed by Dr. Robert W. Williams and the University of Tennessee Health Science Center,
Memphis TN, USA. 

Email labwilliams@gmail.com or rwilliams@uthsc.edu

Older version available on SourceForge  http://sourceforge.net/projects/genenetwork/

Funded by the National Institutes of Health and
University of Tennessee Center for Integrative and Translational Genomics


===========

#### Running inside a Guix container

Running Genenetwork1 in modern environments can be difficult since its
dependencies are no longer actively supported. However, with guix, you
can reproduce the environment in which it ran. This is possible since
some of the old (deprecated) packages are either maintained in
[guix-past](https://gitlab.inria.fr/guix-hpc/guix-past) or
[guix-bioinformatics](http://git.genenetwork.org/guix-bioinformatics/guix-bioinformatics.git/).


To host genenetwork1 in a guix container using [.guix-deploy](./.guix-deploy), run:

```
source .guix-deploy
httpd -f httpd.conf 
```

where the last command needs to be pasted.

This runs genenetwork1 on port 8042. To change the default port,
modify: GN1-httpd-config in
[gn1-httpd-config.scm](http://git.genenetwork.org/guix-bioinformatics/guix-bioinformatics/src/branch/master/gn/services/gn1-httpd-config.scm). Other
default params you can modify are:

- pid-file (default: "/tmp/guix-gn1/httpd-genenetwork1.pid")
- error-log (default: "/tmp/guix-gn1/httpd-genenetwork1-error-log")

Ensure the above files exist and your user can write to those
directories(i.e. /tmp/guix-gn1).

To kill the service on port 8042, get the id of the running httpd
process: `lsof -i :<portNumber>`, and then simply kill it. A one liner
looks like:

```sh
kill $(lsof -i :8042 | cut -d' ' -f2| sed -n 2p)
```

Logs are in: "/tmp/guix-gn1/httpd-genenetwork1-error-log".
