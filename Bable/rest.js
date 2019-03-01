// ES-6
function fn1(...a) {
  return a;
}

const repeat = 1000000;

// ES-5
function fn2() {
  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }

  return a;
}


// ES-6
console.time("Function 1 with ES6 features");
for (let i = 0; i < repeat; i++) {
  fn1(1, 2, 3);
}
console.timeEnd("Function 1 with ES6 features");


// ES-5
console.time("Function 2 with ES5 features");
for (let i = 0; i < repeat; i++) {
  fn2(1, 2, 3);
}
console.timeEnd("Function 2 with ES5 features");