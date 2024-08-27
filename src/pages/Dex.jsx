import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
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
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id)); // 필터링을 통해 포켓몬 삭제
  };

  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePokemon} />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        onRemovePokemon={removePokemon}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
}

export default Dex;
