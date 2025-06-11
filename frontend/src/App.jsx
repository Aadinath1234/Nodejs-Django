import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./components/Login/Login";

import Home from "./components/Home/Home";
import Task from "./components/Task/Task";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/task" element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
