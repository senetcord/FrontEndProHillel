import TodoEntity from "../../entities/Todo/TodoEntity";
import InputTodo from "../../features/Todo/ui/InputTodo";
import Title from "../../features/Todo/ui/Title";
import TodoFooter from "../../features/Todo/ui/TodoFooter";
import TodoList from "../../features/Todo/ui/TodoList";
import TodoListItem from "../../features/Todo/ui/TodoListItem";

const TodoWidget = () => {
  return (
    <TodoEntity>
      <Title fontSize={"2.15rem"} />
      <InputTodo />
      <Title fontSize={"1.75rem"} />
      <TodoList>
        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
          return <TodoListItem key={index} text={"blabla"} />;
        })}
      </TodoList>
      <TodoFooter />
    </TodoEntity>
  );
};
export default TodoWidget;
