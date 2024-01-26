import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>1)Counter:</h1>
      <Counter />
      <br />
      <h1>2)Todo:</h1>
      <TodoList />
    </Provider>
  );
}

export default App;
