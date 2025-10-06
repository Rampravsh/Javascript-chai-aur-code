// Immediately Invoked Function Expression (IIFE)

// (function chai() {
//   // named IIFE
//   console.log(`DB CONNECTED`);
// })();

// ((name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// })("ram");

// function sayHello() {
//     console.log(this)
// }
// sayHello()

// const sayHello2 = function () {
//   console.log(this);
// };
// sayHello2();
const sayHello3 = () => {
  console.log(this);
};
sayHello3();
