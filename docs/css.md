# CSS

## Formatting

We delegate that to [Prettier](https://prettier.io/). Make sure [your text editor](https://code.visualstudio.com/&sa=D&ust=1520457897533000&usg=AFQjCNF3QTfRTIBG7ZBDeYbNMcYimiKSbw) has [that extension](https://marketplace.visualstudio.com/items?itemName%3Desbenp.prettier-vscode&sa=D&ust=1520457897533000&usg=AFQjCNHE7vk2t6eHIK-v-jqPDwO2e4KpdA), and that it’s configured to auto-format on save. Here’s [the ESLint config](https://github.com/springload/eslint-plugin-springload).

## File Structure

We use a methodology called [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/),
in which CSS is organised by increasing CSS specificity (CSS reset or normalize, then base styles, component styles, and finally utility classes, or that general approach). For an example project see [Engineering NZ](https://github.com/springload/engineeringnz/tree/master/core/static_src/sass).
Note: There is a framework built from this concept called [INUITCSS](https://github.com/inuitcss/inuitcss)


## CSS preprocessors / compilers / templaters

[Sass](https://github.com/sass/libsass) for build-time styles. Where possible prefer build-time styles more than run-time styles, because they’re probably faster.

For CSS-In-JS we like [Glamor](https://github.com/threepointone/glamor) and [Glamorous](https://glamorous.rocks/).


### Naming conventions

Use [BEM](https://en.bem.info/) (**b**lock__**e**lement--**m**odifier) with lowercase words separated by single hyphens. E.g. `.block-name`, or `.block-name__element-name`,or `.block-name__element-name--modifier-name`. There is only ever one "block". Double underscores are only ever one level deep. If you need deeper then consider using different names.

Avoid nesting selectors. This can make styles less reusable. Don't use string concatenation (&__element-name) for classes, but pseudoes are ok. Don’t use camelCase.

# Advice

<table>
  <tbody>
    <tr>
      <td>
        Good (easy to search)
      </td>
      <td>
        Bad (hard to search for “tile__content”)
      </td>
    </tr>
    <tr>
      <td>
        .tile { /* CSS Properties */ }

        .tile__content { /* CSS Properties */ }

        <span class="c6 c18">.tile__heading { /* CSS Properties */ }

      </td>

      <td>

        .tile { /* CSS Properties */

        &__content { /* CSS Properties */ }

        &__heading { /* CSS Properties */ } }

      </td>

    </tr>

    <tr>

      <td>

        Good (& for pseudoes is fine)

      </td>

      <td>

        Also good (on another line)

      </td>

    </tr>

    <tr>

      <td>

        .tile { /* CSS Properties */

        &:hover { /* CSS Properties */ } }

      </td>

      <td>

        .tile { /* CSS Properties */ }

        .tile:hover { /* CSS Properties */ }

      </td>

    </tr>

  </tbody>

</table>

### Naming files and components

Component files should use the ‘block” name as the file name, there shouldn’t be any css in the file that doesn’t start with the block name


<table>

  <tbody>

    <tr>

      <td>

        Good (in _components.btn.scss)

      </td>

      <td>

        Bad (in _components.btn.scss)

      </td>

    </tr>

    <tr>

      <td>

        .btn { /* CSS Properties */ }

        .btn--white { /* CSS Properties */ }

        .btn__text { /* CSS Properties */ }

      </td>

      <td>

        .modal-btn { /* CSS Properties */ }

      </td>

    </tr>

    <tr>

      <td>
      

      </td>

      <td>
        /* Instead in _components.modal.scss */
        .modal__btn { /* CSS Properties */ }
      </td>

    </tr>
  </tbody>
</table>

## More advice

Don’t use @extends. Prefer @includes instead if necessary.

Media Queries should be inside or near css block, not at the bottom or top of files.

Styling only with classes, not Ids, because Ids are globally unique and so prevent reuse, and cause problems with specificity.

Elements shouldn’t be targeted after classes (with the exception of places where we can’t add classes, such as richtext fields, which should be ordered as per ITCSS). E.g. “.container td” is probably a bad idea.

Avoid using the words ‘mobile’ or ‘desktop’ in classNames, instead opt for more descriptive words such as: small, medium, large, x-large etc. Often small desktops can match the size of large tablets, so using generic terms is more accurate.

CSS Margins collapse into each other, so only set margins along one axis direction (e.g. top or left, or right and bottom, but not left and right and top and bottom). We prefer right and bottom.

State classes use ...--is-something. A state class is a modifier of an element or block. Using .active or similar on its own is too obscure, if there is more than one class on an element it is not clear which the .-active class belongs to.

<table>

  <tbody>
    <tr>
      <th>
        Good
      </th>
      <th>
        Bad
      </th>
    </tr>
    <tr>
      <td>
        .block--is-animating {/* CSS Properties */}
        .modal--is-active {/* CSS Properties */}
        .accordion--is-open {/* CSS Properties */}
      </td>
      <td>
        .is-active {/* CSS Properties */}
        .-active {/* CSS Properties */}
        .open {/* CSS Properties */}
      </td>
    </tr>
  </tbody>
</table>

## New or Old?

For legacy projects we follow whatever conventions they have, but where possible we try to migrate to these newer approaches.

