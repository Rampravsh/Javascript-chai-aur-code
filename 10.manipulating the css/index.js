// Example 1: Changing the style of an element directly
const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");

const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
  // Change the color of the title
  title.style.color = "blue";
});

const bgButton = document.getElementById("bgButton");
bgButton.addEventListener("click", () => {
  // Change the background color of the paragraph
  paragraph.style.backgroundColor = "lightgray";
});

const fontSizeButton = document.getElementById("fontSizeButton");
fontSizeButton.addEventListener("click", () => {
  // Change the font size of the paragraph
  paragraph.style.fontSize = "20px";
});

// Example 2: Adding, removing, and toggling CSS classes

const addClassButton = document.getElementById("addClassButton");
addClassButton.addEventListener("click", () => {
  // Add the 'highlight' class to the paragraph
  paragraph.classList.add("highlight");
});

const removeClassButton = document.getElementById("removeClassButton");
removeClassButton.addEventListener("click", () => {
  // Remove the 'highlight' class from the paragraph
  paragraph.classList.remove("highlight");
});

const toggleClassButton = document.getElementById("toggleClassButton");
toggleClassButton.addEventListener("click", () => {
  // Toggle the 'highlight' class on the paragraph
  paragraph.classList.toggle("highlight");
});

let div = document.querySelector("div");
div.classList.add("box1");
console.log(div.classList);
