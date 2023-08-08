// 전역 변수 선언
const x = 1;
const y = 2;
// 함수 정의
function foo(a) {
  // 지역 변수 선언
  const x = 10;
  const y = 20;
  // 메서드 호출
  console.log(a + x + y);
}
// 함수 호출
foo(100);

// 메서드 호출
console.log(x + y);

const x1 = 1;
function foo2() {
  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}
foo2();

let h = 0;
console.log(window);
