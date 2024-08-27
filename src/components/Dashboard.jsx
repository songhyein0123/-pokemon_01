import React from "react";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, onRemove }) => {
  return (
    <div>
      <h2>포켓몬도감</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={onRemove}
              isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
