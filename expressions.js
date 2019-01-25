// /**
//  * EXPRESSIONS
//  */
// 10;
// "abc"
// 5 + 3;

// (function (a) {
//   console.log(a);
  
// });

// // Immediately Invoked Function Expression
//   (function () {
//   console.log("Hello from IIFE");
  
// })();



// /**
//  * STATEMENTS
//  */

//  let a; //Variable declaration is statement

//  a = 3

//  function myFunction(a) {
//    return a;
//  }
//  myFunction(a);



/**
 *JS-BASICS/CORE/CHALLENGES/03-EXPRESSIONS-V-S-STATEMENT
 * 
 * 
 */

 
// /**
// * TASK 1
// * 
// * Is it expression or statement?
// */

// const myObject = {
//   x:10,
//   y: true
// };
// console.log(delete myObject.x);// "delete" operator is used in the expressions

// // delete myObject.x;


// /**
//  * TASK 2
//  * 
//  * What will be logged to the console?
//  */

// function fn() {
//   console.log("Freeting from the 'fn' function");
  
//   return function (a) {
//     console.log(a);
    
//   };
  
// }
// fn()(true);

// // "fn()" Greeting from the 'fn function 
// // "true" because this line will be interpreted as function call with argument "true"



/**
 * TASK 3
 * 
 * Explain why semicolon is added?
 */

 function firstFunction(a,b) {
   return a + b;
 } // Function Declaration
 console.log(firstFunction(3,3));
 

 
 const secondFunction = function (a,b) {
   return a + b;
 };  //Statement
 console.log(secondFunction(5,5));
 