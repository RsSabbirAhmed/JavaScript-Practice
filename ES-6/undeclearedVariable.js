function fn() {
  function fn2() {
    a = 10;
    console.log(a);// a is not define
  }
  fn2();
  console.log(a);
  
}

fn();
console.log(a); // a is decleared in the global scope
