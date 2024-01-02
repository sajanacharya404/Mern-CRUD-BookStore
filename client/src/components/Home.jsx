import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/books");
  };
  const handleViewClick = () => {
    navigate("/viewbooks");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2 mx-10"
      >
        <FaBook />
        <span>Login</span>
      </button>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2 mx-10"
      >
        <FaBook />
        <span>Add Books</span>
      </button>
      <button
        onClick={handleViewClick}
        className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2"
      >
        <FaBook />
        <span>View Books</span>
      </button>
    </div>
  );
};

export default Home;
