/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;   //Changing the string to number. No need of any type conversion if we give directly number in the place of "5" 
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;  // If we don't do type conversion, This treat as string concatention and print 255
console.log("Total Age: " + totalAge);


let res = true + 1;
console.log("Example for implicit conversion: Here true is converted to value 1 while addition")
console.log(res);

let num = 12;
console.log("Here we are checking is the value number.")
if(isNaN(num)) {
  console.log("This is not a number");
} else {
  console.log("This is a number");
}


let firstItemPrice = "5";
let secondItemPrice = 4;
console.log("Example for explicit conversion: below we are converting to number to show that total price of two items")
console.log("The item price is : " + firstItemPrice + secondItemPrice); // Here is the result with out type conversion
console.log( Number(firstItemPrice) + secondItemPrice);   // Here we converting to number to get total price  


