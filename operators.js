// /**
//  * SECTION 1
//  * 
//  * Arithmetic Operators
// */

// let a,b;
// a = 1;
// b = 2;

// // Math with numbers
// console.log(a + b);
// console.log(a*b);
// console.log(a/ b);
// console.log(a-b);
// console.log(a%b);

// a = "abc";
// b = 5;

// // Math with non-numbers
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log(a - b);
// console.log(a % b);

// a = "Hello";
// b = "World";

// // Strings concatenation
// console.log(a +" "+ b);


// let c = "1";

// // Unary plus
// console.log(c);
// console.log(Number(c));
// c = undefined;
// console.log(+c);


// // Unary minus
// c = "5";
// console.log(-c);
// c = "abc";
// console.log(-c);

// // ++ operator
// let d = 5;
// ++d; // Same as d = d + 1
// console.log(d);
// d++; 
// console.log(d);

// // Built-in "++" function FIRST increments value of the operand and SECOND returns value of the operand
// console.log(++d);
// // Built-in "++" function FIRST returns value of the operand and SECOND increments value of the operand
// console.log(d++);
// console.log(d);



// // -- operator

// console.log(d--);
// console.log(d);

// console.log(--d); // Same as d = d - 1
// console.log(d);




/**
 * SECTION 2
 * 
 * Comparison Operators
*/


// Numbers comparison
let a, b, c;

a = 5;
b = 7;
c = 5;
console.log(a < b);
console.log(a > b);

console.log(a <= c);
console.log(a >=c);

console.log(a == b);



//  Strings comparison
let myStr1, myStr2;

myStr1 = "abc";
myStr2 = "bcd";
myStr3 = "Bcd";

// Sorted strings "Bcd", "abc", "bcd"
console.log(myStr1 > myStr2);
console.log(myStr1 <  myStr2);
console.log(myStr1 > myStr3);


// Equality operators
// NEVER USE "==" and "!=" operators!!!
let myString = "0";
let myNumber = 0;
let myBoolean = false;

// Types of the values may be different
console.log(myString == myNumber);
console.log(myNumber == myBoolean);
console.log(myString == myBoolean);


// TYPE and VALUE are compared 
console.log(myString === myNumber);
console.log(myNumber === myBoolean);
console.log(myString === myBoolean);


// How you should compare variables of different types
console.log(Number(myString) === myNumber);
console.log(+myString === myNumber);


console.log(myString != myNumber);
console.log(myString !== myNumber);

console.log(myNumber != myBoolean);
console.log(myNumber !== myBoolean);

console.log(myString != myBoolean);
console.log(myString !== myBoolean);


console.log(null === undefined);
console.log(null == undefined);

console.log(0 === "" === null === undefined === false);

