// --- JavaScript Date Object Exploration ---

console.log("--- 1. Creating Date Objects ---");
// No arguments: current date and time
const now = new Date();
console.log("new Date():", now);

// From a date string
const specificDate = new Date("2025-10-25T12:00:00");
console.log("new Date(dateString):", specificDate);

// From components (year, monthIndex, day, hours, minutes, seconds, ms)
// Note: Months are 0-indexed (0 = January, 11 = December)
const componentDate = new Date(2025, 9, 25, 12, 30, 0); // Oct 25, 2025, 12:30 PM
console.log("new Date(components):", componentDate);

// From milliseconds since Unix Epoch (Jan 1, 1970)
const epochDate = new Date(1730000000000); // Corresponds to Sat, 26 Oct 2024...
console.log("new Date(milliseconds):", epochDate);

console.log("\n--- 2. Static Methods ---");
// Get current timestamp (milliseconds since epoch)
const timestamp = Date.now();
console.log("Date.now():", timestamp);

// Parse a date string to get its timestamp
const parsedTimestamp = Date.parse("2025-01-01");
console.log('Date.parse("2025-01-01"):', parsedTimestamp);

console.log("\n--- 3. Getter Methods ---");
const d = new Date("2025-12-31T22:15:30.500");
console.log("Working with Date:", d.toString());

console.log("getFullYear():", d.getFullYear()); // 2025
console.log("getMonth():", d.getMonth()); // 11 (December)
console.log("getDate():", d.getDate()); // 31
console.log("getDay():", d.getDay()); // 3 (Wednesday)
console.log("getHours():", d.getHours()); // 22
console.log("getMinutes():", d.getMinutes()); // 15
console.log("getSeconds():", d.getSeconds()); // 30
console.log("getMilliseconds():", d.getMilliseconds()); // 500
console.log("getTime():", d.getTime()); // Timestamp in ms

// UTC equivalent
console.log("getUTCFullYear():", d.getUTCFullYear());

console.log("\n--- 4. Setter Methods ---");
const modifiableDate = new Date();
console.log("Original Date:", modifiableDate.toString());

modifiableDate.setFullYear(2030);
console.log("After setFullYear(2030):", modifiableDate.toString());

modifiableDate.setMonth(0); // Set to January
console.log("After setMonth(0):", modifiableDate.toString());

modifiableDate.setDate(1);
console.log("After setDate(1):", modifiableDate.toString());

console.log("\n--- 5. Formatting and Conversion Methods ---");
console.log("toString():", d.toString());
console.log("toDateString():", d.toDateString());
console.log("toTimeString():", d.toTimeString());
console.log("toUTCString():", d.toUTCString());
console.log("toISOString():", d.toISOString());
console.log("toJSON():", d.toJSON());
console.log("valueOf():", d.valueOf()); // same as getTime()

console.log("\n--- 6. Locale-Specific Formatting ---");
// Using default locale
console.log("toLocaleString():", d.toLocaleString());
console.log("toLocaleDateString():", d.toLocaleDateString());
console.log("toLocaleTimeString():", d.toLocaleTimeString());

// Customizing with options
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(
  "Custom toLocaleDateString('en-US'):",
  d.toLocaleDateString("en-US", options)
);
console.log(
  "Custom toLocaleDateString('de-DE'):",
  d.toLocaleDateString("de-DE", options)
);
