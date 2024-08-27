import React, { createContext, useContext, useState } from "react";
const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다!");
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    ></PokemonContext.Provider>
  );
}

export default PokemonContext;
