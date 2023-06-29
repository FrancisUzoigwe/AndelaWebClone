import React from "react";
import styled from "styled-components";
import img from "../../Assets/Andela_NewLogos.png";
import GlobalButton from "../../Components/reUse/GlobalButton";

const Component2 = () => {
  return (
    <div>
      <Container>
        <Main>
          <Img src={img} />

          <Right>
            <Title>
              Build your team today 
            </Title>
            <BigText>We’ve cracked the code on creating
              engineering teams </BigText>
            <SmallText>Skilled engineers, product managers, and
              designers at your fingertips. An extensive list of technical
              services to suit your business needs. Start building your
              world-class team faster with talent from Andela.</SmallText>
              <GlobalButton width="180px" height="60px" brad="50px" bg="#56c870" title="Build Your Team" />
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Component2;

const SmallText = styled.div`
font-size: 18px;
font-weight: lighter;
margin-bottom: 20px;
`;
const BigText = styled.div`
font-size: 35px;
margin-bottom: 20px;
line-height: 1.08;
`;
const Title = styled.div`
font-size: 15px;
font-weight: 600;
margin-bottom: 10px;
`;

const Img = styled.img`
  width: 40%;
  height: 55%;
  object-fit: cover;
`;
const Right = styled.div`
  width: 55%;
  height: 100%;
  object-fit: cover;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  height:500px;
  width: 100%;
  /* background-color: bisque; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
