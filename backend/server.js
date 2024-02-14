import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    // route route 
    res.send("Hello world")
})

app.get("/api/auth/signup",(req,res)=>{
    console.log("Signup route");
});
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))