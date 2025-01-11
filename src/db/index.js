import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'

const connectDB = async ()=> {
    try {
        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); 1aSs07s5QbmQ1OfC
        const connectionInstance = await mongoose.connect("mongodb+srv://07sourabhpatil:1aSs07s5QbmQ1OfC@cluster0.pvnqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log(`/n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`MONGODB connection FAILED`, error);

        process.exit(1);
    }
}

export default connectDB;