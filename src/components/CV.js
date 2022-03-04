import React from 'react';
import ReactDOM from 'react-dom';

function Experience(props) {
  return (
    <li className="item">
      <div className="heading">
        <div className="title">
          <h2>{props.jobTitle}</h2>
          <h3>{props.employer}</h3>
        </div>
        <div className="duration">
          <h4>{props.startDate}</h4>
          <h5>to</h5>
          <h4>{props.endDate}</h4>
        </div>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </li>
  )
}
function Education(props) {
  return (
    <li className="item">
      <div className="heading">
        <div className="title">
          <h2>{props.degree}</h2>
          <h3>{props.university}</h3>
        </div>
        <div className="duration">
          <h4>{props.startDate}</h4>
          <h5>to</h5>
          <h4>{props.endDate}</h4>
        </div>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </li>
  )
}
function Reference(props) {
  return (
    <li className="item">
      <div className="heading">
        <div className="title">
          <h2>{props.name}</h2>
          <h3>{props.employer}</h3>
        </div>
      </div>
      <div className="description">
        <p>{props.email} + {props.phone}</p>
      </div>
    </li>
  )
}

function Cv() {
  return (
    <div className="resumeContainer">
      <div>
        <div>
          <h1>Scott Belcher</h1>
          <h2>C.V</h2>
        </div>
        <div className="contact-info">
          <a href="sms:0400123456">0400 123 456</a>
          <a href="mailto:email@domain.com">email@domain.com</a>
          <a href="/">Something Else</a>
        </div>
      </div>
      <main className="container">
        <div className="experience">
          <h3>Experience</h3>
          <ul>
            <Experience jobTitle="M" employer="W" startDate="2017" endDate="Present" description="tbc" />
            <Experience jobTitle="M" employer="W" startDate="2017" endDate="Present" description="tbc" />
          </ul>
        </div>
        <div className="education">
          <h3>Education</h3>
          <ul>
            <Education degree="B Econ" university="UoA" startDate="2018" endDate="2021" description="tbc" />
          </ul>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills flex">
          <ul className="break">
            <li>Policy Analysis</li>
            <li>Copy Writing</li>
            <li>Team Organisation</li>
            <li>Event Organisation</li>
            <li>Technical Document Production</li>
            <li>Web Design (HTML, CSS, Sass, Jekyll)</li>
          </ul>
          <ul className="break">
            <li>Print and Packaging Design</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Indesign</li>
            <li>Adobe Premiere</li>
            <li>Adobe Photoshop</li>
            <li>Google Ads, Facebook Advertising</li>
          </ul>
          </div>
        </div>
        <div className="references">
          <h3>References</h3>
          <ul>
            <Reference name="L" employer="W" email="X@Y" phone="000" />
            <Reference name="L" employer="W" email="X@Y" phone="000" />
          </ul>
        </div>
      </main>
    </div>
  );
}
export default Cv;
