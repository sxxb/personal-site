import React from "react";

import Figure from "./Figure"
import Figurevideo from "./Figurevideo"
import ProjectHeader from "./ProjectHeader"

function Ptvideos() {
  return (
      <section id="Ptvideos">
        <ProjectHeader title="Tutorial Videos" subtitle="Appliance Testers - Wavecom" link="Tutorial-Videos"/>
        <Figure src="https://doodleipsum.com/700/flat?n=1" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=2" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=3" alt="An image of a bird" caption="A nice bird" />
      </section>
  );
}

export default Ptvideos;
