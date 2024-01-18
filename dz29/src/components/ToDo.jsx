import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";
import { ThemeMode } from "../App";

const ToDo = () => {
  const [theme] = useContext(ThemeMode);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todosList")) || []
  );

  const input = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (input.current.value.trim() === "") {
      alert("Enter a value!");
      input.current.value = "";
      return;
    }

    setTodos([
      ...todos,
      {
        text: input.current.value,
        checked: false,
        id: uuidv4(),
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
    input.current.value = "";
    input.current.focus();
  }, [todos]);

  function handleDeleteAll() {
    localStorage.removeItem("todosList");
    setTodos([]);
  }

  return (
    <div>
      <div className="text-5xl text-center mb-5">TODO LIST:</div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex w-[50%] mx-auto justify-between items-center m-5"
      >
        <input
          ref={input}
          className={`grow border-solid border-4 border-gray-600 text-2xl ${
            theme === "light" ? "" : "text-black"
          }`}
          type="text"
        />
        <button
          type="submit"
          className="text-2xl border-solid border-4 border-blue-600 text-white bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleDeleteAll}
          className="text-2xl border-solid border-4 border-orange-600 text-white bg-orange-600"
        >
          Delete All
        </button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              checked={todo.checked}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ToDo;
