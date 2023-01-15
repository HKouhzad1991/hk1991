// var num = 20;
// while (num >= 1){
//     console.log(num);
//     num--;
// }

// var num =20;
// do{
//     console.log(num);
//     num--;
// }
// while(num>=1);

// for(var num =20 ; num>=1 ; num--) {
// //     console.log(num);
// // }

// var day = 2;
// switch (day) {
//   case 1:
//     console.log("shanbe");
//     break;
//  case 2:
//     console.log("1 shanbe");
//     break;
//      case 3:
//     console.log("2shanbe");
//     break;
//      case 4:
//     console.log("3shanbe");
//     break;
//      case 5:
//     console.log("4shanbe");
//     break;
//      case 6:
//     console.log("5shanbe");
//     break;
//      case 7:
//     console.log("jome");
//     break;
//     default:
//     console.log("namotabar");
// }
// var i = 1;
// while(i<=10)
// {
//     console.log("hossein");
//     i++;
// }
// var sum =1;
// for(var num=10 ; num<=90 ; num++)
// {
//     sum *= num;
// }
// console.log(sum);
// var num = 20;
// while (num >= 1){
//   console.log(num);
//   num--;
// }

// var num = 20 ;
// do{
//     console.log(num);
//     num--;
// }
// while(num>=1);

//   for(var num =200 ; num>=1 ; num--)
//   {
//     console.log(num);
//   }

// function addNumbers( num1, num2){
//     console.log(num1 * num2);
// }

// addNumbers(5,10);
// addNumbers(100 ,5);

// var add = function (num1 , num2){
//     console.log(num1 + num2);
// }
// add (5 , 10);

// function addNumbers( num1, num2){
// return num1 * num2 ;
// }

// var x = addNumbers(1 5,10);
// console.log(x);

// var add = function (num1 , num2){
//     console.log(num1 + num2);
// }
// add (5 , 10);
// var num1 = 10 ;
// var num2 = 14 ;
// var num3 = 10 ;
// var num4 = 10 ;
// var num5 = 10 ;

// function average(num1 , num2, num3 , num4 , num5){
//      var total = num1 + num2 + num3 + num4 + num5;
// var av = total / 5;
// if (av >= 12) {
//   console.log("قبول");
// } else {
//   console.log("مشروط");
// }
// }
// aver   age(15,16,18,12,19);

// function sum(num1,num2,num3){
//   return num1+num2+num3;
// }
// console.log(sum(1,2,3));
// console.log(sum(5,5,5));

// function myFunction(){
//   console.log(arguments.length);
// }

// myFunction(10,5,55);

// function sum() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum());
// console.log(sum(10,5))

// function sum(...numbers){
//   var total = 0;
//   for (var i=0 ;i < numbers.length;i++){
//     total+= numbers[i];
//   }
//   return total;
// }
// console.log(sum(5,25));

// function power(base ,exponent){
//   var result =1;
//   for(var i=1 ; i<=exponent ; i++){
//     result*= base;
//   }
//   return result;
// }
// console.log(power(2,10));

// var result = 1;
// for (var i=1 ; i<=3 ; i++){
//   result *=4 ;
// }
// console.log(result);

// with function

// function power(base , exponent){
//   var result=1;
//   for(var i=1 ;i<=exponent;i++){
//     result*=base;
//   }
//   return result;
// }
// console.log(power(2,10));

// function isPrime(number) {
//   var count = 0;
//   for (var i = 1; i < number; i++) {
//     if (number % i == 0) count++;
//   }

//   if (count == 2) return true;
//   else return false;
// }

// function isPrime(number) {
//   for (var i = 2; i < number; i++) {
//     if (number % i == 0) return false;
//   }
//   return true;
// }

// function rangePrime(firstNum, lastNum) {
//   var result = [];
//   for (var i = firstNum; i <= lastNum; i++) {
//     if (isPrime(i) == true) result.push(i);
//   }
//   return result;
// }

// console.log(rangePrime(50, 100));

