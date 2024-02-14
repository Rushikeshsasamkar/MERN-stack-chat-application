const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    // route route 
    res.send("Hello world")
})

app.listen(PORT,()=>console.log('Server is running on 5000'))