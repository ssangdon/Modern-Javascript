// var Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayHi = function () {
//     console.log(`Hi ${this.name}`);
//   };
//   return Person;
// })();

// var me = new Person("Lee");
// me.sayHi();

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
  static sayHello() {
    console.log("HIHI");
  }
}
const me = new Person("Lee");
Person.sayHello();
me.sayHi();

class Person1 {}
console.log(typeof Person1);

class Person2 {
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this);
    console.log(Object.getPrototypeOf(this) === Person2.prototype); // true
    // 2. this에 바인딩되어있는 인스턴스를 초기화한다.
    this.name = name;
    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

class Bird extends Animal {
  fly() {
    return "fly";
  }
}
const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
