// 1️⃣ create a function that returns the last element of an array.
let arr = [1, 2, 3, 4, 5, 6];
const lastElement = () => {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return arr[i];
    }
  }
};
console.log(lastElement())