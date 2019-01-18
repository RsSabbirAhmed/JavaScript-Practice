// const myCity = {
//   city: "Rangpur",
//   info: {
//     popular: true,
//     country: "Bangladesh",
//   }
// }
// // console.log(myCity);
// // console.log(myCity.info.country);
// delete myCity.info["popular"];
// myCity.info.sabbir = "Sabbir Ahmed"
// console.log(myCity);

// /**
//  * EXAMPLE 1- Create object and modify its properties
//  */
// let myObject;
// myObject = {
//   a:10,
//   b: "abc"
// }
// console.log(myObject);
// myObject.a =15;
// console.log(myObject);

// myObject.c =true;
// console.log(myObject);

// delete myObject.b;
// console.log(myObject);

// /**
//  * CHALLENGE 1
//  * 
//  * Crate variable called "myPost".
//  * Initial value should be{}
//  * Add property called "postTitle" and value "Object is reference type"
//  * Add one more property "postLikes" with value 0
//  * Add third property "shared" and set its value to "false"
//  * Increase value of the "postLikes" by 1
//  * Delete Property "shared"
//  */

//  let myPost ={};

//  myPost.postTitle = "Object is reference type"; myPost.postLikes = 0;
//  myPost.shared = false;


//  console.log(myPost);
 
//  myPost.postLikes = myPost.postLikes + 1;
//  console.log(myPost);

//  delete myPost.shared;
//  console.log(myPost);

/**
 * EXAMPLE 2
 * 
 * Use "const";
 *  for object declaration
 */
// const myObject = {};
// myObject.a = true;
// console.log(myObject);

// myObject = {
//   a:true
// }


/**
 * CHALLENGE 2
 * 
 * Create variable "myObject" and add property "a" - 10.
 * Create another variable "copyOfMyObject" and its value should be myObject.
 * Add new property "b" with value false to the "copyOfMyObject".
 * Print to console "myObject" and "copyOfMyObject" and interpret results.
 */

 /* let myObject ={
   a:10,
 }

 let copyOfMyObject ={

   myObject,
 }
 copyOfMyObject.b = false;
 console.log(myObject);
 console.log(copyOfMyObject); */

//  let myObject = {
//    a: 10,
//  }

//  let copyOfMyObject = myObject;
//  copyOfMyObject.b = false;
//  console.log(myObject);
//  console.log(copyOfMyObject);
 

/**
 * EXAMPLE 3
 * 
 * Bracket notation
 */
// let myObject = {
//   a:true,
//   b:null,
//   c:25
// };
// console.log(myObject["b"]);

// const propertyName = "c";
// console.log(myObject[propertyName]);
// console.log('what is your name');
// console.log("uptodate");


/**
 * CHALLENGE 2
 * 
 * Create variable "myObject" and add property "a" -10.
 * Create another variable "copyOfMyObject" and its value should be myObject.
 * Add new property "b" with value false to the "copyOfMyObject".
 * Print to the console "myObject" and "copyOfMyObject" and interpret results.
 */
// let myObject = {a:10};

// let copyOfMyObject = myObject;
// copyOfMyObject.b = false;
// console.log(myObject);
// console.log(copyOfMyObject);



/**
 * ESAMPLE 3
 * 
 * Bracket notation
 */
// let myObject = {
//   a: true,
//   b:null,
//   c:25
// };
// console.log(myObject["a"]);

// const propertyName = "c";
// console.log(myObject[propertyName]);

// myObject["new" + "Property" + "Name"] = "Value for dynamically computed property name";
// console.log(myObject);



/**
 * EXAMPLE 4
 * 
 * Missing properties
 */
// const myObject = {
//   a:3,
//   b: true
// };

// // code exectution is not stopped
// console.log(myObject.c);

// code exectution is  stopped
// console.log(sabbir);


/**
 * CHALLENGE 3
 * 
 * Create object "objectWithNestedObject" with initial value {}.
 * Add property "nestedObject" with initial value {}.
 * Add property "a" with value "null" to "nestedObject".Use bracket notation.
 * Add property "b" with value "true" to "nestedObject".Use bracket notation. Create new variable with property name
 */
// let objectWithNestedObject ={};

// objectWithNestedObject.nestedObject = {};
// console.log(objectWithNestedObject);

// objectWithNestedObject.nestedObject.a = null;
// objectWithNestedObject.nestedObject["b"] = true;
// console.log(objectWithNestedObject);

// console.log(objectWithNestedObject.nestedObject.a);
// console.log(objectWithNestedObject.nestedObject.b);

const myCity = {
  city: "Mymensing",
  cityGreeting: function what() {
    console.log("Greetings!!");
    
  }
}
myCity.cityGreeting();