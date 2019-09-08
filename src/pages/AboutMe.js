import React from 'react'
import Link from 'gatsby-link'
import './AboutMe.css'
import './WorkExample.css'
import Header2 from '../components/Header2'
import Wave from '../components/Wave';

const AboutMe = () => (
    <div>
      <Header2 />
      <div className="Timeline">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/3R3y462N2M1j0a211k31/me.jpg'} />
            <h3>About</h3>
            <p>After graduating from UC Berkeley in 2006 I   </p>

        <div className="WaveBottom"><Wave /></div>
    </div>
    </div>
  )
  
  export default AboutMe