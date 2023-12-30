import express from "express";
import {
  getBooks,
  getBooksById,
  postBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", postBooks);
router.get("/books", getBooks);
router.get("/books/:id", getBooksById);

export default router;
