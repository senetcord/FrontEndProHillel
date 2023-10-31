const form = document.querySelector(".js--class");
const nameInput = document.querySelector("#exampleFormControlInput1");
const messageInput = document.querySelector("#exampleFormControlTextarea1");
const phoneInput = document.querySelector("#exampleFormControlInput2");
const emailInput = document.querySelector("#exampleFormControlInput3");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;

  //   Додав div-и для помилок в html.
  const nameError = document.querySelector("#name-error");
  const messageError = document.querySelector("#message-error");
  const phoneError = document.querySelector("#phone-error");
  const emailError = document.querySelector("#email-error");

  nameError.textContent = "";
  messageError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  if (name.trim() === "") {
    nameError.textContent = "Ім'я є обов'язковим!";
    isValid = false;
  }

  if (message.trim().length < 5) {
    messageError.textContent =
      "Повідомлення повинно містити мінімум 5 символів!";
    isValid = false;
  }

  //   /^\+380\d+$/ - якщо не повинно бути обов'язковою якась кількість цифр після +380
  if (!phone.match(/^\+380[0-9]{9}$/)) {
    phoneError.textContent =
      'Номер телефону повинен починатись на "+380" та містити 9 цифр!';
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent =
      "Email повинен мати таку форму - example@example.com";
    isValid = false;
  }

  if (isValid) {
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      console.log(`${key} - ${value}`);
    });
    console.log("-----------------------------------------");
  }
});
