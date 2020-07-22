import React from 'react';
import ReactDOM from 'react-dom';

const SomeReactComponent = (): JSX.Element => {
  return (
    <div>
      <p>This is a different react component.</p>
      <p>[Here is some more JSX]</p>
    </div>
  );
};

export default function SomeReactComponentInit(container: Element): void {
  ReactDOM.render(<SomeReactComponent />, container);
}
