// //  EXAMPLE 1- Call - custom "this"

// const myObject = {
//   a: 10,
//   b: null
// };
// function myFunction() {
//   console.log(this);
  
// }
// myFunction(); // "this" is window
// myFunction.call(myObject); // "this" is {a: 10, b: null}






// //  EXAMPLE 2- Call - custom "this" and arguments

// const myObject = {
//   a: 10,
//   b: null
// };
// function myFunction(a, b) {
//   console.log(a + b);
//   console.log(this);
// }
// // myFunction(); // "this" is window
// myFunction.call(myObject, 10, 3); // "this" is {a: 10, b: null}





// // EXAMPLE 3 - Call - Call method of the object wiht other object as "this"

// const person1 = {
//   city: "Rangpur",
//   name: "Sabbir",
//   info: function () {
//     console.log(this.name + " Lives in " + this.city);   
//   }
// };

// const person2 = {
//   city: "Mynemsingh",
//   name: "Tanvir"
// };

// person1.info(); // Sabbir Lives in Rangpur

// person1.info.call(person2); // Tanvir Lives in Mynemsingh







// // EXAMPLE -4 - Apply - custom "this" and arguments


// const myObject = {
//   a: 10,
//   b: null
// };
// function myFunction(a, b, c) {
//   let sum = (a + b + c);
//   // console.log(this);

//   for (let key in this) {
//     if (typeof this[key] === "number") {
//       sum += this[key];
//     }
//   }

//   console.log(sum);
  
// }
// // myFunction(); // "this" is window
// myFunction.apply(myObject, [10, 3, 6]); // "this" is {a: 10, b: null}







//  EXAMPLE 5-  Bind

const myObject = {
  a: 10,
  b: null
};
function myFunction(a, b) {
  console.log(a + b);
  console.log(this);
} 
const customFunction =  myFunction.bind(myObject, 10, 3); // preset "this" and both arguments
customFunction();


const customFunction2 = myFunction.bind(myObject); // preset only "this"
customFunction2(20, 6); // call with custom arguments

const customFunction3 = myFunction.bind(myObject,50); // preset "this" and only first argument
customFunction3(30); // pass remaining arguments