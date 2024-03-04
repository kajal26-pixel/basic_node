module.exports=function(app){
    app.get('/users',(req,res)=>{
        res.send('hiiii')
    })

    app.get('/data',(req,res) =>{
        res.send({name:"kajal",designation:"Node js Developer",department:"Web"})
    })
    
}