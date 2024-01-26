import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices/todoSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
      />
      <Button onClick={() => dispatch(add({ value: input, id: uuidv4() }))}>
        Add
      </Button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.value}</li>;
        })}
      </ul>
      <h3>Total {todos.length}</h3>
    </form>
  );
};
export default TodoList;
