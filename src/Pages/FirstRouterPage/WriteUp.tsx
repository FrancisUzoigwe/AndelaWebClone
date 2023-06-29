import React from "react";
import styled from "styled-components";

const WriteUp = () => {
  return (
    <div>
      <Container>
        <Main>Find what you’re looking for and more</Main>
      </Container>
    </div>
  );
};

export default WriteUp;

const Main = styled.div`
font-size: 40px;
font-weight: 400;
`;
const Container = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
`;
