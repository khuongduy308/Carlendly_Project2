// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './login';
import Register from './register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} /> 
        <Route path={"/register"} element={<Register />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
