import mongoose from "mongoose";

const {Schema} = mongoose 

//Define a schema for a user document
const userSchema = new Schema({
  name: {
    type:String,
    unique: true,
    required: true,
  },
  email: {
    type:String,
    unique: true,
    required: true,
  },
  password: {
    type:String,
    unique: true,
    required: true,
  },
},
 {timestamps: true}
 );

 // create a model for the user collection based on the user schema. Model name is "User" and we pass in userSchema. This will basically create a User collection in our database
 
 export default mongoose.model("User", userSchema)