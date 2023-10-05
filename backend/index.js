import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./config/database.js";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();
const port = 3000 || process.env.PORT;
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/", userRoutes);
app.use("/api/", authRoutes);
app.use("/api/", postRoutes);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
