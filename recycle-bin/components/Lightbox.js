class Lightbox {
    constructor() {
        const closeButton = document.createElement('div');
        const contentContainer = document.createElement('div');
        const modalCenter = document.createElement('div');
        const contentNode = document.createElement('div');

        // DOM
        this.bodyActiveClass = 'body-modal-active';

        this.el = document.createElement('div');
        this.el.className = 'modal modal--active';

        closeButton.className = 'modal__close';
        closeButton.innerHTML = '×';

        contentContainer.className = 'modal__center';
        modalCenter.className = 'modal__table';

        contentContainer.appendChild(contentNode);
        modalCenter.appendChild(contentContainer);

        this.el.appendChild(modalCenter);
        this.el.appendChild(closeButton);

        this.closeButton = closeButton;
        this.contentContainer = contentContainer;
        this.contentNode = contentNode;

        // Bindings
        this.handleClose = this.handleClose.bind(this);
        this.componentDidShow = this.componentDidShow.bind(this);
        this.remove = this.remove.bind(this);

        // Events
        this.closeButton.addEventListener('click', this.handleClose);
        this.el.addEventListener('click', this.handleClose);
        contentNode.addEventListener('click', this.sandboxClick);
    }

    show() {
        const contentNode = this.contentNode;

        contentNode.className = 'modal__content';

        if (document.documentElement.className.match(/ie8/)) {
            const matte = document.createElement('div');
            matte.className = 'matte-opaque';
            this.el.insertBefore(matte, this.el.firstChild);
        }

        document.body.appendChild(this.el);

        if (!document.body.className.match(this.bodyActiveClass)) {
            document.body.className += ` ${this.bodyActiveClass}`;
        }

        this.componentDidMount();

        contentNode.addEventListener('animationend', this.componentDidShow);
    }

    componentDidShow(e) {
        if (e) {
            if (e.target === this.contentNode) {
                this.renderContent();
            }

            return;
        }

        this.renderContent();
    }

    // Thanks React for this awesome concept.
    componentDidMount() {}

    handleClose(e) {
        e.preventDefault();
        document.body.className = document.body.className.replace(` ${this.bodyActiveClass}`, '');

        this.el.addEventListener('animationend', this.remove);
        this.el.className = this.el.className.replace('modal--active', 'modal--exit');
    }

    // By default this doesn't do anything. You should subclass the Lightbox
    // to make it append some content. See VideoLightbox for an example
    // eslint-disable-next-line
    renderContent() {}

    // eslint-disable-next-line
    sandboxClick(e) {
        e.stopPropagation();
    }

    remove(e) {
        if (e.target !== this.el) {
            return;
        }

        this.componentWillUnmount();

        this.el.parentNode.removeChild(this.el);
        this.contentNode.removeEventListener('animationend', this.componentDidShow);
        this.closeButton.removeEventListener('click', this.handleClose);

        this.el = null;
        this.closeButton = null;
        this.videoContainer = null;
    }
}

export default Lightbox;
