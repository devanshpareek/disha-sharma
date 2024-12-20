import React, { useEffect, useState } from "react";
import "./TbhStore.css";
import Logo from "../../assets/work/TbhStore/Logo.png";
import CoverImg from "../../assets/work/TbhStore/Img1.png";
import LeftImg from "../../assets/work/TbhStore/Img2.jpg";
import RightImg1 from "../../assets/work/TbhStore/Img3.jpg";
import RightImg2 from "../../assets/work/TbhStore/Img4.jpg";
import LeftImg21 from "../../assets/work/TbhStore/Img5.png";
import LeftImg22 from "../../assets/work/TbhStore/Img6.png";
import RightImg21 from "../../assets/work/TbhStore/Img7.png";
import RightImg22 from "../../assets/work/TbhStore/Img8.png";
import LeftImg31 from "../../assets/work/TbhStore/Img10.jpg";
import RightImg31 from "../../assets/work/TbhStore/Img11.jpg";
import RightImg41 from "../../assets/work/TbhStore/Img12.jpg";
import LeftImg41 from "../../assets/work/TbhStore/Img13.jpg";
import LastPhotograph from "../../assets/work/TbhStore/Img9.png";
import WordCloud from "../../assets/work/Sukoon/word-cloud.png";
import { isMobileDevice } from "../WorldIAmSurroundedWith";

const TbhStore = () => {
  const isMobile = isMobileDevice();
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Purple", hex: "#800080" },
  ];

  const [navHeight, setNavHeight] = useState(
    document.getElementById("project-navbar")?.getBoundingClientRect().height +
      25
  );
  useEffect(() => {
    setNavHeight(
      document.getElementById("project-navbar")?.getBoundingClientRect()
        .height + 25
    );
  }, [document.getElementById("project-navbar")]);
  return (
    <div
      className={
        isMobile ? "tbh-work-page-wrapper-mobile" : "tbh-work-page-wrapper"
      }
      style={{
        paddingTop: navHeight,
      }}
    >
      <div className="photography">
        <div className="cover-photo">
          <img src={LastPhotograph}></img>
        </div>
        <div className="tbh-image-container">
          <div className="image-left">
            <img src={LeftImg} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={RightImg2} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="tbh-image-container">
          <div className="image-left">
            <img src={LeftImg21} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={LeftImg22} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="tbh-image-container">
          <div className="image-left">
            <img src={LeftImg31} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={RightImg31} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="tbh-image-container">
          <div className="image-left">
            <img src={LeftImg41} alt="Left Image" className="image" />
          </div>
          <div className="image-right image-right--cover">
            <img src={RightImg41} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="tbh-image-container">
          <div className="image-left">
            <img src={RightImg21} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={RightImg22} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="cover-photo">
          <img src={CoverImg}></img>
        </div>
      </div>
    </div>
  );
};

export default TbhStore;
