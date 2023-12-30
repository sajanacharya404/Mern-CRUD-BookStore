import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
//database
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api", bookRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  return res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});
