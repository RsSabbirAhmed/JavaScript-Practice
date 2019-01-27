// let a;
// let b;
// function myFn () {
//   let b;
//   a = true;
//   b = 10;
//   console.log(b);
  
// }  
// myFn();
// console.log(a);
// console.log(b);





// // Undeclared variable
// "use strict";
// function myFcn() {
//   a = 3;
//   console.log(a);
   
// }
// myFcn();
// console.log(a);



// /**
//  * EXAMPLE 1
//  * 
//  * Global scope
//  */
// // var a = 10;
// // console.log(a);


// function fn(a,b) {
//   console.log(a,b);
  
// }
// fn(a,b);



// /**
//  * TASK 1
//  * 
//  * Function scopes
//  */

//  const b = 2;
//  let d = 15;

//  function myFn1(a) {
//    let b;
//    let d = 10;
//    myFn2(b);
//  }
//  function myFn2(a) {
//    let c = 5;
//    console.log(a, b, c, d);
   
//  }
//  myFn1();



// /**
//  * TASK 2
//  * 
//  * Strict mode
//  */

//  "use strict";

//  function myFunction() {
//    let a = 2;
//    return a;
//  }
 
//  console.log(myFunction());
 



 /**
  * TASK 3
  * Callback function
  */
 setTimeout(function myFn(a) {
   console.log("hello rssabbir");
   
 }, 1000);
  // myFn(5);
