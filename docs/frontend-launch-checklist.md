# Frontend project launch checklist

**:warning: To understand how this is meant to be used, have a look at [the complete launch checklist](launch-checklist.md).**

### Code quality

- [ ] Clean up commented/unnecessary code.
- [ ] Check all TODO comments in the code are still relevant.
- [ ] Debugging console logs and breakpoints removed.

####  CSS

- [ ] CSS code matches the code style guide via `npm run lint`.
- [ ] CSS classes use a consistent naming methodology (BEM).
- [ ] Flexbox usage has a non-flexbox fallback if appropriate.
- [ ] Sass code is free of vendor prefixes and IE filters.
- [x] TODO – CSS specificity graph is flat :rainbow:.
- [ ] Print styles are defined.
- [ ] Site does not use `-webkit-font-smoothing: antialised;` for body copy.
- [ ] The filename of the root level stylesheet is `styles.scss`, unless there are multiple root-level stylesheets.

#### JS

- [ ] JS code matches the code style guide via `npm run lint`.
- [ ] JS code is written in ES2015 (ES6), ES2016 (ES7), or later.
- [ ] Data attributes are used to select elements, not classes or ids or tags.
- [ ] Polyfills are included if appropriate (Respond.js, `fetch`, `babel-polyfill`, etc).

#### HTML

