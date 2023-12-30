import express from "express";
import {
  deleteBooksById,
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
router.delete("/books/:id", deleteBooksById);

export default router;
