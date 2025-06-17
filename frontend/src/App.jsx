import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./components/Login/Login";

import Home from "./components/Home/Home";
import Task from "./components/Task/Task";
import ProtectedRoute from "./components/Protectedroute";
import ProtectedRedirection from "./components/ProtectedRedirection";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Router>
        <Routes>
          
          <Route 
            path="/" 
            element={
              <ProtectedRedirection>
                <Home />
              </ProtectedRedirection>
            } /> 



         

          <Route 
           path="/login" 
           element={
            <ProtectedRedirection>
              <Login />
            </ProtectedRedirection>
           } 
        />
           
          
          <Route
            path="/task" 
            element={
              <ProtectedRoute>
                <Task />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
