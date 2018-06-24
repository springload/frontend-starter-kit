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

We use [Sass](http://sass-lang.com/guide)   
[Sass](https://github.com/sass/libsass) for build-time styles. Where possible prefer build-time styles more than run-time styles, because they're probably faster.

For CSS-In-JS we like [Glamor](https://github.com/threepointone/glamor) and [Glamorous](https://glamorous.rocks/).


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
- File names should be all lowercase and using period (.) to seperate words. eg. `_objects.grid.scss`, `_objects.grid.spacing.scss`  
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
- CSS Margins collapse into each other, so only set margins along one axis direction (e.g. `top and left`, or `right and bottom`, but not `left and right and top and bottom`). We typically use `right and bottom`. And be consistent with 
[vertical spacing](http://webtypography.net/2.2.2)
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

# Misc

- [CSS stats](http://cssstats.com) | > Get some statistics about the CSS used on your project.| Number of rules, Number of selectors, Specificity graph, File 

### Error: `libsass` bindings not found. Try reinstalling `node-sass`

You're probably running the wrong version of Node. Do `nvm use` and try again.

## New or Old?

For legacy projects we follow whatever conventions they have, but where possible we try to migrate to these newer approaches.

