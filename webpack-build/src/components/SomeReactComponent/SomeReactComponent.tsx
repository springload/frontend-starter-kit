import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  pageTitle: string;
};

const SomeReactComponent = ({ pageTitle }: Props): JSX.Element => {
  return (
    <div>
      This is a react component. Here is a prop: <em>{pageTitle}</em>
    </div>
  );
};

export function DOMRender(container: Element, pageTitle: string): void {
  ReactDOM.render(<SomeReactComponent pageTitle={pageTitle} />, container);
}

export default SomeReactComponent;
