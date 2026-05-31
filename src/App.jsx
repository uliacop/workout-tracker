import { useState, useEffect } from "react";

import { AiFillSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";

import HomePage from "../pages/HomePage/HomePage";
import TimerPage from "../pages/TimerPage/TimerPage";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function togleDarkMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="app">
      <button
        onClick={togleDarkMode}
        className={`icon-mode ${darkMode ? "dark-button" : ""}`}
      >
        {darkMode ? <FaRegMoon /> : <AiFillSun />}
      </button>

      <Logo />
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/timer-page" element={<TimerPage />} />
      </Routes>
    </div>
  );
}

export default App;
