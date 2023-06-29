import React from "react";
import HeroPage from "./FirstRouterPage/HeroPage";
import SliderPart from "./FirstRouterPage/SliderPart";
import VideoComponent from "./FirstRouterPage/VideoComponent";
import ImageComponent from "./FirstRouterPage/ImageComponent";
import Component9 from "./HomePage/Component9";
import WriteUp from "./FirstRouterPage/WriteUp";
import Community from "./FirstRouterPage/Community";
import ImageBlur from "./FirstRouterPage/ImageBlur";

const Technology = () => {
  return (
    <div>
      <HeroPage />
      <SliderPart/>
      <VideoComponent/>
      <WriteUp/>
      <ImageComponent/>
      <Community/>
      <Component9/>
      <ImageBlur/>

    </div>
  );
};

export default Technology;


