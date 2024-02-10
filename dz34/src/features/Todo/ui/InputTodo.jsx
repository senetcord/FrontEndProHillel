import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch } from "react-redux";
import { addItemAsyncAction } from "../../../shared/Saga/asyncActions";
import { useState } from "react";

const InputTodo = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addItemAsyncAction(value));
  }
  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        mb: "30px",
      }}
    >
      <InputBase
        value={value}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write text here..."
        inputProps={{ "aria-label": "Write text here..." }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="submit"
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};
export default InputTodo;
