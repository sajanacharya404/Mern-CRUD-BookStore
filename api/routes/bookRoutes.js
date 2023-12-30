import express from "express";
import { bookMovies } from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", bookMovies);

export default router;
