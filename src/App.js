import React, { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/navbar";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = `bg-${newTheme} text-${
      newTheme === "light" ? "dark" : "light"
    }`;
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container p-2">
        <TextForm title="Wanna see magic? Type something..." theme={theme} />
      </div>
    </>
  );
}
