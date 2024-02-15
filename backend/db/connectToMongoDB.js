import { mongoose } from "mongoose";

const connectToMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error in connecting mongoDB",error.message)
    }
}

export default connectToMongoDB;