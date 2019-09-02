# Browser & device support template

Our browser support is defined in a Browserslist `.browserslistrc` file which is used by Babel, Autoprefixer, and many other packages. Do not define Browserslist details in `package.json`, and don't make a `<table>` of supported browsers.

These `.browserslistrc` supported browsers can be visualised on https://browserl.ist/ by making a custom URL like,

    https://browserl.ist/?q=%3E+1%25%2Clast+1+version%2Cnot+dead%2Cnot+IE+11

([link](https://browserl.ist/?q=%3E+1%25%2Clast+1+version%2Cnot+dead%2Cnot+IE+11))

Add a heading and link to the `browserl.ist` service in your `README.md` with your chosen browsers.

Note that _contractually_ the supported browsers will probably be a subset of ones shown on `browserl.ist` (eg. just because `browserl.ist` mentions Baidu Browser doesn't necessarily mean that we need to support it, contractually).


