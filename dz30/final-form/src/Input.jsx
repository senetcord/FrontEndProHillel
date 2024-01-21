import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({ input }) => {
  return (
    <TextField {...input} label="Todo" id="outlined-basic" variant="outlined" />
  );
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
};

export default Input;
