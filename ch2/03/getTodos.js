const { faker } = window;

const createElement = () => ({
  text: faker.random.word(2),
  completed: faker.random.boolean(),
});

const repeat = (() => {
  const _repeat = (fn, number, acc) => (acc.length < number ? _repeat(fn, number, [...acc, fn()]) : acc);
  return (fn, number) => _repeat(fn, number, []);
})();

export default () => {
  const howMany = faker.random.number(10);
  return repeat(createElement, howMany);
};
