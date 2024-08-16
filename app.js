const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("helllllllllo hello")

})

app.get('/about',(req,res)=>{
    res.send("about page ma redirect gardeu")
})
app.get('/hehe',(req,res)=>{
    res.send("<h1>hehehhehehehehehehehehehehehehehe</h1>")

})




app.listen(3000,()=>{
    console.log("Node js run hola ta ??")

})