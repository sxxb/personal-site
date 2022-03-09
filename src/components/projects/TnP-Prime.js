import React from "react";

import Figure from "./Figure"
import ProjectHeader from "./ProjectHeader"

import decal from '../../assets/img/TnP-Prime/decal.png';
import carton from '../../assets/img/TnP-Prime/carton.png';
import manual from '../../assets/img/TnP-Prime/manual.png';
import website from '../../assets/img/TnP-Prime/website.png';
import branding from '../../assets/img/TnP-Prime/branding.png';

function Tnpprime() {
  return (
      <section id="Tnpprime">
        <ProjectHeader title="Product Branding" subtitle="The TnP Prime - Wavecom" link="TnP-Prime"/>
        <Figure src={branding} alt="An image of the TnP Prime branding" caption="tbc" />
        <Figure src={decal} alt="An image of the TnP Prime's face decal" caption="tbc" />
        <Figure src={carton} alt="An image of the TnP Prime's packaging" caption="tbc" />
        <Figure src={manual} alt="An image the TnP Prime's user manual" caption="tbc" />
        <Figure src={website} alt="An image of the TnP Prime website" caption="tbc" />
      </section>
  );
}

export default Tnpprime;
