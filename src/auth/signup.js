 import express from "express";
 import cors from "cors"
 import cookieParser from "cookie-parser";
 import jwt from "jsonwebtoken"
 import bcrypt from "bcrypt"
 import UserModel from "../Components/models/database.js";

//  import dotenv from "dotenv";
//   dotenv.config();

 
 const app = express()
 const JWT_SECRET = process.env.JWT_SECRET || "ilovemypassword"
//  console.log("ENV:", process.env.MONGODB_URL);


 app.use(express.json());
 app.use(cookieParser());

  app.use(cors({
   origin : "http://localhost:5173",
   credentials : true,
   maxAge: 24 * 60 * 60 * 1000    //1 day in ms
 }))


 app.post("/signup", async (req, res) => {


   try {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    const hashedpassword = await bcrypt.hash(password, 10)


   await UserModel.create({
      firstname,
      lastname,
      email,
      password : hashedpassword
   })

   res.json({
      message : "You are signed up"
   })

 } catch(err) {
  return res.status(403).json({
      message : "Error signing up",
      error : err.message
   })
 }

 })


 app.post("/login", async (req, res) => {
   try{
   const email = req.body.email
   const password = req.body.password



   const user = await UserModel.findOne({
      email
   })

   if(!user){
     return res.status(403).json({
         message : "User not found"
      })
   }

   const matchedpassword = await bcrypt.compare(password, user.password)

   if(matchedpassword){
      const token = jwt.sign({
         id : user._id
      }, JWT_SECRET, { expiresIn: "1d" })

      res.cookie("token", token , {
          httpOnly : true,
          sameSite : "lax"
      })

      return res.status(200).json({
      message : "Login successful"
   })
    }   else {
     return res.status(403).json({
         message : "Incorrect password"
       })
  }


 } catch(err){
    return res.status(500).json({
         message : "Error signing in",
         error : err.message
      })
 }
   


  
 })




 //Auth Middleware

 function auth (req, res, next) {
   const token = req.cookies.token

   if(!token) {
      return res.status(401).json({
         message : "Not logged in"
      })
   }



  try {
   const decoded = jwt.verify(token, JWT_SECRET)
   req.userId = decoded.id
   next()
  } catch {
   return res.status(403).json({
       message : "Invalid token"
   })
   
  }


 }


 app.get("/profile", auth, async (req, res) => {
     
   const user = await UserModel.findById(req.userId)

   res.json({
      user
   })
 })


 app.post("/logout", (req, res) => {
   res.clearCookie("token")
   res.json({
      message : "Logged out"
   })
 })


 app.listen(3000 , () => {
   console.log("Server is running on port 3000")
 })