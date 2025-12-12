// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const myCar = new Car("Eagle", "Talon TSi", 1993);

// console.log(myCar);

// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// const myCar2 = Object.create(myHonda);
// // myCar2.color = "blue";
// console.log(myCar2);

// Animal properties and method encapsulation
// const Animal = {
//   type: "Invertebrates", // Default value of properties
//   displayType() {
//     // Method which will display type of Animal
//     console.log(this.type);
//   },
// };

// // Create new animal type called `animal`
// const animal = Object.create(Animal);
// animal.displayType(); // Logs: Invertebrates

// // Create new animal type called fish
// const fish = Object.create(Animal);
// fish.type = "Fishes";
// fish.displayType(); // Logs: Fishes

// function canMakeHTTPRequest() {
//     console.log(globalThis)
//   return typeof globalThis.XMLHttpRequest === "function";
// }

// console.log(canMakeHTTPRequest());

// let person = {
//   name: "rampravesh ",
//   lname: "kumar",
//   contact: 1234567890,
//   getContact: function () {
//     return this.contact;
//   },
// };
// console.log(person);
// console.log(person.getContact());

//old method (before ES6) to create a object blueprint

// function Person(fname, lname, contact) {
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;
//   this.getContact = function () {
//     return this.contact;
//   };
// }

// const p1 = new Person("rampravesh", "kumar", 238947298);
// console.log(p1);

// new class method to create object bluePrint

// class Person {
//   constructor(fname, lname, contact) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//   }
//   getContact() {
//     return this.contact;
//   }
// }

// let p1 = new Person("sdfk", "sfkshf", 8279847892);
// console.log(p1.getContact());

// 📂📂prototype and inheritance

const p1 = {
  name: "rampravesh ",
  lname: "kumar",
  contact: 1234567890,
  getContact: function () {
    return this.contact;
  },
};

const p2 = Object.create(p1);
console.log(p1);
console.log(p2);
