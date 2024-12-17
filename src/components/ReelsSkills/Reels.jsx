import React from "react";
import PhoneWithVideo from "./PhoneWithVideo/PhoneWithVideo";

const Reels = () => {
  return (
    <div
      className="skills skills-photography"
      style={{
        paddingTop: document
          .getElementById("project-navbar")
          ?.getBoundingClientRect().height,
      }}
    >
      <PhoneWithVideo />
    </div>
  );
};

export default Reels;
