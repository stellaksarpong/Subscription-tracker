import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ 
        type: String, required: true ,
trim: true,
minLength:2, 
maxlengeth: 50
},
   
email:{
    type: String, required: [true,'user email is required'], unique: true,
    trim: true,
    minLength: 5,
    maxlengeth:255,
    lowercase: true,
    match:[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,'Please enter a valid email address']
},
password:{
    type: String, required: [true,'user password is required'],
    minLength: 6,
}
}, {
    timestamps: true
});

const Schema = mongoose.model('user',userSchema);

export default Schema;

// userSchema.create({
//     name: 'John Doe',
//     email: 'johnny@gmail.com',
//     password: 'password123'
    
 
//      }).then((user) => {