var x = "global";

function foo() {
  console.log(x); // undefined
  var x = "local";
}
foo();
console.log(x); // global

(function () {
  var foo = 10;
  console.log(foo);
})();

console.log(foo);

var a = (function () {
  var num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
a.increase();
