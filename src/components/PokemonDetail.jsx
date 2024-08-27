import React from "react";
import MOCK_DATA from "../mock";
import { useParams, useNavigate } from "react-router-dom";

function PokemonDetail() {
  const { id } = useParams(); // URL에서 포켓몬 ID를 받아옴
  const navigate = useNavigate();

  const pokemonId = parseInt(id, 10); // ID를 숫자로 변환
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>{" "}
      {/* 뒤로 가기 기능 구현 */}
    </div>
  );
}
export default PokemonDetail;
