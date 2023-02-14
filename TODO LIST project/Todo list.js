let addBtn = document.querySelector("button");
let taskList = document.querySelector("ul");
let input = document.querySelector("input");
let tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTasks();
}

addBtn.addEventListener("click", () => {
  let text = input.value;
  let task = createTask(text);
  task.innerHTML +=
    '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
  taskList.appendChild(task);
  saveTasks(text); 
  input.value = "";
});

taskList.addEventListener("click", (e) => {
  if (e.target.nodeName == "I") {
    e.target.parentElement.parentElement.style = "display: none";
  }
  if (e.target.nodeName == "LI") {
    e.target.classList.toggle("done");
  }
});
function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}

function saveTasks(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}

function getTasks() {
  return localStorage.getItem("todo").split(" , ");
}
// console.log(localStorage.getItem("todo").split());

let a = "task1 , task2 , task3";
console.log(a.split(","));
