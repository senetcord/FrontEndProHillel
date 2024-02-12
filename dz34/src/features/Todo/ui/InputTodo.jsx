import { useDispatch } from "react-redux";
import { addItemAsyncAction } from "../../../shared/Saga/asyncActions";
import { Form } from "react-final-form";
import InputForm from "./validation/InputForm";
import validateInput from "./validation/validateInput";

const InputTodo = () => {
  const dispatch = useDispatch();
  function handleSubmit(event, form) {
    dispatch(addItemAsyncAction(event.todoInput));
    form.reset();
    form.getFieldState("todoInput").active = true;
  }

  return (
    <Form validate={validateInput} onSubmit={handleSubmit} render={InputForm} />
  );
};

export default InputTodo;
