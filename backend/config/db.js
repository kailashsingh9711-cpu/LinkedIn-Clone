import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("db connect");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDb;