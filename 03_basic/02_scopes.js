let a = 10;
const b = 20;
var c = 30;

{
  let a = 40;
  const b = 50;
  var c = 60;
  //     console.log(a)
  //     console.log(b)
  //     console.log(c)
}

// console.log(a)
// console.log(b)
// console.log(c)

// nasted scopes

function one() {
  const username = "sam";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
// one();

// closures

// function outer() {
//   const username = "sam";
//   function inner() {
//     console.log(username);
//   }
//   return inner;
// }
// const myfunc = outer();
// myfunc();

if (true) {
  const username = "sam";
  if (username === "sam") {
    const website = "youtube";
    // console.log(website);
  }
  // console.log(username);
}
// console.log(username);

//intersting example
// addone(5);
function addone(num) {
  return num + 1;
}

// addtwo(5);
const addtwo = function (num) {
  return num + 2;
};
