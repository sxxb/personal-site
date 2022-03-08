import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <main id="home">
      <h1>hey mate</h1>
      <h2>Scott is a marketing and design professional</h2>
      <p>His pronouns are <strong>he/him</strong> and he lives and works in <strong>Tarntanya (Adelaide)</strong> on the lands of the Kaurna people.</p>
      <p>He made this website and would love to make one for you too - just <Link to="/Contact">flick him a message</Link> to get things moving.</p>
    </main>
  );
}

export default Home;
