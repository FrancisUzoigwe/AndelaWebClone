import React from "react";
import styled from "styled-components";
import Props2 from "../../Components/reUse/Props2";
import img from "../../Assets/circle-accent-purple.svg";
import img1 from "../../Assets/circle-accent-red.svg";
import img2 from "../../Assets/circle-accent-yellow.svg";
import GlobalButton from "../../Components/reUse/GlobalButton";

const Components8 = () => {
  return (
    <div>
      <Container>
        <Main>
          <BoxHolder>
            <Props2
              title="Case Studies"
              writeup="fugit aspernatur, in atque delectus ea ipsum eaque earum, deseru"
              bg="#4a1476"
              img={img}
            />
            <Props2
              title="Case Studies"
              writeup="t minus sit fugit aspernatur, in atque delectus ea ipsum eaque earum, deserunt esse molestias est at?"
              bg="#701340"
              img={img1}
            />

            <Props2
              title="Case Studies"
              writeup="delectus ea ipsum eaque earum, deserunt esse molestias est at?"
              bg="#c95227"
              img={img2}
            />
            <Props2
              title="Case Studies"
              writeup="fugit aspernatur, in atque delectus ea ipsum eaque earum, deseru"
              bg="#4a1476"
              img={img}
            />
            <Props2
              title="Case Studies"
              writeup="t minus sit fugit aspernatur, in atque delectus ea ipsum eaque earum, deserunt esse molestias est at?"
              bg="#701340"
              img={img1}
            />
            <Props2
              title="Case Studies"
              writeup="delectus ea ipsum eaque earum, deserunt esse molestias est at?"
              bg="#c95227"
              img={img2}
            />
          </BoxHolder>
          <GlobalButton
            width="200px"
            height="60px"
            brad="30px"
            bd="1px solid #173b3f"
            title="All case studies"
          />
        </Main>
      </Container>
    </div>
  );
};

export default Components8;

const BoxHolder = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  /* overflow: hidden; */
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* overflow: hidden; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
