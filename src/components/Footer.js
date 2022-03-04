import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        <span id="name">SB</span>
        +
        <span id="currentYear">{new Date().getFullYear()}</span>
        +
        <span id="country">Tarntanya</span>
      </p>
      <p>
        This website was made on the land of the Kaurna people, sovereignty of which was never ceded.
      </p>
    </footer>
  );
}

export default Footer;
