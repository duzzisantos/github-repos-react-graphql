import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <h1>Git Issues Tracker</h1>
      <hr />
      <Routes>
        <Route path="/" element={<StartPage />} />

        <Route path="/repositories" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
