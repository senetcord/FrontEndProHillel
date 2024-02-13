import { InputBase } from "@mui/material";

const InputBaseDecorator = ({ input }) => {
  return (
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Write text here..."
      inputProps={{ "aria-label": "Write text here..." }}
      component="input"
      onChange={input.onChange}
      value={input.value}
    />
  );
};
export default InputBaseDecorator;
