// let container = document.querySelector("#container");

// function createNode(myTag, myText) {
//   let element = document.createElement(myTag);
//   element.textContent = myText;
//   return element;
// }

// let p = createNode("p", "next1code");
// let ul = document.querySelector("ul");
// container.insertBefore(p, ul);

// let ul = document.querySelector("ul");

// let item2 = ul.firstElementChild.nextElementSibling;
// let removed = ul.removeChild(item2);
// console.log(removed);

// ul.appendChild(removed);

// replaceChild()

// function createNode(myTag, myText) {
//   let element = document.createElement(myTag);
//   element.textContent = myText;
//   return element;
// }
// let div = document.querySelector("div");
// let newElement = createNode("h1", "hossein");

// let oldElement = div.lastElementChild.previousElementSibling;

// div.replaceChild(newElement, oldElement);

let ul = document.querySelector("ul");
ul.innerHTML = `<li>item1</li>`;
