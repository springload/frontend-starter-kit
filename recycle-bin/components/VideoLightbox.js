import Lightbox from './Lightbox';

class VideoLightbox extends Lightbox {
    constructor(options) {
        super();
        this.videoId = options.videoId;
        this.playlistId = options.playlistId;
        this.show();
        this.contentNode.className += ' modal__video';
    }

    // Note: These aren't react components yet, we're just using the idiom
    // of mounting/unmounting because it makes sense.
    componentDidMount() {
        const videoDiv = document.createElement('div');
        const innerDiv = document.createElement('div');
        const spinner = document.createElement('img');
        spinner.setAttribute('src', '/static/images/spinner-black.gif');

        videoDiv.className = 'modal__video-wrapper';
        innerDiv.className = 'modal__video-inner';
        videoDiv.appendChild(spinner);

        innerDiv.appendChild(videoDiv);
        this.contentNode.appendChild(innerDiv);
        this.videoDiv = videoDiv;
        this.innerDiv = innerDiv;
    }

    renderContent() {
        const { innerDiv, videoDiv, onPlayerReady, onPlayerStateChange, videoId } = this;
        const { offsetWidth, offsetHeight } = innerDiv;

        const player = new global.YT.Player(videoDiv, {
            width: offsetWidth,
            height: offsetHeight,
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                origin: window.location.origin,
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });

        this.player = player;
    }

    // IE8 Doesn't play very nicely with YouTube's API. You have to
    // explicitly remove the iframe and destroy the element, otherwise
    // the whole browser window blacks out.

    // For more information on this fine browser and the associated
    // phenomenon, check out:

    // http://stackoverflow.com/questions/7452387/black-screen-when-removing-an-embedded-youtube-video-by-javascript-in-ie8
    componentWillUnmount() {
        const playerEl = this.el.querySelector('iframe');

        if (playerEl) {
            playerEl.style.display = 'none';
            playerEl.parentNode.removeChild(playerEl);
            this.player.destroy();
        }
    }

    // eslint-disable-next-line
    onPlayerReady() {
        // e.target.playVideo();
    }

    // eslint-disable-next-line
    onPlayerStateChange() {}
}

export default VideoLightbox;
