import React from "react";
import "./ReelsContainer.css"; // External CSS for styling
import { isMobileDevice } from "../WorldIAmSurroundedWith";

const ReelsContainer = ({ reels }) => {
  const isMobile = isMobileDevice();

  return (
    <div className={isMobile ? "reels-container--mobile" : "reels-container"}>
      {reels.map((reel, index) => (
        <div className="reel-block" key={index}>
          <video
            autoPlay
            loop
            muted
            width="320"
            height="400"
            controls
            controlsList="nodownload nofullscreen"
          >
            <source src={reel} type="video/mp4"></source>
          </video>
        </div>
      ))}
    </div>
  );
};

export default ReelsContainer;
