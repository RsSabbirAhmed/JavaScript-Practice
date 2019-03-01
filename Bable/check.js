// window.navigator.userAgent

// Browser Detection ===================

// var userAgent = navigator.userAgent;
// if (userAgent.indexOf("Chrome") > -1) {
//   console.log(`hello from es6`);
// } else {
//   console.log("hello form es5");
// }




// feature Detection ===================

function featureCheck() {
  try{
    eval ("`Test String`;");
  }
  catch (e) {
    return false;
  }
  return true;
}

function insertScript(type) {
  var el = document.createElement("script");
  el.src = "src/" + type + ".js";
  document.body.appendChild(el);
}


if (featureCheck()) {
  // src/es6.js
  insertScript("es6");
} else {
  // src/es5.js
  insertScript("es5");
}