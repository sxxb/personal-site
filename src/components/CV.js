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
        <section id="statement">
          <p>
            I am a marketing and design professional, and a recent Bachelor of Economics graduate from the University of Adelaide. I have a passion for finding and creating solutions based on a broad and deep understanding of issues and perspectives, and I want to use this passion to find solutions to improve the lives of people around me. 
          </p>
        </section>
        <section id="experience">
          <h3>Experience</h3>
          <div>
            <Experience jobTitle="Marketing and Design Officer" employer="Wavecom" startDate="2017" endDate="Present" description="During my time at Wavecom I have been responsible for a range of marketing and design tasks, including creating and executing marketing campaigns, working in a team to design new products, producing technical documents, and undertaking web design projects. Working in this role has given me many transferrable skills such as data analysis and application of insights, effective communication with a range of audiences, prioritisation of time and resources, plus the ability to complete projects individually and as a part of a multidisciplinary team. " />
            <Experience jobTitle="Product Packaging Designer" employer="Lightime Illumination" startDate="2019" endDate="Present" description="To supplement my income while studying I have also engaged in freelance design work from time to time, creating product packaging and other marketing resources for Lighttime Illumination. This work required me to comprehend and clarify the client’s goals and vision for their brand, manage time effectively, and produce high quality work on an ongoing basis. This has helped me strengthen my organisational and time management sklills in addition to the invaluable experience of working to an external brief." />
          </div>
        </section>
        <section id="education">
          <h3>Education</h3>
          <div>
            <Education degree="Bachelor of Economics" university="University of Adelaide" startDate="2018" endDate="2021" description="During my studies I have studied a range of topics in economics, history and political theory, and have achieved consistently high marks, culminating in a GPA of 6.21/7. Full transcript available upon request." />
          </div>
        </section>
        <section id="skills">
          <h3>Skills</h3>
          <div className="flex row item">
            <ul className="break">
              <li>High Level Of Proficiency in Web, Graphic & Document Design</li>
              <li>High Level Of Proficiency in Google Ads, Google Analytics & Meta Advertising</li>
              <li>High Level Of Proficiency in Adobe Suite Software & Microsoft Office</li>
              <li>Proficiency in HTML, CSS, SCSS, with some experience in Javascript, Jquery, PHP & React</li>
              <li>Knowledge of Web Design Best Practices & WCAG</li>          
              <li>Excellent Presentation, Report & Copy Writing Skills </li>
            </ul>
            <ul className="break">
              <li>Technical Document Production</li>
              <li>Print and Packaging Design</li>
              <li>Quantitative & Qualitative Research</li>
              <li>Critical Analysis & Problem Solving</li>
              <li>Personal Organisation, Time Management & Teamwork</li>
              <li>Emotional Intelligence & Conflict Resolution</li>
              <li>Google Ads, Facebook Advertising</li>
            </ul>
          </div>
        </section>
        <section id="references">
          <h3>References</h3>
          <div>
            <p>References available upon request</p>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Cv;
