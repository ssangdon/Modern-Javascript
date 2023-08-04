const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.radius;
  },
};
console.log(circle.getDiameter());

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};
const circle2 = new Circle();
// this는 어디든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this);

function sqaure(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this); // window
  return number * number;
}
sqaure(2);

const person = {
  name: "Lee",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // {name : "Lee", getName: f}
    return this.name;
  },
};
console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  console.log(this); // Person {name : "Lee"}
}

const me = new Person("Lee");

// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.log(this);
};
// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo();

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo();

// 3. 생성자 함수 소출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo();

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: "bar" };
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();

const person2 = {
  name: "Lee",
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    return this.name;
  },
};
console.log(person2.getName()); // Lee

const person3 = {
  name: "Kim",
};

person3.getName = person2.getName;
console.log(person3.getName());

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};
const me2 = new Person("Lee");
console.log(me.getName());
Person.prototype.name = "Kim";
console.log(Person.prototype.getName());

function getThisBinding() {
  return this;
}
// this로 사용할 객체
const thisArg = { a: 1 };
console.log(getThisBinding());

console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));
let a = getThisBinding.bind(thisArg);

console.log(getThisBinding());

function foo3() {
  console.log("foo3's this : ", this);
  function bar3() {
    console.log("bar3's this : ", this);
  }
  bar3();
}
foo3();

var value = 1;
const obj2 = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // obj2
    console.log("foo's this.value : ", this.value); // 100
    // 메서드 내에서 정의한 중첩 함수
    function bar() {
      console.log("bar's this : ", this); // window
      console.log("bar's this.value : ", this.value); // 1
    }
    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는
    // 전역 객체가 바인딩된다.
    bar();
  },
};
obj2.foo();

var value = 1;
const obj3 = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // {value : 100, foo : f}
    setTimeout(function () {
      console.log("callback's this:", this); // window
      console.log("callback's this.value:", this.value); // 1
    }, 100);
  },
};
obj3.foo();

var value = 1;
const obj4 = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // {value : 100, foo : f}
    const that = this;
    setTimeout(function () {
      console.log("callback's this:", that); // {value : 100, foo : f}
      console.log("callback's this.value:", that.value); // {value : 100, foo : f}
    }, 100);
  },
};
obj4.foo();

var value = 1;
const obj5 = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // {value : 100, foo : f}
    setTimeout(
      function () {
        console.log("callback's this:", this); // {value : 100, foo : f}
        console.log("callback's this.value:", this.value); // {value : 100, foo : f}
      }.bind(this),
      100
    );
  },
};
obj5.foo();

var value = 1;
const obj6 = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // {value : 100, foo : f}
    setTimeout(() => {
      console.log(this); // {value : 100, foo : f}
      console.log(this.value); // 100
    }, 100);
  },
};
obj6.foo();
