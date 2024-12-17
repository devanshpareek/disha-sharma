import React from "react";
import PhoneWithVideo from "./PhoneWithVideo/PhoneWithVideo";
import reel1 from "./Media/2-1.mp4";
import reel2 from "./Media/2-1.mp4";

const SocialMediaLeft = () => {
  return (
    <div className="social-media-left">
      <div>
        <video
          autoPlay
          loop
          muted
          width="220"
          height="570"
          controls
          controlsList="nodownload nofullscreen"
        >
          <source src={reel2} type="video/mp4"></source>
        </video>
      </div>
      <div>
        <h1>Some Text</h1>
      </div>
      <div>
        <video
          autoPlay
          loop
          muted
          width="220"
          height="570"
          controls
          controlsList="nodownload nofullscreen"
        >
          <source src={reel1} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default SocialMediaLeft;
