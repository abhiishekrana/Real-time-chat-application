import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router = express.Router();

// router.get("/login",(req,res)=>{
//     res.send("Login Route");
// })

// router.get("/Signup",(req,res)=>{
//     res.send("Sign up")
// })

// router.get("/logout",(req,res)=>{
//     res.send("Logout")
// })

router.post("/login",login);
router.post("/signup",signup);
router.post("/logout",logout)

export default router;