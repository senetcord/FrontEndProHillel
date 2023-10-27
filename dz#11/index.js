// #1
const askLink = document.querySelector(".js--askLink");
const goToLink = document.querySelector(".js--goToLink");
let link;

askLink.addEventListener("click", () => {
  link = prompt("Уведіть посилання", "https://www.wikipedia.org/");
});

goToLink.addEventListener("click", () => {
  location.href = link;
});

// #2
const father = document.querySelector(".js--task2");

father.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert(`Клікнуто по кнопці: ${e.target.innerText}`);
  }
});

// #3
const addBtn = document.querySelector(".js--btn");
const input = document.querySelector(".js--input");
const list = document.querySelector(".js--list");
const listItems = list.getElementsByTagName("li");

const form = document.querySelector(".js--form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addBtn.addEventListener("click", (e) => {
  if (input.value === "") {
    alert("Уведіть завдання!");
  } else {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Видалити";
    button.style.marginLeft = "5px";
    item.textContent = input.value;

    // Перший варіант
    // button.addEventListener("click", (e) => {
    //   e.target.parentNode.remove();
    // });

    item.appendChild(button);
    list.appendChild(item);
  }

  input.value = "";

  // Другий варіант
  Array.from(listItems).forEach((item) => {
    const liBtn = item.getElementsByTagName("button")[0];
    liBtn.addEventListener("click", () => {
      item.remove();
    });
  });
});
