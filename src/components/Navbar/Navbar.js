import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/services/:id">Portfolio</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
