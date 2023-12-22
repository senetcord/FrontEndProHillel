import axios from "axios";
import "../scss/styles.scss";

const inputArea = document.getElementById("inputArea");
const addTodoBtn = document.getElementById("addTodoBtn");
const clearAllTodoBtn = document.getElementById("clearAllTodoBtn");
const todoList = document.querySelector(".js--todoList");

document.addEventListener("DOMContentLoaded", async function () {
  const res = await axios.get("http://localhost:5000/todoList");
  renderTodoList(res.data);
});

function renderTodoList(data) {
  for (let i = 0; i < data.length; i++) {
    const todoData = data[i];
    const newTodo = renderTodoItem(
      todoData.text,
      todoData.checked,
      todoData._id
    );

    todoList.appendChild(newTodo);
  }
}

function renderTodoItem(text, checkedStatus, id) {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "d-flex", "align-items-center");
  li.id = id;

  const input = document.createElement("input");
  input.classList.add("form-check-input", "me-1", "js--todoChecked");
  input.type = "checkbox";
  input.checked = checkedStatus;

  const span = document.createElement("span");
  span.classList.add("ms-1", "js--todoText");
  span.textContent = text;

  const button = document.createElement("button");
  button.classList.add("btn-close", "ms-auto", "js--todoDeleteBtn");
  button.setAttribute("aria-label", "Close");

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  return li;
}
