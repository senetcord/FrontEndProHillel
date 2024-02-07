import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import InfoPage from "../pages/InfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
