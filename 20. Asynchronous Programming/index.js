// console.log("1st task");
// setTimeout(() => {
//   console.log(
//     "2nd gdskfgkdfjgkldjflgkjd;lkfjgkdfjglkjdfklgjd;fkljgkldsjgkdfjgkdfjtask"
//   );
// }, 1000);
// for (let index = 0; index < 300; index++) {
//   const element = index;
//   console.log(element);
// }
// console.log("3rd task");

// console.log("4th task");

// callback function

// function hod(name, callback) {
//   callback(name);
// }

// function printName(name) {
//   console.log("hello", name);
// }

// hod("rampravesh", printName);

//❌❌❌❌❌❌ wrong example

// console.log("1. fetching data........\n ");
// function fetchData() {
//   setTimeout(() => {
//     console.log("first callback");
//     setTimeout(() => {
//       console.log("second callback");
//     }, 1000);
//   }, 2000);
// }
// fetchData();

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log(data);
//     if (callback) {
//       callback();
//     }
//   }, 2000);
// }
// console.log("fetching first data....");
// getData("data", () => {
//   getData("data 2", () => {
//     getData("data 3", () => {
//       getData("data 4");
//     });
//   });
// });

//✔️✔️✔️✔️ right example

// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     const data = { id: 1, name: "Product A" };
//     console.log("Data fetched:", data);
//     callback(data);
//   }, 1000);
// }

// function processData(data, callback) {
//   console.log("Processing data:", data);
//   setTimeout(() => {
//     const processedData = { ...data, processed: true };
//     console.log("Data processed:", processedData);
//     callback(processedData);
//   }, 1000);
// }

// function saveData(processedData, callback) {
//   console.log("Saving data:", processedData);
//   setTimeout(() => {
//     const savedResult = { success: true, item: processedData };
//     console.log("Data saved:", savedResult);
//     callback(savedResult);
//   }, 1000);
// }

// console.log("Starting data flow with callback hell:");
// fetchData((data) => {
//   processData(data, (processedData) => {
//     saveData(processedData, (result) => {
//       console.log("All operations complete:", result);
//     });
//   });
// });

//🚧🚧🚧 promises 😂😂😂😂😂

// let p1 = new Promise((resolve, reject) => {
//   // resolve('data fetched successfull')
//   reject('me tumse pyar nahi karti')
// });
// console.log(p1);
// console.log("promise come after this");

// let p1 = new Promise((resolve, reject) => {
//   console.log("this is a promise ");
//   // resolve("resolve ho gya hai");
//   reject("reject ho gya hai");
// });
// console.log(p1);

// p1.then((data) => {
//   // console.log('hello')
//   console.log(data);
// });
// p1.catch((error) => {
//   console.log(error);
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("resolve ho gya hai");
//     reject("reject ho gya hai");
//   }, 2000);
// });
// p1.then((data) => {
//   console.log(data);
// });
// p1.catch((error) => {
//   console.error(error);
// });
// // console.log("reload kar");

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1st prolmise resolve ho gya hai");
//     }, 2000);
//   });
// }
// let result = fetchData();
// result.then((data) => {
//   console.log(data);
// });
// // console.log(result);

// 🚀 Let's chain some Promises for a cleaner asynchronous flow!


function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve({ id: 1, name: "Product A" });
      } else {
        reject("Failed to fetch data.");
      }
    }, 1500);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    console.log("Processing data:", data);
    setTimeout(() => {
      if (data && data.id) {
        const processedData = { ...data, processed: true, timestamp: new Date() };
        resolve(processedData);
      } else {
        reject("Invalid data for processing.");
      }
    }, 1000);
  });
}

function saveData(processedData) {
  return new Promise((resolve, reject) => {
    console.log("Saving data:", processedData);
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve({ success: true, item: processedData, message: "Data saved successfully!" });
      } else {
        reject("Failed to save data.");
      }
    }, 1200);
  });
}

console.log("Starting data flow with Promises:");

fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
    return processData(data);
  })
  .then((processedData) => {
    console.log("Data processed successfully:", processedData);
    return saveData(processedData);
  })
  .then((result) => {
    console.log("All operations complete:", result);
  })
  .catch((error) => {
    console.error("An error occurred in the promise chain:", error);
  });
