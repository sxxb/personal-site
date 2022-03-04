import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  return (
      <header>
        <nav>
          <menu>
            <li>
              <Link to="/work">work</Link>
            </li>
            <li>
              <Link to="/">sxb</Link>
            </li>
            <li>
              <Link to="/Cv">cv</Link>
            </li>
          </menu>
        </nav>
      </header>
  );
}

export default Nav;
