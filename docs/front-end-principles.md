# Front-end development principles

> Howdy! You're here because you're building a Springload web project. To make it easy for everyone to understand your code and maintain it later, you'll need to stick to the house rules.

This is a living document, so check back often.

## QuickStart

If you're not the RTFM type, stick to these basic principles:

* Be consistent.
* Write CSS using [BEM](https://en.bem.info/methodology/naming-convention/#css-selector-naming-convention)
* Don't use JS to replicate HTML/CSS functionality without a VERY good reason.
* Keep Sass nesting to a minimum, style things on classes instead. Don’t nest more than 3 levels in Sass.
* No styles on IDs.
* Always, always always check your compiled CSS output. This is what matters.
* Indent using 4 spaces. No tabs.
* Don't fight the browser.
* Write the stylesheet from LEAST SPECIFIC to MOST SPECIFIC. Source order is a CSS design consideration.
* Margins go on the bottom and the right.
* Avoid creating single-property abstractions.
* Write Sass that looks as much like vanilla css as possible (in general).
* Use `data-*` attributes for JS hooks, rather than classnames. Eg, `<div data-analytics></div>` rather than `<div class='js-analytics'>`

## HTML

### Principles

- **What are some general principles your team should follow when writing HTML? ***(for example, authoring semantic HTML5 markup, accessibility, etc. See [these](http://www.yellowshoe.com.au/standards/#html) [resources](http://codeguide.co/#html) for [inspiration](http://manuals.gravitydept.com/code/html))*

* Doublequotes for HTML attributes.
* We don't use HTML5 elements. Why? Because the spec is dumb. Unless you're making a blog. Also required JS for layout in old IE.
* ARIA roles are good. Use them for accessibility.
* Use `data-` refs for JS hooks, rather than classnames. Eg, `<div data-analytics></div>` rather than `<div class='js-analytics'>`
* Use HTML5 doctype
* Boolean attributes don't need a value: `<option selected>` rather than `<option selected='selected'>`
* Tag names in lowercase.

## CSS

### CSS Principles

> **What are some general principles your team should follow when writing CSS?** *(For example, modularity, avoiding long selector strings, etc. See [these](http://cssguidelin.es/) [resources](http://www.yellowshoe.com.au/standards/#css) [for](http://manuals.gravitydept.com/code/css) [inspiration](http://codeguide.co/#css))*

#### Keep nesting to a minimum

```SCSS
// Do this:
.card {
}
    .card__title {
    }

    .card__image {
    }

// Don't do this, it's creating unnecessary specificity:
.card {

    .card__title {
    }

    .card__image {
    }

}
```

* Don't extend declarations via placeholders. Use mixins instead.
* Colours in variables. Use the american `color` to name things, since thats how CSS works. Eg, `$color-red`.
* Put extends first in a declaration. Put mixins last.

```SCSS
.foo {
  @extend %bar;

  position: absolute;

  @include medium {
    position: relative;
  }
}
```

* Margins go on the bottom and the right.
* Start with the least specificity. End with the most specific styles.
* Style resets first, then elements (eg body, p, h1, small, ul),  then move on to objects and components, and end with your overrides (eg, widths, utilities, grid). [Watch this video about the ITCSS methodology](https://www.youtube.com/watch?v=1OKZOV-iLj4)
* Only style things on classes.

```SCSS
// Don't do this:

h2 {
    font-size: 1.5rem;
}

.selector h2 {
    font-size: 2rem;
}

.other-selector h2 {
    font-size: 1.4rem;
}

// Instead, apply a class that modifies the element:

h2 {
    font-size: 1.5rem;
}

.selector__title {
    font-size: 2rem;
}

.other-selector__title {
    font-size: 1.4rem;
}
```

### CSS Methodology

>>**Is your team using a CSS methodology** *(such as [SMACSS](https://smacss.com/), [BEM](https://en.bem.info/method/), or [OOCSS](http://oocss.org/)*? If yes, where is the documentation for that methodology?
* Thibaud has some thoughts: http://www.springload.co.nz/blog/a-stable-front-end-stack-for-2016/
* **Are you deviating from the methodology in any way?** If so, can you highlight these conventions?
* See above.

### CSS Tools

* **Is the team using a preprocessor** *(such as [Sass](http://sass-lang.com/) or [Less](http://lesscss.org/))*?
* Sass.
* **What are the guidelines for using that preprocessor** *(check out [Sass Guidelines](http://sass-guidelin.es/) for inspiration)*?
* We don't really write vanilla CSS anymore, so the CSS guidelines above are the sass guidelines.
* **Are you using a CSS base** *(such as [Normalize](https://necolas.github.io/normalize.css/) or a [reset](http://meyerweb.com/eric/tools/css/reset/))*?
* Normalize.
* **Are you using any CSS postprocessors** *(such as Prefixfree or [Autoprefixer](https://github.com/postcss/autoprefixer))*?
* Pleeease. Mainly for autoprefixing + REM fallbacks for old IE, minification.
* **Are there specific CSS techniques you're utilizing** *(such as [critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/))*?
* We do Critical CSS on a few projects. It's pretty cool but hard to do reliably.
* Addy Osmani has a good tool for it. We'll give it a whirl on Festival.
* Scott Jehl vs Addy Osmani showdown! https://github.com/addyosmani/critical

### CSS Frameworks

* **Is the team using a framework** *(such as [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/))*? If yes, where is the documentation for that framework?
* No.
* **Are you deviating from the framework in any way?** If so, can you highlight these conventions?
* N/A

### CSS Style

* **Spaces or Tabs?**
* Spaces. 4 spaces. https://github.com/springload/frontend-starter-kit/blob/master/.sass-lint.yml
* **Spacing around rules?**
* **[Grouping](https://smacss.com/book/formatting#grouping) properties?**
* **What does CSS commenting look like?**

## CSS & SaSS

### Headings and typography

Try and create the type for your site using only the top-level declarations: H1-6 and p. You'll find you won't spend time fighting the vertical rhythm if your typographic palette has fewer moving parts.

Consistent typography is easiest if you keep the number of point-sizes down. Talk to a designer about this.

In general, don't use more than 10 font-sizes in a project:

* H1-H6
* P
* .text-small
* .intro

Try and only define your `h1-h6` styles once in the stylesheet. Don't rely on source order (like, when `h2` is inside `.some_selector`). This is brittle, it means your styles are tightly coupled to particular markup.

```SCSS
// Don't do this:

h2 {
    font-size: 1.5rem;
}

.selector h2 {
    font-size: 2rem;
}

.other-selector h2 {
    font-size: 1.4rem;
}

// Instead, apply a class that modifies the size:
h2 {
    font-size: 1.5rem;
}

.selector__title {
    font-size: 2rem;
}

.other-selector__title {
    font-size: 1.4rem;
}
```

### Don't use units on line-heights


```SCSS
// Don't do this:
h2 {
    line-height: 1.25rem;
}

// Do this:
h2 {
    line-height: 1.25;
}
```

### Be consistent with vertical spacing

Avoid setting arbitrary margins on items. Defer these to a variable, and use multiples of that variable to control your vertical spacing. Our designs will often change right up til the end, so it's worth making stuff really easy to change.

Here's a great [article](http://webtypography.net/Rhythm_and_Proportion/Vertical_Motion/2.2.2/) about vertical rhythm.

```SCSS
// Don't do this:
.block {
    margin-bottom: 1.25rem;
}

.footer {
    margin-bottom: 1.25rem;
}

.block--feature {
    margin-bottom: 2.75rem;
}

// Do this:

/**
 * $base-spacing-unit: 1.25rem;
 * Declare common properties once only, or use an @extend in SaSS
 */
.m,
.block,
.footer {
    margin-bottom: 1.25rem;
}

.block--feature {
    /* $base-spacing-unit times two. */
    margin-bottom: 2.5rem;
}
```

### Selectors

* Classnames with dashes by default `.component`.
* Modifiers with double-dashes, in the BEM style: `.component--fancy`
* Sub-components with double-underscores: `.component__sidebar`

### Don't use IDs in your CSS. Ever.

They're too specific. It takes 255 classes to cascade over styling set on an ID. It doesn't matter how 'unique' that element is. If you see IDs in a project and you can refactor them safely, please do.

### Don't over-qualify selectors

Over-qualified selectors typically look like `ul.list`. But what if you want to use `.list` on a `div`? You're much better off leaving base elements off your classnames. Use comments to help other developers know which sorts of elements the selector is intended for.

```SCSS
// Don't do this:
ul.list {
    list-style: none;
}

// This is horrifying
body#home_loans figure.banner {
    background: #333;
}

// Do this:
.list {
    list-style: none;
}

.banner--home {
    background: #333;
}
```

### Don't use HTML5 elements when a `div` will do.

HTML5 has some nice new tricks, like `canvas`, `video` and `input[type='tel']`. Use them all you want (via [Feature Detection](#feature-detection)). But don't use HTML5 layout elements `figure, article, section, etc..`. A div is three characters long and it renders in every browser without a JS hack.

### Nesting

Be careful not to have unnecessary __nesting__. The parsing of the CSS will slow and the styles will be harder to override when they are too specific. But most importantly, it will mess with __the cascade__, and styles will be very hard to override.

```SCSS
// Don’t do this:
.something_detail {
    ul {
        list-style: none;
        li {
            padding-left: 1em;
            a {
                display: block;
                span {
                    font-weight: bold;
                }
            }
        }
    }
}

/* Outputs */
.something_detail ul { list-style: none; }
.something_detail ul li { padding-left: 1em; }
.something_detail ul li a { display: block; }
.something_detail ul li a span { font-weight: bold; }

// Instead, use BEM to keep the specificity down:

.list {
    list-style: none;
}
    .list__item {
        padding-left: 1em;
    }
        .list__link {
            display: block;
        }
        .list__link--bold {
            font-weight: bold;
        }

/* Outputs */
.list { list-style: none; }
.list__item { padding-left: 1em; }
.list__link { display: block; }
.list__link--bold { font-weight: bold; }
```

### Indent sub-components in CSS

Rather than doing crazy Sass nesting, indent CSS rules for child elements:

```SCSS
.widget {
    margin-top: 1em;
    border: solid 1px #eee;
}

    .widget__title {
        font-size: 2em;
    }

        .widget__icon {
            display: inline-block;
        }

    .widget__body {
        padding: .5em;
    }

        .widget__body p {
            margin-top: .5em;
        }
```

### Don't add styles too early

A class should do one thing, and do it well. If you're too specific to start with, you'll find you have to undo the styling later on, and you'll get stuck in the specificity arms-race.

Only abstract out the bits that are absolutely unique:


```SCSS
// Don't do this:
.active {
    color: red;
    margin-top: 1em; /* hmm...does every active thing really need a margin-top? */
}
.nav__item {
    color: blue;
}
.nav__item.active {
    margin-top: 0;  /* resetting margin because `.active` was too specific */
}

// Do this:
.active {
    color: red;
}
.nav__item {
    color: blue;
}
.nav__item.active {
    /* this gets the default active state, so we don't even need this rule now :) */
}
```

Think about the most essential function of the class(es), and your CSS will scale much better. You'll write less of it.

## Comments

We work in Sass. This means you get to comment everything, but it doesn't mean you should. You're not always going to be around to explain how you've done something, so take some time to explain what is not self-explanatory. All the cleverness is really obvious to you right now, but you might not be the one doing maintenance in 6 months time.

Write comments in the DocBlockr style, and limit lines to 80 chars:

```CSS
/**
 * Oh hai there, I'm a comment! We write comments in the jsDoc|DocBlockr style,
 * so that our CSS and JS comments all look the same. You can read about jsDoc
 * over at the repo: https://github.com/spadgos/sublime-jsdocs
 */

/**
 * Oh hai there, I'm a comment with a title!
 * ----------------------------------------------------------------------------
 *
 * Wrap lines that are longer than 80 chars. A comment might need a title block
 * which should be underscored by 76 dashes so it comes to 80 chars total.
 *
 * In General, butt the comment block up against the CSS item that follows it,
 * like so:
 *
 */
.some-selector {
    /* I'm a line comment in a CSS selector. */
}
```

Make use of CSS comments rather than Sass `// line-comment` style in your general styles. This makes it easy for us to comment consistently across projects that are in Sass or vanilla CSS, and means the non-minified CSS output still has all the context explaining what you've done.

## Sass

* Keep an eye on your compiled CSS.
* Make it beautiful before you minify it.
* Watch out for duplicate rules. (Do a `grep` or search for common offenders, like font-size);

All __mixins__, __functions__, __variables__ and __placeholder selectors__, should use hyphen (-) ’s, in keeping with SASS and Compass mixins and functions.

## Whizzy new browser features!

New things are in the Chrome Canary and FireFox Nightly builds all the time. There's some really cool stuff out there, and you shoud be using it on your project if you can!

Be aware that rendering, performance, and support will all need to be assessed before you roll out a feature on your site, like flexbox for instance. Create a [JSPerf](http://jsperf.com/) test and run it every browser you're supporting (including all the phones). Check what's going on in [WebKit's Timeline](http://perfectionkills.com/profiling-css-for-fun-and-profit-optimization-notes/). Then, write your progressive enhancement to include it (via Modernizr or Browser.js) accordingly.

## File naming conventions

The general rule is: Name the files according to the main thing that the file does. For a JS class, use the name of the class (`class Person`, `Person.js`). For a CSS component `.card`, `card.scss`. In doubt, file names should be all lowercase and using hyphen (-) for spaces. For versioning and minified, use period.

* __Images:__ Try and prefix file names with what they are: I.e. if it’s a sprite for buttons, call it `sprite-buttons.png`. If it’s an icon for Facebook, call it `icon-facebook.png` etc.
* __Sass:__ The same goes for Sass: If a partial only contains a mixin for a slider, call it `_mixin-slider.scss`.
