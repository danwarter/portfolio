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
          <Link to="/AboutMe">About</Link>
          <Link to="/download"><button>Resume</button></Link>
          <Link to="/download" media="(max-width: 800px)"><img src={ require('../images/email-mobile.svg') } /></Link>
          <Link to="/download" media="(max-width: 800px)"><img src={ require('../images/resume-mobile.svg') } /></Link>
          
        </div>
      </div>
    )
  }
}
export default Header
