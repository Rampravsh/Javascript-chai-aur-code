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

/* let randomInt = Math.floor(Math.random() * 18 + 1);
console.log(randomInt); */

//4️⃣ Create a function that takes an array containing both numbers and strings, and
// returns a new arrays containing only the string values.

/* let arr = [1, 2, 3, "a", 2, "f", "ram"];

const returnString = (array) => {
  return array.filter((element) => typeof element === "string");
};

console.log(returnString(arr)); */

// 5️⃣ Find the maximum number in an array
// 1️⃣method
/* let arr = [1, 2, 3, 7, 5, 6];
let result = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > result) {
    result = arr[i];
  }
}
console.log(result);
//2️⃣ method
const maxNumber = Math.max(...arr);
console.log(maxNumber); */
