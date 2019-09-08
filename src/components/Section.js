import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';
import './Section.css'
import Link from 'gatsby-link'


const Section = props => (
    <div className="SectionGroup">
        <div className="WaveTop"><Wave /></div>
        <div className="SectionTitleGroup">
            <div className="SectionTitle">Contact</div>
            <div className="SectionText">I look forward to hearing from you.</div>
            <div className="SectionButton"><a href="mailto:danielpwarter@gmail.com"><button>Email me</button></a></div>
            
        </div>
        <div className="WaveBottom"><Wave /></div>
    </div>
)


export default Section