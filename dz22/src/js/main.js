import "../scss/styles.scss";

const input = document.querySelector(".js--input");
const fetchBtn = document.querySelector(".js--fetchBtn");
const loadingCircle = document.querySelector(".js--loadingCircle");
const resultContainer = document.querySelector(".js--resultContainer");
const resInfo = document.querySelector(".js--info");

const tryBtns = document.querySelectorAll(".js--hint span");

const URL = `https://swapi.dev/api/`;

fetchBtn.addEventListener("click", makeRequest);
tryBtns.forEach((item) => {
  item.addEventListener("click", tryHint);
});

async function makeRequest(event) {
  event.preventDefault();

  const inputData = input.value.trim();
  if (inputData === "") {
    alert("Уведіть значення!");
    return;
  }

  loadingCircle.classList.remove("js--hide");
  if (!resultContainer.classList.contains("js--hide")) {
    resultContainer.classList.add("js--hide");
  }

  const result = await fetchData(inputData);

  if (result) {
    loadingCircle.classList.add("js--hide");
    resultContainer.classList.remove("js--hide");
    resInfo.textContent = JSON.stringify(result, null, 4);
  }
}

async function fetchData(inputData) {
  try {
    const res = await fetch(`${URL}${inputData}`);
    const response = res.json();
    return response;
  } catch {
    throw new Error("COULDN'T FETCH DATA!");
  }
}

function tryHint(e) {
  input.value = e.target.textContent;
  makeRequest(event);
}
