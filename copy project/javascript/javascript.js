const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  let texValue = textarea.value;

  navigator.clipboard.writeText(texValue);
  copyBtn.innerText = "کپی شد";
  setTimeout(() => {
    copyBtn.innerText = "کپی کن";
    copyBtn.style.backgroundColor = "rgba(51, 49, 49, 0.421)";
  }, 2000);
});
