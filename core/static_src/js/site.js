import React from 'react';
import ReactDOM from 'react-dom';

import GA from 'springload-analytics.js';

import { initErrorTracking } from './api/analytics';
import {
    querySelectArray,
    // addYouTubePlayerAPI,
    tabFocus,
    initFeatureDetection,
    initFlexboxSupport,
} from './utils';

const TRACK_PERFORMANCE = true && !!console.time;

if (process.env.NODE_ENV !== 'production') {
    if (TRACK_PERFORMANCE) {
        console.time('INIT');
    }
}

initErrorTracking();
initFeatureDetection();
initFlexboxSupport();

class Site {
    constructor() {
        // this is just some example stuff happening in here...
        GA.init();

        // addYouTubePlayerAPI();
        this.initVideos();
        this.initForms();

        tabFocus();

        const name = 'World';
        console.log(`Hello ${name}!`);
    }


    initVideos() {
        const modalContainer = document.querySelector('[data-modal]');
        const videos = querySelectArray('[data-video-id]');

        const videoClick = (e) => {
            e.preventDefault();
            e.stopPropagation();

            let videoId = e.currentTarget.getAttribute('data-video-id');

            // Account for different video formats
            if (videoId.match(/watch\?v=/)) {
                videoId = videoId.split('v=', 2)[1];
            } else if (videoId.match(/\.be\/.+/)) {
                videoId = videoId.split('.be/')[1];
            }

            ReactDOM.render(
                <VideoModal
                    isOpen={true}
                    videoId={videoId}
                    modalContainer={modalContainer}
                />, modalContainer
            );
        };

        const videoKeyDown = (e) => {
            // Enter key
            if (e.keyCode === 13) {
                videoClick(e);
            }
        };

        videos.forEach((item) => {
            item.addEventListener('click', videoClick, false);
            item.addEventListener('keydown', videoKeyDown, false);
        });
    }

    initForms() {
        const modalContainer = document.querySelector('[data-modal]');
        const formModal = querySelectArray('[data-form-modal]');


        const formModalClick = (e) => {
            e.preventDefault();
            e.stopPropagation();

            ReactDOM.render(
                <FormModal
                    isOpen={true}
                    modalContainer={modalContainer}
                />, modalContainer
            );
        };

        formModal.forEach((item) => {
            item.addEventListener('click', formModalClick, false);
        });
    }

}

window.site = new Site({ });

if (process.env.NODE_ENV !== 'production') {
    if (TRACK_PERFORMANCE) {
        console.timeEnd('INIT');
    }
}
