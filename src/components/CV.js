import React from 'react';

function Experience(props) {
  return (
    <li className="item">
      <div className="heading  flex row">
        <div className="title">
          <h3>{props.jobTitle}</h3>
          <h4>{props.employer}</h4>
        </div>
        <div className="duration  flex row centre">
          <h5>{props.startDate}</h5>
          <h6>to</h6>
          <h5>{props.endDate}</h5>
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
      <div className="heading flex row">
        <div className="title">
          <h3>{props.degree}</h3>
          <h4>{props.university}</h4>
        </div>
        <div className="duration  flex row centre">
          <h5>{props.startDate}</h5>
          <h6>to</h6>
          <h5>{props.endDate}</h5>
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
          <h3>{props.name}</h3>
          <h4>{props.employer}</h4>
        </div>
      </div>
      <div className="description">
        <p><a href={"mailto:" + props.email} >{props.email}</a> + <a href={"tel:" + props.phone}>{props.phone}</a></p>
      </div>
    </li>
  )
}

function Cv() {
  return (
    <main className="cv">
      <div className="flex row">
        <div>
          <h1>Scott Belcher</h1>
          <h2>C.V</h2>
        </div>
        <div className="flex column contact-info">
          <a href="sms:0400123456">0400 123 456</a>
          <a href="mailto:email@domain.com">email@domain.com</a>
          <a href="/">Something Else</a>
        </div>
      </div>
      <div className="flex column">
        <div className="experience section">
          <h2>Experience</h2>
          <ul>
            <Experience jobTitle="Marketing and Design Officer" employer="Wavecom" startDate="2017" endDate="Present" description="tbc" />
            <Experience jobTitle="M" employer="W" startDate="2017" endDate="Present" description="tbc" />
          </ul>
        </div>
        <div className="education section">
          <h2>Education</h2>
          <ul>
            <Education degree="Bachelor of Economics" university="University of Adelaide" startDate="2018" endDate="2021" description="tbc" />
          </ul>
        </div>
        <div className="skills section">
          <h2>Skills</h2>
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
        <div className="references section">
          <h2>References</h2>
          <ul>
            <Reference name="Les Clifford" employer="Wavecom" email="les.clifford@wavecom.com.au" phone="xyz" />
            <Reference name="Jamie Gatt" employer="Lightime Illumination" email="X@Y" phone="xyz" />
          </ul>
        </div>
      </div>
    </main>
  );
}
export default Cv;
