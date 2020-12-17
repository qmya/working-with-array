"use strict";

//Array METHODS LECTURE: 😀
//Why array have methods :
//cause methods are the function
//Array are objects / function and they they get access to the special buildin methods

let arr = ["a", "b", "c", "d", "e"];

//FIRST SLICE METHOD 🥒
//We can take the slice of an array without changing the original array

const newSliceArr = arr.slice(2); //here the slice will starts from index 2 all the way to the end
console.log(newSliceArr); //newSliceArr = ["c", "d", "e"]

//giving the end parimeter too
//just like string the end perimeter is 3-1 = 2 . Here at 2 index is "c"
const smallSliceArr = arr.slice(1, 3);
console.log(smallSliceArr); //smallSliceArr = ["b", "c"]

//MINUS
//here the array will starts from the end of the array, from e
let minusSliceArr = arr.slice(-2);
console.log(minusSliceArr); //['d','e'];
minusSliceArr = arr.slice(-1);
console.log(minusSliceArr); //['e'];
minusSliceArr = arr.slice(-3);
console.log(minusSliceArr); //["c", "d", "e"]

//Let says the negative ending position
let negativeEndSliceArr = arr.slice(1, -2);
//here it starts from the position/index 1
//but for the end we do : 1-(-2)= 1+2=3
//or you can say it exract everything except the last two
console.log(negativeEndSliceArr); //['b', 'c'];

//SPLICE 😃😄😁😆😀🤪 MUTATE THE ORIGINAL ARRAY
//its just like the slice method but it changes the original array
//end perimeter is actually delete those from original array

console.log(arr.splice(2)); //starts from the position 2 till end of the array
console.log(arr); //splice changes the originl array 😲
console.log(arr.splice(-2)); //['d', 'e']
console.log(arr); //it remove the minus stuff and ["a", "b", "c"]
//giving ending perimeter too

//it is 👇🏽:
// 1️⃣ perimeter is to start from this position
//❷ perimeter is to delete this much elememts from an array
console.log(arr.splice(1, 2)); //['b', 'c'] deleted
console.log(arr); //[a,d,e]

// Reverse array  ◀️
//This method mutate the array

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT ARRAY
//combining two arrays
//concat is just like (...) spread operator
//both does not mutate the original arrray
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
//lets join all the letter of this array by using this -

console.log(letters.join("-")); //result will string with a seperator of -
console.log(typeof letters.join("-")); //proved here that it is a string
