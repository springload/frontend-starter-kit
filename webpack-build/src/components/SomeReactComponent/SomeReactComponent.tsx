import React from 'react';
import ReactDOM from 'react-dom';

// type Props = {
//   example: string;
// };

const SomeReactComponent = (): JSX.Element => {
  return (
    <div>
      <p>This is a react component.</p>
      <p>[Here is some JSX]</p>
      {/* {props.example} */}
    </div>
  );
};

export default function SomeReactComponentInit(container: Element): void {
  ReactDOM.render(<SomeReactComponent />, container);
}
