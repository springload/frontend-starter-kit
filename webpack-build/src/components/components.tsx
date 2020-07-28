const markerAttributeName = 'data-component';

function ComponentInit(container: HTMLElement, componentData: unknown): void {
  const componentName = container.getAttribute(markerAttributeName);
  if (!componentName) {
    console.error(`Invalid marker attribute ${markerAttributeName}`, container);
    throw Error('Invalid marker attribute on container. See console.');
  }

  function mountAsyncComponent(asyncComponent: Promise<any>): void {
    asyncComponent.then((module) => {
      const { initComponent } = module;
      initComponent(container, componentData);
    });
  }

  function mountAsyncVanillaComponent(asyncComponent: Promise<any>): void {
    asyncComponent.then((module) => module.default(container, componentData));
  }

  switch (componentName) {
    case 'some-react-component':
      mountAsyncComponent(import('./SomeReactComponent/SomeReactComponent'));
      break;

    case 'some-preact-component':
      mountAsyncComponent(import('./SomePreactComponent/SomePreactComponent'));
      break;

    case 'vanilla-js-component':
      mountAsyncVanillaComponent(
        import('./SomeVanillaJsComponent/SomeVanillaJsComponent'),
      );
      break;

    default:
      throw Error(`Invalid component id "${componentName}"`);
  }
}

export default function ComponentsInit(): void {
  const containers = document.querySelectorAll<HTMLElement>(
    `[${markerAttributeName}]`,
  );

  containers.forEach((container) => {
    const componentDataId = container.getAttribute('data-component-id');
    let componentData;

    if (componentDataId) {
      const dataEl = document.getElementById(componentDataId);
      const data = dataEl?.innerHTML;
      if (data) {
        componentData = JSON.parse(data);
      }
    }

    ComponentInit(container, componentData);
  });
}
