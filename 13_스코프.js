var var1 = 1;
if (true) {
  var var2 = 2;
  if (true) {
    var var3 = 3;
  }
}

function foo() {
  var var4 = 4;
  function bar() {
    var var5 = 5;
  }
}

console.log(var1);
console.log(var2);
console.log(var3);
// console.log(var4);
// console.log(var5);

var x = "global";
function foo() {
  var x = "local";
  console.log(x);
}
foo(); // local
console.log(x); // global

var x = "global x";
var y = "global y";
function outer() {
  var z = "outer's local z";
  console.log(x);
  console.log(y);
  console.log(z);
  inner();
  function inner() {
    var x = "inner's local x";
    console.log(x);
    console.log(y);
    console.log(z);
  }
}
outer();

function foo1() {
  console.log("global");
}
function bar1() {
  function foo1() {
    console.log("local");
  }
  foo1();
}

bar1();

var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo();
bar();
