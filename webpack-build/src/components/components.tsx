import SomeReactComponentInit from './SomeReactComponent/SomeReactComponentInit';

const markerAttributeName = 'data-component';

function ComponentInit(container: HTMLElement): void {
  const componentName = container.getAttribute(markerAttributeName);
  if (!componentName) {
    console.error(`Invalid marker attribute ${markerAttributeName}`, container);
    throw Error('Invalid marker attribute on container. See console.');
  }

  switch (componentName) {
    case 'some-react-component':
      SomeReactComponentInit(container);
      break;

    // case 'some-other-component': etc...

    default:
      throw Error(`Invalid component id "${componentName}"`);
  }
}

export default function ComponentsInit(): void {
  const containers = document.querySelectorAll<HTMLElement>(
    `[${markerAttributeName}]`,
  );
  containers.forEach((container) => {
    ComponentInit(container);
  });
}
