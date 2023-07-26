const person = new Object();
person.name = "Lee";
person.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};
console.log(person);
person.sayHello();

function Circle(radius) {
  this.radius = radius;
  this.getDiamer = function () {
    return 2 * this.radius;
  };
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiamer());
console.log(circle2.getDiamer());

const circle3 = Circle(20);
console.log(circle3);
console.log(radius);

function foo() {}
foo.age = 20;
foo.hello = function () {
  console.log(this.age);
};
console.log(foo);
foo.hello();

function foo1() {}
const bar = function () {};
const baz = {
  x: function () {},
};

console.log(new foo1());
console.log(new bar());
// new bar.x(); // TypeError: bar.x is not a constructor
const arrow = () => {};
// new arrow(); // TypeError: arrow is not a constructor
const obj = {
  x() {},
};
// new obj.x(); // TypeError: obj.x is not a constructor
