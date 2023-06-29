import React from "react";
import styled from "styled-components";
import img from "../../Assets/shutterstock_1862846512-scaled.jpg"
import GlobalButton from "../../Components/reUse/GlobalButton";

const Data: any = [
    {
        icon: 1,
        title: "Demonstrate your skills",
        text: "Join our expert community by completing a short assessment to showcase your skills."
    },
    {
        icon: 2,
        title: "Personalized matching",
        text: "You’ve done the work to build your experience and knowledge. Now we’ll find your dream role through enhancing your profile, career coaching, and introducing you to the world’s most innovative companies."
    },
    {
        icon: 3,
        title: "Unlock your potential",
        text: "Once you land your perfect role, Andela is here to support you to hone your craft and achieve your goals."
    },
]
const Community = () => {
    return (
      <div>
        <Container>
          <Img src={img}/>
          <Blackdrop>
          <Main>
            <Left>
              <Title>Spark a thousand connections</Title>
              <SubTitle>
  Becoming part of a community
  has never been easier.</SubTitle>
  <GlobalButton width="170px" height="60px" brad="50px" title="get started" bg="#56c870"/>
            </Left>
            <Right>
            
            {
              Data.map((el: any) => (
                 <Holder>
                   <Icon>{el.icon}</Icon>
                  <Hold>
                  <STitle>{el.title}</STitle>
                  <Text>{el.text}.</Text>
                  </Hold>
                 </Holder>
              ))
            }
</Right>
        </Main>
        </Blackdrop>
      </Container>
    </div>
  );
};

export default Community;

const Blackdrop = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
 background-color: rgb(69,98,101, 0.7);
z-index: 1;
/* background-color: rgba(31, 30, 30, 0.1); */
`

const Holder = styled.div`
display: flex;
margin-top: 30px;
`

const Text = styled.div`
margin-top: 15px;
font-size: 18px;
width: 500px;
`

const Hold = styled.div``

const Icon = styled.div`
height: 60px;
width: 60px;
margin-right: 20px;
display: flex;
color: white;
font-size: 35px;
font-weight: 400;
border: 1px solid white;
align-items: center;
justify-content: center;
border-radius: 50px;
`

const STitle = styled.div`
font-size: 15px;
font-weight: 700;
`
const SubTitle = styled.div`
font-size: 18px;
word-spacing: 1px;
width: 50%;
margin: 10px 0;
`

const Title = styled.div`
font-size: 60px;
width: 60%;
line-height: 1.15;
font-style: italic;
`

const Right = styled.div`
  height: 100%;
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

const Left = styled.div`
color: white;
  width: 50%;
  height: 100%;
`;

const Main = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;
const Img = styled.img`
width: 100%;
position: absolute;
object-fit: cover;
`

const Container = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* background-color: #456265; */
`;  