// console.log('hello world');

// let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.tagName);
// console.log(h1.nodeName);
// console.log(h1.firstChild.nodeName);

// h1.tagName= "p"
// console.log(h1);

// h1.innerText= "nani teri morni ko mor le gaye   \n           baki jo bacha kale chor le gaye "

// h1.innerHTML='<span>hello world</span>'

// console.log(h1.innerText);
// console.log(h1.textContent);
// console.log(h1.innerHTML);

// inserting element

let div = document.querySelector("div");
let p = document.createElement("p");
// console.log(p);
// div.append(p);
// div.prepend(p)
// div.innerHTML = "<p>child</p>";
p.innerText = "para 4";

div.after(p);
div.before(p);
