import React from "react";
import styles from "./SocialMediaMiddleRow.module.css";
import img1 from "./Media/SocialMediaRightRow1-1.jpg";
import img2 from "./Media/SocialMediaRightRow1-2.jpg";
import img3 from "./Media/SocialMediaRightRow1-3.jpg";
import reel from "./Media/2-2.mp4";
import PhoneWithVideo from "./PhoneWithVideo/PhoneWithVideo";

const SocialMediaMiddleRow = () => {
  const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

  return (
    <div className={styles.SocialMediaMiddleRow}>
      <div className={styles.SocialMediaMiddleRowLeft}>
        <div className={styles.SocialMediaMiddleRowReel}>
          <video
            autoPlay
            loop
            muted
            width="220"
            height="320"
            controls
            controlsList="nodownload nofullscreen"
          >
            <source src={reel} type="video/mp4"></source>
          </video>
        </div>

      </div>
      <div className={styles.SocialMediaMiddleRowgridContainer}>
        {images.map((image, index) => (
          <div className={styles.SocialMediaMiddleRowgridItem}>
            {index == 4 ? (
              <PhoneWithVideo images={images} />
            ) : (
              <img
                src={image}
                alt={"alt"}
                className={styles.SocialMediaMiddleRowgridImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaMiddleRow;
