const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);
    const childComponent = element.querySelectorAll('[data-component]');

    Array.from(childComponent).forEach((target) => {
      const name = target.dataset.component;
      const child = registry[name];

      if (!child) return;

      target.replaceWith(registry[name](target, state));
    });

    return element;
  };
};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderRoot = (root, state) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

export default {
  add,
  renderRoot,
};
