package de.aw.osgi.mwa.greeter;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

/**
 * @author armin.weisser
 */
public class Activator implements BundleActivator {

    /**
     * Implements BundleActivator.start().
     * @param bundleContext - the framework context for the bundle.
     **/
    public void start(BundleContext bundleContext) {
        System.out.println("Greeter Service is online");
    }

    /**
     * Implements BundleActivator.stop()
     * @param bundleContext - the framework context for the bundle.
     **/
    public void stop(BundleContext bundleContext) {
        System.out.println("Greeter Service is offline");
    }
}

