# Frontend project checklist

Copy this file into a new `Issue` on your project and go through the checklist.

These rules aren't mandatory and might not make sense for your project, so use your common sense.

## Launch approach
- [ ] Have you considered a Soft Launch or Hard Launch? Often sites have a password on them until launch (Hard Launch), which means that testing favicons and social media integration may be difficult. Because of this we prefer a *Soft Launch* where the site is public before any announcement of the site launch.

## The project's `README.md` contains

- [ ] Project installation instructions.
- [ ] Links to all deploy environments and any associated Git branch names.
- [ ] Links to CI, Trello board, Harvest project, project run sheet, Google Drive folder, Zeplin, InVision, Atomic, other.
- [ ] Expected Browser support and accessibility support. Copy [browser-device-support.md](./browser-device-support.md) into your README.md and modify to suit.
- [ ] Any debugging tricks or quirks that might be useful for future devs.

## Project structure

- [ ] Project has an `.nvmrc` file (bonus points for an LTS version of Node)
- [ ] A [prettier config](https://prettier.io/docs/en/configuration.html) file is available
- [ ] [ES lint configuration](https://github.com/springload/eslint-config-springload) is available

## Code quality

- [ ] Try a fresh install of the project (preferably in a new VM or on a different machine) to ensure it can be installed from scratch... eg, that all dependencies are referenced and not implicit.
- [ ] Clean up commented/unnecessary code.
- [ ] Check all TODO and FIXME comments in the code are still relevant.
- [ ] Unintentional console logs statements removed. All `debugger` statements removed.
- [ ] Code comments to document quirks or odd workarounds / compromises as appropriate.

## Testing

- [ ] Site tested in all relevant browsers and devices.
- [ ] Site works with adblocking software (ie, uBlock).
- [ ] Site works with JavaScript turned off, or the sections that do not work are indicated to the user via messages in `<noscript>` tags or similar.
- [ ] Site has a favicon.ico.

## HTTP

- [ ] CSP
- [ ] Static files are cache-busted with a unique hash (eg. main._4hjk54j6_.js) in production JS/CSS/etc.
- [ ] HTTP to HTTPS redirect exists, with `Strict-Transport-Security`.

## HTML

- [ ] Page translation by Chrome is disabled if appropriate `<meta name="google" content="notranslate">` ([more](https://support.google.com/webmasters/answer/79812)). Sometimes clients take the blame for bad translations and it's better to just disable it, but this is a judgement call.
- [ ] Links with `target="_blank"` use `rel="noopener noreferrer"` to avoid security problems. [More info](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/).
- [ ] Links from user-submitted (untrusted) content use [`rel="nofollow noreferrer"`](https://support.google.com/webmasters/answer/96569)
- [ ] 404 page exists and is styled.
- [ ] 500 page exists and is styled.
- [ ] Maintenance page exists and is styled, if relevant.

##  CSS

- [ ] Ensure form controls are dark theme compatible. Ie, that you don't rely on default background colours for form controls. Test this by setting `input,select,textarea {background:black}` as the first CSS rule and see if the rest of the site's styles override it correctly.
- [ ] Print styles are defined and tested on all templates / pages (if relevant).
- [ ] CSS classes use a consistent naming methodology (BEM).
- [ ] No vendor prefixes or IE filters in Sass (autoprefixer should handle this).

## JS

- [ ] Polyfills are included if appropriate. Consider isolating polyfills from the rest of the codebase (ie, in a `polyfills.tsx` file) so that they're easier to remove in the future.

## Accessibility

- [ ] Make sure all pages, in all states, are keyboard navigable.
- [ ] Body copy and visuals have enough contrast according to WCAG guidelines https://leaverou.github.io/contrast-ratio/ and http://lowvision.support/ .
- [ ] Current WCAG compliance if possible.
-- [ ] Ensure focus is visible.
-- [ ] Roles (ARIA landmarks) are assigned to basic site sections.
header - `role="banner"`, main content - `role="main"`, footer - `role="contentinfo"`
-- [ ] Form fields have **associated** labels.
-- [ ] Form fields have their [`name`, `autocomplete` and `autocorrect` attributes](https://html.spec.whatwg.org/multipage/forms.html#attr-fe-autocomplete) set correctly.
- [ ] Forms and/or fields should have accessible validation messages. [Ensure Server-side Errors are Accessible](https://www.washington.edu/accessibility/checklist/form-validation/).
- [ ] All images must have appropriate alt tags - extra great if you include all text that appears. Eg. English and Māori translation text in a lot of company logos in NZ. [empty `alt=""` can be appropriate](http://osric.com/chris/accidental-developer/2012/01/when-should-alt-text-be-blank/).
- [ ] Ensure any acronyms/abbreviations use the `<abbr>` tag.
- [ ] `<html>` element has attribute `lang="en-nz"` or `lang="mi"`.
- [ ] Screen reader only text for links with images/icons.
- [ ] Pagination with `rel=”next”` and `rel=”prev”` attributes.

## Fonts

- [ ] All of the fonts used on the project are correctly licensed, at the appropriate license level (expected pageviews/month).
- [ ] If relevant, Analytics email alerts are set up when audience levels go over the fonts' license thresholds.

## Mobile

- [ ] Site uses a mobile-friendly, zoomable viewport, if possible.
- [ ] Platform-specific ([Apple](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html),Android, Windows, etc) meta tags and favicons are added and checked with the [Favicon checker](https://realfavicongenerator.net/favicon_checker).

## Security

- [ ] Data is sanitised before display (ie, User generated content) to prevent exploits such as XSS.
- [ ] Forms use CSRF tokens when they mutate state (POST/PUT/DELETE, eg. editing a user/booking/listing’s data).
- [ ] Form fields use the correct [input types for the appropriate mobile keyboard](http://baymard.com/labs/touch-keyboard-types).

## SEO / SMO

- [ ] Canonical URL redirect exists, if relevant (eg. `example.com` ➞ `www.example.com`).
- [ ] Run site url through the Facebook debugger (https://developers.facebook.com/tools/debug/) to check it will appear correctly if shared.
- [ ] Ensure that `<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">` is only on the correct pages.
- [ ] Ensure meta tags, OpenGraph tags, Twitter card tags, and descriptions are set.
- [ ] Ensure the social meta tags only use a default sharing image if there is no page-specific image to use.
- [ ] Significant UI states (tabs, modals, etc) should be tracked in the URL via query parameter or the hash or else search engines might not index them.
- [ ] Google Tag Manager or Google Analytics are loaded.
- [ ] Check analytics are configured in development with a development property.
- [ ] Check analytics are configured in production with the production property on the live site.
- [ ] Check the relevant client-side interactions are tracked with events.
- [ ] Page and event tracking is being displayed correctly in the GA dashboard.


## Performance

- [ ] Test site in Chrome's Lighthouse (Devtools | Audits). While we don't have any specific targets (ie, 'must be above 90') across all projects use this tool to find areas for optimisation. Eg:
-- [ ] CSS/JS files are minified in production (bonus points for HTML too).
-- [ ] if images are unoptimised use [ImageOptim](https://imageoptim.com/mac)/[SVGOMG](https://jakearchibald.github.io/svgomg/) or similar to compress them.
- [ ] Static files are cached for a long time in production (JS/CSS/images/etc, check this with [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) or [GTmetrix](https://gtmetrix.com/)) on the live site.

## Tickets

- [ ] Appropriate labels set on GitHub or Jira.

## Infra

- [ ] CI runs tests
- [ ] Production site has Sentry tracking.

You made it to the end! Whoo, high five my friend! Now go treat yourself to a drink :tropical_drink:, a hug, or whatever floats your waka :rainbow:. Don’t forget to let your team know that you’ve got this under control, and be proud of that top-notch site you just built.
