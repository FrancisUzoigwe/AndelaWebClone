import React from "react";
import styled from "styled-components";

const Components4 = () => {
  return (
    <div>
      <Container>
        <Main>
          Brilliant minds and companies come together to build the future
        </Main>
      </Container>
    </div>
  );
};

export default Components4;

const Main = styled.div`
  /* background-color: red; */
  width: 600px;
  text-align: center;
  line-height: 1.06;
`;
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
