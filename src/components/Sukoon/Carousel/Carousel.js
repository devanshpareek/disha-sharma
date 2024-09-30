import React from "react";
import "./Carousel.css"; // Import the CSS file for styling

const Carousel = ({ images }) => {
  return (
    <div className="sukoon-social-media-carousel-container">
      <div className="sukoon-social-media-carousel-images">
        {images.map((image, index) => (
          <div className="sukoon-social-media-carousel-image">
            <img key={index} src={image} alt={`carousel-img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
