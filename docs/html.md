# HTML

> HTML should be structural, semantic, and accessible.

_Work in progress_

## Formatting

We delegate that to [Prettier](https://prettier.io/) (although Django/Wagtail templates are often named `.html` with template instructions so Prettier might break them... note that the `.prettierignore` for D/W projects is configured to ignore `*.html` files).

Make sure [your text editor](https://code.visualstudio.com/&sa=D&ust=1520457897533000&usg=AFQjCNF3QTfRTIBG7ZBDeYbNMcYimiKSbw) has [that extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and that it's configured to auto-format on save. 

Refer to our [prettier config](https://github.com/springload/prettier-config-springload/blob/master/lib/index.js).

## Accessibility

Aside from CSS colours, HTML is primarily responsible for making accessible webpages (regardless of whether you're generating HTML from Django/Wagtail or React etc.).

Go read Sam's [Being pragmatic about accessibility](https://www.springload.co.nz/blog/being-pragmatic-about-accessibility/).

### Accessibility Reading
- https://github.com/Heydon/inclusive-design-checklist
- https://a11yproject.com/

### 
- Make sure it works with keyboard only, can you navigate the site using only the keyboard? 
- Provide visible and clear focus styles (TODO: find that new approach, reference our current approach).
- Use native HTML elements and attributes as much as possible.
- Don't override native HTML semantics, unless absolutely necessary.
    **Good:**
    <button type="button">Play</button>
    <input type="checkbox" />
    **Bad:**
    <div class="button">Play</div>
    <span class="checkbox"></span>
Apply `aria-role="presentation"` and `aria-hidden="true"` to images and icons/svgs that are decorative only.

Provide a <title> on svg’s that are used as content, eg. Social icons

    <svg class="i i-social" role="img">
        <title>Find us on Facebook</title>
        <use xlink:href="#i-facebook"></use>
    </svg>

Provide large touch "targets" for interactive elements (specifically on small devices).

Make sure form labels are always visible.

    **Good:**
    <label for="name" >Full name</label>
    <input type="text" id="name" />
    **Bad:**
    <input type="text" id="name" placeholder="Full name" />
    <span>Password:</span>
    <input type="text" id="name" placeholder="XXXXXXX" />  

The screen reader will literally read out XXXXXX in this situation. It also will have no idea the span above it is related, use a <label> instead. 

- Languages - add the lang attribute to the <html> tag.

    ```html
    <html lang="en"> to show a web page is in English
    <html lang="en-nz"> to show a page is in New Zealand English
    <html lang="mi"> to show a page is in Māori.
    ```
  Using a different language on just a single word or a paragraph or two? 
  Add the lang attribute to the <p> tag. Eg. <p lang="mi"> to display paragraph in Māori.

  **Why?**
  Both assistive technologies and conventional user agents can render text more accurately if the language of each passage of text is identified. Screen readers can use the pronunciation rules of the language of the text. For more on Language read this article.

- Tabindex:
    tabindex="0" Adds an element to the Tab order at its position in the source order.
    tabindex="-1" Removes an element from the Tab order. Makes non-focusable elements programmatically focusable. For example, if you have two elements side by side linking to the same place, an image links, as well as some text beside it, you might want to take the tabindex off the image so that the user only needs to tab once.
    tabindex="1+" (Avoid) Will move the element up the tab order, so it will be the first thing you tab to on the page, it messes with the flow of the page. 

- Landmark Roles:
    ARIA Landmark Roles help assistive device users navigate your site, users are able to bypass sections of the site they are not interested in, for example they may want to skip passed the navigation to the main content.
    
    banner – Typically the “header" of your page that includes the name of the site
    search – For the search form (how to implement)
    main – This would designate the main content area on your site
    navigation – Use on any navigation list, typically on the nav element
    contentinfo – Typically the “footer" of your page that contains information about the parent document such as copyrights and links to privacy statements

    Use:
        <header role="banner" class="site-header">
        <div role="main" class="container">

- Advice:
  - Use Chrome accessibility dev tools to view if elements are being picked up correctly.
  - Use Chrome devtools > audits > accessibility to do an assessment of your site. 

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
