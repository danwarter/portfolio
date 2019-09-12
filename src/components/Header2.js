import React from 'react'
import Link from 'gatsby-link'
import './Header2.css'

const Header2 = props => (
    <div className="Header2">
        <div className="HeaderGroup2">
        <Link to="/"><div className="Logo">Daniel Warter</div></Link>
        <Link to="/#Work">Work</Link>
        <Link to="/#Contact">Contact</Link>
        <Link to="/#AboutMe">About</Link>
        <Link to="/download"><button>Resume</button></Link>
        <Link to="/download" media="(max-width: 800px)"><img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1Y1k2S3r3m1D0B2l0c3O/email-mobile.svg'} /></Link>
        <Link to="/download" media="(max-width: 800px)"><img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0w1l0u2T0j0P223g1L15/resume-mobile.svg'} /></Link>
        </div>
    </div>
    
)
  export default Header2

