// console.log("Script Start");

// 1. Asynchronous programming with Callbacks (the old way)
// ---------------------------------------------------------

// console.log("--- Example 1: Using Callbacks with setTimeout ---");

// function delayedGreeting(callback) {
//   console.log("Timer started (2 seconds)...");
//   setTimeout(() => {
//     // This code runs after 2000 milliseconds (2 seconds)
//     console.log("Timer finished!");
//     callback("Hello from the past!");
//   }, 2000);
// }

// delayedGreeting((message) => {
//   console.log("Callback executed:", message);
// });

// console.log("This message is logged immediately, before the timer finishes.");

// 2. Asynchronous programming with Promises (the modern way)
// ----------------------------------------------------------

// console.log("\n--- Example 2: Using Promises ---");

// function fetchData() {
//   // A Promise is an object representing the eventual completion or failure of an async operation.
//   return new Promise((resolve, reject) => {
//     console.log("Fetching data from server... (will take 3 seconds)");
//     setTimeout(() => {
//       const success = true; // Change to false to simulate an error
//       if (success) {
//         const data = { userId: 1, name: "John Doe", role: "Admin" };
//         // 'resolve' is called when the operation is successful.
//         resolve(data);
//       } else {
//         // 'reject' is called when an error occurs.
//         reject("Error: Failed to fetch data from the server.");
//       }
//     }, 3000);
//   });
// }

// fetchData()
//   .then((data) => {
//     // .then() is executed when the promise is resolved (successful)
//     console.log("Promise resolved! Data:", data);
//   })
//   .catch((error) => {
//     // .catch() is executed when the promise is rejected (error)
//     console.error("Promise rejected! Error:", error);
//   })
//   .finally(() => {
//     // .finally() is always executed, regardless of success or failure.
//     console.log("Fetch operation complete.");
//   });

// console.log("Promise has been dispatched. Code continues to run...");

// 3. Asynchronous programming with Async/Await (the cleanest way)
// ---------------------------------------------------------------
// Async/Await is syntactic sugar over Promises, making async code look synchronous.

// console.log("\n--- Example 3: Using Async/Await ---");

// // You must declare a function as 'async' to use 'await' inside it.
// async function processUserData() {
//   try {
//     console.log("Waiting to fetch user data...");
//     const userData = await fetchData(); // Pauses execution until the promise resolves
//     console.log("Async/Await: Data received!", userData);
//     console.log("Now we can work with the data as if it were synchronous.");
//   } catch (error) {
//     console.error("Async/Await: An error occurred!", error);
//   }
// }

// processUserData();

// console.log("Script End. Waiting for async operations to complete.");

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(await response.json());
}
fetchData();
