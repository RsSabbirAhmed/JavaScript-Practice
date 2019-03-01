// EXAMPLE 1

const myNumbers = [3, -5, 1, 10, -7];

const isPositiveNumber = elemnet => typeof elemnet === "number" && elemnet > 0;

// every method
const allpositiveCheck = myNumbers.every(isPositiveNumber);

console.log(allpositiveCheck);


// some method
const somepositiveCheck = myNumbers.some(isPositiveNumber);

console.log(somepositiveCheck);




// EXAMPLE 2

const items = [
  {
    title: "Computer",
    quantity: 10
  },
  {
    title: "Phone",
    quantity: 0
  },
  {
    title:"Headphones",
    quantity: 15
  }
]

// all items have quantity > 5

if (items.every(item => item.quantity > 5))
  console.log("All items are available");

// all items have quantity > 5 And some items have quantity <= 5

if (
  items.every(item => item.quantity > 0) &&    items.some(item => item.quantity <= 5)
)
  console.log("Some items may be sold soon");


// some items have quantity > 5

if (items.some(item => item.quantity === 0))
  console.log("Some items are sold out!");