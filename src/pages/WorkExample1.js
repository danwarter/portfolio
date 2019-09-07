import React from 'react'
import Link from 'gatsby-link'
import './WorkExample.css'
import Header2 from '../components/Header2'
import Wave from '../components/Wave';

const WorkExample1 = () => (
  <div>
    <Header2 />
    <div className="Hero2">
      <div className="HeroGroup2">
      <h1>Responsive Naviation</h1>
        <Wave />
      </div>
    </div>
    <div className="Descriptions">

      <div className="DescriptionGroup">
        <div className="Description">
          <h3>Understanding the problem</h3>
          <p>Esurance's customer facing policy management web application was old and outdated. It's last rebrand was in 2013. It was also non-responsive which created a poor experience for 40% of our customers who used the application on mobile devices.</p>
        </div>
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/032p2e2O2f1u2b0g113G/Artboard.svg'} />
        </div>
      </div>

      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/420h1L031i203P0V171c/ProductWalkThru.svg'} />
        </div>
        <div className="Description">
          <p>To better understand the problem I flew out to one of our offices with members from my team and we conducted a heuristic review of the web application with SMEs and other stakeholders. We then met with developers to better understand the technical constraints of the application and the dev resources that would be allocated to the project. </p>
        </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Narrowing our focus </h3>
            <p>Once we had a better understanding of the application and the project scope we were able to identify the problem we should tackle first: the navigation. This part of the application was key to increasing our digital share for the mobile web and would have the most positive impact on the user experience. </p>
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
            <p>The project manager and I started to look for examples of how others solved similar complicated navigation problems for the mobile web. We gathered everything we could find and then reviewed it the next day.  We then started to do some time-boxed sketching of our own ideas and reviewed them together.</p>
          </div>
      </div>

      <div className="ImageLayout3Group">
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2H3j0p2B3d0T1A2x3X2J/Sketch1.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1Y3D0f3U103L172m1k1F/Sketch2.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2k0c2s1D3a3I3r3m292j/Sketch3.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1u2Y3l1U2B0i28172j1o/Sketch4.jpg'} />
            </div>
        </div>

        <div className="DescriptionGroup">
          <div className="Description">
            <h3>Finding our solution</h3>
            <p>After we reviewed each of the designs I started to create some low-fidelity mockups and we reviewed them with our developers and designers. We identifed the solution that seemed to work best under the technical constraints and decided to test that one. I created a low-fidelity prototype in Invision and our research team created tasks for 8 participates.</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0f431P2N0J3J0W2V0N0Z/user-testing.svg'} />
          </div>
      </div>

      <div className="ImageLayout2Group">
            <div className="ImageLayout2">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/3u0h2Y0410250j3C301Q/Prototype1.jpg'} />
            </div>
            <div className="ImageLayout2">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/180L2X0E0Y1r3i0C2r2O/Prototype2.jpg'} />
            </div>
            <div className="ImageLayout2">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2t3c1E1K3Z3S042D2z0b/Prototype3.jpg'} />
            </div>
        </div>




    </div>

 


  </div>
)

export default WorkExample1