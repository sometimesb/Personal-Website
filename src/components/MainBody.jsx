import TypeIt from "typeit-react";

export default function MainBody() {
  return (
    <div className="mainbody">
      <div id="Home" className="maincontainer">
        <div className="hero-main">
          <div className="hero-text">
            <h1>
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Full Stack Engineer 👋")
                    .pause(1000)
                    .delete(30)
                    .pause(500)
                    .type("Software Engineer")
                    .pause(1000)
                    .delete(17)
                    .pause(500)
                    .type("Backend Engineer")
                    .pause(1000)
                    .delete(16)
                    .pause(500);
                  return instance;
                }}
              />
            </h1>
            <p>
              Hi, I'm Bilal Zakaria. A passionate Software Engineer from
              Nashville, Tennessee.📍
            </p>
            <span className="icons">
              <a href="https://github.com/sometimesb" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/bilalfzakaria" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </span>
          </div>
          <div className="hero-img"></div>
        </div>
      <div className="tech-stack">
          <div className="tech-text">
            <p>
              <span>Tech Stack</span>
            </p>
          </div>
          <div className="icon-box">
            <ul>
                <li><img src="https://skillicons.dev/icons?i=html,css"/></li>
                <li><img src="https://skillicons.dev/icons?i=js,react"/></li>
                <li><img src="https://skillicons.dev/icons?i=python,mysql"/></li>
            </ul>
          </div>
        </div>
        <div className="tech-stack">
          <div className="tech-text">
            <p>
              <span>Platforms</span>
            </p>
          </div>
          <div className="icon-box">
            <ul>
                <li><img src="https://skillicons.dev/icons?i=azure,aws"/></li>
                <li><img src="https://skillicons.dev/icons?i=arduino,linux"/></li>
                <li><img src="https://skillicons.dev/icons?i=github,vercel"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

