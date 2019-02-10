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



// EXAMPLE 2 - Function Constructor

// function GroceryItem(title, kind) {
//   this.title = title;
//   this.kind = kind;
// }


// "Uncaught TypeError: GroceryItem is not a constructor" it means i can't use "Arrow" function for creating "function Constructor" 
const GroceryItem = (title, kind) =>{
  this.title = title;
  this.kind = kind;
}

const apple = new GroceryItem("Apple", "fruite");
console.log(apple);

const brocolli = new GroceryItem("brocolli", "vagetable");
console.log(brocolli);
