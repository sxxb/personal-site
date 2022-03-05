import React from "react";
// import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

function Nav() {
  return (
      <header>
        <nav>
          <menu>
            <li>
              <Link to="/work">work</Link>
            </li>
            <li>
              <Link to="/Cv">cv</Link>
            </li>
            <li>
              <Link to="/">sxb</Link>
            </li>
            <li>
              <Link to="/Contact">contact</Link>
            </li>
            <li>
              <Link to="/">tbc</Link>
            </li>
          </menu>
        </nav>
      </header>
  );
}

export default Nav;
