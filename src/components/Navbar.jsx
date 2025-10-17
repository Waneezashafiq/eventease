import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CalendarDays } from "lucide-react"; // icon import

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      {/* Left side - Logo with Icon */}
      <div className="logo-section">
        <CalendarDays className="logo-icon" />
        <h1 className="logo-text">EventEase</h1>
      </div>

      {/* Right side - Buttons */}
      <div className="nav-buttons">
        <Link
          to="/"
          className={`nav-btn ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Events
        </Link>
        <Link
          to="/my-registrations"
          className={`nav-btn ${
            location.pathname === "/my-registrations" ? "active" : ""
          }`}
        >
          My Registrations
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
