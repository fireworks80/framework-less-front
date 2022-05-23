import getTodos from './getTodos.js';
import todoView from './view/todos.js';
import counterView from './view/counter.js';
import filterView from './view/filters.js';
import appView from './view/app.js';
import registry from './registry.js';
import applyDiff from './applyDiff.js';

registry.add('app', appView);
registry.add('todos', todoView);
registry.add('counter', counterView);
registry.add('filters', filterView);

const state = {
  todos: getTodos(),
  currentFilter: 'Active',
};

const render = () => {
  requestAnimationFrame(() => {
    const main = document.querySelector('#root');
    const newMain = registry.renderRoot(main, state);

    applyDiff(document.body, main, newMain);
  });
};

render();
