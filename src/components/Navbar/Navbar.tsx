import React from "react";
import "./navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Navbar</div>
    <li className="navbar-list">
      <ul className="navbar-item">item1</ul>
      <ul className="navbar-item">item2</ul>
    </li>
  </nav>
);

export default Navbar;
