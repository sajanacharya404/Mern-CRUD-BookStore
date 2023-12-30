import Books from "../models/bookModel.js";

export const bookMovies = async (req, res, next) => {
  const movies = await Books.create(req.body);
  res.status(201).json(movies);
};
