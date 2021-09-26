import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api", authRoutes);

// Database connected
connectDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running at ${port}`);
});
