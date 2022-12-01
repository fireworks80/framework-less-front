import HelloWorld from './custom-element.js';

window.customElements.define('hello-world', HelloWorld);

const changeColorTo = (color) => {
  document.querySelectorAll('hello-world').forEach((helloWorld) => {
    // console.log(helloWorld);
    helloWorld.color = color;
  });
};

document.querySelector('button').addEventListener('click', () => changeColorTo('blue'));
