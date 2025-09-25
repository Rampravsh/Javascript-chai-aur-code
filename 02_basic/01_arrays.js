const fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// Array methods

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("orange");
console.log("After push:", fruits); // Output: ["apple", "banana", "cherry", "orange"]

// pop(): Removes the last element from an array and returns that element.
let removedFruit = fruits.pop();
console.log("After pop:", fruits); // Output: ["apple", "banana", "cherry"]
console.log("Removed fruit:", removedFruit); // Output: "cherry"

// shift(): Removes the first element from an array and returns that element.
let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // Output: ["banana", "cherry"]
console.log("Shifted fruit:", shiftedFruit); // Output: "apple"

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("grape", "kiwi");
console.log("After unshift:", fruits); // Output: ["grape", "kiwi", "banana", "cherry"]

// concat(): Joins two or more arrays and returns a new array.
const moreFruits = ["mango", "pineapple"];
const allFruits = fruits.concat(moreFruits);
console.log("After concat:", allFruits); // Output: ["grape", "kiwi", "banana", "cherry", "mango", "pineapple"]

// join(): Joins all elements of an array into a string.
const fruitsString = allFruits.join(" - ");
console.log("After join:", fruitsString); // Output: "grape - kiwi - banana - cherry - mango - pineapple"

// slice(): Returns a shallow copy of a portion of an array into a new array object.
const slicedFruits = allFruits.slice(1, 4);
console.log("After slice (1,4):", slicedFruits); // Output: ["kiwi", "banana", "cherry"]
console.log("Original array after slice:", allFruits); // Original array remains unchanged

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const vegetables = ["carrot", "broccoli", "spinach", "cabbage"];
console.log("Original vegetables:", vegetables); // Output: ["carrot", "broccoli", "spinach", "cabbage"]
vegetables.splice(1, 2, "cucumber", "tomato");
console.log("After splice (remove 2, add 2):", vegetables); // Output: ["carrot", "cucumber", "tomato", "cabbage"]

vegetables.splice(2, 0, "peas");
console.log("After splice (add 1 at index 2):", vegetables); // Output: ["carrot", "cucumber", "peas", "tomato", "cabbage"]

vegetables.splice(0, 1);
console.log("After splice (remove 1 from start):", vegetables); // Output: ["cucumber", "peas", "tomato", "cabbage"]

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const indexBanana = allFruits.indexOf("banana");
console.log("Index of 'banana':", indexBanana); // Output: 2

const indexGrapefruit = allFruits.indexOf("grapefruit");
console.log("Index of 'grapefruit':", indexGrapefruit); // Output: -1

// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const hasKiwi = allFruits.includes("kiwi");
console.log("Does array include 'kiwi'?", hasKiwi); // Output: true

const hasPear = allFruits.includes("pear");
console.log("Does array include 'pear'?", hasPear); // Output: false

// reverse(): Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers); // Output: [1, 2, 3, 4, 5]
numbers.reverse();
console.log("After reverse:", numbers); // Output: [5, 4, 3, 2, 1]

// sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original unsorted numbers:", unsortedNumbers); // Output: [3, 1, 4, 1, 5, 9, 2, 6]
unsortedNumbers.sort();
console.log("After sort (default):", unsortedNumbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

const unsortedStrings = ["banana", "apple", "cherry", "date"];
console.log("Original unsorted strings:", unsortedStrings); // Output: ["banana", "apple", "cherry", "date"]
unsortedStrings.sort();
console.log("After sort (strings):", unsortedStrings); // Output: ["apple", "banana", "cherry", "date"]

// Custom sort for numbers (ascending)
const customNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original custom numbers:", customNumbers);
customNumbers.sort((a, b) => a - b);
console.log("After custom sort (ascending):", customNumbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

// Custom sort for numbers (descending)
const customNumbersDesc = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original custom numbers desc:", customNumbersDesc);
customNumbersDesc.sort((a, b) => b - a);
console.log("After custom sort (descending):", customNumbersDesc); // Output: [9, 6, 5, 4, 3, 2, 1, 1]

// forEach(): Executes a provided function once for each array element.
console.log("\n--- forEach() ---");
allFruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("\n--- map() ---");
const upperCaseFruits = allFruits.map((fruit) => fruit.toUpperCase());
console.log("After map (toUpperCase):", upperCaseFruits); // Output: ["GRAPE", "KIWI", "BANANA", "CHERRY", "MANGO", "PINEAPPLE"]

const fruitLengths = allFruits.map((fruit) => fruit.length);
console.log("After map (lengths):", fruitLengths); // Output: [5, 4, 6, 6, 5, 9]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
console.log("\n--- filter() ---");
const longFruits = allFruits.filter((fruit) => fruit.length > 5);
console.log("After filter (length > 5):", longFruits); // Output: ["banana", "cherry", "pineapple"]

const fruitsWithA = allFruits.filter((fruit) => fruit.includes("a"));
console.log("After filter (includes 'a'):", fruitsWithA); // Output: ["banana", "mango", "pineapple"]

// reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
console.log("\n--- reduce() ---");
const sumOfNumbers = [1, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of numbers (reduce):", sumOfNumbers); // Output: 15

const concatenatedFruits = allFruits.reduce(
  (accumulator, currentValue) => accumulator + " " + currentValue
);
console.log("Concatenated fruits (reduce):", concatenatedFruits); // Output: "grape kiwi banana cherry mango pineapple"

// every(): Tests whether all elements in the array pass the test implemented by the provided function.
console.log("\n--- every() ---");
const allLongFruits = allFruits.every((fruit) => fruit.length > 3);
console.log("Are all fruits longer than 3 characters?", allLongFruits); // Output: true

const allStartWithG = allFruits.every((fruit) => fruit.startsWith("g"));
console.log("Do all fruits start with 'g'?", allStartWithG); // Output: false

// some(): Tests whether at least one element in the array passes the test implemented by the provided function.
console.log("\n--- some() ---");
const someLongFruits = allFruits.some((fruit) => fruit.length > 8);
console.log("Are some fruits longer than 8 characters?", someLongFruits); // Output: true

const someStartWithZ = allFruits.some((fruit) => fruit.startsWith("z"));
console.log("Do some fruits start with 'z'?", someStartWithZ); // Output: false

// find(): Returns the value of the first element in the array that satisfies the provided testing function.
console.log("\n--- find() ---");
const foundFruit = allFruits.find((fruit) => fruit.startsWith("b"));
console.log("Found fruit starting with 'b':", foundFruit); // Output: "banana"

const foundVegetable = vegetables.find((veg) => veg.includes("pea"));
console.log("Found vegetable including 'pea':", foundVegetable); // Output: "peas"

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
console.log("\n--- findIndex() ---");
const foundFruitIndex = allFruits.findIndex((fruit) => fruit.length === 5);
console.log("Index of first fruit with length 5:", foundFruitIndex); // Output: 0 (for "grape")

const notFoundIndex = allFruits.findIndex((fruit) => fruit === "watermelon");
console.log("Index of 'watermelon':", notFoundIndex); // Output: -1

// flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log("\n--- flat() ---");
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArrayOnce = nestedArray.flat();
console.log("Flat array (depth 1):", flatArrayOnce); // Output: [1, 2, 3, 4, [5, 6]]

const flatArrayFully = nestedArray.flat(Infinity);
console.log("Flat array (fully):", flatArrayFully); // Output: [1, 2, 3, 4, 5, 6]

// from(): Creates a new, shallow-copied Array instance from an array-like or iterable object.console.log("\n--- from() ---");
const stringToArray = Array.from("HELLO");
console.log("Array from string:", stringToArray); // Output: ["H", "E", "L", "L", "O"]

const set = new Set(["a", "b", "c"]);
const setToArray = Array.from(set);
console.log("Array from Set:", setToArray); // Output: ["a", "b", "c"]

const map = new Map([
  [1, "one"],
  [2, "two"],
]);
const mapToArray = Array.from(map);
console.log("Array from Map:", mapToArray); // Output: [[1, "one"], [2, "two"]]

// isArray(): Determines whether the passed value is an Array.
console.log("\n--- isArray() ---");
console.log("Is 'fruits' an array?", Array.isArray(fruits)); // Output: true
console.log("Is 'hello' an array?", Array.isArray("hello")); // Output: false
console.log("Is 123 an array?", Array.isArray(123)); // Output: false
