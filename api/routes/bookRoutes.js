import express from "express";
import { getBooks, postBooks } from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", postBooks);
router.get("/books", getBooks);

export default router;
