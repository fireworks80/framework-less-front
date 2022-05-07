export default (targetElement, currentFilter) => {
  const newFilter = targetElement.cloneNode(true);

  Array.from(newFilter.querySelectorAll('a')).forEach((a) => {
    currentFilter === a.textContent ? a.classList.add('selected') : a.classList.remove('selected');
  });

  return newFilter;
};
