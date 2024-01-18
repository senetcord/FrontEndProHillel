import { useContext, useEffect } from "react";
import { ThemeMode } from "../App";
import LinkTo from "./LinkTo";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeMode);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="flex items-center justify-between py-4 px-8 mb-10">
      <div className="flex flex-col space-y-1 cursor-pointer">
        <h1 className="text-4xl font-bold text-blue-500">Tobias</h1>
        <h2
          className={`text-2xl font-light opacity-75 ${
            theme === "light" ? "" : "text-white"
          }`}
        >
          Rieper
        </h2>
      </div>

      <div className="flex space-x-4">
        <LinkTo to="/" name="Main" />
        <LinkTo to="/todo" name="ToDo" />
        <LinkTo to="/about" name="About me" />
        <LinkTo to="/contacts" name="Contacts" />
      </div>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded shadow-md"
      >
        Toggle Theme
      </button>
    </header>
  );
};
export default Header;
