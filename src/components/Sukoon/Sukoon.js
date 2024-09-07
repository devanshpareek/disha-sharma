import React from "react";
import "./Sukoon.css";
import Logo from "../../assets/work/Sukoon/Logo.png";
import CoverImg from "../../assets/work/Sukoon/Img1.jpg";
import LeftImg1 from "../../assets/work/Sukoon/Img2.jpg";
import RightImg1 from "../../assets/work/Sukoon/Img2.jpg";
import LeftImg2 from "../../assets/work/Sukoon/Img3.jpg";
import RightImg2 from "../../assets/work/Sukoon/Img3.jpg";
import LastPhotograph from "../../assets/work/Sukoon/Img1.jpg";
import WordCloud from "../../assets/work/Sukoon/word-cloud.png";

const Sukoon = () => {
  const colors = [
    { name: "Red", hex: "#114053" },
    { name: "Green", hex: "#c8846f" },
    { name: "Blue", hex: "#fdf8ed" },
    { name: "Yellow", hex: "#babc7e" },
    { name: "Purple", hex: "#41584a" },
  ];
  return (
    <div className="sukoon-work-page-wrapper">
      <div className="brand-description">
        <div className="brand-logo">
          <img src={Logo}></img>
        </div>
        <div className="line"></div>
        <div className="brand-text">
          Sukoon’ is the zenith of serenity- it's a sweet souvenir of self-love
          to remind you of the home within you. It is crafted to make self-care
          a warm and joyous part of your day with the help of bite-sized daily
          rituals to hearten your inner quench of stillness. At Sukoon, we
          believe even the smallest of rituals, and tiniest of intention is
          enough To unwind; To reconnect and To feel complete within.
        </div>
      </div>
      <div className="color-pallet-container">
        <div className="image-container">
          <img src={WordCloud} alt="Your Image" />
        </div>
        
        <div className="color-pallet">
          {colors.map((color, index) => (
            <div className="color-item" key={index}>
              <div
                className="color-rectangle"
                style={{ backgroundColor: color.hex }}
              ></div>
              
            </div>
          ))}
        </div>
      </div>

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

        <div className="sukoon-image-container">
          <div className="image-left">
            <img src={LeftImg2} alt="Left Image" className="image" />
          </div>
          <div className="image-right">
            <img src={RightImg2} alt="Right Image" className="image" />
          </div>
        </div>

        <div className="cover-photo">
          <img src={LastPhotograph}></img>
        </div>
      </div>
    </div>
  );
};

export default Sukoon;
