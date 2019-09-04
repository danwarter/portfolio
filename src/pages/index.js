import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const IndexPage = () => (
  <div>
   <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Design Thinker</h1>
        <p>Solving the right problems with the right solutions</p>
        <Link to="#Work">Show me</Link>
        <Wave />
      </div>
    </div>
    <div id="Work" />
    <br />
    <br />
    <br />
    <div className="Cards">
      <h2>Work</h2>
      <div className="CardGroup">
        <a href='/WorkExample1'>
          <Card 
            title="Responsive Navigation"
            text="Esurance"
            image={'https://d1sz9tkli0lfjq.cloudfront.net/items/0V1j3k2a2s1A3P172L0j/WorkExample1.jpg'} />
        </a>
        <a href='/WorkExample2'>
          <Card 
            title="Overview Page"
            text="Esurance"
            image={'https://d1sz9tkli0lfjq.cloudfront.net/items/23243i1S0D113o0i1g2J/WorkExample2.jpg'} />
        </a>
        <a href='/WorkExample3'>
          <Card 
            title="Design Sprint with Claims Team"
            text="Esurance"
            image={'https://d1sz9tkli0lfjq.cloudfront.net/items/2F0M3S1e0O1o3g0e3A40/WorkExample3.jpg'} />
        </a>
        <a href='/WorkExample4'>
          <Card 
            title="Atomic Design System"
            text="Retail Pro"
            image={'https://d1sz9tkli0lfjq.cloudfront.net/items/0D3J1V2e0a0g0A3i2E3k/WorkExample4.jpg'} />
        </a>
        <a href='/WorkExample5'>
          <Card 
            title="Custom Branding"
            text="Retail Pro"
            image={'https://d1sz9tkli0lfjq.cloudfront.net/items/1e3b1E2O1j1u1b32293e/WorkExample5.jpg'} />
        </a>
      </div>
    </div>
    <Section 
      image={'https://d1sz9tkli0lfjq.cloudfront.net/items/0V1j3k2a2s1A3P172L0j/WorkExample1.jpg'}
      image={'https://d1sz9tkli0lfjq.cloudfront.net/items/0V1j3k2a2s1A3P172L0j/WorkExample1.jpg'}
      logo={'https://d1sz9tkli0lfjq.cloudfront.net/items/0V1j3k2a2s1A3P172L0j/WorkExample1.jpg'}
      title="My process"
      text="My designs are built from the knowledge and ideas I get out of my clients. They help me understand the problem, learn from customers and prototype solutions." />

      {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js' async defer></script>
      <script src='http://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/GSDevTools.min.js' async defer></script>
      <script  src="./svg.js" async defer></script> */}

       
  </div>

  
)

export default IndexPage



