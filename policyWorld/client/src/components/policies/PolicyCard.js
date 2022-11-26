import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import './policyCard.css';



const PolicyCard = ({policy}) => {





    return (
    <div  className='row'>
      <div className='column'>
        <Card style={{ width:'10rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.9)'}}>
          <Card.Img style={{width:'8rem',marginLeft:'15px',marginBottom:'0',marginTop:'15px',}} variant="top" src="https://www.gujaratinfotech.com/slider/image/insurance.png" />
          
          <Card.Body>
            <Card.Title style={{ textAlign:"center"}} > {policy.policyName} Insurance</Card.Title>
            <Link style={{color:'green',marginLeft:'25px',backgroundColor:'white',padding:'5px',borderRadius:'5px',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.9)'}} to={policy.policyName} variant="primary">Buy now</Link>
          </Card.Body>
        </Card>
      </div>  
   </div>
  )
}

export default PolicyCard;