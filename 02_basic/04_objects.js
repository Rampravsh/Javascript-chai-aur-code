// Objects in JavaScript
//second way to create object using Object constructor

const tinderUser = new Object();
// console.log(tinderUser); // {}
tinderUser.name = "ram pravesh kumar";
tinderUser.age = 24;
tinderUser.isLoggedIn = false;
// console.log(tinderUser); // { name: 'ram pravesh kumar', age: 24, isLoggedIn: false }

//nasted object
tinderUser.address = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
};
// console.log(tinderUser); // { name: 'ram pravesh kumar', age: 24, isLoggedIn: false, address: {

//merge two objects
let obj1 = {
  key1: "value1",
  key2: "value2",
};
let obj2 = {
  key3: "value3",
  key4: "value4",
};
let mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

// another way to merge two objects using spread operator
let mergedObj2 = { ...obj1, ...obj2 };
// console.log(mergedObj2); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

//Object.create and more methods
let animal = {
  eats: true,
};
let dog = Object.create(animal);
// console.log(dog.eats); // true
dog.barks = true;
// console.log(dog.barks); // true
// console.log(dog); // {}
// console.log(dog.__proto__); // { eats: true }
// console.log(Object.getPrototypeOf(dog)); // { eats: true }
// console.log(dog.hasOwnProperty("barks")); // true

//Object.keys, values, entries and more methods
// console.log(Object.keys(dog)); // [ 'barks' ]
// console.log(Object.values(dog)); // [ true ]
// console.log(Object.entries(dog)); // [ [ 'barks', true ] ]
// console.log(Object.entries(animal)); // [ [ 'eats', true ] ]
// console.log(Object.getOwnPropertyNames(dog)); // [ 'barks' ]
// console.log(Object.getOwnPropertyDescriptors(dog)); // { barks: { value: true, writable: true, enumerable: true, configurable: true } }

const course = {
  coursename: "js in hindi",
  price: 999,
  courseInstructor: "hitesh",
};
const { courseInstructor: instructor, price } = course;
// console.log(instructor);
// console.log(price);


