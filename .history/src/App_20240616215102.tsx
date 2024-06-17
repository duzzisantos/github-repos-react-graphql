import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div className="App">
      <h1>Git Issues Tracker</h1>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
