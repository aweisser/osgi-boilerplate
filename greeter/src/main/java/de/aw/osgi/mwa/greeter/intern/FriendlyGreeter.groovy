package de.aw.osgi.mwa.greeter.intern;

import de.aw.osgi.mwa.greeter.Greeter;

/**
 * @author armin.weisser
 */
public class FriendlyGreeter implements Greeter {

    String greet(String name) {
        "Hello $name"
    }
}
