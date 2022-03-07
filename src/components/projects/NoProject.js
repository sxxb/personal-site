import React from "react";
import {Link} from "react-router-dom";

function Noproject() {
  return (
      <section id="noProject">
        <h1>I haven't made this yet...</h1>
        <h2>If you think I should, <Link to="/Contact">contact me</Link>.</h2>
        <Link to="/Work">Otherwise, click here to go back</Link>
      </section>
  );
}

export default Noproject;
