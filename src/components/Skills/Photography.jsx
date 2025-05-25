import React, { useEffect, useState } from "react";
import MisalignedGrid from "./MisalignedGrid";
import JewleryImg from "../../assets/work/JewlsByAs/img1.jpg";
import CeremicsImg from "../../assets/work/Sukoon/Img2.jpg";
import CandleImg from "../../assets/work/TbhStore/Img2.jpg";
import LifeStyleImg from "../../assets/work/Sukoon/Lifestyle/SecondGroup1.jpg";
import "./skills.css";
import { useNavigate } from "react-router-dom";
import { isMobileDevice } from "../WorldIAmSurroundedWith";

const images1 = [
  {
    image: JewleryImg,
    title: "Jewellery Photoshoot",
    link: "jewllery",
  },
  {
    image: CeremicsImg,
    title: "Ceremics Photoshoot",
    link: "ceremics",
  },
];

const images2 = [
  {
    image: CandleImg,
    title: "Candle Photoshoot",
    link: "candles",
  },
  {
    image: LifeStyleImg,
    title: "Life Style",
    link: "lifestyle",
  },
];

export const photographyList = [
  { title: "Jewellery ", link: "jewllery" },
  {
    title: "Ceremics",
    link: "ceremics",
  },
  {
    title: "Candle",
    link: "candles",
  },
  {
    title: "Life Style",
    link: "lifestyle",
  },
];

const otherSkills = [
  { title: "Social Media ", link: "photography" },
  {
    title: "Reels",
    link: "photography",
  },
  {
    title: "Content Writing",
    link: "photography",
  },
  {
    title: "Skill4",
    link: "photography",
  },
  {
    title: "Skill5",
    link: "photography",
  },
];
const Photography = () => {
  const isMobile = isMobileDevice();
  const navigate = useNavigate();
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
      className="skills skills-photography"
      style={{
        paddingTop: navHeight,
      }}
    >
      {/* <div className="photography-list">
        {otherSkills.map((item, index) => {
          return (
            <div
              className={
                index < otherSkills.length - 1 ? "photography-list-item" : "photography-list-iteem"
              }
              onClick={() => {
                navigate(`/skills/photography`);
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div> */}

      {/* <div className="photography-list">
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
      </div> */}
      <MisalignedGrid index={1} items={images1} />
      <MisalignedGrid index={2} items={images2} />
    </div>
  );
};

export default Photography;
