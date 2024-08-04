import React, { useEffect, useState } from "react";
import "./WaveCarousel.css";
import Carousel from "react-multi-carousel";
import img from "../../assets/img/project-img1.png";
import cameraImg from "../../assets/img/camera-img.jpg";
import socialMediaImg from "../../assets/img/social-media-img.jpg";
import designingImg from "../../assets/img/designing-img.jpg";
import { Wordcloud } from "../WordCloud";
import useScreenSize from "../../Hooks/getScreenSize";
import useInView from "../../Hooks/useInView";

const slides = [
  { image: cameraImg, text: "Photography", link: "/page1" },
  { image: socialMediaImg, text: "Social Media", link: "/page2" },
  { image: designingImg, text: "Design", link: "/page3" },
];

const words = [
  {
    text: "Film",
    value: 1,
    urlValue: "film",
    color: "gray",
  },
  {
    text: "Photography",
    value: 1,
    urlValue: "photography",
    color: "black",
  },
  {
    text: "Designing",
    value: 1,
    urlValue: "designing",
    color: "gray",
  },
  {
    text: "Packaging",
    value: 1,
    urlValue: "packaging",
    color: "gray",
  },
  {
    text: "Filmmaking",
    value: 1,
    urlValue: "filmmaking",
    color: "black",
  },
  {
    text: "Branding",
    value: 1,
    urlValue: "branding",
    color: "black",
  },
  {
    text: "Colour-Psychology",
    value: 1,
    urlValue: "colour_psychology",
    color: "black",
  },
  {
    text: "Play",
    value: 1,
    urlValue: "play",
    color: "gray",
  },
  {
    text: "Social media",
    value: 1,
    urlValue: "social_media",
    color: "black",
  },
  {
    text: "Doodle",
    value: 1,
    urlValue: "doodle",
    color: "gray",
  },
  {
    text: "Art & Artist",
    value: 1,
    urlValue: "art_artist",
    color: "black",
  },
  {
    text: "Sketch",
    value: 1,
    urlValue: "sketch",
    color: "black",
  },
  {
    text: "Paint",
    value: 1,
    urlValue: "paint",
    color: "gray",
  },
  {
    text: "Reels",
    value: 1,
    urlValue: "reels",
    color: "gray",
  },
  {
    text: "Video Editing",
    value: 1,
    urlValue: "video_editing",
    color: "gray",
  },
  {
    text: "Story writing",
    value: 1,
    urlValue: "story_writing",
    color: "black",
  },
  {
    text: "Copywriting",
    value: 1,
    urlValue: "copywriting",
    color: "gray",
  },
  {
    text: "Content creation",
    value: 1,
    urlValue: "content_creation",
    color: "black",
  },
  {
    text: "Art History",
    value: 1,
    urlValue: "art_history",
    color: "gray",
  },
  {
    text: "Advertising",
    value: 1,
    urlValue: "advertising",
    color: "gray",
  },
  {
    text: "Commercial Arts",
    value: 1,
    urlValue: "commercial_arts",
    color: "gray",
  },
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
      {/* <Wordcloud words={words} size={[screenWidth, screenHeight * 0.4]} /> */}
      {(isInView || onceInView) && (
        <div>
          {" "}
          <div
            className="animated-container"
            style={{
              padding: "1rem",
              marginBottom: "2rem",
            }}
          >
            <h2>A peek at my work</h2>
          </div>
          <div className="container wave-line">
            <div className="row">
              <div className="col-12">
                {/* <div className="wave-line"></div> */}

                <div  className="skill-bx wow zoomIn animated-container">
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
          </div>
        </div>
      )}

      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>

    // <div className="carousel-container">
    //   <div className="wave-line"></div>
    //   <div className="slide-container">
    //     {slides.map((slide, index) => (
    //       <div
    //         key={index}
    //         className="slide"
    //         onClick={() => handleSlideClick(slide.link)}
    //       >
    //         <img src={slide.image} alt={slide.text} className="slide-image" />
    //         <div className="slide-text">{slide.text}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default WaveCarousel;
