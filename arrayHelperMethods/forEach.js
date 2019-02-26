// const myArray = [1, true, "abc"];

// // don't use
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }


// // use this instead
// const result = myArray.forEach(element => {
//   console.log(element); 
// });
// console.log(result);





// Challenge

const myCities = ["London", "New York", "Singapore","Rangpur","Mymensingh"];

/**
 * Create a function called "arrayInfo" that will return string like "London is located at the index 0 in the myCities array"
 */
const arrayInfo = (element, index) =>
   element +
    " is located at the index " +
     index + 
     " in the myCityes array";
 /** 
 * Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console
*/


// Option 1: "for"
for (let i = 0; i < myCities.length; i++) {
  console.log(arrayInfo(myCities[i],i)); 
}


console.log("_______________________");


// Option 2: "forEach"

myCities.forEach((element,index) =>
  console.log(arrayInfo(element,index)));

  