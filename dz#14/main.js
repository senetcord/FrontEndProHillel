function todoFormInit(props) {
  const { todoFormInput, todoFormBtn, todosWrapper } = props;

  function deleteTodo() {
    this.parentNode.remove();
    updateSessionStorage();
  }

  function createTodoListItem(value, isChecked = false) {
    const newLi = document.createElement("li");
    newLi.classList.add("todo-item");

    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newCheckBox.addEventListener("change", (e) => {
      e.target.parentNode.classList.toggle("todo-item--checked");
      updateSessionStorage();
    });

    const newSpan = document.createElement("span");
    newSpan.classList.add("todo-item__description");
    newSpan.textContent = value;

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.classList.add("todo-item__delete");
    newDeleteBtn.textContent = "Видалити";
    newDeleteBtn.addEventListener("click", deleteTodo);

    newLi.append(newCheckBox, newSpan, newDeleteBtn);

    todosWrapper.appendChild(newLi);

    if (isChecked) {
      newLi.classList.add("todo-item--checked");
      newCheckBox.checked = true;
    }

    updateSessionStorage();
  }

  function addTodo(event) {
    event.preventDefault();

    if (todoFormInput.value.trim() === "") {
      alert("Уведіть значення!");
    } else {
      createTodoListItem(todoFormInput.value);
      todoFormInput.value = "";
    }
  }

  function updateSessionStorage() {
    const todoItems = Array.from(todosWrapper.children).map((li) => {
      const description = li.querySelector(
        ".todo-item__description"
      ).textContent;
      const isChecked = li.classList.contains("todo-item--checked");
      return { description, isChecked };
    });

    sessionStorage.setItem("todos", JSON.stringify(todoItems));
  }

  function loadTodosFromSessionStorage() {
    const storedTodos = sessionStorage.getItem("todos");

    if (storedTodos) {
      const todoItems = JSON.parse(storedTodos);

      todoItems.forEach((item) => {
        createTodoListItem(item.description, item.isChecked);
      });
    }
  }

  todoFormBtn.addEventListener("click", addTodo);
  window.addEventListener("DOMContentLoaded", loadTodosFromSessionStorage);
}

todoFormInit({
  todoFormInput: document.querySelector(".js--form__input"),
  todoFormBtn: document.querySelector(".js--form__btn"),
  todosWrapper: document.querySelector(".js--todos-wrapper"),
});
