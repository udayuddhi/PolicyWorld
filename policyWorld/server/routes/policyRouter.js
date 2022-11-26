const express = require("express");
const { getPolicies,getByName, createPolicy, deletePolicy, updatePolicy } = require("../controllers/policyController");
const router = express.Router();


router.get("/",getPolicies)

router.get("/:name",getByName)

router.post("/",createPolicy)

router.put("/:id",updatePolicy)

router.delete("/:id",deletePolicy)




module.exports = router;



