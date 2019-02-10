// Difference between Arrow function and regular function...



// // EXAMPLE 1

// const num = {
//   value: 100,
//   info:() => {
//     console.log(this); // Window
//     return this.value;
//   }


//   // info:function info() {
//   //   console.log(this); // num object
//   //   return this.value;
//   // }
// }
// console.log(num.info());




// // EXAMPLE 2 - Function Constructor


// // You must always use tradition function  for function constructor
// function GroceryItem(title, kind) {
//   this.title = title;
//   this.kind = kind;
// }


// // // "Uncaught TypeError: GroceryItem is not a constructor" it means i can't use "Arrow" function for creating "function Constructor" 

// // const GroceryItem = (title, kind) =>{
// //   this.title = title;
// //   this.kind = kind;
// // }



// GroceryItem.prototype.info = function () {
//   return this.title + " is " + this.kind;
// };


// // // "this" is Window and funcion always returns "undefined is undefined"
// // GroceryItem.prototype.info =  () => {
// //   console.log(this);// window
  
// //   return this.title + " is " + this.kind;
// // };




// const apple = new GroceryItem("Apple", "fruite");
// // console.log(apple);
// console.log(apple.info());

// const brocolli = new GroceryItem("Brocolli", "vagetable");
// // console.log(brocolli);
// console.log(brocolli.info());

