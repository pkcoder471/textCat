import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/about">About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={props.mystyle} htmlFor="flexSwitchCheckDefault">{props.text}</label>
      </div>
    </div>  
    
    
  </div>
</nav>
  )
}
