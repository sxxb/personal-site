import React from "react";
import { Outlet } from "react-router-dom";

import ScrollToTop from '../components/ScrollReset'

function Work() {
  return (
    <main id="work">
      <ScrollToTop />
      <Outlet />
    </main>
  );
}

export default Work;
