# HTML

> HTML should be structural, semantic, and accessible.

## Formatting

We delegate that to [Prettier](https://prettier.io/).   
Make sure [your text editor](https://code.visualstudio.com/&sa=D&ust=1520457897533000&usg=AFQjCNF3QTfRTIBG7ZBDeYbNMcYimiKSbw) has [that extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and that it's configured to auto-format on save. 

Refer to our [prettier config](https://github.com/springload/prettier-config-springload/blob/master/lib/index.js).

## Accessibility

Go read Sam's [Being pragmatic about accessibility](https://www.springload.co.nz/blog/pragmatic-about-accessibility/).

## Misc

- Use HTML5 doctype
- Tag names and attribute names in lowercase for greater compatibility with React.
- Use `data-` refs for JS hooks, rather than classnames or ids. Eg, `<div data-analytics></div>` rather than `<div class='js-analytics'>`
- Boolean attributes don't need a value: `<option selected>` rather than `<option selected='selected'>`

## Links

- http://www.yellowshoe.com.au/standards/#html
- http://codeguide.co/#html
- http://manuals.gravitydept.com/code/html

_More documentation to come._