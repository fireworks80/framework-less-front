let template;

const getTemplate = () => {
  if (!template) {
    template = document.querySelector('#todo-app');
  }

  return template.content.firstElementChild.cloneNode(true);
};

const addEvents = (targetElement, { addItem, clearCompleted }) => {
  targetElement.querySelector('.new-todo').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;
    addItem(e.target.value);
    e.target.value = '';
  });

  targetElement.querySelector('.clear-completed').addEventListener('click', clearCompleted);
};

export default (targetElement, state, events) => {
  const newApp = targetElement.cloneNode(true);

  newApp.innerHTML = '';
  newApp.appendChild(getTemplate());
  addEvents(newApp, events);
  return newApp;
};
