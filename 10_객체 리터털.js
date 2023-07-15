var person = {
  name: "Lee",
  sayHi: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};
console.log(typeof person);

var ex1 = {
  firstName: "Lee",
  "last-name": "Sang Don",
};
console.log(ex1.firstName, ex1["last-name"]);

var ex2 = {};
var key = "hello";
ex2[key] = "world";
console.log(ex2);

var ex3 = {
  "": "",
};
ex3[3] = 3;
console.log(ex3);

var ex4 = {
  name: "Lee",
  name: "Kim",
};
console.log(ex4);

var ex5 = {
  "last-name": "Lee",
  1: 10,
};
console.log(ex5["last-name"]);
console.log(ex5[1]);
console.log(ex5["1"]);

var ex6 = {
  name: "Lee",
};
ex6.age = 10;
console.log(ex6);
delete ex6.age;
console.log(ex6);
delete ex6.address;
console.log(ex6);

var x = 1,
  y = 2;
var ex7 = {
  x: x,
  y: y,
};
console.log(ex7);

var ex8 = { x, y };
for (var k = 0; k < 2; k++) {
  ex8 = { ...ex8, k };
}
console.log(ex8);

const prefix = "prop";
let i = 0;
const ex9 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(ex9);
