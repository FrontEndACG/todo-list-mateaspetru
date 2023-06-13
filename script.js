const toDo = document.getElementById("todo-input");
const btn = document.getElementById("add-btn");
const taskList = document.getElementById("todo-list");

toDo.addEventListener("input", onInputTodo);
btn.addEventListener("click", onClick);
taskList.addEventListener("click", onClickDeleteBtn);

function onInputTodo(e) {
  console.log(e.target.value);
  if (e.target.value.length > 0) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
}

function onClick(e) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  li.appendChild(span);
  taskList.appendChild(li);
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete");

  deleteBtn.innerText = "Delete";

  span.innerHTML = toDo.value;
  li.appendChild(deleteBtn);
  if (toDo.value != " ") {
    toDo.value = "";
  }
  btn.setAttribute("disabled", true);
}

function onClickDeleteBtn(e) {
  const li = e.target.parentElement;
  if (e.target.classList == "delete") {
    taskList.removeChild(li);
  }
}
