import React from "react";
import styled from "styled-components";

const data: any = [
  {
    courses: "Python",
  },
  {
    courses: "Node.js",
  },
  {
    courses: "Kotlin",
  },
  {
    courses: "Flask",
  },
  {
    courses: "React Native",
  },
  {
    courses: "Vue.js",
  },
  {
    courses: "PHP",
  },
  {
    courses: "Andriod",
  },
  {
    courses: "JavaScript",
  },
  {
    courses: "Ruby",
  },
  {
    courses: "C#",
  },
  {
    courses: "DevOps",
  },
  {
    courses: "Golang",
  },
  {
    courses: "Data Scientists",
  },
  {
    courses: "React.js",
  },
  {
    courses: "Swift",
  },
  {
    courses: "Salesforce",
  },
  {
    courses: "Java",
  },
  {
    courses: "Django",
  },
];

const Component9 = () => {
  return (
    <div>
      <Container>
        <Main>
          <TextHolder>
            <SmallText>Scale faster with Andela</SmallText>
            <BigText>What skills will drive your vision?</BigText>
          </TextHolder>
          <Div>
            {data.map((el: any) => (
              <Language>{el.courses}</Language>
            ))}
          </Div>
        </Main>
      </Container>
    </div>
  );
};

export default Component9;

const Language = styled.div`
  width: 280px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 20px;
  color: #7b8285;
`;
const Div = styled.div`
  height: 500px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
`;
const BigText = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;
const SmallText = styled.div`
  margin-top: 20px;
`;
const TextHolder = styled.div`
  text-align: center;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edeff1;
`;
