import React from 'react'
import Link from 'gatsby-link'
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }

  }


  render() {
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><div className="Logo">Daniel Warter</div></Link>
          <Link to="#Work">Work</Link>
          <Link to="#Contact">Contact</Link>
          <Link to="#AboutMe">About</Link>
          <a href="https://d1sz9tkli0lfjq.cloudfront.net/items/3m2c2i2o0G1S230t292m/dwarter-resume.pdf" download><button>Resume</button></a>
          <a href="mailto:danielpwarter@gmail.com"><img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/1Y1k2S3r3m1D0B2l0c3O/email-mobile.svg'} /></a>
          <a href="https://d1sz9tkli0lfjq.cloudfront.net/items/3m2c2i2o0G1S230t292m/dwarter-resume.pdf" download><img src={'https://d1sz9tkli0lfjq.cloudfront.net/items/0w1l0u2T0j0P223g1L15/resume-mobile.svg'} /></a>
          
        </div>
      </div>
    )
  }
}
export default Header
