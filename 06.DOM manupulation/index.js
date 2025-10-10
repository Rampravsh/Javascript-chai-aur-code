// console.log("hello world!");

// function clickHandler() {
//   console.log("button was clicked");
//   button.style.color = "red";
//   p.style.backgroundColor = "blue";
// }

// let b = document.querySelector("button");

// let a = document.querySelector("h1");
// console.log(a);

// a.innerHTML = "hello rampravesh kumar";

// let p = document.querySelector("p");
// p.innerHTML = "kya kar rahe ho bro ";

// button = document.querySelector("button");

// button.innerHTML = "new me ";
// console.log(button);

// button.style.backgroundColor = "#e4c6c6ff";
// a.style.color = 'black'

// button.addEventListener("click", function (e) {
//   // body
//   console.log("hello");
// });

// a.addEventListener("click", clickHandler);

// let hello = document.querySelector("#hello");
// console.log(hello);

// hello.innerHTML = "hai to yaha ";

let on = document.querySelector("#on");
let off = document.querySelector("#off");
let hello = document.querySelector("#hello");
on.addEventListener("click", () => {
  hello.style.backgroundColor = "yellow";
  console.log("click");
});
off.addEventListener("click", () => {
  hello.style.backgroundColor = "black";
  console.log("click");
});
