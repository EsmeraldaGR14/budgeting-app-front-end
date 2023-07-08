import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/transactions">Budget App</NavLink>
      <NavLink to="/transactions/new">NEW TRANSACTION</NavLink>
    </div>
  );
}

export default NavBar;
