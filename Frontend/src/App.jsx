// App.js
import React from 'react';
import Routes from 'react-router-dom';
import Login from './login';
import Register from './register';
import Homepage from './homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
