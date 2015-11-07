# OSGi Boilerplate

You want to start building really modular apps right away? Then the OSGi Boilerplate is for you.

## What you get ...
* Minimal multi-module project based on Maven. Every maven module is an OSGi bundle
* Preconfigured OSGi container (Apache Felix 5) with web management console already included
* Auto-Build and assemble OSGi bundles without messing with the MANIFEST.MF
* Auto resolve dependent OSGi bundles based on Maven dependencies
* Collect and deploy all neccessary bundles and dependencies into the included OSGi container with a single command
* gulp support
* Groovy support within your bundles

##Installation
    execute "npm install"
    gulp make

##Starting the OSGi container
    gulp felix:up


## Appendix

###Usefull debug commands:
    inspect cap service

###Web-Management Console:
    http://localhost:8080/system/console

###Bundles
    http://repo1.maven.org/maven2/org/apache/felix/
    
###Tags
    git tag