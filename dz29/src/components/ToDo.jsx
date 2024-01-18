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
        className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-[2fr 1fr 1fr] sm:w-1/2 sm:px-0 px-3 mx-auto"
      >
        <input
          ref={input}
          className={`border-solid border-4 border-gray-600 text-2xl ${
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
          className="text-2xl border-solid border-4 border-yellow-300 text-black bg-yellow-300"
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
