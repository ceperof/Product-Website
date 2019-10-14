import React from "react"
import FooterMain from '../components/Footer.js';
import '../layouts/DropShopping.css';
import {Container} from "mdbreact";
import Layout from './Layout.js'

const DropShopping = () => (

<Layout>

  <Container> 
    
    <div className="ShoppingBanner">
      <img src={require('../images/Shopping1.png')} /> 
    </div> 

    <div className="ShoppingGroup">

        <h1>Improving the Shopping Experience</h1>
        <h2> Enhancing user’s experience in Browse feed by allowing customization </h2>
        <h3> Overview </h3>
        <h4> Context: </h4>
        <p> Drop is a Toronto based fintech company that is specializing in consumer rewards. This is a case study that focuses on improving the user experience and enhancing business impact simultaneously. The redesign focuses on four major pain points from Drop users.
        </p>
        <h4> The Problem: </h4>
        <p> The shopping experience in the main tab does not allow for users to customize their preferred categories. Instead users must manually scroll through every section to find what they are looking for.
        </p>
        <h4> Solution: </h4>
        <p> The proposed solution is to provide users with the ability to customize their preferred categories to stimulate spending and reduce unnecessary time spent on the app.
        </p>
        <h4> Timeline: </h4>
        <p> 1 Week </p>
        <h4> My Role </h4>
        <p> User Experience Design, Interaction Design, Product Thinking, Business Analysis and Market Research. </p>

    </div>
    <div className="ShoppingResearch">
        <h3> User Research</h3>
        <h4> User Painpoints </h4>
        <p>
        Currently, a user does not have the capability to customize their feed to better match their preferences. Categories are preset in the following order:
        </p>
    </div>

    <div className="ShoppingPictures">
    <img src={require('../images/Categories1.png')} />
    </div>

    <div className="ShoppingAnimation">
    <img src={require('../images/Animation2.gif')} />
    <p> See below how <span>long</span> it may take a user to find their favourite apparel brand</p>
    </div>

    <div className="ShoppingSolution">
        <h3> Solution </h3>
        <p> I want to propose Drop provide their users with <a href="https://www.bitcatcha.com/blog/gamify-website-increase-engagement/" target="_blank" rel="noopener noreferrer"> positive reinforcement</a> from their frequent and smaller purchases. These small ticket rewards are the lifeline of the service and should be a highlight of this screen.
        </p>
        <h4> Wireframes </h4>
    </div>
    <div className="ShoppingWireframe">
        <img src={require('../images/Wireframe4.png')} />
    </div>
    <div className="ShoppingSolution">
        <h4> Feedback From Users (Wireframes) </h4>
        <ul>
        <li> Rotate the icon in the second screen to point vertically instead of horizontally
        </li>
        </ul>
        <h3> High-Fidelity Designs </h3>
        <p> A small tweak that will allow users to personalize the Browse tab to suit their needs.
        </p>
    </div>
    <div className="ShoppingFidelity">
    <img src={require('../images/Fidelity5.png')} />
    </div>

    <div className="ShoppingReflection">
        <h3> Reflection </h3>
        <p>
        I’ve learned how beneficial it is to be able to draw connections from apps in different fields. I first saw the customization feature on the Score Mobile App where it allowed its users to filter the different sport leagues they were interested in. <br></br> <br></br>I am looking forward to finding similar parallels between apps and the benefits they will create. 
        </p>
    </div>

    <div>
      <FooterMain/>
    </div>

  </Container>
  </Layout>
)

export default DropShopping

