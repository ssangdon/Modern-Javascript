const target = "IS HI MOVE WHEN I KEY";
const regExp = /IS/i;
const regExp2 = /is/gi;
console.log(regExp.test(target));

const target1 = "Is this all there is?";
console.log(regExp.exec(target1));
console.log(target1.match(regExp2));

const regExp3 = /.../gi;
console.log(target.match(regExp3));
