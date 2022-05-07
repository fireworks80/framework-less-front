const { faker } = window;

const createElement = () => ({
  text: faker.random.word(2),
  completed: faker.random.boolean(),
});
const repeat = (() => {
  const _repeat = (elementFactory, number, acc) =>
    acc.length < number ? _repeat(elementFactory, number, [...acc, elementFactory()]) : acc;
  return (elementFactory, number) => _repeat(elementFactory, number, []);
})();

export default () => {
  const howMany = faker.random.number(10);
  return repeat(createElement, howMany);
};
