import React from 'react'
import './Header.css'
import {Container} from "mdbreact";

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
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}




  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>     
         <Container>
           
         <div
        className="HeaderGroup" id="myHeaderGroup">
          <a href="/">WORK</a>
          <a href="/aboutme">ABOUT</a>
          <a href="https://www.dropbox.com/s/43jqi6zksemalv3/Design%20Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">RESUME</a>
          </div>

        <div className="dropdown">
          <button className="dropbtn">Dropdown 
            <svg width="24" height="24">
                  <line x1="1" y1="3" x2="22" y2="3" stroke="black"
              strokeLinecap="round"  strokeWidth="2"/>
                  <line x1="1" y1="9" x2="22" y2="9" stroke="black"
              strokeLinecap="round"  strokeWidth="2"/>
                  <line x1="1" y1="15" x2="22" y2="15" stroke="black"
              strokeLinecap="round"  strokeWidth="2"/>
                </svg>
          </button>
          <div className="dropdown-content">
            <a href="/">WORK</a>
            <a href="/aboutme">ABOUT</a>
            <a href="/resume">RESUME</a>
          </div>
          </div>

        <div
        className="HeaderBrand">
        <a href="/">Felipe Cepero</a>
        </div>
        </Container>
      </div>  
    )
  }
}


export default Header

