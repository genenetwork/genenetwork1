# GeneNetwork version 1

Please see https://github.com/genenetwork for the most recent
developments on GeneNetwork on GitHub.

Service initiated January, 1994 as The Portable Dictionary of the
Mouse Genome and June 15, 2001 as WebQTL.

Funded by the National Institutes of Health and University of
Tennessee Center for Integrative and Translational Genomics

For background see: http://en.wikipedia.org/wiki/Genenetwork

===========

## Database

## Genotypes

A number of directories contain data that are not checked into
git. See [this](./.gitignore).

## Production

For production

    gn1@tux01:~/production/gnshare/gn$ . .guix-deploy

Note the extra dot. Copy and paste the URL in the container:

    httpd -f /gnu/store/2g36jjrkn39d0npfrrl1rd7z0s8dp52s-httpd.conf

## Zach

    zas1024@tux01:~/gn1-zach/gnshare/gn$ . .guix-deploy

and paste

    httpd -f /export/local/home/zas1024/gn1-zach/gnshare/gn/etc/httpd-zas1024.conf

## Other

Running Genenetwork1 in modern environments can be difficult since its
dependencies are no longer actively supported. With guix, however, we
can reproduce the environment in which it ran. This is possible since
some of the old (deprecated) packages are maintained in
[guix-past](https://gitlab.inria.fr/guix-hpc/guix-past) and
[guix-bioinformatics](http://git.genenetwork.org/guix-bioinformatics/guix-bioinformatics.git/).

To host genenetwork1 in a guix container, run something like

```sh
#!/bin/sh

# Modify paths accordingly; or if you have your channels configured
# appropriately, you don't need to include the "-L" flags

/path/to/pre-inst-env guix environment \
    -L /path/to/guix-past/modules/ \
    -L /path/to/guix-bioinformatics/ \
    --pure \
    genenetwork1 \
    --ad-hoc \
    httpd-with-mod-python \
    python2@2.4 \
    python24-htmlgen-GN1 \
    python24-json-GN1 \
    python24-mysqlclient \
    python24-numarray \
    python24-piddle \
    python24-pp-GN1 \
    python24-pyx \
    python24-pyxlwriter \
    python24-qtlreaper \
    python24-rpy2 \
    python24-svg-GN1 \
    -- \
    httpd \
    -f \
    $(/path/to/pre-inst-env guix build -L /path/to/guix-past/modules/ -L /path/to/guix-bioinformatics/ -e '(@ (gn services gn1-httpd-config) GN1-httpd-config)') \
    -T
```

This runs genenetwork1 on port 8042. To change the default port,
modify: GN1-httpd-config in
[gn1-httpd-config.scm](http://git.genenetwork.org/guix-bioinformatics/guix-bioinformatics/src/branch/master/gn/services/gn1-httpd-config.scm). Other
default params you can modify are:

- pid-file (default: "/tmp/guix-gn1/httpd-genenetwork1.pid")
- error-log (default: "/tmp/guix-gn1/httpd-genenetwork1-error-log")

Ensure the above files exist and your user can write to those
directories(i.e. /tmp/guix-gn1).

# LICENSE

Released under Affero General Public License 3 (AGPLv3)
