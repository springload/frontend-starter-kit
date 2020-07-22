import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  pageTitle: string;
};

const SomeReactComponent = ({ pageTitle }: Props): JSX.Element => {
  return <div>{pageTitle} (this is the react content)</div>;
};

export default function SomeReactComponentInit(
  container: Element,
  pageTitle: string,
): void {
  ReactDOM.render(<SomeReactComponent pageTitle={pageTitle} />, container);
}
