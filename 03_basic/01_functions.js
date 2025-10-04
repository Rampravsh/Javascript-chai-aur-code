function sayMyname() {
  console.log("R");
  console.log("A");
  console.log("M");
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("V");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyname()
function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

const result = addTwoNumber(3, 4);

console.log("result :", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Ram Pravesh"));
console.log(loginUserMessage());

function calculateCartPrice(num1) {
  return num1;
}

console.log(calculateCartPrice(200)); // 200

function calculateCartPrice2(...num1) {
  return num1;
}

console.log(calculateCartPrice2(200, 400, 500)); // [200, 400, 500]

function calculateCartPrice3(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice3(200, 400, 500, 2000)); // [500, 2000]

const user = {
  username: "ram pravesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));