// Import your SVG index file here:
import './svg';
// Important your main scss file here:
// import './sass/styles.scss';

// If you are using TAB focus for accessibilty import it here:
import { tabFocus } from './js/utils';

const site = {
    /**
     * Initialises the site's modules.
     * Each module defines its own init function, this is just the glue.
     */
    init() {
        tabFocus();
    },
};

site.init();
