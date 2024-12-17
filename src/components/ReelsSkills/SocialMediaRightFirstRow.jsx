import React from "react";
import img1 from "./Media/SocialMediaRightRow1-1.jpg";
import img2 from "./Media/SocialMediaRightRow1-2.jpg";
import img3 from "./Media/SocialMediaRightRow1-3.jpg";
import img4 from "./Media/SocialMediaRightRow1-4.jpg";

const SocialMediaRightFirstRow = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="SocialMediaRightFirstRow">
      {images.map((image) => {
        return (
          <div>
            <img src={image}></img>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaRightFirstRow;
