const x = 1;
function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x); // 10
  }
  innerFunc();
}
outerFunc();

const x1 = 1;
function foo() {
  const x1 = 10;
  bar();
}
function bar() {
  console.log(x1);
}
foo(); // 1
bar(); // 1

const makeIncrease = function () {
  let num = 0;
  return function () {
    return ++num;
  };
};
let increase = makeIncrease();
console.log(increase());
console.log(increase());
console.log(increase());

const Counter = function () {
  let num = 0;
  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return --num;
  };
};

const a1 = new Counter();
const a2 = new Counter();
console.log(a1.increase());
console.log(a1.increase());
console.log(a2.increase());

console.log(a2.increase());

function Person(name, age) {
  this.name = name;
  let _age = age;
  Person.prototype.sayHi = function () {
    console.log(`${this.name} + ${_age}`);
  };
}

const me = new Person("sangdon", 26);
const you = new Person("rk", 20);
me.sayHi();
you.sayHi();
me.sayHi();
