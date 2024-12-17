import React from "react";
import img1 from "./Media/BottomLeft1.jpg";
import img2 from "./Media/BottomLeft2.png";
import img3 from "./Media/BottomLeft3.png";
import styles from "./SocialMediaMiddleRow.module.css"

const SocialMediaLastRow = () => {
  return (
    <div>
      <div className={styles.SocialMediaMiddleRowLeftBottom}>
        {[img1, img2, img3].map((item) => {
          return (
            <div>
              <img src={item}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaLastRow;
