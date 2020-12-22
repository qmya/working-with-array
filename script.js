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

//Practical example: 1
const currenyInEuro = [200, 450, -400, 3000, -650, -130, 70, 1300];
//let convert them to US dollar
const euroToUSD = 1.23;
const currencyInUS = currenyInEuro.map(function (currency) {
  return currency * euroToUSD;
  console.log(currencyInUS);
});

console.log(currencyInUS);

//Practical example: 2
const currencyDescriptions = currenyInEuro.map(
  (currency, i) =>
    `Currency ${i + 1}: ${currency > 0 ? "deposited" : "withdrew"} ${Math.abs(
      currency
    )}`
);
console.log(currencyDescriptions);
///////////////////////////////////////// F I L T E R  ////////////////////////////////////
////////////////////////////////F I L T E R MAP CREATES A NEW ARRAY (Mutatable)   /////////////////////example:
//array = 👉🏽 [3, 1, 4, 3, 2];
//apply filter (current element in array) > 2
// filteredArr = [3,4,3]
const newCurrenyInEuro = [200, 450, -400, 3000, -650, -130, 70, 1300];
//let creat an array of deposits

const deposits = newCurrenyInEuro.filter(function (currency) {
  return currency > 0 ? "filtered deposits" : null;
});
console.log(newCurrenyInEuro);
console.log(deposits);

//CREATE AN ARRAY WITH DARWALS

const withdrawal = newCurrenyInEuro.filter(function (currency) {
  return currency < 0;
});
console.log(withdrawal);
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////// FOR //// OF/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//do the same as map, filter and reducce do
//filter array example
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

//CREATE AN ARRAY WITH DARWALS

const withdrawalFor = [];
for (const mov of movements) if (mov < 0) withdrawalFor.push(mov);
console.log(withdrawalFor);
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////❄️ 🏐////❄️ 🏐///❄️ 🏐/// R E D U C E ////❄️ 🏐///////❄️ 🏐 ///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////F I L T E R MAP CREATES A NEW ARRAY (Mutatable)   /////////
///////////////////////////BOIL DOWN ALL THE ELEMENTS OF THE ARR INTO A SINGLR ELEMENTS/////////////////////////////SIMPLY ADDING THE ELEMENTS OF THE ARRAY /////////////////////////

//REDUCE 👉🏽 ACCUMULATOR + CURRENT = 13;

const numberArray = [1, 2, 3, 4];
//reduce also loops over the array
const reducedNum = numberArray.reduce(function (accum, currentNum, index, arr) {
  //accum = ACCUMULATOR (snow ball)
  let initally = 0;
  return accum + currentNum;
}, 0); // 👈🏽 0 is because we want to give Accum an initial value of 0
console.log(reducedNum);

//Max value
//here we will going through an array and comparing accum with the current Num , if its greater we gonna save it and move forward and compare it

const randomNumArr = [23, 56, -12, 6, 89, -9, 20];

const maxValueFromArr = randomNumArr.reduce(function (accum, currentNum) {
  if (accum > currentNum) return accum;
  else return currentNum;
}, randomNumArr[0]); //first accumlator is at position 0
console.log(maxValueFromArr);

//Challenge# 02

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
// const juliaDogsArr = [5, 2, 4, 1, 15, 8, 3];
// const kateDogsArr = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const dogAgeToHumanAge = ages.map(function (dogAge) {
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;
//   });

//   const adults = dogAgeToHumanAge.filter(dogAge);
//   if (age >= 18) {
//     console.log(`adults ages ${age}`);
//   }
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////🔎//🔎//🔎//🔎//🔎 F I N D 🕵🏼‍♂️ 🔍///🔍///🔍///🔍/////////////////////////////////////////////////////////////////////////////////////////////////////
//DOES NOT CREATE A NEW ARRAY UNLIKE FILTER
//Filter return all the elements that satisfy the condition & find just give the first element that is give in the condition
//

