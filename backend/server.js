import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import MessageRoutes from './routes/message.route.js';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // to param the incoming requests with the json payloads(from req.body)


app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",MessageRoutes);





app.listen(PORT,()=>{
connectToMongoDB();
console.log(`Server is running on ${PORT}`)

})