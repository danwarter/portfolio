import React from 'react'
import styled from 'styled-components'
import Angle from './Angle';
import './AboutMe.css'
import Link from 'gatsby-link'


const AboutMe = props => (
    <div className="AboutSection">
        <div className="AngleTop"><Angle /></div>
        <div className="AboutDescriptions">
            <div className="AboutDescriptionGroup">
                <div className="AboutDescription">
                    <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1N2K321o3Y3k2K420918/me.jpg'} />
                </div>
                <div className="AboutDescription">
                    <h2>About</h2>
                    <p>I'm a UC Berkeley grad with a background in psychology, language and education. After graduating I started teaching in the US and South Korea. My foray into UX began while working with children with autism and their families, an opportunity that provided me with life changing lessons in empathy. My UX experience has mostly been in the edtech, retail and insurance industries.I have a passion for human-centered design and design thinking and love what I do for a living. I also love traveling, backpacking and spending time with my family. </p>
                </div>
            </div>  
        </div>
        <div className="AngleBottom"><Angle /></div>
    </div>
)   


export default AboutMe