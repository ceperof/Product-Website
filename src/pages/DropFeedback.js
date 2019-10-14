import React from "react"
import FooterMain from '../components/Footer.js';
import '../layouts/DropFeedback.css';
import {Container} from "mdbreact";
import Layout from './Layout.js'

const DropFeedback = () => (

  <Layout>  
  <Container> 
    
    <div className="FeedbackBanner">
      <img src={require('../images/Feedback1.png')} /> 
    </div> 

    <div className="FeedbackGroup">

        <h1>Improving the Feedback Experience</h1>
        <h2> Enhancing user’s experience in Browse feed by allowing customization </h2>
        <h3> Overview </h3>
        <h4> Context: </h4>
        <p> Drop is a Toronto based fintech company that is specializing in consumer rewards. This is a case study that focuses on improving the user experience and enhancing business impact simultaneously. The redesign focuses on four major pain points from Drop users.
        </p>
        <h4> The Problem: </h4>
        <p> The Feedback experience in the main tab does not allow for users to customize their preferred categories. Instead users must manually scroll through every section to find what they are looking for.
        </p>
        <h4> Solution: </h4>
        <p> The proposed solution is to provide users with the ability to customize their preferred categories to stimulate spending and reduce unnecessary time spent on the app.
        </p>
        <h4> Timeline: </h4>
        <p> 1 Week </p>
        <h4> My Role </h4>
        <p> User Experience Design, Interaction Design, Product Thinking, Business Analysis and Market Research. </p>

    </div>
    <div className="FeedbackResearch">
        <h3> Current State Analysis</h3>
        <h4> Rewards Tab Analysis</h4>
        <p> The Rewards tab is by far my favourite aspect of the latest redesign. Prior to this redesign, I thought that the app lacked a gamification aspect that would encourage its users to spend more to redeem rewards. My favourite app that has perfected this is the Starbucks app below. By providing users with a visual map of where they stand and how close they are to redeeming a reward, Starbucks has <a href="https://www.bitcatcha.com/blog/gamify-website-increase-engagement/" target="_blank" rel="noopener noreferrer">mastered gamificiation. </a> An interesting note is how Starbucks has made this visual map their main screen, whereas Drop has this as the fourth and last tab on its app.
        </p>
    </div>

    <div className="FeedbackPicture">
        <img src={require('../images/Starbucks.png')} />
        <p> Starbucks use of gamification </p>
    </div>

    <div className="FeedbackResearch">
        <h3> User Research</h3>
        <p>
        Presumably a user’s Power Offer selections are brands they purchase frequently from. Due to their frequent nature and lack of communication, users on the App Store complain they are missing Power Offer rewards.
        </p>
    </div>

    <div className="FeedbackSolution">
        <h3> Solution </h3>
        <p> The proposed changes will increase user involvement by allowing a review of the user’s selection in one month’s time.
        </p>
        <h4> Wireframes </h4>
    </div>
    <div className="FWireframe">
        <img src={require('../images/Wireframe5.png')} />
    </div>
    <div className="FeedbackSolution">
        <h3> High-Fidelity Designs </h3>
        <p> A small tweak that will allow users to personalize the Browse tab to suit their needs.
        </p>
    </div>
    <div className="FWireframe">
        <img src={require('../images/Fidelity6.png')} />
    </div>

    <div className="BeforeFeedback">
        <h3> Comparison</h3>
        <p> A final look at the updates made with this redesign:</p>
    </div>

    <div className="AfterFeedback">
        <img src={require('../images/After1.png')}/>

    </div>

    <div className="FeedbackReflection">
        <h3> Reflection </h3>
        <p>
        My ultimate goal with this redesign was to incorporate multiple disciplines into my design work. Human behavior being one of my favorite topics made incorporating psychology (gamification) that much easier.
        </p>
    </div>

    <div>
      <FooterMain/>
    </div>

  </Container>
  </Layout>
)

export default DropFeedback


