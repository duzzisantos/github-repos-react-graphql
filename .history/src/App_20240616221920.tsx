import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Repositories from "./pages/Repositories";
import ViewRepository from "./pages/ViewRepository";
// import BreadCrumbs from "./components/BreadCrumbs";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <h1>Git Issues Tracker</h1>
      <hr />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/owner/:repositoryName" element={<ViewRepository />} />
      </Routes>
    </div>
  );
}

export default App;
