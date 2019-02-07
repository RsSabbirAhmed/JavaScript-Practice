// // EXAMPLE 1
// // console.log(sum(2,3));// sum is not define
// const sum = (a, b) => a + b;
// console.log(sum(2,3));


// // EXAMPLE 2
// const post = {
//   title: "Sample title",
//   comments: 5,
//   shared: true,
//   published: true,
//   postId: 5134
// }
// // // explicit return of the object
// // const processedPost = (post) => {
// //   return {
// //     title: post.title,
// //     comments: post.comments,
// //     popular:post.comments > 5 ? true : false 
// //   }
// // }
// // console.log(processedPost(post));


// // implicit return of the object

// const processedPost = post => ({
//   title: post.title,
//   comments: post.comments,
//   popular: post.comments > 5 ? true : false
// });
// console.log(processedPost(post));


// EXAMPLE 3
// (() => {
//   function greet() {
//     return "Hey. What's up?";
//   }
//   this.greet = greet;
// // console.log(this); // window object
//   return this;
// })();



// or ========
 
(() => {
  this.greet = () =>"Hey. What's up?";
  return this;
})();
