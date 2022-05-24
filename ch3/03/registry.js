const registry = {};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderWrapper = (component) => {
  return (targetElement, state, events) => {
    const element = component(targetElement, state, events);
    const children = element.querySelectorAll('[data-component]');

    Array.from(children).forEach((el) => {
      const child = el.dataset.component;

      if (!registry[child]) return;

      el.replaceWith(registry[child](el, state, events));
    });

    return element;
  };
};

const renderRoot = (root, state, events) => {
  const cloneComponent = (root) => root.cloneNode(true);

  return renderWrapper(cloneComponent)(root, state, events);
};

export default {
  add,
  renderRoot,
};
