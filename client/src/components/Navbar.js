import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };

  return (
    <nav className="navbar text-white bg-dark">
      <ul>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            onClick={() => handleChangeView(false)}
          >
            USER
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/admin"
            onClick={() => handleChangeView(true)}
          >
            ADMIN
          </NavLink>
        </li>

        {isAdmin ? (
          <div>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/post">
                POST
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/admin/filled">
                FILLED
              </NavLink>
            </li> */}
          </div>
        ) : null}

        {/* {!isAdmin ? (
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/applied">
              APPLIED
            </NavLink>
          </li>
        ) : null} */}
      </ul>
    </nav>
  );
}

export default Navbar;
