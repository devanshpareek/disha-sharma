import React, { useEffect, useState } from "react";
import "./WaveCarousel.css";
import Carousel from "react-multi-carousel";
import img from "../../assets/img/project-img1.png";
import JewlsByAsLogo from "../../assets/work/JewlsByAs/JBASLogo.png";
import SukoonLogo from "../../assets/work/Sukoon/Logo.png";
import TbhLogo from "../../assets/work/TbhStore/Logo.png";
import MelangeLogo from "../../assets/work/Melange/MelangeLogo.jpg";
import socialMediaImg from "../../assets/img/social-media-img.jpg";
import { Wordcloud } from "../WordCloud";
import useScreenSize from "../../Hooks/getScreenSize";
import useInView from "../../Hooks/useInView";

const slides = [
  { image: SukoonLogo, text: "Sukoon", link: "/my-work/sukoon" },
  { image: JewlsByAsLogo, text: "Jewls by AS", link: "/my-work/jewls-by-as" },
  { image: MelangeLogo, text: "Melange", link: "/my-work/melange" },
  { image: TbhLogo, text: "TBH Store", link: "/my-work/tbh-store" },
];

const WaveCarousel = () => {
  const [setRef, isInView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleSlideClick = (link) => {
    window.location.href = link;
  };
  const { screenHeight, screenWidth } = useScreenSize();
  const [onceInView, setOnceInView] = useState(false);
  useEffect(() => {
    if (onceInView === false) {
      if (isInView) {
        setOnceInView(true);
      }
    }
  });

  console.log(isInView);
  return (
    <section ref={setRef} className="skill smooth-scroll-section" id="my-work">
      {(isInView || onceInView) && (
        <div>
          <div
            className="animated-container"
            style={{
              padding: "1rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "Quicksand",
                color: "#25537b",
                fontWeight: "700",
              }}
            >
              A peek at my work
            </h2>
          </div>
          <div className="container wave-line">
            <div className="row">
              <div className="col-12">
                {/* <div className="wave-line"></div> */}

                <div className="skill-bx wow zoomIn animated-container wave-carousel-wrapper">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider slide-container"
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={index % 2 === 0 ? "slide" : "slide-down"}
                        onClick={() => handleSlideClick(slide.link)}
                      >
                        <img
                          src={slide.image}
                          alt={slide.text}
                          className="slide-image"
                        />
                        <div className="slide-text">{slide.text}</div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                fontFamily: "Goudy Old Style",
                fontSize: "1.65rem",
                fontWeight: "700",
                color: "#25537b",
              }}
            >
              All good things come in waves!
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WaveCarousel;
