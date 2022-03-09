import React, { Suspense } from "react";

import Loading from "../Loading"

const Tnpprime = React.lazy(() => import("./TnP-Prime"));
const Osswebsite = React.lazy(() => import("./OSS-Website"));
const Ptvideos = React.lazy(() => import("./Tutorial-Videos"));

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
      <Suspense fallback={<Loading />}>
        <Tnpprime />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Osswebsite />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Ptvideos />
      </Suspense>
    </div>
  );
}

export default Portfolio;
