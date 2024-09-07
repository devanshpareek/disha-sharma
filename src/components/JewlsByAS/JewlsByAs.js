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

const JewlsByAs = () => {
  const colors = [
    { name: "Red", hex: "#E4D4C8" },
    { name: "Green", hex: "#F7EAD0" },
    { name: "Blue", hex: "#F9C76E" },
    { name: "Yellow", hex: "#A47551" },
    { name: "Purple", hex: "#602304" },
  ];
  return (
    <div className="work-page-wrapper">
      <div className="brand-description">
        <div className="brand-logo">
          <img className="logo" src={Logo}></img>
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
    </div>
  );
};

export default JewlsByAs;
