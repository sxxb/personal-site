import React from "react";
// import ReactDOM from 'react-dom';
import {NavLink} from "react-router-dom";

function Nav() {
  return (
      <header>
        <nav>
          <menu>
            <li>
              <NavLink to="/Work" className={({ isActive }) => isActive ? "active" : ""}>work</NavLink>
            </li>
            <li>
              <NavLink to="/CV">cv</NavLink>
            </li>
            <li>
              <NavLink to="/">sxb</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/NoPage">deadlink</NavLink>
            </li>
          </menu>
        </nav>
      </header>
  );
}

export default Nav;
