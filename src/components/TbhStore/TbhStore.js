import React from "react";
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
import LastPhotograph from "../../assets/work/TbhStore/Img9.png";
import WordCloud from "../../assets/work/Sukoon/word-cloud.png";

const TbhStore = () => {
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Purple", hex: "#800080" },
  ];
  return (
    <div className="tbh-work-page-wrapper">
      <div className="brand-description">
        <div className="brand-logo">
          <img src={Logo}></img>
        </div>
        <div className="line"></div>
        <div className="brand-text">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </div>
      </div>
      {/* <div className="color-pallet-container">
        <div className="image-container">
          <img src={WordCloud} alt="Your Image" />
        </div>
      </div> */}

      <div className="photography">
        <div className="cover-photo">
          <img src={CoverImg}></img>
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
            <img src={RightImg21} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={RightImg22} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="cover-photo">
          <img src={LastPhotograph}></img>
        </div>
      </div>
    </div>
  );
};

export default TbhStore;
