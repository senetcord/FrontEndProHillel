import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import InfoPage from "../pages/InfoPage";
import { Provider } from "react-redux";
import store from "../shared/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
