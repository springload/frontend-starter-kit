import Lightbox from './Lightbox';
import { buildFacebookLink, buildTwitterLink } from '../utils/social-worker';

export class SocialShareLightbox extends Lightbox {
    constructor(options) {
        super(options);
        this.url = options.url;

        if (!this.url) {
            return;
        }

        this.show();
    }

    componentDidMount() {
        const innerDiv = document.createElement('div');
        const html = ['<h3>Share this</h3>'];
        const facebookLink = buildFacebookLink(this.url);
        const twitterLink = buildTwitterLink('Check this out', this.url);
        const facebookHtml = `<p>
        <a href="${facebookLink}" class="icon-text btn-primary btn-icon">
            <svg><use xlink:href="#twitter"></svg>
            <span>Share on Twitter</span>
        </a></p>`;
        html.push(facebookHtml);
        const twitterHtml = `<p>
        <a href="${twitterLink}" class="icon-text btn-primary btn-icon">
            <svg><use xlink:href="#social-facebook"></svg>
            <span>Share on Facebook</span>
        </a></p>`;
        html.push(twitterHtml);
        innerDiv.innerHTML = html.join('\n');

        this.contentNode.appendChild(innerDiv);
    }

    componentWillUnmount() {}
}

export class ShareButton {
    constructor(options) {
        this.el = options.el;
        this.handleClick = this.handleClick.bind('this');
        this.el.addEventListener('click', this.handleClick, false);
    }

    handleClick(e) {
        e.preventDefault();
        new SocialShareLightbox({
            url: this.el.getAttribute('data-flag-share'),
        });
    }
}
