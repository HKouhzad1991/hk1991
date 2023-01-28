// let p = document.querySelector("p");

// let now = moment().format('yyyy.MM.DD HH:mm:ss a');
// p.innerHTML = now;

// setInterval(() => {
//   let now = moment().format("HH:MM:SS");
//   p.innerHTML = now;
// }, 1000);

// let date = moment("2022-05-6").isValid();
// console.log(date);

let now = moment();
console.log(now.format("YYYY-MM-DD"));
console.log(now.add(1, "month").format('YYYY-MM-DD'));
