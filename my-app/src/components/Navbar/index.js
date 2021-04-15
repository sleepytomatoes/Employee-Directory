import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link
              to="/home"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/employees"
              className={window.location.pathname === "/employees" ? "nav-link active" : "nav-link"}
            >
              All Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search Employee
            </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;