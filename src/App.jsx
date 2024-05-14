import './css/App.css'
import showSideBar from "./scripts/showSideBar.jsx"
import hideSideBar from "./scripts/hideSideBar.jsx"

export default function Navbar(){
  return(
    <div>
      <nav>
        <h3 className="logo">Bilal.dev</h3>
        <ul className="mainbar">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="https://github.com/sometimesb/Personal-Website/raw/main/src/resume/BilalZakariaResume_2024.docx" download>Resume</a></li>
          <li><a href="#Projects">Projects</a></li>
          {/* <li><a href="#Contact">Contact</a></li> */}
          <li onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 -960 960 960" width="27"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
        </ul>
        <ul className="sidebar">
          <li onClick={hideSideBar}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></li>
          <li onClick={hideSideBar}><a href="#Home">Home</a></li>
          <li onClick={hideSideBar}><a href="#About">About</a></li>
          <li onClick={hideSideBar}><a href="https://github.com/sometimesb/Personal-Website/raw/main/src/resume/BilalZakariaResume_2024.docx" download>Resume</a></li>
          <li onClick={hideSideBar}><a href="#Projects">Projects</a></li>
          {/* <li onClick={hideSideBar}><a href="#Contact">Contact</a></li> */}
        </ul>
      </nav>
    </div>
  )
}


