# Browser & device support template

Our browser support is defined in a Browserslist `.browserslistrc` file which is used by Babel, Autoprefixer, and many other packages. Do not define Browserslist details in `package.json`, and don't make a `<table>` of supported browsers in your `README.md` as we did in the past.

These `.browserslistrc` supported browsers can be visualised on https://browserl.ist/ by making a custom URL like,

    https://browserl.ist/?q=%3E+1%25%2Clast+1+version%2Cnot+dead%2Cnot+IE+11

([link](https://browserl.ist/?q=%3E+1%25%2Clast+1+version%2Cnot+dead%2Cnot+IE+11))

Add a heading and link to the `browserl.ist` service in your `README.md` with your chosen browsers. Eg.

    > ## Supported browsers
    > 
    > [BrowsersList Supported Browsers](https://browserl.ist/?q=%3E+1%25%2Clast+1+version%2Cnot+dead%2Cnot+IE+11))

You will have to manually keep that URL in sync with your `.browserslistrc` file.

Note that the _contractually_ supported browsers will probably be a subset of ones shown on `browserl.ist` (eg. just because `browserl.ist` mentions Baidu Browser doesn't necessarily mean that we need to support it, contractually).

## Works without JavaScript?

Some sites / webapps that we make have features that don't require JavaScript, and other features that do require JavaScript, or features that are enhanced by JavaScript but don't require them (ie.Progressive Enhancement / Graceful Degradation, depending on your perspective).

To,
1. assist testers, and;
2. inform future developers to avoid regressions

...please describe the default approach (ie, 'site doesn't require JS'), and any deviations from this per-component/feature in your `README.md`.
