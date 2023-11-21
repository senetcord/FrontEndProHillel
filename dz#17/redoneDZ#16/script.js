class Form {
  constructor(form, button) {
    this.form = document.querySelector(`.${form}`);
    this.button = document.querySelector(`.${button}`);

    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      let isValid = true;

      for (let i = 0; i < this.form.length; i++) {
        if (this.form[i].dataset.req) {
          isValid = isValid && this.validateRequired(this.form[i]);
        }

        if (this.form[i].dataset.min_length) {
          isValid = isValid && this.validateMinLength(this.form[i]);
        }

        if (this.form[i].dataset.email) {
          isValid = isValid && this.validateEmail(this.form[i]);
        }
      }

      if (isValid) {
        this.submitForm(button);
      }
    });
  }

  validateRequired(input) {
    if (input.value.trim().length > 0) {
      this.setSuccess(input);
      return true;
    } else {
      const message = input.dataset.req;
      this.setError(input, message);
      return false;
    }
  }

  validateMinLength(input) {
    const minLength = Number(input.dataset.min_length);

    if (input.value.trim().length >= minLength) {
      this.setSuccess(input);
      return true;
    } else {
      let messageShell = input.dataset.min_message;
      const message = messageShell.replace(/N/, `${minLength}`);

      this.setError(input, message);
      return false;
    }
  }

  validateEmail(input) {
    const mailRegExp = /\w+@\w+\.\w+/;
    if (input.value.match(mailRegExp)) {
      this.setSuccess(input);
      return true;
    } else {
      const message = input.dataset.email;
      this.setError(input, message);
      return false;
    }
  }

  setSuccess(input) {
    input.closest("div").classList.remove("error");
    input.closest("div").classList.add("success");

    if (input.closest("div").querySelector(".small_item")) {
      input.closest("div").querySelector(".small_item").remove();
    }
  }

  setError(input, message) {
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

  submitForm(button) {
    console.log(this.form.attributes.method, this.form.attributes.action);
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
}

// Form.prototype.submitForm = function (button) {
//   console.log(this.form.attributes.method, this.form.attributes.action);
//   for (let i = 0; i < this.form.length; i++) {
//     if (this.form[i].classList.contains(`${button}`)) {
//       this.form[i].setAttribute("disabled", "disabled");
//       continue;
//     }
//     console.log(this.form[i].name, this.form[i].value);
//     this.form[i].closest("div").classList.add("success");
//     this.form[i].setAttribute("disabled", "disabled");
//   }
// };

const firstForm = new Form("js--reg_form", "btn");

const secondForm = new Form("js--reg_form2", "btn2");
