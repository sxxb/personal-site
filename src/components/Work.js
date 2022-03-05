import React from "react";

function Figure(props) {
  return (
    <figure className="flex">
      <picture className="break">
        <source srcset={props.src} />
        <img src={props.src} alt={props.alt} />
      </picture>
      <figcaption className="break">
        {props.caption}
      </figcaption>
     </figure>
 );
}

function Work() {
  return (
    <main id="work">
      <h1>Portfolio</h1>
      <h2>March 2022</h2>
      <section>
        <h3>Section Title - TnP Prime</h3>
        <h4>Section Subtitle - Product Branding</h4>
        <Figure src="https://doodleipsum.com/700/flat?n=1" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=2" alt="An image of a bird" caption="A nice bird" />
        <Figure src="https://doodleipsum.com/700/flat?n=3" alt="An image of a bird" caption="A nice bird" />
      </section>
    </main>
  );
}

export default Work;
