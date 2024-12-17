import React, { useEffect, useState } from "react";
import SocialMediaLeft from "./SocialMediaLeft";
import SocialMediaRight from "./SocialMediaRight";
import "./SocialMedia.css";
import SocialMedia1 from "../../assets/work/JewlsByAs/SocialMedia/Img1.jpg";
import SocialMedia2 from "../../assets/work/JewlsByAs/SocialMedia/Img2.jpg";
import SocialMedia3 from "../../assets/work/JewlsByAs/SocialMedia/Img3.jpg";
import SocialMedia4 from "../../assets/work/JewlsByAs/SocialMedia/Img4.jpg";

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

  return (
    <div className="social-media-skills-wrapper">
      <div
        style={{
          paddingTop: navHeight,
        }}
        className="social-media-skills"
      >
        <SocialMediaLeft />
        <SocialMediaRight />
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

export default SocialMedia;
