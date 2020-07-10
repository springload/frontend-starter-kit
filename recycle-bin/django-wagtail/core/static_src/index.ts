import './js/public-path'; // MUST be first (yes, before absolute imports)

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import your SVG index file here:
// import './svg';
// Copy/download and use the Springload Starter Styles as your base at https://github.com/springload/frontend-starter-styles/tree/master/src/sass and
// Import your main scss file here:
// import './sass/styles.scss';

// If you are using TAB focus for accessibilty import it here:
// alternatively you could use npm package 'what-input' if you prefer
import { tabFocus } from './js/utils';

const site = {
    /**
     * Initialises the site's modules.
     * Each module defines its own init function, this is just the glue.
     */
    init(): void {
        tabFocus();
    },
};

site.init();
