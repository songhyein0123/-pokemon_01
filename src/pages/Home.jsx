// Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

// 타이틀 스타일
const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

// 버튼 스타일
const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1.5rem;
  color: #fff;
  background-color: #ff4500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>포켓몬 도감</Title>
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </Container>
  );
}

export default Home;
