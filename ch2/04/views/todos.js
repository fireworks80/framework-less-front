const getTodoElement = (todo) => {
  const { text, completed } = todo;
  return `
    <li ${completed ? 'class="completed"' : ''}>
      <div className="view">
        <input ${completed ? 'checked' : ''} type="checkbox"  class="toggle">
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}">
    </li>
  `;
};

export default (targetEl, state) => {
  const { todos } = state;
  const element = targetEl.cloneNode(true);

  element.innerHTML = todos.map(getTodoElement).join('');
  return element;
};
