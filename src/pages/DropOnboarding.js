import React from "react"
import FooterMain from '../components/Footer.js';
import '../layouts/DropOnboarding.css';
import {Container} from "mdbreact";
import Layout from './Layout.js'

const DropOnboarding = () => (

<Layout>

  <Container> 
    
    <div className="OnboardingBanner">
      <img src={require('../images/Onboarding1.png')} /> 
    </div> 

    <div className="OnboardingGroup">

        <h1>Drop's Onboarding Experience</h1>
        <h2> Revamping one of Drop’s most common pain points </h2>
        <h3> Overview </h3>
        <h4> Context: </h4>
        <p> Drop is a Toronto based fintech company that is specializing in consumer rewards. This is a case study that focuses on improving the user experience and enhancing business impact simultaneously. The redesign focuses on four major pain points from Drop users.
        </p>
        <h4> The Problem: </h4>
        <p> Drop currently forces its users to make a permeant decision with the five brands it will receive rewards for. Users are not allowed to familiarize themselves with the app before making the decision.
        </p>
        <h4> Solution: </h4>
        <p> The proposed solution is to provide users with a month review period which allow them to make an educated decision on which brands provide them with the best value.
        </p>
        <h4> Timeline: </h4>
        <p> 2 Weeks </p>
        <h4> My Role </h4>
        <p> User Experience Design, Interaction Design, Product Thinking, Business Analysis and Market Research. </p>

    </div>
    <div className="OnboardingResearch">
        <h3> User Research</h3>
        <h4> User Painpoints </h4>
        <ul>
        <li> Users are often rushing through the onboarding experience and thus are not making completely rational decisions
        </li>
        <li> Using Luke Wroblewski’s <a href="https://www.lukew.com/ff/entry.asp?1995"target="_blank" rel="noopener noreferrer">On-boarding piece</a> as a reference point — users will often delete an app altogether if they encounter a poor onboarding experience 
        </li>
        <li>
        As Drop’s service is dependent on a network effect, in other words, the larger its customer base the more attractive they are to marketers. It is crucial for Drop to ensure that a majority of its users complete the onboarding process and began utilizing the service 
        </li>
        </ul> 
        <h4> App Store Insights </h4>
        <p>
        Users are frustrated that they cannot change their initial brands
        </p>
    </div>
    <div className="OnboardingWireframe">
        <img src={require('../images/Wireframe2.png')} />
        </div>
    <div className="OnboardingAssumptions"> 
        <h3> Assumptions </h3>
        <h4> Trade-Offs Considered </h4>
        <p> There are three potential reasons why Drop has not fixed this user complaint. From a cost benefit analysis, it may be a sound business decision to hold off on this user complaint.
        </p>
        <ol>
        <li>
        Server load
        </li>
        <li>
        Engineering time
        </li>
        <li>
        Marketer needs
        </li>
        </ol>
        <p>
        By allowing users to change their Power Offer brands on the go, the amount of data that the user would have to handle would drastically increase. <br></br> <br></br>
        In addition, engineers would have to spend more time ensuring that users are receiving their rewards based on their updated brands. <br></br> <br></br>
        Lastly, marketers paying for the insights related to user’s financial data may not be in favour of volatile user data (eg. Users constantly changing their Power Offers). Marketers may not be able to draw a clear picture of a user who is constantly changing their preferences.
        </p>

    </div>
    <div className="OnboardingSolution">
        <h3> Solution </h3>
        <p> The proposed changes will increase user involvement by allowing a review of the user’s selection in one month’s time.
        </p>
        <h4> Wireframes </h4>
    </div>
    <div className="WOnboarding">
        <img src={require('../images/Wireframe3.png')} />
    </div>
    <div className="OnboardingSolution">
        <h4> Feedback From Users (Wireframes) </h4>
        <ul>
        <li> Make the chart on the second screen bigger as it is currently hard to see. Include percentages as well
        </li>
        <li>
        Change the review period from one week to up to one month of review time. Most people budget their expenses in a month’s time and this time period will seem more intuitive to them
        </li>
        </ul>
        <h3> High-Fidelity Designs </h3>
        <p> The wireframes for the Rewards breakdown screen were difficult to understand when I showed it to family and friends. In order to perfect this vital screen, I designed multiple options. 
        </p>
    </div>
    <div className="OnboardingFidelity">
        <img src={require('../images/Fidelity2.png')} />
    </div>
    
    <div className="OnboardingSolution">
        <p>
        <span>Option 3</span> was seen as the best iteration because it was the easiest graph to read for users and the easiest to develop as well.
        </p>
    </div>

    <div className="OnboardingHigh">
    <h4> Selected Solutions</h4>
    </div>

    <div className="OnboardingFidelity2">
        <img src={require('../images/Fidelity4.png')} />
        <img src={require('../images/Fidelity3.png')} />
    </div>

    <div className="BeforeOnboarding">
        <h3> Comparison</h3>
        <p> A final look at the updates made with this redesign:</p>
    </div>
    <div className="OnboardingAfter">
        <img src={require('../images/After3.png')} />
    </div>

     <div className="OnboardingReflection">
        <h3> Reflection </h3>
        <p>
        I’ve learned how fun it is to tackle complex issues such as the one above. The Drop team has received user complaints via the App Store and they are still working on a solution. This is likely due to all the constraints that they must deal with. Its these same constraints that make being a Product Designer an amazing role.
        </p>
    </div>

    <div>
      <FooterMain/>
    </div>

  </Container>

  </Layout>
)

export default DropOnboarding




