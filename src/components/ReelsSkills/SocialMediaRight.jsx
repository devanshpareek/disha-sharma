import React from "react";
import SocialMediaRightFirstRow from "./SocialMediaRightFirstRow";
import SocialMediaMiddleRow from "./SocialMediaMiddleRow";
import SocialMediaLastRow from "./SocialMediaLastRow";

const SocialMediaRight = () => {
  return (
    <div className="social-media-right">
      <SocialMediaRightFirstRow />
      <SocialMediaMiddleRow />
      <SocialMediaLastRow />
    </div>
  );
};

export default SocialMediaRight;
