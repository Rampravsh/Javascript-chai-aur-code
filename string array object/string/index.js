// let str = "rampravesh kumar";
// let str2 = "Rampravesh";
// let str3 = `hello ${str2}`;

// console.log(str, "typeof:", typeof str);
// console.log(str2, "typeof:", typeof str2);
// console.log(str3, "typeof:", typeof str3);

//👎Bad practice to use italics method in js insted of here use css for italic text
/* let h1 = document.querySelector("h1");
console.log(h1.innerText.italics());
h1.innerHTML = h1.innerText.italics();
console.log(str.italics()); */

// string are immutable ❌change

let str = new String("Ramparavesh Kumar");
// console.log(str[1]);
// console.log(str[0]);
// console.log(str[3]);
// str[3] = "l";
console.log(str);

// let str = new String("hello world");
// let str2 = "";
// for (let ch of str) {
//   str2 = str2 + ch + " ";
// }
// console.log(str);
// console.log(str2);

//METHODS 🟢

// toUppercase✅
/* let str = "Hello World";
str2 = str.toUpperCase();
console.log(str);
console.log(str2);
 */
//toLowerCase✅
// let str = "Hello World";
// str2 = str.toLowerCase();
// console.log(str);
// console.log(str2);

//trim✅
// let str = "     hello world      ";
// console.log(str);
// let str2 = str.trim();
// console.log(str2);

// --- JavaScript String Methods Examples ---

const mainString = "  Hello, World! This is a test string.  ";
const exampleString = "JavaScript";

// --- 1. Accessing Characters & Substrings ---

// charAt(index): Returns the character at a specified index.
console.log("charAt(7):", mainString.charAt(9)); // Output: W

// at(index): Returns the character at a specified index. Can use negative indexes.
console.log("at(-2):", mainString.trim().at(-2)); // Output: g

// slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string.
console.log("slice(9, 14):", mainString.slice(9, 14)); // Output: World

// substring(startIndex, endIndex): Similar to slice(), but cannot accept negative indexes.
console.log("substring(9, 14):", mainString.substring(9, 14)); // Output: World

// --- 2. Searching and Finding ---

// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a value.
console.log("indexOf('o'):", mainString.indexOf("o")); // Output: 6

// lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a value.
console.log("lastIndexOf('o'):", mainString.lastIndexOf("o")); // Output: 13

// includes(searchValue, fromIndex): Checks if a string contains a specified value.
console.log("includes('World'):", mainString.includes("World")); // Output: true

// startsWith(searchValue, fromIndex): Checks if a string begins with the characters of a specified string.
console.log("startsWith('  Hello'):", mainString.startsWith("  Hello")); // Output: true

// endsWith(searchValue, length): Checks if a string ends with the characters of a specified string.
console.log("endsWith('string.  '):", mainString.endsWith("string.  ")); // Output: true

// search(regexp): Searches a string for a match against a regular expression, and returns the index of the match.
console.log("search(/test/):", mainString.search(/test/)); // Output: 25

// match(regexp): Retrieves the result of matching a string against a regular expression.
console.log("match(/is/g):", mainString.match(/is/g)); // Output: [ 'is', 'is' ]

// --- 3. Modifying and Creating New Strings ---

// concat(string2, string3, ...): Joins two or more strings.
const str1 = "Hello";
const str2 = "World";
console.log("concat():", str1.concat(" ", str2)); // Output: Hello World

// replace(searchValue, newValue): Replaces a specified value with another value. Replaces only the first match.
console.log("replace('is', 'was'):", mainString.replace("is", "was")); // Output:   Hello, World! Thwas is a test string.

// replaceAll(searchValue, newValue): Replaces all occurrences of a specified value with another value.
console.log("replaceAll('is', 'was'):", mainString.replaceAll("is", "was")); // Output:   Hello, World! Thwas was a test string.

// toLowerCase(): Converts a string to lowercase letters.
console.log("toLowerCase():", mainString.toLowerCase()); // Output:   hello, world! this is a test string.

// toUpperCase(): Converts a string to uppercase letters.
console.log("toUpperCase():", mainString.toUpperCase()); // Output:   HELLO, WORLD! THIS IS A TEST STRING.

// trim(): Removes whitespace from both ends of a string.
console.log("trim():", `'${mainString.trim()}'`); // Output: 'Hello, World! This is a test string.'

// trimStart(): Removes whitespace from the beginning of a string.
console.log("trimStart():", `'${mainString.trimStart()}'`); // Output: 'Hello, World! This is a test string.  '

// trimEnd(): Removes whitespace from the end of a string.
console.log("trimEnd():", `'${mainString.trimEnd()}'`); // Output: '  Hello, World! This is a test string.'

// padStart(targetLength, padString): Pads the current string from the start with a given string.
console.log("padStart(15, '*'):", exampleString.padStart(15, "*")); // Output: *****JavaScript

// padEnd(targetLength, padString): Pads the current string from the end with a given string.
console.log("padEnd(15, '*'):", exampleString.padEnd(15, "*")); // Output: JavaScript*****

// repeat(count): Returns a new string with a specified number of copies of the string.
console.log("repeat(3):", "Ha".repeat(3)); // Output: HaHaHa

// --- 4. Splitting a String ---

// split(separator, limit): Splits a string into an array of substrings.
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log("split(' '):", sentence.split(" ")); // Output: [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]
console.log("split(''):", exampleString.split("")); // Output: [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

//1️⃣Q. Create a program to take full name from user and generate a username start with @, followed by
// their full name and ends with underscor followed by the length of full name.

function createUserName(name) {
  let userName = "@" + name + "_" + name.length;
  return userName;
}
console.log(createUserName("rampravesh"));

// 2️⃣Q. Take a string and a character from the user and:
//a) count how many times that character appears in the string .
//b) Case-insensitive Version
//c) Find all Occurrence Position

let string = prompt("give me a string ");
console.log(string);
let character = prompt("give me a character");
console.log(character);
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i].toLowerCase() === character.toLowerCase()) {
    console.log(`${string[i]} at ${i}`);
    count++;
  }
}
console.log(count);
