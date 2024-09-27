import express from"express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app =express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"Comming from backend",
        success:true
    })
});

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    orign:'https://localhost:5137',
    credentials:true
}

const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})

