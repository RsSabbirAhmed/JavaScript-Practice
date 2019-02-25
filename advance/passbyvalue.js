// // example -1- Pass by value
// // If variable that holds value of primitive value type is passed to the function as argument, it's value can't be changed inside of the function
// function myFunction(parameterA) {
//   parameterA = 20;
//   return parameterA;
// }
// const a = 10;
// console.log(myFunction(a)); // 20

// console.log(a); // 10






// //example -2 - PASS by Reference

// const myArray = [1,2,3];
// console.log(myArray);


// function  myFunction1(arr) {
//   console.log(arr === myArray); // true
  
//   arr.push (4);
//   console.log(arr);
//   return arr;
  
// }
// myFunction1(myArray);
// console.log(myArray);




// CHALLENGE

// Create a function that will add custom method to the global object "window"

function addCustomGlobalMethod(globalObject) {
  globalObject.customMtheod = function () {
    console.log("Greeting from the custom method");
  };
}
addCustomGlobalMethod(this);


console.log(this === window); // true
console.log(typeof window); // "object"


this.customMtheod(); // "Greeting from the custom method";
window.customMtheod(); // "Greeting from the custom method";
customMtheod(); // "Greeting from the custom method";