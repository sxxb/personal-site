function Home() {
  return (
    <div class="resumeContainer">
      <header class="container flex">
        <div class="title">
          <h1>
            Scott Belcher
          </h1>
          <h2>
            C.V
          </h2>
        </div>
        <div class="contact-info">
          <a href="sms:0400123456">0400 123 456</a>
          <a href="mailto:email@domain.com">email@domain.com</a>
          <a href="/">Something Else</a>
        </div>
      </header>
      <main class="container">
        <div class="experience">
          <h3>Experience</h3>
          <ul>
            <li>
              <div class="flex">
                <div>
                  <h4>Marketing and Design Officer</h4>
                  <p class="subhead">Wavecom</p>
                </div>
                <div>
                  <p class="date">July 2017  <i>to</i> Present</p>
                </div>
              </div>
              <div>
                <p class="description">Description</p>
              </div>
            </li>
            <li>
              <div class="flex">
                <div>
                  <h4>Packaging and Promotional Design</h4>
                  <p class="subhead">Freelance</p>
                </div>
                <div>
                  <p class="date">July 2019  <i>to</i> Present</p>
                </div>
              </div>
              <div>
                <p class="description">Description</p>
              </div>
            </li>
            <li>
              <div class="flex">
                <div>
                  <h4>Volunteer Community Organiser</h4>
                  <p class="subhead"></p>
                </div>
                <div>
                  <p class="date">August 2019 <i>to</i> February 2020</p>
                </div>
              </div>
              <div>
                <p class="description">Description</p>
              </div>
            </li>

          </ul>
        </div>
        <div class="education">
          <h3>Education</h3>
          <ul>
            <li>
              <div class="flex">
                <div>
                  <h4>B. Economics with B. Arts</h4>
                  <p class="subhead">University of Adelaide</p>
                </div>
                <div>
                  <p class="date">July 2019  <i>to</i> Present</p>
                </div>
              </div>
              <div>
                <p class="description">Studied Economics, Politics and History. GPA: 6.0/7.0</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="skills">
          <h3>Skills</h3>
          <div class="skills flex">
            <ul class="break">
              <li>Policy Analysis</li>
              <li>Copy Writing</li>
              <li>Team Organisation</li>
              <li>Event Organisation</li>
              <li>Technical Document Production</li>
              <li>Web Design (HTML, CSS, Sass, Jekyll)</li>
            </ul>
            <ul class="break">
              <li>Print and Packaging Design</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Indesign</li>
              <li>Adobe Premiere</li>
              <li>Adobe Photoshop</li>
              <li>Google Ads, Facebook Advertising</li>
            </ul>
          </div>
        </div>
        <div class="references">
          <h3>References</h3>
          <ul>
            <li>
              <div class="flex">
                <div>
                  <h4>Name Surname</h4>
                  <p class="subhead">Wavecom</p>
                </div>
              </div>
              <div>
                <a class="contact" href="mailto:">Email</a> + <a class="contact" href="tel:">Phone</a>
              </div>
            </li>
                    <li>
              <div class="flex">
                <div>
                  <h4>Name Surname</h4>
                  <p class="subhead"></p>
                </div>
              </div>
              <div>
                <a class="contact" href="mailto:">Email</a> + <a class="contact" href="tel:">Phone</a>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Home;
