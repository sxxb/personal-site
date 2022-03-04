import React from "react";

function Figure(props) {
  return (
    <figure>
      <picture>
        <source srcset={props.src} />
        <img src={props.src} alt={props.alt} />
      </picture>
      <figcaption>
        {props.caption}
      </figcaption>
     </figure>
 );
}

function Work() {
  return (
    <main>
      <h1>Portfolio</h1>
      <h2>March 2022</h2>
      <section>
        <h3>Section Title - TnP Prime</h3>
        <h4>Section Subtitle - Product Branding</h4>
        <Figure src="https://images.fineartamerica.com/images-medium-5/rolling-down-the-river-mandarin-duck-featured-in-comfortable-art-and-wildlife-groups-ericamaxine-price.jpg" alt="An image of a bird" caption="A nice bird" />
      </section>
    </main>
  );
}

export default Work;
