import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Repositories from "./pages/Repositories";
// import BreadCrumbs from "./components/BreadCrumbs";

function App() {
  return (
    <div className="App">
      <h1>Git Issues Tracker</h1>
      <hr />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/owner/:repositoryName" element={<Repositories />} />
      </Routes>
    </div>
  );
}

export default App;
