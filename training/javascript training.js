// let p = document.querySelector("p");

// let now = moment().format('yyyy.MM.DD HH:mm:ss a');
// p.innerHTML = now;

// setInterval(() => {
//   let now = moment().format("HH:MM:SS");
//   p.innerHTML = now;
// }, 1000);

// let date = moment("2022-05-6").isValid();
// console.log(date);

// let now = moment();
// console.log(now.format("YYYY-MM-DD"));
// methode add() & subtract()
// console.log(now.add(1, "month").format("YYYY-MM-DD"));
// console.log(now.subtract(1, "day").format("YYYY-MM-DD"));

// form() & formNow()

// let hossein = moment();
// console.log(hossein.format("YYYY-MM-DD"));

// let date = moment('2023-01-28 15:45:06');
// console.log(date.fromNow());
// let date1 = moment("2022-01-01");
// let date2 = moment("2022-01-05");
// console.log(date1.from(date2));

// diff() in moment.js library

// let date1 = moment("2022-01-01");
// let date2 = moment("2023-01-01");
// console.log(date2.diff(date1, "hours"));

// console.log(Date.parse("1970-01-04"));
// console.log(new Date());

// console.log(add(15, "minutes"));

// let d = new persianDate();
// console.log(d.format());

// let date = new Date();
// let pDate1 = new persianDate();

// console.log(date);
// console.log(pDate1.format(''));

// let pDate = new persianDate(new Date("1991-8-2"));
// console.log(pDate.toLocale("en").format("YYYY/MM/DD"));

// nextElementSibling;

// let element = document.querySelector("#box1");
// element.nextElementSibling.nextElementSibling;

// let element = document.querySelector("#box3");

// element.previousElementSibling;

// firstElementChild;
// lastElementChild;
// parentNode;
// parentElement;

// let box1 = document.querySelector(".box1");
// console.log(box1.parentElement);

// creating DOM nodes
//  روش اول
// let p1 = document.createElement("p");
// let text = document.createTextNode("next1code.ir");

// p1.appendChild(text);

// let container = document.querySelector("#container");
// container.appendChild(p1);

// let p2 = document.createElement("p");
// let text2 = document.createTextNode("Hossein kouhzad best programmer ");
// p2.appendChild(text2);
// container.appendChild(p2);

// روش دوم
// let p3 = document.createElement("p");
// p3.textContent = "hossein kouhzad front end developer";

// let container = document.querySelector("#container");
// container.appendChild(p3);

// let p4 = document.createElement("p");
// p4.innerHTML = "i will be the greatest progrtamer in history";
// container.appendChild(p4);

// funcion insert in DOM

// let container = document.querySelector("#container");

// function createNode(myTag, myText) {
//   let element = document.createElement(myTag);
//   element.texContent = myText;
//   return element;
// }
// let ul = createNode("ul", " ");
// let li1 = createNode("li", "item 1");
// let li2 = createNode("li", "item 2");
// let li3 = createNode("li", "item 3");
// let li4 = createNode("li", "item 4");
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);

// container.appendChild(ul);

// DOM manipulation
 
