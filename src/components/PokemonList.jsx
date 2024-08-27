import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonCards = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7개의 열을 균등하게 배치 */
  gap: 20px; /* 카드 간의 간격을 설정 */
  justify-content: center; /* 중앙 정렬 */
  padding: 20px;
  overflow-x: auto; /* 카드가 많을 경우 가로 스크롤을 추가 */
`;

const PokemonList = ({
  pokemonList,
  onAddPokemon,
  onRemovePokemon,
  selectedPokemon,
}) => {
  return (
    <PokemonCards>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAddPokemon}
          onRemove={onRemovePokemon}
          isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
        />
      ))}
    </PokemonCards>
  );
};

export default PokemonList;
