var x = 1;
if (1) {
  var x = 10;
}
console.log(x);

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

console.log(foo);
foo = 123;
console.log(foo);
var foo;

var foo = 123;
var foo = 456;
let bar = 123;
// let bar = 456;

let a = 1;
{
  let a = 10;
}
console.log(a);

const person = {
  name: "Lee",
};
person.name = "Kim";
console.log(person);

// let foo = 1;
// {
//   console.log(foo); // ReferenceError : Cannot access 'foo' before initialization
//   let foo = 2;
// }
