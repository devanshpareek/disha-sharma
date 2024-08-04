import aboutMe1 from "../assets/img/about-me-1.png";
import aboutMe2 from "../assets/img/about-me-2.png";
import aboutMe3 from "../assets/img/about-me-3.png";
import aboutMe4 from "../assets/img/about-me-4.png";
import aboutMe0 from "../assets/img/aboutMe0.png";

import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "./Carousel/Carousel";
import { MoonCloud } from "./MoodCloud";
import useInView from "../Hooks/useInView";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [setRef, isInView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [onceInView, setOnceInView] = useState(false);
  useEffect(() => {
    if (onceInView === false) {
      if (isInView) {
        setOnceInView(true);
      }
    }
  });

  console.log(isInView);

  const slides = [
    aboutMe0,
    aboutMe1,
    aboutMe2,
    aboutMe3,
    aboutMe4,
    // aboutMe0,
    // aboutMe1,
    // aboutMe2,
    // aboutMe3,
    // aboutMe4,
    // aboutMe0,
    // aboutMe1,
    // aboutMe2,
    // aboutMe3,
    // aboutMe4,
    // aboutMe0,
    // aboutMe1,
    // aboutMe2,
    // aboutMe3,
    // aboutMe4,
    // aboutMe0,
    // aboutMe1,
    // aboutMe2,
    // aboutMe3,
    // aboutMe4,
  ];

  return (
    <section ref={setRef} className="skill smooth-scroll-section" id="skills">
      {(isInView || onceInView) && (
        <div className="animated-container about-me-wrapper">
          
          <div>
            <MoonCloud />
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
