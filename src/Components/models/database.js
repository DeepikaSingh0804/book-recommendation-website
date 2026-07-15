 import dotenv from "dotenv";
dotenv.config();
 import mongoose from "mongoose";

 mongoose.connect(process.env.MONGODB_URL)


 const userSchema = new mongoose.Schema({
    firstname : String,
    lastname  : String,
    email     : String,
    password  : String
 })


 const UserModel = mongoose.model("User", userSchema)


 export default UserModel