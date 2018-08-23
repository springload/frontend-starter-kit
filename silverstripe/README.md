# Silverstripe FEDing

This is how to set up FED stuff for a new Silverstripe project at Springload. 


## Project Setup

Clone the repo from git if it already exists, if not read Springload's [repo naming conventions](https://github.com/springload/wiki/blob/master/_springload-coding-standards/version-control/github.md) before setting up your new project.

```sh
cd ~/sites
git clone YOUR_PROJECT
cd YOUR_PROJECT
``` 

Copy [`.nvmrc`](./.nvmrc), [`package.json`](./package.json), [`webpack.config.js`](./webpack.config.js), [`.prettierignore`](./.prettierignore), [`prettier.config.js`](./prettier.config.js), [`.editorconfig`](./.editorconfig), [`.eslintignore`](./.eslintignore) and [`.eslintrc`](./.eslintrc) to `YOUR_PROJECT` directory. Copy the contents of the [`.gitignore`](./.gitignore) file and add them to your project's `.gitignore`.

```sh
# Make sure you are using the correct version of node.
nvm install
nvm use
# Then, install all project dependencies.
yarn install
``` 

We use Webpack for Silverstripe projects which is based around the concept of a **source** directory and a **build** directory. In our Silverstripe project we have a **app** and a **public** folder, the [`./app`](./app) folder is where all our working files live. 

So to make this work with Webpack we'll treat `public` as the **build** directory, and `app/static_src` as the **source** directory.

All your JavaScript, Sass/CSS, and SVG imports will be defined from your `./app/static_src/index.js` file. This allows Webpack to make decisions about bundling your project.

### Add your JS

Copy the `./app/static_src/js` to `YOUR_PROJECT`. 

### Add your SCSS 

We have a Starter Style kit especially for css, it uses ITCSS and you can learn more about how we [write css at Springload here](../docs/css.md). 
**Copy** the Starter Style kit [sass folder](https://github.com/springload/frontend-starter-styles/tree/master/src/sass) to your project at `./app/static_src/sass` folder.

### Adding the CSS and JS files to your project

To add your CSS and JS to your `Page.ss` you will need to add these next lines to your `./app/src/pages/PageController.php` file.

```php
use SilverStripe\Control\Director;
use SilverStripe\View\Requirements;

protected function init()
    {
        parent::init();

        if (Director::isLive()) {
            Requirements::css('css/main.css');
        }
        Requirements::javascript('javascript/bundle.js');
    }
}
```

Because webpack only publishes a CSS file for the prod environment (using MiniCssExtractPlugin), we only use the CSS in Live. In development webpacks style-loader will inject a `<style>` tag into the DOM.

Learn more about it in the [Silverstripe docs](https://docs.silverstripe.org/en/developer_guides/templates/requirements/)

### Using SVG's in your project

SVG's are added through javascript and webpack will create a file in `app/templates/Includes/InlineSvgs.ss` this file is then included in your `Page.ss` if you get an error when visiting the site for the first time make sure the `InlineSvgs.ss` is being built and added to the correct place.

**That's it. You're done!**

Note: To learn how to write JavaScript or import Sass files from JavaScript is a more general question about Webpack (and other bundlers), ask your leads for more information.

## Code Comments

- Use Silverstripe's comments unless you really want the comment to be in the markup. `<%-- Hello, i'm a comment --%>` instead of `<!-- Hello, I'm a comment -->`

# Future Improvements?

* ...your idea goes here

### .prettierignore

Prettier seems to mangle our Silverstripe templates because they have template `<% if %>` syntax inside `.ss` files but they're not HTML. This `.prettierignore` file ensures that `.ss` won't be reformatted for this reason.

## Useful resources

* [Webpack](https://webpack.js.org/)
* [SilverStripe docs](https://docs.silverstripe.org/en/4/)
* [SilverStripe lessons](https://www.silverstripe.org/learn/lessons/v4/)
