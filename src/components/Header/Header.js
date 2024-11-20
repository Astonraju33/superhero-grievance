import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/mainwall3.jpg" alt="Superhero Logo" className="logo" />
        <h1 className="site-title">Guardian's Grievance Hub</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/submit" activeClassName="active-link">
              Submit Grievance
            </NavLink>
          </li>
          <li>
            <NavLink to="/View" activeClassName="active-link">
              View Grievance
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
