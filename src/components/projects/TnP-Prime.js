import React from "react";
import {Link} from "react-router-dom";

import Figure from "./Figure"
import ProjectHeader from "./ProjectHeader"

function Tnpprime() {
  return (
      <section id="Tnpprime">
        <ProjectHeader title="Product Branding" subtitle="The TnP Prime - Wavecom" link="TnP-Prime"/>
        <Figure src="https://doodleipsum.com/700/flat?n=1" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=2" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=3" alt="An image of a bird" caption="A nice bird" />
      </section>
  );
}

export default Tnpprime;