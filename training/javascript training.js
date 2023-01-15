let ul = document.querySelector("ul");
let p = document.querySelector("p");

ul.addEventListener("click", (event) => {
  let target = event.target;
  p.innerHTML = target.innerHTML;
});
