import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({
  pokemonList,
  onAddPokemon,
  onRemovePokemon,
  selectedPokemon,
}) => {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAddPokemon}
          onRemove={onRemovePokemon}
          isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
