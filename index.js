const express = require("express"); 
const app = express(); 
const swaggerUi=require('swagger-ui-express')
const swaggerFile=require('./swagger_output.json')
require('./endpoints')(app)
const mongoose = require('mongoose');
require('dotenv').config()

app.use('/doc',swaggerUi.serve,swaggerUi.setup(swaggerFile))

app.get("/", (req, res) => { 
    res.send("Express on Vercel");
}); 

// console.log(process.env.MONGODB_URI,">>>")
// mongoose.connect(process.env.MONGODB_URI)
// .then(()=>{console.log("mongo connected!")})
// .catch((err)=>{console.error(err)})

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

module.exports = app;