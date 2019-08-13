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
            image={require('../images/WorkExample1.jpg')} />
        </a>
        <a href='/WorkExample2'>
          <Card 
            title="Overview Page"
            text="Esurance"
            image={require('../images/WorkExample2.jpg')} />
        </a>
        <a href='/WorkExample3'>
          <Card 
            title="Design Sprint with Claims Team"
            text="Esurance"
            image={require('../images/WorkExample3.jpg')} />
        </a>
        <a href='/WorkExample4'>
          <Card 
            title="Atomic Design System"
            text="Retail Pro"
            image={require('../images/WorkExample4.jpg')} />
        </a>
        <a href='/WorkExample5'>
          <Card 
            title="Custom Branding"
            text="Retail Pro"
            image={require('../images/WorkExample5.jpg')} />
        </a>
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/Data.svg')}
      title="My process"
      text="My designs are built from the knowledge and ideas I get out of my clients. They help me understand the problem, learn from customers and prototype solutions." />
       
  </div>

  
)

export default IndexPage



