const getTodoElement = (todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ''}>
      <div class="view">
        <input 
          ${completed ? 'checked' : ''}
          class="toggle" type="checkbox">
        <label>${text}</label>
        <button class="destory"></button>
      </div>
      <input class="edit" value="${text}">
    </li>
  `;
};

const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);
  const { length } = notCompleted;

  return length === 1 ? '1 Item left' : `${length} Items left`;
};

export default (targetElement, state) => {
  const { todos, currentFilter } = state;
  const element = targetElement.cloneNode(true);
  const list = element.querySelector('.todo-list');
  const count = element.querySelector('.todo-count');
  const filters = element.querySelector('.filters');

  list.innerHTML = todos.map(getTodoElement).join('');
  count.textContent = getTodoCount(todos);
  Array.from(filters.querySelectorAll('a')).forEach((a) => {
    currentFilter === a.textContent ? a.classList.add('selected') : a.classList.remove('selected');
  });

  return element;
};
