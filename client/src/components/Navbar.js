import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <li>
        <NavLink to="/user">USER</NavLink>
      </li>
      <li>
        <NavLink to="/admin">ADMIN</NavLink>
      </li>
    </nav>
  );
}

export default Navbar;
