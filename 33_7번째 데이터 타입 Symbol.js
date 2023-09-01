const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);

const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");
const a1 = Symbol("mySymbol");
const a2 = Symbol("mySymbol");

console.log(s1 === s2);
console.log(a1 === a2);

const Direction = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};
console.log(Direction);
