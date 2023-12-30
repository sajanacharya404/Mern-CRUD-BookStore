import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/books");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2"
      >
        <FaBook />
        <span>Add Books</span>
      </button>
    </div>
  );
};

export default Home;
