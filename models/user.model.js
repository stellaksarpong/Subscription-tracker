import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ 
        type: String, required: true ,
trim: true,
minLength:2, 
maxlengeth: 50
},
    
})