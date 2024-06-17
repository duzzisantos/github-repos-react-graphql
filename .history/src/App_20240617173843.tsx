import React from "react";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Repositories from "./pages/Repositories";
import ViewRepository from "./pages/ViewRepository";

function App() {
  return (
    <div>
      <h1>Git Issues Tracker</h1>
      <hr />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/owner/repositoryName" element={<ViewRepository />} />
      </Routes>
    </div>
  );
}

export default App;
