import React from "react";
import {Link, useLocation} from "react-router-dom";

function ProjectHeader(props) {
  const location = useLocation();
  return (
        location.pathname === "/Work" ?
          <div><h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <Link to={props.link}>Permalink</Link>
          </div>
          :
          <div><h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <Link to="/Work">Return</Link>
          </div>

  );
}

export default ProjectHeader;
