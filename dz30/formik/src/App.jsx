import InputForm from "./InputForm";
import TodoItem from "./TodoItem";
import useTodos from "./customHooks/useTodos";

function App() {
  const { deleteAll, onSubmit, handleDelete, todos } = useTodos();

  return (
    <div>
      <h1 className="title">FORMIK:</h1>
      <InputForm deleteAll={deleteAll} onSubmit={onSubmit} />
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
