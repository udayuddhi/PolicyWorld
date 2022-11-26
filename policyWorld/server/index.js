const express = require("express")
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require("body-parser");
const router  = require("./routes/policyRouter");
const app = express()
app.use(cors())


app.use(bodyParser.urlencoded({limit:"20mb", extended:true}))
app.use(bodyParser.json({limit:"20mb", extended:true}))

app.use("/policies",router);




const CONNECTION_URL = 'mongodb+srv://policy:12345@cluster0.vhwwnm4.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    app.listen(PORT,() => {
        console.log("Listening on PORT : 5000");
    })
}).catch(err => console.log(err.message))
