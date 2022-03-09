import React from "react";

import Figure from "./Figure"
import ProjectHeader from "./ProjectHeader"

import logo from '../../assets/img/OSS-Website/logo.png';
import website from '../../assets/img/OSS-Website/website.png';
import cards from '../../assets/img/OSS-Website/cards.png';

function Osswebsite() {
  return (
      <section id="Osswebsite">
        <ProjectHeader title="Website & Branding" subtitle="OSS Electrical" link="OSS-Website"/>
        <Figure src={logo} alt="An image of the OSS Electrical Logo" caption="tbc" />
        <Figure src={website} alt="An image of the OSS Electrical Website" caption="tbc" />
        <Figure src={cards} alt="An image of the front and rear of an OSS Electrical business card" caption="tbc" />
      </section>
  );
}

export default Osswebsite;
