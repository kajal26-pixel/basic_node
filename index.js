const express = require("express"); 
const app = express(); 
app.use(express.json())
// const swaggerUi=require('swagger-ui-express')
// const swaggerFile=require('./swagger_output.json')
// require('./endpoints')(app)
// const mongoose = require('mongoose');
//const mongodb=require("mongodb")
//import mongoose from "mongoose";
//import * as mongoose from 'mongoose'
const mongoose = require("mongoose")
const bodyParser=require('body-parser')
// require('dotenv').config()

// app.use('/doc',swaggerUi.serve,swaggerUi.setup(swaggerFile))
// const MyModel = mongoose.model('MyModel', {}, 'mycollection');

app.get("/", (req, res) => { 
    res.send("Express on Vercel");
}); 

app.get("/test", (req, res) => { 
    res.send("Express on test");
}); 

app.post('/user',(req,res)=>{
    console.log(req.body,"req")
    const username=req.body.name;
    const age=req.body.age;
    console.log(username,age)
    // MyModel.create({name:username,age:age}).then((ans) => { 
    //     console.log("Document inserted") 
    // }).catch((err) => { 
    //     console.log(err.Message); 
    // })
    res.send("sent!")
})

// console.log(process.env.MONGODB_URI,">>>")
await mongoose.connect("mongodb+srv://user1:user123@cluster0.faucczp.mongodb.net/test")
.then(()=>{console.log("mongo connected!")})
.catch((err)=>{console.error(err)})

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

module.exports = app;