import todosView from './view/todos.js';
import counterView from './view/counter.js';
import filtersView from './view/filters.js';

export default (targetElement, state) => {
  const { todos, currentFilter } = state;
  const element = targetElement.cloneNode(true);
  const list = element.querySelector('.todo-list');
  const count = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.replaceWith(todosView(list, todos));
  count.replaceWith(counterView(count, todos));
  filters.replaceWith(filtersView(filters, currentFilter));

  return element;
};
