import React from "react";
import "./ReelsContainer.css"; // External CSS for styling


const ReelsContainer = ({reels}) => {

  return (
    <div className="reels-container">
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
