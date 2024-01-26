import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Value: {count}</h3>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
};
export default Counter;
