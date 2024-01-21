import { Form } from "react-final-form";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import useTodos from "./customHooks/useTodos";

const validateInput = (values) => {
  const errors = {};
  if (values.todoInput === undefined || values.todoInput.length < 5) {
    errors.input = "Requires at least 5 symbols";
  }
  return errors;
};

function App() {
  const { deleteAll, onSubmit, handleDelete, todos } = useTodos();

  return (
    <div className="content">
      <h1 className="title">FINAL-FORM:</h1>
      <Form
        deleteAll={deleteAll}
        validate={validateInput}
        onSubmit={onSubmit}
        render={TodoForm}
      />
      <ul className="todoList">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
