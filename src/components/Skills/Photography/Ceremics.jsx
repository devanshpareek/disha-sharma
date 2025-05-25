import React from "react";
import CoverImg from "../../../assets/work/Sukoon/Img1.jpg";
import LeftImg1 from "../../../assets/work/Sukoon/Img2.jpg";
import RightImg1 from "../../../assets/work/Sukoon/Img22.jpg";
import RightImg2 from "../../../assets/work/Sukoon/Img33.jpg";
import { photographyList } from "../Photography";
import { useNavigate } from "react-router-dom";
import { isMobileDevice } from "../../WorldIAmSurroundedWith";

const Ceremics = () => {
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
          isMobile
            ? "sukoon-work-page-wrapper--mobile"
            : "sukoon-work-page-wrapper"
        }
      >
        <div
          style={{
            ...(!isMobile && { marginTop: "-1.5rem" }),
            ...(isMobile && { marginTop: "1.5rem" }),
            marginBottom: "1.5rem",
          }}
          className={
            isMobile
              ? "photography-list--mobile photography-list"
              : "photography-list"
          }
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
                    : "photography-list-iteem"
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
      </div>
    </div>
  );
};

export default Ceremics;
