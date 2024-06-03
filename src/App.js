import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarElements from './components/NavbarElements';
import About from './pages/about';
import Contact from './pages/contact';
import Courses from './pages/courses';
import FreeCourses from './pages/Freecourses'; // Match the case exactly
import Signin from './pages/signin';
import Store from './pages/store';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavbarElements />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/freecourses" element={<FreeCourses />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
};

export default App;
