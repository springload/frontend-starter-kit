/*
 * Webpack does not know the 'static' URL of the CDN it will be served from at build time.
 *
 * The template file that 'bundle.js' is called from *does* know though, so writes that to
 * window.staticRoot.
 *
 * This is the recommended approach as per webpack's documentation, here:
 * https://webpack.js.org/concepts/output/#advanced
 */

// eslint-disable-next-line camelcase, no-undef
__webpack_public_path__ = window.staticRoot;