const o = {};
// o.[[Prototype]]
console.log(o.__proto__);

const person = {
  name: "Lee",
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptors(person));
// 접근자 프로퍼티
const person1 = {
  firstName: "sangdon",
  lastName: "Lee",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
console.log(person1.firstName + " " + person1.lastName);
person1.fullName = "Lee gangdon";
console.log(person1);

console.log(person1.fullName);

let desciptor = Object.getOwnPropertyDescriptor(person1, "firstName");
console.log(desciptor);

desciptor = Object.getOwnPropertyDescriptor(person1, "fullName");
console.log(desciptor);

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));

const person2 = {
  age: 20,
};
console.log(Object.getOwnPropertyDescriptor(person2, "age"));
Object.defineProperty(person2, "firstName", {
  value: "Sangdon",
  writable: "true",
  enumerable: "true",
  configurable: "true",
});
Object.defineProperty(person2, "lastName", {
  value: "Lee",
});
let desciptor2 = Object.getOwnPropertyDescriptor(person2, "firstName");
console.log(desciptor2);

desciptor2 = Object.getOwnPropertyDescriptor(person2, "lastName");
console.log(desciptor2);
console.log(Object.keys(person2));

person2.lastName = "Kim";
console.log(person2);
delete person2.lastName;
console.log(desciptor2);

const person3 = {};
Object.defineProperties(person3, {
  firstName: {
    value: "Sangdon",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Lee",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});
console.log(person3.fullName);
person3.fullName = "Kim Gangdon";
console.log(person3.fullName);

const person4 = {
  name: "Lee",
};
console.log(Object.isExtensible(person4)); // true
//객체 확장 금지 구문
Object.preventExtensions(person4);
console.log(Object.isExtensible(person4)); // false

person4.age = 26;
console.log(person4); // {name : "Lee"}

//삭제는 가능하다.
delete person4.name;
console.log(person4); // {}

// Object.defineProperty(person4, "age", { value: 26 }); // TypeError: Cannot define property age, object is not extensible

const person5 = {
  name: "Lee",
};
console.log(Object.isSealed(person5)); // false
// 객체 밀봉 구문
Object.seal(person5);
console.log(Object.isSealed(person5)); // true
// 밀봉된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptor(person5, "name")); // { value: 'Lee', writable: true, enumerable: true, configurable: false }

// 프로퍼티 추가가 금지된다.
person5.age = 26;
console.log(person5); // {name : 'Lee'}

// 프로퍼티 삭제가 금지된다.
delete person5.name;
console.log(person5); // {name : 'Lee'}

// 프로퍼티 값 갱신은 가능하다.
person5.name = "Kim";
console.log(person5); // {name : 'Kim'}

// 프로퍼티 어트리뷰트 재정의가 금지된다.
// Object.defineProperty(person5, "name", { configurable: true }); //TypeError: Cannot redefine property: name

const person6 = {
  name: "Lee",
};

console.log(Object.isFrozen(person6)); //false
Object.freeze(person6);
console.log(Object.isFrozen(person6)); //true

// 동결된 객체는 writable과 configurable이 false다.
console.log(Object.getOwnPropertyDescriptor(person6, "name")); //{value: 'Lee', writable: false, enumerable: true, configurable: false}

// 프로퍼티 추가가 금지된다.
person6.age = 26;
console.log(person6); // {name : 'Lee'}

//프로퍼티 삭제가 금지된다.
delete person.name;
console.log(person6); // {name : 'Lee'}

// 프로퍼티 값 갱신이 금지된다.
person6.name = "Kim";
console.log(person6); // {name : 'Lee'}

//프로퍼티 어트리뷰트 재정의가 금지된다.
// Object.defineProperty(person6, "name", { configurable: true }); // TypeError: Cannot redefine property: name
