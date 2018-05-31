# 18.5

* Trashed the `recycle-bin`. Recover any files from [the history](https://github.com/springload/frontend-starter-kit/tree/c35abe435eb4905565e79a8bbc5cc257b2e5a77c).s

# 18.1

* `gh-pages` repo deleted and moved to the `recycle-bin`.
* Frontend checklists merged. The distinction between what was necessary to know at launch vs start was dubious.

# 18.0

Version 18... the big 20**18** refactor!

Old things that we're not sure about have been moved to the `./recycle-bin` (because although people could extract files from the Git history, we want non-techies to easily access some of these).

#### :nail_care: Refactor

* `core/static_src/sass` :arrow_forward: [Springload Starter Styles](https://github.com/springload/frontend-starter-styles) repo!
* `core/static_src/images` :arrow_forward: :wastebasket:
* `core/static_src/svg` :arrow_forward: :wastebasket:
* `core/static_src/js` :arrow_forward: ...the following table

| Before                   | After                                                                                                                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `polyfills.js`           |                                                                                                                                                                                                                  |
| _Promise polyfill_       | Nothing! Modern browsers have Promise already so the need for this is reduced. IE11 doesn't support Promises but use [`bluebird`](https://www.npmjs.com/package/bluebird).                                       |
| _Object.assign polyfill_ | The `object.assign` polyfill can be replaced by Babel features.                                                                                                                                                  |
| `format.js`              |                                                                                                                                                                                                                  |
| _Date formatting_        | Prefer [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) available in modern browsers and IE11, or [`date-fns`](https://github.com/date-fns/date-fns) if necessary |
| _padNumber_              | Use lodash's pad functions.                                                                                                                                                                                      |
| _humanNumber_            | Use [`Number.toLocalString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) noting the Intl arguments and older Safari compat problems                  |
| `keycodes.js`            | Use [`keycode-js`](https://www.npmjs.com/package/keycode-js)                                                                                                                                                     |
| `interface.js`           | Nothing! Browser detection code and constants for `NBSP` as unicode are things you can find online                                                                                                               |
| `analytics.js`           | Uh... I'm not sure what on earth this is doing :arrow_forward: :wastebasket: in the meantime                                                                                                                     |
| `/components/*`          | :arrow_forward: :wastebasket:                                                                                                                                                                                    |

#### :bug: Bug Fix

*

#### :memo: Documentation

* `docs/front-end-principles` :arrow_forward: :wastebasket:
* `docs/job-descriptions` :arrow_forward: :wastebasket: and moved to drive (so it's only in one place with the rest of the company).
* `docs/pattern-library/template.html` :arrow_forward: :wastebasket:

#### :house: Internal

*

# 1.0 before 2018

#### :bug: Bug Fix

*

#### :nail_care: Enhancement

*

#### :memo: Documentation

*

#### :house: Internal

*
