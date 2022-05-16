export default (targetEl, { currentFilter }) => {
  const element = targetEl.cloneNode(true);

  Array.from(element.querySelectorAll('a')).forEach((a) => {
    currentFilter === a.textContent ? a.classList.add('selected') : a.classList.remove('selected');
  });

  return element;
};
