# JavaScript

> JavaScript should be readable, modular, and splittable.


## Project Structure

The reason why Project Structure is in JavaScript is because it's often related to Webpack which uses JavaScript.

Generally speaking we like [Mono-repos](https://danluu.com/monorepo/) rather than Multi-repos.

We tend to prefer project structures organised by features and routes (AKA business logic), rather than technology. We have found that this approach means that related code is often nearby and easier to navigate.

To be clear, this mean that we discourage directories named `components`, `containers`, `reducers`, and so on. Instead we might name files "_feature_.component.js", "_feature_.scss", and "_feature_.test.js", and group these files in a "_feature_" directory.

Read [this documentation](https://github.com/reactjs/reactjs.org/blob/master/content/docs/faq-structure.md) for more ideas. Also consider whether [globally unique filenames](https://www.reddit.com/r/reactjs/comments/6al7h2/facebook_has_30000_react_components_how_do_you/dhgruqh/) might be useful in larger projects.

Obviously any particular framework (Wagtail-Django) or boilerplate might impose its own restrictions so work within those, and this is just a suggestion.

## Formatting

We delegate that to [Prettier](https://prettier.io/).   

Make sure [your text editor](https://code.visualstudio.com/&sa=D&ust=1520457897533000&usg=AFQjCNF3QTfRTIBG7ZBDeYbNMcYimiKSbw) has [that extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and that it's configured to auto-format on save. Here's [the ESLint config](https://github.com/springload/eslint-plugin-springload).

## Node

Our projects should use the [latest LTS release](https://github.com/nodejs/LTS) of Node, along with the npm version it ships with.

Use [NVM](https://github.com/creationix/nvm) to install Node, and make sure your project has an [`.nvmrc`](../.nvmrc) file.

## Package Manager

For now we prefer Yarn not NPM, because NPM still seems to have _"it works on my machine!"_ type bugs, despite having a lock file.

## Type Checking

Variable Type Checking (e.g. string vs boolean vs Object) is a like little unit tests all over your code; catching bugs before users do.

We prefer [TypeScript](https://www.typescriptlang.org/) more than [Flow](https://flow.org/).

# Coding Suggestions

- Write JavaScript with the next developer in mind, or as if it'll be released publicly as Open Source.
- Choose your variable and function names carefully.
- Feature Detection, not Browser Detection, if possible. Don't bring back the days of IE-only or Chrome-only sites.
- Use [JS design patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) where appropriate.

# Recommended Libraries

## View / SPAs

React is amazing. Do read the [basic theory of React](https://github.com/reactjs/react-basic).

For a boilerplate we like [Create React App (CRA)](https://github.com/facebook/create-react-app), and [Gatsby](https://www.gatsbyjs.org/).

If you need tiny filesizes then we suggest not using [Mustache](https://mustache.github.io/)/[Handlebars](http://handlebarsjs.com/), etc., as Preact is probably a better choice in that scenario.

## Test

[Jest](https://facebook.github.io/jest/) seems good, and it can do code coverage and snapshot testing.

[`Enzyme`](https://www.npmjs.com/package/enzyme) is a useful addition for interactivity tests and shallow rendering.

[BackstopJS](https://github.com/garris/BackstopJS) for testing visual regressions.

End-to-End (E2E) testing with Browserstack, [Nightwatch.js](http://nightwatchjs.org/) or [Cypress](https://www.cypress.io/).

## Routing

[Reach-Router](https://github.com/reach/router). Although a router is necessary for basic navigation between pages of an SPA, we're generally wary and unconvinced of putting routing logic deeper in the component tree.

## State Management

Prefer to keep state in JavaScript not in HTML attributes. This will make it easier to reason about your code, and it will probably run faster too.

We quite like [`unstated`](https://www.npmjs.com/package/unstated), and [`redux`](https://redux.js.org/) (and [react-redux](https://redux.js.org/basics/usage-with-react)).

[Immer.js](https://www.npmjs.com/package/immer) is preferable to immutable.js because it has less boilerplate.

Regardless of your choice [be aware of normalizing state patterns](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) such as the `byId` pattern to ensure your state (aka your browser database) stays manageable.

## Forms

[Formik](https://github.com/jaredpalmer/formik) more than [Redux-Form](https://redux-form.com/), because Formik is smaller and it only re-renders individual fields when those fields change.

## Async / Side Effects

[redux-saga](https://redux-saga.js.org/) is pretty good, although we're concerned about the size of the generator polyfill and we're waiting on a good replacement.

## CSS classnames

[classNames](https://github.com/JedWatson/classnames).

## Date / Time

We suggest avoiding `moment.js` because it's very large.

Instead prefer the native Intl browser functionality or [`date-fns`](https://date-fns.org/).

## Build Scripts

Avoid `gulp` because it hasn't been maintained for years nows.

Instead write [npm scripts](https://docs.npmjs.com/misc/scripts), perhaps with promises / async await.

## Graphs

[D3](https://d3js.org/)

## Accordion

We quite like [React Accessible Accordion](https://github.com/springload/react-accessible-accordion)

## Style Guide / Pattern Library

[React Patterns](https://github.com/springload/react-patterns)

## Utilities and Functionaliy Programming

Where possible use ES2015+ features rather than lodash, but if you need it.
See [State Management](https://github.com/springload/frontend-starter-kit/blob/master/docs/javascript.md#state-management) for other utilities.

## Debugging

- [weinre](https://people.apache.org/~pmuellr/weinre/docs/latest/). It's like browser devtools but built in HTML and can be used to debug any browser, including mobile ones.

# Misc

- We avoid using jQuery when possible. Most of what can be achieved with JQuery be achieved just as easily in vanilla Javascript, particularly if you don't have to support legacy browsers. See [http://YouMightNotNeedjQuery.com/](http://YouMightNotNeedjQuery.com/). However, you might spot Jquery on a few of our legacy projects, which is fine.
- Inspiration https://github.com/airbnb/javascript  https://github.com/rwaldron/idiomatic.js https://github.com/styleguide/javascript
- CMS sites probably shouldn't require JavaScript. Apps probably need it. Use [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) where reasonable.


# New or Old?

For legacy projects we follow whatever conventions they have, but where possible we try to migrate to these newer approaches (for example, migrating from NPM to Yarn).

