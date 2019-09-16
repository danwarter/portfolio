import React from 'react'
import Link from 'gatsby-link'
import './WorkExample.css'
import './WorkExample4.css'
import Header2 from '../components/Header2'
import Wave from '../components/Wave';

const WorkExample4 = () => (
    <div>
      <Header2 />
      <div className="Hero5">
      <div className="HeroGroup5">
      <h1>Atomic Design System</h1>
        <Wave />
      </div>
    </div>
    <div className="Descriptions">

      <div className="DescriptionGroup">
        <div className="Description">
          <h3>Understanding the problem</h3>
          <p>Retail Pro's point of sale software was in desperate need of a style guide. The UX and UI was very inconsistent  and there was no design language.The UI framework it used was also very old and out-dated. It was a very old version of Bootstrap that had been modified and customized by several designers and developers.</p>
        </div>
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0y0S2W1D2q1x2h052Y28/overview-old.svg'} />
        </div>
      </div>

      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/453p240W3m0l273d1v2A/Interviewing.svg'} />
        </div>
        <div className="Description">
          <p>To better understand the problem I started interviewing key stakeholders: product designers, developers, people in marketing and the company's software instructor. These interviews helped me understand the communication breakdown that was happening between departments and helped me see opportunities for improving it.</p>
        </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Narrowing my focus </h3>
            <p>It became clear that we needed more that just a style guide. We needed to break down the current UI into small parts, find commonalities, and then put it together again. We needed an atomic style guide.</p>
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
            <p>After cataloging and organizing all the components in Retail Pro's software, I started prototyping them with a modern Bootstrap framework and the new Material UI framework. The developers were big fans of React.js and everyone loved Material Design so we decided to go with the latter.</p>
          </div>
      </div>



      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Finding the solution</h3>
            <p>...</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0f431P2N0J3J0W2V0N0Z/user-testing.svg'} />
          </div>
      </div>
      
      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0W1q111g3Y1j113e1H2m/data.svg'} />
        </div>
        <div className="Description">
          <h3>The result</h3>
          <p>...</p>
        </div>
      </div>



      </div>
    </div>
  )
  
  export default WorkExample4
