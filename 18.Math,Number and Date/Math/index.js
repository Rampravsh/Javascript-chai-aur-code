//MATH IN JAVASCRIPT

//Math is a built-in object that has properties and methods for mathematical
//constants and functions. It is not a function object.
//Math is used to perform mathematical tasks on numbers.

//Example:

// --- Math Properties (Constants) ---
// These are static properties that represent common mathematical constants.
console.log("--- Math Properties ---");
console.log("Math.E:", Math.E); // Euler's number, approx 2.718
console.log("Math.PI:", Math.PI); // Pi, approx 3.14159
console.log("Math.LN2:", Math.LN2); // Natural logarithm of 2
console.log("Math.SQRT2:", Math.SQRT2); // Square root of 2
console.log("Math.LOG10E:", Math.LOG10E); // Base 10 logarithm of E

// --- Math Methods (Functions) ---
// These are static methods that perform various mathematical operations.

// 1. Rounding Methods
console.log("\n--- Rounding Methods ---");
console.log("Math.round(4.7):", Math.round(4.7)); // 5 (rounds to nearest integer)
console.log("Math.round(4.4):", Math.round(4.4)); // 4
console.log("Math.round(4.5):", Math.round(4.5)); // 5 (rounds up for .5)
console.log("Math.floor(4.7):", Math.floor(4.7)); // 4 (rounds down)
console.log("Math.ceil(4.4):", Math.ceil(4.4)); // 5 (rounds up)
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4 (removes fractional part)
console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4

// 2. Power and Root Methods
console.log("\n--- Power and Root Methods ---");
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 (2 * 2 * 2)
console.log("Math.sqrt(64):", Math.sqrt(64)); // 8 (square root)
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3 (cube root, ES6+)

// 3. Absolute Value and Sign
console.log("\n--- Absolute Value and Sign ---");
console.log("Math.abs(-4.7):", Math.abs(-4.7)); // 4.7 (absolute value)
console.log("Math.sign(10):", Math.sign(10)); // 1 (positive)
console.log("Math.sign(-5):", Math.sign(-5)); // -1 (negative)
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.sign('hello'):", Math.sign("hello")); // NaN (not a number)

// 4. Min and Max Methods
console.log("\n--- Min and Max Methods ---");
console.log(
  "Math.min(0, 150, 30, 20, -8, -200):",
  Math.min(0, 150, 30, 20, -8, -200)
); // -200 (lowest value)
console.log(
  "Math.max(0, 150, 30, 20, -8, -200):",
  Math.max(0, 150, 30, 20, -8, -200)
); // 150 (highest value)

// 5. Random Number Generation
console.log("\n--- Random Number Generation ---");
console.log("Math.random():", Math.random()); // A pseudo-random float between 0 (inclusive) and 1 (exclusive)

// Example: Get a random integer between 0 and 9 (inclusive)
console.log("Random 0-9:", Math.floor(Math.random() * 10));

// Example: Get a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 1-10:", getRandomInt(1, 10));

// 6. Trigonometric Methods
console.log("\n--- Trigonometric Methods ---");
const angleInDegrees = 90;
const angleInRadians = angleInDegrees * (Math.PI / 180);
console.log("Sine of 90 degrees:", Math.sin(angleInRadians)); // 1 (approx)
console.log("Cosine of 0 radians:", Math.cos(0)); // 1
console.log("Tangent of PI/4:", Math.tan(Math.PI / 4)); // 1 (approx)
console.log("ArcSine of 1 (in radians):", Math.asin(1)); // 1.5707... (PI/2)
console.log("ArcTangent of y/x (1,1):", Math.atan2(1, 1)); // 0.78539... (PI/4)

// Hyperbolic Functions (ES6+)
console.log("Math.sinh(0):", Math.sinh(0)); // 0
console.log("Math.cosh(0):", Math.cosh(0)); // 1
console.log("Math.tanh(0):", Math.tanh(0)); // 0
console.log("Math.asinh(0):", Math.asinh(0)); // 0
console.log("Math.acosh(1):", Math.acosh(1)); // 0
console.log("Math.atanh(0):", Math.atanh(0)); // 0

// 7. Logarithmic Methods
console.log("\n--- Logarithmic Methods ---");
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1 (natural logarithm)
console.log("Math.log10(100):", Math.log10(100)); // 2 (base 10 logarithm, ES6+)
console.log("Math.log2(8):", Math.log2(8)); // 3 (base 2 logarithm, ES6+)

// Additional Exponential and Logarithmic Functions (ES6+)
// Math.expm1(): Returns e^x - 1. More accurate for small x.
console.log("Math.expm1(0):", Math.expm1(0)); // 0
console.log("Math.expm1(1):", Math.expm1(1)); // 1.71828... (e - 1)
// Math.log1p(): Returns ln(1 + x). More accurate for small x.
console.log("Math.log1p(0):", Math.log1p(0)); // 0
console.log("Math.log1p(Math.E - 1):", Math.log1p(Math.E - 1)); // 1 (ln(e))

// 8. Other Methods
console.log("\n--- Other Methods ---");
// Math.hypot(): Returns the square root of the sum of squares of its arguments.
console.log("Math.hypot(3, 4):", Math.hypot(3, 4)); // 5 (sqrt(3*3 + 4*4) = sqrt(25))

// Math.clz32(): Returns the number of leading zero bits in the 32-bit binary representation of a number. (ES6+)
console.log("Math.clz32(1):", Math.clz32(1)); // 31 (000...001)
console.log("Math.clz32(1000):", Math.clz32(1000)); // 22

// Math.fround(): Returns the nearest single precision float representation of x. (ES6+)
console.log("Math.fround(0.1 + 0.2):", Math.fround(0.1 + 0.2)); // 0.30000001192092896

// Math.imul(): Returns the result of the 32-bit integer multiplication of x and y. (ES6+)
console.log("Math.imul(2, 3):", Math.imul(2, 3)); // 6
console.log("Math.imul(0xffffffff, 5):", Math.imul(0xffffffff, 5)); // -5 (due to 32-bit overflow behavior)

// Note: Many of the newer Math methods (marked ES6+) might not be available in older JavaScript environments.
// Always check compatibility if targeting older browsers or Node.js versions.
