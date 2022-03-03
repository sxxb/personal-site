import React, { Component } from "react";

function Footer() {
  return (
    <footer>
      <p>
        <span id="name">SB</span>
        +
        <span id="currentYear">{new Date().getFullYear()}</span>
        +
        <span id="country" data-tooltip="This website was made on the land of the Kaurna people, sovereignty of which was never ceded.">Tarntanya</span>
      </p>
    </footer>
  );
}

export default Footer;
