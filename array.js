// const arr = [1, 2, 3];
// console.log(arr);





// const myArray = [1, 2, 3, 4];
// console.log(myArray);
// console.log(myArray.length);

// myArray[2] = "abc";

// console.log(myArray);
// console.log(myArray[2]);

// myArray[4] = true;

// console.log(myArray);
// console.log(myArray.length);



// Array methods ========================
/**
 * "PUSH"  add new element end of the array
 * "POP" remove last element of the arr 
 * "SHIFT" remove first element of the array
 *"UNSHIFT"  add new element at the beginning of the array
 */


// // PUSH METHOD

// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.push(4);

// console.log(myArray);

// myArray.push(true);

// console.log(myArray);





// // POP METHOD

// const myArray2 = [1, 2, 3];
// console.log(myArray2);

// myArray2.pop();
// console.log(myArray2);


// const removedElement = myArray2.pop();

// console.log(myArray2);
// console.log(removedElement);





// // SHIFT METHOD

// const myArray3 = [1, 2, 3];
// console.log(myArray3);

// myArray3.shift();
// console.log(myArray3);

// const removedElement2 = myArray3.shift();

// console.log(myArray3);
// console.log(removedElement2);





// // UNSHIFT METHOD

// const myArray4 = [1, 2, 3];
// console.log(myArray4);

// myArray4.unshift(0);

// console.log(myArray4);

// myArray4.unshift("abc");
// console.log(myArray4);






// /**
//  * EXAMPLE 1
//  * 
//  * Empty Array
//  */

//  const myArray = [];
//  console.log(myArray);
 




// /**
//  * EXAMPLE 2
//  * 
//  * Add elements to the Array
//  */

//  const myArray = [];
//  myArray[0] ="First Element";
//  console.log(myArray);
 

//  myArray[1] = "Second Element";
//  console.log(myArray);
 
//  myArray.push('Third Element'); // Preferable methods for add a new element
//  console.log(myArray);
 



// /**
//  * EXAMPLE 3
//  * 
//  * Modify Elements
//  * 
//  */

// const myArray = [3, true, "abc", {}];

// console.log(myArray);
// myArray[1] = "New value for second element";

// console.log(myArray);

// myArray[0] = null;
// console.log(myArray);




// myArray[3].newProp = 10;
// console.log(myArray);
// console.log(myArray[3].newProp);
// console.log(myArray[3]["newProp"]);





// /**
//  * EXAMPLE 4
//  * 
//  * Square bracket notation
//  */

//  const myArray = [1, 2];
//  console.log(myArray[0]);
// //  console.log(myArray.0); 
// // if property name is the object is numeric you can't use dot notation 
 
 



// /**
//  * EXAMPLE 5
//  * 
//  * Delete elements
//  */

//  const myArray = [true, null ,1 ,2, "abc"];
//  console.log(myArray);

//  delete myArray[2];
// console.log(myArray); // element with index 2 is "empty"
//  console.log(myArray [2]);
 
//  myArray.pop();
//  console.log(myArray);
// myArray.pop();
// console.log(myArray);
//  myArray.shift();
//  console.log(myArray);
 


// /**
//  * EXAMPLE 6
//  * 
//  * Compare Arrays
//  */

//  const myArray1 =[1, 2, 3];
//  const myArray2 = [1, 2, 3];

//  console.log(myArray1 === myArray2);

//  const copyOfMyArray1 = myArray1;
//  console.log(copyOfMyArray1 === myArray1);
 
//  console.log(myArray1.toString() === myArray2.toString());
 


// /**
//  * CHALLENGE 1
//  * 
//  * Add elements at the beginning of the Array
//  * First add string "Hello"
//  * Second add number 100
//  */

//  const myArray = [true, null];
//  myArray.unshift(100,"Hello");
//  console.log(myArray);
 




// /**
//  *  CHALLENGE 2
//  * 
//  * Add element at the specific index
//  * Element "abc" with index 10.
//  * Log to the console Array and explain results.
//  * What is the length of the final Array?
//  */

//  const myArray = [1, 2];
//  myArray[10] = "abc";
//  console.log(myArray);
 



/**
 * CHALLENGE 3
 * 
 * Array of objects.
 * 
 * Create Array with 3 objects
 * Each object will have two properties - carBrand, price.
 * Add one more object to the Array
 */

const arrayOfCars = [
  {
  carBrand:"Toyota",
  price: 12000
},
{
    carBrand: "Tesla",
    price: 30000
},
{
    carBrand: "BMW",
    price: 25000
}
];


console.log(arrayOfCars);

const newCar = {
  carBrand: "Honda",
  price: 10000
};

arrayOfCars.push(newCar);

 console.log(arrayOfCars);
