/**
 * JS-BASICS/CORE/CHALLENGES/06-Loops-and-conditions
 * 
 */


// /**
//  * TASK 1
//  * 
//  * Loop through the object and if property name(key) is either "key1" or "key3" log to the console property value
//  */
// const myObject = {
//   key1: true,
//   key5: 10,
//   key3: "abc",
//   key4: null,
//   key10: NaN
// }
// // ANSWER
// for (const key in myObject) {
//   if (key === "key1" || key === "key3") {
//     console.log(myObject[key]);
//   }
// }





/**
 * TASK 2
 * 
 * Grnerate new 4-digit random number.
 * Range for the random number is 1000-9999
 * Ensure that this new random number doesn't natch any of the numbers in the myNumbers array.
 * If it matches you need to generate new 4-digit numbers.
 *  If there is not match (new number is unique) that add it to the myNumbers array.
 */
const MIN = 1;
const MAX = 9;

 const myNumbers = [
   2,
   7,
   8,
   5,
   3,
   4
 ]

 let newRandomNumber;
function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isNotUnique(nub) {
  
}

do {
  newRandomNumber = getRandomInt(MIN, MAX);
} while (newRandomNumber);