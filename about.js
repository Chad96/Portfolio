document.addEventListener("DOMContentLoaded", function () {
  // Update profile information
  document.querySelector("header h1").textContent = "About Me";

  // Update profile picture
  document
    .querySelector(".col-md-6 img")
    .setAttribute("src", "img/IMG_6505.jpg");

  // Update profile name
  document.querySelector(".col-md-6 h2").textContent = "Chadrack Ndalamba";

  // Update profile description
  const profileDescription = `
      Hey there! I'm Chadrack Ndalamba, most people call me Chad. I am a
      passionate aspiring software engineer eager to make my mark in the
      tech world. With a hunger for learning and a drive for success,
      I'm dedicated to honing my skills and pushing boundaries. I
      approach every challenge with a blend of determination and
      creativity, striving to deliver innovative solutions that exceed
      expectations. I Possess a strong foundation in coding and a
      natural curiosity for emerging technologies, I'm poised to embark
      on a fulfilling journey towards becoming a versatile and impactful
      member of the software engineering community.
      <br /><br />
      My goal is to continuously learn and grow as a developer, while
      contributing to meaningful projects that have a positive impact.
    `;
  document.querySelector(".col-md-6 p").innerHTML = profileDescription;

  // Update social links
  const socialLinks = document.querySelector(".social-links");
  socialLinks.innerHTML = `
      <li class="list-inline-item">
        <a href="https://www.linkedin.com/in/chadrack-ndalamba-442139137/" target="_blank" class="btn btn-primary">LinkedIn</a>
      </li>
      <li class="list-inline-item">
        <a href="https://github.com/Chad96" target="_blank" class="btn btn-dark">GitHub</a>
      </li>
      <li class="list-inline-item">
        <a href="img/cv/SE_cv.pdf" target="_blank" class="btn btn-success">Resume</a>
      </li>
    `;

  // Update educational information
  const educationInfo = `
      <h2 class="text-center mb-4">Educational Information</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="mancosa">
              <h5>MANCOSA, Johannesburg – Information Technology</h5>
              <p>NQF level 5 – graduated with distinction.</p>
              <p>SAQA ID: 93709</p>
              <h4>Modules:</h4>
              <ul>
                <li>Networking Fundamentals – 96%</li>
                <li>Essential Business Mathematics - 93%</li>
                <li>Introduction to Information Systems – 88%</li>
                <li>Introduction to Programming (Java) - 87%</li>
                <li>End User Computing – 86%</li>
                <li>Web Development - 78%</li>
                <li>Computer Hardware and Architecture - 78%</li>
                <li>Business Communication - 66%</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="alx">
              <h5>ALX Africa, South Africa – Software Engineering</h5>
              <p>
                Curriculum dates: Started the 08/14/2023 - Ending the 06/21/2024
              </p>
              <p>
                This comprehensive 12-month full-stack program so far has
                allowed me to engage in real-world projects, thereby enabling me
                to acquire expertise in the following domains:
              </p>
              <ul>
                <li>DevOps</li>
                <li>Low-level programming in C</li>
                <li>Higher-level programming in Python</li>
                <li>Web Development</li>
              </ul>
              <p>
                The entire program curriculum is available
                <a href="https://tech.alxafrica.com/hubfs/ALX-Software-Engineering-Curriculum.pdf?hsLang=en">here</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  document.querySelector(".education").innerHTML = educationInfo;

  // Update project information
  const projectInfo = `
      <h2 class="text-center mb-4">Projects</h2>
      <div class="container">
        <div class="table-responsive text-left">
          <table class="table table-bordered d-inline-block">
            <thead>
              <tr>
                <th>PROJECT</th>
                <th>DESCRIPTION</th>
                <th>TECH USED</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  AirBnB Clone(The console)
                  <br />
                  ● Back-end
                </td>
                <td>
                  ● This is the first step towards building Python (OOP) the
                  full web application: the AirBnB clone.
                  <br />
                  ● A command interpreter of a web-based platform that allows
                  users to search, book, and manage home rentals from various
                  providers.
                </td>
                <td>Python (OOP)</td>
                <td>
                  <a href="https://github.com/Chad96/AirBnB_clone.git" target="_blank">AirBnB</a>
                </td>
              </tr>
              <tr>
                <td>AirBnB clone(Web Static)<br />● front-end</td>
                <td>
                  ● This is the front-end of the AirBnB landing page.<br />●
                  Simple HTML Static pages with CSS styles (not yet dynamic)
                </td>
                <td>HTML, CSS</td>
                <td>
                  <a href="https://github.com/Chad96/AirBnB_clone.git" target="_blank">Web_static</a>
                </td>
              </tr>
              <tr>
                <td>Simple Shell<br />● Back-end</td>
                <td>
                  ● Simple UNIX command interpreter that displays a prompt and
                  waits for the user to type in basic commands.
                </td>
                <td>C-language</td>
                <td>
                  <a href="https://github.com/Chad96/simple_shell.git" target="_blank">simple_shell</a>
                </td>
              </tr>
              <tr>
                <td>Basic Portfolio</td>
                <td>
                  ● Basic portfolio built with HTML, CSS, and JavaScript.
                  <br />
                  ● HTML (structure)
                  <br />
                  ● CSS (Styles)
                  <br />
                  ● JavaScript(Functionality)
                  <br />
                  ● GitHub(hosting)
                </td>
                <td>HTML, CSS, JavaScript, GitHub</td>
                <td>
                  <a href="https://github.com/Chad96/Chad96.github.io.git" target="_blank">source_code</a>
                  <a href="https://chad96.github.io/" target="_blank">live</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  document.querySelector(".projects").innerHTML = projectInfo;

  // Update footer
  document.querySelector("footer p").textContent = "© 2024 Chad_codes";
});
