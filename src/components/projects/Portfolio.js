import React from "react";

import Tnpprime from "./TnP-Prime"
import Osswebsite from "./OSS-Website"
import Ptvideos from "./Tutorial-Videos"

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <h2>March 2022</h2>
      <menu>
        <li><a href="#Tnpprime">TnP Prime Branding</a></li>
        <li><a href="#Osswebsite">OSS Website</a></li>
        <li><a href="#Ptvideos">Product Tutorial Videos</a></li>
      </menu>
      <Tnpprime />
      <Osswebsite />
      <Ptvideos />
    </div>
  );
}

export default Portfolio;
