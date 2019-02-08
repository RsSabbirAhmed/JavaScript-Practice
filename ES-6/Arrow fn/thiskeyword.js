// EXAMPLE 1

// const num = {
//   value:100,
//   info: function info() {
//     console.log(this); // num object
//     return this.value;
//   }
// };
// console.log(num.info());



// Arrow function doesn't have it's own "this", and that's why when arrow function use "this" keyword is indicates outer scope. And outer scope is "window" object.

const num = {
  value: 100,
  info:() => {
    console.log(this); // window
    return this.value;
  }
};
console.log(num.info());