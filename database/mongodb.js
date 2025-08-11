import mongoose from 'mongoose'
import { DB_URL } from '../config/env.js'

if(!DB_URL) {
throw new error('Please define the MONGODB_URL environment variable inside .env.<development>.local');
}

const connectDB = async ()=> {

    try{
        await mongoose.connect(DB_URL)
    }

catch(error) {
        console.error('Error connecting to MongoDB:', error); process.exit(1); 
};
}