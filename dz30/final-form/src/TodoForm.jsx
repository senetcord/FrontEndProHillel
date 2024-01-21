import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { Button } from "@mui/material";
import Input from "./Input";

function TodoForm(props) {
  const { valid, handleSubmit, deleteAll, errors, dirty, submitFailed } = props;
  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <Field component={Input} name="todoInput" reset />
      <Button
        disabled={(!valid && submitFailed) || (!valid && dirty)}
        type="submit"
        variant="outlined"
      >
        ADD
      </Button>
      <Button onClick={deleteAll} type="button" variant="outlined">
        Delete All
      </Button>
      {(!valid && dirty) || submitFailed ? (
        <div style={{ color: "red", margin: "30px auto" }}>{errors.input}</div>
      ) : null}
    </form>
  );
}

TodoForm.propTypes = {
  valid: PropTypes.bool.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default TodoForm;
