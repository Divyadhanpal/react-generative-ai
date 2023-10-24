import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <>
    <h1 className="heading">React Generative AI</h1>
    <div className="grid-container">
    <p align="right">
      <textarea
        className="text-area"
        cols={55}
        rows={1}
        onChange={(e) => setInput(e.target.value)}
      ></textarea></p>
      <button className="action-btn" onClick={doStuff}>
        DO YOU STUFF!
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
    </>
  );
}
