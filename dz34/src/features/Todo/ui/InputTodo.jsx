import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch } from "react-redux";
import { addItemAsyncAction } from "../../../shared/Saga/asyncActions";
import { Form, Field } from "react-final-form";
import InputBaseDecorator from "./InputBaseDecorator";
import { Box } from "@mui/material";

const InputTodo = () => {
  const dispatch = useDispatch();
  function handleSubmit(event, form) {
    dispatch(addItemAsyncAction(event.todoInput));
    form.reset();
  }

  return (
    <Form validate={validateInput} onSubmit={handleSubmit} render={InputForm} />
  );
};

export default InputTodo;

function InputForm(props) {
  const { handleSubmit, hasValidationErrors, errors, dirty, submitFailed } =
    props;
  console.log(props);
  return (
    <Box sx={{ mb: "30px" }}>
      <Paper
        onSubmit={handleSubmit}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Field component={InputBaseDecorator} name="todoInput" />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          disabled={hasValidationErrors && submitFailed}
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
      {(hasValidationErrors && dirty) || submitFailed ? (
        <Box sx={{ textAlign: "center", marginTop: "10px", color: "red" }}>
          {errors.todoInput}
        </Box>
      ) : null}
    </Box>
  );
}

function validateInput(values) {
  const errors = {};

  if (values.todoInput === undefined || values.todoInput === "") {
    errors.todoInput = "Required!";
  } else if (values.todoInput.trim() === "") {
    errors.todoInput = "Cannot be empty!";
  }

  return errors;
}
