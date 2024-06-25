import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";



const app = express()

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT||5050

// app.get("/",(req,res)=>{
//     res.send("Hi,server is working")
// })

// app.get("/api/auth/login",(req,res)=>{
//     res.send("Login Api")
// })

// app.get("/api/auth/signup",(req,res)=>{
//     res.send("Sigup")
// })

// app.get("/api/auth/logout",(req,res)=>{
//     res.send("Logout")
// })

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);

app.listen(8080,()=>{
    connectToMongoDB();
    console.log(`Server is listining on port ${PORT}`)
})