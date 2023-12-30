import Books from "../models/bookModel.js";

export const postBooks = async (req, res, next) => {
  const movies = await Books.create(req.body);
  res.status(201).json(movies);
};
export const getBooks = async (req, res, next) => {
  const movies = await Books.find(req.body);
  res.status(200).json(movies);
};
export const getBooksById = async (req, res, next) => {
  const { id } = req.params;
  const movies = await Books.findById(id);
  res.status(200).json(movies);
};
