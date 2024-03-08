export default function Projects(){
  return(
  <div id="Projects" className="Projects-container">
    <div className="header">
      <h2>PROJECTS</h2>
      <h3>All of my unique projects, including my Senior Capstone! 🖥️ </h3>
    </div>
    <div className="grid-container">
      <div className="project">
        <div className="img-container">
          <div className="img-left"></div>
        </div>
        <div className="info-right">
          <div className="title">
            Project 4-Sight 🥼
          </div>
          <div className="project-info">
            <p>Project 4-Sight is an advanced wearable device for the visually impaired, featuring enhanced obstacle detection, extended range, navigation capabilities, and safety sensors. The goal is to create an affordable and customizable jacket with an intuitive design for daily use, providing users with haptic feedback and a website interface for navigation and routing management. </p>
          </div>
          <div className="project-languages">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>Arduino</li>
            </ul>
          </div>
          <div className="links">
            <span className="icons-project">
              <a href="https://github.com/sometimesb" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}