// ARRAY IN JAVASCRIPT
//an array is a list that can store multiple values in one place
// Think of it like a row of boxes.where each box can hold one item (like a number word etc )
//You can use it to group similar thing together

//Create array using array Literal method (recommended):
// let colors = ["red", "blue", "green"];
// let marks = [23, 84, 34, 56];
// let personDetaols = ["riy", 10, "bihar"];

//create array using array constructor:
// let arr = new Array("spiderman", "ironman", "thor");
// console.log(arr);
// console.log(colors);

//not working code ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// let newArr = [];
// function marksShifts(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let shiftMarks = arr.shift();
//     console.log(shiftMarks);
//     newArr.unshift(shiftMarks);
//     console.log(newArr);
//   }
// }
// marksShifts(marks);

// console.log(marks);

// let hello = marks.push(marks.shift());
// console.log(marks);

// only use for better understanding ❌❌❌❌❌❌❌❌

let marks = [23, 84, 34, 56];

// function marksShifts(arr) {
//   let newArr = [];
//   while (arr.length > 0) {
//     let shiftMarks = arr.shift();
//     newArr.unshift(shiftMarks);
//   }
//   return newArr;
// }

// console.log(marks);
// marks = marksShifts(marks);
// console.log(marks);

// ✅✅✅✅✅✅ use reverse method for shift arry left to right
// marks.reverse();
// console.log(marks)
/* // some array methods
let arr = [1, 2, 3, 4, 5];

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
arr.push(6);
console.log("After push(6):", arr); // Output: [1, 2, 3, 4, 5, 6]

// pop(): Removes the last element from an array and returns that element.
let popped = arr.pop();
console.log("After pop():", arr); // Output: [1, 2, 3, 4, 5]
console.log("Popped element:", popped); // Output: 6

// shift(): Removes the first element from an array and returns that element.
let shifted = arr.shift();
console.log("After shift():", arr); // Output: [2, 3, 4, 5]
console.log("Shifted element:", shifted); // Output: 1

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0);
console.log("After unshift(0):", arr); // Output: [0, 2, 3, 4, 5]

// concat(): Joins two or more arrays and returns a new array.
let arr2 = [6, 7];
let newArr = arr.concat(arr2);
console.log("After concat([6, 7]):", newArr); // Output: [0, 2, 3, 4, 5, 6, 7]

// join(): Joins all elements of an array into a string.
let joinedString = newArr.join("-");
console.log("After join('-'):", joinedString); // Output: "0-2-3-4-5-6-7"

// slice(): Returns a shallow copy of a portion of an array into a new array object.
let slicedArr = newArr.slice(1, 4);
console.log("After slice(1, 4):", slicedArr); // Output: [2, 3, 4]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new
// elements.
let spliced = newArr.splice(1, 2, 99, 100);
console.log("After splice(1, 2, 99, 100):", newArr); // Output: [0, 99, 100, 4, 5, 6, 7]
console.log("Spliced elements:", spliced); // Output: [2, 3]

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = newArr.indexOf(99);
console.log("Index of 99:", index); // Output: 1
let notFoundIndex = newArr.indexOf(1000);
console.log("Index of 1000:", notFoundIndex); // Output: -1

// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includes99 = newArr.includes(99);
console.log("Includes 99:", includes99); // Output: true
let includes1000 = newArr.includes(1000);
console.log("Includes 1000:", includes1000); // Output: false */

//😎 sort method

let arr = [3, 54, 23];
let heroes = ["spiderman", "ironman", "hulk", "thor", "captain america"];
arr.sort();
console.log(arr);

heroes.sort();
console.log(herjoes);
