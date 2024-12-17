import React, { useEffect, useState } from "react";
import styles from "./PhoneWithVideo.module.css";

const PhoneWithVideo = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShifting, setIsShifting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShifting(true); // Start sliding animation
      setTimeout(() => {
        setIsShifting(false); // Reset sliding state
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // Wait for slide animation to complete
    }, 2500); // 2s display + 0.5s animation

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <img
          className={`${styles.image} ${ styles.shift}`}
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
        />
      </div>
    </div>
  );
};

export default PhoneWithVideo;
