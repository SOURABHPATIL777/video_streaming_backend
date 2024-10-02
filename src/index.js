import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => [
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    }),
  ])
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });

















/*

import mongoose from 'mongoose';
import { DB_NAME } from './constants';

import express from 'express';
const app = express();

( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("Error", (error)=>{
            console.log('Error', error);
            throw error
        });

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on server ${process.env.PORT}`);
        })


    } catch (error){
        console.error('Error: ', error);
        throw error
    }
} )();

*/
