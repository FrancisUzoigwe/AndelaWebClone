import React from "react";
import GlobalButton from "../../Components/reUse/GlobalButton";
import styled from "styled-components";
import img from "../../Assets/header-jpeg-webp.webp";
import Header from "../../Components/Static/Header";

const HeroPage = () => {
  return (
    <div>
      <Container>
        <Header />
        <HeroImage src={img} />
        <Main>
          <BigText>
            Find work that you love with companies you can trust
          </BigText>
          <SmallText>
            Join the Andela Talent Network to experience the joy of long-term
            work, with vetted companies and competitive compensation.
          </SmallText>
          <ButtonHolder>
            <GlobalButton
              width="350px"
              height="65px"
              brad="50px"
              bg="#56c870"
              title="Apply to access exclusive jobs"
            />
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default HeroPage;

const ButtonHolder = styled.div`
  /* background-color: yellow; */
  width: 340px;
  display: flex;
  justify-content: space-between;
`;
const BigText = styled.div`
  /* background-color: red; */
  width: 600px;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 1.2;
`;
const SmallText = styled.div`
  margin-bottom: 40px;
  width: 530px;
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
