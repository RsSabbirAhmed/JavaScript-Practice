const myCity = {
  city: "Rangpur",
  info: {
    popular: true,
    country: "Bangladesh",
  }
}
// console.log(myCity);
// console.log(myCity.info.country);
delete myCity.info["popular"];
myCity.info.sabbir = "Sabbir Ahmed"
console.log(myCity);

