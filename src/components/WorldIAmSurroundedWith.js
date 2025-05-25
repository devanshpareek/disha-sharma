import catPowImg from "../assets/img/cat-paw.png";
import flowerGirl from "../assets/img/flower-girl.png";
import illustration2 from "../assets/img/illustration2-img.png";
import illustration3 from "../assets/img/Illustration3-img.png";
import illustration4 from "../assets/img/newIllustration.PNG";
import scrollDown from "../assets/img/scroll-down.png";
import "react-multi-carousel/lib/styles.css";
import useInView from "../Hooks/useInView";
import { useEffect, useRef, useState } from "react";

export function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const WorldIAmSurroundedWith = () => {
  const isMobile = isMobileDevice();
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

  const slides = ["", flowerGirl, illustration2, illustration3, illustration4];
  const slidesText = [
    "World I am surrounded with!",
    "I am Disha, Content creator by profession, dancer by heart, and an Artist by soul.",
    "I like an escape from the world into my room plugging in my favourite music and painting, sketching and sometimes writing.",
    "Sometimes, I wish my eyes were camera. The world is so beautiful I want to capture it all and share the magic I see with everyone. But then I am glad I have my camera.",
    `I believe "Never stop looking for BEAUTY because when you find beauty, you find INSPIRATION." Losing myself in peace of nature, vastness of the sky.  A moment to simply be me, the world melts away.`,
  ];
  return (
    <section ref={setRef} className="skill smooth-scroll-section" id="myWorld">
      <div className="container about-me-container">
        <div>
          {slides.map((slide, index) => (
            <div>
              {index === 0 ? (
                <div className="my-world-wrapper my-world-wrapper--cover-page">
                  <div className="my-world-text"></div>
                </div>
              ) : index === 1 ? (
                <div
                  className={
                    isMobile
                      ? " my-world-wrapper-mobile" +
                        " my-world-wrapper-mobile--" +
                        index
                      : "my-world-wrapper" + " my-world-wrapper--" + index
                  }
                >
                  <div
                    style={{
                      ...(!isMobile && {
                        marginLeft: "15rem",
                      }),
                    }}
                    className={
                      isMobile
                        ? "my-world-wrapper-container-mobile"
                        : "my-world-wrapper-container"
                    }
                  >
                    <div>
                      <img src={slide}></img>
                    </div>
                    <div className="my-world-text">{slidesText[index]}</div>
                  </div>
                  <div
                    className={isMobile ? "cat-pow cat-pow--mobile" : "cat-pow"}
                  >
                    <div className="cat-pow-image">
                      <img src={catPowImg}></img>
                    </div>
                    <div className="cat-pow-text">
                      oops and also a cat mom for life...!
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className={
                      isMobile
                        ? " my-world-wrapper-mobile" +
                          " my-world-wrapper-mobile--" +
                          index
                        : "my-world-wrapper" + " my-world-wrapper--" + index
                    }
                  >
                    <div>
                      <img src={slide}></img>
                    </div>
                    <div className="my-world-text">{slidesText[index]}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

export default WorldIAmSurroundedWith;
