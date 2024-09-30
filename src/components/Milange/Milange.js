import React from "react";
import "./Milange.css";
import CoverImg from "../../assets/work/Melange/Cover.jpg";
import LastPhotograph from "../../assets/work/Melange/Wrapper.jpg";

import Carousel1Img1 from "../../assets/work/Melange/Carousel1/1.jpg";
import Carousel1Img2 from "../../assets/work/Melange/Carousel1/2.jpg";
import Carousel1Img3 from "../../assets/work/Melange/Carousel1/3.jpg";
import Carousel1Img4 from "../../assets/work/Melange/Carousel1/4.jpg";

import Carousel2Img1 from "../../assets/work/Melange/Carousel2/1.jpg";
import Carousel2Img2 from "../../assets/work/Melange/Carousel2/2.jpg";
import Carousel2Img3 from "../../assets/work/Melange/Carousel2/3.jpg";

import July from "../../assets/work/Melange/Months/July.png";
import August from "../../assets/work/Melange/Months/August.png";
import September from "../../assets/work/Melange/Months/September.jpg";

import Reel1 from "../../assets/work/Melange/MelangeReels/MilangeReel1.mp4";
import Reel2 from "../../assets/work/Melange/MelangeReels/MilangeReel2.mp4";
import Reel3 from "../../assets/work/Melange/MelangeReels/MilangeReel3.mp4";
import Reel4 from "../../assets/work/Melange/MelangeReels/MilangeReel4.mp4";

import Carousel from "../Sukoon/Carousel/Carousel";
import ReelsContainer from "../ReelsContainer/ReelsContainer";
const Melange = () => {
  const carousel1 = [
    Carousel1Img1,
    Carousel1Img2,
    Carousel1Img3,
    Carousel1Img4,
  ];
  const carousel2 = [Carousel2Img1, Carousel2Img2, Carousel2Img3];
  const months = [July, August, September];
  const reels = [Reel1,Reel2,Reel3,Reel4];

  return (
    <div className="melange-work-page-wrapper">
      <Carousel images={months} />

      <div className="photography">
        <div className="cover-photo-container">
          <div className="cover-photo">
            <img src={CoverImg}></img>
          </div>
          <div className="cover-photo">
            <img src={LastPhotograph}></img>
          </div>
        </div>
      </div>

      <Carousel images={carousel1} />

      <Carousel images={carousel2} />
      
      <ReelsContainer reels={reels} />

    </div>
  );
};

export default Melange;
