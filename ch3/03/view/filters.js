export default (targetElement, { currentFilter }) => {
  const element = targetElement.cloneNode(true);

  Array.from(element.querySelectorAll('a')).forEach((elem) => {
    elem.textContent === currentFilter ? elem.classList.add('selected') : elem.classList.remove('selected');
  });

  return element;
};
