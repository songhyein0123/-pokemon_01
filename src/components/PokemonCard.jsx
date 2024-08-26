import React from "react";

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <Card>
      <img src={""} alt={""} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
      ) : (
        <Button onClick={() => {}}>추가</Button>
      )}
    </Card>
  );
}

export default PokemonCard;
