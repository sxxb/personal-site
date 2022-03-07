import React from 'react';

function Experience(props) {
  return (
    <section className="item">
      <div className="heading  flex row">
        <div className="title">
          <h4>{props.jobTitle}</h4>
          <h5>{props.employer}</h5>
        </div>
        <div id="duration" className="flex row centre">
          <h6>{props.startDate}</h6>
          <p>to</p>
          <h6>{props.endDate}</h6>
        </div>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </section>
  )
}
function Education(props) {
  return (
    <section className="item">
      <div className="heading flex row">
        <div className="title">
          <h4>{props.degree}</h4>
          <h5>{props.university}</h5>
        </div>
        <div id="duration" className="flex row centre">
          <h6>{props.startDate}</h6>
          <p>to</p>
          <h6>{props.endDate}</h6>
        </div>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </section>
  )
}
function Reference(props) {
  return (
    <section className="item">
      <div className="heading">
        <div className="title">
          <h4>{props.name}</h4>
          <h5>{props.employer}</h5>
        </div>
      </div>
      <div className="description">
        <p><a href={"mailto:" + props.email} >{props.email}</a> + <a href={"tel:" + props.phone}>{props.phone}</a></p>
      </div>
    </section>
  )
}

function Cv() {
  return (
    <main id="cv">
      <div id="cvHead" className="flex column">
        <h1>Scott Belcher</h1>
        <h2>C.V</h2>
      </div>
      <div id="cvBody" className="flex column">
        <div id="experience" className="section">
          <h3>Experience</h3>
          <div>
            <Experience jobTitle="Marketing and Design Officer" employer="Wavecom" startDate="2017" endDate="Present" description="tbc" />
            <Experience jobTitle="M" employer="W" startDate="2017" endDate="Present" description="tbc" />
          </div>
        </div>
        <div id="education" className="section">
          <h3>Education</h3>
          <div>
            <Education degree="Bachelor of Economics" university="University of Adelaide" startDate="2018" endDate="2021" description="tbc" />
          </div>
        </div>
        <div id="skills" className="section">
          <h3>Skills</h3>
          <div className="flex row item">
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
        <div id="references" className="section">
          <h3>References</h3>
          <div>
            <p>References available upon request</p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Cv;