const firstWithDrawal = movements.find((mov) => mov < 0); //it will gives the first number less than 0 that is -400 in movements array
console.log(movements, firstWithDrawal);

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//find use full example
//finding the account in accounts object based on their name

const account = accounts.find((acc) => acc.owner === "Steven Thomas Williams");
console.log(account);

// const newAccounts = function () {
// for (const acc of accounts) {
//   return acc.owner === "Steven Thomas Williams";
//   // console.log("yes");
// }
// };
// newAccounts(accounts);

//findIndex
//it will also gives you array of the user name but also the index of

//includes
console.log(movements);
console.log(movements.includes(-130)); //it will gives us true and false
//INCLUDES gives us boolean values

//SOME CONDITION
console.log(movements.some((mov) => mov > 0)); //true

//Every condition
console.log(movements.every((mov) => mov > 0)); //false 👉🏽 no every mov array > 0

//FLAT AND FLATMAP
const arrNew = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrNew.flat()); //Map a flat one array from an  arr inside an arr

//Deep Nested Array
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); //flat is by default goes 1 level deep

console.log(arrDeep.flat(2));

//Make a movements arrays
console.log(movements);
const accountMovements = accounts.map((acc) => acc.movements);

const allMovement = accountMovements.flat();
console.log(allMovement);

const movementReduce = allMovement.reduce((accum, mov) => accum + mov, 0);
console.log(movementReduce);

//Using pipleline or chaining method

const allResultMovement = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((accum, mov) => accum + mov, 0);

console.log(allResultMovement);

//FLATMAP 👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽👉🏽
//do the same just like map
const allResultMovement1 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((accum, mov) => accum + mov, 0);

console.log(allResultMovement1);

//SORTING ARRAYS: Sorting convert every element of array to the string
//Sorting of strings

const owners = ["Jonas", "Zac", "Adam", "Martha"];
console.log(owners.sort()); //["Adam", "Jonas", "Martha", "Zac" ];

//Sorting of Numbers: works in Ascending order
// console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort()); //result : [-130, -400, -650, 1300, 200, 3000, 450, 70]
movements.sort((a, b) => {
  //a : current value and b: next value
  //If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first) & viceversa
  if (a > b) return 1; //return > 0 A, B ( Keep order )
  if (b > a) return -1; //return < 0 A, B ( Switch order)
  // a must be equal to b
  return 0;
});
console.log(movements);
//Descending order
movements.sort((a, b) => {
  //a : current value and b: next value
  //If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first) & viceversa
  if (a > b) return -1; //return > 0 A, B ( Keep order )
  if (b > a) return 1; //return < 0 A, B ( Switch order)
  // a must be equal to b
  return 0;
});
console.log(movements);

movements.sort((a, b) => a - b); //return 1
console.log(movements);

movements.sort((a, b) => b - a); //return 1
console.log(movements);

//FILL THE ARRAY
const randomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x = new Array(7); //[empty × 7]
console.log(x);

// x.fill(1); //fill the entire array with 1
// console.log(x.fill(1)); //[1, 1, 1, 1, 1, 1, 1]

x.fill(1, 3, 5); //1 is to fill with, 3 is the starting index and 5 id the ending index
console.log(x);

randomArr.fill(23, 4, 6);
console.log(randomArr); //Mutate the array at postion 4 , 5 with a new number

//Array.from

const y = Array.from({ length: 7 }, () => 1); //length =7 and fill it with 1
console.log(y);

const z = Array.from({ length: 7 }, (current, index) => index + 1); //length =7 and fill it with [1, 2, 3, 4, 5, 6, 7]
console.log(z);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/
// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//PART: 1
//Loop over the array , do not create a new array
//calculate the recommended food portion and add it to the object as a new property
//Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

const recommentFoodForEachDog = dogs.forEach(
  (dog) => (dog.recommentFood = Math.trunc(dog.weight ** 0.75 * 28)) //Math.trunc cuts decimal parts
);
console.log(dogs);

//Part: 2
//Find Sarah's dog and log to the console whether it's eating too much or too little.
//HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)🤓
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah); //true and will get the object
