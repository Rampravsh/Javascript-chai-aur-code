// 1️⃣ create a function that returns the last element of an array.

/* let arr = [1, 2, 3, 4, 5, 6];
const lastElement = () => {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return arr[i];
    }
  }
};
console.log(lastElement()) */

//2️⃣ Find the combination of two arrays.

/* const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ["a", "b", "c"];

let newArr = [...arr1, ...arr2];
console.log(newArr) */

//3️⃣ Generate a random integer between 0 to 18

let randomInt = Math.floor(Math.random() * 18 + 1);
console.log(randomInt);
