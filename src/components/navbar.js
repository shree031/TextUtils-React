import React from "react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} shadow-sm border-bottom`}
    >
      <div className="container-fluid">
        <span className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={
              theme === "dark"
                ? "https://img.icons8.com/ios-filled/50/ffffff/code.png"
                : "https://img.icons8.com/ios-filled/50/000000/code.png"
            }
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />

          <strong>TextUtil</strong>
        </span>

        <div className="form-check form-switch ms-auto d-flex align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />

          <label
            className={`form-check-label ms-2 text-${
              theme === "light" ? "dark" : "light"
            }`}
            htmlFor="themeSwitch"
            style={{ cursor: "pointer" }}
          >
            <i
              className={`bi bi-${theme === "light" ? "moon" : "sun"}`}
              style={{ marginRight: "5px" }}
            ></i>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}
