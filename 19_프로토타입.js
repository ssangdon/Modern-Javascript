// const circle = {
//   radius: 5,
//   getDiamerter() {
//     return 2 * this.radius;
//   },
//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   },
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   },
// };

// console.log(circle);
// console.log(circle.getArea());
// console.log(circle.getDiamerter());
// console.log(circle.getPerimeter());

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};
const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(circle1.getArea === circle2.getArea);
console.log(circle1.getArea());
console.log(circle2.getArea());

const obj = {};
const parent = { x: 1 };
console.log(obj.__proto__);
obj.__proto__ = parent;
console.log(obj);
