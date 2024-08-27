import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import Dex from "./pages/Dex";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
