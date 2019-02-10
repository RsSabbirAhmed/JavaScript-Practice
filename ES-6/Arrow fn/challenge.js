// // solution 1 by me
// let i = 0;
// // function clicked() {
// //   document.getElementById("btn").innerHTML = "Button clicked " +( i++) + " times";
// //   console.log("Button was clicked");  
// // }


// const clicked = () => {
//   document.getElementById("btn").innerHTML = "Button clicked " + (++i) + " times";
//   console.log("Button was clicked");
// }




// solution 2 by my instractor


const createButton = title => {
  const btn = document.createElement("button");
  btn.innerHTML = title;

  let i = 0;

 // 1. By onclick event 

  // btn.onclick = function () {
  //   btn.innerHTML = "Button clicked "+ (++i) + " times";
  //   console.log("Bullon was Clicked");
  // }


 // 2. By addEventListener event


  //2.1  Regular function expression

  btn.addEventListener("click", function () {
    this.innerHTML = "Button clicked " + (++i) + " times";
    // console.log(this); // button
    
    console.log("Bullon was Clicked");
  });



  // // 2.2 Arrow function expression
  // btn.addEventListener("click",  ()=> {
  //   btn.innerHTML = "Button clicked " + (++i) + " times";
  //   // console.log(this); // window object
    
  //   console.log("Bullon was Clicked");
  // });
  document.body.appendChild(btn);
}

createButton("Click me");
// createButton("Click me too!");