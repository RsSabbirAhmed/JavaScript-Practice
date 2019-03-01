const myArray = [10, [], {}, "abc", true, 15];

const result = myArray.find((clement) => {
  console.log(clement);
  return typeof clement === "string";
})
console.log(result);
