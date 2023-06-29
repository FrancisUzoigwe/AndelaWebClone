import React from "react";
import styled from "styled-components";
import img from "../../Assets/section-bg-image.jpeg";
import GlobalButton from "../../Components/reUse/GlobalButton";

const ImageBlur = () => {
  return (
    <div>
      <Container>
        <Image src={img} />
        <Main>
          <BigText>tech talents Grow your potential beyond borders</BigText>
          <SmallText>
            Connect with a global network and land international opportunities.
          </SmallText>
          <GlobalButton />
        </Main>
      </Container>
    </div>
  );
};

export default ImageBlur;

const SmallText = styled.div``;
const BigText = styled.div``;
const Main = styled.div`
width: 300px;
height: 150px;
background-color: red;
z-index: 2;
`;

const Image = styled.img`
/* z-index: -2; */
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 2; */
`;
