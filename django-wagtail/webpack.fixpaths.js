function FixPaths() {
    // Webpack likes to make relative paths between its
    // generated HTML and its bundles(etc), but the paths
    // it generates aren't how Wagtail serves files so we
    // need to rewrite the paths
}

FixPaths.prototype.apply = function fixPathsApply(compiler) {
    compiler.plugin('compilation', compilation => {
        compilation.plugin(
            'html-webpack-plugin-after-html-processing',
            data => {
                // fix relative paths so that browsers can resolve them
                /* eslint-disable no-param-reassign */
                data.html = data.html.replace(/\.\.\/static\//gi, '/static/');
            },
        );
    });
};

module.exports = FixPaths;
