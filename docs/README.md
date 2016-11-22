Documentation
=============

## Front-end technology stack

> The goal of this stack is to empower front-end developers to excel at their craft.

### Languages

> Our main front-end development languages are __JavaScript__ (ES6/ES2015) and __Sass (SCSS)__.

The ES6 and Sass code are compiled to ES5 and CSS as part of our _build process_.

Learn more about Sass:

- http://sass-lang.com/guide
- http://thesassway.com/

Learn more about JavaScript (ES6/ES2015):

- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://babeljs.io/docs/learn-es2015/

#### Flexbox

We use Flexbox for our layouts when browser support allows it, providing appropriate fallbacks. Here are three great resources to learn Flexbox:

- http://flexboxfroggy.com/, amazingly fun game to learn Flexbox.
- https://philipwalton.github.io/solved-by-flexbox/, best resource for people who have learned layout the old ways.
- https://github.com/philipwalton/flexbugs, necessary knowledge to make Flexbox work across browsers.

### Libraries

> We use __React and Redux__, lodash, D3, and Google Analytics.

To learn more about those libraries:

- https://facebook.github.io/react/
- http://redux.js.org/
- https://lodash.com/
- https://d3js.org/
- https://github.com/springload/Analytics.js

To learn React, for beginners, in that order:

- https://github.com/petehunt/react-howto
- https://facebook.github.io/react/tutorial/tutorial.html
- https://www.codecademy.com/lrn/react-101

To learn React, if you have experience with front-end frameworks, in that order:

- http://firstdoit.com/react-1/
- http://www.banderson.me/2014/11/01/react-series-intro/
- http://blog.andrewray.me/reactjs-for-stupid-people/
- https://facebook.github.io/react/docs/thinking-in-react.html
- https://www.youtube.com/watch?v=x7cQ3mrcKaY

To understand Flux/Redux:

- http://jonathancreamer.com/what-the-flux/
- http://blog.andrewray.me/flux-for-stupid-people/
- https://egghead.io/courses/getting-started-with-redux

### Tooling

#### Build tools

> Our build process is based on __Gulp__ and __Browserify__.

- [Node](https://nodejs.org/) – The platform on top of which the tools run.
- [Gulp](http://gulpjs.com/) – The glue between all of our build tools.
- [Browserify](http://browserify.org/) – Node-style modules for the browser.
- [Babel](https://babeljs.io/) – JavaScript compiler to transform ES6 into ES5.
- [Pleeease](http://pleeease.io/) – "All the annoying CSS stuff we don't want to do in 1 tool!"
- [npm](https://www.npmjs.com) – Package manager for everything that runs on Node (and more).

Our Node/npm versions are managed with [nvm](https://github.com/creationix/nvm). For Windows users, there are recommended alternatives on the project's homepage. Those tools look at the [`.nvmrc`](https://github.com/springload/frontend-starter-kit/blob/master/.nvmrc) file to determine which version of node to activate when running `nvm install` from within the project's root directory.

#### Development tools

> We rely heavily on tooling to shorten the feedback loop between writing code and having running code in browsers.

- [BrowserSync](http://www.browsersync.io/) – Live-reloads and synchronises browsers, plus other goodies.
- [ESLint](http://eslint.org/) – The best JavaScript linter.
- [SASS-Lint](https://github.com/sasstools/sass-lint) – Best SCSS linter.
- [CSSComb](http://csscomb.com/) – A handy CSS reformater.
- [Chrome DevTools](https://developer.chrome.com/devtools) – Browser developer tools for Chrome.
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) – React developer tools integrated into Chrome.
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) – Redux developer tools integrated into Chrome.

#### Continuous Integration & Deployment

> Our client projects are tested and shipped with [CodeShip](https://codeship.com). Our open-source / public work uses [Travis](https://travis-ci.org/springload/). Because it's free, public, and doesn't interfere with our client project builds.

## Browser & device support

> Browser & device support is informed by Web Analytics (GA) on the existing site and on competitors' sites.

**Supported browser / device versions:**

| Browser | Device/OS | Version |
|---------|-----------|---------|
| Mobile Safari | iOS Phone | latest |
| Mobile Safari | iOS Tablet | latest |
| Chrome | Android | latest |
| IE | Desktop | 11 |
| Chrome | Desktop | latest |
| MS Edge | Desktop | latest |
| Firefox | Desktop | latest |
| Safari | OSX | latest |

> Those browser / device / version combinations are the ones the site *is tested* on. Our development standards ensure that the site is usable on other browsers **and will work on future browsers**.

**Unsupported:**

| Browser | Device/OS | Version |
|---------|-----------|---------|
| Stock browser | Android | All |
| IE | Desktop | 10 |
| IE | Desktop | 9 |
| IE | Desktop | 8 |
| Safari | Windows | All |

### No-JavaScript users

Features should only be built in JavaScript where relevant. JavaScript should be applied as a [progressive enhancement (PE)](https://en.wikipedia.org/wiki/Progressive_enhancement) where possible.

If JavaScript is the only way for a feature to work (double check with a teammate!), a ["please enable JavaScript"](https://github.com/springload/frontend-starter-kit/blob/master/core/templates/core/snippets/enable-javascript.html) message should be present in a `<noscript>` tag to address the issue.

## Accessibility

> [Link to Sam's accessibility blog post](#)


### Icons and icon links

We use inline SVG for our icons. They are made accessible by including text that describes what the icon represents, in a `<title>` tag. Here are implementations:

- React: https://github.com/springload/react-svg-icon
- Django templates / Jinja: https://github.com/springload/frontend-starter-kit/blob/master/core/templates/core/snippets/icon.html

## Performance

- [Performance Review Template](https://github.com/springload/frontend-starter-kit/blob/master/docs/performance-review-template.md)
- [Check performance off on the Launch list](https://github.com/springload/frontend-starter-kit/blob/master/docs/launch-checklist.md#performance)

## Other documentation

- [Useful tooling](https://github.com/springload/frontend-starter-kit/blob/master/docs/useful-tooling.md)
- [Troubleshooting](https://github.com/springload/frontend-starter-kit/blob/master/docs/troubleshooting.md)
