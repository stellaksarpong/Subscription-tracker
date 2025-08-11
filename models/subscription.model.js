import mongoose from "mongoose";    

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    price: {
        type: Number,
        required: [true,'Subscription price is required'],
        min: [  0,'subscription price must be greater than 0'],
        
    },
    current: {
        type: String,
        enum:['USD','EUR','GBP'],
        default: 'USD',
    },
}, {
    timestamps: true});