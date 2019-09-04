import React from 'react'
import Link from 'gatsby-link'
import './Header2.css'

const Header2 = props => (
    <div className="Header2">
        <div className="HeaderGroup2">
        <Link to="/"><div className="Logo">Daniel Warter</div></Link>
        <Link to="/#Work">Work</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/download"><button>Resume</button></Link>
        </div>
    </div>
    
)
  export default Header2

