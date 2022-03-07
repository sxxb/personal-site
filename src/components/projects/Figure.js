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

export default Figure;
