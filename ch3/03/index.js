// import getTodos from './getTodos.js';
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
  todos: [],
  currentFilter: 'Active',
};

const events = {
  deleteItem: (index) => {
    state.todos.splice(index, 1);
    render();
  },
  addItem: (text) => {
    state.todos.push({ text, completed: false });
    render();
  },
  updateItem: (index, text) => {
    state.todos[index].text = text;
    render();
  },
  toggleItemCompleted: (index) => {
    const { completed } = state.todos[index];
    state.todos[index].completed = !completed;
    render();
  },
  completeAll: () => {
    state.todos.forEach((todo) => (todo.completed = true));
    render();
  },
  clearCompleted: () => {
    state.todos = state.todos.filter((todo) => !todo.completed);
    render();
  },
  changeFilter: (filter) => {
    state.currentFilter = filter;
    render();
  },
};

const render = () => {
  requestAnimationFrame(() => {
    const main = document.querySelector('#root');
    const newMain = registry.renderRoot(main, state, events);

    applyDiff(document.body, main, newMain);
  });
};

render();
