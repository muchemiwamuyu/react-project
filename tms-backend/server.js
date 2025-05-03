import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"


// middleware
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

// Connect to MongoDB
connectDB()

// Simple Route
app.get("/", (req, res) => {res.send("Welcome to TMS Backend!")});
app.use("/staff", taskRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

