import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
//database
connectDB();

//middleware
app.use(express.json());

//routes
app.use("/api", bookRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
