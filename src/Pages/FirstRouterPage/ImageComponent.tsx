import React from "react";
import styled from "styled-components";
import ImageProps from "../../Components/reUse/ImageProps";
import img from "../../Assets/shutterstock_1660490494-2048x1365.jpg";
import img2 from "../../Assets/tick-green.svg";
import img3 from "../../Assets/woman.jpg"
import img4 from "../../Assets/man.jpg"

const ImageComponent = () => {
  return (
    <div>
      <Container>
        <Main>
<ImageProps img2={img2} img={img} text="Network with other technologists to develop your expertise" title="Grow your career with us" text1="Find meaningful, long-term work with interesting organizations" text2="Work with an internationally distributed team and company" text3="Gain additional skills through exclusive learning opportunities" rr=""/>
<ImageProps img2={img2} img={img3} text="Only work with companies we trust" title="Set your own rate" text1="Receive payments on time in your local currency, USD, or in Crypto" text2="Discover salaries that match your skills and experience"  rr="er"/>
<ImageProps img2={img2} img={img4} text="Ditch the commute and work from anywhere" title="Work anytime, anywhere" text1="Ditch the commute and work from anywhere" text2="With roles across different time zones, you choose when you work" rr=""/>
        </Main>
      </Container>
    </div>
  );
};

export default ImageComponent;

const Main = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
