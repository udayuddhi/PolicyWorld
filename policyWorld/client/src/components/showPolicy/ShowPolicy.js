import React ,{useEffect, useState} from 'react';
import {useParams, } from "react-router-dom";
import './Show.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';





 

  const ShowPolicy = () => {

    const [policy,setPolicy]=useState([])

    const {Policyname}  = useParams()
 

    useEffect(()=>{
      axios.get(`http://localhost:5000/policies/${Policyname}`).then((p)=>{
      setPolicy(p.data)
      }).catch(err =>{
        console.log(err);
      })
    })

    const buy = (e) =>{ 
      e.preventDefault()
      alert(` Thankyou..! for your interest \n  We Will Call You Back `)
  
      
    }
    
  

  return (

    <div>
    <Col >
    
      <Card className='card' style={{ width: '50%',margin:"50px", marginLeft:"28% ", }}>
      <Card.Header><h1>{Policyname}policy</h1></Card.Header>

      <ListGroup   variant="flush">
        
        <ListGroup.Item className='textfield'><span >Policy Name :</span> {policy.policyName} Insurance</ListGroup.Item>
        <ListGroup.Item className='textfield'><span>Age Limit :</span> {policy.ageLimit}</ListGroup.Item>
        <ListGroup.Item className='textfield'><span>Insured Total Amount :</span> {policy.insuredTotalAmount}</ListGroup.Item>
        <ListGroup.Item className='textfield'><span>Min-Amount start's At :</span> {policy.minAmount} Rs</ListGroup.Item>
        <ListGroup.Item className='textfield'><span> Installment Amount per Month :</span> {policy.installmentAmount} Rs</ListGroup.Item>
        <ListGroup.Item className='textfield'><span> Insured Time :</span> {policy.tenureYear} years</ListGroup.Item>
      
      </ListGroup>
      
      <Button style={{ width:"120px",margin:"30px"}} variant="primary" type="submit" onClick={buy}>
        Buy
      </Button>
      </Card>
  
    </Col>
    </div>
  )
}

export default ShowPolicy