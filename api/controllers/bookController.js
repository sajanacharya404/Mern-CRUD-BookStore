import Books from "../models/bookModel.js";
import { errorHandler } from "../utlis/error.js";

export const postBooks = async (req, res, next) => {
  try {
    const books = await Books.create(req.body);
    res.status(201).json(books);
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};
export const getBooks = async (req, res, next) => {
  try {
    const books = await Books.find(req.body);
    res.status(200).json(books);
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};
export const getBooksById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const books = await Books.findById(id);
    res.status(200).json(books);
  } catch (error) {
    next(errorHandler(404, "Book Not Found"));
  }
};
export const updateBooksById = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, publishYear, author, price } = req.body;

  try {
    const updatedBooks = await Books.findByIdAndUpdate(
      id,
      {
        name,
        description,
        publishYear,
        author,
        price,
      },
      { new: true }
    );
    if (!updatedBooks) {
      res.json(404).json({ message: "Book Not found" });
    }
    res.status(200).json(updatedBooks);
  } catch (error) {
    next(errorHandler(500, "Internal server Error"));
  }
};

export const deleteBooksById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const books = await Books.findByIdAndDelete(id);
    if (!books) {
      next(errorHandler(404, "Book not found"));
    }
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    next(errorHandler(500, "Internal Server Error"));
  }
};
