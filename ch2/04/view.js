export default (targetEl, state) => {
  const { todos, currentFilter } = state;
  const element = targetEl.cloneNode(true);
  const list = element.querySelector('.todo-list');
  const counter = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.replaceWith(todosView(list, todos));
  counter.replaceWith(countView(counter, todos));
  filters.replaceWith(filtersView(filters, currentFilter));

  return element;
};
