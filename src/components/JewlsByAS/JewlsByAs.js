import React from "react";
import "./JewlsByAS.css";
import Logo from "../../assets/work/JewlsByAs/JBASLogo.png";
import CoverImg from "../../assets/work/JewlsByAs/img1.jpg";
import LeftImg from "../../assets/work/JewlsByAs/img2.jpg";
import RightImg1 from "../../assets/work/JewlsByAs/img3.jpg";
import RightImg2 from "../../assets/work/JewlsByAs/img4.jpg";
import LastPhotograph from "../../assets/work/JewlsByAs/img5.jpg";
import SocialMedia1 from "../../assets/work/JewlsByAs/SocialMedia/Img1.jpg";
import SocialMedia2 from "../../assets/work/JewlsByAs/SocialMedia/Img2.jpg";
import SocialMedia3 from "../../assets/work/JewlsByAs/SocialMedia/Img3.jpg";
import SocialMedia4 from "../../assets/work/JewlsByAs/SocialMedia/Img4.jpg";
import WordCloud from "../../assets/work/JewlsByAs/word-cloud.png";
import Video1 from "./reel1.mp4";
import Video2 from "./reel2.mp4";
import Video3 from "./reel3.mp4";
import Video4 from "./reel4.mp4";
import ReelsContainer from "../ReelsContainer/ReelsContainer";
import { isMobileDevice } from "../WorldIAmSurroundedWith";

const JewlsByAs = () => {
  const isMobile = isMobileDevice();
  const colors = [
    { name: "Red", hex: "#E4D4C8" },
    { name: "Green", hex: "#F7EAD0" },
    { name: "Blue", hex: "#F9C76E" },
    { name: "Yellow", hex: "#A47551" },
    { name: "Purple", hex: "#602304" },
  ];

  const reels = [Video2, Video1, Video3, Video4];

  return (
    <div
      className={
        isMobile
          ? "work-page-wrapper--mobile"
          : "work-page-wrapper"
      }
    >
      <div className="photography">
        <div className="cover-photo">
          <img src={CoverImg}></img>
        </div>
        <div className="jewls-by-as-image-container">
          <div className="image-left">
            <img src={LeftImg} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img
              src={RightImg1}
              alt="Top Right Image"
              className="image half-image"
            />
            <img
              src={RightImg2}
              alt="Bottom Right Image"
              className="image half-image"
            />
          </div>
        </div>
        <div className="cover-photo">
          <img src={LastPhotograph}></img>
        </div>
      </div>
      <div class="social-media">
        <img src={SocialMedia1} alt="Image 1" class="social-media-image" />
        <img src={SocialMedia2} alt="Image 2" class="social-media-image" />
        <img src={SocialMedia3} alt="Image 3" class="social-media-image" />
        <img src={SocialMedia4} alt="Image 4" class="social-media-image" />
      </div>
      <ReelsContainer reels={reels} />
    </div>
  );
};

export default JewlsByAs;