// var result=[];
// for (var i = 12 ; i <= 20; i++){
//   var count = 0;
//   for(var j=1; j<=i ; j++){
//     if (i % j == 0)
//       count++;
//   }
//   if (count == 2)
//     result.push(i);
// }
// console.log(result);

// function expression

// var message = function () {
//   console.log("next1code");
// };

// // arrow function
// var message = () => console.log("next1code");
// message();

// var add = function (a, b) {
//   return a + b;
// }
// var add = (a, b) => a + b;
// console.log(add(5, 10));

// var power = function (num) {
//   return num * num;
// }

//
// var website;
// website = 'next1code.ir';
// console.log(website);

// objects
// const Hossein = {
//     firstNAme: 'Hoissein',
//     lastName: 'kouhzad',
//     age: '31',
//     gender: 'male',
//     isMarried: 'True',
//     favorites : ['Coding' , 'movies']
// }
// console.log(Hossein['age '])
// console.log(Hossein.age

// javascript method

// if key=value=>function =>method
// hossein.gender()

// const Hossein = {
//   firstNAme: "Hoissein",
//   lastName: "kouhzad",
//   age: "31",
//   gender: "male",
//   isMarried: "True",
//   favorites: ["Coding", "movies"],
//   coding: function () {
//     return "hossein is coding...";
//     },
//     grades: {
//         math :20 ,
//         sport: 20,
//         coding : 20
//   }
// };
// console.log(Hossein.coding());
// console.log(Hossein.grades.coding);

// object clone

// const hossein = {
//   firstName: "hossein",
//   lastName: "kouhzad",
//   age: "31",
// };
// const myObject = { ...hossein };
// console.log(hossein);

// myObject.isMarried = true;

// this keyword in method

// const hossein = {
//   firstName: "hossein",
//   lastName: "kouhzad",
//   age: 25,
//   favorites: ["music", "coding"],
//   fullName: function () {
//     return this.firstName + " fucking programmer" + this.lastName;
//   }
// };
// console.log(hossein.fullName());

// for-of loop in array-strings -map

// let myArray = [5, 20, 15, 18, 21];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// for (let Element of myArray) {
//   console.log(Element);
// }

// let str = "hossein kouhzad";
// for(let element of str){
// console.log(element)};

// for-in loop => objects
// const myArray = [5, 20, 15, 18, 21];
// const hossein = {
//   firstName: "hossein",
//   lastName: "kouhzad",
//   age: 25,
// };
// for (let element of myArray) {
//     console.log(element);
// }
// for(let key in hossein) {
//   console.log(key + " => " + hossein[key]);
// }

// let element = document.getElementById("heading");
// console.log(element);
// console.log(typeof element);

// let element = document.getElementById('heading');
// console.log(element);
// let element = document.getElementsByTagName('p');
// console.log(element[0]);

// let element = document.querySelector(".container");
// console.log(element.innerHTML);
// console.log(typeof element);

// console.log(document.documentElement);

// let element1 = document.querySelector(".container");
// console.log(element1.innerHTML);

// let p = (document.getElementById("test").innerHTML =
//   "the best programmer in history");
// console.log(p);

//
// document.getElementById('id').attribute = 'new value';

// document.getElementById("box").style.backgroundColor = "orange";
// document.getElementById("box").style.borderRadius = "150px";
// let firstName = 'hossein';
// console.log(`your name: ${firstName}`);
// console.log(Math.floor(5.3));
// rgb(Math.random() * 256, Math.random() * 256, Math.random() * 256);
// let random = Math.random() * 256;
// console.log(random);

// random color:
// function randNum() {
//   return Math.floor(Math.random() * 256);
// }
// function randColor() {
//   return `rgb(${randNum()},${randNum()},${randNum()})`;
// }

// function changeColor() {
//   document.body.style.backgroundColor = randColor();
// }

// getComputedStyle()

// function eventHandler() {
//     document.body.style.backgroundColor='cyan'
// }

// button.onclick = function () {
//     document.body.style.backgroundColor = "orange";
// }

// button.addEventListener('click', changeColor);

// function changeColor() {
//     document.body.style.backgroundColor = "purple";
// }
// let button = document.querySelector("button");

