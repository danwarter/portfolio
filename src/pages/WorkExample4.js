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
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2n0W3l0t441a2X3l3A2f/inconsistency.svg'} />
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
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2o3R3a10222L3c360C44/atoms.svg'} />
          </div>
          <div className="Description">
            <h3>Exploration and iteration</h3>
            <p>Before I created the style guide I started cataloging and and organizing all the components in Retail Pro's software. I then worked with stakeholders to identify trends and commonalities with the different components starting with the atoms, then the molecules and finally the organisms. </p>
          </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Finding the solution</h3>
            <p>I consolidated the reusable parts of the UI and translated them into Material UI components (a preferred framework in place of bootstrap). I then started building the style guide and reviewed it with stakeholders. Dev helped me refine and improve its specs and designers helped me created a reusable pattern library in Sketch. </p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2s3d281o040T2p1M3B3F/building.svg'} />
          </div>
      </div>
      
      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0W1q111g3Y1j113e1H2m/data.svg'} />
        </div>
        <div className="Description">
          <h3>The result</h3>
          <p>The atomic design system helped simplify our UI and made it more consistent. It also helped us improve communication between our departments. Devs now had a detailed and consistent spec document to reference and designers had the building blocks to create a better UI.  </p>
        </div>
      </div>



      </div>
    </div>
  )
  
  export default WorkExample4
