import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addItemAsyncAction } from "../../engine/Saga/asyncActions";

const InputForm = () => {
  const dispatch = useDispatch();
  const input = useRef(null);

  function handleSubmit(event) {
    dispatch(addItemAsyncAction({ event, input }));
  }

  return (
    <form onSubmit={handleSubmit} className="inputForm">
      <input ref={input} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
export default InputForm;
