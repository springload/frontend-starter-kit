# Starter files to help with your new project

This is a collection of files that can be added to your new web project.

The files are based on our current most common setup; a Django/Wagtail or Silverstripe project which has some React (with Typescript). But much of this will also be useful for other setups.

How to create a new CMS-based project is outside of the scope of this readme. Ask your local BED - they use cookiecutter (or similar) to create new projects.

## How to use

### Step 1

Once you have your new project, copy the following files into its root directory:

- [`webpack.config.js`](./webpack.config.js)
- [`package.json`](./package.json)
- [`.nvmrc`](../.nvmrc)
- [`webpack.fixpaths.js`](./webpack.fixpaths.js)
- [`.browserslistrc`](./.browserslistrc)
- [`.prettierrc`](./.prettierrc)
- [`.prettierignore`](./.prettierignore)
- [`.eslintrc.js`](./.eslintrc.js)
- [`.eslintignore`](./.eslintignore)
- [`.babelrc`](./.babelrc)
- [`tsconfig.json`](./tsconfig.json)
- [`custom.d.ts`](./custom.d.ts)

### Step 2

Update things as needed. Specifically:

- In `package.json`, change the 'cms' variable. If you're using Silverstripe, set it to `silverstripe`. If you're using Django/wagtail, set it to `django`. If you're using something else (or no CMS), you will need to update `webpack.config.json`. If you do, **please make a PR** that adds this new setup as an option for other future projects.
- Update `.browserslistrc` if necessary. Currently it is evergreen only (modern browsers, i.e. no IE).
- Change any other stuff that you want to change. This isn't a list of rules, just a startring point. If you make a change you think is a general improvement that will help others, **please make a PR**.

### Step 3

> **Setting project-wide yarn version**
> You may like to set the yarn version for the entire project to avoid people from using different versions locally. To do that run `yarn policies set-version` (see [yarn policies](https://yarnpkg.com/lang/en/docs/cli/policies/)).

```zsh
nvm install
nvm use
yarn policies set-version
yarn install
```

## Using React components in a CMS project

If you're new to this, have a quick read of our guide on "[CMS Components](../docs/cms-components.md)", which is about using React/JS components inside server-generated templates (e.g. Django/Wagtail or Silverstripe).

This repo contains some useful files for getting started adding such components:

- [`components.tsx`](./src/components/components.tsx)
- [`SomeReactComponentInit.tsx`](./src/components/SomeReactComponent/SomeReactComponentInit.tsx)
- [`SomeReactComponent.tsx`](./src/components/SomeReactComponent/SomeReactComponent.tsx)

## Using with Silverstripe

### Adding the CSS and JS files to your project

- You'll need to add these into the Silverstripe page controller

```php
# ./app/src/pages/PageController.php

use SilverStripe\Control\Director;
use SilverStripe\View\Requirements;

protected function init()
    {
        parent::init();

        if (Director::isLive()) {
            Requirements::css('public/dist/main.css');
        }
        Requirements::javascript('public/dist/bundle.js');
    }
}
```

## Notes

### Useful resources

- [Webpack](https://webpack.js.org/)
- [SilverStripe docs](https://docs.silverstripe.org/en/4/)
- [SilverStripe lessons](https://www.silverstripe.org/learn/lessons/v4/)
- [Wagtail](https://wagtail.io/)

### webpack.config.js and webpack.fixpaths.js

The main Webpack configuration, supporting Babel and Sass. Our config works around some different assumptions between Webpack and DW relating to project file structure and webserver URLs. Specifically DW has templates in one directory and static files in another (`core/templates` and `core/static`) but the webserver URLs for these directories aren't side-by-side, so the `webpack.fixpaths.js` fixes these paths.

If you need to make DW use different file structures or webserver URLs then this is the place to configure it.

### .prettierignore

Prettier seems to mangle our Django templates because they have template `{% if %}` syntax inside `.html` files but they're not HTML. This `.prettierignore` file ensures that `.html` won't be reformatted for this reason.
