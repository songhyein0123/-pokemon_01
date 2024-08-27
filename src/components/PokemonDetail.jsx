import React from "react";
import MOCK_DATA from "../mock";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

// 전체 컨테이너 스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
`;

// 포켓몬 이미지 스타일
const PokemonImage = styled.img`
  width: 200px; /* 적절한 이미지 크기 설정 */
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

// 포켓몬 이름 스타일
const PokemonName = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

// 포켓몬 타입 스타일
const PokemonTypes = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`;

// 설명 스타일
const PokemonDescription = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
`;

// 버튼 스타일
const BackButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

function PokemonDetail() {
  const { id } = useParams(); // URL에서 포켓몬 ID를 받아옴
  const navigate = useNavigate();

  const pokemonId = parseInt(id, 10); // ID를 숫자로 변환
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <Container>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonTypes>타입: {pokemon.types.join(", ")}</PokemonTypes>
      <PokemonDescription>설명:{pokemon.description}</PokemonDescription>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>{" "}
      {/* 뒤로 가기 기능 구현 */}
    </Container>
  );
}
export default PokemonDetail;
