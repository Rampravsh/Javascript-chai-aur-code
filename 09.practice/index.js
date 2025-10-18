// // Select the div and body elements
// const div = document.querySelector("div");
// const body = document.querySelector("body");

// // Create a new paragraph element
// const p = document.createElement("p");
// p.innerText = "mai tumse pyar nahi karta hun";
// // Append the paragraph to the body
// body.append(p);
// p.style.backgroundColor = "black";
// p.style.color = "green";

// // Create a new button element
// const btn = document.createElement("button");

// // Set the button's text
// btn.innerText = "click me";
// p.prepend(btn);

// // Set the background color of the div to black using setAttribute
// // div.setAttribute("style", "background-color:black");

// // Add a new class 'box2' to the div element
// div.setAttribute("class", `${div.getAttribute("class")} box2`);
// console.log(div.getAttribute("class"));
// console.log(div);

// Function to change the tag name of an HTML element
function changeTagname(oldNode, newTagName) {
  // Check if the provided oldNode is an actual HTML element
  if (!(oldNode instanceof Element)) {
    console.log("invalid node");
    return;
  }
  // Log the old node and the new tag name for debugging purposes
  //   console.log(oldNode);

  // Create a new element with the specified new tag name
  let newNode = document.createElement(newTagName);
  // Copy the inner text from the old node to the new node
  newNode.innerText = oldNode.innerText;
  // Log the newly created node for debugging
  console.log(newNode);
  // Insert the new node immediately after the old node
  oldNode.after(newNode);
  // Log the attributes of the old node for debugging
  // This logs a NamedNodeMap object containing all attributes of the oldNode.
  console.log(oldNode.attributes);
  // Iterate over the attributes of the old node
  // Copy all attributes from the old node to the new node
  for (const attr of oldNode.attributes) {
    console.log(attr);
    newNode.setAttribute(attr.name, attr.value);
  }
  // Replace the old node with the newly created node in the DOM
  oldNode.replaceWith(newNode);
}

// Select the HTML element with the class "box"
let div = document.querySelector(".box");

// Call the changeTagname function to attempt to change the tag of the selected div to a paragraph.
// This will log the div element and "p" to the console.
changeTagname(div, "p");

// Call the changeTagname function with an invalid node (an array).
// This will log "invalid node" to the console because the array is not an instance of Element.
// changeTagname([1, 3, 4], "p");
