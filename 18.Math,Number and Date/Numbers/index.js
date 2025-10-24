// 🟢NUMBER IN JAVASCRIPT

let num = new Number(1232);
console.log(num);

// Number Properties
console.log("Number.MAX_VALUE: " + Number.MAX_VALUE);
console.log("Number.MIN_VALUE: " + Number.MIN_VALUE);
console.log("Number.EPSILON: " + Number.EPSILON);
console.log("Number.MAX_SAFE_INTEGER: " + Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER: " + Number.MIN_SAFE_INTEGER);
console.log("Number.NaN: " + Number.NaN);
console.log("Number.NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
console.log("Number.POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY);

// Number Methods
let num2 = 123.456;

console.log("toFixed(): " + num2.toFixed(2));
console.log("toPrecision(): " + num2.toPrecision(4));
console.log("toExponential(): " + num2.toExponential(2));
console.log("toString(): " + num2.toString());
console.log("toLocaleString(): " + num2.toLocaleString());

// More Number Methods
console.log("Number.isFinite(123): " + Number.isFinite(123));
console.log("Number.isFinite(Infinity): " + Number.isFinite(Infinity));
console.log("Number.isInteger(123): " + Number.isInteger(123));
console.log("Number.isInteger(123.45): " + Number.isInteger(123.45));
console.log("Number.isNaN(NaN): " + Number.isNaN(NaN));
console.log("Number.isNaN('hello'): " + Number.isNaN("hello"));
console.log("Number.isSafeInteger(123): " + Number.isSafeInteger(123));
console.log(
  "Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1): " +
    Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);
console.log("Number.parseFloat('123.45'): " + Number.parseFloat("123.45"));
console.log("Number.parseInt('123.45'): " + Number.parseInt("123.45"));

// Even More Number Methods
let num3 = new Number(255);
console.log("valueOf(): " + num3.valueOf());
console.log("toString(2): " + num3.toString(2));
console.log("toString(16): " + num3.toString(16));

// How toString() works
let myNumber = 20;
console.log("\n--- How toString() works ---");
console.log("Default (base 10): " + myNumber.toString());
console.log("Base 2 (binary): " + myNumber.toString(2));
console.log("Base 8 (octal): " + myNumber.toString(8));
console.log("Base 16 (hexadecimal): " + myNumber.toString(16));

// Number.prototype - used to add properties and methods to all instances of Number
Number.prototype.customMethod = function () {
  return this.valueOf() * 2;
};

let num4 = new Number(10);
console.log("\n--- Number.prototype example ---");
console.log("Custom method result: " + num4.customMethod());
