import React from "react";
import CoverImg from "../../../assets/work/Melange/Cover.jpg";
import LastPhotograph from "../../../assets/work/Melange/Wrapper.jpg";
import July from "../../../assets/work/Melange/Months/July.png";
import August from "../../../assets/work/Melange/Months/August.png";
import September from "../../../assets/work/Melange/Months/September.jpg";
import Carousel from "../../Sukoon/Carousel/Carousel";
import { photographyList } from "../Photography";
import { useNavigate } from "react-router-dom";

const InteriorDesign = () => {
  const months = [July, August, September];
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <div className="melange-work-page-wrapper">
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
      </div>
    </div>
  );
};

export default InteriorDesign;
