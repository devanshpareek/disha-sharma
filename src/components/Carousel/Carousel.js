import React, { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import "./Carousel.css";


const Carousel = ({slides}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [springs, api] = useSprings(slides.length, (i) => ({
    x: (i - activeIndex) * 100,
    scale: i === activeIndex ? 1 : 0.8,
    display: "block",
  }));

  const updateSprings = (newIndex) => {
    api.start((i) => {
      if (i < newIndex - 1 || i > newIndex + 1) {
        return { display: "none" };
      }
      const x = (i - newIndex) * 100;
      const scale = i === newIndex ? 1 : 0.8;
      return { x, scale, display: "block" };
    });
  };

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > 50) {
        if (cancel) cancel();
        const newIndex =
          (activeIndex + (xDir > 0 ? -1 : 1) + slides.length) % slides.length;
        setActiveIndex(newIndex);
        updateSprings(newIndex);
      }

      api.start((i) => {
        if (i < activeIndex - 1 || i > activeIndex + 1) {
          return { display: "none" };
        }
        const x = (i - activeIndex) * 100 + (active ? mx : 0);
        const scale = active ? 1 - distance / 500 : i === activeIndex ? 1 : 0.8;
        return { x, scale, display: "block" };
      });
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % slides.length;
      setActiveIndex(newIndex);
      updateSprings(newIndex);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeIndex, api]);

  return (
    <div className="carousel">
      {springs.map(({ x, display, scale }, i) => (
        <animated.div
          {...bind()}
          key={i}
          className="carousel-slide"
          style={{
            display,
            transform: x.to((x) => `translate3d(${x}%, 0, 0)`),
            scale,
          }}
        >
          <img key={i} className={`carousel-image`} src={slides[i]}></img>
          {/* \{i + "this is my index"} */}
        </animated.div>
      ))}
    </div>
  );
};

export default Carousel;
