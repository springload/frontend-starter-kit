import React from 'react';
import ReactDOM from 'react-dom';

export default function SomeReactComponentInit(container: Element): void {
  // Most components should be lazy-loaded like this.
  // If your component is super-important and on every page (e.g. the main nav),
  // maybe don't lazy-load it.
  import('./SomeReactComponent').then((module) => {
    const SomeReactComponent = module.default;
    ReactDOM.render(<SomeReactComponent />, container);
  });
}
