import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
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
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });
    navigate("/login");
  };

  return (
    <div className="bg-blue-400 p-4 flex items-center justify-between">
      <h1 className="text-white text-lg">
        Book <span className="font-bold">Store</span>
      </h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleClick}
          className="bg-white text-blue-400 p-1 rounded flex items-center space-x-2"
        >
          <FaBook className="text-blue-400" />
          <span>Add Books</span>
        </button>
        <button
          onClick={handleViewClick}
          className="bg-white text-blue-400 p-1 rounded flex items-center space-x-2 border"
        >
          <FaBook className="text-blue-400" />
          <span>View Books</span>
        </button>
        <button
          onClick={handleRegister}
          className="bg-white text-blue-400 p-1 rounded flex items-center space-x-2 border"
        >
          <FaBook className="text-blue-400" />
          <span>Register</span>
        </button>
        <button
          onClick={handleLogin}
          className="bg-white text-blue-400 p-1 rounded flex items-center space-x-2 border"
        >
          <FaBook className="text-blue-400" />
          <span>Login</span>
        </button>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-400 p-1 rounded flex items-center space-x-2 border"
        >
          <FaBook className="text-blue-400" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
