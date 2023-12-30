import express from "express";
import {
  getBooks,
  getBooksById,
  postBooks,
  updateBooksById,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", postBooks);
router.get("/books", getBooks);
router.get("/books/:id", getBooksById);
router.put("/books/:id", updateBooksById);

export default router;
