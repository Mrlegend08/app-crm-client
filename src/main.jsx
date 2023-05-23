import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/index.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
