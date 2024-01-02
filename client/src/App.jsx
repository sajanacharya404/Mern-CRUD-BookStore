import React from "react";
import RegisterBook from "./components/RegisterBook";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
import UpdateBook from "./components/UpdateBook";
import LoginPage from "./components/user/LoginPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/books" element={<RegisterBook />} />
        <Route path="/books/:id" element={<UpdateBook />} />
        <Route path="/viewbooks" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default App;
