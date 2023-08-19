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
