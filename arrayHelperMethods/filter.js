const myNumbers = [2,3,5,10,34,15,7,48];

const filteredNumbers = myNumbers.filter((num) => {
  return num < 10;
})

console.log(filteredNumbers);
console.log(myNumbers);
