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




// /**
//  * SECTION 2
//  * 
//  * Comparison Operators
// */


// // Numbers comparison
// let a, b, c;

// a = 5;
// b = 7;
// c = 5;
// console.log(a < b);
// console.log(a > b);

// console.log(a <= c);
// console.log(a >=c);

// console.log(a == b);



// //  Strings comparison
// let myStr1, myStr2;

// myStr1 = "abc";
// myStr2 = "bcd";
// myStr3 = "Bcd";

// // Sorted strings "Bcd", "abc", "bcd"
// console.log(myStr1 > myStr2);
// console.log(myStr1 <  myStr2);
// console.log(myStr1 > myStr3);


// // Equality operators
// // NEVER USE "==" and "!=" operators!!!
// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// // Types of the values may be different
// console.log(myString == myNumber);
// console.log(myNumber == myBoolean);
// console.log(myString == myBoolean);


// // TYPE and VALUE are compared 
// console.log(myString === myNumber);
// console.log(myNumber === myBoolean);
// console.log(myString === myBoolean);


// // How you should compare variables of different types
// console.log(Number(myString) === myNumber);
// console.log(+myString === myNumber);


// console.log(myString != myNumber);
// console.log(myString !== myNumber);

// console.log(myNumber != myBoolean);
// console.log(myNumber !== myBoolean);

// console.log(myString != myBoolean);
// console.log(myString !== myBoolean);


// console.log(null === undefined);
// console.log(null == undefined);

// console.log(0 === "" === null === undefined === false);




// /**
//  * SECTION 3
//  * 
//  * Logical operators
//  */

// //  OR operator ||

// console.log(true || false);
// console.log(false || true);
// console.log("abc" || "");
// console.log("" || "abc");
// console.log("" || "");

// // Falsy values
// console.log("" || 0 || null || undefined || NaN || false);


// let city;
// const defaultCity = "New York";

// let myCity = city || defaultCity;
// console.log(myCity);
// console.log("__________");

// let myOtherCity = city || console.log("Fill in city please")
//  || defaultCity;
// console.log(myOtherCity);


// console.log("__________");

// city = "Los Angeles";
// myCity = city || defaultCity;

// console.log(myCity);

// // AND operator &&
// console.log("__________");

// console.log(true && false);
// console.log(false && true);
// console.log("__________");

// // AND returns value of the first "falsy" operand
// console.log("" && "abc");
// console.log("abc" && "");
// console.log("__________");

// console.log("abc" && 10 && false && "" && "abcd");
// console.log("abc" && 10 && NaN && "" && "abcd");
// console.log("abc" && 10 && "" && "abcd");

// // ALL operands are "truthy"
// console.log("__________");
// console.log("abc" && 10 && true && 123 && "Hello World");
// console.log("__________");


// // NOT operator !

// console.log(!"abc");
// console.log(!20);
// console.log(!"");
// console.log(!0);
// console.log(!null);
// console.log(!NaN);
// console.log(!undefined);


// let myVariable;
// myVariable = undefined;
// console.log(!myVariable);


// myVariable = "RsSabbir";
// console.log(!myVariable);

// console.log(!true);
// console.log(!false);


// // Quick truthy/falsy check

// myVariable = null;
// console.log(!!myVariable);
// myVariable = 10;
// console.log(!!myVariable);



// /**
//  * SECTION 4
//  * 
//  * Operators Precedence
//  */
// console.log(2 + 4 * 10);
// console.log((2+4)*10);


// let a;
// a = 1;

// a = a + 5;
// console.log(a);




// /**
//  * SECTION 5
//  * 
//  * Operators Associativity
//  */

//  let a,b;
//  b = 3;
//  a = b = 5; //right to left
//  console.log(a,b);
//  console.log(4 + 5 + 6); // left to right
//  console.log(5 * 10 / 2); // left to right
//  console.log(5 * 10 / 2 / 5); // left to right
//  console.log(4 / 2 * 2); // left to right
 
//  console.log(5 * 10 /( 10 / 5)); // left to right and first brackets first 
 
 


/**
 * JS-BASICS/CORE/CHALLENGES/02-operators
 * 
 */
 
//  /**
//   * TASK 1
//   * 
//   * Compare 2 variables "myVariable" and "myVariable2".
//   * Log to the console "true" if "myVariable" is less than or equal to "myVariable2".
//   * Convert both variables to numbers before comparison.
//   */

//   let myVariable,myVariable2;
//   myVariable = 10;
//   myVariable2 ="5";

// console.log(+myVariable <= +myVariable2);


//  myVariable = "20";
//  myVariable2 = 100;

//  console.log(+myVariable <= +myVariable2);


// /**
//  * TASK 2
//  * 
//  * Print to console remainder of the division of "myNumber1" by "myNumber2".
//  * Which precedence and associativity has this operator?
//  */

//  let myNumber1 = 10;
//  let myNumber2 = 3;

//  console.log(myNumber1 % myNumber2);
//  console.log(25 % 5);
//  console.log(14 % 8);

//  console.log(100 % 30 % 3); // left to right
 
 
 
 