* [Mounting and configuring components](#mounting-and-configuring-components)
  * [1. Inline JSON Payload (IJP)](#1-inline-json-payload-ijp)
  * [2. Mounting Components](#2-mounting-components)
  * [Combining 1 & 2](#combining-1--2)
* [Other considerations](#other-considerations)

------------------------------------

# Mounting and configuring components

_This is a preferred pattern for providing component configuration on our CMS build projects_

## 1. Inline JSON Payload (IJP)

Often when we make JavaScript components they can take props/params/args that are configurable by a CMS site admin.

Eg. Consider a `MyHeader` React component,

```jsx
<MyHeader background="#ff0000" />
```

Our task is to make the `#ff0000` string configurable by a CMS site admin.

So we have several options,

1. We could make an API (HTTP or Websockets etc), but that means waiting on a network response to get that configuration, which is slower.
2. We could put the configuration in the HTML with the initial page load which would be faster to load. This data could be in `data-anything="config"` or as `<script>` tags.

Let's consider Option 2 with `<script>` tags, and we have a few obvious options: JavaScript or JSON data.

In [a blog post from 2019 the Chrome v8 blog talks about parsing (reading) data](https://v8.dev/blog/cost-of-javascript-2019#json)...

> **The cost of parsing JSON**
>
> Because the JSON grammar is much simpler than JavaScript’s grammar, JSON can be parsed more efficiently than JavaScript. This knowledge can be applied to improve start-up performance for web apps that ship large JSON-like configuration object literals (such as inline Redux stores). Instead of inlining the data as a JavaScript object literal, like so:

This is slow:

> `const data = { foo: 42, bar: 1337 }; // 🐌`

This is fast:

> `const data = JSON.parse('{"foo":42,"bar":1337}'); // 🚀`

As the blog post says: for very small amounts of data it doesn't really matter, but for large amounts of data (10kb or greater) we should choose JSON.

As there is no downside to JSON, even for small amounts of data, we recommend JSON for all data.

This might mean that we have serverside templates that include JSON looking like:

```html
<script type="application/json">{"colour":"#ff0000"}</script>
```

## 2. Mounting Components

With serverside HTML we often know the location in the DOM where we want to mount a JavaScript component, so we could produce HTML that looks like,

```html
<div data-component="MyHeader"></div>
```

Then on `DOMContentLoaded` we `document.querySelectorAll("[data-component]");` and use the attribute value to choose a component id, (eg) the `MyHeader` component.

The code to do that might look like,

```typescript
const components = document.querySelectorAll("[data-component]");

[...components].forEach((container: HTMLElement): void => {
  const componentId = container.getAttribute("data-component");
    
  switch(componentId) {
     case "MyHeader":
       ReactDOM.render(<MyHeader />, container);
       break;
  }
});
```

## Combining 1 & 2...

```html
<div data-component="MyHeader" data-component-config="my-unique-id"></div>
<script type="application/json" id="my-unique-id">{"colour":"#ff0000"}</script>
```

The code to use that might look like,

```typescript
const components = document.querySelectorAll("[data-component]");

[...components].forEach((container: HTMLElement): void => {
  const config = getConfig(container);

  switch(componentId) {
     case "MyHeader":
       const props: MyHeaderProps = JSON.parse(config);
       ReactDOM.render(<MyHeader {...props} />, container);
       break;
  }
});

const getConfig = (container: HTMLElement): string => {
  const jsonConfigId = container.getAttribute("data-component-config");
  const jsonScript = jsonConfigId && document.getElementById(jsonConfigId);
  return jsonScript ? jsonScript.textContent : "{}";
}
```

(this code hasn't yet been tested but it should convey the idea)

# Other considerations

## Security

Be aware that JSON when used in HTML needs to be HTML escaped too, or else this exploit could be used

```html
<script type="application/json" id="my-unique-id">{"html":"text </script> more text"}</script>
```

this should be encoded as,

```html
<script type="application/json" id="my-unique-id">{"html":"text &lt;/script&gt; more text"}</script>
```

## Lazy loading

To reduce the initial JavaScript bundle size consider whether components should be lazy loaded with the `import()` function.

```typescript
  switch(componentId) {
     case "MyHeader":       
       import("./MyHeader").then(module => {
           const MyHeader = module.default;
           const props: MyHeaderProps = JSON.parse(config);
           ReactDOM.render(<MyHeader {...props} />, container);
       }
       break;
  }
```

Don't do this for components that are used on every page (eg. primary nav).

## Progressive enhancement

There's no need for the container to be a `<div>` or for it to be empty, so consider including serverside templates that are progressively enhanced with JavaScript components. Eg.

```html
<div data-component="MyHeader" data-component-config="my-unique-id" class="header">
  <a href="/" class="header__link">Home</a>
  <a href="/about" class="header__link">About</a>
</div>
<script type="application/json" id="my-unique-id">{"links":[{"href":"/","text":"Home"},{"href":"/about","text":"About"}]}</script>
```

This does mean writing the HTML twice (in the serverside template, and in JSX) but the CSS can be reused. While the serverside templating language is different to the clientside language this is probably the best we can hope for.
