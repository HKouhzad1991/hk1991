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

let pDate = new persianDate();
console.log(pDate.toLocale('en').format("YYYY/MM/DD"));
