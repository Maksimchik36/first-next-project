import mongoose from "mongoose";


const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_TWO);
    } catch (error) {
        throw new Error("Connection failed.");
    }
}


export default connection;