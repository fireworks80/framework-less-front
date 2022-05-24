const addEvents = (element, changeFilter) => {
  element.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'a') return;

    changeFilter(e.target.textContent);
  });
};

export default (targetElement, { currentFilter }, { changeFilter }) => {
  const element = targetElement.cloneNode(true);

  Array.from(element.querySelectorAll('a')).forEach((elem) => {
    elem.textContent === currentFilter ? elem.classList.add('selected') : elem.classList.remove('selected');
  });

  addEvents(element, changeFilter);

  return element;
};
