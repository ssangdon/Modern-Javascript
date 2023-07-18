// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};
// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o);

var str = "string";
str[0] = "S";
// 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
console.log(str); // string

var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // 80

var ex1 = "Hello";
var ex2 = ex1;
ex1 = "KIKI";
console.log(ex1);
console.log(ex2);

var person = {
  name: "Lee",
};
// 프로퍼티 값 갱신
person.name = "Kim";

// 프로퍼티 동적 생성
person.address = "Seoul";

console.log(person); //{name: "Kim", address: "Seoul"}

var person = {
  name: "Lee",
};
var copy = person;

console.log(copy === person); // true
copy.name = "Kim";
person.address = "Seoul";

console.log(person); // {name: 'Kim', address: "Seoul"}
console.log(copy); // {name: 'Kim', address: "Seoul"}

var person1 = {
  name: "Lee",
};
var person2 = {
  name: "Lee",
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true
