const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const policySchema = new Schema({
    policyName : {
        type : String,
        require : true
    },
    ageLimit : {
        type : Number,
        require : true
    },
    insuredTotalAmount : {
        type : Number,
        require : true
    },
    minAmount : {
        type : Number,
        require : true
    },
    installmentAmount : {
        type : Number,
        require : true
    },
    tenureYear : {
        type : Number,
        require : true
    },
})

const Policy = mongoose.model("Policy", policySchema);

module.exports =  Policy

