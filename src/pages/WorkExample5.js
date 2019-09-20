import React from 'react'
import Link from 'gatsby-link'
import './WorkExample.css'
import './WorkExample5.css'
import Header2 from '../components/Header2'
import Wave from '../components/Wave';

const WorkExample5 = () => (
    <div>
      <Header2 />
      <div className="Hero6">
      <div className="HeroGroup6">
      <h1>Custom Branding</h1>
        <Wave />
      </div>
    </div>
    <div className="Descriptions">

      <div className="DescriptionGroup">
        <div className="Description">
          <h3>Understanding the problem</h3>
          <p>Many of the clients that we worked with at Retail Pro wanted to see their own brand in the POS software they were using. We helped them manage this with custom css code that was very time consuming for devs to implement. Updates to Retail Pro's software would also break these changes which would further strain dev's resources with every new release. </p>
        </div>
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0E0s430o2J1x1g2F0C46/code.svg'} />
        </div>
      </div>

      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/453p240W3m0l273d1v2A/Interviewing.svg'} />
        </div>
        <div className="Description">
          <p>After learning about this problem I started to meet with developers to see if there could be a way to allow our clients to customize parts of the UI. I also met with SMEs to see what kinds of UI changes people typically made.</p>
        </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Narrowing my focus </h3>
            <p>Once it became clear that the number of changes people usually made were low and that dev was able to customize most of them in the UI, I then started to explore what that customization would look like.</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2e2K1h3v1E041y0w1M40/Focus.svg'} />
          </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1t3f3D1q012g1z3F3G1u/colors.svg'} />
          </div>
          <div className="Description">
            <h3>Exploration and iteration</h3>
            <p>I started prototyping some concepts and shared them with developers and SMEs. We found that the CSS changes were very easy to implement but structural changes to the UI would be a larger effort.</p>
          </div>
      </div>

      <div className="DescriptionGroup">
          <div className="Description">
            <h3>Finding the solution</h3>
            <p>Finally, we landed on the four variables we would customize for our MVP: the primary color, the secondary color, the background image and the company logo.
</p>
          </div>
          <div className="Description">
            <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/2x0H3J2a2C282Y3e2I0L/background.svg'} />
          </div>
      </div>
      
      <div className="DescriptionGroup">
        <div className="Description">
          <img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0W1q111g3Y1j113e1H2m/data.svg'} />
        </div>
        <div className="Description">
          <h3>The result</h3>
          <p>Once this customization was implemented it greatly reduced the number of dev hours needed for CSS customization. It also made new release to our software much smoother for our customers.</p>
        </div>
      </div>

      </div>
      
    </div>
  )
  
  export default WorkExample5
