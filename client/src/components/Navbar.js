import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };

  return (
    <nav className="Navbar">
      <li>
        <NavLink to="/user" onClick={() => handleChangeView(false)}>
          USER
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin" onClick={() => handleChangeView(true)}>
          ADMIN
        </NavLink>
      </li>
      {isAdmin ? (
        <div>
          <li>
            <NavLink to="/admin/post">POST</NavLink>
          </li>
          <li>
            <NavLink to="/admin/filled">FILLED</NavLink>
          </li>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
