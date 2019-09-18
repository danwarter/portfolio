import React from 'react'
import Link from 'gatsby-link'
import './WorkExample.css'
import './WorkExample3.css'
import Header2 from '../components/Header2'
import Wave from '../components/Wave';

const WorkExample3 = () => (
    <div>
      <Header2 />
      <div className="Hero4">
      <div className="HeroGroup4">
      <h1>Design Sprint With Claims Team</h1>
        <Wave />
      </div>
    </div>
    <div className="DescriptionNoImage">
      <p><i>Our design team was asked to run a design sprint with our claims department at Esurance. Their agent facing application was old and needed UX improvements. Below is a high-level overview of how the 5-day sprint went.</i></p>
    </div>
    <div className="Descriptions">
      <div className="DescriptionGroup">
        <div className="Description">
          <h3>Understanding the problem</h3>
          <p>On Monday we started the sprint by setting a goal and created a list of questions that addressed the obstacles we would face trying to achieve it. We then created a map that had all of our actors on the left and the ending to the story on the right. The next step was to map out the actors' journeys to the end of the story.</p>
        </div>
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2n0W3l0t441a2X3l3A2f/inconsistency.svg'} />
        </div>
      </div>

      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/453p240W3m0l273d1v2A/Interviewing.svg'} />
        </div>
        <div className="Description">
          <p>Once our map was complete we started interviewing stakeholders. We had them review our goal and map and asked several follow up questions. While the interview was happening we wrote down several "How Might We"  notes that captured problems mentioned in the interviews and rephrased  them as opportunities. </p>
        </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Narrowing our focus </h3>
            <p>We organized the HMW notes and used dot voting to pick the most useful ones. We then took the winners and placed them where they belonged on our map. From there we were able to pick our target.</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2e2K1h3v1E041y0w1M40/Focus.svg'} />
          </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0B1K0j2D1t092P0f052l/Drawing.svg'} />
          </div>
          <div className="Description">
            <h3>Exploration and iteration</h3>
            <p>On Tuesday we started the day with some competitive analysis looking at how others solved similar problems. We then did several time-boxed sketching exercises and in the end each of us came up with our own finalized ideas. </p>
          </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Finding our solution</h3>
            <p>On Wednesday we put our final drawings on the wall and dot voted the ideas we liked. We conducted a speed critique of each and had someone take notes. We then did some final voting and separated the winning ideas from the ones we might implement later. We ended the day by creating a storyboard which outlined how we would create our prototype the next day.</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0f431P2N0J3J0W2V0N0Z/user-testing.svg'} />
          </div>
      </div>
      
      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0f431P2N0J3J0W2V0N0Z/user-testing.svg'} />
        </div>
        <div className="Description">
          <p>On Thursday another designer and myself created the prototype in Invision. A UX researcher working on the Sprint with us recruited participants and created a test plan. We were now ready to see how it would perform.</p>
        </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Measuring results</h3>
            <p>Our prototype performed really well. most participants were able to perform all of the tasks we gave them. We did identify some small issues with iconography and interactions but made adjustments to those after the sprint. Overall the sprint was a great success and was really fun to be a part of!</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0W1q111g3Y1j113e1H2m/data.svg'} />
          </div>
      </div>



      </div>
    </div>
  )
  
  export default WorkExample3
