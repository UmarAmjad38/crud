import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userroutes.js";

const app = express();  
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const URL = 'mongodb://localhost:27017/test';
const PORT = 3001;

mongoose.connect(URL).then(()=>{

    console.log("DB Connected Successfully"); 
    
    app.listen(PORT,()=>{
        console.log(`Server is running`)
    })

}).catch(error => console.log(error));

app.use("/api", route);