import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dex from "./pages/Dex";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
