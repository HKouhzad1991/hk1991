let p = document.querySelector("p");

// let now = moment().format('yyyy.MM.DD HH:mm:ss a');
// p.innerHTML = now;


setInterval(() => {
  let now = moment().format('HH:MM:SS');
  p.innerHTML = now;
}, 1000);
