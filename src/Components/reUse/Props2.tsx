import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";

interface iProps2 {
  title?: string;
  writeup?: string;
  bg?: string;
  img?: string;
}

const Props2: React.FC<iProps2> = ({ title, writeup, bg, img }) => {
  return (
    <div>
      <Container bg={`${bg}`}>
        <Left>
          <Title>{title}</Title>
          <WriteUp>{writeup}</WriteUp>
          <GlobalButton
            width="150px"
            height="40px"
            brad="50px"
            title="Learn More"
            bd="1px solid white"
            color="white"
          />
        </Left>
        <Img src={img} />
      </Container>
    </div>
  );
};

export default Props2;

const WriteUp = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const Title = styled.div``;
const Img = styled.img``;
const Left = styled.div`
  width: 300px;
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 20px;
`;
const Container = styled.div<{ bg: string }>`
  width: 650px;
  height: 370px;
  border-radius: 15px;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 5px 10px;
`;
