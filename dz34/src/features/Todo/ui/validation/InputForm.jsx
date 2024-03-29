import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputBaseDecorator from "./InputBaseDecorator";
import { Box } from "@mui/material";
import { Field } from "react-final-form";

function InputForm(props) {
  const { handleSubmit, hasValidationErrors, errors, dirty, submitFailed } =
    props;
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

export default InputForm;
