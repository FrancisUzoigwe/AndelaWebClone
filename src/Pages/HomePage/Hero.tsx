import React from "react";
import GlobalButton from "../../Components/reUse/GlobalButton";
import styled from "styled-components";
import img from "../../Assets/header-jpeg-webp.webp";
import Header from "../../Components/Static/Header";

const Hero = () => {
  return (
    <div>
      <Container>
        <Header />
        <HeroImage src={img} />
        <Main>
          <BigText>Discover brilliant talent
around the world</BigText>
          <SmallText>Join Andela to build your team with developers, engineers, product designers, and the best remote technology experts.</SmallText>
          <ButtonHolder>
            <GlobalButton width="150px" height="60px" brad="50px" bg="#56c870" title="Hire Talent"/>
            <GlobalButton width="180px" height="60px" brad="50px" bg="white" title="Apply for Jobs" />
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const ButtonHolder = styled.div`
/* background-color: yellow; */
width: 340px;
display: flex;
justify-content: space-between;
`;
const BigText = styled.div`
/* background-color: red; */
width: 650px;
font-size: 60px;
font-weight: 600;
margin-bottom: 40px;
line-height: 1.2;
`;
const SmallText = styled.div`
margin-bottom: 40px;

`;
const Main = styled.div`
margin-top: 70px;
/* background-color: bisque; */
width: 95%;
height: 400px;
left: 0;
position: absolute;
padding-left: 40px;
`;
const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: static;
  top: 0;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: -5; */
  color: white;
`;
