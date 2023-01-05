const ctrlBtn = document.querySelector(".ctrlbtn");
const sideBar = document.querySelector(".sidebar");

ctrlBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show");
  ctrlBtn.classList.toggle("open");
});
