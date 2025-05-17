import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Mainpage from './components/Mainpage';  // Replace with your actual Mainpage component
import User from "./components/user";

function App() {
  return (
    // Make sure Router wraps the whole application
    <Router>
      <Routes>
        {/* Define routes for Login and Mainpage */}
        <Route path="/" element={<Login />} />
        <Route path="/Mainpage" element={<Mainpage />} />  {/* Ensure the Mainpage component exists */}
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
