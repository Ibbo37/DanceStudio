import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct imports
import React from 'react';
import Home from './home/Home';
import AuthForm from './login-register/AuthForm';

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Routes> {/* Use Routes instead of router */}
        <Route path="/" element={<Home />} /> {/* Define routes correctly */}
        <Route path="/login-register" element={<AuthForm />} />
        <Route path="/login-register" element={<style />} />
      </Routes>
    </Router>
  );
}

export default App;
