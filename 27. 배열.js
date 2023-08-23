const arr = [];
arr[0] = function con() {
  console.log(123);
};
arr[0];

const arr1 = [1, 2, 3, 4, 5];
arr1.length = 3;
console.log(arr1);

const arr2 = [1, 2];
arr2.length = 5;
console.log(arr2);

const arr3 = [, 2, , 4, 5];
console.log(arr3);

const arr4 = Array.from({ length: 3 }, (_, i) => i);
console.log(arr4);
let str = "HEllo";
const arr5 = str.split("");
const arr6 = Array.from(str);
console.log(arr5);
console.log(arr6);

const arr7 = [];
arr7[0] = 1;
arr7["1"] = 2;
arr7["foo"] = 3;
arr7.bar = 4;
arr7[1.1] = 5;
arr7[-1] = 6;
console.log(arr7);
console.log(arr7.length);
