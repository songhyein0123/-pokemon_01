import React from "react";
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt={pokemon.id} />
      <p>{pokemon.korean_name}</p>
      <p>{pokemon.id}</p>
      {isSelected ? (
        <button
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트의 전파를 막아 상세 페이지로 이동하지 않도록 함
            onRemove(pokemon);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation(); // 클릭 이벤트의 전파를 막아 상세 페이지로 이동하지 않도록 함
            onAdd(pokemon);
          }}
        >
          추가
        </button>
      )}
    </div>
  );
}

export default PokemonCard;
