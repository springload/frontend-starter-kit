/* eslint-disable new-cap */
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-accessible-modal';
import YouTubePlayer from 'youtube-player';

import {
    getWidth,
    getHeight,
} from '../../utils';


const VideoModal = React.createClass({

    propTypes: {
        isOpen: React.PropTypes.bool,
        videoId: React.PropTypes.string,
        playlistId: React.PropTypes.string,
        modalContainer: React.PropTypes.object,
    },

    getDefaultProps() {
        return {
            isOpen: false,
            videoId: '',
            playlistId: '',
            modalContainer: null,
        };
    },

    getInitialState: () => {
        return {
            modalIsOpen: this.props.isOpen,
        };
    },

    openModal: () => {
        this.setState({
            modalIsOpen: true,
        });
    },

    closeModal: () => {
        this.setState({
            modalIsOpen: false,
        });
    },

    componentDidMount() {
        const { videoId } = this.props;
        const { inner, wrapper } = this.refs;

        YouTubePlayer(wrapper, {
            width: getWidth(inner),
            height: getHeight(inner),
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                origin: window.location.origin,
            },
            events: {
                onReady: this.onPlayerReady,
                onStateChange: this.onPlayerStateChange,
            },
        });
    },

    onPlayerReady() {
    },

    onPlayerStateChange() {
    },

    destroyModal() {
        const { modalContainer } = this.props;
        if (modalContainer) {
            ReactDOM.unmountComponentAtNode(modalContainer);
        }
    },

    render() {
        return (
            <Modal
                ref="videoModal"
                isOpen={this.state.modalIsOpen}
                label="a video modal"
                onRequestClose={this.closeModal}
                onAfterClose={this.destroyModal}
                className={"modal--video"}
            >
                <div className="modal__video-inner" ref="inner">
                    <div className="modal__video-wrapper" ref="wrapper"></div>
                </div>
            </Modal>
        );
    },
});

export default VideoModal;
