import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

class FooterMain extends React.Component {
  render() {
    return (
      <Footer
        color="stylish-color-dark"
        className="FooterAll"
      >
        <Container fluid className="FooterContent">
          <Row>
            <Col md="6">
              <h5 className="FooterContentHeader">
                Say Hello
              </h5>
              <p>
              Reach out if you have any feedback on my work or if you want to collaborate on a project together. I'm also looking for new book recommendations!
              </p>
             <div className="FooterEmail">
                <a href="mailto:ceperofelipe@gmail.com" className="btn btn-danger btn-rounded">
                    Send an email
                </a>
            </div>
            <div className="FooterSocialMedia">
            <SocialIcon url="http://twitter.com/felipecepero" />
            <SocialIcon url="http://linkedin.com/in/felipecepero" />
            <SocialIcon url="https://dribbble.com/felipecepero" />
            <SocialIcon url="https://medium.com/@ceperofelipe" />
            </div>
            <div className="FooterCopyright">
            &copy; {new Date().getFullYear()} Designed & Coded by Felipe Cepero{" "}
            </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterMain;