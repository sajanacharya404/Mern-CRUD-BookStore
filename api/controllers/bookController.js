import Books from "../models/bookModel.js";

export const postBooks = async (req, res, next) => {
  const books = await Books.create(req.body);
  res.status(201).json(movies);
};
export const getBooks = async (req, res, next) => {
  const books = await Books.find(req.body);
  res.status(200).json(books);
};
export const getBooksById = async (req, res, next) => {
  const { id } = req.params;
  const books = await Books.findById(id);
  res.status(200).json(books);
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
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
