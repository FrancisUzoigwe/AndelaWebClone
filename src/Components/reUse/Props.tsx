import React from "react";
import styled from "styled-components";


interface iProps{
    number?: string;
    text?: string;
}

const Props: React.FC <iProps>= ({number, text}) => {
  return (
    <div>
      <Container>
        <Main>
          <Rating>{number}</Rating>
          <Comments>{text}</Comments>
        </Main>
      </Container>
    </div>
  );
};

export default Props;

const Comments = styled.div`
  width: 200px;
  font-size: 17px;
  text-align: center;
`;
const Rating = styled.div`
  font-size: 60px;
  font-weight: 400;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 380px;
  height: 280px;
  background-color: #b0d6ce;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
`;
