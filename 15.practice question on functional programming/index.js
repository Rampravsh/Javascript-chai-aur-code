//How would you use .map() to transform a list of products into a list of HTML elements?

/* const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "Powerful computing on the go.",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    description: "Stay connected with the latest tech.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    description: "Immersive audio experience.",
  },
];
const productHtmlElements = products.map(
  (product) => `
      <div class="product-card" key="${product.id}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      </div>
    `
);
const productContainer = document.getElementById("product-list-container");
productContainer.innerHTML = productHtmlElements.join(""); */

//How do you use .reduce() to calculate the total price in a shopping cart?

/* const shoppingCart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 },
];

const totalPrice = shoppingCart.reduce((accumulator, currentItem) => {
  const itemTotal = currentItem.price * currentItem.quantity;
  return accumulator + itemTotal;
}, 0); // The '0' is the initial value of the accumulator

console.log(totalPrice); // Output: 1325 */

//Explain immutability and how you would update an object in an array without mutating the original

/* const originalArray = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const updatedArray = originalArray.map((person) => {
  if (person.id === 2) {
    // Create a new object with updated age, leaving the original person object untouched
    return { ...person, age: 26 };
  }
  return person; // Return unchanged person objects
});

console.log("Original Array:", originalArray);
console.log("Updated Array:", updatedArray); */

/* How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
composition, chaining, pipe or compose logic.) */

//  Define Individual Transformation Functions:
// First, define each transformation as a separate, pure function that takes an input and returns a transformed output.

const sanitize = (input) => input.replace(/<[^>]*>/g, ""); // Removes HTML tags
const trim = (input) => input.trim();
const capitalize = (input) =>
  input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

// pipe: Executes functions from left to right, passing the output of one function as the input to the next.
const pipe =
  (...fns) =>
  (initialValue) =>
    fns.reduce((acc, fn) => fn(acc), initialValue);

/* // Example usage:
const processUserInput = pipe(sanitize, trim, capitalize);
const userInput = "  <p>hello world</p>  ";
const processedInput = processUserInput(userInput); // "Hello world"
console.log(processedInput); */
// Using compose (Right-to-Left Execution):
/* const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((acc, fn) => fn(acc), initialValue);

// Example usage:
const processUserInput = compose(capitalize, trim, sanitize); // Note the order for right-to-left
const userInput = "  <p>hello world</p>  ";
const processedInput = processUserInput(userInput); // "Hello world" */

//What is the difference between forEach and map, and when is it wrong to use map?

//How do you implement your own version of .map() function on arrays?
