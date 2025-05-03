import React from "react";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-300`}
    >
      <h1 className="text-3xl font-bold mb-4">Dark Mode Toggle</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-600"
      >
        Toggle to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default App;
