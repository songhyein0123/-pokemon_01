import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
  width: 100px;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonName = styled.p`
  font-size: 18px;
  color: #333;
`;

const PokemonId = styled.p`
  font-size: 14px;
  color: #777;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

const PokemonImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <Card
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      style={{ cursor: "pointer" }}
    >
      <PokemonImage src={imageUrl} alt={pokemon.id} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonId>No. {pokemon.id}</PokemonId>
      {isSelected ? (
        <Button
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트의 전파를 막아 상세 페이지로 이동하지 않도록 함
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트의 전파를 막아 상세 페이지로 이동하지 않도록 함
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
