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
          <li className="nav-item">
            <Link
              to="/searchDepartment"
              className={window.location.pathname === "/searchDepartment" ? "nav-link active" : "nav-link"}
            >
              Search by Department
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/searchRole"
              className={window.location.pathname === "/searchRole" ? "nav-link active" : "nav-link"}
            >
              Search by Role
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;