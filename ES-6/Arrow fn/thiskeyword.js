// // EXAMPLE 1

// const num = {
//   value:100,
//   info: () => {
//     console.log(this); // window
//     return this.value;
//   }

//   // info: function info() {
//   //   console.log(this); // num object
//   //   return this.value;
//   // }
// };
// console.log(num.info());


// Arrow function doesn't have it's own "this", and that's why when arrow function use "this" keyword is indicates outer scope. And outer scope is "window" object.

// const num = {
//   value: 100,
//   info:() => {
//     console.log(this); // window
//     return this.value;
//   }
// };
// console.log(num.info());


// // EXAMPLE 2

// const anotherNum = {
//   value:5,
//   // info: () => {
//   //   console.log(this); // still window
//   //   return this.value;
//   // }

//   info: function info() {
//     // console.log(this); // newNum object if called with info.call(newNUum)
//     return this.value;
//   }
// };
// const newNum = {
//   value: 17
// }
// console.log(anotherNum.info.call(newNum));




// EXAMPLE 3

const str = {
  value: "Delayed greeting",

  
//   // "this is lost in the callback function"
//   greet: function greet() {
//     setTimeout(function () {
//       console.log(this); // window
//       console.log(this.value); // undefined
//     }, 1000);
//   }


//   // Option 1

//   greet: function greet() {
//     const self = this;
// setTimeout(function() {
//   console.log(self);
  
//   console.log(self.value); // "Delayed greeting"
  
// }, 1000);
//   }


  // // Option 2

  //  greet: function greet() {
  //   setTimeout(function () {
  //     console.log(this); // str object
  //     console.log(this.value); // "Delayed greeting"
  //   }.bind(this), 1000);
  // }




  // Option 3

  greet: function greet() {
    setTimeout( () => {
      console.log(this); // str object
      console.log(this.value); // "Delayed greeting"
    }, 1000);
  }
};
str.greet();