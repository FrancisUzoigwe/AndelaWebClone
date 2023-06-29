import React from "react";
import styled from "styled-components";


interface iProps1{
    name1?: string;
    state?: string;
    text?: string;
    bg?: string;
    img?: string;
}

const Props1: React.FC<iProps1> = ({name1, state, text, bg, img}) => {
  return (
    <div>
      <Container bg={`${bg}`}>
<Main>
<Title>
          <Image>
            <Img src={img}/>
          </Image>
        <TextHolder>
        <Name>{name1}</Name>
          <State>{state}</State>
        </TextHolder>
        </Title>
        <Text>
         {text}
        </Text>
</Main>
      </Container>
    </div>
  );
};

export default Props1;

const Img = styled.img`
object-fit: cover;
`;
const TextHolder = styled.div``
const Image = styled.div`
display: flex;
width: 45px;
height: 45px;
border-radius: 50%;
background-color: white;
margin-right: 10px;
object-fit: cover;

`;
const State = styled.div`
font-size: 12px;
`;
const Name = styled.div`
font-weight: 700;
`;
const Text = styled.div`
font-size: 18px;
font-weight: lighter;
`;
const Title = styled.div`
width: 100%;
margin-bottom: 20px;
margin-top: 15px;
display: flex;
`;
const Main = styled.div`
width: 85%;
height: 90%;
display: flex;
flex-direction: column;
color: #273238;
/* background-color: red; */
`;
const Container = styled.div<{bg:string}>`
width: 280px;
height: 280px;
background-color: ${({bg})=>bg};
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: 10px 20px;
`;
