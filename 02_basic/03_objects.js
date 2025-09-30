// singleton object
const mySyn = Symbol("mySyn");
let user = {
  [mySyn]: "secret",
  name: "Ram pravesh kumar",
  age: 30,
  email: "ram@example.com",
};

//Object literal syntax
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

//Accessing object properties
// console.log(user.name); // Output: John
// console.log(user["age"]); // Output: 30
// console.log(user[mySyn]); // Output: secret
// console.log(typeof user[mySyn]); // Output: string
// console.log(typeof mySyn); // Output: symbol
// console.log(mySyn); // Output: symbol

//Adding new properties
// user.address = "123 Main St";
// user["phone"] = "555-1234";
// console.log(user);
// Object.freeze(user);
// user.age = 31; // This will not change the age property
// console.log(user.age); // Output: 30

//Deleting properties
// delete user.email;
// console.log(user); // Output: { name: 'John', age: 30 }

//Iterating over properties
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// Output:
// name: John
// age: 30
// email: ram@example.com

// const symbolKey = Object.getOwnPropertySymbols(user)
// for (let key of symbolKey) {
//   console.log(`${key.toString()}: ${user[key]}`);
// }
// Output:
// [mySyn]: secret


// adding a method to the object
// user.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };
// user.greet(); // Output: Hello, my name is ram pravesh kumar
// console.log(user.greet()) // Output: undefined because the greet method does not return anything
