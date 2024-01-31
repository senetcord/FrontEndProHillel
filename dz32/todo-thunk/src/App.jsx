import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import { Provider } from "react-redux";
import store from "./utilities/Redux/store";

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
