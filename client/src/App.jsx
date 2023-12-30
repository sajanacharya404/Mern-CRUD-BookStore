import React from "react";
import RegisterBook from "./components/RegisterBook";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<RegisterBook />} />
      </Routes>
    </div>
  );
};

export default App;
