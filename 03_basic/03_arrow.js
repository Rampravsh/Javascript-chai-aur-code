const user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log(this.name);
    console.log(this);
  },
  sayHiArrow: () => {
    console.log(this.name);
  },
};

// user.sayHi();
// user.sayHiArrow();
// user.sayHi.call({ name: "Alice" });
// console.log(user.name)

// console.log(this);

// function chai() {
//     let a = 10;
//   console.log(this);
// }
// chai();

// const chai = () => {
//   let a = 10;
//   console.log(this);
// };
// chai();
