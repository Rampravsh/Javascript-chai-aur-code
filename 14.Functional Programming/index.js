// console.log("hello rampravesh");
/*
 Imperative foreach vs declarative foreach
 Imperative map vs declarative map
 Imperative filter vs declarative filter
 Imperative reduce vs declarative reduce
 Imperative every vs declarative every
 Imperative find vs declarative find */

// imperative programming
/* let arr = [1, 2, 4, 5, 3, 5, 6];
let double = [];
for (let index = 0; index < arr.length; index++) {
  double.push(arr[index] * 2);
}
console.log(double); */

//declarative Programming

/* let arr = [1, 2, 4, 5, 3, 5, 6];
let double = arr.map((element) => element * 2);
console.log(double); */

/* // ✅ PURE FUNCTIONS*********
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

// ✅IMMUATABILITY *******
//do not modify existing data instead, return new copies

//❌ Mutable ******
/* const user = { name: "ram pravesh kumar " };
user.age = 25; //directly modifies origanal object
console.log(user); //{name: 'ram pravesh kumar ', age: 25} */

//✅Immutable******
/* const updateUser = { ...user, age: 35 };
console.log(updateUser); //{name: 'ram pravesh kumar ', age: 35} */

// More examples of immutability with arrays

console.log("---- Adding an element to an array ----");
// ❌ Mutable: using push()
const hobbies = ['reading', 'sports'];
hobbies.push('cooking');
console.log("Mutable add:", hobbies); // ['reading', 'sports', 'cooking']

// ✅ Immutable: using spread syntax
const immutableHobbies = ['reading', 'sports'];
const newHobbies = [...immutableHobbies, 'cooking'];
console.log("Immutable add:", newHobbies); // ['reading', 'sports', 'cooking']
console.log("Original remains unchanged:", immutableHobbies); // ['reading', 'sports']


console.log("\n---- Removing an element from an array ----");
// ❌ Mutable: using splice()
const tasks = ['do laundry', 'buy groceries', 'clean room'];
tasks.splice(1, 1); // Removes 'buy groceries'
console.log("Mutable remove:", tasks); // ['do laundry', 'clean room']

// ✅ Immutable: using filter()
const immutableTasks = ['do laundry', 'buy groceries', 'clean room'];
const remainingTasks = immutableTasks.filter(task => task !== 'buy groceries');
console.log("Immutable remove:", remainingTasks); // ['do laundry', 'clean room']
console.log("Original remains unchanged:", immutableTasks); // ['do laundry', 'buy groceries', 'clean room']


console.log("\n---- Updating an element in an array ----");
// ❌ Mutable: direct modification
const prices = [10, 20, 30];
prices[1] = 25;
console.log("Mutable update:", prices); // [10, 25, 30]

// ✅ Immutable: using map()
const immutablePrices = [10, 20, 30];
const updatedPrices = immutablePrices.map(price => (price === 20 ? 25 : price));
console.log("Immutable update:", updatedPrices); // [10, 25, 30]
console.log("Original remains unchanged:", immutablePrices); // [10, 20, 30]