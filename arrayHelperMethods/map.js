const myNumbers = [1,5,7];


// // for loop
// let mySquareNumbers = []; 
// for (let i = 0; i < myNumbers.length; i++) {
// mySquareNumbers.push(myNumbers[i] * myNumbers[i]);  
// }


// map()
let mySquareNumbers = myNumbers.map(
  element => element * element
  );

console.log(mySquareNumbers);
console.log(myNumbers);
