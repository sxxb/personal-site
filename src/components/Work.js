import React from "react";
import { Outlet } from "react-router-dom";

import Tnpprime from "./projects/TnP-Prime"
import Osswebsite from "./projects/OSS-Website"
import Ptvideos from "./projects/Tutorial-Videos"
import Portfolio from "./projects/Portfolio"

function Work() {
  return (
    <main id="work">
      <Outlet />
    </main>
  );
}

export default Work;
