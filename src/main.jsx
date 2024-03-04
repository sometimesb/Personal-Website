import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./App.jsx"
import MainBody from "./MainBody.jsx"
import AboutMe from "./AboutMe.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <MainBody/>
    <AboutMe/>
  </React.StrictMode>,
)
