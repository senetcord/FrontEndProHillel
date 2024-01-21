import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTodos() {
  const [todos, setTodos] = useState([]);

  const deleteAll = () => {
    setTodos([]);
  };

  const onSubmit = (values, form) => {
    setTodos([...todos, { text: values.todoInput, id: uuidv4() }]);
    form.reset();
  };

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  return { deleteAll, onSubmit, handleDelete, todos };
}

export default useTodos;
