import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div>
      <Link to="/" className="navbar-item navbar-logo">
        Logo
      </Link>
    </div>
    <li className="navbar-list">
      <ul>
        <Link to="/works/" className="navbar-item">
          Works
        </Link>
      </ul>
      <ul>
        <Link to="/about/" className="navbar-item">
          About
        </Link>
      </ul>
    </li>
  </nav>
);

export default Navbar;
