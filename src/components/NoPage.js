import React from "react";
import {Link} from "react-router-dom";

function Nopage() {
  return (
      <main id="noPage">
        <h1>This page doesn't exist</h1>
        <h2>If you think it should, <Link to="/Contact">contact me</Link>.</h2>
        <Link to="/">Otherwise, click here to go back</Link>
      </main>
  );
}

export default Nopage;
