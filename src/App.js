import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";


function App() {
  return (
    // Routing Pages
    <div className = "allBody">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element= {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
