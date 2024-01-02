import React from "react";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
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
        />

        <label htmlFor="password" className="block mt-4 text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
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
