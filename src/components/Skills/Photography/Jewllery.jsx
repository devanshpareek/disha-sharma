import React from "react";
import CoverImg from "../../../assets/work/JewlsByAs/img1.jpg";
import LeftImg from "../../../assets/work/JewlsByAs/img2.jpg";
import RightImg1 from "../../../assets/work/JewlsByAs/img3.jpg";
import RightImg2 from "../../../assets/work/JewlsByAs/img4.jpg";
import LastPhotograph from "../../../assets/work/JewlsByAs/img5.jpg";
import CoverImg2 from "../../../assets/work/JewlsByAs/funkyEarRings.jpg";
import LeftImg2 from "../../../assets/work/JewlsByAs/earrings.png";
import RightImg21 from "../../../assets/work/JewlsByAs/Leaf_earrings.jpg";
import RightImg22 from "../../../assets/work/JewlsByAs/ringForSkills.jpg";
import LastPhotograph2 from "../../../assets/work/JewlsByAs/Golden_studded_hoops_2Edit.png";
import { photographyList } from "../Photography";
import { useNavigate } from "react-router-dom";
import { isMobileDevice } from "../../WorldIAmSurroundedWith";

const Jewllery = () => {
  const navigate = useNavigate();
  const isMobile = isMobileDevice();

  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <div
        className={isMobile ? "work-page-wrapper--mobile" : "work-page-wrapper"}
      >
        <div
          style={{
            marginTop: "-1.5rem",
            marginBottom: "1.5rem",
          }}
          className="photography-list"
        >
          <div
            className={"photography-list-item"}
            onClick={() => {
              navigate(`/skills/photography`);
            }}
          >
            Photography
          </div>
          {photographyList.map((item, index) => {
            return (
              <div
                className={
                  index < photographyList.length - 1
                    ? "photography-list-item"
                    : ""
                }
                onClick={() => {
                  navigate(`/skills/photography/${item.link}`);
                }}
              >
                {item.title}
              </div>
            );
          })}
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
        <div className="photography">
          <div className="cover-photo">
            <img src={CoverImg2}></img>
          </div>
          <div className="jewls-by-as-image-container">
            <div className="image-left">
              <img src={LeftImg2} alt="Left Image" className="image" />
            </div>
            <div className="image-right">
              <img
                src={RightImg21}
                alt="Top Right Image"
                className="image half-image"
              />
              <img
                src={RightImg22}
                alt="Bottom Right Image"
                className="image half-image"
              />
            </div>
          </div>
          <div className="cover-photo">
            <img src={LastPhotograph2}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewllery;
