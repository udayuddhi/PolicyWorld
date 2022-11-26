import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


import './About.css';

export default function About() {
  return (
    
      <div className="container">
      <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
           
             
              <div className="head">
              <h3>How it all started</h3> 
               
                <p ><span style={{color:"green"}}>PolicyWorld </span>was founded in 2008 with one objective: bringing transparency in insurance. The founders wanted to reimagine insurance, so they started by simplifying all the information around plans, ending the rampant mis-selling, and preventing policy lapses...,,</p>
                <hr></hr>
                <h3>13 years of success</h3>
                  <p>Today, we are India’s best & largest online insurance marketplace. Over 9+ million (90 lakh+) individuals have come to us & bought the best insurance plans from the top insurers in the country. We have sold over 19 million policies since inception, and this number is only growing..,,</p>
                  <hr></hr>
                  <h4>A look forward</h4>
                  <p className="p1"> Our vision to bring pioneering technologies & innovations to the field continues to grow. We aspire to build a health & financial safety net for more households in India in the coming years...,,</p>
                  <hr></hr>
                  <hr></hr>
              </div>
         \
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}
