Front-end starter kit [![Dependency Status](https://david-dm.org/springload/frontend-starter-kit.svg?style=flat-square)](https://david-dm.org/springload/frontend-starter-kit) [![devDependency Status](https://david-dm.org/springload/frontend-starter-kit/dev-status.svg?style=flat-square)](https://david-dm.org/springload/frontend-starter-kit#info=devDependencies) [ ![Codeship Status for springload/frontend-starter-kit](https://codeship.com/projects/88aa9190-7930-0133-0261-2292869b3ab0/status?branch=master)](https://codeship.com/projects/118683)
=====================

> A reference  for our latest code standards and examples of gulp tasks, CSS components, etc.

| Documentation in [`docs/`](https://github.com/springload/frontend-starter-kit/tree/master/docs) :book:|
|---------------------|
|[Front-end tech stack](docs/README.md)|
|[Useful tooling](docs/useful-tooling.md)|
|[Frontend Guidelines Questionnaire](docs/front-end-questionnaire.md)|
|[Launch Checklist](docs/launch-checklist.md)|
|[Demo page](https://rawgit.com/springload/frontend-starter-kit/master/core/templates/demo.html)|

## Installation

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/springload/frontend-starter-kit/blob/master/docs/useful-tooling.md#nvm).

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/frontend-starter-kit.git
cd frontend-starter-kit
```

To install our dependencies:

```sh
nvm install
# Then, install all project dependencies.
npm install
# Optionally, install global dependencies.
npm install --global sass-lint babel-eslint eslint-config-airbnb eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
# Optionally, install the git hooks.
./.githooks/deploy
```

## Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Make sure you use the right node version.
nvm use
# Start the server and the development tools.
npm run start
# Builds frontend assets.
npm run build
# Runs linting.
npm run lint
# Runs tests.
npm run test
# View other available commands with:
npm run
```

### Using the git hooks

> Git hooks automatically check your code before every commit.

```sh
# To enable the hooks, from the project root:
./.githooks/deploy
# To disable the hooks for a single commit, use the appropriate flag:
git commit --no-verify
```

### Tests

We use `mocha`, `chai` and `sinon` and for unit tests.

```sh
# Run all the tests.
npm run test
# Run unit tests.
npm run test:unit
# Run unit tests in a watcher.
npm run test:unit:watch
```

#### Manual tests

- Cross-platform favicons – https://realfavicongenerator.net/favicon_checker
- Structured data (schema.org) – https://search.google.com/structured-data/testing-tool
- Facebook Open Graph metadata – https://developers.facebook.com/tools/debug/sharing/
- Twitter cards metadata — https://cards-dev.twitter.com/validator

### Adding and upgrading dependencies

This project is [shrinkwrapped](https://docs.npmjs.com/cli/shrinkwrap). Its dependencies are locked down in `npm-shrinkwrap.json` file. To update them,

1. Use `npm run lint:versions` to confirm you are using the right node version.
2. Use `npm install <package>` with `--save` or `--save-dev` options to change the dependencies.
3. Check the project still works with the new dependencies / new versions.
4. Run **`npm run shrinkwrap`** to regenerate `npm-shrinkwrap.json`.
5. Commit this file, and push.

## Deploying a new version

### To production

```sh
npm run deploy
```

From your local machine, it's a good idea to push to the master before pushing to the deploy branch. That way you know that both are up to date.

### Setting up tests on continuous integration

The CI tests require the following setup. Some of those might already be done within the CD build.

```sh
nvm install
npm install
npm install -g david hyperlink
```

Use `npm run test:ci` as part of the test pipeline.

## Documentation

### Browser support

> Copy/paste & adapt [Browser & device support template](https://github.com/springload/frontend-starter-kit/blob/master/docs/README.md#browser--device-support)

### Polyfills

- fetch -> watchwg-fetch
- Promise -> es6-promise
- classList -> classlist-polyfill
- Internet Explorer: https://github.com/springload/frontend-starter-kit/blob/master/core/templates/index.html#L32

### Analytics

Analytics are set up with Google Analytics.

[JavaScript errors](https://github.com/springload/frontend-starter-kit/search?utf8=%E2%9C%93&q=analyticsException) are tracked in Google Analytics as ["Exceptions"](https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions). A custom report needs to be created for this data to be visible inside the GA interface.

### Favicons

To generate new favicons,

1. Go to https://realfavicongenerator.net/
2. Upload your favicon source file as an SVG or PNG with a resolution of at least 512x512.
3. Configure the favicon generation. Use specific images for each platform if relevant.
4. Grab the result files, [use ImageOptim to losslessly optimize their size](https://imageoptim.com/) them.
5. Grab the result HTML tags, add it to the [`core/templates/core/includes/favicons.html`](core/templates/core/includes/favicons.html) file.
6. Make sure the files are served by the server as expected.

### Debugging

#### JavaScript

There are a lot of [development aids](https://github.com/springload/frontend-starter-kit/search?utf8=%E2%9C%93&q=process.env.NODE_ENV) within the code. Use them.
