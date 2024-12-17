import React, { useEffect, useState } from "react";
import img1 from "../../../assets/work/Wolf-Fx/1-1.jpg";
import img2 from "../../../assets/work/Wolf-Fx/2-1.jpg";
import img31 from "../../../assets/work/Wolf-Fx/3-1.jpg";
import img32 from "../../../assets/work/Wolf-Fx/3-2.jpg";
import img33 from "../../../assets/work/Wolf-Fx/3-3.jpg";
import img34 from "../../../assets/work/Wolf-Fx/3-4.jpg";
import img41 from "../../../assets/work/Wolf-Fx/4-1.jpg";
import img42 from "../../../assets/work/Wolf-Fx/4-2.jpg";
import img43 from "../../../assets/work/Wolf-Fx/4-3.jpg";
import img51 from "../../../assets/work/Wolf-Fx/5.jpg";
import img52 from "../../../assets/work/Wolf-Fx/5-2.jpg";

import { photographyList } from "../Photography";
import { useNavigate } from "react-router-dom";

const TshirtPrinting = () => {
  const navigate = useNavigate();
  const [navHeight, setNavHeight] = useState(
    document.getElementById("project-navbar")?.getBoundingClientRect().height +
      25
  );
  useEffect(() => {
    setNavHeight(
      document.getElementById("project-navbar")?.getBoundingClientRect()
        .height + 25
    );
  }, [document.getElementById("project-navbar")]);

  return (
    <div
      style={{
        paddingTop: navHeight,
      }}
      className="work-page-wrapper tshirt-printing"
    >
      <div
        style={{
          marginTop: "-1.5rem",
          marginBottom: "1.5rem",
        }}
        className="photography-list"
      >
        <div
          className={"photography-list-item"}
          onClick={() => {
            navigate(`/skills/tshirt-designing`);
          }}
          style={{
            borderLeft: "2px solid gray",
          }}
        >
          Tshirt Designing
        </div>
      </div>
      <div className="photography">
        <div className="cover-photo">
          <img src={img1}></img>
        </div>
        <div className="cover-photo">
          <img src={img2}></img>
        </div>
        <div className="four-images-grid-wrapper">
          <div className="imageGrid">
            {[img31, img32, img33, img34].map((src, index) => (
              <div key={index} className="imageContainer">
                <img src={src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="photography">
        <div className="three-images-grid-wrapper">
          <div className="imageGrid">
            {[img41, img42, img43].map((src, index) => (
              <div key={index} className="imageContainer">
                <img src={src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="photography">
        <div className="two-images-grid-wrapper">
          <div className="imageGrid">
            {[img51, img52].map((src, index) => (
              <div key={index} className="imageContainer">
                <img src={src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtPrinting;
