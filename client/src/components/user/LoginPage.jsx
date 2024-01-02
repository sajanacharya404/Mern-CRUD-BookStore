import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="block mt-4 text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full mt-4 bg-blue-400 text-white p-2 rounded hover:bg-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
