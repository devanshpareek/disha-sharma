import React from "react";
import CoverImg from "../../../assets/work/Sukoon/Lifestyle/CoverImg1.jpg";
import FirstGroup1 from "../../../assets/work/Sukoon/Lifestyle/FirstGroup1.jpg";
import FirstGroup2 from "../../../assets/work/Sukoon/Lifestyle/FirstGroup2.jpg";
import FirstGroup3 from "../../../assets/work/Sukoon/Lifestyle/FirstGroup3.jpg";
import SecondGroup1 from "../../../assets/work/Sukoon/Lifestyle/SecondGroup1.jpg";
import SecondGroup2 from "../../../assets/work/Sukoon/Lifestyle/SecondGroup2.jpg";
import SecondGroup3 from "../../../assets/work/Sukoon/Lifestyle/SecondGroup3.jpg";
import LastImg from "../../../assets/work/Sukoon/Lifestyle/LastImage.jpg";
import { photographyList } from "../Photography";
import { useNavigate } from "react-router-dom";

const Lifestyle = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <div className="work-page-wrapper">
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
              <img src={FirstGroup1} alt="Left Image" className="image" />
            </div>
            <div className="image-right">
              <img
                src={FirstGroup2}
                alt="Top Right Image"
                className="image half-image"
              />
              <img
                src={FirstGroup3}
                alt="Bottom Right Image"
                className="image half-image"
              />
            </div>
          </div>
        </div>
        <div className="photography">
          <div className="jewls-by-as-image-container">
            <div className="image-left">
              <img src={SecondGroup1} alt="Left Image" className="image" />
            </div>
            <div className="image-right">
              <img
                src={SecondGroup2}
                alt="Top Right Image"
                className="image half-image"
              />
              <img
                src={SecondGroup3}
                alt="Bottom Right Image"
                className="image half-image"
              />
            </div>
          </div>
          <div className="cover-photo">
            <img
              style={{
                // transform: "rotate(90deg)",
              }}
              src={LastImg}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
