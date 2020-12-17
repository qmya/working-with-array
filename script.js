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

//LOOPING ARRAYS: forEach

//forEach is a higher order function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//positive values are deposits
//negative values are withdraw
//forEach first element is perimeter , index and than array

movements.forEach(function (movement, index, array) {
  //foreach always take a function with a parimeter of you own name
  if (movement > 0) {
    console.log(`Your movement ${index + 1} : Your deposite is ${movement}`);
  } else {
    console.log(
      `Your movement ${index + 1}:Your withdraw is ${Math.abs(movement)}`
    ); //Math.abs() to make the value positive
  }
});

//FOREACH WITH MAPS AND SETS

//Map:
const correncies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
console.log(correncies);

correncies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} `);
});

//Set
//set doesn't have key and indexes
const correnciesUnique = new Set(["USD", "EUR", "GBP"]);
console.log(correnciesUnique);
correnciesUnique.forEach(function (value, key, map) {
  console.log(`${key}:${value}`); //key and value are the same coz set 🚫 have keys/index
});

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////challenge////////////////////////////////////////////////
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

////////////////////////////// Part 1 solution ////////////////////////////////////////////
const checkDogs = function () {
  const juliaDog = julia.slice(1, -2);
  console.log(juliaDog);
  console.log(julia);
  const julieAndKateArr = juliaDog.concat(kate);
  console.log(julieAndKateArr);
  julieAndKateArr.forEach(function (dogAge, index) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult 🐕 and is ${dogAge} years old`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is an puppy 🐶and is ${dogAge} years old`
      );
    }
  });
};
checkDogs();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// D A T A  T R A N S F O R M A T I O N /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// 🗺🗺🗺🗺🗺 M A P 🗺🗺🗺🗺🗺/////////////////////////////
////////////////////////////////MAP CREATES A NEW ARRAY (Mutatable)   /////////////////////

///MAP IS JUST LIKE FOREACH BUT IN MAP WE DO :
// Original array = 👉🏽 [3 1 4 3 2]  passes through 𝗠𝗔𝙋 currentelement * 2 gives us new array =👉🏽 [6 2 8 6 4]

///////////////////////////////////////// F I L T E R  ////////////////////////////////////
////////////////////////////////F I L T E R MAP CREATES A NEW ARRAY (Mutatable)   /////////////////////
//array = 👉🏽 [3, 1, 4, 3, 2];
//apply filter (current element in array) > 2
// filteredArr = [3,4,3]

///////////////////❄️ 🏐////❄️ 🏐///❄️ 🏐/// R E D U C E ////❄️ 🏐///////❄️ 🏐/////////////
////////////////////////////////F I L T E R MAP CREATES A NEW ARRAY (Mutatable)   /////////
///////////////////////////BOIL DOWN ALL THE ELEMENTS OF THE ARR INTO A SINGLR ELEMENTS/////////////////////////////SIMPLY ADDING THE ELEMENTS OF THE ARRAY /////////////////////////

//REDUCE 👉🏽 ACCUMULATOR + CURRENT = 13;
