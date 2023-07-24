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
