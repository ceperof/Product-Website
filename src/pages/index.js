import React from 'react'
import Card from '../components/Card.js'
import FooterMain from '../components/Footer.js'
import Layout from './Layout.js'
import '../layouts/index.css'

const Index = () => (
  <Layout>
    <div>
      <div id="HeroContent" className="Hero">
        <div className="HeroGroup">
          <h1>
            <span> Product Enthusiast. </span> My passion for tech comes from
            the intersection of <span> human behaviour </span> and{' '}
            <span> strategy. </span>
          </h1>
        </div>
      </div>

      <div className="Cards">
        <h2>Selected Work</h2>
        <img src={require('../images/Arrow2.svg')} />
      </div>

      <div className="CardGroup">
        <Card
          internal="/DropOnboarding"
          title="Drop's Onboarding Experience"
          text="Revamping one of Drop’s most common pain points"
          image={require('../images/Card1.png')}
        />
        <Card
          internal="/DropSocial"
          title="Revamping Drop's Social Features"
          text="Eliminating user privacy concerns while maintaining social aspects"
          image={require('../images/Card2.png')}
        />
        <Card
          internal="/DropShopping"
          title="Improving Shopping Experience"
          text="Enhancing user’s experience in Browse feed by allowing customization"
          image={require('../images/Card3.png')}
        />
        <Card
          internal="/DropFeedback"
          title="Improving User Feedback Loops"
          text="Adding reinforcements of key user engagements with the product"
          image={require('../images/Card4.png')}
        />
      </div>

    </div>
    <div>
      <FooterMain />
    </div>
    
  </Layout>
)
export default Index
