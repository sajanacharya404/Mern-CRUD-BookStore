import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";

const RegisterBook = () => {
  const [books, setBooks] = useState({
    name: "",
    description: "",
    publishYear: "",
    author: "",
    price: "",
  });
  const handleChange = (e) => {
    setBooks({ ...books, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Books:", books);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-400">
      <div className="bg-white p-8 rounded shadow-md">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 border rounded"
            id="description"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Publish Year"
            className="p-2 border rounded"
            id="publishYear"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Author"
            className="p-2 border rounded"
            id="author"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Price"
            className="p-2 border rounded"
            id="price"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white p-2 rounded flex items-center"
          >
            <BiBookAdd className="mr-2" />
            Post Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterBook;
