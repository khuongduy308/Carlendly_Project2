import React from 'react';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 

// Import các component
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
