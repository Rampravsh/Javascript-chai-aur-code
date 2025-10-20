const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Capturing / Trickling
/* grandParent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Capturing");
  },
  true
); */

/* parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent Capturing");
  },
  true
); */

/* child.addEventListener(
  "click",
  (e) => {
    console.log("Child Capturing");
  },
  true
); */

// Event Bubbling
/* grandParent.addEventListener("click", (e) => {
  console.log("Grandparent Bubbling");
});
 */
/* parent.addEventListener("click", (e) => {
  console.log("Parent Bubbling");
}); */

/* child.addEventListener("click", (e) => {
  console.log("Child Bubbling");
}); */

//event.target vs event.currentTarget vs this
/* grandParent.addEventListener("click", function (e) {
  console.log("Current Target:", e.currentTarget); // Grandparent
  console.log("Target:", e.target); // Actual clicked element
  console.log("This:", this); // Grandparent
  console.log("grandParent Bubbling");
}); */

/* parent.addEventListener("click", (e) => {
  console.log("Current Target:", e.currentTarget);
  // e.stopImmediatePropagation();
  console.log("Target:", e.target);
  console.log("This:", this);
  console.log("Parent Bubbling");
  // e.stopPropagation();
}); */

/* child.addEventListener("click", (e) => {
  console.log("Current Target:", e.currentTarget);
  console.log("Target:", e.target);
  e.stopImmediatePropagation;
  console.log("This:", this);
  console.log("Child Bubbling");
  // e.stopPropagation();
}); */

let box = document.querySelectorAll(".box");
let container = document.querySelector(".container");

let textarea = document.querySelector("#textarea");

// console.log(textarea);
/* container.addEventListener("click", () => {
  console.log("click ho gya hai");
}); */
// console.log(box);
/* box.forEach((box) => {
  // console.log(box);
  box.addEventListener("click", () => {
    console.log(box.innerText);
  });
}); */

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    console.log(e.target.innerText);
    textarea.value = textarea.value + e.target.innerText;
  }
  // console.log(e.target.classList.contains("box"));
  // console.log(container.innerText);
});
