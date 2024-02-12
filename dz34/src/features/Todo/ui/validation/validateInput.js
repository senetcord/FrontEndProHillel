export default function validateInput(values) {
  const errors = {};

  if (values.todoInput === undefined || values.todoInput === "") {
    errors.todoInput = "Required!";
  } else if (values.todoInput.trim() === "") {
    errors.todoInput = "Cannot be empty!";
  }

  return errors;
}
