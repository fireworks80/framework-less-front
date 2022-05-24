let template;

const createNewTodoNode = () => {
  if (!template) {
    template = document.querySelector('#todo-item');
  }
  return template.content.firstElementChild.cloneNode(true);
};

const getTodoElement = (todo, index) => {
  const { text, completed } = todo;

  const element = createNewTodoNode();

  element.querySelector('.edit').value = text;
  element.querySelector('label').textContent = text;

  if (completed) {
    element.classList.add('completed');
    element.querySelector('.toggle').checked = true;
  }

  element.querySelector('.destroy').dataset.index = index;
  element.querySelector('.toggle').dataset.index = index;
  element.querySelector('.edit').dataset.index = index;

  return element;
};

export default (targetElement, { todos }, { toggleItemCompleted, deleteItem, updateItem }) => {
  const newTodoList = targetElement.cloneNode(true);

  newTodoList.innerHTML = '';

  todos.map((todo, index) => getTodoElement(todo, index)).forEach((element) => newTodoList.appendChild(element));

  newTodoList.addEventListener('click', (e) => {
    if (e.target.matches('.destroy')) {
      deleteItem(e.target.dataset.index);
    }

    if (e.target.matches('.toggle')) {
      toggleItemCompleted(e.target.dataset.index);
    }
  });

  newTodoList.addEventListener('dblclick', (e) => {
    if (e.target.matches('label')) {
      e.target.parentElement.parentElement.classList.add('editing');
      e.target.parentElement.parentElement.querySelector('.edit').focus();
    }
  });

  newTodoList.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;
    updateItem(e.target.dataset.index, e.target.value);
  });

  return newTodoList;
};
