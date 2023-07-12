var x = 10;
var str = x + "";
let k = 10;
let str1 = "" + k;

console.log(typeof str, str);
console.log(typeof x, x);

//암묵적 타입 변환
console.log("10" + 2); // 102

// + 연산자는 피연산자중 하나 이상이 문자열이면 문자열 연결 연산자로 동작한다.
console.log("1" + 1);
console.log(1 + "1");

console.log("1" - 1);
console.log(1 - "1");

console.log(str1);
console.log(typeof str1, str1);

//9.4 단축평가
//9.4.1 논리 연산자를 사용한 단축 평가
console.log("Cat" && "Dog");
console.log("Cat" || "Dog");

let done = true;
let message = "";
// if(done) message = '완료';
message = done && "완료";
console.log(message);

const getStringLen = (str = "") => {
  return str.length;
};
console.log(getStringLen());
console.log(getStringLen("123123"));

let elem = null;
let value = elem?.value;
console.log(value);
