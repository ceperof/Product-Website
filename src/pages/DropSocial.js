import React from "react"
import FooterMain from '../components/Footer.js';
import '../layouts/DropSocial.css';
import {Container} from "mdbreact";
import Layout from './Layout.js'

const DropSocial = () => (
<Layout>
  <Container> 
    
    <div className="SocialBanner">
      <img src={require('../images/Social2.png')} /> 
    </div> 

    <div className="SocialGroup">

        <h1>Revamping Drop's Social Features</h1>
        <h2> Eliminating user privacy concerns while maintaining social aspects </h2>
        <h3> Overview </h3>
        <h4> Context: </h4>
        <p> Drop is a Toronto based fintech company that is specializing in consumer rewards. This is a case study that focuses on improving the user experience and enhancing business impact simultaneously. The redesign focuses on four major pain points from Drop users.
        </p>
        <h4> The Problem: </h4>
        <p> Drop is trying to connect its users with one another and increase its network effects in the rewards industry. Consumers on the other hand are becoming increasingly weary of their financial information online. </p>
        <h4> Solution: </h4>
        <p> The proposed solution is to invest in a updated catalogue from its retail partners that can be shared with friends. Friends can enjoy the benefits of Drop rewards without disclosing private information. </p>
        <h4> Timeline: </h4>
        <p> 2 Weeks </p>
        <h4> My Role </h4>
        <p> User Experience Design, Interaction Design, Product Thinking, Business Analysis and Market Research. </p>

    </div>
    <div className="SocialResearch">
        <h3> User Research</h3>
        <h4> User Stories </h4>
        <ul>
        <li> Michael – a Drop user who is always looking for a great deal when shopping. Michael loves to share his best finds with his friends and family
        </li>
        </ul>
        <h4> Insights From Users </h4>
        <ul>
        <li> Most users do not care about a <span>random user’s </span> activity as there is no connection with one another
        </li>
        <li>
        Friends Activity was not activated by any of the users I interviewed
        </li>
        <li>
        In the Friends Activity section, a user can roughly backwards engineer how much a friend is spending. The feature ends up turning into an<span> intrusive </span> feature instead of a sharing activity with close friends
        </li>
        </ul>
    </div>
    <div className="SocialAssumptions"> 
        <h3> Assumptions </h3>
        <h4> Trade-Offs Considered </h4>
        <p> Presumably this section is a feature to counter criticism from users that Drop, as a service, does not work. By actively showing that users are redeeming offers and collecting points. Drop is signaling to their users that both the point collection and redemption process is working.
        </p>
    </div>
    <div className="SocialSolution">
        <h3> Solution </h3>
        <p> I am proposing that Drop partner with its Power Offer brands (Walmart, Shoppers Drug Mart, etc) to provide its users with a up to date list of its <span> latest </span> offers. These offers will have an option to <span>share</span> with someone, which will reintroduce the Friends activity in a more practical way.
        </p>
        <h4> Wireframes </h4>
    </div>
    <div className="Wireframe">
        <img src={require('../images/Wireframe1.png')} />
    </div>
    <div className="SocialSolution">
        <h4> Feedback From Users (Wireframes) </h4>
        <ul>
        <li> Make Power Offer initial screen a horizontal carousel for the five different brands. Instead of a continuous newsfeed where users cannot jump to their favourite brand easily
        </li>
        <li>
        Change the “Show Me Similar Offers” button to “Shop” where users can make their purchase online
        </li>
        </ul>
        <h3> High-Fidelity Designs </h3>
        <p> Drop’s Design team is constantly iterating their designs and when I began this redesign shortly after versions 1.25/1.26 the Community tab was still functional. Late this week, Drop announced version 1.27 where they have removed the Community tab — which is in line with my analysis above. The Drop team did not roll out a feature similar to the Power Offer feed below instead they emphasized the Points Tab.
        </p>
    </div>
    <div className="Fidelity">
    <img src={require('../images/Fidelity1.png')} />
    </div>

    <div className="FidelityAnimation">
    <img src={require('../images/Animation1.gif')} />
    </div>

    <div className="BeforeSocial">
    <h3> Comparison</h3>
    <p> A final look at the updates made with this redesign:</p>
    </div>
    <div className="After">
    <img src={require('../images/After2.png')} />
    </div>

    <div className="SocialReflection">
        <h3> Reflection </h3>
        <ul>
        <li>
        I’ve learned for my next case study to work closer within my product tradeoffs. Solutions outside of the core Drop features are difficult to propose as they require a lot of leg work from both the business and product teams </li>
        
        <li> I’ve learned to become resourceful and scavenge the internet for learning opportunities. Via Youtube tutorials, Twitter DMs, walkthroughs I have been able to enhance my Principle and Zeplin skills </li>
        </ul>
    </div>

    <div>
      <FooterMain/>
    </div>

  </Container>
  </Layout>
)

export default DropSocial




