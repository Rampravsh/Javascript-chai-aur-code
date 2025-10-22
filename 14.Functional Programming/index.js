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
/* const toLower = (str) => str.toLowerCase();
const removeSpaces = (str) => str.replaceAll(" ", "");
const atTheRate = (str) => "@" + str;
let str = "Rampravesh kumar ";
let result = atTheRate(removeSpaces(toLower(str)));
console.log(result); */

//7️⃣ DON'T ITERATE ( IMPERATIVELY )
// Avoid for while , etc Use map, filter, reduce.

//❌Imperative Style****
/* let evens = [];
for (let n of [1, 2, 3, 4, 5]) {
  if (n % 2 === 0) evens.push(n);
}
console.log(evens); */

//✅ FP (Declarative) Style ********
/* const evens = [1, 2, 3, 4, 5].filter((n) => n % 2 === 0);
console.log(evens); */

// 8️⃣ LOOSE COUPLING
//Coupling refers to how dependent one piece of code is on another.
//Loose coupling means less dependent , Keep functions and modules independent

/* //❌Tightly Coupled ******
function getUserData() {
  return fetch("https://api.example.com/user").then((res) => res.json());
}

//✅ Loosely Coupled****
function getData(api) {
  return fetch(api).then((res) => res.json());
} */

// --- Detailed Example of Loose Coupling ---

/* // A pure function that takes a user object and returns their name.
// It doesn't know or care where the user object comes from.
const getName = (user) => user.name;

// A pure function that takes a name and creates a greeting.
// It doesn't know or care how the name was generated.
const createGreeting = (name) => `Hello, ${name}`;

// Another function that could come from anywhere (e.g., an API call)
const fetchUser = () => {
  // In a real app, this might fetch from a server.
  return { id: 1, name: "Alice", email: "alice@example.com" };
};


// --- Composition ---
// We can compose these functions together. Each function is a separate,
// independent step in the process.

const user = fetchUser();
const userName = getName(user);
const greeting = createGreeting(userName);

console.log(greeting); // Output: Hello, Alice!


// --- Benefits of Loose Coupling ---

// 1. Reusability: We can reuse `createGreeting` for any name.
const greetingForBob = createGreeting("Bob");
console.log(greetingForBob); // Output: Hello, Bob!

// 2. Testability: We can test each function in isolation.
console.log("Testing getName:", getName({ name: "Test User" }) === "Test User");
console.log("Testing createGreeting:", createGreeting("Test") === "Hello, Test!");

// 3. Maintainability: If we need to change how we get the user's name
// (e.g., the property changes from 'name' to 'fullName'), we only need to
// update one small function (`getName`), and the rest of the system
// (`createGreeting`) remains unaffected.

const getFullName = (user) => user.fullName;

const userWithFullName = { id: 2, fullName: "Charlie Brown" };

const newGreeting = createGreeting(getFullName(userWithFullName));
console.log(newGreeting); // Output: Hello, Charlie Brown!
 */

//9️⃣ FIRST-CLASS & HIGHER ORDER FUNCTIONS
// First-Class :Function can be stoted in varibles, passed ,and returned
//Higher Order :Function that take other functions as arguments or return them

/* const greet = () => "hello";
const callWithName = (fn) => (name) => `${fn()} ${name}`;
const greetUser = callWithName(greet);
console.log(greetUser("rampravesh"));

console.log(greetUser); */