// button.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });
// button.addEventListener("click", function () {
//   console.log("hossein kouhzad");
// });
// let button = document.querySelector("button");
// button.addEventListener("dblclick", function () {
//   document.body.style.backgroundColor = "blue";
//   console.log("double click");
// });
// button.addEventListener("click", function () {
//   console.log("click");
// });

// mouse down/up

// let button = document.querySelector("button");
// button.addEventListener("contextmenu", function () {
//   console.log("right click");
//   document.body.style.backgroundColor = "cyan";
// });
// counter project:

// mouseenter:
// mouseleave:
// mouseover / mouseout:

// const container = document.querySelector(".container");
// const child = document.querySelector(".child");

// container.addEventListener("mouseenter", function () {
//   console.log("mouseenter : container");
// })

// container.addEventListener("mouseleave", function () {
//   console.log("mouseleave:container");
// })
// container.addEventListener("mouseenter", function () {
//   console.log("mouseenter : child");
// })

// const btn = document.querySelector('button');
// btn.addEventListener('click', eventHandler);
// function eventHandler(event) {

// }

// let div = document.querySelector(".box");
// div.addEventListener("click", handler);

// function handler(event){
//   let message = "Event Type : ${event.type}</br>";

//   message += `Target:${event.target.nodeName}</br>` ;

//   message += 'clientX: ${event.clientX}';
//   div.innerHTML = message;
// }

// let input = document.querySelector("input");
// let p = document.querySelector("p");

// input.addEventListener("keydown", () => {
//   p.innerHTML += "keydown";
// });
// input.addEventListener("keyup", () => {
//   p.innerHTML += "keyup";
// });

// input.addEventListener("keypress", () => {
//   p.innerHTML += "keypress";
// });
// let input = document.querySelector("input");
// let p = document.querySelector("p");

// input.addEventListener("keydown", (event) => {
//   if (event.code == "KeyA" && event.ctrlKey) {
//     document.body.style.backgroundColor = " red";
// }
// p.innerHTML += `event type : ${event.type} </br>`;
// p.innerHTML += `target: ${event.target.nodeName} </br>`;
// p.innerHTML += `event type : ${event.keyCode}</br>`;
// p.innerHTML += `event type : ${event.charCode}</br>`;
// p.innerHTML += ` key : ${event.key} </br>`;
// p.innerHTML += ` ctrl : ${event.ctrlKey}</br>`;
// p.innerHTML += ` Alt : ${event.altKey}</br>`;
// p.innerHTML += ` Ctrl : ${event.ctrlKey}</br>`;
// p.innerHTML += ` Shift : ${event.shiftKey}</br>`;
// p.innerHTML += ` Repeat : ${event.repeat}</br>`;
// });

// const div = document.querySelector("div");
// const p = document.querySelector("p");
// const body = document.body;

// div.addEventListener("touchstart", (event) => {
//   p.innerHTML = "touch start";
//   body.style.backgroundColor = "cyan";
//   p.innerHTML = event.touches.length;
// });

// div.addEventListener("touchend", () => {
//   p.innerHTML = "touch end";
//   body.style.backgroundColor = "yellow";
// });
// div.addEventListener("touchmove", () => {
//   p.innerHTML = "touch move";
//   body.style.backgroundColor = "orange";
// });

// let container = document.querySelector(".container");
// let container = document.querySelector(".child");

// child.addEventListener("click", childHandler, false);
// container.addEventListener("click", containerHandler, false);

// function childHandler() {
//   child.innerHtml += "child handler </br>";
// }

// function containerHandler() {
//   child.innerHtml += "container handler";
// }

// event delegation

let li = document.querySelectorAll("#li1");
let P = document.querySelector("p");

for (let i = 0; i<= li.length) 
li1.addEventListener("click", () => {
  P.innerHTML = li.innerHTML;
});

li2.addEventListener("click", () => {
  P.innerHTML = li.innerHTML;
  
});

li3.addEventListener("click", () => {
  P.innerHTML = li.innerHTML;
});

li4.addEventListener("click", () => {
  P.innerHTML = li.innerHTML;
});
