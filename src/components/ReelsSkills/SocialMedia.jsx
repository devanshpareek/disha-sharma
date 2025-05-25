import React, { useEffect, useState } from "react";
import SocialMediaLeft from "./SocialMediaLeft";
import SocialMediaRight from "./SocialMediaRight";
import "./SocialMedia.css";
import SocialMedia1 from "../../assets/work/JewlsByAs/SocialMedia/Img1.jpg";
import SocialMedia2 from "../../assets/work/JewlsByAs/SocialMedia/Img2.jpg";
import SocialMedia3 from "../../assets/work/JewlsByAs/SocialMedia/Img3.jpg";
import SocialMedia4 from "../../assets/work/JewlsByAs/SocialMedia/Img4.jpg";
import { useNavigate } from "react-router-dom";
import { isMobileDevice } from "../WorldIAmSurroundedWith";

const SocialMedia = () => {
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

  const otherSkills = [
    { title: "Jewls By AS", link: "/jewls-by-as" },
    {
      title: "Sukoon",
      link: "/sukoon",
    },
    {
      title: "Melange",
      link: "/melange",
    },
  ];

  const isMobile = isMobileDevice();

  const navigate = useNavigate();

  return (
    <div
      style={{
        paddingTop: navHeight,
      }}
      className="social-media-skills-wrapper"
    >
      <div className="social-media-skills">
        <SocialMediaRight />
      </div>
    </div>
  );
};

export default SocialMedia;
