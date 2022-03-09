import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <main id="home">
      <h1>Hey mate</h1>
      <h2>My name is Scott. I'm marketing and design professional</h2>
      <p>My pronouns are <strong>he/him</strong> and I live and work in <strong>Tarntanya (Adelaide)</strong> on the lands of the Kaurna people.</p>
      <p>I like going on the computer and making stuff, like this website - and I would love to make something for you too.</p>
      <p><Link to="/Contact">Flick me a message</Link> and let's see what we can do.</p>
    </main>
  );
}

export default Home;
