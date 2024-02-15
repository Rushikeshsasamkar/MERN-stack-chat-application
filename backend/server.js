import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // to param the incoming requests with the json payloads(from req.body)



app.use("/api/auth",authRoutes);





app.listen(PORT,()=>{
connectToMongoDB();
console.log(`Server is running on ${PORT}`)

})