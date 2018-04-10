# Django / Wagtail

This is how to set up a new Django / Wagtail (DW) project at Springload. It's based on the Springload website's own configuration (in a private repo).

Please keep a note of what you actually did to get it working and do make improvements to these docs.

## Project Setup

    cd YOUR_PROJECT

Copy [`.nvmrc`](../.nvmrc), [`webpack.config.js`](./webpack.config.js), [`webpack.fixpath.js`](./webpack.fixpath.js), [`.prettierignore`](./.prettierignore) to `YOUR_PROJECT` directory. Fuller descriptions of these files are at the bottom of this page if you're curious.

    nvm install
    nvm use
    yarn init

Yarn will then ask you the usual NPM init questions. Keep hitting enter if you don't care.

Next add these to your `package.json`,

    "dependencies": {
      "css-loader": "^0.28.11",
      "html-webpack-plugin": "^3.0.7",
      "node-sass": "^4.8.3",
      "sass-loader": "^6.0.7",
      "style-loader": "^0.20.3",
      "webpack": "^4.2.0",
      "webpack-cli": "^2.0.12"
    },
    "scripts": {
      "build": "NODE_ENV=development webpack",
      "dist": "NODE_ENV=production webpack",
    }


We use Webpack for Django/Wagtail (DW) projects which is based around the concept of a **source** directory and a **build** directory. This is different to how DW projects are typically set up with (for example) `core/static` being directly edited by FEDs to design templates and available immediately (when you reload the browser). The point is that you don't normally have to run `yarn build` or any build process.

So to make this work with Webpack we'll treat `core/static` as the **build** directory, and we'll need to make a **source** directory,

    mkdir ./core/static_src
    touch ./core/static_src/index.js
    mkdir ./core/templates_src
    cp ./core/static/base.html ./core/static_src/base.html

Now when you run `yarn build` Webpack will use both `core/templates_src/base.html` and `core/static_src/index.js`, and Webpack will add `<script>` and `<link rel="stylesheet">` tags to the template as needed, and then write files to `./core/static_src/base.html` and `core/static`.

All your JavaScript and Sass/CSS imports will be defined from your `index.js` file. This allows Webpack to make decisions about bundling your project.

That's it. You're done!

# Future Improvements

* Testing
* Production build minification.

## Project Files

The following information isn't essential reading but the intent is to explain _why_ we've chosen this particular Webpack configuration.

### webpack.config.js and webpack.fixpaths.js

The main Webpack configuration, supporting Babel and Sass. Our config works around some different assumptions between Webpack and DW relating to project file structure and webserver URLs. Specifically DW has templates in one directory and static files in another (`core/templates` and `core/static`) but the webserver URLs for these directories aren't side-by-side, so the `webpack.fixpaths.js` fixes these paths.

If you need to make DW use different file structures or webserver URLs then this is the place to configure it.

### .prettierignore

Prettier seems to mangle our Django templates because they have template `{% if %}` syntax inside `.html` files but they're not HTML. This `.prettierignore` file ensures that `.html` won't be reformatted for this reason.
