const button = document.querySelector('button');
const div = document.querySelector('div');

// useCapture false
// div.addEventListener(
//   'click',
//   () => {
//     console.log('div click');
//   },
//   false
// );

// button.addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation();
//     console.log('button click');
//   },
//   false
// );
// useCapture true
div.addEventListener(
  'click',
  () => {
    console.log('div click');
  },
  true
);

button.addEventListener(
  'click',
  (e) => {
    console.log('button click');
  },
  true
);
