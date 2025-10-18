const div = document.querySelector("div");
const body = document.querySelector("body");

const p = document.createElement("p");
p.innerText = "mai tumse pyar nahi karta hun";
body.append(p);
p.style.backgroundColor = "black";
p.style.color = "green";

const btn = document.createElement("button");

btn.innerText = "click me";
p.prepend(btn);

div.setAttribute("style", "background-color:black");
div.style.color = "white";
