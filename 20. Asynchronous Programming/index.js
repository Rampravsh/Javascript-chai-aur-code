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

let p1 = new Promise(() => {
  console.log("promise");
});
console.log(p1);
console.log("promise come after this");
