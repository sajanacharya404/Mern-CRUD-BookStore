import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiBookAdd } from "react-icons/bi";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/books/${id}`);
        const data = await res.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to update book:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-400">
      <div className="bg-white p-8 rounded shadow-md">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
            id="name"
            value={book.name || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 border rounded"
            id="description"
            value={book.description || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Publish Year"
            className="p-2 border rounded"
            id="publishYear"
            value={book.publishYear || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Author"
            className="p-2 border rounded"
            id="author"
            value={book.author || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Price"
            className="p-2 border rounded"
            id="price"
            value={book.price || ""}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white p-2 rounded flex items-center"
          >
            <BiBookAdd className="mr-2" />
            {loading ? "Updating" : "Update Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
