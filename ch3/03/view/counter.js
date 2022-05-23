const getTodoCount = (todos) => {
  const { length } = todos;

  return length === 1 ? '1 Item left' : `${length} Items left`;
};

export default (targetElement, { todos }) => {
  const element = targetElement.cloneNode(true);
  element.textContent = getTodoCount(todos);
  return element;
};
