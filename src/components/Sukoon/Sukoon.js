import React from "react";
import "./Sukoon.css";
import Logo from "../../assets/work/Sukoon/Logo.png";
import CoverImg from "../../assets/work/Sukoon/Img1.jpg";
import LeftImg1 from "../../assets/work/Sukoon/Img2.jpg";
import RightImg1 from "../../assets/work/Sukoon/Img22.jpg";
import RightImg2 from "../../assets/work/Sukoon/Img33.jpg";
import LastPhotograph from "../../assets/work/Sukoon/Img1.jpg";
import WordCloud from "../../assets/work/Sukoon/word-cloud.png";
import ReelsContainer from "../ReelsContainer/ReelsContainer";
import Video1 from "./reel1.mp4";
import Video2 from "./reel2.mp4";
import Video3 from "./reel3.mp4";
import Video4 from "./reel4.mp4";
import Video5 from "./reel5.mp4";
import Carousel from "./Carousel/Carousel";
import vitaminCCarouselImg1 from "./Vitamin-C-Carousel/img1.png";
import vitaminCCarouselImg2 from "./Vitamin-C-Carousel/img2.png";
import vitaminCCarouselImg3 from "./Vitamin-C-Carousel/img3.png";
import vitaminCCarouselImg4 from "./Vitamin-C-Carousel/img4.png";

const Sukoon = () => {
  const reels = [Video1, Video2, Video5, Video3, Video4];

  const vitaminCCarouselImages = [
    vitaminCCarouselImg1,
    vitaminCCarouselImg2,
    vitaminCCarouselImg3,
    vitaminCCarouselImg4,
  ];

  return (
    <div className="sukoon-work-page-wrapper">
      <div className="photography">
        <div className="cover-photo">
          <img src={CoverImg}></img>
        </div>
        <div className="sukoon-image-container">
          <div className="image-left">
            <img src={LeftImg1} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={RightImg1} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="cover-photo">
          <img src={RightImg2}></img>
        </div>
      </div>
      <ReelsContainer reels={reels} />

      <Carousel images={vitaminCCarouselImages} />
    </div>
  );
};

export default Sukoon;
