//const mongoose = require('mongoose');
//const bodyParser=require('body-parser')
const express=require('express')

// const usermodel=mongoose.model("users",new mongoose.Schema({name:{type:String},age:{type:Number}}))

module.exports=function(app){

    //app.use(bodyParser.urlencoded({extended:true}))
    app.use(express.json())

    app.get('/users',(req,res)=>{
        res.send('hiiii')
    })

    app.get('/data',(req,res) =>{
        res.send({name:"kajal",designation:"Node js Developer",department:"Web"})
    })

    // app.post('/user',(req,res)=>{
    //     console.log(req.body,"req")
    //     const username=req.body.name;
    //     const age=req.body.age;
    //     console.log(username,age)
    //     // usermodel.create({name:username,age:age}).then((ans) => { 
    //     //     console.log("Document inserted") 
    //     //   }).catch((err) => { 
    //     //     console.log(err.Message); 
    //     //   })
    //     res.send("sent!")
    // })
    
}

