import React, { useEffect, useState } from "react";
import "./WaveCarousel.css";
import Carousel from "react-multi-carousel";
import JewlsByAsLogo from "../../assets/work/JewlsByAs/AS-Logo-Logo-white.png";
import SukoonLogo from "../../assets/work/Sukoon/LogoWhite.png";
import TbhLogo from "../../assets/work/TbhStore/Logo.png";
import MelangeLogo from "../../assets/work/Melange/MelangeLogo.jpg";
import useScreenSize from "../../Hooks/getScreenSize";
import useInView from "../../Hooks/useInView";
import { isMobileDevice } from "../WorldIAmSurroundedWith";
import AshvaaLogo from "../../assets/Logos/ashvaa-logo.png";
import AWA from "../../assets/Logos/AWA.png";
import GotamaLogo from "../../assets/Logos/GOTAMA-LOGO_WHITE.png";
import JTCLogo from "../../assets/Logos/JTCLogo.png";
import PapillonLogo from "../../assets/Logos/Papillon.png";
import StudioHeatLogo from "../../assets/Logos/StudioHeat.png";
import WeddingLogo from "../../assets/Logos/TheGreatIndianWeddingPhotographer.png";
import VNAND from "../../assets/Logos/VNAND.png";

const slides = [
  { image: SukoonLogo, text: "Sukoon", link: "/my-work/sukoon" },
  { image: JewlsByAsLogo, text: "Jewels by AS", link: "/my-work/jewls-by-as" },
  { image: MelangeLogo, text: "Melange", link: "/my-work/melange" },
  { image: TbhLogo, text: "TBH Store", link: "/my-work/tbh-store" },
  { image: AshvaaLogo, text: "Ashvaa", link: "/my-work/tbh-store" },
  { image: AWA, text: "American Wellness Authority", link: "/my-work/tbh-store" },
  { image: GotamaLogo, text: "Gotama", link: "/my-work/tbh-store" },
  {
    image: JTCLogo,
    text: "Jaipur Trekkers Community",
    link: "/my-work/tbh-store",
  },
  { image: PapillonLogo, text: "Papillon", link: "/my-work/tbh-store" },
  { image: StudioHeatLogo, text: "Studio Heat", link: "/my-work/tbh-store" },
  {
    image: WeddingLogo,
    text: "The Great Indian Wedding Photographer",
    link: "/my-work/tbh-store",
  },
  { image: VNAND, text: "VNAND", link: "/my-work/tbh-store" },
];

const WaveCarousel = () => {
  const isMobile = isMobileDevice();
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
                color: "white",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              All good things come in waves!
            </h2>
          </div>
          <div
            className={
              isMobile
                ? "container wave-line wave-line-mobile"
                : "container wave-line"
            }
          >
            <div className="row">
              <div className="col-12">
                <div className="skill-bx wow zoomIn animated-container wave-carousel-wrapper">
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    transitionDuration={1000}
                    className="owl-carousel owl-theme skill-slider slide-container"
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={index % 2 === 0 ? "slide" : "slide-down"}
                        // onClick={() => handleSlideClick(slide.link)}
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
            {/* <div
              style={{
                height: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Finger Paint",
                fontSize: "1.65rem",
                fontWeight: "700",
                color: "#25537b",
                textAlign: "center",
              }}
            >
              All good things come in waves!
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default WaveCarousel;
