import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import video from "../../Assets/Demo.mp4";
import img from "../../Assets/pexels-prateek-katyal-2740956.jpg"

const VideoComponent = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const onShowVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      <Container>
        <Main>
          <TextHolder>
            <BigText>Our vibrant community</BigText>
            <SmallText>
              Rizwan Jafri shares his Andela story from Lahore, Pakistan.
            </SmallText>
            <VideoClip>
              <Img src={img}/>
              <Icon onClick={onShowVideo} />
            </VideoClip>
          </TextHolder>
        </Main>
        {showVideo ? (
          <Div>
            <BackDrop onClick={onShowVideo}>
              <Icon1 onClick={onShowVideo} />
            </BackDrop>
            <Video src={video} controls autoPlay playsInline />
          </Div>
        ) : null}
      </Container>
    </div>
  );
};

export default VideoComponent;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon1 = styled(AiOutlineClose)`
  font-size: 35px;
  top: 30px;
  right: 50px;
  position: absolute;
  color: black;

  :hover {
    cursor: pointer;
    transition: all 400ms;
    color: red;
    transform: scale(1.07);
  }
`;
const Video = styled.video`
  width: 850px;
  height: 500px;
  position: absolute;
  top: 20px;
  z-index: 1;
`;
const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(AiFillPlayCircle)`
  font-size: 70px;
  color: black;
  /* z-index: 1; */
  position: absolute;

  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: all 40ms;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute; */
`;

const VideoClip = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const SmallText = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;
const BigText = styled.div`
  font-size: 35px;
`;
const TextHolder = styled.div`
  text-align: center;
`;
const Main = styled.div`
  width: 90%;
  height: 96%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #173b3f;
`;
