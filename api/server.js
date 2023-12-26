import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const app = express();
//database
connectDB();

app.listen(8000, () => {
  console.log("Server started");
});
