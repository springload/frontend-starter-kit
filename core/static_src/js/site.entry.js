import GA from 'springload-analytics.js';

import { initErrorTracking } from './api/analytics';
import { tabFocus, initFeatureDetection, initFlexboxSupport } from './utils';

// Set to false to disable performance tracking.
const TRACK_PERFORMANCE = true && !!console.time;

// Use process.env.NODE_ENV !== 'production' as a development aid. The production build strips this code.
if (process.env.NODE_ENV !== 'production' && TRACK_PERFORMANCE) {
    console.time('INIT');
}

const site = {
    /**
     * Initialises the site's modules.
     * Each module defines its own init function, this is just the glue.
     */
    init() {
        initErrorTracking();
        initFeatureDetection();
        initFlexboxSupport();
        tabFocus();
        GA.init();
    },
};

site.init();

if (process.env.NODE_ENV !== 'production' && TRACK_PERFORMANCE) {
    console.timeEnd('INIT');
}
