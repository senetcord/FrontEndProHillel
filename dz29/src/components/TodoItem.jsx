import PropTypes from "prop-types";

const TodoItem = ({ text, checked, id, todos, setTodos }) => {
  function handleChange() {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        return { ...todo, checked: !checked };
      }
    });

    setTodos(newTodos);
  }

  function handleDelete() {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }
  return (
    <li className="flex sm:w-[50%] sm:px-0 px-3 mx-auto justify-between items-center m-5">
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          className="text-2xl mt-1"
          type="checkbox"
          checked={checked}
        />
        <span className={`text-2xl ${checked ? "line-through" : ""}`}>
          {text}
        </span>
      </div>

      <button onClick={handleDelete} className="text-2xl">
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoItem;
