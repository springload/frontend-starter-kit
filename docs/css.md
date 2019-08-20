# CSS

> CSS should be modular, readable, and not unnecessarily specific.




| Important links :book:                                 |
|--------------------------------------------------------|
| [Springload project starter styles ](https://github.com/springload/frontend-starter-styles)|




## Formatting

We delegate that to [Prettier](https://prettier.io/).   
Make sure [your text editor](https://code.visualstudio.com/&sa=D&ust=1520457897533000&usg=AFQjCNF3QTfRTIBG7ZBDeYbNMcYimiKSbw) has [that extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and that it's configured to auto-format on save. Here's [the ESLint config](https://github.com/springload/eslint-plugin-springload).

## File Structure

We use a methodology called [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/),
in which CSS is organised by increasing CSS specificity (CSS [Normalize](https://github.com/necolas/normalize.css/), then base styles, component styles, and finally utility classes, or that general approach).  
Note: There is a framework built from this concept called [INUITCSS](https://github.com/inuitcss/inuitcss)


## CSS preprocessors / compilers / templaters

We use [Sass](http://sass-lang.com/guide) for build-time styles. Where possible prefer build-time styles more than run-time styles, because they're probably faster.

However for larger projects with code-splitting, or for dynamic CSS we like [styled-components :nail_care:](https://styled-components.com).

## Autoprefixer

We use [Autoprefixer](https://github.com/postcss/autoprefixer) to ensure things get automatically vendor-prefixed. Depending on which browsers your project needs to support, you can update the settings in a `.browserslistrc` file. 

Your project may already have Autoprefixer set up, create-react-app includes it for instance.

With Autoprefixer set up you won’t need to (**and shouldn’t!**\*) add vendor prefixes to your scss files. 

\*There are a couple of exceptions where a css property isn’t part of the CSS spec and therefore does need to be vendor-prefixed, such as the “appearance” example below:
```
.my-select {
  // “appearance” isn't part of the CSS spec.
  -moz-appearance: none;
  -webkit-appearance: none;
}
```

### Naming conventions

- Use [BEM](https://en.bem.info/) (**b**lock__**e**lement--**m**odifier) with lowercase words separated by single hyphens.
- There is only ever one "block" per component.   
- Double underscores are only ever one level deep. If you need deeper then consider using different names.  
- Don't use camelCase.  

```SCSS
.block-name {}
.block-name--modifier {}

.block-name__element-name {} 
.block-name__element-name--modifier {}
```


# Advice

- Avoid nesting selectors. This can make styles less reusable and it will mess with the cascade, and styles will be very hard to override.  
- Don't use string concatenation (`&__element-name`) for classes, but pseudoes are ok.   

```scss
// Good (Easy to search within the codebase)
.tile {}
.tile__content {}
.tile__heading {}

// Good (& for pseudoes is fine)
.tile { 
  &:hover {}
}

.tile:hover {}

// Bad (Hard to search for "tile__content")
.tile { 
  &__content {}
  &__heading {}
}
```

### Naming files and components

- Component files should use the 'block' name as the file name, there shouldn't be any css in the file that doesn't start with the block name. eg. `_components.btn.scss`.  
- File names should be all lowercase and using period (.) to separate words. eg. `_objects.grid.scss`, `_objects.grid.spacing.scss`  
- Images: Try and prefix file names with what they are: I.e. if it’s a sprite for buttons, call it `sprite-buttons.png`. If it’s an icon for Facebook, call it `icon-facebook.png` etc.  

```scss
// In _components.btn.scss
// Good 
.btn {}
.btn--white {}
.btn__text {}

// Bad 
.modal-btn {}
```

## More advice

- Don't use `@extends`. Prefer `@includes` instead if necessary.
- Media Queries should be inside or near css block, not at the bottom or top of files.
- Use classes for styling only, don’t use IDs in your CSS.
- Start with the least specificity. End with the most specific styles (see [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/))
- Elements shouldn't be targeted after classes (with few exceptions). e.g. `.container td`. However one notable exception is places where we can't add classes, such as WYSIWYG fields where the user is creating tags and we can't control that, and in such cases the rules should be carefully scoped and ordered as per ITCSS.

```scss
// Good 
.list { list-style: none; }
.list__item {}
.banner--home {}

// Bad
ul.list { list-style: none;}
.list li {}
.home div.banner {}
```

- Avoid using the words 'mobile' or 'desktop' in classNames, instead opt for more relative terminology such as: small, medium, large, x-large etc. This is because small desktops can match the size of large tablets, so using generic terms is more accurate.
- Don’t use units on line-heights. Do this: `line-height: 1.25`, don't do this: `line-height: 1.25rem`.
- Set `margin`s along one axis direction where possible. We favour `right` and `bottom`. Using only one vertical margin (`bottom` and not `top`) makes layouts more manageable and helps avoid the weird [vertical margin collapsing issue](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing). Also, be consistent with [vertical spacing](http://webtypography.net/2.2.2).
- Modifier (AKA State) classes use `...--is-something`. A state class is a modifier of an element or block. Using .active or similar on its own is too obscure, if there is more than one class on an element it is not clear which the `.-active` class belongs to.

```scss
// Good
.block--is-animating {}
.modal--is-active {}
.accordion--is-open {}

// Bad
.is-active {}
.-active {}
.open {}
```

## Layout
We prefer flex and grid. We almost never use `float`.

Contrary to popular belief, CSS grid does work in IE11 - just with some limitations (notable examples include no implicit rows/columns, no grid-gap).

Flex works in IE11 but suffers from a number of [flexbugs](https://github.com/philipwalton/flexbugs).

So what should you use? Basically, if you need to support IE11, use flex and maybe some grid. If you don’t need to support IE11, use grid and maybe some flex.

If you want to use an off-the-shelf responsive grid system for column layout, use a modern and light-weight system like [Flexbox Grid](http://flexboxgrid.com/), rather than something that does a whole heap of other stuff (e.g. Bootstrap 🙅). 

## Error: `libsass` bindings not found. Try reinstalling `node-sass`

You're probably running the wrong version of Node. Do `nvm use` and try again.
