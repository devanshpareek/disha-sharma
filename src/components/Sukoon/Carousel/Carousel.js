import React from "react";
import "./Carousel.css"; // Import the CSS file for styling

const Carousel = ({ images, isThreeImageGrid }) => {
  return (
    <div className="sukoon-social-media-carousel-container">
      {isThreeImageGrid ? (
        <div className="sukoon-social-media-carousel-images">
          <div className="first-row">
            {images.slice(0, 2).map((image, index) => (
              <div className="sukoon-social-media-carousel-image">
                <img key={index} src={image} alt={`carousel-img-${index}`} />
              </div>
            ))}
          </div>
          <div className="second-row">
            <div className="sukoon-social-media-carousel-image">
              <img key={2} src={images[2]} alt={`carousel-img-${2}`} />
            </div>
          </div>
        </div>
      ) : (
        <div className="sukoon-social-media-carousel-images">
          {images.map((image, index) => (
            <div className="sukoon-social-media-carousel-image">
              <img key={index} src={image} alt={`carousel-img-${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
