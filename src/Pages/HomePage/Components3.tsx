import React from "react";
import styled from "styled-components";
import img from "../../Assets/Visual-2.png";
import GlobalButton from "../../Components/reUse/GlobalButton";
import img2 from "../../Assets/tick-green.svg";

const data: any = [
  {
    img2,
    text: "Long-term placements",
  },
  {
    img2,
    text: "Trusted career partner",
  },
  {
    img2,
    text: "Career Guidance",
  },
  {
    img2,
    text: "96% match success",
  },
];

const Component3 = () => {
  return (
    <div>
      <Container>
        <Main>
          <Right>
            <Title>Empower your future</Title>
            <BigText>Why the world’s best talent prefers Andela</BigText>
            <SmallText>
              {data.map((el:any) => (
                <Div>
                  <Image src={el.img2} />
                  <Text>{el.text}</Text>
                </Div>
              ))}
            </SmallText>
            <GlobalButton
              width="230px"
              height="60px"
              brad="50px"
              bg="#56c870"
              title="Find Tech Experts"
            />
          </Right>
          <Img src={img} />
        </Main>
      </Container>
    </div>
  );
};

export default Component3;

const Image = styled.img`
  margin-right: 10px;
`;
const Text = styled.div`
  margin: 5px 0;
  color: #5f5982;
`;
const Div = styled.div`
  display: flex;
`;
const SmallText = styled.div`
  font-size: 18px;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;
const BigText = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  line-height: 1.08;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 63%;
  height: 100%;
  object-fit: cover;
`;
const Right = styled.div`
  width: 40%;
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
  height: 500px;
  width: 100%;
  /* background-color: bisque; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
