import getTodos from './getTodos.js';
import todosView from './views/todos.js';
import countView from './views/count.js';
import filtersView from './views/filters.js';
import registry from './registry.js';
import applyDiff from './applyDiff.js';

registry.add('todos', todosView);
registry.add('counter', countView);
registry.add('filters', filtersView);

const state = {
  todos: getTodos(),
  currentFilter: 'Active',
};

const render = () => {
  requestAnimationFrame(() => {
    const main = document.querySelector('.todoapp');
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);

render();
