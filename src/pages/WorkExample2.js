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
      <h1>Responsive Naviation</h1>
        <Wave />
      </div>
    </div>
    <div className="Descriptions">

      <div className="DescriptionGroup">
        <div className="Description">
          <h3>Understanding the problem</h3>
          <p>The “Overview Page” has the most traffic and is the most utilized page for Esurance’s policy management web application. The UX for this page had not been seriously worked on for over a decade.</p>
        </div>
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0y0S2W1D2q1x2h052Y28/overview-old.svg'} />
        </div>
      </div>

      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0W1q111g3Y1j113e1H2m/data.svg'} />
        </div>
        <div className="Description">
          <p>We started this project by looking for what parts of the Overview Page people actually used and what parts they didn’t. We used Heap analytics to see this data. We also looked at what things we could add to the Overview Page. We used customer service call and chat data combined with Heap analytics data to better understand areas of opportunity.</p>
        </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Narrowing our focus </h3>
            <p>We identifed 10 items for us to examine and then put them on an importance/difficulty matrix. From there we selected the top 5 items we wanted to focus on: payments, documents, a snapshot of the policy, managing drivers and vehicles; and claims.</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2g2Q2I0R052U0T3G3g24/martrix.svg'} />
          </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0B1K0j2D1t092P0f052l/Drawing.svg'} />
          </div>
          <div className="Description">
            <h3>Exploration and iteration</h3>
            <p>We then got a group of about 10 stakeholders together (made up of PMs, devs, BAs and designers) and started doing some time-boxed sketching. Several great ideas were generated from this exercise and we discussed each one in detail.</p>
          </div>
      </div>

      <div className="ImageLayout3Group">
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0Y0p243b2r1O2e2E321P/draw1.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1c1l2c1P1N3U2S3b1R1i/draw2.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0K0i2H3i1z1t3I053i3z/draw3.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/3U0v21210j3M3w2O093V/draw4.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2t0p3w2k441d0Y2R022x/draw5.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/35341e3y1Y3X432a3Y0m/draw6.jpg'} />
            </div>
            <div className="ImageLayout3">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/3S3J0X1G0k3I221g3M0o/draw7.jpg'} />
            </div>
        </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <p>After we reviewed the designs I started creating some low-fidelity mockups to explore some of these ideas. We reviewed several iterations and selected some to show a group of excecutives and our CEO as part of a presentation.</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2R3U1b190t263m45432s/overview-iteration.svg'} />
          </div>
      </div>

      <div className="ImageLayout2Group">
            <div className="ImageLayout2">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/122L0a1K2m1m1m2X2G28/overview-components.jpg'} />
            </div>
            <div className="ImageLayout2">
              <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0r15080Z0W181G3t372P/overview-lofi.jpg'} />
            </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Finding our solution</h3>
            <p>We then narrowed it down to the two designs we liked most and moved to high-fidelity. Finally, we created two prototypes in Invision for our UX research team to perform an A/B test to see which prototype would perform better.</p>
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
          <h3>Measuring results</h3>
          <p>Our second prototype ended up winning and we made some minor adjustments to our driver and vehicle feature. We decided to release the design in stages and so far the documents portion has made it into production. This feature has proven to be a great success with an average of over 1000 customers using it each day.</p>
        </div>
      </div>



    </div>
     
    </div>
  )
  
  export default WorkExample2
