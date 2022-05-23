import getTodos from './getTodos.js';
import todoView from './view/todos.js';
import counterView from './view/counter.js';
import filterView from './view/filters.js';
import registry from './registry.js';
import applyDiff from './applyDiff.js';

registry.add('todos', todoView);
registry.add('counter', counterView);
registry.add('filters', filterView);

const state = {
  todos: getTodos(),
  currentFilter: 'Active',
};

const render = () => {
  const main = document.querySelector('.todoapp');
  const newMain = registry.renderRoot(main, state);

  applyDiff(document.body, main, newMain);
};

setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);

render();
