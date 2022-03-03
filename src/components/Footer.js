function Footer() {
  const d = new Date();
  let y = d.getFullYear();
  return (
    <footer>
      <p>
        <span id="name">SB</span>
        +
        <span id="currentYear">{y}</span>
        +
        <span id="country" data-tooltip="This website was made on the land of the Kaurna people, sovereignty of which was never ceded.">Tarntanya</span>
      </p>
    </footer>
  );
}

export default Footer;
