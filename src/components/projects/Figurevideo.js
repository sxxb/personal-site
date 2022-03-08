import React from "react";

function Figurevideo(props) {
  return (
    <figure className="flex">
      <video className="break" controls loop>
        <source srcset={props.webmsrc} />
        <source srcset={props.mp4src} />
        <p>Seems like your browser doesn't support HTML5 video! You can view it <a href={props.mp4src}>here</a> instead</p>
      </video>
      <figcaption className="break">
        {props.caption}
      </figcaption>
     </figure>
 );
}

export default Figurevideo;
