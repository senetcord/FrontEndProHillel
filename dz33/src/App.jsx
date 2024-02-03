import { Provider } from "react-redux";
import store from "./engine/Redux/store";
import Todo from "./components/Todo/Todo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Todo />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
