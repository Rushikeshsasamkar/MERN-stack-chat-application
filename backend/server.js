import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    // route route 
    res.send("Hello world")
})

app.use("/api/auth",authRoutes);



app.listen(PORT,()=>{
connectToMongoDB();
console.log(`Server is running on ${PORT}`)

})