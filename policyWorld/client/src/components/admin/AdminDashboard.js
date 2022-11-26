import React, { useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './admin.css';
import axios from 'axios';
import Buttons from './buttons';

const AdminDashboard = () => {
  const[policy , setPolicy] = useState({
    policyName:'',
    ageLimit:'',
    insuredTotalAmount:'',
    minAmount:'',
    installmentAmount:'',
    tenureYear:''
  });

  const [policies,setPolicies] = useState([])
  const [isUpdate,setIsUpdate] = useState(false)

  useEffect(() => {
    getPolicies()
  }, [])

  const getPolicies = () =>{
    axios.get("http://localhost:5000/policies").then(res =>{
      setPolicies(res.data)
    }).catch(err =>{
      console.log("Error while fetching policies");
    })
  }
  
   const create= ()=>{
     axios.post('http://localhost:5000/policies',policy)
     setPolicy({
      policyName:'',
      ageLimit:'',
      insuredTotalAmount:'',
      minAmount:'',
      installmentAmount:'',
      tenureYear:''
    })
     getPolicies()
   
   }

   const editPolicy = (id) =>{
      setIsUpdate(true)
      const currentPolicy = policies.filter(p => p._id === id)[0];
      setPolicy({
        _id : currentPolicy._id,
        policyName:currentPolicy.policyName,
        ageLimit:currentPolicy.ageLimit,
        insuredTotalAmount:currentPolicy.insuredTotalAmount,
        minAmount:currentPolicy.minAmount,
        installmentAmount:currentPolicy.installmentAmount,
        tenureYear:currentPolicy.tenureYear
      })

    
     
   }

   const updatePolicyCall = (id) =>{
      axios.put(`http://localhost:5000/policies/${id}`,policy).then(res =>{
        getPolicies()
      }).catch(err => {
        console.log(err);
      })


      setPolicy({
        policyName:'',
        ageLimit:'',
        insuredTotalAmount:'',
        minAmount:'',
        installmentAmount:'',
        tenureYear:''
      })
      setIsUpdate(false)

   }

   const deletePolicy = (id) => {
    axios.delete(`http://localhost:5000/policies/${id}`).then(res =>{
      console.log(res);

    }).catch(err =>{
      console.log("Unable to delete");
    })

    getPolicies()

   }


  return (
    
      <Row style={{position:"fixed"}} className='row'>
        <Col className='box' xs={12} md={8} >
          <div className='innerbox' style={{display:"inline-block"}}>
          {policies.length > 0 ? policies.map(p => {
            return  <Buttons key={p._id} deletePolicy={deletePolicy} editPolicy={editPolicy} data={p}/>
          }) : <h1>no policies </h1>}
  
        </div>
          

          
        </Col>
        <Col  xs={6} md={4} >
        
    <Form  style={{}} className=' form'>
      {isUpdate ? (<h1>Update the <br></br> Policy :) </h1>):(
        <h1>Create a new <br></br> Policy :) </h1> 
      )}
    
      <Form.Group className=" textField ">
        <Form.Control type="text" placeholder="Enter Policy name" value={policy.policyName} onChange={(event)=>{
          setPolicy({...policy,  policyName:event.target.value})}} />
      </Form.Group>

      <Form.Group className=" textField mb-3"> 
        <Form.Control  type="number" placeholder="Enter Age Limit" value={policy.ageLimit} onChange={(event)=>{
          setPolicy({...policy,  ageLimit:event.target.value})}} />
      </Form.Group>
      <Form.Group className=" textField mb-3">
        <Form.Control  type="text" placeholder="Enter insuredTotalAmount" value={policy.insuredTotalAmount}  onChange={(event)=>{
          setPolicy({...policy, insuredTotalAmount:event.target.value})}}/>
      </Form.Group>

      <Form.Group className=" textField mb-3">
        <Form.Control type="text" placeholder="Enter minAmount" value={policy.minAmount}  onChange={(event)=>{
          setPolicy({...policy,  minAmount:event.target.value})}}/>
      </Form.Group>

      <Form.Group className=" textField mb-3">
        <Form.Control type="text" placeholder="Enter installmentAmount" value={policy.installmentAmount}  onChange={(event)=>{
          setPolicy({...policy,  installmentAmount:event.target.value})}}/>
      </Form.Group>

      {/* <Form.Group className=" textField mb-3">
        <Form.Control  type="text" placeholder="Enter coverageLimit" />
      </Form.Group> */}

      <Form.Group  className=" textField mb-3">
        <Form.Control  type="number" placeholder="Tenure year" value={policy.tenureYear}  onChange={(event)=>{
          setPolicy({...policy,  tenureYear:event.target.value})}}/>
      </Form.Group>

      {isUpdate ? <Button className='btn' variant="success" onClick={() => updatePolicyCall(policy._id)}>Update</Button> : (
        <Button className='btn' variant="primary" onClick={create} >
        create
      </Button>
      )}
      
    </Form>
        </Col>
      </Row>
        

  )
}

export default AdminDashboard;