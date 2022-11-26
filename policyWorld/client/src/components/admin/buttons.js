import React from 'react';
import Card from 'react-bootstrap/Card';
import './buttons.css';




export default function buttons({deletePolicy,editPolicy,data}) {
  return (
   
<div style={{ margin:'10px',display:"flex",flexDirection:"-moz-initial",float:"left"}}>
        <Card  style={{ width:'8.3rem', margin:'10px',display:"flex",}}>
          <Card.Img style={{width:'8rem'}} variant="top" src="https://www.kindpng.com/picc/m/192-1925533_insurance-png-background-icon-png-insurance-transparent-png.png" />
          <Card.Body>
            <Card.Title> {data.policyName}</Card.Title>
          
            <button onClick={() => editPolicy(data._id)} style={{width:'40px',backgroundColor:' rgba(39, 242, 21, 0.5)',marginRight:'2px',borderRadius:'10px'}} type='edit'> <i className="fa-solid fa-file-pen"></i> </button> 
            
            <button style={{borderRadius:'10px'}} type='Delete' onClick={()=> deletePolicy(data._id)}><i className="fa-solid fa-trash"></i> </button>

            
          </Card.Body>
        </Card>
  </div>     

        
       
  
  )
}

