import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { addItemThunk } from "../../utilities/Redux/thunks";

const InputForm = () => {
  const dispatch = useDispatch();
  const input = useRef(null);

  function handleSubmit(event) {
    dispatch(addItemThunk(event, input, uuidv4));
  }

  return (
    <form onSubmit={handleSubmit} className="inputForm">
      <input ref={input} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
export default InputForm;
