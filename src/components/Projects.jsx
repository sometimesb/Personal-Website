export default function Projects(){
  return(
  <div id="Projects" className="Projects-container">
    <div className="header">
      <h2>PROJECTS</h2>
      <h3>All of my unique projects, including my Senior Capstone! 🖥️ </h3>
    </div>
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project one">
          <img src="../img/project-4-sight.png" alt="" />
        </div>
        <div className="info-right">
          <div className="title">
            Project 4-Sight 🥼
          </div>
          <div className="project-info">
            <p>Project 4-Sight is an advanced wearable device for the visually impaired, featuring a website interface for navigation and routing management. All documentation included in the GitHub! </p>
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
              <a href="https://github.com/sometimesb/4-Sight" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project two">
        </div>
        <div className="info-right">
          <div className="title">
            EnergiSuite ⚡
          </div>
          <div className="project-info"> 
            <p>Energi Suite: A Python UI cryptocurrency bot, compares prices between EnergiSwap and CoinGecko in Crypto mode (BTC,ETH,etc), and analyzes stablecoin differentials in Stablecoin mode, offering a modular solution available for free on GitHub.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>Python</li>
              <li>CustomTkinter</li>
              <li>Botasaurus </li>
            </ul>
          </div>
          <div className="links">
            <span className="icons-project">
              <a href="https://github.com/sometimesb/EnergiSuite" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project three">
        </div>
        <div className="info-right">
          <div className="title">
            NRG Reaper 🚀
          </div>
          <div className="project-info"> 
            <p>The original iteration of EnergiSuite built in the command line. Does the full analysis and scraping in ~quarter of a second. Compares hundreds of cryptos for arbitrage opportunites.</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>Python</li>
              <li>Selenium</li>
            </ul>
          </div>
          <div className="links">
            <span className="icons-project">
              <a href="https://github.com/sometimesb/EnergiReaperReborn" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="project">
      <div className="grid-container">
        <div className="img-container-project four">
        </div>
        <div className="info-right">
          <div className="title">
            Nemo The Duck Bot
          </div>
          <div className="project-info"> 
            <p>6 Axis/Degree of freedom Robot System with ten buttons and attached GoPro for easy camera recording angles!</p>
          </div>
          <div className="project-languages">
            <ul>
              <li>Arduino</li>
            </ul>
          </div>
          <div className="links">
            <span className="icons-project">
              <a href="https://www.youtube.com/watch?v=4eQF6W8l1V0" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}