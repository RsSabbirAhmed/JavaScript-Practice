// // Function declaration
// console.log(smile()); // function contents in the string format
// smile(); // declared, initialized and assigned

// function smile(){
//   console.log(":-)");
  
// }
// smile(); // success



// // Immediately Invoked  function expression (IIFE)

// (function(){
//   console.log("that's function expression");
  
// })();



// function expression assigned to the variable
// console.log(sum(3,4)); // TDZ

const sum = function(a,b){
  return a + b;
  
};
console.log(sum(2,3)); // success