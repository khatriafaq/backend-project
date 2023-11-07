import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv"


dotenv.config({
    path: './env'
})

connectDB()





























/*
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONODB_URI}/${DB_NAME}`)
        
    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})();

*/