// Layer between our analytics calls and GA.
const analyticsTrack = (...args) => {
    /* eslint-disable no-console */
    if (process.env.NODE_ENV !== 'production') {
        console.info('Analytics:', ...args);
    }

    if (global.ga) {
        global.ga(...args);
    } else {
        console.log('Error: missing `ga` object', ...args);
    }
};

// Convenience functions for specific types of tracking.
const analyticsEvent = analyticsTrack.bind(null, 'send', 'event');
const analyticsSocial = analyticsTrack.bind(null, 'send', 'social');
const analyticsException = message => analyticsTrack('send', 'exception', { exDescription: message, exFatal: false });

export function initErrorTracking() {
    const oldOnError = global.onerror;

    global.onerror = function onerror(message, file, line, column) {
        const ignoreError = message.indexOf('Script error.') !== -1;
        console.log(ignoreError, message);
        let ret = false;

        if (oldOnError) {
            // Call any previously assigned handler
            // eslint-disable-next-line prefer-rest-params
            ret = oldOnError.apply(this, arguments);
        }

        if (!ignoreError) {
            analyticsException(`${file}: ${message} (${line}:${column})`);
        }

        return ret;
    };
}

/**
 * Events set up for specific business logic.
 */
export const events = {
    testEvent() {
        analyticsEvent('category', 'action', 'label');
    },
};

/**
 * "Social" plugin to track social interactions.
 * https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions
 */
export const social = {
    share(socialNetwork, link) {
        analyticsSocial(socialNetwork, 'share', link);
    },
};

export const errors = {
    ajax(status, endpoint) {
        analyticsException(`AJAX error: ${status} ${endpoint}`);
    },
};
