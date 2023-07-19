function add(x, y) {
  return x + y;
}
let result = add(1, 2);
console.log(result);

var f = function add1(x, y) {
  return x + y;
};

var k = 0;

var add = function (x, y) {
  return x + y;
};

console.log(add(3, 5));

var a = function d(x, y) {
  return x + y;
};

console.dir(add); // f add(x,y)
console.dir(sub); // undefined

console.log(add(2, 5)); // 7
// console.log(sub(5, 2)); // TypeError: sub is not a function

function add(x, y) {
  return x + y;
}

var sub = function (x, y) {
  return x - y;
};

function add(x, y) {
  console.log(arguments);
  //Arguments(3) [2,5,10, callee: f, Symbol(Symbol.iterator): f]
  return x + y;
}
add(2, 5, 10);
