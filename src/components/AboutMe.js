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
                    <p>To better understand the problem I flew out to one of our offices with members from my team and we conducted a heuristic review of the web application with SMEs and other stakeholders. We then met with developers to better understand the technical constraints of the application and the dev resources that would be allocated to the project. </p>
                </div>
            </div>  
        </div>
        <div className="AngleBottom"><Angle /></div>
    </div>
)   


export default AboutMe