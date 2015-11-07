# OSGi Boilerplate

You want to start building really modular java applications right away? 
You don't want to waste your time setting up an easy to use development environment and module structure?

Then the OSGi Boilerplate is for you.

Clone the repo and you can start develop your first OSGi bundle instantly without worrying the setup stuff.


## What you get ...
* Minimal multi-module project based on Maven. Every maven module is an OSGi bundle
* Preconfigured OSGi container (Apache Felix 5) with web management console already included
* Auto-Build and assemble OSGi bundles without messing with the MANIFEST.MF
* Auto resolve dependent OSGi bundles based on Maven dependencies
* Collect and deploy all neccessary bundles and dependencies into the included OSGi container with a single command
* gulp support
* Groovy support within your bundles

##Prerequists
* JDK >= 1.7
* Maven 3 - https://maven.apache.org/
* npm - https://www.npmjs.com/

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