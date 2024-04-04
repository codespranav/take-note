import mongoose from "mongoose";
import dotenv from "dotenv"
import { DB_NAME } from "../constant.js";
dotenv.config();

const connectToDB = async ()=>{
    try {
        const mongo_uri = process.env.MONGO_URI 
        const connectionInstance = await mongoose.connect(mongo_uri);
        console.log(`\n mongodb connection established ${connectionInstance.connection.host}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}

export default connectToDB