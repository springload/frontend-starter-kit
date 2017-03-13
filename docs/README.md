Documentation
=============

## Front-end technology stack

> The goal of this stack is to empower front-end developers to excel at their craft. Our main front-end development languages are [__JavaScript__](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ([ES6/ES2015](https://babeljs.io/docs/learn-es2015/)) and __Sass (SCSS)__. The ES6 and Sass code are compiled to ES5 and CSS as part of our _build process_.
Learn more about JavaScript (ES6/ES2015):

### JavaScript

#### JavaScript coding standards

We use the [Airbnb style for Javascript](https://github.com/airbnb/javascript) except:

* Four space indents, no hard tabs, ever.
* Use a single DOMContentLoaded/Ready event, not multiple events.

#### JavaScript principles

* Write JavaScript with the next developer in mind, or as if it'll be released as Open Source, so keep it clear and readable.
* General advice for readability:
  * Choose your variable and function names carefully.
  * Abstraction is generally good, but abstraction for the sake of it is Indirection which harms readability.
* Feature Detection, not Browser Detection. E.g. https://modernizr.com/
* Have Unit Tests:
  * [Jest](https://facebook.github.io/jest/).
  * BackstopJS for testing visual regressions.
* Try to keep state in JavaScript, not in DOM. E.g. if code tests whether a class exists then that's probably something that should be moved to a JavaScript `const` or `let`.
* Cache DOM selectors. Don't keep reselecting the same nodes because that's slow.
* [Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

##### Polyfills

* Babel's Polyfills
* Mostly for IE10-11 compatibility.
* or [any of these](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

### Sass

- http://sass-lang.com/guide
- http://thesassway.com/

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
- https://facebook.github.io/react/docs/hello-world.html
- https://facebook.github.io/react/tutorial/tutorial.html
- https://www.codecademy.com/lrn/react-101

Once you want to start using React for small experiments on your own computer, use [create-react-app](https://github.com/facebookincubator/create-react-app/).

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

> Our build process is based on __npm scripts__, __Gulp__, and __Webpack__.

- [Node](https://nodejs.org/) – The platform on top of which the tools run.
- [Gulp](http://gulpjs.com/) – The glue between all of our build tools.
- [Webpack](https://webpack.js.org/) – Modern module bundler.
- [Babel](https://babeljs.io/) – JavaScript compiler to transform ES6 and beyond into ES5.
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
