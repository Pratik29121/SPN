import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarElements.css'; // Ensure this file exists and has the correct styles

const NavbarElements = () => {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/Freecourses">Free Courses</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavbarElements;
