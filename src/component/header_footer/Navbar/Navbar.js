import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Logo/Logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="Navbar">
        <div className="Navbar">
        <img src={logo}/>
        <span className="nav-logo">Lefi Tech</span>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a>Search <input  type="text"/></a>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
          <a href="#">Login</a>
        
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
