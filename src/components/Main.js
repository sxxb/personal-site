import React from "react";
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

import Tnpprime from "./projects/TnP-Prime"
import Osswebsite from "./projects/OSS-Website"
import Ptvideos from "./projects/Tutorial-Videos"
import Portfolio from "./projects/Portfolio"

function Main() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CV" element={<Cv />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Work" element={<Work />} >
          <Route index="true" element={<Portfolio />} />
          <Route path="TnP-Prime" element={<Tnpprime />} />
          <Route path="OSS-Website" element={<Osswebsite />} />
          <Route path="Tutorial-Videos" element={<Ptvideos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Main;
