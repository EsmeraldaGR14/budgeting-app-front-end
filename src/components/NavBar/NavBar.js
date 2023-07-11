import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container justify-content-end">
        <NavLink to="/transactions" className="navbar-brand">
          <strong>Budget App</strong>
        </NavLink>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/transactions/new"
                className="nav-link btn btn-light btn-hover-white"
              >
                NEW TRANSACTION
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
