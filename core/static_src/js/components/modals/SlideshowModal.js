import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-accessible-modal';
import Flickity from 'flickity';

const SlideshowModal = React.createClass({

    propTypes: {
        isOpen: React.PropTypes.bool,
        slideshowId: React.PropTypes.string,
        slideshowContent: React.PropTypes.object,
    },

    getDefaultProps() {
        return {
            isOpen: false,
            slideshowId: '',
            slideshowContent: '',
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
        const { wrapper } = this.refs;

        const elem = wrapper.querySelector('.main-gallery');
        if (elem && typeof Flickity !== 'undefined') {
            const flkty = new Flickity( elem, {
                prevNextButtons: false,
                setGallerySize: false,
                wrapAround: true,
                accessibility: true,
                pageDots: false,
            });

            this.flkty = flkty;

            // focus on flkty
            setTimeout(() => {
                const flktyEl = wrapper.querySelector('.main-gallery');
                flktyEl.tabIndex = 0;
                flktyEl.focus();
            }, 250);
        }
    },

    prevSlide(e) {
        e.preventDefault();
        this.flkty.previous();
    },

    nextSlide(e) {
        e.preventDefault();
        this.flkty.next();
    },


    buildControls() {
        return (
            <div className="modal__control">
                <div className="modal__control-item modal__prev" onClick={this.prevSlide}>&nbsp;</div>
                <div className="modal__control-item modal__close" onClick={this.closeModal}>×</div>
                <div className="modal__control-item modal__next" onClick={this.nextSlide}>&nbsp;</div>
            </div>
        );
    },


    destroyModal() {
        const overlay = document.querySelector('[data-overlay]');
        ReactDOM.unmountComponentAtNode(overlay);
    },

    createMarkup() {
        return {__html: this.props.slideshowContent.innerHTML};
    },

    render() {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                onAfterClose={this.destroyModal}
                className={"modal--slideshow"}
                controls={this.buildControls()}
                overlayClick={false}
            >
                <div className="modal__slideshow-inner" ref="inner">
                    <div className="modal__slideshow-wrapper"
                        ref="wrapper"
                        dangerouslySetInnerHTML={this.createMarkup()}
                    />
                </div>
            </Modal>
        );
    },
});

export default SlideshowModal;
