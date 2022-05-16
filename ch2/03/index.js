import getTodos from './getTodos.js';
import todosView from './views/todos.js';
import countView from './views/count.js';
import filtersView from './views/filters.js';
import registry from './registry.js';

registry.add('todos', todosView);
registry.add('counter', countView);
registry.add('filters', filtersView);

const state = {
  todos: getTodos(),
  currentFilter: 'Active',
};

requestAnimationFrame(() => {
  const main = document.querySelector('.todoapp');
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});
