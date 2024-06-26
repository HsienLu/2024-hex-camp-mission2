import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";

import "./index.css";
import './App.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
