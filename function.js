// let a = 5;
// let b = 3;
// function sum(a,b) {
//   let c =a + b;
//   let d = a-b;
//   console.log(c);
//   console.log(d);
  
  
// }
// sum(a,b);
// sum(13,34);

// example 2
// function myFn(a , b) {
//   let c;
//   a = a+1;
//   c = a + b;
//   return c;
// }

// console.log(myFn(41, 12));


/**
 * EXAMPLE 2
 */

// function myfunction(a,b) {
//   console.log(a);
//   console.log(b); 
//   return a; 

// }
// myfunction("j ",'h ');
// console.log(myfunction("6", '9 '));


/**
 * EXAMPLE 3
 * 
 * Function scope
 */
// function myFunction(a,b) {
//    console.log(a,b);
// }
// console.log(myFunction(3,2));

// // console.log(a);
// // console.log(b);


/**
 * EXAMPLE 4
 * 
 * Reuse parameter names
 */
// function myFunction1(a,b) {
//   console.log(a,b);
  
// }
// function myFunction2(a,b) {
//   console.log(a,b);
  
// }

// const a = true;
// const b = null;


// myFunction1(2,3);
// myFunction2(5,7);

// console.log(a);
// console.log(b);
// console.log(a,b);


/**
 * EXAMPLE 5
 * 
 * Add return
 */
// function sum(a,b) {
//   return a + b;
// }
// sum(10,5);
// console.log(sum(2,5));
// console.log(sum(10,3));
// console.log(sum("abe",2));
// console.log(sum());



/**
 * EXAMPLE 6
 * 
 * What happens after "return"?
 */
// function myFunction(a) {
//   console.log(a);
//    return a; // function stops after return statement
//   console.log(a);
//   const c = 20;
//   console.log(c);
  
// }
// myFunction(10);


/**
 * CHALLENGE 1
 * 
 * Create function called "mult" and it will have 3 parameters.
 * Create new variable and assign to it result of multiplication af al 3 parameters.
 * Print to the console result.
 * Dont't use "return".
 */

//  function mult(a,b,c) {
//   let d = a*b*c;
//    console.log(d);
//   //  return d;
//  }
//  mult();
// mult(2, 3, 5);
// mult(2, 3, "abc");
// // console.log(mult(2,3,4));


/**
 * CHALLENGE 2
 * 
 * Crate a function "concatenateSrtings" and it will have 2 parameters.
 * And this function will return concatenated string.
 */

// function concatenateSrtings(a,b) {
//    return a+b;
   
//  }
// console.log(concatenateSrtings("Hello ", "World "));


/**
 * CHALLENGE 3
 * 
 * Create function "outerFunction" with 2 parameters.
 * Create function inside of the "outerFunction" and name it "innerFunction" with one parameter.
 * This "innerFunction" will return square of parameter(paremeter * parameter).
 * 
 * In thi "outerFunction" sum both parameters.
 * Call "innerFunction" with argument that is epual to sum of both parameters of the "outerFunction".
 * Log to the console result of the "innerFunction" call.
 */
// solve 1===================
//  function outerFunction(a,b) {
//    const sum = a+b;
//    function innerFunction(squar) {
//      return squar * squar;
//     }
//     const result = innerFunction(sum);
//    console.log(result);
//  }
//    outerFunction(2,8);


// Solve Simplified ========================


// function outerFunction(a, b) {
//   function innerFunction(squar) {
//     return squar * squar;
//   }
//   console.log(innerFunction(a + b));
// }
// outerFunction(2, 8);



//===================================
// setTimeout(() => {
//   console.log("sabbir");
  
// }, 1000);




/**
 * EXAMPLE 1
 * 
 * Try to "declare" function expression
 */
// function dd(){};


/**
 * EXAMPLE 2
 * 
//  * Assign function expression to the variable  
//  */
// const myFunction = function () {};
// console.log(myFunction());
// console.log(myFunction);

/**
 * EXAMPLE 3
 * 
 * Callback function
 */

//  let i = 1;
// const stop = setInterval(() => {
//   console.log(`Here is message number ${i}`);
//   i = i +1;

// }, 2000);

// setTimeout( () => {
//   clearInterval(stop);
  
// }, 12000);
