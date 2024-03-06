import TypeIt from "typeit-react";

export default function MainBody() {
  return (
    <div id="Home" className="maincontainer">
      <div className="hero-main">
        <div className="hero-text">
          <h1>
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type("Full Stack Software Engineer 👋")
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
            Hi, I'm Bilal Zakaria. A passionate Full-Stack Engineer based in
            Nashville, Tennesee.📍{" "}
          </p>
          <span className="icons">
            <a href="https://github.com/sometimesb" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/bilalzakaria" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
        </div>
        <div className="hero-img"></div>
      </div>
      
  </div>
  );
}
