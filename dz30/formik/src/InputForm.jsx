import { Button } from "@mui/material";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const validateInput = (values) => {
  const errors = {};
  if (values.todoInput === undefined || values.todoInput.length < 5) {
    errors.input = "Requires at least 5 symbols";
  }
  return errors;
};

const InputForm = ({ onSubmit, deleteAll }) => {
  const formik = useFormik({
    initialValues: { todoInput: "" },
    validate: validateInput,
    onSubmit: onSubmit,
  });
  console.log(formik.initialErrors);
  return (
    <form onSubmit={formik.handleSubmit} className="form" autoComplete="off">
      <TextField
        value={formik.values.todoInput}
        type="text"
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        name="todoInput"
        onChange={formik.handleChange}
      />
      <Button disabled={!formik.isValid} type="submit" variant="outlined">
        ADD
      </Button>
      <Button onClick={deleteAll} type="button" variant="outlined">
        Delete All
      </Button>
      {formik.errors.input ? (
        <div style={{ color: "red", margin: "30px auto" }}>
          {formik.errors.input}
        </div>
      ) : null}
    </form>
  );
};

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
};

export default InputForm;
