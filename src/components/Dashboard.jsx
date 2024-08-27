import React from "react";
import PokemonCard from "./PokemonCard";
import { styled } from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  margin: 30px;
  height: 350px;
  width: 90vw;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
`;

const PokemonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
`;

const Dashboard = ({ selectedPokemon, onRemove }) => {
  return (
    <DashboardContainer>
      <Title>포켓몬도감</Title>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <PokemonList>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={onRemove}
              isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
            />
          ))}
        </PokemonList>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
