import React,{useEffect,useState} from 'react'
import PolicyCard from '../../components/policies/PolicyCard'
// import policies from "./data.json";
import './policy.css'
import axios from 'axios';

export default function Policies() {


  const [policyList,setPolicyList]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/policies/').then((allPolicy)=>{
      setPolicyList(allPolicy.data)
    })
  })



  return (
    <div className="container">
      <h1 className="text-center"  >Policies</h1>
      <div className='row' >
        <div className='column' style={{ display:"flex",float: "left", margin:"10px"}}>
         
          { (policyList.length > 0) ? policyList.map(policy => <PolicyCard policy={policy} key={policy._id}/>)  : "Empty"}
        </div>  
      </div>
    </div>
  )
}