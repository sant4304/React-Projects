const express = require('express')

const app = express()
app.get('/data',(req,res)=>{
    const dummy =[
        {
            username:"Sam",
            city:"Bhopal",
            age:30
        }
    ]
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173").json({data:dummy})
})

app.listen(3000,()=>{
    console.log("Server is running")
})