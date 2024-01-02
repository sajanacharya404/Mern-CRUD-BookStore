import React from "react";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <label htmlFor="username" className="block text-gray-700">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="email" className="block mt-4 text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
        />
        <label htmlFor="password" className="block mt-4 text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="enter password"
          id="password"
          className="w-full mt-2 p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full mt-4 bg-blue-400 text-white p-2 rounded hover:bg-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
