import React from "react";

import Figure from "./Figure"
import ProjectHeader from "./ProjectHeader"

function Osswebsite() {
  return (
      <section id="Osswebsite">
        <ProjectHeader title="Website & Branding" subtitle="OSS Electrical" link="OSS-Website"/>
        <Figure src="https://doodleipsum.com/700/flat?n=1" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=2" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=3" alt="An image of a bird" caption="A nice bird" />
      </section>
  );
}

export default Osswebsite;
