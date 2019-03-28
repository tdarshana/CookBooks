/**
 * 1.1. Differentiating Between a JavaScript Object,Primitive, and Literal
 */

/*
* Difference between 'Object', 'Primitive' and 'Literal'
*   * Whats the difference?
*   * Saying which is which?
*/

// LITERAL - A value of a specific type
//          Ex: Quoted String, floating point Number, Boolean

"this is a string"
1.45
true

// PRIMITIVE - Instance of particular data type of (String, Number, Boolean, null, undefined).
// Of JS Primitives , 3 has complimentary constructor objects (String, Number, Boolean)
// Also have built in properties.

var str = "this is a String";
console.log(str.length);

var str1 = "this is a simple string";   // the quoted string is the literal
var num1 = 1.45;                        // the value of 1.45 is the literal
var answer = true;                      // the values of true and false are boolean literals

// Three Type of initialization for premitives
var words1 = "This is a string literal.";
var words2 = String("This is a Primitive String.");
var words3 = new String("This is a String Object.");  // Objects uses 'new' operator.
// This is different than same string leteral & Primitve String.

var stringLiteral = "testing";
var primitveString = String("testing");
var stringObject = new String("testing");

if(stringLiteral === primitveString){
  console.log("String literal === Primitive String ? equal");
} else {
  console.log("String literal === Primitive String ? false");
}

if(stringLiteral === stringObject){
  console.log("String literal === String Object ? equal");
} else {
  console.log("String literal === String Object ? false");
}

/*
String literal === Primitive String ? equal
  Primitive variables are strictly equals to literals. Becase primitives are comapired by value. And values are literals.
String literal === String Object ? false
  Objects are not equal to literals.
*/

var num1 = 1.25;
var num2 = new Number(1.25);

console.log(typeof num1);   // This is a number
console.log(typeof num2);   // This is a Object

