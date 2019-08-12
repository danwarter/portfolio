import React from 'react'
import Link from 'gatsby-link'
import './WorkExample.css'
import './WorkExample2.css'
import Header2 from '../components/Header2'
import Wave from '../components/Wave';

const WorkExample2 = () => (
    <div>
      <Header2 />
      <div className="Hero3">
        <div className="HeroGroup3">
        <h1>Overview page</h1>
          <Wave />
        </div>
      </div>
      <div className="Descriptions">
  
        <div className="DescriptionGroup">
          <div className="Description">
            <h3>Understanding the details </h3>
            <p>To kick off this project the project manager and I flew out to one of our offices in Sioux Falls, South Dakota to perform a heuristic review of the web application with several SMEs and other stakeholders.</p>
          </div>
          <div className="Description">
            <img src={ require('../images/ProductWalkThru.svg') } />
          </div>
        </div>
  
        <div className="DescriptionGroup">
          <div className="Description">
            <img src={ require('../images/Interviewing.svg') } />
          </div>
          <div className="Description">
            <p>When we got back we had several meetings with the development team to better understand the technical constraits of the application and the dev resources that would be allocated to the project.</p>
          </div>
        </div>
      </div>
  
      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Narrowing our focus </h3>
            <p>After these meetings we were able to identify the problem we should tackle first: the  navigation. This part of the application was key to increasing our digital share on mobile devices and we needed to come up with a solution that worked. </p>
          </div>
          <div className="Description">
            <img src={ require('../images/Focus.svg') } />
          </div>
      </div>
  
      <div className="DescriptionGroup">
          <div className="Description">
            <img src={ require('../images/Drawing.svg') } />
          </div>
          <div className="Description">
            <h3>Competitive analysis and sketching</h3>
            <p>The project manager and I started to look online for how others solved complicated navigation problems for mobile web. We gathered everything we could find and then reviewed it the next day.</p>
            <p>We then started to do some time-boxed sketching of our own ideas. After the exercise we looked at each design and discussed it.</p>
          </div>
      </div>
      
  
  
    </div>
  )
  
  export default WorkExample2
