import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";

import connectDB from "./config/database.js";

import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

const app = express();
const port = 3000 || process.env.PORT;
connectDB();

app.use("/api/images", express.static("public/images"));
//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    console.log(req);
    console.log(req.file);
    if (!req.body.name) {
      return cb(new Error("File name is missing in the request body"));
    }
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    // Log the req.body to see its content
    console.log("Request body:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    return res.status(201).json("file uploaded successfully");
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

app.use("/api/", userRoutes);
app.use("/api/", authRoutes);
app.use("/api/", postRoutes);
app.use("/api/", conversationRoutes);
app.use("/api/", messageRoutes);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
