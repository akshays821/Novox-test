import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', adminRouter);
const port = 3000;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri);



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})