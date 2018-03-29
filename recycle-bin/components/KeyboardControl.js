import KeyCodes from '../constants/keycodes';

export default class KeyboardControl {
    constructor(options) {
        this.el = options.el;
        this.keyName = this.el.getAttribute('data-bind-keyboard');
        this.handleKeyEvent = this.handleKeyEvent.bind(this);
        window.addEventListener('keyup', this.handleKeyEvent, false);
    }

    handleKeyEvent(e) {
        const keyCode = KeyCodes.get(this.keyName);
        if (e.keyCode === keyCode && e.srcElement.tagName === 'BODY') {
            this.el.classList.add('is-active');
            this.el.click();
        }
    }
}
