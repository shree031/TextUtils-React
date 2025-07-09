import React, { useState } from "react";

export default function TextForm({ title, theme }) {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showMessage("Converted to Uppercase!");
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showMessage("Converted to Lowercase!");
  };

  const handleCapitalize = () => {
    const capitalized = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalized);
    showMessage("Capitalized each word!");
  };

  const handleClear = () => {
    setText("");
    showMessage("Text cleared!");
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    showMessage("Extra spaces removed!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showMessage("Text copied to clipboard!");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 1500);
  };

  const wordCount =
    text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const readTime = (wordCount * 0.008).toFixed(2);

  return (
    <>
      <div className="container my-4">
        <h3>{title || "Text Utilities"}</h3>

        <div
          className={`form-floating mb-3 text-${
            theme === "light" ? "dark" : "light"
          }`}
        >
          <textarea
            value={text}
            onChange={handleOnChange}
            className={`form-control bg-${theme} text-${
              theme === "light" ? "dark" : "light"
            }`}
            placeholder="Enter your text here"
            id="floatingTextarea2"
            style={{ height: "150px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Enter text here</label>
        </div>

        <div className="mb-2 d-flex flex-wrap gap-2">
          <button onClick={handleUpperCase} className="btn btn-primary">
            Uppercase
          </button>
          <button onClick={handleLowerCase} className="btn btn-secondary">
            Lowercase
          </button>
          <button
            onClick={handleCapitalize}
            className="btn btn-info text-white"
          >
            Capitalize
          </button>
          <button onClick={handleRemoveSpaces} className="btn btn-warning">
            Remove Spaces
          </button>
          <button onClick={handleCopy} className="btn btn-success">
            Copy Text
          </button>
          <button onClick={handleClear} className="btn btn-danger">
            Clear
          </button>
        </div>

        {message && (
          <div className="alert alert-success py-2" role="alert">
            {message}
          </div>
        )}

        <div className="mt-3">
          <h5>Your Text Summary</h5>
          <p>
            {wordCount} words, {charCount} characters
          </p>
          <p>Estimated Read Time: {readTime} minutes</p>
        </div>

        <div className="mt-4">
          <h5>Preview</h5>
          <p
            className={`border p-3 bg-${theme} text-${
              theme === "light" ? "dark" : "light"
            }`}
            style={{ minHeight: "80px" }}
          >
            {text.length > 0 ? text : "Nothing to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
