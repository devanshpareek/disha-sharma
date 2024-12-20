import React from "react";
import JewlsByASWordCloud from "../../assets/work/JewlsByAs/word-cloud.png";
import SukoonWordCloud from "../../assets/work/Sukoon/word-cloud.png";
import MelangeWordCloud from "../../assets/work/Melange/word-cloud.png";
import "./WordCloudContainer.css"; // External CSS for styling
import { isMobileDevice } from "../WorldIAmSurroundedWith";

const WordCloudContainer = ({ brandName }) => {
  const wordCloudImage =
    brandName === "JewlsByAs"
      ? JewlsByASWordCloud
      : brandName === "Melange"
      ? MelangeWordCloud
      : SukoonWordCloud;

  const colors =
    brandName === "JewlsByAs"
      ? [
          { name: "Red", hex: "#E4D4C8" },
          { name: "Green", hex: "#F7EAD0" },
          { name: "Blue", hex: "#F9C76E" },
          { name: "Yellow", hex: "#A47551" },
          { name: "Purple", hex: "#602304" },
        ]
      : brandName === "Melange"
      ? [
          { name: "Red", hex: "#FFFAF1" },
          { name: "Green", hex: "#CABC9F" },
          { name: "Blue", hex: "#A59166" },
          { name: "Yellow", hex: "#644737" },
          { name: "Purple", hex: "#393232" },
        ]
      : [
          { name: "Red", hex: "#114053" },
          { name: "Green", hex: "#c8846f" },
          { name: "Blue", hex: "#fdf8ed" },
          { name: "Yellow", hex: "#babc7e" },
          { name: "Purple", hex: "#41584a" },
        ];

  const isMobile = isMobileDevice();

  return (
    <div
      className={
        isMobile ? "color-pallet-container-mobile" : "color-pallet-container"
      }
    >
      <div className="image-container">
        <img src={wordCloudImage} alt={`${brandName} Word Cloud`} />
      </div>

      <div className="color-pallet">
        {colors.map((color, index) => (
          <div className="color-item" key={index}>
            <div
              className="color-rectangle"
              style={{ backgroundColor: color.hex }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordCloudContainer;
