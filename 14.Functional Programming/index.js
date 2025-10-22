// console.log("hello rampravesh");
/*
 Imperative foreach vs declarative foreach
 Imperative map vs declarative map
 Imperative filter vs declarative filter
 Imperative reduce vs declarative reduce
 Imperative every vs declarative every
 Imperative find vs declarative find */

//❌ imperative programming
/* let arr = [1, 2, 4, 5, 3, 5, 6];
let double = [];
for (let index = 0; index < arr.length; index++) {
  double.push(arr[index] * 2);
}
console.log(double); */

//✅ 1️⃣ declarative Programming

/* let arr = [1, 2, 4, 5, 3, 5, 6];
let double = arr.map((element) => element * 2);
console.log(double); */

/* //2️⃣ ✅ PURE FUNCTIONS*********
function sum(a, b) {
  return a + b;
}
let result = sum(2, 4);
console.log(result); */

/* //❌ IMPURE FUNCTION*********
let c = 10;
function sum(a, b) {
  return a + b + c;
}
let impureFunResult = sum(2, 4);
console.log(impureFunResult); */

// 3️⃣IMMUATABILITY *******
//do not modify existing data instead, return new copies

//❌ Mutable ******
/* const user = { name: "ram pravesh kumar " };
user.age = 25; //directly modifies origanal object
console.log(user); //{name: 'ram pravesh kumar ', age: 25} */

//✅Immutable******
/* const updateUser = { ...user, age: 35 };
console.log(updateUser); //{name: 'ram pravesh kumar ', age: 35} */

// More examples of immutability with arrays

/* console.log("---- Adding an element to an array ----");
// ❌ Mutable: using push()
const hobbies = ['reading', 'sports'];
hobbies.push('cooking');
console.log("Mutable add:", hobbies); // ['reading', 'sports', 'cooking']

// ✅ Immutable: using spread syntax
const immutableHobbies = ['reading', 'sports'];
const newHobbies = [...immutableHobbies, 'cooking'];
console.log("Immutable add:", newHobbies); // ['reading', 'sports', 'cooking']
console.log("Original remains unchanged:", immutableHobbies); // ['reading', 'sports'] */

/* console.log("\n---- Removing an element from an array ----");
// ❌ Mutable: using splice()
const tasks = ['do laundry', 'buy groceries', 'clean room'];
tasks.splice(1, 1); // Removes 'buy groceries'
console.log("Mutable remove:", tasks); // ['do laundry', 'clean room']

// ✅ Immutable: using filter()
const immutableTasks = ['do laundry', 'buy groceries', 'clean room'];
const remainingTasks = immutableTasks.filter(task => task !== 'buy groceries');
console.log("Immutable remove:", remainingTasks); // ['do laundry', 'clean room']
console.log("Original remains unchanged:", immutableTasks); // ['do laundry', 'buy groceries', 'clean room']
 */

/* console.log("\n---- Updating an element in an array ----");
// ❌ Mutable: direct modification
const prices = [10, 20, 30];
prices[1] = 25;
console.log("Mutable update:", prices); // [10, 25, 30]

// ✅ Immutable: using map()
const immutablePrices = [10, 20, 30];
const updatedPrices = immutablePrices.map(price => (price === 20 ? 25 : price));
console.log("Immutable update:", updatedPrices); // [10, 25, 30]
console.log("Original remains unchanged:", immutablePrices); // [10, 20, 30] */

/* console.log("\n---- Immutability with Objects ----");

const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};
console.log("Original object:", person);

// ✅ Immutable: Adding a new property
const personWithProfession = { ...person, profession: "Software Engineer" };
console.log("After adding a property:", personWithProfession);
console.log("Original object remains unchanged:", person);

// ✅ Immutable: Updating an existing property
const olderPerson = { ...person, age: 31 };
console.log("After updating a property:", olderPerson);
console.log("Original object remains unchanged:", person);

// ✅ Immutable: Deleting a property
const { age, ...personWithoutAge } = person;
console.log("After deleting a property:", personWithoutAge);
console.log("Original object remains unchanged:", person);

// ✅ Immutable: Updating a nested object
const personWithNewCity = {
  ...person,
  address: {
    ...person.address,
    city: "San Francisco",
  },
};
console.log("After updating a nested property:", personWithNewCity);
console.log("Original object remains unchanged:", person); */

//4️⃣AVOID SHARED STATE
//Shared mutable state can lead to bugs , especially in async or parallel systems.

/* // ❌ Shared State (Bad 👎🙅‍♂️)*****
let total = 0;
function addToTotal(n) {
  return (total += n);
}
console.log(addToTotal(5)); */

/* // ✅ avoid shared state ****
function add(a, b) {
  return a + b;
}

console.log(add(4, 5)); */

// 5️⃣AVOID SIDE EFFECT
// side effects are anything a function does outside its scope
//(API call,DOM update , modifying global vars)

/* //❌ Side Effect *******
function logMessage(msg) {
  console.log(msg); //side effect : interacts with console
}

//✅No side Effect *****
function getGreeting(name) {
  return `Hello,${name}`;
}

//✅No side Effect *****
function toCaptlize(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}
let str = "rampravesh kumar";
let newStr = toCaptlize(str);
console.log(newStr);
console.log(str);

console.log(str); */

//6️⃣ REUSE OR COMPOSE LOGIC
// Build small reusable function and compose them together
const toLower = (str) => str.toLowerCase();
const removeSpaces = (str) => str.replaceAll(" ", "");
const atTheRate = (str) => "@" + str;
let str = "Rampravesh kumar ";
let result = atTheRate(removeSpaces(toLower(str)));
console.log(result);

//7️⃣ DON'T ITERATE ( IMPERATIVELY )
// Avoid for while , etc Use map, filter, reduce.
