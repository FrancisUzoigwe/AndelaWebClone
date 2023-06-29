import React from "react";
import styled from "styled-components";

interface iImage {
  img?: any;
  img2?: any;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  title?: string;
  rr?: any;
}

const ImageProps: React.FC<iImage> = ({
  img2,
  img,
  text,
  title,
  text1,
  text2,
  text3,
  rr,
}) => {
  return (
    <div>
      <Container>
        <Main rr={rr}>
          <Img src={img} />
          <Right>
            <TextHolder>
              <Title>{title}</Title>
              <Div>
                <Image src={img2} />
                <Text>{text}</Text>
              </Div>
              <Div>
                <Image src={img2} />
                <Text>{text1}</Text>
              </Div>
              <Div>
                <Image src={img2} />
                <Text>{text2}</Text>
              </Div>
              <Div>
                <Image src={img2} />
                <Text>{text3}</Text>
              </Div>
            </TextHolder>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default ImageProps;

const Image = styled.img`
`;
const Div = styled.div`
  display: flex;
  margin: 15px 0;
`;
const Text = styled.div`
  margin: 0 10px;
  width: 480px;;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;
const TextHolder = styled.div``;
const Right = styled.div`
  width: 580px;
  margin-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
`;
const Main = styled.div<{rr: string}>`
margin-top: 10px;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: ${({rr})=>rr? "row-reverse": "row"};
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
