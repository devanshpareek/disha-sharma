import React from "react";
import CoverImg from "../../../assets/work/TbhStore/Img1.png";
import LeftImg from "../../../assets/work/TbhStore/Img2.jpg";
import RightImg2 from "../../../assets/work/TbhStore/Img4.jpg";
import LeftImg21 from "../../../assets/work/TbhStore/Img5.png";
import LeftImg22 from "../../../assets/work/TbhStore/Img6.png";
import RightImg21 from "../../../assets/work/TbhStore/Img7.png";
import RightImg22 from "../../../assets/work/TbhStore/Img8.png";
import LastPhotograph from "../../../assets/work/TbhStore/Img9.png";
import { photographyList } from "../Photography";
import { useNavigate } from "react-router-dom";
import { isMobileDevice } from "../../WorldIAmSurroundedWith";

const Candles = () => {
  const navigate = useNavigate();
  const isMobile = isMobileDevice();
  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <div
        className={
          isMobile ? "tbh-work-page-wrapper-mobile" : "tbh-work-page-wrapper"
        }
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
    </div>
  );
};

export default Candles;
