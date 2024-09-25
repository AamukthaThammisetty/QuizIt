import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Courses from './pages/Courses.jsx';
import Quiz from './components/Quiz.jsx';
import Home from './pages/Home.jsx';
import './index.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quiz/:course" element={<Quiz />} />
        
      </Routes>
    </Router>
  );
}

export default App;
