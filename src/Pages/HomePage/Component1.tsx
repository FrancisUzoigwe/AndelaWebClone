import React from "react";
import styled from "styled-components";
import GlobalButton from "../../Components/reUse/GlobalButton";
import img from "../../Assets/logo-github-1.png"
import img1 from "../../Assets/logo-invision-1.png"
import img2 from "../../Assets/logo-coursera.png"
import img3 from "../../Assets/logo-kraft-heinz-1.png"
import img4 from "../../Assets/logo-seismic-1.png"
import img5 from "../../Assets/logo-goldman-sachs.png"

const Component1 = () => {
  return (
    <div>
      <Container>
        <Top>
          <Main>
            <Text>
              Andela Launches New Platform to Power the Future of Customized
              Work
            </Text>
            <GlobalButton
              width="180px"
              height="60px"
              bg="#56c870"
              brad="30px"
              title="Find Out More"
            />
          </Main>
        </Top>
        <Bottom>
          <Main1>
            <Title>Trusted by</Title>
         <Holder>
         <Img src={img}/>
            <Img src={img1}/>
            <Img src={img2}/>
            <Img src={img3}/>
            <Img src={img4}/>
            <Img src={img5}/>
         </Holder>
          </Main1>
        </Bottom>
      </Container>
    </div>
  );
};

export default Component1;

const Img = styled.img`
width: 200px;
`
const Holder = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const Title = styled.div`
font-size: 30px;
margin-bottom: 30px;
`
const Text = styled.div`
  width: 550px;
  font-size: 32px;
  font-weight: 400;
`;
const Bottom = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f1eb;
`;
const Top = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #173b3f;
  color: white;
`;
const Main1 = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  /* background-color: red; */
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  /* background-color: lightcoral; */
`;
