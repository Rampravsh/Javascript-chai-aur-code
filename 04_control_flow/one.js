// if
const temperature = 41
if (temperature < 50) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("execute always");

const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // This will throw an error because power is block-scoped

const balance = 1000
if (balance > 500) console.log("test"); // implicit scope, not recommended

if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