- [ ] Ensure all `a` tags have an href attribute.
- [ ] Use absolute paths for all URLS. `/thing/` not `thing/`.
- [ ] Use HTTPS, or exclude protocol from URLs `//foo.com/` not `http://foo.com/`.
- [ ] [HTML validation](https://validator.w3.org/nu/#textarea) passes.
- [ ] Links with `target="_blank"` use [`rel="noopener`](https://mathiasbynens.github.io/rel-noopener/).
- [ ] Links from user-submitted (untrusted) content use [`rel="nofollow`](https://support.google.com/webmasters/answer/96569)

### Images

- [ ] Images use the right file format (SVG if possible, PNG for graphics, JPG for pictures).
- [ ] All images with the `img` tag define `width` and `height` attributes to prevent content reflows when the images load.
- [ ] Icons are built using [SVG icons](https://github.com/springload/frontend-starter-kit/blob/master/core/templates/core/snippets/icon.html), with appropriate fallback if necessary.

### Functional completeness

- [ ] 404 page exists and is styled.
- [ ] 500 page exists and is styled.
- [ ] Maintenance page exists and is styled, if relevant.
- [ ] Site uses a mobile-friendly, zoomable viewport.
- [ ] Site has a favicon.ico.
- [ ] Platform-specific ([Apple](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html), Android, Windows, etc) meta tags and favicons are added and checked with the [Favicon checker](https://realfavicongenerator.net/favicon_checker).
- [ ] Ensure meta tags, Open Graph tags, Twitter card tags, and descriptions are set.
- [ ] Ensure the social meta tags only use a default sharing image if there is no page-specific image to use.
- [ ] Long-running actions (AJAX calls) trigger a spinner or other loading message in the UI.
- [ ] UI text uses correct typographic marks (`’` instead of `'`, `“”` instead of `""`).
- [ ] Significant UI states (tabs, modals, etc) should be tracked in the URL via query parameter or the hash.

### Forms

- [ ] Form fields use the right [input types with the right mobile keyboard](http://baymard.com/labs/touch-keyboard-types).
- [ ] Form fields have their [`name`, `autocomplete` and `autocorrect` attributes](https://html.spec.whatwg.org/multipage/forms.html#attr-fe-autocomplete) set correctly.
- [ ] Forms never trust client-side input, ensure it is valid.
- [ ] Prompt the user before navigating away from unsaved changes.
- [ ] Always re-populate fields when a user hits 'back', by using cache-control: private.
- [ ] Multi-step forms save data after each step.

#### Form validation and errors

- [ ] Forms use server-side validation, and client-side validation if relevant.
- [ ] Forms do not use HTML5 validation. No `required`. Field `type`, `maxlength` and other consistent improvements that do not need to display validation messages are ok. `minlength` isn't.
- [ ] Form errors are cleared when people change a field's value.
- [ ] Forms display non-field errors at the top of the form.
- [ ] If there are no non-field errors, still display a message, eg “Sorry, there were some errors” at the top of the form.
- [ ] Forms use CSRF tokens when they mutate state (POST/PUT/DELETE, eg. editing a user/booking/listing’s data).

#### Search

- [ ] Use GETs with query strings for all kinds of searches (as query strings can be easily bookmarked).

### Build systems

- [ ] No compiled code in the `master` branch (check the project's `.gitignore` file to make sure no `static/`, `dist/` files are committed in.

#### Gulp asset pipeline configuration

- [ ] Use [Pleeease/Autoprefixer](http://pleeease.io) for all styles.
- [ ] SVG icons are compressed in production.
- [ ] CSS & SVG is minified and concatenated in production.

#### Webpack / Browserify configuration

- [ ] JS development aids are removed in production.
- [ ] Source maps are removed in production.
- [ ] JS is minified and concatenated in production.

### Testing

- [ ] Site tested in [all relevant browsers and devices](https://github.com/springload/frontend-starter-kit/tree/master/docs#browser--device-support).
- [ ] Site is visually tested on non-retina, low contrast screens.
- [ ] Site works with JavaScript turned off, or the sections that do not work are [indicated to the user via messages in `<noscript>` tags](https://github.com/springload/frontend-starter-kit/blob/master/core/templates/core/snippets/enable-javascript.html), styled according to the site's branding.
- [ ] ['Upgrade your browser'](https://github.com/springload/frontend-starter-kit/blob/master/core/templates/core/snippets/outdated-browser.html) message displayed on unsupported browsers.

#### Automated tests

- [ ] Relevant unit tests are written.
- [ ] Unit tests pass (`npm run test`).
- [ ] If any, relevant integration tests are written.
- [ ] If any, integration tests pass (`npm run test:integration`).
- [ ] Run site url through the Facebook debugger (https://developers.facebook.com/tools/debug/) to check it will appear correctly if shared.
- [ ] Run the link checker [`hyperlink -r http://example.com/`](https://github.com/springload/frontend-starter-kit/blob/master/docs/useful-tooling.md#hyperlink) to find & fix broken links.

### Performance

- [ ] The live site has a score above 90 in [Google PageSpeed](https://developers.google.com/speed/pagespeed/) and [GTmetrix](https://gtmetrix.com/).
- [ ] Web fonts should be kept to a minimum (talk with designers).
- [ ] Subset webfonts to remove unused characters (http://www.subsetter.com/, https://github.com/miguelsousa/source-sans-pro-subset).
- [ ] Font files are available in WOFF, WOFF2, and EOT/OTF if relevant (IE8 / Android Stock Browser).
- [ ] Static files are cache-busted with a query parameter (eg. `?v=4hjk54j6`) in production (JS/CSS/etc).
- [x] TODO - Single pages are less than the allocated performance budget (unless there's a very good reason not to).
- [x] TODO – Critical CSS is extracted and inlined in the HTML file if relevant.

### Deployment

- [ ] The project is [`shrinkwrapped`](https://github.com/springload/frontend-starter-kit/#adding-and-upgrading-dependencies) to pin its dependencies.
- [ ] The build service / CI is using `NODE_ENV=production` for compilation tasks via the `npm run dist` command.
- [ ] CI runs the CI tests (`npm run test:ci`, or `npm run test`), and the build breaks if they fail.

### Semantics

- [ ] Relevant site sections use appropriate [schema.org](http://schema.org/) structured data (events, products, persons, etc), tested with https://search.google.com/structured-data/testing-tool.

### SEO

- [ ] Help pagination with `rel=”next”` and `rel=”prev”` attributes.

### Analytics

- [ ] Google Tag Manager or Google Analytics are loaded on all pages (but not both).
- [ ] Check analytics are configured in development with a development property.
- [ ] Check analytics are configured in production with the production property on the live site.
- [ ] Check the relevant client-side interactions are tracked with events.
- [ ] If relevant, client-side JS errors are logged as [exceptions](https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions).
- [ ] Page and event tracking is being displayed correctly in the GA dashboard.

### Accessibility

- [ ] Roles (ARIA landmarks) are assigned to basic site sections.
header - `role="banner"`, main content - `role="main"`, footer - `role="contentinfo"`
- [ ] All images must have appropriate alt tags - extra great if you include all text that appears eg English and Māori translation text in a lot of company logos in NZ. [empty `alt=""` can be appropriate](http://osric.com/chris/accidental-developer/2012/01/when-should-alt-text-be-blank/).
- [ ] If relevant, icons include an accessible label with the `<title>` SVG tag.
- [ ] `<html>` element has attribute `lang="en-nz"`.
- [ ] If you have used outline: 0 anywhere make sure you have called the tab focus function in utils js file or any other alternative style for focus state.
- [ ] Screen reader only text for links with images/icons only.
- [ ] Form fields are inside the label element.
- [ ] Form error messages should be inside label element.
- [ ] All toggle content should have aria controls and expanded states.
- [ ] Most important content and pages are tested for color-blindness and vision disorders with http://lowvision.support/.
- [ ] Body copy and visuals have enough contrast according to WCAG guidelines https://leaverou.github.io/contrast-ratio/.

### Documentation

- [ ] The code documents itself via function names and variable names.
- [ ] The code contains comments to explain its intent where appropriate.

#### The README contains

- [ ] Project installation instructions.
- [ ] Project development commands.
- [ ] Test commands.
- [ ] Deployment commands.
- [ ] [Browser support definition](https://github.com/springload/frontend-starter-kit#browser-support).
- [ ] The project's useful patterns to reuse.
- [ ] Debugging tricks.
- [ ] Testing data.

You made it to the end! Whoo, high five my friend :pray:! Now go treat yourself to a drink :tropical_drink:, a hug, or whatever floats your waka :rainbow:. Don’t forget to let your team know that you’ve got this under control, and be proud of that top-notch site you just built. :metal:
