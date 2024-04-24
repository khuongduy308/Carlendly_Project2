import React from 'react';
import { useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom'; // Sửa đổi import ở đây
import './App.css';

// Import các component
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <>
      <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
      </Router>
      </>
    
  );
}

export default App;
