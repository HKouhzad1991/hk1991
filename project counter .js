const currentNum = document.getElementById("number");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");

let newNum;

// increase button

increaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) + 1;
  currentNum.innerHTML = newNum;
});

// reset button

resetBtn.addEventListener("click", function () {
  currentNum.innerHTML = 0;
});

// decrease button
decreaseBtn.addEventListener("click", function () {
  newNum = Number(currentNum.innerHTML) - 1;
  currentNum.innerHTML = newNum;
});
