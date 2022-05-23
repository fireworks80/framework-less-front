const registry = {};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);
    const children = element.querySelectorAll('[data-component]');

    Array.from(children).forEach((el) => {
      const child = el.dataset.component;

      if (!registry[child]) return;

      el.replaceWith(registry[child](el, state));
    });

    return element;
  };
};

const renderRoot = (root, state) => {
  const cloneComponent = (root) => root.cloneNode(true);

  return renderWrapper(cloneComponent)(root, state);
};

export default {
  add,
  renderRoot,
};
