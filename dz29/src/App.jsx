import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import ToDo from "./components/ToDo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeMode = createContext(null);

export default function App() {
  const colorMode = useState(localStorage.getItem("theme") || "light");

  return (
    <ThemeMode.Provider value={colorMode}>
      <BrowserRouter>
        <div
          className={`h-screen w-full overflow-y-auto ${
            colorMode[0] === "light" ? "" : "bg-slate-900 text-white"
          }`}
        >
          <div className="container mx-auto">
            <Header />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/todo" element={<ToDo />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeMode.Provider>
  );
}
