# [Frontend Guidelines Questionnaire](https://github.com/bradfrost/frontend-guidelines-questionnaire)

> A one-page questionnaire to help your team establish effective frontend guidelines, so that you can write consistent & cohesive code together.

## HTML

### HTML Principles

- **What are some general principles your team should follow when writing HTML? (for example, authoring semantic HTML5 markup, accessibility, etc. See [these](http://www.yellowshoe.com.au/standards/#html) [resources](http://codeguide.co/#html) for [inspiration](http://manuals.gravitydept.com/code/html))**

- Doublequotes for HTML attributes.
- We don't use HTML5 elements. Why? Because the spec is dumb. Unless you're making a blog. Also required JS for layout in old IE.
- ARIA roles are good. Use them for accessibility.
- Use `data-` refs for JS hooks, rather than classnames. Eg, `<div data-analytics></div>` rather than `<div class='js-analytics'>`
- Use HTML5 doctype
- Boolean attributes don't need a value: `<option selected>` rather than `<option selected='selected'>`
- Tag names in lowercase.


### JSX principles

- Singlequotes for JS, doublequotes for JSX.


### HTML Tools

- **Are you using an HTML preprocessor** *(such as [HAML](http://haml.info/), [Jade](http://jade-lang.com/), etc)*? No.
- NZ on screen uses HAML, also AudioCulture. But we dont have much to do with these ongoing.

- **Are you using a templating engine** *(such as [Mustache](https://mustache.github.io/), [Handlebars](http://handlebarsjs.com/), etc)*?

- Django Templates, Jinja2, Nunjucks, Twig. All smarty-syntax template engines.

- **Does your backend architecture influence the frontend markup in any way** (for example, WordPress will add `wp-paginate` to a class in your markup)? If so, can you highlight these conventions? 

- Django custom tags have to be loaded at the top of a template.
- Jinja2 requires you to use `iteritems()` to evaluate lists, eg `for item in list.iteritems()`.
- Django templates forces you to write logic in python.
- Add a nice function to Wagtail boilerplate for dumping vars. BCITO might have one?
- Use 'templatetags' for logic (if required), otherwise use partials via `include "includes/my_partial.html"`

### HTML Style

- **Spaces or Tabs?**
- Spaces. Four of them.
- **What does HTML commenting look like?** 
- Use Django's comments unless you really want the comment to be in the markup.
- `{# Hello, i'm a comment #}` instead of `<!-- Hello, I'm a comment -->`


---------------

## CSS

### CSS Principles

- **What are some general principles your team should follow when writing CSS?** *(For example, modularity, avoiding long selector strings, etc. See [these](http://cssguidelin.es/) [resources](http://www.yellowshoe.com.au/standards/#css) [for](http://manuals.gravitydept.com/code/css) [inspiration](http://codeguide.co/#css))*

- Keep nesting to a minimum
- Use mixins sparingly
- Extend things via placeholders.
- Colours in variables. Use the american `color` to name things, since thats how CSS works. Eg, `$button-color`.
- Put extends first in a declaration. Put mixins last.

```sass
.foo {
  @extend %bar;

  position: absolute;

  @include medium {
    position: relative;
  }
}
```

- Start with the least specificity. End with the most specific styles.
- Style resets first, then elements (eg body, p, h1, small, ul),  then move on to components, and end with your overrides (eg, widths, utilities, grid).


### CSS Methodology

- **Is your team using a CSS methodology** *(such as [SMACSS](https://smacss.com/), [BEM](https://en.bem.info/method/), or [OOCSS](http://oocss.org/)*? If yes, where is the documentation for that methodology?

- Thibaud has some thoughts: http://www.springload.co.nz/blog/a-stable-front-end-stack-for-2016/

- **Are you deviating from the methodology in any way?** If so, can you highlight these conventions?
- See above.


### CSS Tools

- **Is the team using a preprocessor** *(such as [Sass](http://sass-lang.com/) or [Less](http://lesscss.org/))*?
- Sass. Via libsass.

- **What are the guidelines for using that preprocessor** *(check out [Sass Guidelines](http://sass-guidelin.es/) for inspiration)*?
- We don't really write vanilla CSS anymore, so the CSS guidelines above are the sass guidelines.

- **Are you using a CSS base** *(such as [Normalize](https://necolas.github.io/normalize.css/) or a [reset](http://meyerweb.com/eric/tools/css/reset/))*?
- Normalize.

- **Are you using any CSS postprocessors** *(such as Prefixfree or [Autoprefixer](https://github.com/postcss/autoprefixer))*?
- Pleeease. Mainly for autoprefixing + REM fallbacks for old IE, minification.

- **Are there specific CSS techniques you're utilizing** *(such as [critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/))*?
- We did Critical CSS on On The Fence. It's pretty cool but hard to do reliably.
- Addy Osmani has a good tool for it. We'll give it a whirl on Festival.
- Scott Jehl vs Addy Osmani showdown! https://github.com/addyosmani/critical


### CSS Frameworks

- **Is the team using a framework** *(such as [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/))*? If yes, where is the documentation for that framework?
- No.
- **Are you deviating from the framework in any way?** If so, can you highlight these conventions?
- N/A

### CSS Style

- **Spaces or Tabs?**

Spaces. 4 spaces.
https://github.com/springload/frontend-starter-kit/blob/master/.sass-lint.yml


- **Spacing around rules?**
- **[Grouping](https://smacss.com/book/formatting#grouping) properties?**
- **What does CSS commenting look like?** 

---------------

## JavaScript

### JavaScript Principles

- **What are some general principles your team should follow when writing JavaScript?** *(See [these](https://github.com/airbnb/javascript) [resources](https://github.com/rwaldron/idiomatic.js) for [inspiration](https://github.com/styleguide/javascript))*
- AirBnB except we use 4 spaces.
- Maybe investigate WHY everyone suggests 2 spaces. Coz it looks lame.

### JavaScript tools

- **Are you using a JavaScript framework** *(such as [jQuery](http://jquery.com/), [Ember](http://emberjs.com/), [Angular](https://angularjs.org/), etc)*?
- jQuery on a bunch of projects.
- React, D3,
- These days, ES6 modules with utility libraries such as lodash.

- **Where is the documentation for those frameworks?**
- **Are you using any polyfills or shims** *(such as [any of these](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills))*?

- RespondJS
- AddEventLister polyfill
- Array.prototype.slice
- requestAnimationFrame
- Function.prototype.bind
- ES5 shim + sham
- document.querySelectorAll
- ClassList
- Mostly for IE8 compatibility.


- **What third-party scripts are dependencies for your project** *(such as scripts for form validation, graphs, animation, etc)*?
- Look at any local friendly package.json for these. There are many.


### JavaScript Style 

*(See [these](https://github.com/airbnb/javascript) [resources](https://github.com/rwaldron/idiomatic.js) for [inspiration](https://github.com/styleguide/javascript))*

- **Spaces or Tabs?**
- Spaces x 4.
- **What does JS commenting look like?** 
- DocBlockr style (`/** ... */`) for multi-line comments, `// slash-style` for inline.
- [What patterns are you following](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)?
- ES6 modules. > CommonJS.


---------------

## Tooling

- **Are you using a task runner** *(such as [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/))*?
- Gulp
- Should migrate legacy grunt projects to gulp where possible.

- **Are you using a dependency manager** *(such as [Bower](http://bower.io/) or [Composer](https://getcomposer.org/))*
- We use NPM. Bower is pointless when you have NPM.

- **Are you using any scaffolding tools** *(such as [Yeoman](http://yeoman.io/))*
- CookieCutter. [Link to cookiecutter repo]

- **Are you using any tools to reinforce frontend style** *(such as [Editor Config](http://editorconfig.org/) or [linters](https://github.com/CSSLint/csslint))*?
- ESLint, SassLint, EditorConfig.
- GitHooks on changed files.
- Projects should have linting and tests.

- **Are any other specific pieces of software that are needed to work on this project?**

---------------

## Version control

- **What version control system are you using for your frontend code** *(such as [Git](https://git-scm.com/) or [Subversion](https://subversion.apache.org/))*?
- Git
- **Where is your version-controlled code hosted** *(such  as [Github](https://github.com/) or [Bitbucket](https://bitbucket.org/))* ?
- GitHub
- **Do you use a version control workflow** *(such as [gitflow](http://nvie.com/posts/a-successful-git-branching-model/), [centralized](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow), [feature-branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), etc)*?
- Feature branches with pull requests and code reviews

- **Who's responsible for managing and governing the version controlled code?**?
- **Where are issues tracked**?
- GitHub issues for everything!

-----------

## Support and Optimization

It's important to recognize the difference between ["support" and "optimization"](http://bradfrost.com/blog/mobile/support-vs-optimization/). You should do your best to support as many environments as possible while simultaneously optimizing for the environments that make the most sense for your business and users.

- **What browsers are you *optimizing* for?** 
- We aim to support browsers over 5% of traffic.

- **What devices are you *optimizinog* for?** 
- This should be derived from each clients' analytics.
- For instance, 35% of all pageviews on Red Cross are on iOS. 57% from mobile devices.

- **Are you using a [graded browser support](https://github.com/yui/yui3/wiki/Graded-Browser-Support) system?**
- For government projects, we have to.
- (RealMe).
- **Are there specific components that require [more specific grading](https://www.filamentgroup.com/lab/grade-the-components.html)?**
- Perhaps useful for KB/redcross/RealMe/Airport?

## Documentation

- **Are you using a [pattern library tool](http://styleguides.io/tools.html) to document your front-end architecture**?
- Projects should have a single page with all the front-end components detailed.

- **Where does your documentation live**? What are the links to the documentation?
- Should be available ether on staging site or local build of the project. Maybe if DEBUG=true in Django, it gets rendered on `http://localhost:8000/pattern-library/`

- **Who's responsible for maintaining and governing the documentation**?
- The FED.

*Feel free to modify or extend (such as adding specific sections for performance, accessibility, etc) this document for your own organization's needs. For questions, comments, additions, and corrections, please open an issue on Github and/or reach out to [@brad_frost](https://twitter.com/brad_frost) on Twitter.*
