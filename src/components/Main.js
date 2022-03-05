import React from "react";
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from './Nav'
import Home from './Home'
import Cv from './CV'
import Contact from './Contact'
import Work from './Work'

function Main() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default Main;
