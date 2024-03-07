const express = require("express"); 
const app = express(); 
app.use(express.json())
// const swaggerUi=require('swagger-ui-express')
// const swaggerFile=require('./swagger_output.json')
// require('./endpoints')(app)
// const mongoose = require('mongoose');
import mongodb from "mongodb"
import mongoose from "mongoose";
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
// mongoose.connect("mongodb+srv://vercel-admin-user:01LvT7qIUKW7vws0@cluster0.bs22zit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
// .then(()=>{console.log("mongo connected!")})
// .catch((err)=>{console.error(err)})

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

module.exports = app;