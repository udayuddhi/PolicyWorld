import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./contact-img.svg";
import './ContactUs.css'


export default function ContactUs() {

  const[info,setInfo]=useState({
    fullName:'',
    email:'',
    phoneNo:''
  })
  const contactSubmit = (e) =>{ 
    e.preventDefault()
    alert(` Thankyou..! your Details submitted \n  We Will Call You Back `)
  
    setInfo({
        fullName:'',
        email:'',
        phoneNo:''
    })
    
  }
    


    
  return (
    
    <div className="container" >
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            
             
            
                <h2>Get In Touch</h2>
              <form >
                  <Row >
                    <Col  size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Full Name"  required value={info.fullName} onChange={(event)=>{
          setInfo({...info,  fullName:event.target.value})}} />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" required value={info.email} onChange={(event)=>{
          setInfo({...info,  email:event.target.value})}}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." required value={info.phoneNo} onChange={(event)=>{
          setInfo({...info,  phoneNo:event.target.value})}}/>
                    </Col>
                    <Col size={12} className="btn">
                      <button type="submit" placeholder="submit" onClick={contactSubmit} > submit</button>
                    </Col>
                    
                  </Row>
                </form>  
          </Col>
        </Row>
      </Container>
    </section>
       
    </div>
 
  )
};