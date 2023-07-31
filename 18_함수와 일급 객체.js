// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임에 할수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};
// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };
// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;
  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());

function sum() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

function sum2() {
  let arr = Array.prototype.slice.call(arguments);
  return arr.reduce((prev, now) => prev + now, 0);
}

console.log(sum2(1));
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3));

function sum3(...args) {
  return args.reduce((prev, now) => (prev += now));
}
console.log(sum3(1));
console.log(sum3(1, 2));
console.log(sum3(1, 2, 3));

var anony = function () {};
console.log(anony.length);
console.log(anony.name);

function Test() {}
Test.sum = function () {
  return 1 + 1;
};
Test.prototype.sum = function () {
  return 2 + 2;
};

let test = new Test();
console.dir(test);

function T() {
  this.sum = function () {
    return 1 + 1;
  };
}
T.prototype.sum = function () {
  return 2 + 2;
};

var t = new T();
