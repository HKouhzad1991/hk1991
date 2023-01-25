// let inputs = document.querySelectorAll("input[type=radio]");
// let button = document.querySelector("button");
// let p = document.querySelector("#selection");

// button.addEventListener("click", handler);
// function handler() {
//   let gender;
//   for (let input of inputs) {
//     if (input.checked == true) {
//       gender = input.value;
//       break;
//     }
//   }
//   p.innerHTML = `شما ${gender} هستید`;
// }

// let input = document.querySelector('select[name=city]');
// console.log(input);
// console.log(input.value);
// input.value = 'مشهد';

// let input = document.querySelector("select");
// let button = document.querySelector("button");
// let p = document.querySelector("#city");

// button.addEventListener("click", () => {
//   p.innerHTML = `شما ساکن ${input.value} هستید`;
// });

// let firstName = document.getElementById("firstname");
// let lastName = document.getElementById("lastname");

// firstName.addEventListener("focus", handler);
// lastName.addEventListener("focus", handler);

// function handler(event) {
//   event.target.select();
// }

// let day = document.getElementById("day");
// let month = document.getElementById("month");

// day.addEventListener("blur", handler);
// month.addEventListener("blur", monthHandler);

// function handler() {
//   if (!(day.value >= 1 && day.value <= 31)) {
//     day.nextElementSibling.innerHTML = "عدد باید بین 1 تا 31 باشد";
//   }
//   else {
//     day.nextElementSibling.innerHTML = "";
//   }
// }

// function monthHandler() {
//     if (!(month.value >= 1 && month.value <= 12)) {
//         day.nextElementSibling.innerHTML = 'عدد باید بین 1 تا 12  باشد'
//     }
//     else {
//         day.nextElementSibling.innerHTML = '';
//         }
// }

// let form = document.querySelector("form");
// let phone = document.querySelector("phone");

// form.addEventListener("submit", submitForm);
// form.addEventListener("reset", resetForm);

// function submitForm(event) {
//   if (phone.value.length !== 11) {
//     phone.nextElementSibling.innerHTML = "شماره موبایل نا معتبر است";
//     event.preventDefault();
//   }
// }
// window object
// const milad = {
//   firstName: "hossein",
//   lastName: "kouhzad",
// }
// milad.age = 31;
// console.log(milad);

// var firstName = 'hossein';
// console.log(window.firstName)

// function coding() {
//   console.log('best coder in history')
// }
// console.log(window.coding);
// console.log(Math.pow(2 , 3))

// let total = document.getElementById("total");
// let available = document.getElementById("available");
// let browser = document.getElementById("browser");
// let viewport = document.getElementById("viewport");
// let result = document.getElementById("result");

// let back = document.getElementById("back");
// let forward = document.getElementById("forward");
// let go = document.getElementById("go");
// let length = document.getElementById("length");

// let assign = document.getElementById("assign");
// let replace = document.getElementById("replace");
// let reload = document.getElementById("reload");

// let alertBtn = document.getElementById("alert");
// let confirnBtn = document.getElementById("confirm");
// let prompttBtn = document.getElementById("prompt");
// let p = document.querySelector("p");
// total.addEventListener("click", () => {
//   result.innerHTML = `width : ${screen.width}<br>
//                       height :${screen.height}`;
// });

// available.addEventListener("click", () => {
//   result.innerHTML = `width : ${screen.availWidth}<br>
//                       height :${screen.availHeight}`;
// });

// browser.addEventListener("click", () => {
//   result.innerHTML = `width : ${outerWidth}<br>
//                       height :${window.outerHeight}`;
// });

// viewport.addEventListener("click", () => {
//   result.innerHTML = `width : ${innerWidth}<br>
//                       height :${window.innerHeight}`;
// });

// back.addEventListener("click", () => history.back());

// forward.addEventListener("click", () => history.forward());

// go.addEventListener("click", () => history.go(2));

// length.addEventListener("click", () => alert(history.length));

// assign.addEventListener("click", () => {
//   location.assign("https://google.com");
// });

// replace.addEventListener("click", () => {
//   location.replace("https://google.com");
// });

// reload.addEventListener('click'()=> location.reload());

// alertBtn.addEventListener("click", () => {
//   alert("hossein kouhzad");
// });

// confirnBtn.addEventListener("click", () => {
//   let answer = confirm("میخواهی بهترین برنامه نویس تاریخ شی؟");
//   if (answer == true) {
//     document.body.style.backgroundColor = "cyan";
//   }
// });

// prompttBtn.addEventListener("click", () => {
//   let firstName = window.prompt("اسمت چیه؟");
//   let lastName = window.prompt("فامیلیت چیه ؟");
//   p.innerHTML = `${firstName} ${lastName} به وبسایت ما خوش اومدی `;
// });

// let printBtn = document.querySelector("button");
// let p = document.querySelector("p");

// printBtn.addEventListener("click", () => print());

// window.addEventListener("beforeprint", () => {
//   p.style.color = "red";
//   p.style.fontSize = "45px";
//   printBtn.style.display = "none";
// });

// window.addEventListener("afterprint", () => {
//   p.style.color = "";
//   p.style.fontSize = "";
//   printBtn.style.display = "inline";
// });

// let openBtn = document.getElementById("open");
// let closeBtn = document.getElementById("close");
// let myTab;
// openBtn.addEventListener("click", () => {
//   myTab = open("https://google.com");
// });
// closeBtn.addEventListener("click", () => {
//   myTab.close();
// });

// setTimeout()
// clearTimeout()
// let p = document.querySelector("p");
// let start = document.getElementById("start");
// let end = document.getElementById("end");
// let timer;
// start.addEventListener("click", () => {
//   timer = setTimeout(timerHandler, 3000);
// });

// end.addEventListener("click", () => {
//   clearTimeout(timer);
// });

// function timerHandler() {
//   let number = Number(p.innerHTML) + 1;
//   p.innerHTML = number;
//   setTimeout(timerHandler, 3000);
// }
// if (navigator.onLine == true) {
//     console.log('آنلاین هستید');
// }
// else {
//     console.log('افلاین هستید');
// }

// console.log(navigator.userAgentData);
// browser model
// console.log(platform.name);
// console.log(platform.version);
// console.log(platform.layout);   //rendering//
// console.log(platform.os);
// console.log(platform.description);

// browser EventS

let p = document.querySelector("p");

// window.addEventListener("load", () => {
//   p.innerHTML += "load event <br>";
// });

// window.addEventListener("DOMContentLoaded", () => {
//   p.innerHTML += "DomContentLoaded <br>";
// });

window.addEventListener("focus", () => {
  p.innerHTML += "focus event <br>";
});

window.addEventListener("blur", () => {
  p.innerHTML += "blur event <br>";
});
