const button = document.querySelector('button');
const firstHandler = () => {
  console.log('first handler');
};
const secondHandler = () => {
  console.log('second handler');
};

button.addEventListener('click', firstHandler);
button.addEventListener('click', secondHandler);

setTimeout(() => {
  button.removeEventListener('click', firstHandler);
  button.removeEventListener('click', secondHandler);
}, 1000);
