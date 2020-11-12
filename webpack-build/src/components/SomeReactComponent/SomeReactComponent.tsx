import React from 'react';
import ReactDOM from 'react-dom';
import '../../scss/components/some-react-component.scss';

type Props = {
  pageTitle: string;
};

const SomeReactComponent = ({ pageTitle }: Props): JSX.Element => {
  return (
    // the css is created in scss/components/some-react-component.scss
    <div className="some-react-component">
      This is a react component. Here is a prop: <em>{pageTitle}</em>
    </div>
  );
};

export function initComponent(container: Element, pageTitle: string): void {
  ReactDOM.render(<SomeReactComponent pageTitle={pageTitle} />, container);
}

export default SomeReactComponent;
