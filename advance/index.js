var myImg = document.querySelector("img");

myImg.onclick = function () {
  var mySrc = myImg.getAttribute("src");
  if (mySrc === "./photo.jpg") {
    myImg.setAttribute("src","./photo2.jpg");
  } else {
    myImg.setAttribute("src", "./photo.jpg");
  }
} 