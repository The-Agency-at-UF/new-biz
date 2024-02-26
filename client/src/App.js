import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import SignUp from "./components/Admin/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This line connects this front-end code to the server

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
