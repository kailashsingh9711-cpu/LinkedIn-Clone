import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        if(!process.env.MONGODB_URL){
            throw new Error('MONGODB_URL not set in environment');
        }
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected");

    } catch (error) {
        console.error("DB connection error:", error);
        throw error;
    }
}

export default connectDb;