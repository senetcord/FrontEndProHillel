function Form(form, button) {
  this.form = document.querySelector(`.${form}`);
  this.button = document.querySelector(`.${button}`);

  this.button.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    for (let i = 0; i < this.form.length; i++) {
      if (this.form[i].dataset.req) {
        checkReq(this.form[i]);
      }

      if (this.form[i].dataset.min_length) {
        checkMinLength(this.form[i]);
      }

      if (this.form[i].dataset.email) {
        checkEmail(this.form[i]);
      }

      if (this.form[i].closest("div").classList.contains("error")) {
        isValid = false;
      }
    }

    this.blockForm(isValid, this.form, button);
  });

  function checkReq(input) {
    if (input.value.trim().length > 0) {
      setSuccess(input);
    } else {
      const message = input.dataset.req;
      setError(input, message);
    }
  }

  function checkMinLength(input) {
    const minLength = Number(input.dataset.min_length);

    if (input.value.trim().length >= minLength) {
      setSuccess(input);
    } else {
      let messageShell = input.dataset.min_message;
      const message = messageShell.replace(/N/, `${minLength}`);

      setError(input, message);
    }
  }

  function checkEmail(input) {
    const mailRegExp = /\w+@\w+\.\w+/;
    if (input.value.match(mailRegExp)) {
      setSuccess(input);
    } else {
      const message = input.dataset.email;
      setError(input, message);
    }
  }

  function setSuccess(input) {
    input.closest("div").classList.remove("error");
    input.closest("div").classList.add("success");

    if (input.closest("div").querySelector(".small_item")) {
      input.closest("div").querySelector(".small_item").remove();
    }
  }

  function setError(input, message) {
    input.closest("div").classList.remove("success");
    input.closest("div").classList.add("error");

    if (input.closest("div").querySelector(".small_item")) {
      input.closest("div").querySelector(".small_item").remove();
    }

    input.insertAdjacentHTML(
      "afterend",
      `<small class="small_item">${message}</small>`
    );
  }
}

Form.prototype.blockForm = function (isValid, form, button) {
  if (isValid) {
    console.log(form.attributes.method, form.attributes.action);
    for (let i = 0; i < this.form.length; i++) {
      if (this.form[i].classList.contains(`${button}`)) {
        this.form[i].setAttribute("disabled", "disabled");
        continue;
      }
      console.log(this.form[i].name, this.form[i].value);
      this.form[i].closest("div").classList.add("success");
      this.form[i].setAttribute("disabled", "disabled");
    }
  }
};

const firstForm = new Form("js--reg_form", "btn");

const secondForm = new Form("js--reg_form2", "btn2");
