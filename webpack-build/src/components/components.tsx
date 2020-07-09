import SomeReactComponentInit from './SomeReactComponent/SomeReactComponent';

const markerAttributeName = 'data-component';
const components = document.querySelectorAll(`[${markerAttributeName}]`);

[...components].forEach((container: HTMLElement): void => {
  const componentName = container.getAttribute(markerAttributeName);
  if (!componentName) {
    console.error(`Invalid marker attribute ${markerAttributeName}`, container);
    throw Error('Invalid marker attribute on container. See console.');
  }

  switch (componentName) {
    case 'some-react-component':
      SomeReactComponentInit(container);
      break;

    default:
      throw Error(`Invalid component id "${componentName}"`);
  }
});
