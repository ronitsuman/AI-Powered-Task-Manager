import e from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";

// firstly defining app jo hai mera express pr ban rha hai
const app = express();
// app jo use krega json
app.use(express.json());
// middlware to use 
app.use(cors());

// mongoDb atlas Connection  
