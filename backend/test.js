const test1 = [
  {
    id: 1,
    name: 'name1',
  },
  {
    id: 2,
    name: 'name2',
  },
  {
    id: 3,
    name: 'name3',
  },
];

const add = {
  id: 5,
  name: 'name5',
};

const test2 = [
  ...test1.slice(0, 1),
  { ...add },
  ...test1.slice(2, 3),
];

console.log(test1);
console.log(test2);
test1[0].id = 15;
test1[1].id = 15;

console.log(test2);
