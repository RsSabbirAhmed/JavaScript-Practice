const myNumbers = [1, 5, 7, 2];


// // for loop
// let mySquareNumbers = []; 
// for (let i = 0; i < myNumbers.length; i++) {
// mySquareNumbers.push(myNumbers[i] * myNumbers[i]);  
// }




// // map()
// let mySquareNumbers = myNumbers.map(
//   element => element * element
//   );







// // map() with external function
// const squareNumbers = element => element * element;
// let mySquareNumbers = myNumbers.map(squareNumbers);






// //map() with external function with index

// const squareNumbers = (element,index) =>{
//   console.log("element at the index " + index + " is " + element); 
//   return element * element;
// };
// let mySquareNumbers = myNumbers.map(squareNumbers);









// map() with Math.pow
let mySquareNumbers = myNumbers.map(element => Math.pow(element, 2)
);









// // map() with direct call to Math.pow
// // "index" in Math.paw will be treated as exponent value
// let mySquareNumbers = myNumbers.map(Math.pow);



console.log(mySquareNumbers);
console.log(myNumbers);






// ================Challenge==================

const postsJSON = [
  '{"postId":1355, "commentsQuantity":5}',
  '{"postId":5131, "commentsQuantity":13}',
  '{"postId":6134, "commentsQuantity":2}',
]

/**
 * From the "postsJSON" array create "posts" array that will consist of JavaScript objects
 */


 // solve

//  //by  for loop 
//  var posts = [];
//  for (let i = 0; i < postsJSON.length; i++) {
//      posts.push(JSON.parse(postsJSON[i]));
//  }

// console.log(posts);
// console.log(posts[0].postId); // 1355


//  // by map() - option -1

 const posts = postsJSON.map(JSON.parse);





// // by map() - option -2
// const posts = postsJSON.map(element => JSON.parse(element));



 console.log(posts);
 console.log(posts[0].postId); // 1355