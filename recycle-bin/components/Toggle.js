// This class describes the target of a toggle action
export class ToggleTarget {
    constructor(options) {
        this.el = options.el;
        this.name = this.el.getAttribute('data-toggle');
        this.animated = this.el.getAttribute('data-toggle-animated');
        this.bodyClose = this.el.getAttribute('data-toggle-body');
        this.store = options.store;
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.onAnimEnd = this.onAnimEnd.bind(this);
        this.onAnimIn = this.onAnimIn.bind(this);
        this.store.on('toggle', this.handleToggle);
    }

    // eslint-disable-next-line
    handleClick(e) {
        e.stopPropagation();
    }

    handleBody() {
        this.store.toggle(this.name);
        this.removeListeners();
    }

    removeListeners() {
        if (this.bodyClose) {
            document.body.removeEventListener('click', this.handleBody);
            this.el.removeEventListener('click', this.handleClick);
        }
    }

    addListeners() {
        if (this.bodyClose) {
            this.el.addEventListener('click', this.handleClick);
            document.body.addEventListener('click', this.handleBody);
        }
    }

    onAnimIn() {
        this.el.removeEventListener('animationend', this.onAnimIn);
        this.el.classList.remove('u-hide');
    }

    handleToggle(data) {
        if (data.name !== this.name) {
            return;
        }

        if (data.open) {
            if (this.animated) {
                this.el.addEventListener('animationend', this.onAnimIn);
            }

            this.el.classList.remove('u-hide');
            this.el.classList.remove('-out');
            this.addListeners();
        } else if (this.animated) {
            this.el.addEventListener('animationend', this.onAnimEnd);
            this.el.classList.add('-out');
        } else {
            this.el.classList.add('u-hide');
            this.removeListeners();
        }
    }

    onAnimEnd(e) {
        if (e.srcElement !== this.el) {
            return;
        }

        this.removeListeners();
        this.el.removeEventListener('animationend', this.onAnimEnd);
        this.el.classList.add('u-hide');
        this.el.classList.remove('-out');
    }
}

// This class is for the affordance that does the toggling. It just updates
// some state on the store object.
export class Toggle {
    constructor(options) {
        this.affordance = options.el;
        this.targetName = this.affordance.getAttribute('data-toggle-affordance');
        this.store = options.store;
        this.toggle = this.toggle.bind(this);
        this.affordance.addEventListener('click', this.toggle);
    }

    toggle(e) {
        e.preventDefault();
        e.stopPropagation();
        this.store.toggle(this.targetName);
    }
}
