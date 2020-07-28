/** @jsx h */

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

const SomePreactComponent = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount((currentCount: number) => currentCount - 1);

  return (
    <div>
      <p>
        This is a preact component. Note the use of "/** @jsx h */" - this is
        important
      </p>
      <p>Here's a quick counter app using preact:</p>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      &nbsp;
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export function initComponent(container: Element): void {
  // preact appends to your container instead of replacing content,
  // so you may want to do something like this
  container.innerHTML = '';

  render(<SomePreactComponent />, container);
}

export default SomePreactComponent;
