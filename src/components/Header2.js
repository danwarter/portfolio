import React from 'react'
import Link from 'gatsby-link'
import './Header2.css'

const Header2 = props => (
    <div className="Header2">
        <div className="HeaderGroup2">
        <Link to="/"><div className="Logo">Daniel Warter</div></Link>
        <Link to="/#Work">Work</Link>
        <Link to="/#Contact">Contact</Link>
        <Link to="/AboutMe">About</Link>
        <Link to="/download"><button>Resume</button></Link>
        <Link to="/download" media="(max-width: 800px)"><img src={ require('../images/email-mobile.svg') } /></Link>
        <Link to="/download" media="(max-width: 800px)"><img src={ require('../images/resume-mobile.svg') } /></Link>
        </div>
    </div>
    
)
  export default Header2

