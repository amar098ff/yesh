const bodyParser = require('body-parser')
const express=require('express')
const port=4004
const app=express()
app.use(express.json())
app.listen(port,()=>{console.log(`server is not connected http://localhost:${port}`)})
app.get('/',(req,res)=>{res.status(200).send('hi friends')})
app.post('/',(req,res)=>{
    const{name,mobile_number}= reqbody
    if(!name){
        return res.status(202).json({message:`name is not given`})
    }
    if(!mobile_number){
        return res.status(202).json({message:`mobile number is not given`})
    }
    return res.status(202).json({message:`all are given`})
})