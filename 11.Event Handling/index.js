const button = document.getElementById("myButton");
const container = document.getElementById("container");
const link = document.getElementById("myLink");
const input = document.getElementById("myInput");

/* // Example 1: MouseEvent - click
button.addEventListener("click", (event) => {
  console.log("--- MouseEvent Example ---");
  console.log("Event Type:", event.type); // 'click'
  console.log("Target Element:", event.target); // The button element
  console.log("Current Target:", event.currentTarget);
  console.log("Timestamp:", event.timeStamp);
  console.log("Client X:", event.clientX); // X coordinate relative to the viewport
  console.log("Client Y:", event.clientY); // Y coordinate relative to the viewport
  console.log("Event Object:", event);
}); */

/* // Example 2: Event Bubbling and stopPropagation
container.addEventListener("click", (event) => {
  console.log("--- Event Bubbling Example ---");
  console.log("Container div clicked!");
}); */

/* // To stop the event from bubbling up to the container
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button click event stopped from bubbling!");
}); */

/* // Example 3: Preventing Default Action
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("--- preventDefault Example ---");
  console.log("Default link navigation prevented.");
}); */

/* // Example 4: KeyboardEvent - keydown
input.addEventListener("keydown", (event) => {
  console.log("--- KeyboardEvent Example ---");
  console.log("Event Type:", event.type); // 'keydown'
  console.log("Key:", event.key);
  console.log("Code:", event.code);
  if (event.key === "Enter") {
    console.log("Enter key was pressed.");
  }
}); */

/* button.addEventListener("mousedown", () => console.log("mousedown"));
button.addEventListener("mouseup", () => console.log("mouseup"));
button.addEventListener("mousemove", () => console.log("mousemove"));
button.addEventListener("mouseover", () => console.log("mouseover"));
button.addEventListener("mouseout", () => console.log("mouseout"));
button.addEventListener("mouseenter", () => console.log("mouseenter"));
button.addEventListener("mouseleave", () => console.log("mouseleave")); */

/* input.addEventListener("keyup", (event) => {
  console.log("--- KeyboardEvent Example (keyup) ---");
  console.log("Event Type:", event.type); // 'keyup'
  console.log("Key:", event.key);
  console.log("Code:", event.code);
}); */

/* input.addEventListener("keypress", (event) => {
  console.log("--- KeyboardEvent Example (keypress) ---");
  console.log("Event Type:", event.type); // 'keypress'
  console.log("Key:", event.key);
  console.log("Code:", event.code);
}); */

/* button.addEventListener("keydown", (e) => {
  // This event listener is attached to the button and listens for keydown events.
  // Check if the key pressed was "Enter"
  if (e.key === "Enter") {
    // Prevent default action, e.g., submitting a form
    e.preventDefault();
    // Trigger the button's click event
    button.click();
    console.log("helo");
  }
}); */

// project 1

/* const incBtn = document.querySelector(".incBtn");
const decBtn = document.querySelector(".decBtn");
const counterValue = document.querySelector(".counterValue");
incBtn.addEventListener("click", () => {
  counterValue.innerText = Number(counterValue.innerText) + 1;
});
decBtn.addEventListener("click", () => {
  counterValue.innerText = Number(counterValue.innerText) - 1;
});
 */

// project 2
/* let form = document.querySelector("form");
let body = document.querySelector("body");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let submitBtn = document.querySelector(".submitBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameInput.value || !emailInput.value) {
    return;
  }
  const p = document.createElement("p");
  p.textContent = `Name: ${nameInput.value}, Email: ${emailInput.value}`;
  body.append(p);
  nameInput.value = "";
  emailInput.value = "";
}); */
