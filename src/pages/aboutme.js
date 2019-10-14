import React from "react"
import FooterMain from '../components/Footer.js';
import '../layouts/About.css';
import {Container} from "mdbreact";
import Layout from './Layout.js'

const aboutme = () => (
  <Layout>
    <Container>
    <div className="Rectangle">
    </div>
    <div id="AboutContent" className="About">
      <div className="AboutPicture">
      <img src={require('../images/AboutImage.png')} />
      </div>
      <div className="AboutGroup">
        <h1>Hi, I'm Felipe.</h1>
        <p>I'm a product designer who enjoys solving problems and learning from every challenge. I have a unique business background from my studies at DeGroote Business School and previously at KPMG. <br/> <br/>When it comes to work, I'm a team player who thrives in collaborative environments. I want to be involved in projects that I find challenging alongside people that inspire me. 
        <br/><br/>When I am not thinking about work I love to dive deep into articles, podcasts and books about human behaviour and product strategy. Here are some of my favourite articles/podcasts/lectures that have shaped my thinking.</p>
          
        <ul>
        <a href="http://www.eugenewei.com/blog/2018/5/21/invisible-asymptotes" target="_blank" rel="noopener noreferrer" > Invisible Asymptotes </a>
        <a href="https://mastersofscale.com/brian-chesky-handcrafted/" target="_blank" rel="noopener noreferrer" > Handcrafted </a>  
        <a href="http://www.paulgraham.com/taste.html" target="_blank" rel="noopener noreferrer"> Paul Graham's Taste </a>   
        <a href="https://www.youtube.com/watch?v=a1zDuOPkMSw" target="_blank" rel="noopener noreferrer"> Hamming on Hard Work </a> 
        </ul>

      </div>
    </div>
    
    </Container>

    <div>
      <FooterMain/>
    </div>

</Layout>

)

export default aboutme




