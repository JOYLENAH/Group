import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure App.js exists in the src folder

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure this corresponds to public/index.html
);
