// what is const?

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }
// const myConst = [];
// myConst.push('newElements');
// console.log(myConst);

// let pi = Math.PI;
// console.log(pi);

// Histing 

const e = 5;
function fn() {
  const d =55;
  console.log(d);

} 
fn();





/**
 * Variable Usage Guidelines
 * 
 * 1. Make code Readable for other developers
 * 2. Always declare variables before first usage
 * 3. Always add "use strict" at the beginning of each JS file
 * 4. Don't expose to the outer scopes locally used variables
 */