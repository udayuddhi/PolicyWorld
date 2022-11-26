const Policy  = require("../models/Policy")


const getPolicies = async (req,res) =>{
    try {
        const allPolicy = await Policy.find();
        res.status(200).json(allPolicy);
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    };

    
}
const getByName = async (req,res) =>{
    const name = req.params["name"]
    try {
        
        const policy = await Policy.findOne({policyName:name})
        res.status(200).json(policy);
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    };

    
}

const createPolicy =  async(req,res) =>{
    const policy = req.body;
    const newPolicy = new Policy(policy);
    try {
        await newPolicy.save();
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(404).json({message:error.message})
        
    };

   
}


const deletePolicy = (req,res) => {
    const id = req.params.id
    
    try {
        Policy.findByIdAndRemove(id).exec();
        res.send ('successfully Deleted');
       
    } catch (error) {
        console.log(error);
       
        
    };
  
}

const updatePolicy = (req,res) =>{
    const id = req.params['id']
    const obj = req.body;
    

    Policy.findOneAndUpdate(
        {_id:id},
        {$set : obj},(err,result) => {
        if(err){
            res.send("Not updated")
        }else{
            res.send(result)
        }
    })
}

module.exports = {getPolicies,getByName, createPolicy,updatePolicy, deletePolicy}